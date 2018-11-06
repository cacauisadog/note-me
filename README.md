# Note Me
A basic note taking app made with Vue.js, Nuxt and Vuetify on the front and Django on the back.

**At the moment, only the frontend works.**

## Instructions to run the frontend as it is:
- clone this repository;
- `cd` into the *frontend* folder;
- `npm install` to handle dependencies;
- `npm run dev` to serve a local server (by default, on port 3000);
- visit http://localhost:3000 on your browser and have fun.

## What you can do
For now, you can only change the display between the dummy notes and alter their title and body. The changes will be reflected on the sidebar and will persist until you refresh the page.

## TODO
- add "new note" button;
- add "delete note" button;

After this, the "dummy" frontend will be finished. Then it will be time to connect the frontend to the backend and turn this into an actually useful app by changing all the dummy notes to be calls to the API:
- GET all notes from the database;
- PUT edited notes;
- make "new note" button make a POST;
- make "delete note" button make a DELETE;
