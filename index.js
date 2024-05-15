const express = require("express")

const app = express()



app.get("/", async (req, res) => {
  // Create a NewUser

  res.send("Hello kaise he aaap log  ! from Chhota server ")
})






app.listen(3000, () => console.log("Server is listning "))