//.............without implemenation of local storage + disablity of btn
// const darkmodeon = document.body;
// const labelbtn1 = document.querySelector('.whole')
// const btn1 = document.querySelector('#btn1')
// const heading = document.querySelector('.heading')
// const about2 = document.querySelector('.about2')
// const btn2 = document.querySelector('#btn2')

// btn1.addEventListener(('click'), (e) => {

//         console.log('labelbtn1');
//         darkmodeon.classList.toggle('DARK-MODE-ON')
//         heading.classList.toggle('dark-heading')
//         about2.classList.toggle('dark-theme')
//         localStorage.setItem('DARK-MODE-ON',true)
//         localStorage.setItem('dark-heading',true)
//         localStorage.setItem('dark-theme',true)

//     })

// btn2.addEventListener(('click'),(e) => {
//     about2.classList.toggle('dark-theme')
//     localStorage.setItem("about2",true)
// })




//.............with implemenation of local storage + disablity of btn
const darkmodeon = document.body;
const btn1 = document.querySelector('#btn1');
const heading = document.querySelector('.heading');
const about2 = document.querySelector('.about2');
const btn2 = document.querySelector('#btn2');

// Local storage se settings retrieve kar rahe hain
if (localStorage.getItem('DARK-MODE-ON') === 'true') {
  darkmodeon.classList.add('DARK-MODE-ON');
  heading.classList.add('dark-heading');
  about2.classList.add('dark-theme');
  btn1.checked = true;
  btn2.disabled = true; // btn2 ko disable kar rahe hain agar btn1 selected hai
}

if (localStorage.getItem('about2') === 'true') {
  about2.classList.add('dark-theme');
  btn2.checked = true;
  btn1.disabled = true; // btn1 ko disable kar rahe hain agar btn2 selected hai
}

// Button 1 click event
btn1.addEventListener('click', () => {
  darkmodeon.classList.toggle('DARK-MODE-ON');
  heading.classList.toggle('dark-heading');
  about2.classList.toggle('dark-theme');

  if (darkmodeon.classList.contains('DARK-MODE-ON')) {
    localStorage.setItem('DARK-MODE-ON', 'true');
    btn2.checked = false; // btn2 ko uncheck karte hain
    btn2.disabled = true; // btn2 ko disable karte hain
    localStorage.removeItem('about2'); // btn2 ka dark mode local storage se remove karte hain
  } else {
    localStorage.setItem('DARK-MODE-ON', 'false');
    btn2.disabled = false; // btn2 ko enable karte hain agar btn1 unchecked ho jata hai
  }
});

// Button 2 click event
btn2.addEventListener('click', () => {
  about2.classList.toggle('dark-theme');

  if (about2.classList.contains('dark-theme')) {
    localStorage.setItem('about2', 'true');
    btn1.checked = false; // btn1 ko uncheck karte hain
    btn1.disabled = true; // btn1 ko disable karte hain
    darkmodeon.classList.remove('DARK-MODE-ON'); // Dark mode ko off karte hain
    heading.classList.remove('dark-heading');
    localStorage.removeItem('DARK-MODE-ON'); // btn1 ka dark mode local storage se remove karte hain
  } else {
    localStorage.setItem('about2', 'false');
    btn1.disabled = false; // btn1 ko enable karte hain agar btn2 unchecked ho jata hai
  }
});

