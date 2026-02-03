/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 */
function sleep_in(weekday,vacation){
    return true;
}

function string_times(str,num){
    return str;
}
function countEvens(array){
    let count = 0
    array.forEach(element => {
        if (element % 2 == 0){count+=1}
    });
    return count
}
function countHi(str){
    let count = 0
    for(let i = 0; i < str.length-1; i++){
        if(str.substring(i,i+2) == "hi"){count+=1}
    }
    return count
}
function no14(array){
    let ones = true
    let fours = true
    array.forEach(element => {
        if(element == 1){ones = false}
        if(element == 4){fours = false}
    });
    return ones || fours
}
function either24(array){
    let twos = false
    let fours = false
    for(let i = 0; i < array.length-1; i++){
        if(array[i] == 2 && array[i+1] == 2){
            twos = true
        }
        if(array[i] == 4 && array[i+1] == 4){
            fours = true
        }
    }
    return Boolean(twos ^ fours)
}
function makeChocolate(small, big, goal){
    while(goal > 4 && big > 0){
        goal-=5
        big-=1
    }
    if(goal > small){
        return -1
    }
    return goal
}
function luckySum(a,b,c){
    if(a == 13){
        a = 0
        b = 0
        c = 0
    }
    if(b == 13){
        b = 0
        c = 0
    }
    if(c == 13){
        c = 0
    }
    return a+b+c
}
function maxBlock(str){
    let longest = 0
    let count = 1
    previous = ""
    for(let i =0; i <str.length;i++){
        if(str[i] == previous){count+=1}
        else{
            count = 1
        }
        if(count > longest){longest = count}

        previous = str[i]
    }
    return longest
}
function linearIn(outter, inner){
    let innerIndex = 0
    for(let i = 0; i < outter.length; i++){
        if(outter[i] == inner[innerIndex]){
            innerIndex++
        }
    }
    return innerIndex == inner.length
}
function countTriple(str){
    let count = 0
    for(let i =0; i<str.length-2;i++){
        if(str[i] == str[i+1] && str[i] == str[i+2]){
            count++
        }
    }
    return count
}
function sameEnds(str){
    let index = 0
    let ends = ""
    for(let i =1; i<str.length;i++){
        if(str[i+index] == str[index] && i > index){
            ends+=str[index]
            index+=1
            i--
        }

    }
    return ends
}