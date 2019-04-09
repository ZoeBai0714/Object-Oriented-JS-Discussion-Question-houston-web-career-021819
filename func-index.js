const eventArea = document.getElementById('event_area')
const imageArea = document.getElementById('image_area')
document.addEventListener('DOMContentLoaded', () => {
  
const mrUnicorn = new Unicorn('Mr. Unicorn', 'Horn Sharpener')

const restartButton = document.getElementById('restart').addEventListener("click",()=> mrUnicorn.restart())
const attackButton = document.getElementById('attack').addEventListener("click",()=> mrUnicorn.attack())
const defendButton = document.getElementById('defend').addEventListener("click",()=> mrUnicorn.defend())
const healButton = document.getElementById('heal').addEventListener("click",()=> mrUnicorn.heal())
const breakdanceButton = document.getElementById('breakdance').addEventListener("click",()=> mrUnicorn.breakdance())
const eatButton = document.getElementById('eat').addEventListener("click",()=> mrUnicorn.eatCronut())

})


