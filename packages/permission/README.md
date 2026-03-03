[在线操作示例](https://IVANLEE99.github.io/youngsdream-vue-directive/index.html)

## v-permission

### 1、安装

```
npm install @youngsdream/permission
```

### 2、手动注册导入

```
import { vPermission } from '@youngsdream/permission'
```
```
directives: {
    permission: vPermission
},
```
### 3、全局注册

```
import PermissionDirective from "@youngsdream/permission";

Vue.use(PermissionDirective);
```



### 4、使用

```
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
```

### 5、参数

v-permission:arg=value

| 参数 | 说明 | 类型 | 默认值 |备注 |
| --- | --- | --- | --- |---|
| arg | roles | array | - | 所有权限列表 |
| value | auths | array | - | 当前权限列表 |


v-permission={ roles: ['admin', 'user'], auths: ['user'] }

| 参数 | 说明 | 类型 | 默认值 |备注 |
| --- | --- | --- | --- |---|
| roles | roles | array | - | 所有权限列表 |
| auths | auths | array | - | 当前权限列表 |

