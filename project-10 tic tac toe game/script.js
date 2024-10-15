const all_btns = document.querySelectorAll(".boxes-game button");
const reset_btn = document.querySelector("main .reset-now");
const new_game_btn = document.querySelector(".update-container .new_game_btn");
const text_container = document.querySelector(".update-container");
const text_msg = document.querySelector(".update-container p");
const main_part = document.querySelector(".main");
const btn_click_sound = document.querySelector(".sound-btn-click");
const btn_win_sound = document.querySelector(".sound-victory");
const game_strt_sound = document.querySelector(".sound-1st-game-strt");

// console.log(reset_btn);

// for me X is now ok
let chance_me = true;

const all_win_possibility = [
  [3, 4, 5],
  [6, 7, 8],
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];

all_btns.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log(" yes kam kr rha h");
    if (chance_me == true) {
      box.style.color = "#d85c6c";
      box.innerText = "X";
      chance_me = false;
      btn_click_sound.play();
    } else {
      box.style.color = "#B25263";
      box.innerText = "O";
      chance_me = true;
      btn_click_sound.play();
    }
    box.disabled = true;
    who_is_winner_check();
  });
});

function show_result(winner) {
  text_msg.innerText = `Congrats,
  Winner is ${winner}`;
}

function who_is_winner_check() {
  for (let to_win_pattern of all_win_possibility) {
    // console.log(to_win_pattern);
    // console.log(to_win_pattern[0], to_win_pattern[1], to_win_pattern[2]);
    // console.log(
    //   all_btns[to_win_pattern[0]].innerText,
    //   all_btns[to_win_pattern[1]].innerText,
    //   all_btns[to_win_pattern[2]].innerText
    // );

    let position_val_1 = all_btns[to_win_pattern[0]].innerText;
    let position_val_2 = all_btns[to_win_pattern[1]].innerText;
    let position_val_3 = all_btns[to_win_pattern[2]].innerText;

    if (position_val_1 != "" && position_val_2 != "" && position_val_3 != "") {
      if (
        position_val_1 == position_val_2 &&
        position_val_2 == position_val_3
      ) {
        // console.log("mill gya winner finally", position_val_1);
        setTimeout(() => {
          show_result(position_val_1);
          text_container.classList.remove("hide");
          main_part.classList.add("hide-main");
          btn_win_sound.play();
        }, 500);
      }
    }
  }
}

function reset_boxes() {
  for (let btn of all_btns) {
    btn.innerText = "";
    btn.disabled = false;
  }
}

function reset_game() {
  chance_me = true;
  reset_boxes();
}

reset_btn.addEventListener("click", () => {
  reset_game();
});

new_game_btn.addEventListener("click", () => {
  text_container.classList.add("hide");
  main_part.classList.remove("hide-main");
  reset_game();
});


