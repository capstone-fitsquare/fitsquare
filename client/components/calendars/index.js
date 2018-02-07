import React, { Component } from 'react';
import axios from 'axios'

class Calendar extends Component {
  constructor() {
    super()
    this.state = {
      list: []
     }
  }


  // componentWillMount() {
  //   // axios.get(`/auth/calendar`)
  //   axios.get(`/auth/newCal`)
  //     .then(res => {
  //       // console.log("the frontend log: ",res)
  //       // res.render(res)
  //     })
  // }
  render() {
    const API_KEY = 'AIzaSyBIf0apHS_jZr90rn-tfMlKBux02u0kTuA';
    const YOUR_CLIENT_ID = '297629994041-q1j91bsqeb3df2ok3qdv8r1nf8db58ua.apps.googleusercontent.com';
    var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
    return (
      <div>
      <p>Google Calendar API Quickstart</p>

      {
        //<!--Add buttons to initiate auth sequence and sign out-->
      }
      <button id="authorize-button" style="display: none;">Authorize</button>
      <button id="signout-button" style="display: none;">Sign Out</button>

      {
        // <pre id="content"></pre>
      }
      <script type="text/javascript">

      {
        // Array of API discovery doc URLs for APIs used by the quickstart
        // var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

        // Authorization scopes required by the API; multiple scopes can be
        // included, separated by spaces.
      }


      {
        // var authorizeButton = document.getElementById('authorize-button');
        // var signoutButton = document.getElementById('signout-button');
        /**
         *  On load, called to load the auth2 library and API client library.
         */
      }
      {
        function handleClientLoad() {
          gapi.load('client:auth2', initClient);
        }
      }
      {
        /**
         *  Initializes the API client library and sets up sign-in state
         *  listeners.
         */
      }
      {
        function initClient() {
          gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
          }).then(function () {
            // Listen for sign-in state changes.
            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

            // Handle the initial sign-in state.
            updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
            authorizeButton.onclick = handleAuthClick;
            // signoutButton.onclick = handleSignoutClick;
          });
        }
      }
      {
        /**
         *  Called when the signed in status changes, to update the UI
         *  appropriately. After a sign-in, the API is called.
         */
      }
      {
        function updateSigninStatus(isSignedIn) {
          if (isSignedIn) {
            authorizeButton.style.display = 'none';
            signoutButton.style.display = 'block';
            listUpcomingEvents();
          } else {
            authorizeButton.style.display = 'block';
            signoutButton.style.display = 'none';
          }
        }
      }
      {
        /**
         *  Sign in the user upon button click.
         */
        function handleAuthClick(event) {
          gapi.auth2.getAuthInstance().signIn();
        }
      }
      {
        /**
         *  Sign out the user upon button click.
         */
        function handleSignoutClick(event) {
          gapi.auth2.getAuthInstance().signOut();
        }
      }
      {
        /**
         * Append a pre element to the body containing the given message
         * as its text node. Used to display the results of the API call.
         *
         * @param {string} message Text to be placed in pre element.
         */

        // function appendPre(message) {
        //   var pre = document.getElementById('content');
        //   var textContent = document.createTextNode(message + '\n');
        //   pre.appendChild(textContent);
        // }
      }
      {
        /**
         * Print the summary and start datetime/date of the next ten events in
         * the authorized user's calendar. If no events are found an
         * appropriate message is printed.
         */

        function listUpcomingEvents() {
          gapi.client.calendar.events.list({
            'calendarId': 'primary',
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 10,
            'orderBy': 'startTime'
          }).then(function(response) {
            var events = response.result.items;
            console.log('Upcoming events:');

            if (events.length > 0) {
              for (i = 0; i < events.length; i++) {
                var event = events[i];
                var when = event.start.dateTime;
                if (!when) {
                  when = event.start.date;
                }
                console.log(event.summary + ' (' + when + ')')
              }
            } else {
              console.log('No upcoming events found.');
            }
          });
        }
      }

      </script>

      <script async defer src="https://apis.google.com/js/api.js"
        onload="this.onload=function(){};handleClientLoad()"
        onreadystatechange="if (this.readyState === 'complete') this.onload()">
      </script>
      </div>
    );
  }
}


export default Calendar;


/*
var fs = require('fs');
var readline = require('readline');
var google = require('googleapis');
var googleAuth = require('google-auth-library');

// If modifying these scopes, delete your previously saved credentials
// at ~/.credentials/calendar-nodejs-quickstart.json
var SCOPES = "https://www.googleapis.com/auth/calendar";
var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'calendar-nodejs-quickstart.json';

// Load client secrets from a local file.
fs.readFile('../../../client_secret.json', function processClientSecrets(err, content) {
  if (err) {
    console.log('Error loading client secret file: ' + err);
    return;
  }
  // Authorize a client with the loaded credentials, then call the
  // Google Calendar API.
  authorize(JSON.parse(content), listEvents);
});

function authorize(credentials, callback) {
  var clientSecret = credentials.installed.client_secret;
  var clientId = credentials.installed.client_id;
  var redirectUrl = credentials.installed.redirect_uris[0];
  var auth = new googleAuth();
  var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, function(err, token) {
    if (err) {
      getNewToken(oauth2Client, callback);
    } else {
      oauth2Client.credentials = JSON.parse(token);
      callback(oauth2Client);
    }
  });
}

function getNewToken(oauth2Client, callback) {
  var authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  console.log('Authorize this app by visiting this url: ', authUrl);
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the code from that page here: ', function(code) {
    rl.close();
    oauth2Client.getToken(code, function(err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      oauth2Client.credentials = token;
      storeToken(token);
      callback(oauth2Client);
    });
  });
}


function storeToken(token) {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err;
    }
  }
  fs.writeFile(TOKEN_PATH, JSON.stringify(token));
  console.log('Token stored to ' + TOKEN_PATH);
}

function listEvents(auth) {
  var calendar = google.calendar('v3');
  calendar.events.list({
    auth: auth,
    calendarId: 'primary',
    timeMin: (new Date()).toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime'
  }, function(err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    var events = response.items;
    if (events.length == 0) {
      console.log('No upcoming events found.');
    } else {
      console.log('Upcoming 10 events:');
      for (var i = 0; i < events.length; i++) {
        var event = events[i];
        var start = event.start.dateTime || event.start.date;
        console.log('%s - %s', start, event.summary);
      }
    }
  });
}

*/

// ________________________
// var CLIENT_ID = "297629994041-q1j91bsqeb3df2ok3qdv8r1nf8db58ua.apps.googleusercontent.com";
// var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];


// var {calendar} = require('googleapis');
// var gCal = google.calendar('v3')
// const fitCal =


// const calendars = [
//   {
//     name: 'Meetings',
//     url: 'psdueq5a33so3e17updn7ot394@group.calendar.google.com'
//   }
// ]

// export default class Calendar extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       // time: moment().format("dd, Do MMMM, h:mm A"),
//       // events: []
//     }
//   }

//   render(){
//     return (
//       <div>
//         {
//           // console.log('the calendar obj', gCal)
//         }
//       </div>
//     )
//   }
// }



