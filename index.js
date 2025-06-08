const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/ask", async (req, res) => {
  const question = req.body.question;

  const knownAnswers = {
    "מהי תכנית דרך פרת": "תכנית מנהיגות לבני ובנות נוער מכל רחבי הארץ...",
    "כמה סמינרים יש": "יש 7 סמינרים לאורך השנה, 4 מהם בסופי שבוע ועוד 3 בחופשות.",
    "כמה משתתפים יש בתכנית": "בכל שכבה יש כ-100 חניכים, סה\"כ כ-300 בתכנית."
  };

  const match = Object.entries(knownAnswers).find(([key]) => question.includes(key));
  
  if (match) {
    res.json({ answer: match[1] });
  } else {
    res.json({ answer: "אינני יודע את התשובה לשאלה זו. ניתן לפנות לעדי מצוות דרך פרת במספר 058-608-1142." });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
