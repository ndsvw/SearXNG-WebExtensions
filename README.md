![searXNG WebExtensions](searx-ff.png)

## What is this extension good for?

It allows setting a specific searXNG instance as your default search engine in Firefox.

## What is searXNG?

[SearXNG](https://github.com/searxng/searxng) is a free internet metasearch engine which aggregates results from various search services and databases. Users are neither tracked nor profiled.

## For which instances do extensions exist?

For some reliable instances (see https://searx.space/) that exist for a longer time and are somehow reliable (see https://github.com/ndsvw/SearXNG-Instances-Age#output).

## Is this the OFFICIAL extension for instance XY?

No. The extension(s) is/are built based on a common source code that allows generating Firefox extensions for searXNG quickly.

## Why not creating one single extension for all searXNG instances?

Because Firefox does not allow a dynamic search engine host that can be modified by the user.
It has to be static when the extension is built. 🤷🏻

## Does it work in Android, too?

No.
You need to do it manually on Firefox on Android...
[The Mozilla documentation](https://support.mozilla.org/en-US/kb/manage-my-default-search-engines-firefox-android) explains how to change the search engine

The "Search string URL" needs to be set to `{instance}/search?q=%s`, where `{instance}` needs to be replaced with the actual instance domain name, e.g. `searx.be/search?q=%s`.

The "Search suggestion API" field is optional.
If you want to set a value, please fill in `https://{instance}/autocompleter?q={searchTerms}`, where `{instance}` needs to be replaced with the actual instance domain name again.