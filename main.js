// Function to sort the users alphabetically.
const sortUsers = (users) => {
  const sortedUsers = users.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return sortedUsers;
};

// Function to create a list element for single user.
const createListElement = ({ name, username }) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.setAttribute("href", `../#/journeys/${username}.md`);
  a.setAttribute("title", name);
  a.textContent = name;
  li.append(a);
  return li;
};
