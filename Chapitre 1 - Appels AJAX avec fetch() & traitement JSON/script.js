fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(Response=>Response.json())
.then(data=>
    console.log("your data is " + data))
.catch(Error=>
    console.error("Sorry bro, your error is ", Error))