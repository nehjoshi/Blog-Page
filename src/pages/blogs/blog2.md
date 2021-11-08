---
title: Web Vulnerabilites Part 3 Node.JS
description: An amazing blog to read all about vulnerabilties of Node.JS
id: 2
date: 2nd November, 2021
actualDate: "2021-11-02"
category: Web dev
slug: web-vulnerabilities-part3-nodejs
thumb: "../../images/node-logo.png"
---

**Developers and Web Enthusiasts, welcome to this four-part blog series on Web Vulnerabilities and how to secure them! We’ll be exploring four major web technologies (that you probably use every day unknowingly), and we’ll see how these can become prone to attacks. We kick off this series with… Node.js!**  
<br />

## Introduction
JavaScript is a beautiful language. Over the years, JavaScript has evolved to become the most popular and the most widely-used language for Web Development. From creating and executing amazing, stylish animations for the UI on the frontend, while also maintaining a safe and secure backend, JavaScript will undoubtedly remain on top for a very long time. Today, we look into a very important JavaScript runtime environment: Node.js which has gained immense popularity for backend Web Development.  
<br />

## What is Node.JS?
Some call it a framework, some call it a library, some say it’s a language. Let’s get this straight first, Node.js is simply a runtime environment to run JavaScript outside of a browser. The code that we usually write within the <> </>tags in HTML is interpreted in the browser.
However, when programming the backend of a web application, we cannot allow this code to run inside the browser. As the backend part contains highly sensitive and delicate information, running it on the browser would make it prone to attacks. And that’s why we use Node JS. Now that we have the basics out of the way, let’s have a look at some of the major threats we should look out for while using Node.js.  
<br />

## Threat #01: Node Packages
As a Node developer, you have probably used the Node Package Manager (npm) more than the number of phones you’ll ever use. At the start (or even during) of a project, we require a number of external libraries and packages that help us code more efficiently, or perform vital functions, or help keep our code neat and clean. But how often do we make sure that these external packages don’t make our application vulnerable?  
<br />

## Threat #02: Code Injections
One of the most common forms of web attacks is a Code Injection. It involves injecting malicious code into a user input field (or by directly injecting code using developer tools), which could potentially make the application vulnerable to data leakage. These kinds of attacks occur predominantly in those web applications which have improper validation of incoming input, thereby allowing the attacker to inject code, which in turn, is interpreted by the browser.  
You may have heard of many of these, such as SQL Injections, Remote File Injections, etc. One of the easiest steps you can take to secure a web application from code injections is to sanitize the incoming input. Before updating queries in the database, you should ensure the input isn't malicious in nature. Luckily, the npm module express-validator lets you do just this.  

The escape() function replaces possibly malicious symbols with their HTML entities. Moreover, you can use functions such as blacklist() to remove characters from the input that are blacklisted, or whitelist() to remove those characters that do not belong to the whitelist.  
<br />

## Threat #03: Denial-Of-Services and Brute Force Attacks
In February 2020, the cloud-computing giant Amazon Web Services (AWS) was hit by a massive Distributed Denial Of Services Attack (DDoS), perhaps the largest such attack of recent times. Victims' IP Addresses were flooded with 50 to 60 times more data than the usual amount, and the attack peaked at a data rate of 2.3 Terabytes/Second (which amounts to 2300 GB every second!). Although the company didn't suffer from substantial revenue loss, severe security flaws were revealed.  

If there's one thing in common between DDoS and Brute Force Attacks, it's that both of them flood the server with requests. While the former attempts to crash the server, the latter tries millions of combinations to crack security credentials.
So how do we prevent such large-scale attacks on Node.js?  
  
One logical solution would be to limit the number of requests from a single IP address, which would essentially be an exploiter. The node-module express-rate-limit limits the number of concurrent requests by a single IP for a fixed duration, thereby preventing the server from being flooded.  
<br />

## Summary Of Best Practices
1. Keep updating your node modules to the latest (and possibly, the most stable) versions.
2. Perform input validation before making changes to the database.
3. Limit the number and size of requests from a single IP.
4. If you use an Express server, make sure to use the Helmet module, as it sets the headers accordingly which prevents attackers from knowing that you're using an Express server.
5. Protect API keys, database URIs and other sensitive information using environment variables, and never define them explicitly in the source code.
6. Carefully inspect your source code for vulnerabilities before committing it publicly to code hosting platforms, such as GitHub.  
<br />

## Conclusion
It is imperative to keep these steps in mind while designing a Node.js application. Security is something we can't afford to compromise. A single flaw can prove to be fatal for an application. Following these steps will ensure the security you need for your Node Application.  
<br />

**Hope you enjoyed reading :)**


