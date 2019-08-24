const request = require('request')

function getDataCity(cityname ){
    return new Promise((reject, resolve) => {
        const URL = `http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${cityname}`

        request(URL , {json : true}, function(error , response , body){
            if(error) return reject(error.message)
            if(body.message) return reject(body.message)
            resolve(body.main.temp)
        })
    })
}

getDataCity('S')
.then(data => console.log(data))
.catch(error => console.log(error))

function cong,tru,nhan,chia(a ,b){

}
function dientichHinhchunhat(params) {
    
}
function chuvinhat(params) {
    
}

