function isJavaScriptFile(fileName){
    if(typeof fileName != 'string' ){
        return "Provide valid input"
    }

else{
   return fileName;
   }
   
}
console.log(isJavaScriptFile(15));