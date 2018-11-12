# Note Me
A basic note taking app made with Vue.js, Nuxt and Vuetify on the front and Django with PostgreSQL on the back.

## Prerequisites:
- you must have a local instance of postgres running on your machine;
- you must have Django installed on your machine (use a virtualenv to avoid messing your everyday python env);
- you must alter the Django configs to connect to your postgres database;

## Instructions to run the app as it is:
- clone this repository;
- `cd` into the *backend* folder;
- `python manage.py runserver` to serve the Django backend;
- `cd` into the *frontend* folder;
- `npm install` to handle dependencies;
- `npm run dev` to serve a local server (by default, on port 3000);
- visit http://localhost:3000 on your browser and have fun.

## What you can do
**Add new** notes, **edit** notes' title and body and **delete** notes. All changes are commited to the database and are kept through page refreshes.

## TODO
The basic app is finished. Neither the code nor the UI are pretty, but it works.
**DONE** - add frontend validation;
**DONE** - add backend validation;
**DONE** - add note ordering by title or by body;
- overhaul the UI;
- refactorate code along the way.
