---
layout: post
published: true
title: Better Font Hinting in Linux
image: "http://upload.wikimedia.org/wikipedia/commons/0/05/Font-hinting-example.png"
---

Today i looked into system font rendering engines. What triggered my curiosity was how differently web fonts ware rendered in my system. After experimenting with [Font configurations](https://wiki.archlinux.org/index.php/Font_Configuration "Font configuration") from ArchWiki and [Subpixel-hinting and Font-smoothing](https://wiki.debian.org/Fonts#Subpixel-hinting_and_Font-smoothing "Subpixel-hinting and Font-smoothing") from Debian Wiki i was not satisfied. So i installed again Infinality. I've installed Infinality before trying to mimic the UI of ElementaryOS.
I follower hadrons123's instructions from [Debian User Forums](http://forums.debian.net/viewtopic.php?f=16&t=88545 "HOWTO install infinality font-settings for Debian - Debian User Forums"). In summary for Debian GNU/Linux amd64:

<pre>
wget http://dl.dropbox.com/u/106654446/infinality_public/fontconfig-infinality_1-1_all.deb
wget http://dl.dropbox.com/u/106654446/infinality_public/freetype-infinality_2.4.9-1_all.deb
wget http://dl.dropbox.com/u/106654446/infinality_public/libfreetype-infinality6_2.4.9-1_amd64.deb
sudo dpkg -i *.deb
sudo bash /etc/fonts/infinality/infctl.sh setstyle
</pre>
At this point you have choose the style of the font rendering. OS X looks to thick
and XP - 7 looks too thin. Linux is in between. I choose Linux.
Log out - Log in and all your apps should now have better hinted text except the UI elements (GNOME, XFCE, etc). You have to configure your Desktop Environment to full hinting, no autohinting, enable anti-aliasing, and RGB subpixel ordering unless your monitor is not portrait or is just different. Heres how to find the correct [Subpixel layout](http://www.lagom.nl/lcd-test/subpixel.php "Subpixel layout") for your monitor.

Now we can enjoy better UI text but most importantly we can see embedded web fonts in small sizes as they ware designed.