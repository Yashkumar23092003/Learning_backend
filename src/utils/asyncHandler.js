const asyncHandler = (requestHandler)=> {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err)=> next(err))
    }
}
// const asyncHandler = (requestHandler) => { (req, res, next) => { ... } }: This creates a special function that wraps around other functions (requestHandler) to catch any errors.
// Inside, it tries to run requestHandler, and if there’s an error, it sends the error to the next part of the app (usually an error handler). This 




export {asyncHandler}

// /const asyncHandler = () => {} // This creates an empty function that doesn't do anything yet.

// const asyncHandler = (func) => () => {} // This creates a function that takes another function (func) but doesn't do anything with it yet.

// const asyncHandler = (fn) => async (req, res, next) => { } // This wraps an asynchronous function (fn) to handle async code safely. 
// // It takes `req`, `res`, and `next` as parameters, but the function is still empty.

// try { 
//     await fn(req, res, next) // It tries to run the async function `fn` with the request, response, and next as inputs.
// } catch (error) { 
//     res.status(err.code || 500).json({ // If there's an error, it sends a response with the error status (default is 500 if no code).
//         success: false, // Indicates the operation failed.
//         message: err.message // Sends the error message back to the user.
//     }) 
// }
