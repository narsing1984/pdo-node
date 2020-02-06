const express = require("express");
const router = express.Router();
const settings = require('./settings.json');
const fs = require('fs');

router.get("/get", getPageDetails);
router.put("/update", updatePageDetails);

/* Method for get site settings */
function getPageDetails(req, res) {
  try {
    res.json({
      status: "200",
      message: "success",
      data: settings
    });
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
}
/* Method for get site settings */

/* Method for update settings */
function updatePageDetails(req, res) {
  try {
    return new Promise((resolve, reject) => {
      let data = JSON.stringify(req.body.data, null, 2);
      fs.writeFile('./app/routes/Territories/settings.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
        res.json({
          status: "200",
          message: "success",
          data: {}
        });
    });
      
    });
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
}
/* Method for update settings */

module.exports = router;