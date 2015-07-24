---
layout: post
title: "Watch Bloomberg with VLC"
tags: bloomberg vlc
image: /blob/bloomberg-vlc.svg
---
In general i don't watch TV, i have a lot of reasons not to do so, and content is one of those. But Sometimes in the morning when i want to feed my brain instead of hackers news and stock prices from the web which requires my attention on the screen i prefer Bloomberg TV, so i can move freely. Unfortunately their web viewing require flash to work. After some investigation i ended up with this
##*nix
it requires rtmpdump which is in the of many distros including Debian
```
sudo aptitude install rtmpdump
```
##Windows
Thare is also a [Windows build of rtmpdump](http://rtmpdump.mplayerhq.hu/download/rtmpdump-2.4-git-010913-windows.zip) .
You will have to unzip it and copy rtmpdump.exe to your `C:\Windows\System32` Folder.

##The Magic
open a terminal and copy past the folowing (one line)

```bash
rtmpdump -v -r rtmpt://cp116697.live.edgefcs.net:80/live/x0dDdlNTrs64I5H-29bfEFu4qeIira5r_640_360_500@73162 -W http://cdn.gotraffic.net/projector/latest/BloombergPlayer.swf -p http://www.bloomberg.com/tv/ | vlc -
```

##Other Streams
The command points to the European stream, you can change it, at the time of writing the live stream was off line which is i think where only live news broadcast, but i am not sure about their programing.

Their are many different rtmpt links with different content and quality, and some times they are changing. Fortunately they are printed in the browsers console when you don't have flash as errors. You can visit http://www.bloomberg.com/tv/ or the other streams (/tv/asia, /live-stream/, /tv/europe) and look at your browser console for the stream addresses.

For your convenience:

**U.S.:**
* `rtmpt://cp116697.live.edgefcs.net:80/live/BnazlkNDpCIcD-QkfyZCQKlRiiFnVa5I_640_360_1000@18679`
* `rtmpt://cp116697.live.edgefcs.net:80/live/BnazlkNDpCIcD-QkfyZCQKlRiiFnVa5I_640_360_700@18679`
* `rtmpt://cp116697.live.edgefcs.net:80/live/BnazlkNDpCIcD-QkfyZCQKlRiiFnVa5I_640_360_440@18679`
* `rtmpt://cp116697.live.edgefcs.net:80/live/BnazlkNDpCIcD-QkfyZCQKlRiiFnVa5I_320_180_240@18679`

**Europe:**
* `rtmpt://cp116697.live.edgefcs.net:80/live/x0dDdlNTrs64I5H-29bfEFu4qeIira5r_640_360_500@73162`

**Asia:**
* `rtmpt://cp116697.live.edgefcs.net:80/live/w4dTdlNToKUvtqJ1WMDu5IuNP9as1iF0_640_360_500@73163`
* `rtmpt://cp116697.live.edgefcs.net:80/live/w4dTdlNToKUvtqJ1WMDu5IuNP9as1iF0_640_360_440@73163`
* `rtmpt://cp116697.live.edgefcs.net:80/live/w4dTdlNToKUvtqJ1WMDu5IuNP9as1iF0_320_180_240@73163`

**Live Event:**
* `rtmpt://cp116697.live.edgefcs.net:80/live/d4djdlNTp9RsC5puRTQdXZanlGOm0d8Q_640_360_1000@73166 `
* `rtmpt://cp116697.live.edgefcs.net:80/live/d4djdlNTp9RsC5puRTQdXZanlGOm0d8Q_640_360_700@73166`
* `rtmpt://cp116697.live.edgefcs.net:80/live/d4djdlNTp9RsC5puRTQdXZanlGOm0d8Q_640_360_440@73166`
* `rtmpt://cp116697.live.edgefcs.net:80/live/d4djdlNTp9RsC5puRTQdXZanlGOm0d8Q_320_180_240@73166`

##Geeklish
In the command their is also the URL of the swf file necessary for the hashing process. You might have to add `-p http://www.bloomberg.com/tv/` to the `rtmpdump` as a flag in case they start blocking client without source address. In the end you pipe the stream to vlc and thats it.
