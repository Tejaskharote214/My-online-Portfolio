
function nav(event){
    let name = event.target.name;
    let height =  document.querySelector(`.${name}`).offsetTop
    window.scrollTo(0, height);


}