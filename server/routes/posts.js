/*
const express = require("express");
const router = express.Router();
const pool = require("./db");

//http://localhost:5000/posts/getworkstations?reserved=true&library_name=thode&reservation_time=9&reservation_day=monday

router.get("/getworkstations", async(req, res) => {

    if (req.query.reserved === "true") {
        test = "SELECT workstation_name FROM workstation WHERE library_name='thode' INTERSECT SELECT workstation_name FROM usr WHERE reservation_time=9 AND reservation_day='monday'";
        const allWorkstations = await pool.query(test);
        //SELECT workstation_name FROM workstation WHERE library_name='thode' INTERSECT SELECT workstation_name FROM usr WHERE reservation_time=9 AND reservation_day='monday';
        res.send(allWorkstations.rows);
    } else {
        res.send("not poggers");
    }
    res.send(req.query.library_name);
});
*/

/*
// Get all the workstations from Thode for any day
app.get("/:var(monday|tuesday|wednesday|thursday|friday)", async(req, res) => {
    try {
        const url = req.url.replace("/", "");
        const allWorkstations = await pool.query("SELECT * FROM ".concat(url));
        res.json(allWorkstations.rows);
    } catch (e) {
        console.error(e.message);
    }
});
*/


/*
router.get("/test", (req, res) => {
    res.send("we are on test");
    console.log(req.url);
    console.log(req.originalUrl);
});

module.exports = router;
*/
// thode/monday/reserveworkstation
// thode/monday/getworkstations