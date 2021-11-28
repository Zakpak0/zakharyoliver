import { sendEmail } from "./index.js";
import http from "http";
import readline from "readline";

const createRandomID = Math.floor(Math.random(400 * 15));

const appointmentConfirmationEmail = (callback, email) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  if (email.length) {
    sendEmail(html, email, (response) => {
      console.log(response);
    });
  }
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
};

export const verifyId = (id, callback) => {
  if (id == createRandomID) {
    callback(true);
  } else {
    callback(false);
  }
};

export default appointmentConfirmationEmail;
