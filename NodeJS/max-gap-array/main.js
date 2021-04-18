function maxDiff(arr){

    //Prints Given Array
    console.log("Given Array is "+arr+"\n");
    
    //Sorts & Prints the array using comprator
    arr.sort((a,b)=>a-b);
    console.log("Sorted Array is "+arr+"\n");
    
    //Setting default Max Diff & this varies as we traverse threw
    let maxDiff = 0;
    
    for(let i=0;i<arr.length;i++){
        
        let presntDiff = arr[i+1]-arr[i];
        if(maxDiff<presntDiff){
            maxDiff=presntDiff;
        }
    } 

    return maxDiff;
}

var arr = [-10,-5,1,2,3,6,19,21,20,-1,-2,-5];
console.log("Max diff is "+maxDiff(arr));