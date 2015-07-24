---
layout: post
title: "Debian verbal notifications (proof-of-concept)"
image: http://www.lifl.fr/~beaufils/logos/logo-debian-text.svg
---
#Debian verbal notifications (proof-of-concept)
I wanted to see how difficult would be sent desktop notifications to festival, a text to speech software. It turns out it was not that difficult.

I used [SiND -- Simple Notification Daemon](https://github.com/htylo/simplenotifydaemon) to print the desktop notifications to stdout and then pipe them to festival since festival supports pipes.

```
git clone https://github.com/htylo/simplenotifydaemon.git
cd simplenotifydaemon
make
mkfifi festival-fifo
chmod +x sind
```

If you don't have festival installed install it

```
sudo aptitude install festival
```

you can test festival with

```
festival -b "(intro)"
```

if you hear the introduction you are good to go

for `sind` to work you need to kill any other notify deamon
for xfce

```
killall xfce4-notifyd
``` 

and finally 

```
festival --pipe festival-fifo &
./sind -d -f '(SayText "%s %b")' > festival-fifo &
```

you can test  it with

```
notify-send "Test Title" "Test body"
```

If you find that the notifications are too long, or too detailed remove the body from the sind output

```
./sind -d -f '(SayText "%s")' > festival-fifo
``` 

Keep in mind that this is not the best method, it would be better to use festival in server mode or the festival API for the creation of a software tool. Some times festival becomes unresponsive.
