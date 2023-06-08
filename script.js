let images = document.getElementsByClassName('image');

let addimage = document.getElementById('addimage');
let container_2 = document.getElementById('container-2')
let container_1 = document.getElementById('container-1')



// Drag and Drop functionality --->


for(image of images){
image.addEventListener("dragstart" , (e) => {
    let selected = e.target;

    container_2.addEventListener("dragover" , (e) => {
        e.preventDefault();
    })

    container_2.addEventListener('drop' , (e) => {
        e.target.appendChild(selected);
        selected = null;
    })

})
}




