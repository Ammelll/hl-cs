print = console.log
let cards = []
class Card{
    constructor(name){
        this.name = name.replaceAll(" ", "_");
        //https://plantsvszombies.wiki.gg/images/Puff-ShroomH.png
        this.image = `https://plantsvszombies.wiki.gg/images/${this.name}H.png`
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
        document.getElementById('list').innerHTML += `<td>${card.name} <img width="100" height="100" src="${card.image}"></img></td><br>`;
    }
})();
//<td class="pi-horizontal-group-item pi-data-value pi-font pi-border-color pi-item-spacing" data-source="cost">3</td> tossed puppy