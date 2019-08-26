// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebase: {
    // Your web app's Firebase configuration
    apiKey: "AIzaSyBIeMvGFkAKLLNYdRvE7TkTZDBR6KpVXNk",
    authDomain: "scl009-red-social-frameworks.firebaseapp.com",
    databaseURL: "https://scl009-red-social-frameworks.firebaseio.com",
    projectId: "scl009-red-social-frameworks",
    storageBucket: "scl009-red-social-frameworks.appspot.com",
    messagingSenderId: "599542815640",
    appId: "1:599542815640:web:0d1fceae679d31be"
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
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
