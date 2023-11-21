## Essential JavaScript for LWC: Promises and Callbacks Simplified
    1. Arrow function 
    2. Arrow function and this
    3. What is call stack
    4. Introduction: callbacks
    5. What is callback hell
    6. The Magic of promises
    7. Creating our own promises
    8. Error Handling in promises
    9. Practical Implementation in LWC
    10. this keyword behavior based on arrow function vs traditional declaration
    11. JEST tests for promises. 

### What is Arrow function

- There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

```JS
    // Traditional
    let func = function(arg1, arg2, ..., argN) {
        return expression;
    };
    // Arrow function
    let func = (arg1, arg2, ..., argN) => expression;
```

### What is call stack

- The Mechanism the JS interpreter uses to keep track of its place in a script that calls
multiple functions. 
- How JS "knows" what functions is currently being run and what 
functions are called from within that functions, etc
- Last in first out:
- When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function
- Any functions that are called by that functions are added to the call stack further up, and run where their 
calls are reached
- When the current function is finished, the interpreter takes it off the stack and resumes
the excution where it left off in the last code listing
- Check folder callstack
- http://latentflip.com/loupe/

### Introduction: callbacks

- Many functions are provided by JavaScript host environments that allow you to schedule asynchronous actions. In other words, actions that we initiate now, but they finish later.
- For instance, one such function is the setTimeout function.

#### WebAPI and Single Threaded: Example:

- JS is a single threaded: 
    What does that mean
    At any give point in time, that single JS thread is running at most
    one line of JS code
- If I make Web API call and it takes 5 or 10 second:
    What happens when something takes a long time?

- Fortunately we have workaround: Callback

- http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coIlNlbmRpbmcgcmVxdWVzdCB0byBzZXJ2ZXIhIikKc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgIGNvbnNvbGUubG9nKCJIZXJlIGlzIHlvdXIgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuLi4iKQp9LCAzMDAwKQpjb25zb2xlLmxvZygiSSBBTSBBVCBUSEUgRU5EIE9GIFRIRSBGSUxFISIp!!!

```JS
console.log('Sending request to the server')
setTimeout(() => {
    console.log("Here is your data from ther server...")
}, 3000)
console.log('I am at the end of the file');
```

- Browser does the work

- OK BUT HOW?
    1. Browsers come with Web APIs that are able to handle certain tasks in the background
    (liking making requests or setTimoeot)
    2. The JS call stack recognizes these Web API functions and passes them off to the
    browsers to take care off
    3. Once the browser finishes those tasks, they return and are pushed onto the stack as 
    a callback

### Enter Promises
    - A Promises is an object representing the eventual completion or failure
    of an asynchronous operation
    - 
