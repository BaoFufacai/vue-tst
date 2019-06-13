//自定义过滤器模块

import Vue from 'vue'
import moment from 'moment'
Vue.filter('data-format',function(value,formatStr){
    return  moment(value).format(formatStr||'YYYY-MM-DD HH:mm:ss');

})


// import moment from 'moment'
// import Vue from 'vue'

// Vue.filter('dateString', function (value, format) {
//   return moment(value).format(format || 'YYYY-MM-DD HH:mm:ss')
// })