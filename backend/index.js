import http from "http";
import url from "url";
import { verifyId } from "./googleapis/gmail/service.js";
import { listEvents } from "./googleapis/googlecalendar/index.js";

const init = () => {
  const server = http.createServer();
  const PORT = 3200;
  server.on("request", (request, response) => {
    const parsedUrl = url.parse(request.url, true);
    console.log(request.method);
    if (
      request.method === "GET" &&
      parsedUrl.pathname === "/confirmappointment"
    ) {
      const { id, event } = parsedUrl.query;
      verifyId(id, (callback) => {
        if (callback) {
          response.setHeader("Content-Type", "text/html", "charset=utf-8");
          response.statusCode = 201;
          response.write(`
                      <html>
                      <h1>Thanks for Confirming your Appointment</h1>
                      <html>`);
          response.end();
          createEvent(event, (response) => {
            return console.log(response);
          });
        }
      });
    }
    if (request.method === "GET" && parsedUrl.pathname === "listevents") {
      response.setHeader("Content-Type", "application/json");
      response.statusCode = 201;
      listEvents((callback) => {
        response.write(callback);
      });
    }
  });

  server.listen(PORT, `API is now running on port ${PORT}`);
};
init();
