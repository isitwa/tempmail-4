// Email service for managing temporary email accounts
import { generateHumanLikeEmail, generateProfessionalEmail, generateCasualEmail } from './name-generator'

// Generate a unique site key based on the current domain
export function getSiteKey() {
  if (typeof window === 'undefined') return 'tempmail-default'
  
  const hostname = window.location.hostname
  
  // Create a unique key based on hostname only (not pathname)
  // This ensures the same key is used across all pages of the site
  const siteKey = `tempmail-${hostname}`.replace(/[^a-zA-Z0-9-]/g, '-')
  return siteKey
}

// Generate a unique site key for 5-minute emails
export function getFiveMinSiteKey() {
  if (typeof window === 'undefined') return 'tempmail-5min-default'
  
  const hostname = window.location.hostname
  
  // Create a unique key for 5-minute emails
  const siteKey = `tempmail-5min-${hostname}`.replace(/[^a-zA-Z0-9-]/g, '-')
  return siteKey
}

// Generate a strong password
export function generateStrongPassword() {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numbers = '0123456789'
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?'
  
  let password = ''
  
  // Ensure at least one character from each category
  password += lowercase[Math.floor(Math.random() * lowercase.length)]
  password += uppercase[Math.floor(Math.random() * uppercase.length)]
  password += numbers[Math.floor(Math.random() * numbers.length)]
  password += symbols[Math.floor(Math.random() * symbols.length)]
  
  // Fill the rest with random characters
  const allChars = lowercase + uppercase + numbers + symbols
  for (let i = 4; i < 12; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)]
  }
  
  // Shuffle the password
  return password.split('').sort(() => Math.random() - 0.5).join('')
}

// Load domains from API
export async function loadDomains() {
  try {
    const response = await fetch('/api/domains/site-domains')
    const result = await response.json()
    
    if (result.success) {
      return result.data.domains || result.data // Handle both formats
    } else {
      console.warn('Failed to load domains from API, using fallback domains:', result.error)
      // Return fallback domains when API fails
      return [
        { id: 1, name: 'sendbun.com', accounts: 0, total_emails: '0', memory: '0' },
        { id: 2, name: 'mailbun.cc', accounts: 0, total_emails: '0', memory: '0' },
        { id: 3, name: 'tempmail.org', accounts: 0, total_emails: '0', memory: '0' }
      ]
    }
  } catch (error) {
    console.error('Error loading domains:', error)
    console.warn('Using fallback domains due to API error')
    // Return fallback domains when API is completely unavailable
    return [
      { id: 1, name: 'sendbun.com', accounts: 0, total_emails: '0', memory: '0' },
      { id: 2, name: 'mailbun.cc', accounts: 0, total_emails: '0', memory: '0' },
      { id: 3, name: 'tempmail.org', accounts: 0, total_emails: '0', memory: '0' }
    ]
  }
}

