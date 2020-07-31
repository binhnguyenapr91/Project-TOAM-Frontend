// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  RegisterUrl: 'http://localhost:8080/api/account',
  accountUrl: 'http://localhost:8080/api/role/host',
  idAccountUrl: 'http://localhost:8080/api/role/renter',
  apiUrl: 'http://localhost:8080/api/authenticate',
  apiComment: 'http://localhost:8080/api/comments/create/property',
  apiCommentProperty:'http://localhost:8080/api/comments/property/',
  apiCommentHost:'http://localhost:8080/api/comments/host/',
  apiContractRenter:'http://localhost:8080/api/contract/renter/',
  firebaseConfig: {
    apiKey: "AIzaSyDTfJMPWGlO9Aw4IUzOcM6fVvpF0QznnKg",
    authDomain: "toam-f11e6.firebaseapp.com",
    databaseURL: "https://toam-f11e6.firebaseio.com",
    projectId: "toam-f11e6",
    storageBucket: "toam-f11e6.appspot.com",
    messagingSenderId: "393186894661",
    appId: "1:393186894661:web:dcd57e6d2151828eda542c",
    measurementId: "G-D481C2YP4E"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
