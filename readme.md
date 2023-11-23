

- http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coIlNlbmRpbmcgcmVxdWVzdCB0byBzZXJ2ZXIhIikKc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgIGNvbnNvbGUubG9nKCJIZXJlIGlzIHlvdXIgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuLi4iKQp9LCAzMDAwKQpjb25zb2xlLmxvZygiSSBBTSBBVCBUSEUgRU5EIE9GIFRIRSBGSUxFISIp!!!



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
