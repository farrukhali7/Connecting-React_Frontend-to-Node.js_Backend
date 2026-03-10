// FOR POST REQUEST:

    const loginUser = async() =>{
        const res = await fetch("http://localhost:5000/login" , {
            method: "POST",
            headers:{
                "Content-Type" : "application/json"     //The body of this request is JSON data. Without this, Express wouldn’t know how to parse(read and convert something into usable format) the request body.
            },
            body: JSON.stringify({          //The body is the actual data you’re sending to the backend.    JSON.stringify converts your object into a JSON string, which is the standard way to send structured data over HTTP. The body of a fetch request must be a string
                email:"admin123@gmail.com",
                password:"1234"
            })
        })
        // console.log(res.json);       //it will give something like "ƒ json() { [native code] }"
        
        const data = await res.json();
        console.log(data);
    }


export default loginUser;


// “Standard way to send structured data over HTTP”:
// HTTP is the protocol your browser and backend use to talk to each other.
// When you send data (like login info, user details, etc.), it has to be sent as plain text over the network.
// JSON is the standard format (agreed upon by almost all web systems) for representing structured data (objects, arrays, key-value pairs).
// That’s why we convert objects into JSON strings before sending them — so the backend knows exactly how to read them.
