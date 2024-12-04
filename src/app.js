import express from 'express'
import cookieParser from "cookie-Parser"
import cors from "cors"
/*
What Are Middlewares?
Middleware is a function in web application frameworks (like Express.js) that sits between the request and response cycle. Middleware functions process incoming requests, apply logic, and pass control to the next middleware or endpoint.

Key Features:
Execution Order: Middleware is executed in the order it is defined.
Access to req and res: Middleware functions can access request (req) and response (res) objects, as well as modify them.
Use Cases:
Authentication and authorization.
Logging or analytics.

CORS (Cross-Origin Resource Sharing) is a security mechanism in web browsers that controls how resources on a server can be accessed by web pages from a different origin (domain, protocol, or port).

Why is CORS Needed?
Browsers enforce a same-origin policy by default, which means:

A web page can only make requests to the same domain it was served from.
CORS allows a server to explicitly grant permission to certain domains to access its resources.
Example Scenario Without CORS:
Frontend: http://localhost:3000
Backend API: http://api.example.com
Without CORS, the browser blocks the request from the frontend to the backend because they are on different origins.

A cookie is a small piece of data that is stored on a user's browser by a website. It is sent along with HTTP requests and responses, allowing the server and browser to remember stateful information about a user.

*/

const app= express()

app.use(cors({                        //
    origin: process.env.CORS_ORIGIN,   //CORS_ORIGIN:  the request origin " maybe sometime of link from where the req. is coming"
    credentials:true
}))


app.use(express.json({limit: "16kb"})) //This is middleware provided by Express.js to parse incoming JSON data in request bodies.It ensures that the server can handle requests where the body is in JSON format
app.use(express.urlencoded({extended:true, limit:"16kb"})) // This line tells the app to understand data sent in forms, allowing it to handle bigger form data up to 16kb.
app.use(express.static("public")) //This lets your app serve files like images or stylesheets from the "public" folder to users.
app.use(cookieParser()) // This helps your app read cookies (tiny pieces of information saved in a browser) easily.










































export {app}