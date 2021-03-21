const testRoute = {
  method: "GET",
  path: "/",
  handler: (request, h) => {
    return "Hello This is Anil!";
  },
};

module.exports = [testRoute];
