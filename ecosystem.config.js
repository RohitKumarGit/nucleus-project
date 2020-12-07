module.exports = {
  apps : [{
    name: "app",
    script: "./index.js",
    instances : "max",
    exec_mode : "cluster",
    env: {
      NODE_ENV: "development",
      "MONGO_URI" :"mongodb+srv://user:uvOyX5UA6I2mjplk@cluster0.azmit.mongodb.net/NUCLEUS?retryWrites=true&w=majority",
      "FB_URI":"https://nucleus.supplys.app/"
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}