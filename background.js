async function recordNavigation(details) {
    if (details.frameId !== 0) return;
    if (!details.url.startsWith("http")) return;
    const parsed = new URL(details.url);
    const hostname = parsed.hostname.startsWith("www.")
        ? parsed.hostname
        : "www." + parsed.hostname;
    const { blocklist = [] } = await browser.storage.local.get("blocklist");
    if (blocklist.includes(hostname)) {
        browser.tabs.update(details.tabId, {
            url: browser.runtime.getURL("blocked.html")
        });
    }
    console.log("went to ", details.url, "using", details.transitionType);
}
browser.webNavigation.onCommitted.addListener(recordNavigation);
browser.webNavigation.onHistoryStateUpdated.addListener(recordNavigation);
//AHHH THIS IS PMO