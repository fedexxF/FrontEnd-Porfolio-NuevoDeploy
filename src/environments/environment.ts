// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseURL: 'http://localhost:8080',
  //apiBaseURL:  'https://back-end-porfolio.herokuapp.com/',
  firebaseConfig: {
    apiKey: "AIzaSyBCMyX7t2EoeXWwJubfJn4Tx89qgDNRIak",
    authDomain: "porfolio-10e59.firebaseapp.com",
    projectId: "porfolio-10e59",
    storageBucket: "porfolio-10e59.appspot.com",
    messagingSenderId: "904612669937",
    appId: "1:904612669937:web:e34d2efff1b2188f033c50",
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
