import React, { useCallback, useEffect, useState } from 'react';
import { fetchEmails, fetchEmailDetails } from "../../src/lib/email-service";

export default function Mail_List_Four({ select, openmail, currmail }) {
  const [hostName, setHostName] = useState('');
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const host = localStorage.getItem("hostname");
    setHostName(host);
  }, []);

  const getMails = useCallback(async () => {
    if (!select?.id) return;
    
    setLoading(true);
    try {
      const result = await fetchEmails(select.id);
      if (result.status) {
        localStorage.setItem(hostName + '_send_mails', JSON.stringify(result.data));
        setEmails(result.data);
      } else {
        // Try to get cached emails from localStorage
        const cachedEmails = localStorage.getItem(hostName + '_send_mails');
        if (cachedEmails) {
          try {
            setEmails(JSON.parse(cachedEmails));
          } catch (e) {
            setEmails([]);
          }
        } else {
          setEmails([]);
        }
      }
    } catch (err) {
      setEmails([]);
    } finally {
      setLoading(false);
    }
  }, [select?.id, hostName]);

  const getMailInfo = useCallback(async (id) => {
    if (!select?.id) return;
    
    try {
      const result = await fetchEmailDetails(select.id, id);
      if (result.status) {
        localStorage.setItem(`${hostName}_currentmail`, JSON.stringify(result.data));
        currmail();
      } else {
        localStorage.setItem(`${hostName}_currentmail`, null);
        console.log('Failed to fetch email details:', result.error);
      }
    } catch (err) {
      localStorage.setItem(`${hostName}_currentmail`, null);
      console.log('Error fetching email details:', err);
    }
  }, [select?.id, hostName, currmail]);

  return (
    <>
      <div className="flex flex-col">
        <div className="grid grid-cols-12 gap-[15px] bg-zinc-900 justify-between p-4">
          <h4 className="text-white uppercase text-[13px] md:text-[16px] col-span-5 md:col-span-5">
            Sender
          </h4>
          <h4 className="text-white uppercase text-[13px] md:text-[16px] col-span-6 md:col-span-6">
            Subject
          </h4>
          <h4 className="text-white uppercase text-[13px] md:text-[16px] col-span-1 text-right">
            Open
          </h4>
        </div>

        {loading ? (
          <div className="flex flex-col bg-white shadow p-5 h-[500px]">
            <div className="m-auto">
              <div className="flex flex-col gap-3">
                <div className="mx-auto">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                </div>
                <h3 className="text-gray-600 text-[18px] text-center">
                  Loading emails...
                </h3>
              </div>
            </div>
          </div>
        ) : emails.length > 0 ? (
          <>
            {emails.map((mail, index) => (
              <div
                onClick={() => getMailInfo(mail.id)}
                key={mail.id || index}
                className="grid grid-cols-12 gap-[15px] py-4 pl-8 md:pl-10 pr-4 border-b border-gray-200 items-center bg-white hover:bg-gray-200 cursor-pointer"
              >
                <div className="flex flex-col col-span-5 md:col-span-5 relative group">
                  <div className="bg-green-600 w-[6px] h-[6px] rounded-full absolute top-2 -left-5"></div>
                  <h4 className="text-gray-900 text-[12px] truncate w-[100px] md:w-[110px] md:w-auto group-hover:underline underline-offset-2">
                    {mail.from}
                  </h4>
                </div>

                <div className="col-span-6 md:col-span-6">
                  <h4 className="text-gray-900 text-[14px] truncate overflow-hidden w-[120px] md:w-[300px] hover:underline underline-offset-2">
                    {mail.subject}
                  </h4>
                </div>

                <div className="col-span-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-[14px] text-gray-900 float-right md:mr-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="flex flex-col bg-white shadow p-5 h-[500px]">
            <div className="m-auto">
              <div className="flex flex-col gap-3">
                <div className="mx-auto">
                  <svg
                    width="92"
                    height="94"
                    viewBox="0 0 92 87"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26 54.37V38.9C26.003 37.125 26.9469 35.4846 28.48 34.59L43.48 25.84C45.027 24.9468 46.933 24.9468 48.48 25.84L63.48 34.59C65.0285 35.4745 65.9887 37.1167 66 38.9V54.37C66 57.1314 63.7614 59.37 61 59.37H31C28.2386 59.37 26 57.1314 26 54.37Z"
                      fill="#8C92A5"
                    ></path>
                    <path
                      d="M46 47.7L26.68 36.39C26.2325 37.1579 25.9978 38.0312 26 38.92V54.37C26 57.1314 28.2386 59.37 31 59.37H61C63.7614 59.37 66 57.1314 66 54.37V38.9C66.0022 38.0112 65.7675 37.1379 65.32 36.37L46 47.7Z"
                      fill="#CDCDD8"
                    ></path>
                    <path
                      d="M27.8999 58.27C28.7796 58.9758 29.8721 59.3634 30.9999 59.37H60.9999C63.7613 59.37 65.9999 57.1314 65.9999 54.37V38.9C65.9992 38.0287 65.768 37.1731 65.3299 36.42L27.8999 58.27Z"
                      fill="#E5E5F0"
                    ></path>
                    <path
                      className="emptyInboxRotation"
                      d="M77.8202 29.21L89.5402 25.21C89.9645 25.0678 90.4327 25.1942 90.7277 25.5307C91.0227 25.8673 91.0868 26.348 90.8902 26.75L87.0002 34.62C86.8709 34.8874 86.6407 35.0924 86.3602 35.19C86.0798 35.2806 85.7751 35.2591 85.5102 35.13L77.6502 31.26C77.2436 31.0643 76.9978 30.6401 77.0302 30.19C77.0677 29.7323 77.3808 29.3438 77.8202 29.21Z"
                      fill="#E5E5F0"
                    ></path>
                    <path
                      className="emptyInboxRotation"
                      d="M5.12012 40.75C6.36707 20.9791 21.5719 4.92744 41.2463 2.61179C60.9207 0.296147 79.4368 12.3789 85.2401 31.32"
                      stroke="#E5E5F0"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      className="emptyInboxRotation"
                      d="M14.18 57.79L2.46001 61.79C2.03313 61.9358 1.56046 61.8088 1.2642 61.4686C0.967927 61.1284 0.906981 60.6428 1.11001 60.24L5.00001 52.38C5.12933 52.1127 5.35954 51.9076 5.64001 51.81C5.92044 51.7194 6.22508 51.7409 6.49001 51.87L14.35 55.74C14.7224 55.9522 14.9394 56.36 14.9073 56.7874C14.8753 57.2149 14.5999 57.5857 14.2 57.74L14.18 57.79Z"
                      fill="#E5E5F0"
                    ></path>
                    <path
                      className="emptyInboxRotation"
                      d="M86.9998 45.8C85.9593 65.5282 70.9982 81.709 51.4118 84.2894C31.8254 86.8697 13.1841 75.1156 7.06982 56.33"
                      stroke="#E5E5F0"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-gray-600 text-[18px] text-center">
                  Your inbox is empty
                </h3>
                <p className="text-gray-500 text-[14px] text-center">
                  Waiting for incoming emails
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
