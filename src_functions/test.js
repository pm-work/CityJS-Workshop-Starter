// src_functions/test.js
exports.handler = function(event, context, callback) {

    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    const string = event.body
    callback(null, {
    statusCode: 200,
    body: `Hello, ${string}`
    });
}