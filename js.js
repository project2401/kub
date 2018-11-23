function onClick(event){

    var wrapper = document.querySelector(".wrapper");
    var conteiner = wrapper.children.length + 1;
    
    wrapper.innerHTML= wrapper.innerHTML + "<div id= 'newElementId' class='conteiner' onclick='onClick(event);'>" +conteiner  + "</div>"
    
}






