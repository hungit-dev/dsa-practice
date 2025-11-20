const bubbleSort=(arr)=>{
    const arrLength=arr.length;
    for(let i=0;i<arrLength-1;i++){ // need n-1 (max) loop to find the sorted arr. Each outer loop find 1 largest element and push it to the end of arr
        let swapped=false
        for (let y=0;y<arrLength-1-i;y++){
            if(arr[y]>arr[y+1]){
                let temp=arr[y+1]
                arr[y+1]=arr[y]
                arr[y]=temp

                swapped=true
            }
        }
        if(!swapped){ //break outer loop
            break
        }
    }
    return arr
}
const x=bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
console.log(x)