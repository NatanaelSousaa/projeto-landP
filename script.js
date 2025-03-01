function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if(html.classList.contains("light")) {
    // se tiver4 light mode, adicionar a imagem light
    img.setAttribute('src', './avatar-light.png')
  } else {
    // Se tiver sem light mode, manter a imagem dark
    img.setAttribute('src', './assets/Theme=Dark mode.png')
  }
}
