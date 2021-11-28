import http, { request } from "http";
import url from "url";
import { verifyId } from "./googleapis/gmail/service.js";
import { listEvents } from "./googleapis/googlecalendar/index.js";
import { mapGithubData } from "./webscrappers/github/service.js";

const init = async () => {
  const server = http.createServer();
  const PORT = 3200;
  server.on("request", (request, response) => {
    const parsedUrl = url.parse(request.url, true);
    console.log(request.method);
    console.log(parsedUrl.pathname);
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
    if (request.method === "GET" && parsedUrl.pathname === "/listevents") {
      console.log("here");
      response.setHeader("Content-Type", "application/json");
      response.statusCode = 201;
      listEvents((callback) => {
        response.write(callback);
        response.end();
      });
    }
    if (request.method === "GET" && parsedUrl.pathname === "/github") {
      response.setHeader("Content-Type", "application/json");
      response.statusCode = 201;
      mapGithubData(
        (repo) => {
          response.write(repo);
        },
        (repoCount) => {
          response.write(repoCount);
        },
        (contributions) => {
          response.write(contributions);
        }
      );
      response.end();
    }
    if (request.method === "GET" && parsedUrl.pathname === "/pluralsight") {
    }
    if (request.method === "GET" && parsedUrl.pathname === "/leetcode") {
    }
  });

  server.listen(PORT, console.log(`API is now running on port ${PORT}`));
};
init();
