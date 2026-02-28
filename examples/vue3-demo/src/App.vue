<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
const roles = ["admin", "user"];
</script>

<template>
  <!-- <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <div class="v-permission-demo">
    <h2>v-permission 权限指令演示</h2>
    <p>const roles = ["admin", "user"];</p>
    <div v-permission:[roles]="['admin']">
      只有 admin 能看到:v-permission:[roles]="['admin']"
    </div>
    <div v-permission:[roles]="['user']">
      只有 user 能看到:v-permission:[roles]="['user']"
    </div>
    <hr />

    <div v-permission="{ roles, auths: ['admin'] }">
      只有 admin 能看到:v-permission="{ roles, auths: ['admin'] }"
    </div>
    <div v-permission="{ roles, auths: ['user'] }">
      只有 user 能看到:v-permission="{ roles, auths: ['user'] }"
    </div>
  </div>
  <!-- <div>只有 admin 能看到</div> -->
</template>

<style scoped>
.v-permission-demo {
  margin: 20px;
  padding: 20px;
  text-align: left;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
