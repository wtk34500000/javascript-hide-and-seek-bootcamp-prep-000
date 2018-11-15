const getFirstSelector = (selector) => {
   var firstSelector= document.querySelector(selector)
    return firstSelector;
}

const nestedTarget =() =>{
  var result = document.getElementById('nested').querySelectorAll('div')[3]
  return result;
}