const express = require("express");
const app = express()
const port = process.env.PORT || 8082;
const mongoose = require("mongoose")
const history = require('connect-history-api-fallback')
var morgan = require('morgan')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const routers = require('./adminbro');
// schedules
var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();
rule.hour = 0 // hour 0-23
rule.minute = 0 // minute 0 - 59
var j = schedule.scheduleJob(rule,function(){
  // do the reset here @Sujal :) Thanks
})




const User = require("./Backend/models/Users");

const uri = "mongodb+srv://user:uvOyX5UA6I2mjplk@cluster0.azmit.mongodb.net/NUCLEUS?retryWrites=true&w=majority"
mongoose.connect(uri, {
  useNewUrlParser: "true",
})
mongoose.connection.on("error", err => {
  console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})
app.use(morgan('tiny'))



app.use('/admin', routers)
const path = require("path")
app.use(history({
  verbose: false,
  disableDotRule: false
}));
app.use('/', express.static(path.join(__dirname, 'dist')));
app.post('/signup/setup', async (req, res) => {
  console.log(req.body)
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send({
      user
    });
  } catch (e) {
    console.log(e)
    res.status(400).send(e);
  }
});
const BuffetRouter = require('./Backend/routers/buffet')
const RestaurantRouter = require('./Backend/routers/restaurant')
const TableRouter = require('./Backend/routers/table')
const RoomRouter = require('./Backend/routers/room')
// put all routers which need authentication below this
app.use(BuffetRouter)
app.use(RestaurantRouter)
app.use(TableRouter)
app.use(RoomRouter)
app.listen(port, function (err) {
  if (!err) {
    console.log("server is running at ", port)
  }
})