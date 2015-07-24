---
layout: post
published: false
title: "OpenWRT USB "
---

opkg update
opkg install kmod-usb-uhci kmod-usb2 kmod-usb-storage block-mount kmod-fs-ext4
insmod usbcore
insmod uhci
insmod ehci-hcd
mount /dev/sda  /mnt/
tar -C /overlay -cvf - . | tar -C /mnt -xf -
sync
umount /mnt

uci export fstab -n | grep mount
uci rename fstab.cfg044d78=overlay


uci set fstab.overlay.target=/overlay
uci set fstab.overlay.device=/dev/sda
uci set fstab.overlay.enabled=1
uci set fstab.overlay.enabled_fsck=1
uci set fstab.overlay.is_rootfs=1
uci commit fstab.overlay

reboot