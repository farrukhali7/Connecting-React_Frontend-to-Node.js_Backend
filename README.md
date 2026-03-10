MERN Journey: Connecting React & Express

I’ve been exploring how the frontend (React) communicates with the backend (Express + Node.js) — and this is the foundation of every MERN application.

🌐 Backend
Built routes to handle both GET requests (fetching data like users) and POST requests (sending data like login credentials).

Learned the importance of CORS (Cross-Origin Resource Sharing): without it, browsers block requests between different ports (React on 5173, Express on 5000).

Discovered how express.json() middleware works: it reads the request header and parses JSON text into usable JavaScript objects (req.body).

🎨 Frontend
Practiced making GET requests to fetch data and display it in the UI.

Practiced making POST requests to send structured data (like login info) to the backend.

Understood why we use headers (Content-Type: application/json) and JSON.stringify:

Headers tell the backend what format the data is in.

JSON.stringify converts objects into JSON strings, the standard way to send structured data over HTTP.

Learned that parsing means converting raw text into a structured object the backend can understand.

🧠 Key Takeaways
CORS is essential whenever frontend and backend run on different origins.

Headers vs Body: headers describe the format, body contains the actual data.

express.json() middleware is what makes req.body usable.

Axios is often preferred over fetch for cleaner API calls.

This flow is the backbone of MERN apps:

Code
React (Frontend)
   ↓
API Request
   ↓
Node.js + Express (Backend)
   ↓
Database (MongoDB)
   ↓
Response → React UI updates
🔧 Next Step
Now I’m moving on to MongoDB + Mongoose so my backend can serve real data instead of hardcoded arrays. That’s when MERN becomes truly full-stack.

💡 If you’re starting MERN, remember:

Enable CORS.

Use express.json() to parse JSON bodies.

Prefer Axios for API calls.
