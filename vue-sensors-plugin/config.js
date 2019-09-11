/**
* @Description: 神策统计配置文件
* @author DaiSX
* @date 2019-07-29
*/
const config = {
    // server_url: '神策后台接收地址',
    // name: 'sensors', // 全局名称 默认 sensors
    // heatmap_url: "./heatmap.min.js",// heatmap.min.js 文件的地址，请从 GitHub 获取并且放在你们自己网站目录下。神策分析中点击分析及触达分析功能代码，代码生成工具会自动生成。
    // 如果神策代码中 sensorsdata.min.js 版本是 1.9.1 及以上版本，这个参数必须配置，低于此版本不需要配置。
    // heatmap: {
    // clickmap: 'default', // 是否开启点击图，默认 default 表示开启，自动采集 $WebClick 事件，可以设置 'not_collect' 表示关闭 需要 JSSDK 版本号大于 1.7
    // scroll_notice_map: 'default', // 是否开启触达注意力图，默认 default 表示开启，自动采集 $WebStay 事件，可以设置 'not_collect' 表示关闭 需要 JSSDK 版本号大于 1.9.1
    // loadTimeout: 设置多少毫秒后开始渲染点击图,因为刚打开页面时候页面有些元素还没加载
    // collect_url:  type: {Function} 返回真会采集当前页面的元素点击事件，返回假表示不采集当前页面,设置这个函数后，内容为空的话，是返回假的。不设置函数默认是采集所有页面
    // collect_element: type: {Function} 用户点击页面元素时会触发这个函数，让你来判断是否要采集当前这个元素，返回真表示采集，返回假表示不采集
    // custom_property: type: {Function}  假如要在 $WebClick 事件增加自定义属性，可以通过标签的特征来判断是否要增加
    // collect_input: type: {Function} 如果返回真，表示采集 input 内容，返回假表示不采集 input 内容,默认不采集
    // element_selector: SDK 默认优先以元素 ID 作为选择器采集点击事件，若不想以 ID 作为选择器，可以设置该参数为 'not_use_id' 1.12.1 以上版本支持
    // renderRefreshTime: 第二版点击图滚动滚动条，改变页面尺寸后延时多少毫秒重新渲染页面
    // scroll_delay_time: '1000' // 设置触达图的有效停留时间，默认超过 4 秒以上算有效停留
    // custom_property: function(target) {
    //     console.log('target', target.id);
    //     if (target.id === 'a') {
    //         return {
    //             a: 'i am a'
    //         };
    //     }
    //     else {
    //         return {
    //             b: 'i am b'
    //         };
    //     }
    // },
    // collect_element: function() {
    //     return true;
    // },
    // collect_input: function(target_element) {
    //     console.log('target_element', target_element);
    //     return true;
    // },
    // },
    // scrollmap: { // 滚动 停留事件
    //     collect_url: function() {
    //         // return true;
    //         //如果只采集首页
    //         if (location.href === 'http://shence.demo.com:8080/') {
    //             return true;
    //         }
    //     }
    // },
    // cross_subdomain: true, // 表示在根域下设置 cookie 。也就是如果你有 zhidao.baidu.com 和 tieba.baidu.com 两个域，且有一个用户在同一个浏览器都登录过这两个域的话，我们会认为这个用户是一个用户。如果设置成 false 的话，会认为是两个用户。默认 true。
    // show_log: true, // 后会在网页控制台打 logger，会显示发送的数据,设置 false 表示不显示。默认 true。
    // is_track_device_id:设置成 true 后， 表示事件属性里面添加一个设备 id 的属性，存贮在 cookie 里面并发送。默认 false，记录但不发送。
    // send_type: 默认值 'image' 表示使用图片 get 请求方式发数据，( 神策系统 1.10 版本以后 ) 可选使用 'ajax' 和 'beacon' 方式发送数据，这两种默认都是 post 方式， beacon 方式兼容性较差。
    // callback_timeout: 默认值 200 ，单位毫秒，表示回调函数超时时间，如果数据发送超过 callback_timeout 还未返回结果，会强制执行回调函数。（SDK 版本 1.11.6 以后支持）
    // queue_timeout: 默认值 300 ，单位毫秒，表示队列发送超时时间，如果数据发送时间超过 queue_timeout 还未返回结果，会强制发送下一条数据。（SDK 版本 1.11.6 以后支持）
    // datasend_timeout: 默认值 3000 ，单位毫秒，表示数据发送超时时间，如果数据发送超过 datasend_timeout 还未返回结果，会强制取消该请求。（SDK 版本 1.11.6 以后支持）
    // is_track_latest: 是否开启 $latest 最近一次相关事件属性采集，默认值为一个对象。（SDK 版本 1.12.18 以后支持）详细配置参考
    // is_track_single_page: true, // 默认 值false，表示是否开启单页面自动采集 $pageview 功能，SDK 会在 url 改变之后自动采集web页面浏览事件 $pageview。（SDK 版本 1.12.18 以后支持）
    // is_track_latest: {
    //       // 是否采集$latest_utm最近一次广告系列相关参数，默认值true
    //   utm: true,
    //       // 是否采集$latest_traffic_source_type最近一次流量来源类型，默认值true
    //   traffic_source_type: true,
    //       // 是否采集$latest_search_keyword最近一次搜索引擎关键字，默认值true
    //   search_keyword: true,
    //       // 是否采集$latest_referrer最近一次前向地址，默认值true
    //   referrer: true,
    //       // 是否采集$latest_referrer_host最近一次前向地址，默认值true
    //   referrer_host: true,
    //       // 是否采集$latest_landing_page最近一次落地页地址，默认值false
    //   landing_page: true
    // },
    // source_channel: ['mp']
    // source_type: 自定义搜索引擎流量，社交流量，搜索关键词。具体用法参考 7.2 。
    // use_client_time: 默认为 false ，表示不使用客户端时间，使用服务端时间，如果设置为 true 表示使用客户端系统时间。如果你在属性中加入 {$time: new Date()} ，注意这里必须是 Date 类型，那么这条数据就会使用你在属性中传入的这个时间。
    // source_channel: 默认取来源是根据 utm_source 等 ga 标准来的。如果你用的是百度统计的 hmsr 等参数。可以在这里面加入，参数必须是数组，比如 ['hmsr']。
}
export default config
