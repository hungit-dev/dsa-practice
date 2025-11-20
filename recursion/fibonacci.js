const fibs=(number)=>{
  if (number===1){
    return [0]
  }
  if (number ==2){
    return [0,1]
  }
  let arr=[0,1]
  for(let i=2;i<number;i++){
    arr.push(arr[i-1]+arr[i-2])
  }
  return arr
}
const x=fibs(8)
console.log(x)

const fibsRec=(number)=>{
    if (number===1){return [0]}
    if (number === 2){
        return [0,1]
    }
    let arr=fibs(number-1)
    arr.push(arr[arr.length-1]+arr[arr.length-2])
    return arr
}
