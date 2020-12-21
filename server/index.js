const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json()); //req.body

// Routes //

// create a workstation at thode
app.post("/thode", async(req, res) => {
    try {
        console.log(req.body);
        const {host_name, student_name, status} = req.body;
        const newWorkstation = await pool.query("INSERT INTO thode (host_name, student_name, status) VALUES($1, $2, $3) RETURNING *", [host_name, student_name, status]);

        res.json(newWorkstation.rows[0]);
    } catch (e) {
        console.error(e.message);
    }
});

// get all workstations at thode
app.get("/thode", async(req, res) => {
    try {
        const allWorkstations = await pool.query("SELECT * FROM thode");
        res.json(allWorkstations.rows);
    } catch (e) {
        console.error(e.message);
    }
});

// create a workstation at mills
app.post("/mills", async(req, res) => {
    try {
        console.log(req.body);
        const {host_name, student_name, status} = req.body;
        const newWorkstation = await pool.query("INSERT INTO mills (host_name, student_name, status) VALUES($1, $2, $3) RETURNING *", [host_name, student_name, status]);

        res.json(newWorkstation.rows[0]);
    } catch (e) {
        console.error(e.message);
    }
});

// get all workstations at mills
app.get("/mills", async(req, res) => {
    try {
        const allWorkstations = await pool.query("SELECT * FROM mills");
        res.json(allWorkstations.rows);
    } catch (e) {
        console.error(e.message);
    }
});

// create a workstation at innis
app.post("/innis", async(req, res) => {
    try {
        console.log(req.body);
        const {host_name, student_name, status} = req.body;
        const newWorkstation = await pool.query("INSERT INTO innis (host_name, student_name, status) VALUES($1, $2, $3) RETURNING *", [host_name, student_name, status]);

        res.json(newWorkstation.rows[0]);
    } catch (e) {
        console.error(e.message);
    }
});

// get all workstations at innis
app.get("/innis", async(req, res) => {
    try {
        const allWorkstations = await pool.query("SELECT * FROM innis");
        res.json(allWorkstations.rows);
    } catch (e) {
        console.error(e.message);
    }
});

// create a student
app.post("/students", async(req, res) => {
    try {
        const {name} = req.body;
        const newStudent = await pool.query("INSERT INTO student (name) VALUES($1) RETURNING *", [name]);

        res.json(newStudent.rows[0]);
    } catch (e) {
        console.error(e.message);
    }
});

// get all students
app.get("/students", async(req, res) => {
    try {
        const allStudents = await pool.query("SELECT * FROM student");
        res.json(allStudents.rows);
    } catch (e) {
        console.error(e.message);
    }
});

// get a student
app.get("/students/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const student = await pool.query("SELECT * FROM student WHERE student_id = $1", [id]);

        res.json(student.rows[0]);
    } catch (e) {
        console.error(e.message);
    }
});

// update a student
app.put("/students/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const {name} = req.body;
        const updateStudent = await pool.query("UPDATE student SET name = $1 WHERE student_id = $2", [name, id]);

        res.json("Student was updated!");
    } catch (e) {
        console.error(e.message);
    }
});

// delete a student
app.delete("/students/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const deleteStudent = await pool.query("DELETE FROM student WHERE student_id = $1", [id]);

        res.json("Student was deleted!");
    } catch (e) {
        console.error(e.message);
    }
});

app.listen(5000, () => {
    console.log("server has started on port 5000");
})