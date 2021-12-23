require("dotenv").config();

const express = require("express");
const app = express();

//middleware
app.use(express.json());

// /posts for postRoutes
app.use("/posts", require("./routes/post.route"));

//Global error handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "something went wrong",
  });
});

//listen on pc port
const port = process.env.PORT || 300;
app.listen(port, () => console.log(`Listening on port ${port}`));
