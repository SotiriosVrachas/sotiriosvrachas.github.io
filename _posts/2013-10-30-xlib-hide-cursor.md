---
layout: post
title: "Hide the cursor with Xlib"
image: /blob/ShowHideMouseCursor.svg
tag: xlib
---
Did you ever needed to lock a computer but keep the content on the screen visible? Did you ever wised that you could secure your computer while watching a video? I needed to make sure that i could leave a video playing, or other visual content while the screen was locked.

<!-- more -->

Well this is the concept of the original xtrlock, a debian and ubuntu package that dates back to 1994. Unfortunately xtrlock dose not hide the mouse cursor, not only the cursor is still visible but it is replaced with a blue padlock. I find this obstructive, so i went to look at how to make the cursor transparent as well.

I fount a couple of solutions.
The first comes in the form of a [proposed patch](http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=571985), that enables the argument `--hide-cursor`.
I find two problems with it.
The first is passing arguments to a screen-saver. Screen-savers are usually called by other software that timeout on idle, not all of them support passing arguments.
The second issue was the implementation itself. The patch zero out the already loaded mask. Why load it in the first place?

The second approach is [Better-XTrLock
](https://github.com/jaseg/Better-XTrLock/tree/092a2e6b575ca39c258251fdbb504f4b6e0c9d7b) it is similar but instead of setting the masks pixel memory to 0 it sets all bits of `mask.bitmap` to `0x00` creating an invisibility cloak to hide the padlock underneath.
Obviously this is still a bloat for such a minimal software.

Based on the latest approach i took the latest source from debian and implemented a similar way to hide the cursor with xlib as [slock](http://git.suckless.org/slock/tree/slock.c) dose.

```c
  Cursor cursor;
  Pixmap csr;
  XColor xcolor;
  static char csr_bits[] = {0x00};

  csr= XCreateBitmapFromData(display,window,csr_bits,1,1);
  cursor= XCreatePixmapCursor(display,csr,csr,&xcolor,&xcolor,1,1); 
  XGrabPointer(display,window,False,(KeyPressMask|KeyReleaseMask)&0,
               GrabModeAsync,GrabModeAsync,None,
               cursor,CurrentTime);
```

Thare is [another aproache](http://www.linuxforums.org/forum/programming-scripting/59012-xlib-hide-mouse-pointer.html). This is alot more like what slock use.

The version of [xtrlock with hidden cursor](https://github.com/SotiriosVrachas/Better-XTrLock) is available for compilation at (https://github.com/SotiriosVrachas/Better-XTrLock).

