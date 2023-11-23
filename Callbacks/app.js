// Single Threaded
// console.log("Sending request to server!")
// setTimeout(() => {
//     console.log("Here is your data from the server...")
// }, 3000)
// console.log("I AM AT THE END OF THE FILE!")



// - http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coIlNlbmRpbmcgcmVxdWVzdCB0byBzZXJ2ZXIhIikKc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgIGNvbnNvbGUubG9nKCJIZXJlIGlzIHlvdXIgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuLi4iKQp9LCAzMDAwKQpjb25zb2xlLmxvZygiSSBBTSBBVCBUSEUgRU5EIE9GIFRIRSBGSUxFISIp!!!

//     1. Browsers come with Web APIs that are able to handle certain tasks in the background
//     (liking making requests or setTimoeot)
//     2. The JS call stack recognizes these Web API functions and passes them off to the
//     browsers to take care off
//     3. Once the browser finishes those tasks, they return and are pushed onto the stack as 
//     a callback

function fetchData(url, callback) {
    // Simulating an asynchronous operation, like fetching data from a server
    setTimeout(function() {
      const data = { example: 'some data' };
      // Calling the callback function with the fetched data
      callback(data);
    }, 1000);
  }
  
  // Using the fetchData function with a callback
  fetchData('https://example.com/api/data', function(data) {
    console.log('Data received:', data);
  });
  