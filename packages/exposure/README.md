[在线操作示例](https://IVANLEE99.github.io/youngsdream-vue-directive/index.html)

## v-exposure

### 1、安装

```
npm install @youngsdream/exposure
```

### 2、手动注册导入

```
import { vExposure } from '@youngsdream/exposure'
```
```
directives: {
    exposure: vExposure
},
```
### 3、全局注册

```
import ExposureDirective from "@youngsdream/exposure";

Vue.use(ExposureDirective);
```



### 4、使用

```
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
```

### 5、参数

v-exposure:arg={ data: 'test', fn: fn }

| 参数 | 说明 | 类型 | 默认值 |备注 |
| --- | --- | --- | --- |---|
| arg | 阈值 | number | 0.5 | 曝光阈值 |
| data | 透传数据 | any | - | 透传给回调函数的数据 |
| fn | 回调函数 | function | - | 曝光时触发的回调函数 

