
const WHITE_KEYS=['z','x','c','v','b','n','m'];
const BLACK_KEYS=['s','d','g','h','j'];
const keys=document.querySelectorAll('.key');
const whitekeys=document.querySelectorAll('.key.white');
const blackkeys=document.querySelectorAll('.key.black');

keys.forEach(key=>{
    key.addEventListener('click',()=>playMusic(key))
})

document.addEventListener('keydown', e=>{
    const key=e.key;
    const whitekeyIndex=WHITE_KEYS.indexOf(key);
    const blackkeyIndex=BLACK_KEYS.indexOf(key);

    if(whitekeyIndex > -1)    playMusic(whitekeys[whitekeyIndex])

    if(blackkeyIndex > -1)    playMusic(blackkeys[blackkeyIndex])
})

function playMusic(key)
{
    const noteAudio=document.getElementById(key.dataset.note);
    noteAudio.currentTime=0;
    noteAudio.play();
    key.classList.add('active');
    noteAudio.addEventListener('ended',() => {
        console.log("remove class");
        key.classList.remove('active');
    })

}