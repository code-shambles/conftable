# Conftable
Manage your conference talk proposals and speakers better.

## First Notes

This is currently under initial construction!

A monorepo is planned for client and server logic, and maybe some DB config.

## Purpose

It turned out that PaperCall as a tool to promote CFPs is great for its reach, but misses some features to manage submitted proposals (and submitters). This tool, Conftable, aims to cover some of these lacks:

* give an overview of speakers (submitters) and their details
* point out when speakers have submitted >1 proposals
* recognize speakers that submit regularly across former and current events
* provide insights about which topics are covered well and which are rare

## Goal features

To reach the above, the idea of implementation roughly looks like this:

* create events to assign submissions to (use their PaperCall ID)
* allow import of the downloadable submissions (JSON)
* give overview of tag usage (tells how well-covered a topic is)
* optional: have a way to enter your PaperCall user's auth token, so download and sync of submissions can be automated
* these entities/collections are essential: events, proposals, submitters, tags
