// const strParentheses="(()))((()())()"
// let res= strParentheses.split('').map(el=>el==='('? 1:-1)
// .reduce(function (total, el){
//     if (total===0) { return NaN} else {
//         return total+el}
// },1)
// res===1 ? res=true : res=false
// console.log('result', res)


// //===================== tower
// const n=5
// for (let i=1; i<n+1; i++){  
//    let strFloor=' '.repeat(n-i)+'*'.repeat(2*i-1)+' '.repeat(n-i)
//    console.log(strFloor)  
// }


//-------------------------------------------------------------------------------
// const arr=[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
// const arrCopy=arr.map(el=>el)
// const arrEvenValue=[]
// const arrEvenValueIndex=[]


// for (let i=0; i<arrCopy.length; i++){
//     if (arr[i]%2===1) {
//         arrEvenValue.push(arrCopy[i])
//         arrEvenValueIndex.push(i) 
//     }
// } 
// arrEvenValue.sort((a,b)=>a-b).forEach((el, indx) =>arrCopy[arrEvenValueIndex[indx]]=el)
// console.log(arrCopy)


//********************************************************************
// const word='abba'
// const words=['aabb', 'abcd', 'bbaa', 'dada']

// const isAnagram=function(word1, word2){
//     if (word1.length!==word2.length) {return false}
//     let testWord=word1
//     for (char of word2) {
//         testWord=testWord.replace(char, '')
//     }
//     if (testWord==='') {return true}
//     return false
// }
// const anagramArr=words.filter(wrd=>isAnagram(word, wrd))
// console.log(anagramArr)

//const anagr=words.map(w=>word.split('').map(char=>w.replace(char, '')).join(''))
//console.log(anagr)


//********************------------------------------------------------*************************** */

// const numDefinetion=['08','124','1235','236','1457','24568','3569','478','57890','689'] 
// const makeVariationsOfTwo=function(num1,num2){
//     let variations=[]
//     num1.forEach(el1=>num2.forEach(el2=>variations.push(el1+el2)))
//     return variations
// }
//  num0Str=['0','8']
// // num1Str=['1','2','4']
// // num2Str=['2','3','6']
// console.log(makeVariationsOfTwo(num0Str,['']))
// observed='11'
// const pinModified=observed.split('').map(el=>numDefinetion[el].split(''))
// console.log(pinModified)
// const resArr=pinModified.reduce((result, current)=>makeVariationsOfTwo(result, current))
// console.log(resArr)

//*************** int32 to Ip******************************* */
// const num32=2149583361
// ipArr=[0,1,2,3]
// str=num32.toString(2)
// str='0'.repeat(32-str.length)+str
// const ip=ipArr.map(num=>parseInt(str.slice(num*8,(num+1)*8),2).toString()).join('.')

// console.log(ip)


//************** sum two strings */
// let str1=''
// let str2='2568573463457575747345734574745777'
// //console.log(typeof BigInt(str1), BigInt(str1))
// strSumm=(BigInt(str1)+BigInt(str2)).toString()
// console.log(strSumm)



//*************************------------------------------------- */
// secret1 = "whatisup"
// const triplets = [
//   ['t','u','p'],
//   ['w','h','i'],
//   ['t','s','u'],
//   ['a','t','s'],
//   ['h','a','p'],
//   ['t','i','s'],
//   ['w','h','s']
// ]

// let secretOpen=[...new Set(triplets.flat())]

// function sortByRule(arrRule){
//    let Changed=false
//     arrRule.map(el=>secretOpen.indexOf(el))
//          .sort((a,b)=>a-b)
//          .forEach(function (el,indx){
//             Changed=Changed||secretOpen[el]!==arrRule[indx]
//             secretOpen[el]=arrRule[indx]
//             })
//    return Changed
// }

//  let ifAllRulesDone
// do {
//     ifAllRulesDone=false
//     for (triplet of triplets){
//         let Chng=sortByRule(triplet)
//         ifAllRulesDone||=Chng
//     }
//     }
// while (ifAllRulesDone);
// console.log('The secret is open:',secretOpen.join(''))


// secret1 = "whatisup"
// const triplets = [
//   ['t','u','p'],
//   ['w','h','i'],
//   ['t','s','u'],
//   ['a','t','s'],
//   ['h','a','p'],
//   ['t','i','s'],
//   ['w','h','s']
// ]

// let secretOpen=[...new Set(triplets.flat())]

// function sortByRule(secretOp, arrRule){
//    let res=true
//     arrRule.map(el=>secretOp.indexOf(el))
//          .sort((a,b)=>a-b)
//          .forEach(function (el,indx){
//             res=res&&secretOp[el]===arrRule[indx]
//             secretOp[el]=arrRule[indx]
//             })
//    return res
// }

