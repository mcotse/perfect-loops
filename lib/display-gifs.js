export default (urls) =>{
  var elem = document.querySelector('#gifs')
  elem.innerHTML = urls.map(url => `<img class="b-lazy" src="${url}">`).join("\n")
}
