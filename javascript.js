const image_1 = document.querySelector("body > div > div > header > div > div:nth-child(2) > img:nth-child(1)");
const image_2 = document.querySelector("body > div > div > header > div > div:nth-child(2) > img:nth-child(2)");
const ul_list =document.querySelector("body > div > div > header > ul");
const div = document.querySelector("body > div > div > header > div > div:nth-child(2)");

div.addEventListener('click',()=>{
    if(image_1.classList.contains('close')){
        image_1.classList.remove('close');
        image_2.classList.add('close');
        ul_list.classList.add('hidden');
    }else{
        image_1.classList.add('close');
        image_2.classList.remove('close');
        ul_list.classList.remove('hidden');

    }
})