
const Sounds = [
  new  Audio("audio/audio0.mp3"),
  new Audio("audio/audio1.mp3"),
  new Audio("audio/audio2.mp3"),
 new Audio("audio/audio3.mp3"),
  new Audio("audio/audio4.mp3"),
  new Audio("audio/audio5.mp3"),
  new Audio("audio/audio6.mp3"),
 new Audio("audio/audio7.mp3"),
  new Audio("audio/audio8.mp3"),
]
const Drum = document.querySelectorAll('.DrumKit')
//const KeyText = document.querySelectorAll('.key')


Drum.forEach((el, index) => {
  
    el.addEventListener('click', () => { 
      
 
 
var audio = Sounds[index];
audio.currentTime = 0
const PlayPromise = audio.play()
el.classList.toggle('playing')

if(PlayPromise !== undefined){
  PlayPromise.catch((error) => {
    console.log(`error is ${error.message} `)
  })

}


if(!el.classList.contains('playing')){
  audio.pause();
}


})


})

window.addEventListener('keydown', (e) =>{

  Drum.forEach((el, index) => {

const key = el.dataset.key

  if(e.key.toUpperCase() == key.toUpperCase()){
    el.classList.toggle('playing')

  var audio = Sounds[index];
audio.currentTime = 0
const PlayPromise = audio.play()
audio.loop = true

if(PlayPromise !== undefined){
  PlayPromise.catch((error) => {
    console.log(`error is ${error.message} `)
  })

}


if(!el.classList.contains('playing')){
  audio.pause();
 
}


}

})

})