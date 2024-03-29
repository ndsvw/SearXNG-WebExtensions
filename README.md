<img title="SearXNG" alt="SearXNG" src="searxng-firefox.png" width="128" height="128" />

## What is this extension good for?

It allows setting a specific searXNG instance as your default search engine in Firefox.

## What is searXNG?

[SearXNG](https://github.com/searxng/searxng) is a free internet metasearch engine which aggregates results from various search services and databases. Users are neither tracked nor profiled.

## For which instances do extensions exist?

For some reliable instances (see https://searx.space/) that exist for a longer time and are somehow reliable (see https://github.com/ndsvw/SearXNG-Instances-Age#output).

- [Get the Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/searxng-searx-prvcy-eu) for [searx.fmac.xyz](https://searx.fmac.xyz/)
- [Get the Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/searxng-searx-be) for [searx.be](https://searx.be/)
- [Get the Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/searxng-search-mdosch-de) for [search.mdosch.de](https://search.mdosch.de/)
- [Get the Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/searxng-searx-prvcy-eu) for [searx.prvcy.eu](https://searx.prvcy.eu/)
- [Get the Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/searxng-searx-tuxcloud-net) for [searx.tuxcloud.net](https://searx.tuxcloud.net/)
- [Get the Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/searxng-searx-ru) for [searx.ru](https://searx.ru/)
- [Get the Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/searxng-northboot-xyz) for [northboot.xyz](https://northboot.xyz/)
- [Get the Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/searxng-divided-by-zero-eu) for [searx.divided-by-zero.eu](https://searx.divided-by-zero.eu/)
- [Get the Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/searxng-search-ononoki-org) for [search.ononoki.org](https://search.ononoki.org/)
- [Get the Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/searxng-search-bus-hit-me) for [search.bus-hit.me](https://search.bus-hit.me/)
- [Get the Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/searxng-searx-mha-fi) for [searx.mha.fi](https://searx.mha.fi/)
- [Get the Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/searxng-searx-namejeff-xyz) for [searx.namejeff.xyz](https://searx.namejeff.xyz/)
- [Get the Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/searxng-rabbit-company-com) for [search.rabbit-company.com](https://search.rabbit-company.com/)
- [Get the Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/searxng-search-rowie-at) for [search.rowie.at](https://search.rowie.at/)
- [Get the Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/searxng-searx-mastodontech-de) for [searx.mastodontech.de](https://searx.mastodontech.de/)
- [Get the Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/searxng-searx-dresden-network) for [searx.dresden.network](https://searx.dresden.network/)
- [Get the Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/searxng-xo-wtf) for [xo.wtf](https://xo.wtf/)
- [Get the Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/searxng-ericaftereric-top) for [searx.ericaftereric.top](https://searx.ericaftereric.top/)
- [Get the Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/searxng-searx-baczek-me) for [searx.baczek.me](https://searx.baczek.me/)
- [Get the Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/searxng-search-sapti-me) for [search.sapti.me](https://search.sapti.me/)
- [Get the Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/searxng-search-zzls-xyz) for [search.zzls.xyz](https://search.zzls.xyz/)

## Is this the OFFICIAL extension for instance XY?

No, the extensions have not been built by the instance owners themselves.
The extensions are built based on a common source code that allows generating Firefox extensions for searXNG quickly.

## Why not creating one single extension for all searXNG instances?

Because Firefox does not allow a dynamic search engine host that can be modified by the user.
It has to be static when the extension is built. 🤷🏻

## Does it work for Android, too?

No.
You need to do it manually on Firefox on Android...
[The Mozilla documentation](https://support.mozilla.org/en-US/kb/manage-my-default-search-engines-firefox-android) explains how to change the search engine

The "Search string URL" needs to be set to `{instance}/search?q=%s`, where `{instance}` needs to be replaced with the actual instance domain name, e.g. `searx.be/search?q=%s`.

The "Search suggestion API" field is optional.
If you want to set a value, please fill in `https://{instance}/autocompleter?q={searchTerms}`, where `{instance}` needs to be replaced with the actual instance domain name again.