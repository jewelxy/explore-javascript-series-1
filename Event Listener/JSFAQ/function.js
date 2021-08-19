function evenify(arr_names){
    for (let i=0; i<arr_names.length; i++) {
        const value = arr_names[i];
        if(value % 2== 0){
            console.log(value,"Even Number");
        }else{
            console.log(value, "Odd Number");
        } 
    }          
}
nums = [5,8,2,12,9,13,15,7];
evenify(nums);

