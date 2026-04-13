let iterations = 10;

text = text.toLowerCase()
let symbols = [',','.','!','?','\"','-',':','“','”',""]
for(let s of symbols){
    text = text.replaceAll(s ,"");
}
const ctext = text.replace(/[\r\n]+/gm, " ").trim();
let words = ctext.split(" ")
let f = {};
for(let i = 0; i < words.length - 1; i++){
    let w = words[i];
    let wp = words[i + 1];

    if(!f[w]) {
        f[w] = {}; 
    }

    f[w][wp] = (f[w][wp] || 0) + 1;
}
let seed = randomString(words);

let sentence = [];
sentence.push(seed);
sentence = mkc(sentence,iterations)
console.log(document.getElementById("sentence") )
document.getElementById("sentence").textContent = sentence.join(" ")

function mkc(sentence,num){
    if(num == 0){
        return sentence
    }
    let pool = []
    let word = sentence[iterations-num];
    let map = f[word];
    for (const [key, value] of Object.entries(map)) {
        for(let x = 0; x < value; x++){
            pool.push(key)
        }
    }
    sentence.push(randomString(pool))
    return mkc(sentence,num-1)
}


function randomString(arr){
    return arr[(Math.trunc( (Math.random()*arr.length)))]
}