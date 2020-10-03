const app = require("express")();
const port = process.env.PORT || 8080 ;
const mongoose = require("mongoose")
const Billing = require('./Backend/models/Billing');
const Bookings = require('./Backend/models/Bookings');
const Buffet = require('./Backend/models/Buffet');
const Order = require('./Backend/models/Order');
const Restaurant = require('./Backend/models/Restaurant');
const Room = require('./Backend/models/Room');
const Users = require('./Backend/models/Users');
const AdminBro = require('admin-bro')
const AdminBroMongoose = require('@admin-bro/mongoose')
const AdminBroExpressjs = require('@admin-bro/express') 
AdminBro.registerAdapter(AdminBroMongoose)
mongoose.connect("mongodb+srv://user:xtXE0mmcC7GmhZrM@cluster0.begc9.mongodb.net/NUCLEUS?retryWrites=true&w=majority", {
  useNewUrlParser: "true",
})
mongoose.connection.on("error", err => {
    console.log("err", err)
  })
mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected")
})
const adminBro = new AdminBro({
    resources:[Billing,Bookings,Buffet,Order,Restaurant,Room,Users]
  })
  const routers = AdminBroExpressjs.buildAuthenticatedRouter(adminBro,{
    authenticate: async (email, password) => {
      if(email==="admin@admin.com" && password =="admin"){
        return true
      }
      else {
        return false
      }
    },
    cookiePassword: 'some-secret-password-used-to-secure-cookie',
  })
  app.use(adminBro.options.rootPath, routers)
app.listen(port, function(err){
    if(!err){
        console.log("server is running at ", port)
    }
})