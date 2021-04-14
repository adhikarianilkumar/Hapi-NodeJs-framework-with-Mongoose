const userRoute = {
  method: "GET",
  path: "/",
  handler: (request, h) => {
    return "Hello This is Anil!";
  },
};

module.exports = [userRoute];
