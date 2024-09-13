//................................part-1................................
//...........is just implementation of auto typing ONLY
// const wordslist=['developer','frontend','coder','engineer']

// const span=document.querySelector('.span')

//.........YES ABLE TO WRIYE TILL LAST IN 1 WAY W/O BACK AND FOLLOW
// const word='Front-EnD_Develpoer !'
// let characterindex=0
// setInterval(()=>{
//     if(characterindex==word.length){
//         return
//     }
//     span.innerText=span.innerText+word[characterindex]
//     characterindex++
// },100)

//..............forword + reverse typing is done ok
// const word='Front-EnD_Develpoer_!'
// let characterindex=0
// let reversetype=false
// setInterval(()=>{
    
//     if(reversetype===false){
//         span.innerText=span.innerText+word[characterindex]
//         characterindex++
//     }else{
//         span.innerText=span.innerText.slice(0,span.innerText.length-1) 
//         characterindex--
//     }
//     if(characterindex===word.length && reversetype===false){
//         reversetype=true
//     }
//     if(characterindex===0 && reversetype){
//         reversetype=false  
//     }
// },100)

//...............forword + backword autotyping // array m s lai rha h
// const wordslist=['developer','frontend','coder','engineer']
// let ind=0
// let characterindex=0
// let reversetype=false
// setInterval(()=>{
    
//     if(reversetype===false){
//         span.innerText=span.innerText+wordslist[ind][characterindex]
//         characterindex++
//         console.log('for');
//     }else{
//         span.innerText=span.innerText.slice(0,span.innerText.length-1) 
//         characterindex--
//         console.log('back');
//     }
//     if(characterindex===wordslist[ind].length && reversetype===false){
//         reversetype=true
//     }
//     if(characterindex===0 && reversetype){
//         reversetype=false 
//         ind++
//         console.log('update');
//     }
//      if(ind===wordslist.length){
//         ind=0
//         console.log('over');
//      }
// },100,)

// .............for + back + arrs lena word ko + update/skip/delay you can say__
// let ind=0
// let characterindex=0
// let reversetype=false
// let delay=0
// setInterval(()=>{
    
//     if(delay){
//         delay--
//         return
//     }

//     if(reversetype===false){
//         delay=2
//         span.innerText=span.innerText+wordslist[ind][characterindex]
//         characterindex++
//         console.log('for');
        
//     }else{
//         span.innerText=span.innerText.slice(0,span.innerText.length-1) 
//         characterindex--
//         console.log('back');
             
//     }
//     if(characterindex===wordslist[ind].length && reversetype===false){
//         reversetype=true
//         delay=10

//     }
//     if(characterindex===0 && reversetype){
//         reversetype=false 
//         ind++
//         console.log('update');
//     }
//      if(ind===wordslist.length){
//         ind=0
//         console.log('over');
//      }
// },100)


    
//........................part-2.....................................
//....................auto typing on various diff element........SINGLE FUN WIHOUT USING ARRAY

// const wordslist=['developer','frontend','coder','engineer']
// const span=document.querySelector('.span')

// const span1=document.querySelector('h1 .top')
// const str1="a popular full-stack development framework that includes the following technologies:"
// let str11 = str1.replaceAll(" ", "_")

// const span_mongo=document.querySelector('h3 .span-mongo')
// const str_mongo="A NoSQL database used for storing data in a flexible, JSON-like format."
// let str_mongo1 = str_mongo.replaceAll(" ", "_")

// const span_ex=document.querySelector('h3 .span-ex')
// const str_ex="A web application framework for Node.js, used for building server-side applications and APIs."
// let str_ex1 = str_ex.replaceAll(" ", "_")

// const span_re=document.querySelector('h3 .span-re')
// const str_re="A frontend library for building user interfaces, particularly single-page applications."
// let str_re1 = str_re.replaceAll(" ", "_")

// const span_no=document.querySelector('h3 .span-n')
// const str_nnn="A JavaScript runtime that allows you to run JavaScript on the server side."
// let str_no1 = str_nnn.replaceAll(" ","_")

// const span2=document.querySelector('h1 .btn')
// const str2="you to build a full-stack web application using JavaScript for both the frontend and backend."
// let str22 = str1.replaceAll(" ", "_")

// function autotyping(str,element){
//     let characterindex=0
// let reversetype=false
// let dealy=0
// setInterval(()=>{

//     if(dealy){
//         dealy--
//         return
//     }
    
//     if(reversetype===false){
//         element.innerText=element.innerText+str[characterindex]
//         characterindex++
//         dealy=2
//     }else{
//         element.innerText=element.innerText.slice(0,element.innerText.length-1) 
//         characterindex--
        
//     }
//     if(characterindex===str.length && reversetype===false){
//         reversetype=true
//         dealy=10
//     }
//     if(characterindex===0 && reversetype){
//         reversetype=false  
//     }
// },50)
// }

// autotyping(str11,span1)

// autotyping(str_mongo1,span_mongo)
// autotyping(str_ex1,span_ex)
// autotyping(str_re1,span_re)
// autotyping(str_no1,span_no)

