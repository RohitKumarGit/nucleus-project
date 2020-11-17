const express = require("express");
const app = express()
const port = process.env.PORT || 8080;
const mongoose = require("mongoose")
const history = require('connect-history-api-fallback')
var morgan = require('morgan')
const {
  verifyToken
} = require('./Backend/middlewares/firebase');
const Billing = require('./Backend/models/Billing');
const Bookings = require('./Backend/models/Bookings');
const Buffet = require('./Backend/models/Buffet');
const Order = require('./Backend/models/Order');
const Restaurant = require('./Backend/models/Restaurant');
const Room = require('./Backend/models/Room');
const Table_reserve = require('./Backend/models/Table_reserve');
const Users = require('./Backend/models/Users');
const AdminBro = require('admin-bro')
const AdminBroMongoose = require('@admin-bro/mongoose')
const AdminBroExpressjs = require('@admin-bro/express');
const User = require("./Backend/models/Users");
AdminBro.registerAdapter(AdminBroMongoose)
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
morgan('tiny')
const permissions = function (currentAdmin, record, resource, permission) {

  if (currentAdmin.type === "Manager") {
    return true
  }
  if (currentAdmin.type === "Reception") {
    if (resource === "Billing" || resource === "Bookings") {
      return true
    }
    if (resource === "Users") {
      if (permission === "view") {
        return true
      }
    }
    if (resource === "Room") {
      if (permission === "view") {
        return true
      }
    }
  }
  if (currentAdmin.type === "Restaurant Owner") {
    if (resource === "Order" || resource === "Buffet" || resource === "Table_reserve") {
      if (permission === "view") {
        return true
      }
    }
    if (resource === "Restaurant") {
      if (permission === "view") {
        return true
      }
    }

  }
  return false
}
const adminBro = new AdminBro({
  branding: {
    companyName: "NUCLEUS ADMIN"
  },
  resources: [{
      resource: Billing,
      options: {
        actions: {
          new: {
            isAccessible: function ({
              currentAdmin,
              record
            }) {
              console.log("checking permission")
              return permissions(currentAdmin, record, "Billing", "new")
            }
          },
          edit: {
            isAccessible: function ({
              currentAdmin,
              record
            }) {
              return permissions(currentAdmin, record, "Billing", "edit")
            }
          },
          delete: {
            isAccessible: function ({
              currentAdmin,
              record
            }) {
              return permissions(currentAdmin, record, "Billing", "delete")
            }
          }
        }
      }

    },
    {
      resource: Bookings,
      options: {
        actions: {
          new: {
            isAccessible: function ({
              currentAdmin,
              record
            }) {
              return permissions(currentAdmin, record, "Bookings", "new")
            }
          },
          edit: {
            isAccessible: function ({
              currentAdmin,
              record
            }) {
              return permissions(currentAdmin, record, "Bookings", "edit")
            }
          },
          delete: {
            isAccessible: function ({
              currentAdmin,
              record
            }) {
              return permissions(currentAdmin, record, "Bookings", "delete")
            }
          }
        }

      }

    },
    {
      resource: Buffet,
      options: {
        actions: {
          new: {
            isAccessible: function ({
              currentAdmin,
              record
            }) {
              return permissions(currentAdmin, record, "Buffet", "new")
            }
          },
          edit: {
            isAccessible: function ({
              currentAdmin,
              record
            }) {
              return permissions(currentAdmin, record, "Buffet", "edit")
            }
          },
          delete: {
            isAccessible: function ({
              currentAdmin,
              record
            }) {
              return permissions(currentAdmin, record, "Buffet", "delete")
            }
          }
        }
      }


    }, {
      resource: Order,
      options: {
        actions: {
          new: {
            isAccessible: function ({
              currentAdmin,
              record
            }) {
              return permissions(currentAdmin, record, "Order", "new")
            }
          },
          edit: {
            isAccessible: function ({
              currentAdmin,
              record
            }) {
              return permissions(currentAdmin, record, "Order", "edit")
            }
          },
          delete: {
            isAccessible: function ({
              currentAdmin,
              record
            }) {
              return permissions(currentAdmin, record, "Order", "delete")
            }
          }
        }
      }


    }, {
      resource: Restaurant,
      options: {
        actions: {
          new: {
            isAccessible: function ({
              currentAdmin,
              record
            }) {
              return permissions(currentAdmin, record, "Restaurant", "new")
            },
            before: async (request, {
              currentAdmin
            }) => {
              request.payload = {
                ...request.payload,
                owner: currentAdmin._id,
              }
              return request
            }
          },
          edit: {
            isAccessible: function ({
              currentAdmin,
              record
            }) {
              return permissions(currentAdmin, record, "Restaurant", "edit")
            },
            before: async (request, {
              currentAdmin
            }) => {
              request.payload = {
                ...request.payload,
                owner: currentAdmin._id,
              }
              return request
            }
          },
          delete: {
            isAccessible: function ({
              currentAdmin,
              record
            }) {
              return permissions(currentAdmin, record, "Restaurant", "delete")
            },
            before: async (request, {
              currentAdmin
            }) => {
              request.payload = {
                ...request.payload,
                owner: currentAdmin._id,
              }
              return request
            }
          }
        }
      }


    }, {
      resource: Room,
      options: {
        actions: {
          new: {
            isAccessible: function ({
              currentAdmin,
              record
            }) {
              return permissions(currentAdmin, record, "Room", "new")
            }
          },
          edit: {
            isAccessible: function ({
              currentAdmin,
              record
            }) {
              return permissions(currentAdmin, record, "Room", "edit")
            }
          },
          delete: {
            isAccessible: function ({
              currentAdmin,
              record
            }) {
              return permissions(currentAdmin, record, "Room", "delete")
            }
          }

        }
      }

    }, {
      resource: Table_reserve,
      options: {
        actions: {
          new: {
            isAccessible: function ({
              currentAdmin,
              record
            }) {
              return permissions(currentAdmin, record, "Table_reserve", "new")
            }
          },
          edit: {
            isAccessible: function ({
              currentAdmin,
              record
            }) {
              return permissions(currentAdmin, record, "Table_reserve", "edit")
            }
          },
          delete: {
            isAccessible: function ({
              currentAdmin,
              record
            }) {
              return permissions(currentAdmin, record, "Table_reserve", "delete")
            }
          }
        }
      }


    }, {
      resource: Users,
      options: {
        actions: {
          new: {
            isAccessible: ({
              currentAdmin,
              record
            }) => {

              return permissions(currentAdmin, record, "Users", "new")
            }
          },
          edit: {
            isAccessible: function ({
              currentAdmin,
              record
            }) {

              return permissions(currentAdmin, record, "Users", "edit")
            }
          },
          delete: {
            isAccessible: function ({
              currentAdmin,
              record
            }) {

              return permissions(currentAdmin, record, "Users", "delete")
            }
          }
        }
      }


    }
  ]
})
const routers = AdminBroExpressjs.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    return User.comparePassword(email, password)
  },
  cookiePassword: 'some-secret-password-used-to-secure-cookie',
})
app.use(adminBro.options.rootPath, routers)
const path = require("path")
app.use(history({
  verbose: false,
  disableDotRule: false
}));
app.use('/', express.static(path.join(__dirname, 'dist')));
app.use(verifyToken)
// put all routers which need authentication below this
app.listen(port, function (err) {
  if (!err) {
    console.log("server is running at ", port)
  }
})