// Create email account
export async function createEmailAccount(email, password, is5Min = false) {
  try {
    const response = await fetch('/api/accounts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    
    const result = await response.json()
    
    if (result.success) {
      // Handle the actual API response structure
      const apiData = result.data
      const now = new Date()
      const expiresAt = is5Min ? new Date(now.getTime() + 5 * 60 * 1000).toISOString() : undefined
      
      return {
        id: apiData.id?.toString() || Date.now().toString(),
        email: apiData.email || email,
        password,
        created_at: now.toISOString(),
        domain_id: apiData.domain_id || '',
        expires_at: expiresAt,
        is_5min: is5Min
      }
    } else {
      // If API fails, create a mock account for demo purposes
      console.warn('API failed, creating mock account:', result.error)
      const now = new Date()
      const expiresAt = is5Min ? new Date(now.getTime() + 5 * 60 * 1000).toISOString() : undefined
      
      return {
        id: Date.now().toString(),
        email: email,
        password,
        created_at: now.toISOString(),
        domain_id: 'mock',
        expires_at: expiresAt,
        is_5min: is5Min
      }
    }
  } catch (error) {
    console.error('Error creating email account:', error)
    // Create a mock account when API is completely unavailable
    console.warn('Creating mock account due to API error')
    const now = new Date()
    const expiresAt = is5Min ? new Date(now.getTime() + 5 * 60 * 1000).toISOString() : undefined
    
    return {
      id: Date.now().toString(),
      email: email,
      password,
      created_at: now.toISOString(),
      domain_id: 'mock',
      expires_at: expiresAt,
      is_5min: is5Min
    }
  }
}

// Delete email account
export async function deleteEmailAccount(accountId) {
  try {
    const response = await fetch(`/api/accounts/${accountId}`, {
      method: 'DELETE'
    })
    
    const result = await response.json()
    
    if (result.success) {
      return true
    } else {
      console.warn('Failed to delete account via API:', result.error)
      return true // Return true for mock accounts
    }
  } catch (error) {
    console.error('Error deleting email account:', error)
    return true // Return true for mock accounts
  }
}

// LocalStorage management for regular emails
export function saveEmailData(data) {
  if (typeof window === 'undefined') return
  
  const siteKey = getSiteKey()
  localStorage.setItem(siteKey, JSON.stringify(data))
}

export function loadEmailData() {
  if (typeof window === 'undefined') return null
  
  const siteKey = getSiteKey()
  const data = localStorage.getItem(siteKey)
  
  if (data) {
    try {
      return JSON.parse(data)
    } catch (error) {
      console.error('Error parsing localStorage data:', error)
      return null
    }
  }
  
  return null
}

export function clearEmailData() {
  if (typeof window === 'undefined') return
  
  const siteKey = getSiteKey()
  localStorage.removeItem(siteKey)
}

// LocalStorage management for 5-minute emails (separate storage)
export function saveFiveMinEmailData(data) {
  if (typeof window === 'undefined') return
  
  const siteKey = getFiveMinSiteKey()
  localStorage.setItem(siteKey, JSON.stringify(data))
}

export function loadFiveMinEmailData() {
  if (typeof window === 'undefined') return null
  
  const siteKey = getFiveMinSiteKey()
  const data = localStorage.getItem(siteKey)
  
  if (data) {
    try {
      return JSON.parse(data)
    } catch (error) {
      console.error('Error parsing 5-min localStorage data:', error)
      return null
    }
  }
  
  return null
}

export function clearFiveMinEmailData() {
  if (typeof window === 'undefined') return
  
  const siteKey = getFiveMinSiteKey()
  localStorage.removeItem(siteKey)
}

export function isAccountExpired(account) {
  if (!account || !account.expires_at) return false
  return new Date(account.expires_at) < new Date()
}

export function getTimeRemaining(account) {
  if (!account || !account.expires_at) return 0
  return Math.max(0, new Date(account.expires_at) - new Date())
}

export async function initializeEmailAccount() {
  const domains = await loadDomains()
  const domain = domains[0]?.name || 'sendbun.com'
  const email = generateHumanLikeEmail() + '@' + domain
  const password = generateStrongPassword()
  return createEmailAccount(email, password, false)
}

export async function initialize5MinEmailAccount() {
  const domains = await loadDomains()
  const domain = domains[0]?.name || 'sendbun.com'
  const email = generateHumanLikeEmail() + '@' + domain
  const password = generateStrongPassword()
  return createEmailAccount(email, password, true)
}

export async function cleanupExpiredAccounts() {
  // This would contain logic to clean up expired accounts if needed
}

export async function cleanupExpired5MinAccounts() {
  // This would contain logic to clean up expired 5-min accounts if needed
}

export function generateProfessionalEmailAccount(domain) {
  const email = generateProfessionalEmail() + '@' + domain
  const password = generateStrongPassword()
  return { email, password }
}

export function generateCasualEmailAccount(domain) {
  const email = generateCasualEmail() + '@' + domain
  const password = generateStrongPassword()
  return { email, password }
}

// Fetch emails for an account
export async function fetchEmails(accountId, page = 1, folder = 'inbox,spam') {
  try {
    const response = await fetch(`/api/emails?emailAccountId=${accountId}&page=${page}&folder=${folder}`);
    const result = await response.json();
    
    if (result.success) {
      return {
        status: true,
        data: result.data.data || result.data
      };
    } else {
      console.warn('Failed to fetch emails:', result.error);
      return {
        status: false,
        error: result.error
      };
    }
  } catch (error) {
    console.error('Error fetching emails:', error);
    return {
      status: false,
      error: 'Failed to fetch emails'
    };
  }
}

// Get individual email details
export async function fetchEmailDetails(accountId, messageId) {
  try {
    const response = await fetch(`/api/emails/${accountId}/${messageId}`);
    const result = await response.json();
    
    if (result.success) {
      return {
        status: true,
        data: result.data.message || result.data.data || result.data
      };
    } else {
      console.warn('Failed to fetch email details:', result.error);
      return {
        status: false,
        error: result.error
      };
    }
  } catch (error) {
    console.error('Error fetching email details:', error);
    return {
      status: false,
      error: 'Failed to fetch email details'
    };
  }
}

// Delete an email
export async function deleteEmail(accountId, messageId) {
  try {
    const response = await fetch(`/api/emails/${accountId}/${messageId}/delete`, {
      method: 'DELETE'
    });
    const result = await response.json();
    
    if (result.success) {
      return {
        status: true,
        message: result.message
      };
    } else {
      console.warn('Failed to delete email:', result.error);
      return {
        status: false,
        error: result.error
      };
    }
  } catch (error) {
    console.error('Error deleting email:', error);
    return {
      status: false,
      error: 'Failed to delete email'
    };
  }
} 