'use strict';
const express = require('express');
const {dialogflow} = require('actions-on-google');
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;
const app = dialogflow({debug:true});

app.intent('Default Welcome Intent', (conv)=>{
    conv.ask('Hello world!!');
});

app.intent('get train number',async(conv,{number})=>{
    var result;
const resultdata =await fetch("https://your-first-herokus-app.herokuapp.com/status/"+number+"/yesterday");
conv.close('The status of train number'+number+'is amazing!'+result)
/*.then(response => response.json())
.then(jsondata=> {
  result = jsondata.data;
  console.log(result);
return result;})
.then(result => conv.close('The status of train number'+number+'is amazing!'+result));
return conv.close('The status of train number'+number+'is amazing!');*/

});

const expressApp = express().use(bodyParser.json());
expressApp.post('/webhook',app);

expressApp.listen(port);
