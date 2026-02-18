print = console.log
let cards = []
class Card{
    constructor(name){
        this.name = name;
        this.image = `https://plantsvszombies.wiki.gg/wiki/${name}#/media/File:${name}H.png`
    }
}
async function bar(){
    foo = await fetch("pvz.html")
    text = await foo.text();
    let lines = text.split("</li>");
    for(let line of lines){
        if(line.length < 5){
            continue;
        }
        let title = line.match(/title="([^"]*)"/g)[0];
        let card_name = title.substring(7,title.length-1)
        print(line.match(/title="([^"]*)"/g)[0])
        cards.push(new Card(card_name))
     }
}
(async () => {
    await bar();
    for(let card of cards){
        console.log(card.name);
        document.getElementById('list').innerHTML += `<td>${card.name} <img src="${card.image}"></img></td><br>`;
    }
})();