// First problem Lets play a mind game
// ---------------------------------------
function mindGame(numbers){
    if(typeof numbers!=='number'|| numbers<0){
        return 'Please enter a positive Number';
    }
        const number = numbers;
        const multiplyNumber = number*3;
        const addNumber = multiplyNumber+10;
        const divideNumber = addNumber/2;
        const subtractionNumber = divideNumber-5;
        return subtractionNumber;
    }
// const subtractionNumber=mindGame(33);
// console.log(subtractionNumber);


// Second problem Finding even or odd
// -------------------------------------
function evenOdd(strings){
    const string = strings;
    const stringLength = string.length;
    const ans = stringLength%2;
    if(typeof strings!=='string'){
        return 'Please enter String'
    }
    else if(ans%2===0){
        return 'even'
    }
    else{
        return 'odd'
    }
}
// const anyString=evenOdd('Phero');
// console.log(anyString);


// Third problem Is Less or Greater than Seven
// ----------------------------------------------
function isLGSeven(no){
    const num = no;
    const num2 = num-7;
    if(typeof no !=='number'){
        return 'Please enter a number'
    }
    else if(num2<7){
        return num2;
    }
    else(num2>=7);{
        const num3 =num*2;
        return num3;
    } 
}
// const anyNum=isLGSeven(-15);
// console.log(anyNum);

 
// Four problem is Finding Bad Data
// ------------------------------------
function   findingBadData(array) {
    let negatives = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] < 0){
            negatives.push(array[i]);  
        }
    }
    return negatives.length;
}
// const badData = findingBadData([2,-5,-7,-13]);
// console.log(badData);

 
// Five problem convert gems into diamond
// -------------------------------------------
function gemsToDiamond(firstFriendDiamondQuantity, secondFriendDiamondQuantity, thirdFriendDiamondQuantity){
    const perFirstGemsPower = 21;
    const perSecondGemsPower = 32;
    const perThirdGemsPower = 43;
    
    const firstGemsToDiamond = firstFriendDiamondQuantity * perFirstGemsPower;
    const perSecondGemsDiamond = secondFriendDiamondQuantity * perSecondGemsPower;
    const perThirdGemsDiamond = thirdFriendDiamondQuantity * perThirdGemsPower;
    const totalGemsToDiamond = firstGemsToDiamond + perSecondGemsDiamond + perThirdGemsDiamond;
    if(typeof firstFriendDiamondQuantity !== 'number' || typeof secondFriendDiamondQuantity !== 'number' || typeof thirdFriendDiamondQuantity !== 'number'){
        return 'Please input numbers'
    }
    else if(totalGemsToDiamond < 2000){
        return totalGemsToDiamond;
    }
    else(totalGemsToDiamond >= 2000);{
        return totalGemsToDiamond - 2000;
    }
}
// const totalGemsToDiamond = gemsToDiamond(100,5,1);
// console.log(totalGemsToDiamond);