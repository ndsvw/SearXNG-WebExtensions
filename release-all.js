import * as fs from 'fs';
import { publishExtension } from 'publish-browser-extension';

// call: node release-all.js "<jwtIssuer>" "<jwtSecret>"
if(process.argv.length < 4) // first 2 are "node" and the name js file path
    throw new Error("Expected 2 args");

let jwtIssuer = process.argv[2];
let jwtSecret = process.argv[3];

console.log(jwtIssuer + " " + jwtSecret);


const extensionsListFilePath = "extensions-list.json";
const json = JSON.parse(fs.readFileSync(extensionsListFilePath, { encoding: 'utf8', flag: 'r' }));

for(let key of Object.keys(json)) {
    let value = json[key];
    let urlFileNameRepresentation = urlToDomainNameWithSubDomains(key);
    let zipPath = "output/" + urlFileNameRepresentation + ".zip";

    console.log("");
    console.log("key: " + key);
    console.log("zip path: " + zipPath);
    console.log("json value: " + JSON.stringify(value));

    if(!fs.existsSync(zipPath))
        throw new Error("File does not exist!");

    let results = await publishExtension({
        dryRun: false,
        firefox: {
          zip: zipPath,
          extensionId: value.addOnGuid,
          jwtIssuer: jwtIssuer,
          jwtSecret: jwtSecret,
          channel: 'listed',
        }
      });
      console.log(results);

    console.log("waiting some time to prevent getting blocked...");
    await sleep(35000);
}

function urlToDomainNameWithSubDomains(url) {
    // simplified for this use case
    return url.replace(/https?:\/\/(.*?)(?:\/|$)/, "$1");
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}