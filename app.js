const express = require("express");
const morgan = require("morgan");
const path = require("path")
const models  = require("./models") // could be {db,Page, User}
const wikiRouter = require("./routes/wiki")
const userRouter = require("./routes/user")

const app = express();


app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./public")))
// parses url-encoded bodies
app.use(express.urlencoded({ extended: false }))

app.use('/wiki', wikiRouter);
app.use('/user', userRouter);


// db.authenticate().then(()=>{
//   console.log('connnected to the database')
// })




app.get("/", (req, res, next)=>{
  res.redirect('/wiki');
})



const PORT = 3000;

const init = async () =>{
  await models.db.sync({force: true})

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`)
  })
}

init()
