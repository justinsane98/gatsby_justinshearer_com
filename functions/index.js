const {onDocumentCreated} = require("firebase-functions/v2/firestore");
const config = require('./config');
const client = require('twilio')(config.accountSid, config.authToken);

  exports.createuser = onDocumentCreated("contacts/{id}", (event) => {

    const snapshot = event.data;
    if (!snapshot) {
        console.log("No data");
        return;
    }
    const data = snapshot.data();

    const body = `
justinshearer.com
---
${data.note ? data.note : "No Note"}
---
${data.email ? data.email : "No email"}
`
    client.messages
        .create({
            from: '+18449253817',
            to: '+18036659539',
            body: body
        })
        .then(message => console.log(message.sid))
        .done();
  });