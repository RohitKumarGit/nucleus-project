const AdminBro = require('admin-bro')
const AdminBroMongoose = require('@admin-bro/mongoose')
AdminBro.registerAdapter(AdminBroMongoose)
const Billing = require('./Backend/models/Billing');
const User = require("./Backend/models/Users");
const Bookings = require('./Backend/models/Bookings');
const Buffet = require('./Backend/models/Buffet');
const Order = require('./Backend/models/Order');
const AdminBroExpressjs = require('@admin-bro/express');
const Restaurant = require('./Backend/models/Restaurant');
const Slots = require('./Backend/models/BuffetSlot')
const Room = require('./Backend/models/Room');
const Table_reserve = require('./Backend/models/Table_reserve');
const Users = require('./Backend/models/Users');
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
  
  
      },
      {
        resource: Slots,
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
module.exports = routers