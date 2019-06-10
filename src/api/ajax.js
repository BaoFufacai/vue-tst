import axios from 'axios'

//封装AJAX请求
 export default function ajax(url,data={},type='GET'){
     return new Promise((resolve, reject)=>{
         let Promise
         // 1. 执行异步ajax请求
         if(type==='GET'){
            Promise= axios.get(url, {
                params:data
              })
         }else{
            Promise= axios.post(url,data)
         }
          // 2. 如果成功了, 调用resolve(value)
          Promise.then(response=> {
              resolve(response.data)
          }).catch(function (error) {
            console.log(error);
          });


     })

}