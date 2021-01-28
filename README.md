# Introduction

Hello everyone, this project i made to learn 'state management' with [ngrx](https://ngrx.io)

Source i watch: `https://www.youtube.com/watch?v=oHmreG1Sul0&list=PLV-DQnYj14bRFWMmuT6ptSL4v5fxMJnOS&ab_channel=OOPCoders`

# NgrxDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.
[Angular](https://angular.io)

## Required packages

Clone project to your local with `https://github.com/masumulu28/ngrx-demo.git` After go to project folder and open Command Prompt paste: `npm install`

For backend i'm using json-server package. Install json-server package: `https://www.npmjs.com/package/json-server` | `npm install json-server`

For run paralel project (Angular and Json Server) install [Concurrently](https://www.npmjs.com/package/concurrently) | `npm install concurrently`

## Development server

I write my custom script to package.json `"dev": "concurrently \"npm run server\" \"npm run start\""`  

Run `npm run dev` for start app. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Also you can run separately angular project and json server.  

Angular run: `ng serve | ng s`  
Json Server run: Go to `db.json` file location and open Command Prompt paste: `json-server --watch db.json`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
