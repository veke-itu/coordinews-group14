import Parse from "parse";

async function getUsers() {
  const User = Parse.Object.extend("User");
  const query = new Parse.Query(User);

  return await query.find();
}

export { getUsers };