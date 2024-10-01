function myAtoi(s: string): number {
    
   const regex = /^[a-zA-Z].*/;
   s.trim()
   if (regex.test(s)) {
     return 0
   }
   s = s.replace(/[a-zA-Z].*/, '')

   const toNumber = Number(s)      
   let numeroAbsoluto = Math.abs(toNumber)

    if(numeroAbsoluto < 0){
         numeroAbsoluto = - numeroAbsoluto
    }

    return numeroAbsoluto

     /*  let powNumber = Math.pow(x,31)-1
    let negativePow = -Math.pow(x,31)  */
    
};

let s = "1337c0d3"

console.log(myAtoi(s));
