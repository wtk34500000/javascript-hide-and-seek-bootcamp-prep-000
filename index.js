const getFirstSelector = (selector) => {
  return document.querySelector(selector)

}

const nestedTarget =() =>{
  return document.getElementById('nested').querySelectorAll('div')[3]
 
}

const increaseRankBy =(n)=>{
    var upRank = document.getElementById('app').querySelectorAll('ul.ranked-list')
    for(let i =0; i<upRank.length; i++){
      upRank[i].innerHTML = parseInt(upRank[i].innerHTML+ n)
    }
}

const deepestChild =()=>{
  return document.getElementById('grand-node').querySelectorAll('div')[3]
}