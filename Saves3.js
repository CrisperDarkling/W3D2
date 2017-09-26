function multiplication_table(number){
    for(var i=0;i<=30;i++){
        console.log(i*number);
    }
}

function max(number1, number2){
    if(number1>number2){
        console.log(number1);
    }
    else{
        console.log("ARRRRRRIBAAAAA!!!");
    }
}
max (3, 7);

function new_max(a, b, c){
    if(a>b && a>c ){
        console.log("UNO");
    }
    else if(b>a && b>c){
        console.log("DOS");
    }
    else{
        console.log("TRES")
    }
}
new_max(10, 6, 3);


    } else if (b > a && b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

new_max(6,10,8);

function isaVowel(letter) {
    var vowels = ['a','e','i','o','u'];
    var vowel = false;
    
    for (var i = 0; i < vowels.length; i++) {
        if (letter === vowels[i]) {
            vowel = true;
        }   
    }
    return vowel;
}

isaVowel("u");
isaVowel("b");

var oldArray = ['a','e','i','o'];
var newArray = [];

oldArray.push('u');

for (var i = 0; i < oldArray.length; i++) {
    newArray.unshift(oldArray[i]);
}

console.log(newArray);

//...............Attaching Event........................//
$("td").click(function() {
    
});
or
$("td").on("click", function(){
    
});...............................................................



describe("Put the description here", function() {
    it("say what it should do here", function() {
        expect(OUR_FUNCTION()).toBe(result);
    });
});
//.................^^For Jasmine Testing^^.............................//