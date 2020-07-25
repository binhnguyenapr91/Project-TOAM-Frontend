// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  RegisterUrl: 'http://localhost:8080/api/account',
  accountUrl: 'http://localhost:8080/api/role/host',
  idAccountUrl: 'http://localhost:8080/api/role/renter',
  apiUrl: 'http://localhost:8080/',
  firebaseConfig: {
    apiKey: 'AIzaSyByPcnp3-eSaPf8Tz7kwfxx4u2BHZQdLhw',
    authDomain: 'homestay-a9a55.firebaseapp.com',
    databaseURL: 'https://homestay-a9a55.firebaseio.com',
    projectId: 'homestay-a9a55',
    storageBucket: 'homestay-a9a55.appspot.com',
    messagingSenderId: '851775692294',
    appId: '1:851775692294:web:03b1d6fb3b69e34ca4ed87',
    measurementId: 'G-CWLBESP0BY'
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
