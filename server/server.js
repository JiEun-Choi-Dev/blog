require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const axios = require("axios").default;

// app.get("/example", routes.index);

app.get("/api/host", (req, res) => {
  res.send({ host: "jieun" });
});

app.get("/outh/token", (req, res) => {
  const tistory = "https://www.tistory.com/oauth/access_token";
  const request = axios.post(
    `${tistory}?client_id=${process.env.TISTORY_ACCESS_KEY}&client_secret=${process.env.TISTORY_SECRET_KEY}&redirect_uri=https://locallhost4000&code=1f7316020e477b19a84fb91a517ea915afb796745a489c68bab1bec9f5a5e7b853e6eba5&grant_type=authorization_code`
  );

  request.then(({ data }) => {
    const access_token = data.access_token;
    res.send({
      access_token: access_token
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
