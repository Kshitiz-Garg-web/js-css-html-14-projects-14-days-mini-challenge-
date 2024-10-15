let display =document.querySelector('#show');
let buttons = document.getElementsByTagName("button");
let dotBtn = document.querySelector(".dot")
let buttonsarray = Array.from(buttons);
let str = "";


buttonsarray.forEach(btn=>{
  btn.addEventListener("click",(e)=>{
    if(e.target.innerHTML == 'De'){
      str = str.substring(0,str.length-1);
      display.value=str;
      // dotBtn.setAttribute("disabled",false);
    }
    else if(e.target.innerHTML == 'Ac'){
      str = "";
      display.value=str;
      // dotBtn.setAttribute("disabled",false);
    }
    else if(e.target.innerHTML == '√'){
      str = Math.sqrt(Number(str));
      display.value=str;
      // dotBtn.setAttribute("disabled",false);
    }
    else if(e.target.innerHTML == 'Sin'){
      str = Math.sin(Number(str) * (Math.PI / 180));
      display.value=str;
      // dotBtn.setAttribute("disabled",false);
    }
    else if(e.target.innerHTML == 'Cos'){
      str = Math.cos(Number(str) * (Math.PI / 180));
      display.value=str;
      // dotBtn.setAttribute("disabled",false);
    }
    else if(e.target.innerHTML == 'Tan'){
      str = Math.tan(Number(str) * (Math.PI / 180));
      display.value=str;
      // dotBtn.setAttribute("disabled",false);
    }
    // else if(e.target.innerHTML == '.'){
    //   str="."
    //   display.value=str;
    //   dotBtn.setAttribute("disabled",true);
    // }
    else if(e.target.innerHTML == '='){
      str = eval(str);
      display.value=str;
      // dotBtn.setAttribute("disabled",false);
    }
    else{
      str += e.target.innerHTML;
      display.value=str;
      // dotBtn.setAttribute("disabled",false);
    }
    
  })
})


