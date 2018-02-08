// const gapi = require('googleapis');
// import gapi from 'googleapis';
// const gapi = require('google-auth-library');


// <script async defer src="https://apis.google.com/js/api.js"
// onload="this.onload=function(){};handleClientLoad()"
// onreadystatechange="if (this.readyState === 'complete') this.onload()">
// </script>

    // <button id="authorize-button" style="display: none;">Authorize</button>
    // <button id="signout-button" style="display: none;">Sign Out</button>

      // Client ID and API key from the Developer Console
    const API_KEY = 'AIzaSyBIf0apHS_jZr90rn-tfMlKBux02u0kTuA'
    const API_KEY1 = 'AIzaSyC08TGXqYsLDpsUN6pWkvV0Nj6TmCu_UIg'
    const CLIENT_ID1 = '297629994041-3sdo02s35o76kruu8movhg83ifsppd6t.apps.googleusercontent.com';

    // Array of API discovery doc URLs for APIs used by the quickstart
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.
    var SCOPES = "https://www.googleapis.com/auth/calendar";

    // var authorizeButton = document.getElementById('authorize-button');
    // var signoutButton = document.getElementById('signout-button');

    /**
     *  On load, called to load the auth2 library and API client library.
     */
    function handleClientLoad() {
      gapi.load('client:auth2', initClient);
    }

    /**
     *  Initializes the API client library and sets up sign-in state
     *  listeners.
     */
    function initClient(func) {
      gapi.client.init({
        apiKey: API_KEY1,
        clientId: CLIENT_ID1,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      }).then(function () {
        // Listen for sign-in state changes.

        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        // authorizeButton.onclick = handleAuthClick;
        // signoutButton.onclick = handleSignoutClick;
      });
    }

    function handleClientLoad() {
      gapi.load('client:auth2', initClient);
    }

    // /**
    //  *  Called when the signed in status changes, to update the UI
    //  *  appropriately. After a sign-in, the API is called.
    //  */
    function updateSigninStatus(isSignedIn) {
      if (isSignedIn) {
        // authorizeButton.style.display = 'none';
        // signoutButton.style.display = 'block';
        // listUpcomingEvents();
        // listCalendarsList()
        // insertEventToCal()
        // func()
      } else {
        // authorizeButton.style.display = 'block';
        // signoutButton.style.display = 'none';
      }
    }

    // /**
    //  *  Sign in the user upon button click.
    //  */
    function handleAuthClick(event) {
      gapi.auth2.getAuthInstance().signIn();
    }

    // /**
    //  *  Sign out the user upon button click.
    //  */
    function handleSignoutClick(event) {
      gapi.auth2.getAuthInstance().signOut();
    }

    // /**
    //  * Append a pre element to the body containing the given message
    //  * as its text node. Used to display the results of the API call.
    //  *
    //  * @param {string} message Text to be placed in pre element.
    //  */
    // // function appendPre(message) {
    // //   var pre = document.getElementById('content');
    // //   var textContent = document.createTextNode(message + '\n');
    // //   pre.appendChild(textContent);
    // // }

    // /**
    //  * Print the summary and start datetime/date of the next ten events in
    //  * the authorized user's calendar. If no events are found an
    //  * appropriate message is printed.
    //  */
    // function listUpcomingEvents() {
    //   gapi.client.calendar.events.list({
    //     'calendarId': 'primary',
    //     'timeMin': (new Date()).toISOString(),
    //     'showDeleted': false,
    //     'singleEvents': true,
    //     'maxResults': 10,
    //     'orderBy': 'startTime'
    //   }).then(function(response) {
    //     var events = response.result.items;
    //     appendPre('Upcoming events:');

    //     if (events.length > 0) {
    //       for (i = 0; i < events.length; i++) {
    //         var event = events[i];
    //         var when = event.start.dateTime;
    //         if (!when) {
    //           when = event.start.date;
    //         }
    //         appendPre(event.summary + ' (' + when + ')')
    //       }
    //     } else {
    //       appendPre('No upcoming events found.');
    //     }
    //   });
    // }

    // function listCalendarsList() {
    //   console.log('client log: ', gapi.client)
    //   gapi.client.calendar.calendarList.list({
    //     // 'calendarId': 'primary',
    //     // 'timeMin': (new Date()).toISOString(),
    //     // 'showDeleted': false,
    //     // 'singleEvents': true,
    //     // 'maxResults': 10,
    //     // 'orderBy': 'startTime'
    //   }).then(function(response) {
    //     var calList = response.result.items;
    //     appendPre('CalendarList:');

    //     if (calList.length > 0) {
    //       for (i = 0; i < calList.length; i++) {
    //         var calendar = calList[i];
    //         console.log(calendar)
    //         // var when = calendar.start.dateTime;
    //         // if (!when) {
    //         //   when = event.start.date;
    //         // }
    //         appendPre(calendar.summary)
    //       }
    //     } else {
    //       appendPre('No calendars found.');
    //     }
    //   });
    // }

    // var resource = {
    //   end: {
    //     "dateTime": "2018-02-13T09:00:00-07:00",
    //     "timeZone": "America/Los_Angeles"
    //   },
    //   start: {
    //     "dateTime": "2018-02-12T09:00:00-07:00",
    //     "timeZone": "America/Los_Angeles"
    //   },
    //   recurrence: [
    //     "RRULE:FREQ=DAILY;COUNT=2"
    //   ],
    //   summary: "ClemTest",
    //   location: "Death Valley",
    //   description: "The Greatest 25 Seconds in College Football",
    //   // "attendees": [
    //   //   {"email": "lpage@example.com"},
    //   //   {"email": "sbrin@example.com"}
    //   // ],
    //   reminders: {
    //     "useDefault": false,
    //     "overrides": [
    //       {"method": "email", "minutes": 24 * 60},
    //       {"method": "popup", "minutes": 10}
    //     ]
    //   }
    // };


    function insertEventToCal(res) {
      // console.log('insert is running')
      // console.log('public resource: ', res)
      // console.log("gapi obj: ", gapi)
      // console.log("gapi.client obj: ", gapi.client)
      // console.log("gapi.client.calendar obj: ", gapi.client.calendar)
      // console.log("gapi.client.calendar.events obj: ", gapi.client.calendar.events)

      gapi.client.calendar.events.insert({
        'calendarId': 'vafeh1rq7jq06tlibmiir010q8@group.calendar.google.com',
        'resource': res
      }).then(function(response) {
        console.log('First Response:', response)

        var eventResponse = response.result;
        console.log('Event Response:', eventResponse)
        // appendPre('Event: \n');

        // if (eventResponse) {
        //     appendPre('Summary: ' + eventResponse.summary)
        //     appendPre('Location: ' + eventResponse.location)
        //     appendPre('Start time: ' + eventResponse.start.dateTime.substring(0, 10))
        //     appendPre('Description: ' + eventResponse.description)
        // } else {
        //   appendPre('No event found.');
        // }
      });
    }

    handleClientLoad()
    // onreadystatechange="if (this.readyState === 'complete') this.onload()"






