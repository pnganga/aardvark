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