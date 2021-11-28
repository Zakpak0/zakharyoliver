import http from "http";
import url from "url";
import { verifyId } from "./googleapis/gmail/service.js";
import { listEvents } from "./googleapis/googlecalendar/index.js";
import { mapGithubData } from "./webscrappers/github/service.js";
import { mapLeetcodeData } from "./webscrappers/leetcode/service.js";
import { mapPluralsightData } from "./webscrappers/pluralsight/service.js";

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
      let responseData = [];
      let timeout = setTimeout(() => {
        response.write(JSON.stringify(responseData));
        response.end();
      }, 10000);
      mapGithubData(
        (repo) => {
          responseData.push(repo);
          if (responseData.length == 3) {
            clearTimeout(timeout);
            response.write(JSON.stringify(responseData));
            response.end();
          }
        },
        (repoCount) => {
          responseData.push(repoCount);
          if (responseData.length == 3) {
            clearTimeout(timeout);
            response.write(JSON.stringify(responseData));
            response.end();
          }
        },
        (contributions) => {
          responseData.push(contributions);
          if (responseData.length == 3) {
            clearTimeout(timeout);
            response.write(JSON.stringify(responseData));
            response.end();
          }
        }
      );
    }
    if (request.method === "GET" && parsedUrl.pathname === "/pluralsight") {
      response.setHeader("Content-Type", "application/json");
      response.statusCode = 201;
      let responseData = [];
      let timeout = setTimeout(() => {
        response.write(JSON.stringify(responseData));
        response.end();
      }, 10000);
      mapPluralsightData(
        (courseData) => {
          responseData.push(courseData);
          if (responseData.length == 4) {
            clearTimeout(timeout);
            response.write(JSON.stringify(responseData));
            response.end();
          }
        },
        (learningData) => {
          responseData.push(learningData);
          if (responseData.length == 4) {
            clearTimeout(timeout);
            response.write(JSON.stringify(responseData));
            response.end();
          }
        },
        (badgeData) => {
          responseData.push(badgeData);
          if (responseData.length == 4) {
            clearTimeout(timeout);
            response.write(JSON.stringify(responseData));
            response.end();
          }
        },
        (activityData) => {
          responseData.push(activityData);
          if (responseData.length == 4) {
            clearTimeout(timeout);
            response.write(JSON.stringify(responseData));
            response.end();
          }
        }
      );
    }
    if (request.method === "GET" && parsedUrl.pathname === "/leetcode") {
      response.setHeader("Content-Type", "application/json");
      response.statusCode = 201;
      let responseData = [];
      let timeout = setTimeout(() => {
        response.write(JSON.stringify(responseData));
        response.end();
      }, 10000);
      mapLeetcodeData((recentSubs) => {
        responseData.push(recentSubs);
        if (responseData.length == 1) {
          clearTimeout(timeout);
          response.write(JSON.stringify(responseData));
          response.end();
        }
      });
    }
    if (
      request.method === "POST" &&
      parsedUrl.pathname === "/makeappointment"
    ) {
    }
  });

  server.listen(PORT, console.log(`API is now running on port ${PORT}`));
};
init();
