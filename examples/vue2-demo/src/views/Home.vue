<template>
  <div style="width: 100%; overflow: hidden">
    <div class="v-permission-demo">
      <h2>v-permission 权限指令演示</h2>
      <p>data() { return { roles: ["admin", "user"], }; },</p>
      <div v-permission:[roles]="['admin']">
        只有 admin 能看到:v-permission:[roles]="['admin']"
      </div>
      <div v-permission:[roles]="['admin2']">
        只有 admin2 能看到:v-permission:[roles]="['admin2']"
      </div>
      <div v-permission:[roles]="['user']">
        只有 user 能看到:v-permission:[roles]="['user']"
      </div>
      <div v-permission="{ roles, auths: ['admin'] }">
        只有 admin 能看到:v-permission="{ roles, auths: ['admin'] }"
      </div>
      <div v-permission="{ roles, auths: ['user'] }">
        只有 user 能看到:v-permission="{ roles, auths: ['user'] }"
      </div>
      <hr />
      <h2 style="margin-top: 100vh">v-exposure 曝光指令演示</h2>
      <div
        style="height: 200px; background: #f0f0f0"
        class="demo"
        v-exposure="{ data: 'test', fn: fn }"
      >
        <div>测试曝光指令 arg 默认0.5</div>
        <div>v-exposure="{ data: 'test', fn: fn }"</div>
        <span v-if="isExposure1" style="color: red">已曝光</span>
      </div>
      <div
        style="height: 200px; background: #f0f0ff"
        class="demo"
        v-exposure:1="{ data: 'test2', fn: fn }"
      >
        <div>测试曝光指令 arg 1</div>
        <div>v-exposure:1="{ data: 'test2', fn: fn }"</div>
        <span v-if="isExposure2" style="color: red">已曝光</span>
      </div>
      <div
        style="height: 200px; background: #f0ffff"
        class="demo"
        v-exposure:[0.8].always="{ data: 'test3', fn: fn }"
      >
        <div>测试曝光指令 arg 0.8 一直触发</div>
        <div>v-exposure:[0.8].always="{ data: 'test3', fn: fn }"</div>
        <span v-if="isExposure3" style="color: red"
          >已曝光{{ exposure3Time }}次</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState(["count"]),
  },
  data() {
    return {
      roles: ["admin", "user"],
      isExposure1: false,
      isExposure2: false,
      isExposure3: false,
      exposure3Time: 0,
    };
  },
  methods: {
    ...mapMutations(["increment"]),
    fn(data) {
      console.log("曝光:", data);
      if (data === "test") {
        this.isExposure1 = true;
      } else if (data === "test2") {
        this.isExposure2 = true;
      } else if (data === "test3") {
        this.isExposure3 = true;
        this.exposure3Time++;
      }
    },
  },
};
</script>

<style scoped>
.demo {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
