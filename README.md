# 📸 PhotoLabs - By: Kyle McParland (Lighthouse Labs 2024)

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
...
"Listening on port 8001 in development mode."
```
2. Start the front-end application. The app will be served at port 3000 by default:

```sh
cd frontend
npm start
...
"Compiled successfully!"
```
Connect locally using the url http://localhost:3000/ in your browser!

## Final Product

!["Screenshot of PhotoLabs homepage"](https://raw.githubusercontent.com/kylemcparland/photolabs/refs/heads/main/screenshots/PL-1.png "Screenshot of PhotoLabs homepage")

_React's state management system enables persistent favourites across the page!_
!["Animated gif of opening detailed photo view"](https://github.com/kylemcparland/photolabs/blob/main/screenshots/PL-2.gif?raw=true "Animated gif of opening detailed photo view")

_Click on a photo to open a detailed photo modal o => O_
!["Screenshot of detailed photo view"](https://raw.githubusercontent.com/kylemcparland/photolabs/refs/heads/main/screenshots/PL-3.png "Screenshot of detailed photo view")

_Your favourites have a pop-up modal too!_
!["Screenshot of favourites page"](https://raw.githubusercontent.com/kylemcparland/photolabs/refs/heads/main/screenshots/PL-4.png "Screenshot of favourites page")

_Dynamically sort photos by topic... Or explore all photos!_
!["Animated gif of sorting photos by topic"](https://raw.githubusercontent.com/kylemcparland/photolabs/refs/heads/main/screenshots/PL-5.gif "Animated gif of sorting photos by topic")

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
If you encounter any bugs, please feel free to open an issue on [github](https://github.com/kylemcparland/photolabs/issues).

---

#### This project was built for educational purposes. Thank you for checking it out!