const number=document.querySelector('.number');
const nagtive_btn=document.querySelector('.nag-btn');
const postive_btn=document.querySelector('.pos-btn');
const inc_dec_btn=document.querySelector('.inc-dec-btn');
const reset=document.querySelector('.res');


postive_btn.addEventListener(('click'),()=>{
    const num=parseInt(number.innerText);
    const x=parseInt(inc_dec_btn.value);
    number.innerText=num+x;
})

nagtive_btn.addEventListener(('click'),()=>{
    const num=parseInt(number.innerText);
    const x=parseInt(inc_dec_btn.value);
    number.innerText=num-x;
})

reset.addEventListener(('click'),()=>{
    number.innerText=0;
    inc_dec_btn.value=1;
})







