function getDataDelayOneSecond(fn){
    let count = 10
    setTimeout(()=> {
        count++
        fn(count)
    },1000)
}
getDataDelayOneSecond(function(count){
    console.log(count)    
})

http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=Saigon