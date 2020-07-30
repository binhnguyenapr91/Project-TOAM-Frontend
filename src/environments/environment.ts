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
  firebaseConfig: {
    apiKey: 'AIzaSyBG4Ew-e1zAxBLnNqXnCo1JHJSwLR3SqOo',
    authDomain: 'homestay-5d356.firebaseapp.com',
    databaseURL: 'https://homestay-5d356.firebaseio.com',
    projectId: 'homestay-5d356',
    storageBucket: 'homestay-5d356.appspot.com',
    messagingSenderId: '448950554170',
    appId: '1:448950554170:web:a0cf7192ddb4c2410bef03',
    measurementId: 'G-X06PCHWRW5'
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
