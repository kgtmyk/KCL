function route(pathname) {
  console.log("About to route a request for " + pathname);
}

function upload() {
  console.log("Request handler 'upload' was called.");
}

function start() {
  console.log("Request handler 'start' was called.");
}

exports.start = start;
exports.upload = upload;
exports.route = route;
