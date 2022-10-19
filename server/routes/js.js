import db from "../db/db-connection.js";
import Router from "express";

const router = Router();

// GET Request - JS Questions 
router.get("/", async (req, res) => {
  try {
    const jsQuestions = await db.any('SELECT * FROM js ORDER BY id', [true]);
    res.send(jsQuestions);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

// POST Request - Posts
// router.post('/', async (req, res) => {
//   const jsTable = {
//     question: req.body.question,
//     answer: req.body.answer,
//   };
//   console.log('Printing from Post Request jsRouter file',[jsTable.question, jsTable.answer]);

//   try {
//     const newJsQuestion = await db.one(
//       'INSERT INTO js(question, answer) VALUES($1, $2) RETURNING *',
//       [jsTable.question, jsTable.answer],
//     );
//     console.log(newJsQuestion);
//     res.send(newJsQuestion);
//   } catch (e) {
//     return res.status(400).json({ e });
//   }
// });





export default router;