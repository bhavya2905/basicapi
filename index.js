let img=document.getElementById('catimg');
let show=document.getElementById('cat');
let img1=document.getElementById('dogimg');
let show1=document.getElementById('dog');
show.addEventListener('click',rand);
show1.addEventListener('click',rand1);
function rand(){
    fetch('https://aws.random.cat/meow').then(
    e => e.json()
    ).then(
        data => img.innerHTML=`<img src="${data.file}">`
    )
}
function rand1(){
    fetch('https://random.dog/woof.json').then(
    e => e.json()
    ).then(
        data => img1.innerHTML=`<img src="${data.url}">`
    )
}
