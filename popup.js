// Initialize button
const copyButton = document.getElementById('copy-button');

// When the button is clicked...
copyButton.addEventListener('click', async () => {
    console.info("Clicked on the button")

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const tabInfo = await chrome.tabs.get(tab.id);
    
    const url = tabInfo.url;
    const title = tabInfo.title;
    const markdownLink = `[${title}](${url})`;

    console.info("Tab info aquired: ", url, title)

    navigator.clipboard.writeText(markdownLink).then(() => {
        console.info("Markdown link copied to clipboard! ", markdownLink);
    }).catch((error) => {
        console.error("Clipboard write failed:", error);
    });

});
