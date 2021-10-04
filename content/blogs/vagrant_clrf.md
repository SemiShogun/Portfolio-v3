---
title: "Vagrant problem. Converting Unix text files to Dos"
description: "I stumbled upon a small problem converting Unix Text to Dos Text."
date: 2021-10-04
image: ../images/thumbnails/directory.png
categories: ["programming"]
---

# Vagrant problem. Converting Unix text files to Dos

## Storytime

While I was attending a web security workshop, I was required to git clone a repository with all the necessary resources for the workshop.

The git repository contained the files necessary for creating either a Django or Spring Boot Vagrant instance.

### Vagrant?
Vagrant is a scripting tool used for automating VMs. Think of it as docker, but instead of containers you're using virtual machines that will persist their data as long as the vagrant instances aren't destroyed.

I decided to create a Spring Boot instance. Once I created a running Spring Boot Vagrant instance, I realised something was amiss.

*The shell scripts for Vagrant didn't work properly.*

And the Postgresql Database wasn't created properly either. The database exists, but the relations, tables and data were simply non-existent!

Apparently the problem was that the files were committed through a Unix machine, which commits text files in a LF format.

I could theoretically use dos2unix for converting all Dos formatted files to Unix, but since the files are already executed at runtime, this method would be useless.

## How do I fix it?
*Warning: this only applies to Windows users*

All you need is just one command.

```
$ git config --global core.autocrlf false
```

This command will globally disable your local git environment from converting unix LF Files to Windows CRLF files.

Make sure your git repository is deleted and freshly cloned again.

Create the new Vagrant instances and voilà! Everything should work as intended now.

*I've tried replicating this on a self-repository basis by creating a .gitattributes file, but to no avail. If anyone manages to find a fix for this, please do tell me (I'll give you credit, of course)*

