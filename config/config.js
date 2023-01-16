/** @format */

const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.MONGODB_URI,
  },
  default: {
    SECRET: "mysecretkey",
    DATABASE:
      "mongodb+srv://Vinodku4848:Vinod123@cluster0.z6zy1tq.mongodb.net/prisma",
  },
};

exports.get = function get(env) {
  return config[env] || config.default;
};
