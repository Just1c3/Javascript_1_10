//Javascript Problems 1-10

//First method
function sleepIn(weekday,vacation) {
    if (weekday === false && vacation === true){
        return  true;
    }
    if (weekday === true && vacation === false){
        return false;
    }
    if (weekday === false && vacation === true){
        return true;
    }
}
//Second method
function monkey_trouble( a_smile, b_smile) {
    if (a_smile === true && b_smile === false){
        return false;
    }
    if(a_smile === true && b_smile=== true ){
        return true;
    }
    if(a_smile === false && b_smile=== true){
        return false;
    }
    if(a_smile === false && b_smile=== false){
        return true;
    }
}
//Third Method
function string_times(string,x){
    var answer= "";
    for(var i = 0; i < x; i++){
        answer= answer + string;
    }
    return answer;
}
//Fourth Method
function front_times(word,x) {
    var answer= "";
    var front = word.substring(0,3)
    for(var i = 0; i < x; i++){
        answer= answer + front;
    }
    return answer;
}
//Fifth Method
function string_bits(word){
    var answer= "";
    for(var i = 0; i < word.length ; i= i +2){
        answer= answer + word[i];
    }
    return answer;
}
//Sixth Method
function caughtSpeeding (speed,birthday){
    if (birthday = true){
        speed = speed - 5;
    }
    if (speed <= 60){
        return 0;
    }
    if (speed >= 60 && speed <= 80){
        return 1;
    }
    if(speed >= 81){
        return 2;
    }
}
//Seventh Method
function fizz_buzz (number,x){
    var fizz = "Fizz";
    var buzz = "Buzz";
    var x = "!";
    var fizzbuzz = "FizzBuzz";
    if(number % 3 == 0 && number % 5 == 0){
        return fizzbuzz;
    }
    if(number % 5 == 0) {
        return buzz;
    }
    if(number % 3 == 0) {
        return fizz;
    }else{
        return number + x;
    }
}
//Eighth Method
function teaParty (tea,candy){
    var good = 1;
    var great = 2;
    var alwaysBad = 0;
    if( tea < 5 || candy < 5){
        return alwaysBad;
    }
    if( tea >= candy * 2 || candy >= tea * 2 ){
        return great;
    }
    if( tea >= 5 && candy >= 5){
        return good;
    }
}
//Ninth Method
function blackjack (x,y){
    var over = 0;
    var bj = "Black Jack";
    if(x > 21 && y > 21){
        return over;
    }
    if(x<= 21 && y<= 21 && x < y){
        return y;
    }
    if(x<= 21 && y<= 21 && x > y){
        return x;
    }
    if(x >= 21 && y>= 21 && x>y){
        return y;
    }
    if(x >= 21 && y>= 21 && x>y){
        return y;
    }
    if(x > 21 && y <= 21 && y<x){
        return y;
    }
    if(x >= 21 && y < 21 && y>x){
        return x;
    }
    if(x<= 21 && y > 21 && x<y){
        return x;
    }
}
//Ninth Method
function loneSum (x,y,z){
    if(x != y && y!= z && z != x ){
        return x+y+z;
    }
    if( y!= z && x==z){
        return y;
    }
    if(x==y && z!=x){
        return z;
    }
    if(x!=z && y==z){
        return x;
    }
    if(x == y && y == z){
        return 0;
    }
}

