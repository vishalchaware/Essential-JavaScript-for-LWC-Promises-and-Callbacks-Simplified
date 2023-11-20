1. Error Handling in promises
2. this keyword behavior based on arrow function vs traditional declaration, 
3. JEST tests for promises. 
Basics of Asynchronous Programming (3-4 minutes) 
Introduction to Callback Functions (3 minutes)
Introduction to Promises(10 minute) 
Practical Implementation in LWC(5)

Asynchronous Programming

###Introduction: callbacks

Many functions are provided by JavaScript host environments that allow you to schedule asynchronous actions. In other words, actions that we initiate now, but they finish later.

For instance, one such function is the setTimeout function.

Call Stack:
The Mechanism the JS interpreter uses to keep track of its place in a script that calls
multiple functions. 
How JS "knows" what functions is currently being run and what 
functions are called from within that functions, etc

Last in first out:
- When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function
- Any functions that are called by that functions are added to the call stack further up, and run where their 
calls are reached
- When the current function is finished, the interpreter takes it off the stack and resumes
the excution where it left off in the last code listing

http://latentflip.com/loup

CallStack.js

WebAPI and Single Threaded: Example:

- JS is a single threaded
    What does that mean
    At any give point in time, that single JS thread is running at most
    one line of JS code
- If I make Web API call and it takes 5 or 10 second
    What happens when something takes a long time?

Fortunately we have workaround
    - Callback
