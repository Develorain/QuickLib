const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json()); //req.body

//new
//const postsRoute = require("./routes/posts");
//app.use("/posts", postsRoute);

// future change: http://localhost:5000/reserve?day=monday&library=thode


app.get("/posts/getworkstations", async(req, res) => {
    if (req.query.reserved === "true") {
        queryStatement = "SELECT workstation_name FROM workstation WHERE library_name='" + req.query.library_name + "' INTERSECT SELECT workstation_name FROM usr WHERE reservation_time=" + req.query.reservation_time + "AND reservation_day='" + req.query.reservation_day + "'";
        const returnedWorkstations = await pool.query(queryStatement);
        res.send(returnedWorkstations.rows);
    } else {
        queryStatement = "SELECT workstation_name FROM workstation WHERE library_name='" + req.query.library_name + "' EXCEPT SELECT workstation_name FROM usr WHERE reservation_time=" + req.query.reservation_time + "AND reservation_day='" + req.query.reservation_day + "'";
        // SELECT workstation_name FROM workstation WHERE library_name='thode' EXCEPT SELECT workstation_name FROM usr WHERE reservation_time=9 AND reservation_day='monday';
        const returnedWorkstations = await pool.query(queryStatement);
        res.send(returnedWorkstations.rows);
    }
    res.send(req.query.library_name);
});


/// Database Routes ///
// THODE //
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

// Reserve a workstation at Thode for any day
app.put("/:var(monday|tuesday|wednesday|thursday|friday)", async(req, res) => {
    try {
        const url = req.url.replace("/", "");
        const {hostName, time, reserveName} = req.body;

        const updateWorkstation = await pool.query("UPDATE ".concat(url, " SET student_name=$1, status=$2 WHERE host_name=$3 AND time=$4"), [reserveName, "Occupied", hostName, time]);
    } catch (e) {
        console.error(e.message);
    }
});

// Create a student
app.post("/students", async(req, res) => {
    try {
        const {name} = req.body;
        const newStudent = await pool.query("INSERT INTO student (name) VALUES($1) RETURNING *", [name]);

        res.json(newStudent.rows[0]);
    } catch (e) {
        console.error(e.message);
    }
});

// Delete a student
app.delete("/students/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const deleteStudent = await pool.query("DELETE FROM student WHERE student_id = $1", [id]);

        res.json("Student was deleted!");
    } catch (e) {
        console.error(e.message);
    }
});

// Get all students
app.get("/students", async(req, res) => {
    try {
        const allStudents = await pool.query("SELECT * FROM student");
        res.json(allStudents.rows);
    } catch (e) {
        console.error(e.message);
    }
});


// Create a workstation at Thode (incomplete)
/*
app.post("/thode", async(req, res) => {
    try {
        const {host_name, student_name, status} = req.body;
        const newWorkstation = await pool.query("INSERT INTO thode (host_name, student_name, status) VALUES($1, $2, $3) RETURNING *", [host_name, student_name, status]);

        res.json(newWorkstation.rows[0]);
    } catch (e) {
        console.error(e.message);
    }
});
*/

// Update a student
/*
app.put("/students/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const {name} = req.body;
        const updateStudent = await pool.query("UPDATE student SET name = $1 WHERE student_id = $2", [name, id]);

        res.json("Student was updated!");
    } catch (e) {
        console.error(e.message);
    }
}
*/

// Get a student
/*
app.get("/students/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const student = await pool.query("SELECT * FROM student WHERE student_id = $1", [id]);

        res.json(student.rows[0]);
    } catch (e) {
        console.error(e.message);
    }
});
*/

app.listen(5000, () => {
    console.log("server has started on port 5000");
})