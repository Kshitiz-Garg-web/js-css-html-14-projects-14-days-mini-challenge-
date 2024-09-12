const user_input = document.querySelector('.input-feild');
const frm = document.querySelector('.container');
const submit = document.querySelector('.submit-btn');
const strt = document.querySelector('.start-game-btn');
let result = document.querySelector('.result');
const all_guess = document.querySelector('.all-guess');
const wrongsound = document.querySelector('.wrong')
const new_trial = document.querySelector('.new1')
const win = document.querySelector('.correct')

let correct_number = Math.round(Math.random() * 100);
let all_guess_array = [];

// window.addEventListener('onload',()=>{
//     new_trial.play();
// })

frm.addEventListener(('submit'), (e) => {
    e.preventDefault();
    const input = parseInt(user_input.value);
    if (input > correct_number) {
        console.log('too high!');
        user_input.value = "";
        result.innerText = 'too high';
        wrongsound.play();
    }
    else if (input < correct_number) {
        console.log('too low!');
        user_input.value = "";
        result.innerText = 'too low';
        wrongsound.play();
    }
    else {
        console.log('you win');
        user_input.value = "";
        strt.disabled = false;
        submit.setAttribute("disabled", "true");
        submit.classList.add("submit-off");
        strt.classList.add("start-game");
        result.innerText = 'you win';
        win.play();
    }
    all_guess.innerText = input
    all_guess_array.push(input);
    all_guess.innerText = `All guesses: ` + all_guess_array.join(', ')
})

strt.addEventListener(('click'), () => {
    strt.disabled = true;
    submit.disabled = false;
    submit.classList.remove("submit-off");
    strt.classList.remove("start-game");

    correct_number = Math.round(Math.random() * 100);

    all_guess.innerText = ""
    result.innerText = ""
    all_guess.innerText = ""
    new_trial.play();

})


