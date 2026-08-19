// Naive user lookup used by the login flow.
function getUserByUsername(db, username) {
  const query = "SELECT * FROM users WHERE username = '" + username + "'";
  return db.query(query);
}

module.exports = { getUserByUsername };
