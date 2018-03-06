function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector('#nested .target')
}
function increaseRankBy(n){
  var ranks = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i])+1
  }
}
function deepestChild(){
  var deepest = document.getElementById('grand-node')
  var child = deepest.children[0]

  while (child) {
    deepest = child
    child = deepest.children[0]
  }

  return deepest
}