//  let ifAllRulesDone
// do {
//     ifAllRulesDone=true
// for (let i=0; i<triplets.length; i++){
//     let logic=true
//     logic=sortByRule(secretOpen, triplets[i])
//     ifAllRulesDone=ifAllRulesDone&&logic
//     console.log('In for:', secretOpen.join(''), triplets[i], logic, ifAllRulesDone)
// } 

// }
// while (!ifAllRulesDone);
// console.log('The secret is open:',secretOpen.join(''))



// var recoverSecret = function(triplets) {
//   //let secretOpen=[...new Set(triplets.flat())]
//     let secretOpen=[...new Set(triplets.reduce((acc, val) => acc.concat(val), []))]
  
//   function sortByRule(arrRule){
//      let changed=false
//       arrRule.map(el=>secretOpen.indexOf(el))
//            .sort((a,b)=>a-b)
//            .forEach(function (el,indx){
//               changed=changed||secretOpen[el]!==arrRule[indx]
//               secretOpen[el]=arrRule[indx]
//               })
//      return changed
//   }
  
//    let ifAllRulesDone
//   do {
//       ifAllRulesDone=false
//       for (triplet of triplets){
//           let chng=sortByRule(triplet)
//           ifAllRulesDone=ifAllRulesDone||chng
//       }
//       }
//   while (ifAllRulesDone);
//   return secretOpen.join('')
//   }
//     secret1 = "whatisup"
// let triplets = [ [ 't', 's', 'f' ],
// [ 'a', 's', 'u' ],
// [ 'm', 'a', 'f' ],
// [ 'a', 'i', 'n' ],
// [ 's', 'u', 'n' ],
// [ 'm', 'f', 'u' ],
// [ 'a', 't', 'h' ],
// [ 't', 'h', 'i' ],
// [ 'h', 'i', 'f' ],
// [ 'm', 'h', 'f' ],
// [ 'a', 'u', 'n' ],
// [ 'm', 'a', 't' ],
// [ 'f', 'u', 'n' ],
// [ 'h', 's', 'n' ],
// [ 'a', 'i', 's' ],
// [ 'm', 's', 'n' ],
// [ 'm', 's', 'u' ] ]

// console.log(recoverSecret(triplets))


//**************spiralize************************************************ */
// const n=10
// const spirale=[]
// for(let i=0; i<n; i++){
//   let row1=[]
//   for(let j=0; j<n; j++){
//     row1.push(0)
//   }
//   spirale[i]=row1
// }
// let l=0
// let m=n

// do {
//   console.log(l, m)
//   if (l>0){spirale[l][l-1]=1}
//   for(let i=l; i<m; i++){
//     for(let j=l; j<m; j++){
//        if (i===l){spirale[i][j]=1}
//         if (j===m-1){spirale[i][j]=1}  
//         if ((i===m-1)&&(m-l>2)){spirale[i][j]=1}  
//         if ((i>=l+2)&&(j===l)){spirale[i][j]=1}    
//   }
//   }
  
// l=l+2
// m=m-2

// }
// while (l<m)


// console.log(spirale)

// const n=9
// const spirale=[]
// for(let i=0; i<n; i++){
//   let row1=[]
//   for(let j=0; j<n; j++){
//     row1.push(0)
//   }
//   spirale[i]=row1
// }
// let l=0
// let m=n

// do {
//   if (l>0){spirale[l][l-1]=1}
//   for(let i=l; i<m; i++){
//     for(let j=l; j<m; j++){
//       if ((i===l)||(j===m-1)||(i===m-1)&&(m-l>2)||(i>=l+2)&&(j===l)){spirale[i][j]=1}
//     }
//   } 
// l+=2
// m-=2
// }
// while (l<m)


// console.log(spirale)


// var countChange = function(money, coins) {
//   // your implementation here
// }
const money=0
const coins=[2, 3]
const coinsSorted=coins.sort((a,b)=>a-b)
const maxCoinsAmount=Math.trunc(money/coinsSorted[0])

const makeVariationsOfTwo=function(num1,num2){
    let variations=[]
    if (!num1.length){
        variations=[...num2]
        return variations
    }  

    num1.forEach((el1)=>{
        const sumOfCoins=el1.reduce((sum, el)=>sum+el,0)

        num2.forEach((el2)=>{
            if(sumOfCoins+el2[0]<=maxCoinsAmount){variations.push([...el1, ...el2])}
         })
    })
    return variations
}
const coinsNumber=[]
for (i=0;i<=maxCoinsAmount;i++){
    coinsNumber.push([i])
}  

let arrayVariations=[]
for (i=0;i<=coins.length-1;i++){
    arrayVariations=makeVariationsOfTwo(arrayVariations,coinsNumber)
}

const resArr=arrayVariations.filter(arrEl=>money===arrEl.reduce((sum, el, indx)=>sum+el*coinsSorted[indx],0))
console.log(resArr, resArr.length)

