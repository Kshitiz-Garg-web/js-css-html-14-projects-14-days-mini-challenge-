const textArea = document.querySelector(".input-area");
const btn = document.querySelector("button");
let voiceType = document.querySelector(".voice-option");

let speech = new SpeechSynthesisUtterance();
let voices = [];

btn.addEventListener("click", (e) => {
    speech.text = textArea.value;
    window.speechSynthesis.speak(speech);
});

window.speechSynthesis.onvoiceschanged = function vocieChange() {
    voices = window.speechSynthesis.getVoices();
    speech.voices = voices[0];

    voices.forEach((voice, i) => {
        voiceType.options[i] = new Option(voice.name, i)
    }
    )
};

voiceType.addEventListener("change", () => {
    speech.voice = voices[voiceType.value];
})