# 神策统计

> 用户行为分析、 统计  
### ready 
- webpack配置别名 @ 指向src目录
```javascript
    resolve: {
      alias: {
        '@': resolve('src')
        ...
      }
    }
```
### 全埋点开启
```javascript main.js
    import SensorsSdk from '../src/assets/js/sensors/index.js';
    Vue.use(SensorsSdk, {
      name: 'sensors',
      heatmap: {
        clickmap: 'default',       // $webClick    sensors.quick('autoTrack')
        scroll_notice_map: 'default', // $webStay
        scroll_delay_time: 4000
      }
    }); // 神策统计 初始化
    // 路由切换的时候调用      $pageView
    router.afterEach((to, from) => {
      Vue.nextTick(() => {
        window.sensors.quick('autoTrackSinglePage');
      });
    });
```
### 基础用法
 -  添加依赖 npm install sa-sdk-javascript  
 -  引入 main.js, 通过 根目录的config/index.js中区分环境， 配置字段 sensors
    -  import SensorsSdk from '../xxx/xxx/xx/sensors/index.js';
    - Vue.use(SensorsSdk, { name: 'sensors' // default  })  第二个参数可选, 此配置优先级高于 根目录的config/index.js 中的 sensors字段
```html
    
 - 调用 
```html
<script>
   window.sensors.xxx();
</script>
        
```    
