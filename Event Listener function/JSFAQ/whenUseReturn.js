function evenify(num){
      var result;
   if(num % 2 == 0){
      result = num;
   }else{
      result = num*2;
   }
   return result;
}

function evenify_all(nums){
   var even_array = [];
   for (let i = 0; i<=nums.length; i++){
      const num = nums[i];
      var result = evenify(num)
      even_array.push(result);
   }
   return even_array;
}
var nums = [7,8,5,4,3,2];
var nums_even = evenify_all(nums);
console.log(nums_even);