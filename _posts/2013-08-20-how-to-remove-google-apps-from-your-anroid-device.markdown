---
layout: post
title: "How To remove Google Apps from your Anroid Device"
date: 2013-08-20 21:20
comments: true
categories: Android
image: https://upload.wikimedia.org/wikipedia/commons/0/0d/Google_Play_logo.svg
---
You will need:

* Rooted Android Device
* Instaled Superuser
* Terminal Emulator
* The latest [GappsRemover](/blob/gappsremover-1.2-20130814.zip)
  
<!-- more -->

## Short Version
Download the latest [GappsRemover](/blob/gappsremover-1.2-20130814.zip)  
Extract the content of the zip in you SD Card's root.  
Run in device terminal:

```bash
su
cd /sdcard/gappsremover
sh fire.sh
```

Factory Reset Device

## Long version
### Step 1:
Download the latest [GappsRemover](http://hektateam.pl/~ciddeamonpl/Android/GappsRemover/) if you havent already.

### Step 2:
Unount the SD Card and mount it to the pc. (Or with the SD Card/partition mounted on the divice, conect the divice via USB to the Computer and "Turn On USB Storage" on the device.)

### Step 3:
Extract the content of the zip in you SD Card.  
You sound have a directory called "gappsremover" with out the quotemarks in the root of your SD Card.

### Step 4:
Edject the SD Card.  
Mount it to the device. ("Turn Off USB Storage" on the device.)

### Step 5:
Open the Terminal.  
Become superuser by typing in the terminal:

```
su
```

and press the return/Enter. If asked press allow.  
Now type:

```
cd /sdcard/gappsremover
```

enter, and then

```
sh fire.sh
```

### Step 6:
Navigate to Setting -> Backup & reset -> Factory data reset  
and press the Reset button
