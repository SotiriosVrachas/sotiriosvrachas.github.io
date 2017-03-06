---
layout: post
published: false
title: ""
---

```
sudo vi /etc/NetworkManager/dispatcher.d/vpn
```

```
#!/bin/sh
VPN_NAME="vpn name"

status=$2
case $status in
  up|vpn-down)
   if ! [ nmcli con status id "$VPN_NAME" | grep -qs activated ]; then
     nmcli con up id "$VPN_NAME"
   fi
   ;;
  down)
    if [ nmcli con status id "$VPN_NAME" | grep -qs activated ] && [ nmcli nm | grep -qs disconnected ]; then
      nmcli con down id "$VPN_NAME"
    fi
    ;;
esac
```
