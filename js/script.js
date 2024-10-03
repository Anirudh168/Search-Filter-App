var search = document.getElementById('search');
var images = document.querySelectorAll('img');
console.log(images);

const filter = (e)=>{
    var res = search.value.toLowerCase().trim()
    images.forEach(image=>{
        image.parentElement.parentElement.classList.add('hide');
        if(image.dataset.name.includes(res))
        {
            image.parentElement.parentElement.classList.remove('hide');
        }
    })
}

search.addEventListener('keyup',filter);
