const request = require('request')


https://pheptinhonline.herokuapp.com/chia/4/0
function cong(a ,b){
    return new Promise((reject , resolve) => {
        const URL = `https://pheptinhonline.herokuapp.com/cong/${a}/${b}`
        request(URL , {json : true}, function(error , response , body){
            if(error) return reject(error.message)
            if(typeof body.message != Number ) return reject(body.message)
            resolve(body.message)
        })
    })
}
function nhan(a ,b){
    return new Promise((reject , resolve) => {
        const URL = `https://pheptinhonline.herokuapp.com/nhan/${a}/${b}`
        request(URL , {json : true}, function(error , response , body){
            if(error) return reject(error.message)
            if(typeof body.message != Number ) return reject(body.message)
            resolve(body.message)
        })
    })
}function chia(a ,b){
    return new Promise((reject , resolve) => {
        const URL = `https://pheptinhonline.herokuapp.com/chia/${a}/${b}`
        request(URL , {json : true}, function(error , response , body){
            if(error) return reject(error.message)
            if(typeof body.message != Number ) return reject(body.message)
            resolve(body.message)
        })
    })
}
function tru(a ,b){
    return new Promise((reject , resolve) => {
        const URL = `https://pheptinhonline.herokuapp.com/tru/${a}/${b}`
        request(URL , {json : true}, function(error , response , body){
            if(error) return reject(error.message)
            if(typeof body.message != Number ) return reject(body.message)
            resolve(body.message)
        })
    })
}
// thực thi 1 điều bài toán

async function dientichHinhchunhat(a , b){
    // return new Promise((reject , resolve) => {
    //     nhan(a , b)
    //     .then(tich => chia(tich , 2))
    //     .then(thuong => resolve(thuong))
    //     .catch(error => reject(error))
    // })
    const tich = await nhan(a , b)
    const thuong = await chia(tich , 2)
    return thuong
}
dientichHinhchunhat(10 , 'a')
.catch(error => console.log(error))
.then(value => console.log(value))




