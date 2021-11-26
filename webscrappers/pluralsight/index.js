import https from "https";
export const getPluralsightInfo = {
  currentlyLearning: (callback) =>
    https.get(
      "https://app.pluralsight.com/profile/data/currentlylearning/83b81959-5219-4864-a1f6-00bfa47c976f",
      (response) => {
        let body = "";
        response.on("data", (data) => {
          body += data;
        });
        response.on("close", (join) => {
          body = JSON.parse(body);
          return callback(body);
        });
      }
    ),
  badges: (callback) =>
    https.get(
      "https://app.pluralsight.com/profile/data/badges/83b81959-5219-4864-a1f6-00bfa47c976f",
      (response) => {
        let body = "";
        response.on("data", (data) => {
          body += data;
        });
        response.on("close", (join) => {
          body = JSON.parse(body);
          return callback(body);
        });
      }
    ),
  completedCoures: (callback) =>
    https.get(
      "https://app.pluralsight.com/profile/data/completedcourses/83b81959-5219-4864-a1f6-00bfa47c976f",
      (response) => {
        let body = "";
        response.on("data", (data) => {
          body += data;
        });
        response.on("close", (join) => {
          body = JSON.parse(body);
          return callback(body);
        });
      }
    ),
};
export const currentlyLearning = getPluralsightInfo.currentlyLearning(
  (callback) => {
    return callback;
  }
);
export const badges = getPluralsightInfo.badges((callback) => {
  return callback;
});
export const completedCoures = getPluralsightInfo.completedCoures(
  (callback) => {
    return callback;
  }
);
