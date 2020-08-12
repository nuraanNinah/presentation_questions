function count(l,w,b){
    var volume = l*w*b;
    return volume;
}
console.log(count(5,5,5))

function find(str){
    if(str == "Bommb"){
        return str;
    }else{
        return 'Its not a Bomb relax!';
    }
}

console.log(find("Bombs"))

function vowels(str){
    return str.length;
}
console.log(vowels("Ninah"))

function js_style(){
    text.style.fontSize = "15pt";
    text.style.fontFamily = "Comic Sans MS";
    text.style.color = "purple";
}