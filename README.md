#Introduction to Node.js

What is Node? 
------------------------------------------

##it is an event driven non-blocking i/o *server that is asynchronous in nature.

It is written using Javascript



## How it works in a nutshell.


1. Node receives events.
2. It stashes them in an event que.
3. THe events are then pushed to a thread pool for processing.
4. Once a thread is done,it communicates its result back to node.


## concepts
--------------------------

-Event driven
-------------

- Non-blocking
-------------

+ in proceduaral language, any heavy and time consuming operations would be ran in a separate thread form the main one.

+ Node provides us with the ability to write our code using an ansynchronous and event driven style where events are received.
+ This gives us the ability to have mutiple i/o operations within a single thread and not have them 'block(wait for the previous process to run before executing the main process)'.
----------------------------------------------------------


- Asynchronous
-------------------
+ Node uses a none procedural style of computation.
+ It allows requests to be executed in no particular order where the previous event does not to finish before the next one can begin.
----------------------------------------------------------------------------------------------

- Eventloop
------------------


-Thread
---------------

+ when a code is running on a compiler, the compiler creates a main process within which it will execute your code. this is known as the thread.
--------------------------------------------------------------------------




COMMON SYNTAX USED IN NODE:
--------------------------------
1.Running a file using Node.

+in the folder where the js file is defined, run node <filename>

--------------------------------------------------
2.importing packages and files into your main file.
We use the require function to export modules defined in other files into our main file.
```
require('http');  //This imports a natively defined nodejs package.

require('./express'); ///This imports a nodejs package defined in the node_modules folder within your app's directory.

require('./models/movie.js'); /// This imports a module from a folder within your app.

```

-------------------------------------------------------------------------------------
3.starting a node project
```
npm init  //run this in the terminal within your app directory.


``````
----------------------------------
4.adding a module to your project using npm
````
npm install --save <module_name>//run this in the terminal within your app directory


```


#Restful Routes

##WHAT IS REST?
---------------------
-Rest is an acronym that stands for Representational State Transfer
-It was developed as a standard through which the client could communicate with the server over the web.
- Rest provides a standard method for resource manipulation on the server.
----------------------------------------
##COMPONENTS OF REST
-------------------------
- A url that represents the resource 
- A http verb/method that maps to a controller on the server
`````
example:
`GET /photo/19`
````````

## USING REST IN A WEB APPLICATION
-------------------------------------
1.Client sends a request: `GET /movie/198`
2. The server's router maps that request and the verb to a controller's  action:

````
The request /movie/198 would be mapped to a controller called Movie which would have an action called show to handle that request.

``````
3. The show action will communicate with the movie Model and query it for a movie with the id 198.      
------------------------------------------------------------------------------------------------------------------------
##COMMON PATTERNS OF RESTFUL VERBS AND ACTIONS
------------------------------------------------

Assuming you have a resource called photo. The RESTFUL 



## CORS
-This is an acronym for Cross Origin Resource Sharing.
-It refers to the ability of one domain to use/ask for resources from other domains.

	Example:
	The html with this image tag is being served from http://domain-a.com <img src="http://domain-b.com/mouse.jpg"
	It is requesting an image from a http://domain-b.com which is a different domain from where its being hosted.
-This works when a html page does it, but does NOT work when using for the same image using the XMLHttpRequest object(Using Ajax), the browser would throw a CORS error.

The only way that a script can access a different resource from anoother domain is if the server on that domain allows it to.
-This is done by adding that domain to the request Header known as Access-Control-Origin: <allowed domains or * to allow any domain>
