const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://abc:123@tuvung-smiqa.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true , useCreateIndex: true});

const Word = mongoose.model('Word', { 
    en : {type : String , require : true , trim : true , unique : true},
    vn : {type : String , require : true , trim : true },
    isMemorized : {type : Boolean , require : true , default : false},
});
module.exports = {Word}

//SELECT 
// Word.find({})
// .then(words => console.log(words))

//INSERT 
// const newword = new Word({en : "Six" , vn : "Sáu"})
// newword.save()
// .then(w => console.log(w))
// .catch(error => console.log(error.message))

//UPDATE
// Word.findByIdAndUpdate("5d653d399858c2168b320754",{isMemorized : true} , {new : true})
// .then(w => console.log(w))
// .catch(error => console.log(error.message))

//DELETE 
// Word.findByIdAndDelete("5d653d399858c2168b320754")
// .then(w => console.log(w))
// .catch(error => console.log(error.message))