export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  // keeping the added user in const user
  const user = req.body;
  //   Array ma push with id using spread operator
  users.push({ id: uuidv4(), ...user });
  //   Sending some info to the client after a user is added
  res.send(` USER with name: ${user.firstname} added to database.`);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id == id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with id: ${id} is deleted.`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (firstname) user.firstname = firstname;
  if (lastname) user.lastname = lastname;
  if (age) user.age = age;

  res.send(`User with id: ${id} has been updated !`);
};
