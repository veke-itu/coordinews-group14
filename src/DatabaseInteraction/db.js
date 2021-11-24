import Parse from "parse";

async function getUsers() {
  const User = Parse.Object.extend("User");
  const queryUser = new Parse.Query(User);

  return await queryUser.findAll();
}

async function getArticles() {
  const Article = Parse.Object.extend("Article");
  const queryArticle = new Parse.Query(Article);

  return await queryArticle.findAll();
}

export {getUsers, getArticles};

