---
layout: post
title: "AGPL and Software As A Sevice"
date: 2013-08-19 05:29
tags: agpl saas
image: /blob/agpl.svg
---
How does Automattic run wordpress.com? They don't have to release it because it is over a network. But the work you do for the client as it the templates and plugins legally should be license compatible, and distributed to the client, so he can make unlimited copies of it. Thats on GPL by its own.

<!-- more -->

**Q: What's the differences with the GPLv3?**

**A:** It simple means that someone can't make a derivative Software As A Service without releasing the source code.

**Q: Isn't that forbidden under the GPLv3 anyway?**

**A:** No
> "Each version differs from the version of the GNU GPL on which it is based in having an additional provision addressing use of software over a computer network. The additional provision requires that the complete source code be made available to any network user of the AGPL-licensed work, typically a Web application."<small>
[https://en.wikipedia.org/wiki/Affero_General_Public_License](https://en.wikipedia.org/wiki/Affero_General_Public_License)
</small>

**Q: I imagine if they wanted to do a hosted service, they'd have to then use the core of goblin and built the service solution on top of that via an API or Something. The API would have to be open, but anything that hooks into that is not necessarily effected?**

**A:** Maybe,
> "Using separate processes can circumvent the (A)GPL, but this is murky ground. If your end application depends on the external process, such that it wouldn't function properly without it, then it would be considered a derived work of the AGPL software."<small>
[http://programmers.stackexchange.com/questions/107883/agpl-what-you-can-do-and-what-you-cant](http://programmers.stackexchange.com/questions/107883/agpl-what-you-can-do-and-what-you-cant)
</small>

**Q: So any code that even touches it via an API or something, would have to be released for openly just because part of the application was released under AGPL?**

**A:** It can be release as GPLv3, but can't be closed source, which is the same for GPL any way.
> "GPLv3 and AGPLv3 each include clauses (in section 13 of each license) that together achieve a form of mutual compatibility for the two licenses. These clauses explicitly allow the "conveying" of a work formed by linking code licensed under the one license against code licensed under the other license, despite the licenses otherwise not allowing relicensing under the terms of each other. In this way, the copyleft of each license is relaxed to allow distribution of such combinations."<small>
[Wikipedia](https://en.wikipedia.org/wiki/Affero_General_Public_License)
</small>

It was a loophole with GPL that many have exploited to not released the source because it was served over a network.

**Q: Would this apply to agencies that use it as well? So if you install an AGPL CMS on your server to serve a client's website, does the work you do for you client have to carry the same license as well?**

**A:** It could be under GPL, the same as Wordpress, Joomla!, etc.

**Q: Then how does Automattic run wordpress.com?**

**A:** They don't have to release it because it is over a network. But the work you do for the client as it the templates and plugins legally should be license compatible, and distributed to the client, so he can make unlimited copies of it. Thats on GPL by its own.

**Q: What if wordpress.com just hosted the same released version of wordpress that everyone can download, would it still have to release the code that allows you to sign up and host your own? even if that's just an installer script of some sort? because now they offer a different version of Wordpress to each person who signs up**

**A:** If any part was AGPL licenced yes, if not, no.

**Q: How does a website like 'themeforest.com' work then? They sell wordpress themes.**

**A:** http://thenextweb.com/insider/2013/01/23/wordpress-org-bans-themeforest-authors-from-participating-in-official-wordcamp-gatherings/

**Q: So, is installing Wordpress on IIS require IIS to be free? Is installing an AGPL program on a proprietary server illegal?**

**A:** No, unless it was distributed with ISS, and the ventor didn't obtain permission from the copyright holders.
