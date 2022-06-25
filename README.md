# Docsify Test

Test out using the docsify platform, which auto-generates a documentation site based on markdown files.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#github.com/neontuts/docsify-test)

<div id="usersList">
  <li v-for="user in users">
    <a :href="user.avatar" target="_blank">{{ `${user.name} (${user.username})` }}</a>
  </li>
</div>

<script>
  new Vue({
    el: '#usersList',
    data: function() {
      return {
        users: null,
      };
    },
    created: function() {
      fetch("Data.json")
        .then(res => res.json())
        .then(data => (this.users = data))
        .catch(err => console.log(err));
    }
  });
</script>
