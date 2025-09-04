let mugshot = document.querySelector('#mugshot')

let keerGeklikt = 0

function updateMugshot() {
  keerGeklikt++

  switch (keerGeklikt) {
    case 1:
      mugshot.src = "./assets/mugshot-1.png"
      break
    case 2:
      mugshot.src = "./assets/mugshot.png"
      break
    case 3:
      mugshot.src = "./assets/mugshot-3.png"
      break
    case 4:
      mugshot.src = "./assets/mugshot-4.png"
      break
    case 5:
      mugshot.src = "./assets/mugshot-5.png"
      break
    default:
      mugshot.src = "./assets/mugshot.png"
  }
}

mugshot?.addEventListener('click', updateMugshot)
