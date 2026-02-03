let hoist = 500*0.9;
let fly = hoist*1.9
let lineHeight = hoist/13;
let starDiameter = lineHeight * 0.8;
let unionHeight =  7 * lineHeight;
let unionWidth = 0.4 * fly;
drawFilledRect(0,0,fly,hoist,RED);
for(let i = 1; i < 13; i+=2){
    drawFilledRect(0,lineHeight*i,fly,lineHeight,WHITE)
}
drawFilledRect(0,0,unionWidth,unionHeight,BLUE)
for(let i = 1; i < 10; i+=2){
    for(let j = 1; j < 12; j+=2){
        drawStar(unionWidth/12 * j, unionHeight/10*i, starDiameter, WHITE);
        drawStar(unionWidth/12 * (Math.min(j+1,10)), unionHeight/10*(Math.min(i+1,8)), starDiameter, WHITE);
    }
}