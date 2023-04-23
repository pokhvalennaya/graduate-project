const mongoose = require("mongoose");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: true }));
app.use("/api/auth", require("./routes/auth.route"));
async function init() {
  try {
    // const password = "L19Uq4eDilC85ejt";
    // const url = `mongodb+srv://elena_pokhvalennaya:${password}@cluster0.kcvahis.mongodb.net/users_db?retryWrites=true&w=majority`;
    await mongoose.connect(
      `mongodb+srv://elena_pokhvalennaya:L19Uq4eDilC85ejt@cluster0.kcvahis.mongodb.net/users_db?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: true,
      }
    );
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

init();
