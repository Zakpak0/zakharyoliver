import https from "https";
const getRecentSubs = () => {
  let body = JSON.stringify({
    query: `query getRecentSubmissionList($username: String!, $limit: Int) {
    recentSubmissionList(username: $username, limit: $limit) {
      title
      titleSlug
      timestamp
      statusDisplay
      lang
      __typename
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
      "Content-Length": body.length,
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
    });
  });

  req.write(body);
  req.end();
};
https.get("https://leetcode.com/", (res) => {
  let body = "";
  res.on("data", (data) => {
    body += data;
  });
  res.on("error", (error) => {
    console.log(error);
  });
  res.on("close", (join) => {
    console.log(body);
  });
});
