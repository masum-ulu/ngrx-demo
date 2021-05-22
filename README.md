# Introduction

Hello everyone, this project i made to learn 'state management' with [ngrx](https://ngrx.io)

[Course video](https://www.youtube.com/watch?v=oHmreG1Sul0&list=PLV-DQnYj14bRFWMmuT6ptSL4v5fxMJnOS&ab_channel=OOPCoders)

# ngrx-demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.
[Angular](https://angular.io)

## Required packages

Clone project to your local with `https://github.com/masumulu28/ngrx-demo.git` After go to project folder and open Command Prompt paste: `npm install`

- For backend i'm using [json-server](https://www.npmjs.com/package/json-server) package.

- For run paralel project (Angular and Json Server) i'm using [Concurrently](https://www.npmjs.com/package/concurrently) package.

## Development server

I added my custom script to package.json `"dev": "concurrently \"npm run server\" \"npm run start\""`  

Run `npm run dev` for start app. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Also you can run separately angular project and json server.  

* Angular run: `ng serve | ng s`  
* json-server run: Go to `db.json` file location and open CMD paste this command: `json-server --watch db.json`
  * If you get any exception migth be need [json-server](https://www.npmjs.com/package/json-server) package need install to global `npm i -g json-server`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
