const getFirstSelector = (selector) => {
  return document.querySelector(selector)

}

const nestedTarget =() =>{
  return document.getElementById('nested').querySelectorAll('div')[3]
 
}