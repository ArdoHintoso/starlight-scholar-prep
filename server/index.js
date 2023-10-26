const express = require("express");
const cors = require("cors");
const Pool = require("pg").Pool;

const app = express();

// db
const pool = new Pool({
  user: "postgres",
  password: "lol",
  host: "localhost",
  database: "starlight",
  port: 5432,
});

// middleware
app.use(cors());
app.use(express.json());

// CRU routes
//// create
app.post("/worksheet", async (req, res) => {
  try {
    const { x, operator, y, answer, statement, qNum, correct } = req.body;
    const newAns = await pool.query(
      "INSERT INTO worksheet2 (operand1, operator, operand2, answer, statement, q_num, correct) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [x, operator, y, answer, statement, qNum, correct],
    );

    res.json(newAns.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//// read
app.get("/worksheet", async (req, res) => {
  try {
    const allCompleted = await pool.query(
      "SELECT * FROM worksheet2 ORDER BY q_id DESC",
    );
    res.json(allCompleted.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//// update
app.put("/worksheet/:q_id", async (req, res) => {
  try {
    const { q_id } = req.params;
    const { latestAnswer, correct } = req.body;
    // eslint-disable-next-line no-unused-vars
    const updateAns = await pool.query(
      "UPDATE worksheet2 SET answer = $1, correct =$2 WHERE q_id = $3",
      [latestAnswer, correct, q_id],
    );

    res.json(`${q_id} was updated`);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
