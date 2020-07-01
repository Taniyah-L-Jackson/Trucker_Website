const express = require('express');
const router = express.Router();

router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message} `
  
    var mail = {
      from: name,
      to: 'taniyah.l.jackson.h@gmail.com', 
      subject: 'New Employee Test',
      text: content
    }
})

module.exports = router