// autotyping(str22,span2)

//.......................................part-3.....................................
//.........................IN WHICH WE HANDEL ALL THINGS IN 4 DIFF DIFFRENT FUNCTION
// const elements = [
//     { text: "a popular full-stack development framework that includes the following technologies:", element: document.querySelector('.span1.top') },
//     { text: "A NoSQL database used for storing data in a flexible, JSON-like format.", element: document.querySelector('.span-mongo') },
//     { text: "A web application framework for Node.js, used for building server-side applications and APIs.", element: document.querySelector('.span-ex') },
//     { text: "A frontend library for building user interfaces, particularly single-page applications.", element: document.querySelector('.span-re') },
//     { text:  "A JavaScript runtime that allows you to run JavaScript on the server side.", element: document.querySelector('.span-n') },
//     { text: "you to build a full-stack web application using JavaScript for both the frontend and backend.", element: document.querySelector('.span1.btn') }
// ];

// // Function to auto-type text character by character (forward typing)
// function autoType(element, text, callback) {
//     let charIndex = 0;
//     const typeInterval = setInterval(() => {
//         element.innerText += text[charIndex];
//         charIndex++;
//         if (charIndex === text.length) {
//             clearInterval(typeInterval);
//             if (callback) {
//                 setTimeout(callback, 500); // Delay before calling the next typing
//             }
//         }
//     }, 70);  // Faster forward typing speed (70ms per character)
// }

// // Function to reverse auto-type text character by character (reverse typing)
// function reverseType(element, text, callback) {
//     let charIndex = text.length;
//     const typeInterval = setInterval(() => {
//         element.innerText = text.slice(0, charIndex);
//         charIndex--;
//         if (charIndex < 0) {
//             clearInterval(typeInterval);
//             if (callback) {
//                 setTimeout(callback, 500); // Delay before calling the next reverse
//             }
//         }
//     }, 35);  // Double speed reverse typing (35ms per character)
// }

// // Sequence for forward typing (top to bottom)
// function typeSequence(index = 0) {
//     if (index >= elements.length) {
//         setTimeout(() => reverseSequence(elements.length - 1), 1000); // Start reverse typing after a delay
//         return;
//     }
//     const { text, element } = elements[index];
//     autoType(element, text, () => typeSequence(index + 1)); // Type each element in sequence
// }

// // Sequence for reverse typing (bottom to top)
// function reverseSequence(index) {
//     if (index < 0) {
//         // After reverse completes, start forward typing again
//         setTimeout(() => typeSequence(0), 1000); // Start forward typing after a delay
//         return;
//     }
//     const { text, element } = elements[index];
//     reverseType(element, text, () => reverseSequence(index - 1)); // Reverse each element in sequence
// }

// // Start the infinite typing sequence
// typeSequence();


//............................PART-4................................
//....................IN WHICH WE HANDEL ALL THINGS IN SAME FUN 
const elements = [
    { text: "a popular full-stack development framework that includes the following technologies: ", element: document.querySelector('.span1.top') },
    { text: "A NoSQL database used for storing data in a flexible, JSON-like format. ", element: document.querySelector('.span-mongo') },
    { text: "A web application framework for Node.js, used for building server-side applications and APIs. ", element: document.querySelector('.span-ex') },
    { text: "A frontend library for building user interfaces, particularly single-page applications. ", element: document.querySelector('.span-re') },
    { text: "A JavaScript runtime that allows you to run JavaScript on the server side. ", element: document.querySelector('.span-n') },
    { text: "you to build a full-stack web application using JavaScript for both the frontend and backend. ", element: document.querySelector('.span1.btn') }
];

// Function to handle both forward and reverse typing
function autoTypeAndReverse(index = 0, isForward = true) {
    let currentElement = elements[index];
    let charIndex = isForward ? 0 : currentElement.text.length;

    const typeSpeed = isForward ? 70 : 35; // Forward typing is slower, reverse typing is faster
    const typeInterval = setInterval(() => {
        currentElement.element.innerText = isForward
            ? currentElement.text.slice(0, charIndex)  // Forward typing
            : currentElement.text.slice(0, charIndex); // Reverse typing

        charIndex += isForward ? 1 : -1;  // Increment for forward, decrement for reverse

        if (isForward && charIndex === currentElement.text.length) {
            clearInterval(typeInterval);
            setTimeout(() => {
                if (index === elements.length - 1) {
                    // Last element, start reverse
                    autoTypeAndReverse(index, false);
                } else {
                    autoTypeAndReverse(index + 1, true); // Next element
                }
            }, 500);  // Delay between elements
        }

        if (!isForward && charIndex < 0) {
            clearInterval(typeInterval);
            setTimeout(() => {
                if (index === 0) {
                    // First element, start forward again
                    autoTypeAndReverse(0, true);
                } else {
                    autoTypeAndReverse(index - 1, false); // Previous element
                }
            }, 500);  // Delay before starting reverse sequence
        }
    }, typeSpeed); // Adjust speed based on forward/reverse typing
}

// Start the infinite typing and reversing sequence
autoTypeAndReverse();


