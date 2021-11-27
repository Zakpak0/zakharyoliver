import https from "https"
let accessToken = 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
const {getRepos,getRepoCount,getContributions} = getGithubInfo = {
getRepos: () => {let options = {
    hostname: "api.github.com",
    method: "GET",
    port: 443,
    path: "/users/Zakpak0/repos",
    headers: {
      "User-Agent": "Node",
      Authorization: `Bearer ${accessToken}`
    }
}

https.get(options, (res)=> {
    let body = ""
    res.on("data", (res) => {
        body += res
    })
    res.on("close", (res) => {
        body = JSON.parse(body)
        console.log(body)
    })
})},
getRepoCount: () => { let options = {
    hostname: "api.github.com",
    method: "GET",
    port: 443,
    path: "/users/Zakpak0",
    headers: {
      "User-Agent": "Node",
      Authorization: `Bearer ${accessToken}`
    }
}

https.get(options, (res)=> {
    let body = ""
    res.on("data", (res) => {
        body += res
    })
    res.on("close", (res) => {
        body = JSON.parse(body)
        console.log(body)
    })
}) },
 getContributions: () => {let queryBody = {
    "query": `query {
        user(login: "Zakpak0") {
          name
          contributionsCollection {
            contributionCalendar {
              colors
              totalContributions
              weeks {
                contributionDays {
                  color
                  contributionCount
                  date
                  weekday
                }
                firstDay
              }
            }
          }
        }
      }`
}

let options = {
    hostname: "api.github.com",
    method: "GET",
    port: 443,
    path: "/graphql",
    headers: {
      "User-Agent": "Node",
      Authorization: `Bearer ${accessToken}`,
    }
}

let req = https.get(options, (res)=> {
    let body = ""
    res.on("data", (res) => {
        body += res
    })
    res.on("close", (res) => {
        body = JSON.parse(body)
        console.log(body)
    })
})

req.write(queryBody)
req.end()}}