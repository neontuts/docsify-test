# Docsify Test

Test out using the docsify platform, which auto-generates a documentation site based on markdown files.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#github.com/neontuts/docsify-test)

<div id="usersList">
  <li v-for="user in users" :key="user.username">
    <img :src="user.avatar" width="40px" height="40px" />
    <a :href="'#/journeys/' + user.username">{{ user.name }}</a>
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
