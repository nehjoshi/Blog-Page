---
title: Web Vulnerabilites Part 3 Node.JS
description: An amazing blog to read all about vulnerabilties of Node.JS
id: 2
date: 2nd November, 2021
category: Web dev
---

**Developers and Web Enthusiasts, welcome to this four-part blog series on Web Vulnerabilities and how to secure them! We’ll be exploring four major web technologies (that you probably use every day unknowingly), and we’ll see how these can become prone to attacks. We kick off this series with… Node.js!**

## Introduction
JavaScript is a beautiful language. Over the years, JavaScript has evolved to become the most popular and the most widely-used language for Web Development. From creating and executing amazing, stylish animations for the UI on the frontend, while also maintaining a safe and secure backend, JavaScript will undoubtedly remain on top for a very long time. Today, we look into a very important JavaScript runtime environment: Node.js which has gained immense popularity for backend Web Development.

## What is Node.JS?
Some call it a framework, some call it a library, some say it’s a language. Let’s get this straight first, Node.js is simply a runtime environment to run JavaScript outside of a browser. The code that we usually write within the <> </>tags in HTML is interpreted in the browser.
However, when programming the backend of a web application, we cannot allow this code to run inside the browser. As the backend part contains highly sensitive and delicate information, running it on the browser would make it prone to attacks. And that’s why we use Node JS. Now that we have the basics out of the way, let’s have a look at some of the major threats we should look out for while using Node.js.

## Threat #01: Node Packages
As a Node developer, you have probably used the Node Package Manager (npm) more than the number of phones you’ll ever use. At the start (or even during) of a project, we require a number of external libraries and packages that help us code more efficiently, or perform vital functions, or help keep our code neat and clean. But how often do we make sure that these external packages don’t make our application vulnerable?