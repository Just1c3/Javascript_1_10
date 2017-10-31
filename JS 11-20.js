//Javascript Problems 11-20

//Eleventh Method
function firstLast6 (integers) {
    if (integers[0] == 6 || integers[integers.length - 1] == 6){
        return true;
    }else{
        return false;
    }
}
//Twelfth Method
function has23 (array) {
    if(array [0]== 3  || array[0] == 2 || array[1] == 3 || array[1] == 2){
        return true;
    }else{
        return false;
    }
}
//Thirteenth Method
function fix23 (array) {
    var extra = array;
    for(var i = 0; i < array.length; i++){
        if (array[i] == 2 && array[i+1] == 3){
            extra[i + 1] = 0
        }
    }
    return extra;
}
//Fourteenth Method
function countYZ (string){
    var count =0;
    string= string.toLowerCase();
    for( var i=0;i<string.length;i++) {
        if (string[i] == "" && (string[i - 1] == "z") || (string[i - 1] == "y")) {
            count++;
        }
    }
    if(string[string.length-1] == "y" || string[string.length-1] == "z"){
        count++;
    }
    return count;
}
//Fifteenth Method
function endOther (stringx,stringy) {
    var x = stringx.toLowerCase();
    var y = stringy.toLowerCase();
    if(x.endsWith(y) || y.endsWith(x){
        return true;
    }else{
        return false;
    }
}