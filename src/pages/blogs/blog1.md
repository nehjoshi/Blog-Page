---
title: Web Vulnerabilites Part 1 PHP
description: An amazing blog to read all about vulnerabilties of PHP
id: 1
date: 3rd October, 2021
actualDate: "2021-10-03"
category: Web dev
slug: web-vulnerabilities-part1-php
thumb: "../../images/php-logo.png"
---
**Cyber Security Enthusiasts, welcome to the third part of this exclusive blog series exploring different web vulnerabilities and ways to fix them. Today we learn about the language that perhaps has lost its reputation over the years, yet still more than 75% of all websites are built with this. Websites like WordPress and Wikipedia use this language extensively. Today we talk about PHP!**  
<br />

## The Rise of PHP
The first stable version of PHP was released in 1995, about 26 years ago, when PHP stood for Personal Home Page. Since then, it has become immensely popular because of its codebase. It is also backed up by a large number of online resources and tutorials, forums and guides.
It is also undeniable that nowadays PHP has become one of the ‘legacy’ backend languages that perhaps doesn’t get the respect it once did. Although PHP is still among the top names for backend languages, we mustn't forget that it has security vulnerabilities that may compromise the risk of the applications using it. Let’s have a look at some of these.  
<br />

### 1. Session Hijacking
When you hop onto to a website, you receive a session ID which is stored in a cookie, which contains small pieces of information on the client-side that can serve websites many purposes, such as keeping track of whether you’re signed in, what things you are browsing to show you better ads and so on. In PHP, the session ID stored in the cookie can be accessed through PHPSESSID.
What happens if someone steals your session ID? Well, if you were signed in and if the session has not expired, the exploiter can use the ID to directly access your account without logging in! This could lead to leakage of information, or financial loss and of course, a loss of privacy.

Cross Site Scripting (XSS) attacks are commonly used to obtain session ID’s, thus preventing those can directly reduce the chances of session hijacking. We can do this by changing the session ID as often as possible. Although this may seem inconvenient for the user, we can notify the user every time the ID expires. From within PHP you can run the session_regenerate_id() function to change the session ID and notify the client.

Session hijacking may also be prevented by preventing client-side JavaScript access to the session ID. This can be done by using the setting session.cookie.httponly in the php.ini file.  
<br />

### 2. SQL Injections
SQL Injections have followed us in each part of this blog series and it’s not a surprise considering how common they are and how easily they can exploit data. A typical SQL Injection consists of malicious code being inserted in an input field (or URL), which can, if no measures are taken, be interpreted as commands by SQL and hence can make changes.

The general thumb rule for preventing SQL Injections is to validate user input before updating the database. For example, if the input should be numeric, make sure to check if what the user has sent is numeric or not.

Another way you can protect your code against SQL injections is by using prepared statements. Prepared statements are precompiled SQL commands. Replacing a URL with a malicious one will not make changes to the database and hence can save you from SQL Injections.  
<br />


### 3. Cross Site Scripting (XSS) Attack
Here is one more vulnerability that you may have heard about from the earlier parts of this blog series. XSS attacks typically consist of injecting a malicious script (usually browser side script) into a website, which can cause disruptions to users, extra load on the server and can also steal session cookies (as we saw in threat number 1). Using XSS, the attacker can fully change the way a user will interact with a web application. Let’s look at how we can secure PHP applications from XSS attacks.

There are two functions that can help us achieve this. The htmlspecialchars($string) function will prevent an HTML string from rendering as HTML and display it as plain text to the web browser.

The other function, is the strip_tags($string, $tags_allowed) function, which removes all html tags in a string except for the ones you want to keep. An example of this would be the following:

In PHP, there is also a X-XSS-Protection header that can be sent to check for reflected cross site scripting attacks, and if present, will block the page from loading. Although setting this header does not provide complete protection from XSS attacks, combining it with the methods mentioned above can improve the security of your project.  
<br />


## To Summarize...
We have discussed three of the biggest threats a PHP developer can face, and ways to prevent them from causing damage. Starting with Session Hijacking, we saw how session ID’s can be obtained using XSS attacks, and that this can be prevented by changing the session ID’s periodically, and by preventing client side access to the ID. Next, we looked at the infamous SQL Injection, and that the workaround for those is to validate user input and to use prepared statements. And finally, we focused on XSS Attacks, which can be prevented by stripping html tags from user inputs and setting appropriate headers on the page. Using these simple techniques, you can secure your PHP websites from these kinds of attacks.  
<br />

**Hope you enjoyed reading :)**