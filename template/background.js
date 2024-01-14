let openUrl = async () => {
    await browser.tabs.create({
        active: true,
        url: "https://{{INSTANCE.DOMAINNAME}}/"
    })
};

browser.browserAction.onClicked.addListener(async () => {
    await openUrl();
});