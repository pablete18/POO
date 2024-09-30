function reverse(x: number): number {
    let powNumber = Math.pow(x,31)-1
    let negativePow = -Math.pow(x,31) 

   if (x !== powNumber || x !== negativePow) {

        const arrayofNumber = Array.from(String(x))        
        const reversed = arrayofNumber.reverse()

        if(reversed.includes('-')){
            reversed.pop()
            const negativeString = `-${reversed}`.split(',').join('')   
              
            const negativeNumber = Number(negativeString)
            
           return negativeNumber     
        }
        const newNumber = Number(reversed.join())
     
    
       return newNumber
        
    }  

    return 0
};

console.log(reverse(-123));
