import * as fs from 'fs';

const json = JSON.parse(fs.readFileSync("extensions-list.json", { encoding: 'utf8', flag: 'r' }));
let keys = Object.keys(json);

for(let instanceUrl of keys) {
    let addOnUrlName = json[instanceUrl].addOnUrlName;
    let domainNameWithSubDomains = urlToDomainNameWithSubDomains(instanceUrl);
    console.log("- [Get the Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/" + addOnUrlName + ") for [" + domainNameWithSubDomains + "](" + instanceUrl + ")");
}

function urlToDomainNameWithSubDomains(url) {
    // simplified for this use case
    return url.replace(/https?:\/\/(.*?)(?:\/|$)/, "$1");
}