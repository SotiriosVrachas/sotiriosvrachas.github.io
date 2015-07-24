---
layout: post
title: Boot from Android
image: "http://androidpanel.com/wp-content/uploads/2013/09/Android.jpg"
published: true
---
Draft boot from Android

<!-- more -->

##Hybrid ISO
If you want to boot from a Hybrid ISO like debian net install
##Android 2.3
```
echo /sdcard/debian-7.2.0-amd64-netinst.iso > /sys/devices/platform/usb_mass_storage/lun0/file
echo 1 > /sys/devices/virtual/usb_composite/usb_mass_storage/enable
```
```
echo 0 > /sys/devices/virtual/usb_composite/usb_mass_storage/enable
echo "" > /sys/devices/platform/usb_mass_storage/lun0/file
```
##Android 4
```
echo /sdcard/debian-7.2.0-amd64-netinst.iso > /sys/devices/platform/*/gadget/lun0/file
echo 1 > /sys/devices/virtual/usb_composite/usb_mass_storage/enable
```
```
echo 0 > /sys/devices/virtual/usb_composite/usb_mass_storage/enable
echo "" > /sys/devices/platform/*/gadget/lun0/file
```
##Non hybrid iso
```
dd if=/dev/zero of=image.img
fdisk
mkfs.vfat
```
