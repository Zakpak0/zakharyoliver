import { sendEmail } from "./index.js";
import http from "http";
import url from "url";
import readline from "readline";

const appointmentConfirmationEmail = (callback) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const createRandomID = Math.floor(Math.random(400 * 15));
  let email;
  let server = http.createServer();
  server.on("request", (request, response) => {
    const parsedUrl = url.parse(request.url, true);
    console.log(request.method);
    if (
      request.method === "GET" &&
      parsedUrl.pathname === "/confirmappointment"
    ) {
      const { id } = parsedUrl.query;
      if (id == createRandomID) {
        response.setHeader("Content-Type", "text/html", "charset=utf-8");
        response.statusCode = 201;
        response.write(`
          <html>
          <h1>Thanks for Confirming your Appointment</h1>
          <html>`);
        response.end();
        callback(response, email);
        server.close();
      }
    }
  });
  server.listen(3200, console.log("The server is now listening on port 3200"));
  let html = `
  <div>
      <h1>Click Here to Confirm</h1>
      <button>
      <a
      href="http://192.168.1.14:3200/confirmappointment?id=${createRandomID}"
      >
      Yes
      <a/>
      </button> <button>No</button>
    </div>`;
  rl.question("Email Address?", (response) => {
    email = response;
    rl.close();
    if (email.length) {
      sendEmail(html, email, (response) => {
        console.log(response);
      });
    }
  });
};
export default appointmentConfirmationEmail;
