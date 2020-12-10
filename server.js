import axios from 'axios';
// 测试环境/正式环境
let debuger = true;
const domainPath = {
    url:debuger?'http://106.52.105.253:1011/':'https://onchated.cn/'
};
const nameIds = {
    'login':{path:'api/user/login',params:{account:'',password:''}},
}

const instance = axios.create({
    baseURL: domainPath.url,
    timeout: 8000
});

function getData(params,reqPath,reqType){
    
    if(nameIds[reqPath]){
        let url = nameIds[reqPath].path;
        if(reqType === 'GET'){
            return new Promise((resolve, reject) => {
                instance.get(url+params).then(res => {
                    resolve(res.data)
                }).catch(error => {
                    reject(error)
                });
            });
        }else if(reqType === 'POST'){
            return new Promise((resolve, reject) => {
                instance.post(url, params).then(res => {
                    resolve(res.data)
                }).catch(error => {
                    reject(error)
                });
            });
        }else{
            alert('未定义请求类型！');
        }
      
    }else{
        alert('无定义接口！');
    }
    
}
module.exports = {
    getData,
    url:domainPath.url
}