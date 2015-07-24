---
title: "Universal Naming Scheme"
layout: post
image: http://www.planetsforkids.org/upload/-moon-a.jpg
---
Work in progress Naming Scheme

<!-- more -->

##DRAFT

http://www.faqs.org/rfcs/rfc1178.html
http://en.wikipedia.org/wiki/Naming_scheme
##Fixed
For earth location is the nearest [airports IATA code](http://en.wikipedia.org/wiki/List_of_airports_by_IATA_code). It is a three character code and in location ware more than one airport exist in the same city a multi-airport code is provided like "LON" for London, UK. In places like London the multi-code is used except if the system is located/related to the airport.
function.location.domain.name
For other [astronomical objects](http://en.wikipedia.org/wiki/Lists_of_astronomical_objects) similar naming shall be used when it becomes relevant.
function.astronomicalobjectlocation.domain.name
pv stands for Photo-voltaic
pv1 and pv2 are  Photo-voltaic inverters and battery chargers
pv1.moon1 and pv1.moon2 might be the same inverter with two ip addresses
route-able via two different upstream links or two inverters ???

```
pv.moon.example.com
pv1.moon1.example.com
pv2.moon1.example.com
pv1.moon2.example.com
pv2.moon2.example.com
```
moon1 and moon2 are two separate sites

##Mobile
device.domain.name
and local
device.location.domain.name
###conflict resolution
moon ns moon1
moon ns moon2

#################

pv.moon1 ns pv1.moon1
pv.moon1 ns pv2.moon1

pv.moon2 ns pv1.moon2
pv.moon2 ns pv2.moon2

so pv.moon might return any pv address

pv1.moon might return any of pv1 address

hostname must be unique domain wide exept if it is desirable to connect to any of the host in a round robin fashion

eg.
lon ns lon1
lon ns lon2

so ptr1.lon might return a printer from either location, where if reduntancy is not an ojective might be a problem


