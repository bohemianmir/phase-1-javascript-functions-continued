function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}// code your solution here

function mondayWork(activity = `go to the office`){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(special){
    return function(word){
        return `You are ${special}${word}${special}!`
    }
}
