/**
 * OGAds Content Locker Integration
 * Custom implementation based on OGAds locker script
 * Reference: https://lockverify.org/cl/js/9vqd5r
 */

declare global {
  interface Window {
    ogads_locker_initialized?: boolean
    ogads_download_url?: string
  }
}

let iframecontents: string | false | undefined = undefined
let old_display: string | undefined = undefined
let redirectHandler: NodeJS.Timeout | null = null

/**
 * Load locker content
 */
function og_load(options?: Record<string, string>): Promise<void> {
  return new Promise((resolve, reject) => {
    // We don't need to load content via XHR anymore, we'll just set the iframe src
    iframecontents = "true" // Signal that we are ready
    ogEditBody()
    resolve()
  })
}

/**
 * Edit body to hide content while locker loads
 */
function ogEditBody() {
  const body = document.getElementsByTagName("body")[0]
  if (body === undefined || body === null) {
    setTimeout(ogEditBody, 100)
    return
  }

  const old_overflow = body.style.overflow
  old_display = body.style.display || ""
  // body.style.display = "none" // Don't hide body, just overlay

  ogMakeLocker()
}

/**
 * Create and show the locker iframe
 */
function ogMakeLocker() {
  const body = document.getElementsByTagName("body")[0]
  if (iframecontents === undefined) {
    setTimeout(ogMakeLocker, 100)
    return
  }

  if (body === undefined || body === null) return

  // body.style.display = old_display || ""

  if (iframecontents !== false) {
    // Remove existing iframe if any
    const existingIframe = document.getElementById("ogads_locker_iframe")
    if (existingIframe) {
      existingIframe.remove()
    }

    const iframe = document.createElement("iframe")
    iframe.name = "ogads_iframe"
    iframe.scrolling = "yes"
    iframe.setAttribute("frameborder", "0")
    iframe.style.border = "none"
    iframe.style.width = "100%"
    iframe.style.height = "100%"
    iframe.style.position = "fixed"
    iframe.style.top = "0"
    iframe.style.left = "0"
    iframe.style.zIndex = "2147483647" // Max z-index
    iframe.id = "ogads_locker_iframe"

    // Set the source directly
    iframe.src = "https://content-unlock.com/?0fdd58f"

    body.appendChild(iframe)

    // Setup unlock detection
    setupUnlockDetection()
  }
}

/**
 * Setup detection for when locker is unlocked
 */
function setupUnlockDetection() {
  // Clear any existing handler
  if (redirectHandler) {
    clearInterval(redirectHandler)
  }

  // Listen for completion message from iframe
  const messageHandler = (event: MessageEvent) => {
    // You might want to check event.origin here for security
    // if (event.origin !== "https://content-unlock.com") return;

    console.log("Received message from locker:", event.data);

    // Check for specific completion message if known, otherwise assume any message from locker might be relevant
    // For now, we'll accept "CPABuildComplete" or similar common signals, or just proceed if we get a specific signal
    // Adjust this based on what content-unlock.com actually sends
    if (event.data === "CPABuildComplete" || event.data === "offer_complete") {
      const downloadUrl = sessionStorage.getItem("ogads_download_url")
      if (downloadUrl) {
        sessionStorage.removeItem("ogads_download_url")
        window.removeEventListener("message", messageHandler)
        removeOGAdsLocker()
        window.location.href = downloadUrl
      }
    }
  }

  window.addEventListener("message", messageHandler)

  // Also keep the interval check just in case the iframe is removed manually
  redirectHandler = setInterval(() => {
    const iframe = document.getElementById("ogads_locker_iframe")
    const downloadUrl = sessionStorage.getItem("ogads_download_url")

    // Check if iframe was removed (user completed offer)
    if (!iframe && downloadUrl) {
      sessionStorage.removeItem("ogads_download_url")
      if (redirectHandler) {
        clearInterval(redirectHandler)
        redirectHandler = null
      }
      window.removeEventListener("message", messageHandler)

      // Small delay before redirect
      setTimeout(() => {
        window.location.href = downloadUrl
      }, 300)
    }
  }, 1000)

  // Clear after 10 minutes to prevent memory leaks
  setTimeout(() => {
    if (redirectHandler) {
      clearInterval(redirectHandler)
      redirectHandler = null
    }
    window.removeEventListener("message", messageHandler)
  }, 600000)
}

/**
 * Remove locker and restore page
 */
export function removeOGAdsLocker() {
  const iframe = document.getElementById("ogads_locker_iframe")
  if (iframe) {
    iframe.remove()
  }

  const body = document.getElementsByTagName("body")[0]
  if (body && old_display !== undefined) {
    body.style.display = old_display
  }

  if (redirectHandler) {
    clearInterval(redirectHandler)
    redirectHandler = null
  }

  iframecontents = undefined
  old_display = undefined
}

/**
 * Trigger the content locker
 * @param downloadUrl - The URL to redirect to after unlock
 * @param options - Additional options to pass to the locker
 */
export function triggerOGAdsLocker(
  downloadUrl: string,
  options?: { gameId?: string; appId?: string; title?: string }
) {
  if (typeof window === "undefined") {
    console.error("Window is not defined")
    return
  }

  console.log("OGAds locker triggered for:", downloadUrl, options)

  // Store the download URL in sessionStorage for post-unlock redirect
  sessionStorage.setItem("ogads_download_url", downloadUrl)
  window.ogads_download_url = downloadUrl

  // Prepare options for OGAds API
  const lockerOptions: Record<string, string> = {}
  if (options?.gameId) lockerOptions.gameId = options.gameId
  if (options?.appId) lockerOptions.appId = options.appId
  if (options?.title) lockerOptions.title = options.title

  // Load and show the locker
  og_load(lockerOptions).catch((error) => {
    console.error("Failed to load locker:", error)
    // If locker fails to load, redirect directly after delay
    setTimeout(() => {
      window.location.href = downloadUrl
    }, 1000)
  })
}

/**
 * Initialize OGAds locker (not needed with custom implementation, but kept for compatibility)
 */
export function initOGAdsLocker(): Promise<void> {
  return Promise.resolve()
}

/**
 * Get the stored download URL and clear it
 */
export function getStoredDownloadUrl(): string | null {
  if (typeof window === "undefined") return null
  const url = sessionStorage.getItem("ogads_download_url")
  sessionStorage.removeItem("ogads_download_url")
  return url
}
