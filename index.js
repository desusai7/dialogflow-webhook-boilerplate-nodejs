'use strict';
const express = require('express');
const {dialogflow} = require('actions-on-google');
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;
const app = dialogflow({debug:true});
const fetch = require('node-fetch');

app.intent('Default Welcome Intent', (conv)=>{
    conv.ask('Hello world!!');
});
app.intent('get train number',(conv,{number})=>{
return conv.close('The status of train number'+number+'is amazing!');
});

const expressApp = express().use(bodyParser.json());
expressApp.post('/webhook',app);
expressApp.listen(port);
