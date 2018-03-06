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
  var grand = document.querySelector('div#grand-node').children
 for(let i =0; i<grand;i++){
   return grand[i]
 }

}
