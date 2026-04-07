text = text.toLowerCase()
let symbols = [',','.','!','?','\"','-',':','“','”']
for(let s of symbols){
    text = text.replaceAll(s ,"");
    console.log(s)
}
text = text.split(" ")
console.log(text)
let f = {};
for(let i = 0; i < text.length-1; i++){
    let w = text[i]
    let wp = text[i+1]
    if(Object.hasOwn(f,w)){
        let k = f[w]
        if(Object.hasOwn(k,wp)){
            k[wp] = k[wp]+1
        } else {
            k[wp] = 1
        }
    } else {
        f[w] = {}
    }
}
console.log(f)