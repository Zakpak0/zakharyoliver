import {
  completedCoures,
  currentlyLearning,
  badges,
  activityInsigts,
} from "./index.js";

const mapPluralsightData = (
  courseData,
  learningData,
  badgeData,
  activityData
) => {
  completedCoures((callback) => {
    let courseAnaylitcs = [];
    callback.map((course) => {
      let { level, authors, title, timeCompleted } = course;
      let { displayName } = authors[0];
      return courseAnaylitcs.push({
        level,
        displayName,
        title,
        timeCompleted,
      });
    });
    courseData(courseAnaylitcs);
  });
  currentlyLearning((callback) => {
    let courseAnaylitcs = [];
    callback.map((course) => {
      let { level, authors, title, percentComplete } = course;
      let { displayName } = authors[0];
      return courseAnaylitcs.push({
        level,
        displayName,
        title,
        percentComplete,
      });
    });
    learningData(courseAnaylitcs);
  });
  badges((callback) => {
    let courseAnaylitcs = [];
    callback.map((course) => {
      let { name, iconUrl, description, dateAchieved } = course;
      return courseAnaylitcs.push({
        name,
        iconUrl,
        description,
        dateAchieved,
      });
    });
    badgeData(courseAnaylitcs);
  });
  activityInsigts((callback) => {
    let courseAnalytics = { hoursViewed: {}, subjectViews: [] };
    let { viewTime, subjectViews } = callback;
    let hoursViewed = `${Math.floor(
      Object.values(viewTime).reduce((a, b) => {
        return a + b;
      }, 0) /
        60 /
        60
    )}h ${Math.floor(
      Object.values(viewTime).reduce((a, b) => {
        return a + b;
      }, 0) / 60
    ) % 60}m`;
    courseAnalytics.hoursViewed = hoursViewed;
    Object.entries(subjectViews).map((entry) => {
      let [courseName, timeWatched] = entry;
      let hours = Math.floor(timeWatched / 60 / 60);
      let minutes = Math.floor((timeWatched / 60) % 60);
      courseAnalytics.subjectViews[courseName] = `${hours}h ${minutes}m`;
    });
    activityData(courseAnalytics);
  });
};
