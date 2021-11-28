import { getRepos, getRepoCount, getContributions } from "./index.js";

export const mapGithubData = (repos, repoCount, contributions) => {
  getRepos((callback) => {
    if (repos) repos(callback);
  });
  getRepoCount((callback) => {
    if (repoCount) repoCount(callback);
  });
  getContributions((callback) => {
    if (contributions) contributions(callback);
  });
};
