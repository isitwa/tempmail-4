import React,{useCallback,useEffect,useState}from "react";
import Image from "next/image";
import Link from "next/link";
import ads1 from "../../public/images/ads1.jpg";
import { deleteEmail } from "../../src/lib/email-service";
import { toast } from "sonner";

export default function Open_Mail_Four({ currmail, openmail,setcurrmail,select,refresh}) {

  const [hostName,setHostName]=useState()

  useEffect(() => {
    
    const host = localStorage.getItem("hostname")
    setHostName(host)
    // localStorage.setItem('hostname', host)
  },[])



  const closemail = useCallback(() => {
    openmail(false)
  })


  const deleteEmailHandler = useCallback(async () => {
    if (!select?.id || !currmail?.id) return;
    
    try {
      const result = await deleteEmail(select.id, currmail.id);
      if (result.status) {
        localStorage.setItem(`${hostName}_currentmail`, []);
        const mailx = localStorage.getItem(`${hostName}_currentmail`);
        setcurrmail(mailx);
        closemail();
        refresh();
        toast.success("Email deleted successfully!");
      } else {
        console.log('Failed to delete email:', result.error);
        toast.error("Failed to delete email");
      }
    } catch (err) {
      console.log('Error deleting email:', err);
      toast.error("Error deleting email");
    }
  }, [select?.id, currmail?.id, hostName, setcurrmail, closemail, refresh]);


  const downloadMailAsFile = (content, filename, fileType) => {
    const blob = new Blob([content], { type: fileType });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  const downloadAsText = () => {
    if (currmail) {
      const sender = currmail._from?.[0]?.personal || currmail.from || 'Unknown Sender';
      const email = currmail.from || 'No email address';
      const subject = currmail.subject || 'No subject';
      const body = currmail.body || currmail.html || 'No content';
      const date = currmail.date ? new Date(currmail.date).toLocaleString() : 'No date';
      
      const textData = `From: ${sender} <${email}>\nSubject: ${subject}\nDate: ${date}\n\n${body}`;
      downloadMailAsFile(textData, 'emailData.txt', 'text/plain');
      toast.success("Email downloaded as text file!");
    } else {
      toast.error("No email data to download");
    }
  };






  return (
    <>
      <div className="flex flex-col bg-white">
        <div className="flex justify-between items-center p-4 bg-zinc-900 gap-[15px]">
          <div onClick={closemail}  className="">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>

              <h4 className="text-white text-[14px] uppercase">Back To List</h4>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="text-white text-[14px]  " onClick={deleteEmailHandler}>Delete</button>
            <button className="text-white text-[14px] " onClick={downloadAsText}>Download</button>
          </div>
        </div>
        <div className="flex justify-between items-center p-4">
          <div className="flex gap-2">
            <div className=" w-[40px] h-[40px] rounded-full overflow-hidden">
            <img
                              src={`https://ui-avatars.com/api/?name=${currmail?.from || 'Unknown'}&background=random`}
                              alt="Avatar"
                              className="rounded-full w-12 h-12"
                            />
            </div>
            <div className=" flex flex-col">
              <h4 className="text-[14px] text-gray-900">{currmail?._from?.[0]?.personal || currmail?.from || 'Unknown Sender'}</h4>
              <p className="text-[12px] text-gray-900">{currmail?.from || 'No email address'}</p>
            </div>
          </div>

          <div className=" flex flex-col">
            <h4 className="text-[14px] text-gray-900">Date</h4>
            <p className="text-[12px] text-gray-900">{currmail?.date ? new Date(currmail.date).toLocaleString() : 'No date'}</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 p-4 box-content">
        <iframe
            srcDoc={currmail?.html || currmail?.body || '<p>No content available</p>'}
            title="mail"
            className="w-[100%] h-{700px}  no-scrollbar dark:text-white"
            id="mailFrame"
            height={500}
            
          
          />
        </div>
      </div>
    </>
  );
}
