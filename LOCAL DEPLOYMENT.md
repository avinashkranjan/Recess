# Deployment Guidelines
 This project is react.js project developed under the authentication of firebase and user data saved in the firebase database. In order to run this project you have to install
 NPM(Node Package Manager). This package contains all the npm modules in order to run the javascript programme.
 
 ## Installing the Project
- Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.
```
$ npx create-react-app my-app or yarn create react-app my-app
$ cd my-app
$ npm start- Runs your file on the localhost
If you've previously installed create-react-app globally via npm install -g create-react-app, we recommend you uninstall the package using npm uninstall -g create-react-app or yarn global remove create-react-app to ensure that npx always uses the latest version.
```
If you've previously installed **create-react-app** globally via **npm install -g create-react-app**, we recommend you uninstall the package using **npm uninstall -g create-react-app** or **yarn global remove create-react-app** to ensure that npx always uses the latest version.

## Running environment

<p><img src='https://cdn.jsdelivr.net/gh/facebook/create-react-app@27b42ac7efa018f2541153ab30d63180f5fa39e0/screencast.svg'></p>

## Deployment

If you want to deploy it on **HEROKU** or **NETLIFY**
```
$ npm run build
or
$ yarn build
```
Builds the app for production to the **BUILD** folder. It correctly bundles React in production mode and optimizes the build for the best performance.
