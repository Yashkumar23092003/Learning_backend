class ApiError extends Error { // This defines a custom error class called ApiError, which extends the built-in Error class.
    constructor( // The constructor function is used to set up the error object.
        statusCode, // The status code of the error (e.g., 404, 500).
        message = "Something went Wrong", // The message describing the error (defaults to "Something went Wrong" if not provided).
        error = [], // An array to hold any specific details about the error (defaults to an empty array).
        stack = "" // The stack trace (defaults to an empty string if not provided).
    ) {
        super(message) // Calls the parent Error class's constructor with the error message.
        this.statusCode = statusCode // Sets the status code for the error.
        this.data = null // Placeholder for any additional data you might want to include with the error.
        this.message = message // Sets the error message.
        this.success = false; // Sets success to false, indicating an error occurred.
        this.error = error // Sets the error details, though this line seems redundant (should be `this.error = error`).

        if (stack) { // If a stack trace is provided, it uses it.
            this.stack = stack
        } else { // If no stack trace is provided, it generates one.
            Error.captureStackTrace(this, this.constructor)
        }
    }
}
