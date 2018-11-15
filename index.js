const getFirstSelector = (selector) => {
  return document.querySelector(selector)

}

const nestedTarget =() =>{
  return document.getElementById('nested').querySelectorAll('div')[3]
 
}

const increaseRankBy =(n)=>{
  let upRank = document.getElementById('app').querySelectorAll('ul.ranked-list')
  upRandk.forEach(function(rank){
    rank.innerHTML = parseInt(rank.innerHTML+n)
    
  })
  
}

const deepestChild =()=>{
  return document.getElementById('grand-node').querySelectorAll('div')[3]
}