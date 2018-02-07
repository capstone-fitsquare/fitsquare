// Copyright 2012-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';
/*
const google = require('googleapis');
// const nconf = require('nconf');
const readline = require('readline');
// const plus = google.plus('v1');
const path = require('path');
const OAuth2Client = google.auth.OAuth2;
const calendar = google.calendar('v3');
const router = require('express').Router()
const fs = require('fs');
const keys = require('../../client_secret.json').installed;
module.exports = router

const testing1ID = 'vafeh1rq7jq06tlibmiir010q8@group.calendar.google.com'

const API_KEY = 'AIzaSyBIf0apHS_jZr90rn-tfMlKBux02u0kTuA';



// nconf.argv().env().file(path.join(__dirname, '../../client_secret.json'));
// let keys // = nconf.get('web');
// let thePath = path.join(__dirname, '../../client_secret.json')
// console.log('the path',thePath)
// ____________________


// Load client secrets from a local file.
// fs.readFileSync(path.join(__dirname, '../../client_secret.json'), function processClientSecrets(err, content) {
//   if (err) {
//     console.log('Error loading client secret file: ' + err);
//     return;
//   }
//   // Authorize a client with the loaded credentials, then call the
//   // Google Calendar API.
//   console.log('content', content)
//   keys = JSON.parse(content);
// });

console.log('keys: ', keys)

// ____________________

// Client ID and client secret are available at
// https://code.google.com/apis/console
const CLIENT_ID = keys.client_id;
const CLIENT_SECRET = keys.client_secret;
const REDIRECT_URL = keys.redirect_uris[0];

const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getAccessToken (oauth2Client, callback) {
  // generate consent page url
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline', // will return a refresh token
    scope: 'https://www.googleapis.com/auth/calendar' // can be a space-delimited string or an array of scopes
  });

  console.log('Visit the url: ', url);
  rl.question('Enter the code here:', code => {
    // request access token
    oauth2Client.getToken(code, (err, tokens) => {
      if (err) {
        return callback(err);
      }
      // set tokens to the client
      // TODO: tokens should be set by OAuth2 client.
      oauth2Client.setCredentials(tokens);
      callback();
    });
  });
}

// retrieve an access token
getAccessToken(oauth2Client, () => {
    // retrieve user profile
    // plus.people.get({ userId: 'me', auth: oauth2Client }, (err, profile) => {
    //   if (err) {
    //     throw err;
    //   }
    //   console.log(profile.displayName, ':', profile.tagline);
    // });

  router.get('/', (req, res, next) => {
    calendar.calendars.get({
      // calendar.events.list({
        auth: oauth2Client,
        calendarId: testing1ID,
        // timeMin: (new Date()).toISOString(),
        // maxResults: 10,
        // singleEvents: true,
        // orderBy: 'startTime'
      }, function(err, response) {
        if (err) {
          console.log('The API returned an error: ' + err);
          return;
        }
        console.log('the backend log: ', response)
        var events = response.items;
        // console.log('the backend log: ', events)
        if (events.length == 0) {
          console.log('No upcoming events found.');
        } else {
          // res.send(events)
          console.log('Upcoming 10 events:');
          for (var i = 0; i < events.length; i++) {
            var event = events[i];
            var start = event.start.dateTime || event.start.date;
            console.log('%s - %s', start, event.summary);
          }
        }
      });
        // .then(events => {
        //   console.log("the backend log: ",events)
        //   res.send(events)
        // })
    })
})
*/
