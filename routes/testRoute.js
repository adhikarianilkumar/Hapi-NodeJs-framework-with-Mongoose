const User = require("../models/UserModel");

const testRoute = {
  method: "GET",
  path: "/test",
  handler: (request, h) => {
    return "Hello This is test!";
  },
};

module.exports = [testRoute];

// const Wolf = require('./models/Wolf');
module.exports = [
  {
    method: "GET",
    path: "/test",
    handler: function (request, reply) {
    //   User.create(request.body);
    console.log(request)
      const {
        firstName,
        middleName,
        lastName,
        gender,
        email,
        phoneNumber,
        password
      } = request.params;
      console.log(firstName,
        middleName,
        lastName,
        gender,
        email,
        phoneNumber,
        password)

      const user = new User({
        firstName,
        middleName,
        lastName,
        gender,
        email,
        phoneNumber,
        password
      });

      user.save(function (error, user) {
        if (error) {
          console.error(error);
        }
        reply(user.id);
      });
    },
  },
];
