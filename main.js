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

// Docsify Configurations
window.$docsify = {
  name: "Journey Book",
  repo: "collab-community/journey-book",
  themeColor: "#FF6863",
  loadSidebar: "_layouts/sidebar.md",
  loadNavbar: "_layouts/navbar.md",
  homepage: "index.md",
  relativePath: true,
  executeScript: true,
  search: "auto",
  search: {
    maxAge: 86400000,
    paths: "auto",
    placeholder: "Search",
    noData: "No Results found!",
    depth: 6,
    hideOtherSidebarContent: false,
  },
  vueGlobalOptions: {
    data() {
      return {
        users: null,
      };
    },
    created() {
      fetch("Data.json")
        .then((response) => response.json())
        .then((data) => (this.users = sortUsers(data)))
        .catch((err) => console.log(err));
    },
  },
  plugins: [
    function (hook, vm) {
      hook.doneEach(function () {
        fetch("Data.json")
          .then((response) => response.json())
          .then((data) => {
            const journeysNav = document.getElementById("journeysNav");
            const sortedUsers = sortUsers(data);
            sortedUsers.forEach((user) => {
              journeysNav.appendChild(createListElement(user));
            });
          })
          .catch((err) => console.log(err));
      });
    },
  ],
};
