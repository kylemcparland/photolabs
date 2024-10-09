# PhotoLabs - By: Kyle McParland (Lighthouse Labs 2024)
PhotoLabs is a full-stack, React-based single-page application (SPA) that enables users to dynamically explore and interact with photos. Users can sort images by topic and mark them as favourites, utilizing React's state management system. This project focuses on the front-end, client-side user experience, and integrates various technologies including React, PostgreSQL, Node.js, and Express.

## Installation

Clone PhotoLabs using the SSH key in the git repo:
```bash
git clone git@github.com:kylemcparland/photolabs.git
cd photolabs
```
Next, using your RDBMS of choice (postgreSQL in my case), initialize the local database using `create.sql`. Populate the database using `development.sql`.
```
backend/src/db/schema/create.sql
backend/src/db/schema/development.sql
...
ALTERNATIVELY: Use the browser to navigate to `http://localhost:8001/api/debug/reset`
```

Finally, install dependencies with `npm install` in each respective `/frontend` and `/backend` directory.

## How to use

1. Start the back-end server:
```sh
cd backend
npm start
```
2. Start the front-end application:

```sh
cd frontend
npm start
```
The app will be served at http://localhost:3000 !

## Screenshots

## Dependencies + Acknowledgements
This project utilizes the following libraries and development tools:

Front-end:
- React ^18.2.0
- react-scripts ^5.0.1
- Sass ^1.59.2
- @testing-library/react

Back-end:
- Node.js
- Express ^4.16.4
- PostgreSQL
- Socket.io ^2.2.0

## Bugs and Issues
If you encounter any bugs, please feel free to open an issue on GitHub.

This project was built for educational purposes. Thank you for checking it out!