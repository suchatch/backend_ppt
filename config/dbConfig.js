require("dotenv").config();
module.exports = {
  HOST: "localhost",
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASS,
  DB: process.env.DB_DATABASE,
  dialect: "mysql",

  pool: {
    max: 300,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },

  define: {
    timestamps: false, //ส่วนตรงนี้ก็เป็นการตั้งค่าเพิ่มเติม
  },
};
