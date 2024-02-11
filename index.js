

let number =document.getElementById('number')

let generateOTP=(length)=>{
    number.style.display='block'
    console.log('hi');
    otp="";
 for(i=0;i<length;i++){
    let number= Math.floor(Math.random()*10);
    console.log('😂',number);
    otp+=number.toString();

 }
   number.textContent=otp
   return otp;

}
let cleardate=()=>{
    let clearel=document.getElementById('number').textContent = " "
    number.style.display='none'
}
