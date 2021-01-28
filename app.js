function getvalue(a) {
    var abc = document.getElementById('abc') 
  abc.value += a ; 

} 
function calculate () {

var abc = document.getElementById('abc') 

// var a = abc.value

// var b = eval(a);

abc.value= eval(abc.value)

}

function remove() {

var abc = document.getElementById('abc')

abc.value = '' ;


}