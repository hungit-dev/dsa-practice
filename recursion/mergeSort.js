const mergeSort=(arr)=>{
    const arrLength=arr.length;
    if(arrLength<=1){
        return arr
    }
    const low=0;
    const high=arrLength-1
    const mid=Math.round((low+high)/2)
    const leftHalf=mergeSort(arr.slice(low,mid));
    const rightHalf=mergeSort(arr.slice(mid))
    const mergedArr=merge(leftHalf,rightHalf)
    return mergedArr
}
const merge=(leftHalf,rightHalf)=>{
    let mergedArr=[]
    const leftArrLen=leftHalf.length;
    const rightArrLen=rightHalf.length;
    let i=0;
    let j=0;
    while (i <leftArrLen && j <rightArrLen){
        if(leftHalf[i]<rightHalf[j]){
            mergedArr.push(leftHalf[i])
            i++
        }
        else{
            mergedArr.push(rightHalf[j])
            j++
        }
    }
    while(i<leftArrLen){
        mergedArr.push(leftHalf[i])
        i++
    }
    while(j<rightArrLen){
        mergedArr.push(rightHalf[j])
        j++
    }
    return mergedArr
}
const x =mergeSort([105, 79, 100, 110])
console.log(x)