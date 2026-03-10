import express , {Response, Request} from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors())
app.use(express.json());        //express.json() = middleware that reads the header and parses the JSON text into req.body

app.get("/users" , (req: Request , res:Response)=>{
    res.json([
        {id:1 , name:"Aman"},
        {id:2 , name:"Tyler"},
        {id:3 , name:"Ali"},
        {id:4 , name:"Gosh"}
    ])
})

app.post("/login" , (req:Request ,res:Response)=>{          // Post request so it is stating that send data to the /login .... server
    const {email,password} = req.body;

    if (email === "admin123@gmail.com" && password === "1234") {
        res.json({success:true , message:"Login Successful"})
    }else{
        res.status(401).json({success:false , message: "Invalid Credentials!"})
    }
})

app.listen(PORT,()=>{
    console.log(`Backend is running on PORT: ${PORT}`);
})




// Flow of a MERN app:
// React (Frontend)
//         ↓
// API Request (fetch / axios)
//         ↓
// Node.js + Express (Backend)
//         ↓
// Database (MongoDB)
//         ↓
// Response → React UI updates


// Importance of CORS(Cross - Origin Resource Sharing):
// When your frontend React(port 5173) tries to fetch data from the Express backend(port 5000), the browsers sees this as a cross origin request
// without CORS you'll get an error like:
// Access to fetch at 'http://localhost:5000/users' from origin 'http://localhost:5173' has been blocked by CORS policy


// Instead of fetch, best practice is to use "Axios" instead