let select = 'drums';

const instruments = {
    drums: ["clap","hihat","kick","openhat","boom","ride","snare","tom","tink","gong"],
    piano: ["c-major","c-minor","c#-major","c#-minor","d-major","d-minor","d#-major","d#-minor","e-major","e-minor"],
    guitar: ["d-flat","d-major","d-minor","e-flat","e-major","f-major","f-minor","f-sharp","g-major","g-minor"]
}

const keyNumbers = [65,83,68,70,71,72,74,75,76,186];

const selection = () => {
    let chosen = document.querySelector('#select').value;
    select = chosen;
    instrumentSounds();
}

const instrumentSounds = () => {
    const keys = document.querySelectorAll('.key');

    for(let i = 0; i < keys.length; i++) {
        let key = keys[i];
        key.lastChild.textContent = instruments[select][i];
    }
}

const createKeys = () => {

}
const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key-${select}="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const keys = document.querySelectorAll(".key");

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');
    keys.forEach((key, index) => {
        key.addEventListener('transitionend', (e) => {
            if(e.propertyName !== 'transform') return;
            e.target.classList.remove('playing');
        })
    })
}

window.addEventListener('keydown', playSound)
instrumentSounds();