# User Management API

This project is a simple Node.js API for managing users. It provides endpoints for CRUD (Create, Read, Update, Delete) operations on user data.

## Project Structure

The project is structured as follows:

- `controllers/users.js`: Contains controller functions for handling user-related operations such as getting all users, creating a new user, getting a user by ID, deleting a user, and updating a user's details.

- `routes/users.js`: Defines routes using Express's `Router` to map HTTP requests to the corresponding controller functions.

- `index.js`: Sets up the Express application, configures middleware (such as `body-parser` to parse JSON bodies), defines a route for the homepage, and mounts the user routes onto the `/users` path.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. The server will be running on `http://localhost:8000`

## Endpoints

- `GET /users`: Get all users
- `POST /users`: Create a new user
- `GET /users/:id`: Get a user by ID
- `DELETE /users/:id`: Delete a user by ID
- `PATCH /users/:id`: Update a user's details

## Dependencies

- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `body-parser`: Node.js body parsing middleware to parse incoming request bodies.

## Future Improvements

- Implement error handling middleware to handle errors that may occur during request processing.
- Implement input validation to ensure data integrity and security.
- Consider using a database to store user data instead of a global array.

Feel free to contribute to the project by opening issues or submitting pull requests!

