'use strict';
const express = require('express');
const {dialogflow} = require('actions-on-google');
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;
const app = dialogflow({debug:true});

app.intent('Default Welcome Intent', (conv)=>{
    conv.ask('Hello world!!');
});
app.intent('get train number',(conv,{number})=>{
var result = number;
return conv.close('The status of train number'+result+'is amazing !');
});

const expressApp = express().use(bodyParser.json());
expressApp.post('/webhook',app);

expressApp.listen(port);
