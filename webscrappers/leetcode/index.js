import https from "https";
export const getRecentSubs = (callback) => {
  let queryBody = JSON.stringify({
    query: `query getRecentSubmissionList($username: String!) {
    recentSubmissionList(username: $username) {
      runtime
      title
      titleSlug
      timestamp
      statusDisplay
      lang
      id
    }
  }`,
    variables: { username: "Zakpak0" },
  });
  let options = {
    hostname: "leetcode.com",
    method: "POST",
    port: 443,
    path: "/graphql",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": queryBody.length,
      "User-Agent": "Node",
    },
  };

  let req = https.request(options, (res) => {
    let body = "";
    res.on("data", (data) => {
      body += data;
    });
    res.on("error", (error) => {
      console.log(error);
    });
    res.on("close", (join) => {
      body = JSON.parse(body);
      let answeredQuestions = [];
      body.data.recentSubmissionList.map((question) => {
        if (question.statusDisplay == "Accepted") {
          answeredQuestions.push(question);
        }
      });
      console.log(answeredQuestions);
    });
  });

  req.write(queryBody);
  req.end();
};
getRecentSubs();
