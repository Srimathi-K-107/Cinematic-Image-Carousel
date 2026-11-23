let arr = [
    {
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=90",
        title: "Majestic Mountains",
        description: "Discover breathtaking mountain views, fresh air, and the peaceful beauty of nature."
    },

    {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=90",
        title: "Tropical Paradise",
        description: "Escape to crystal-clear waters, golden sandy beaches, and unforgettable ocean views."
    },

    {
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=90",
        title: "Into The Wild",
        description: "Explore lush green forests, discover hidden wonders, and reconnect with the beauty of nature."
    },

    {
        image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2400&q=90",
        title: "City After Dark",
        description: "Experience dazzling city lights, vibrant streets, and the unforgettable energy of urban life."
    },

    {
        image: "https://images.unsplash.com/photo-1472120435266-53107fd0c44a?auto=format&fit=crop&w=2400&q=90",
        title: "Golden Horizons",
        description: "Watch the golden sun paint the sky with beautiful colors and create magical moments to remember."
    }
];


let index=0

let carousel=document.getElementById("carousel")
let carimg=document.getElementById("carimg")
let head=document.getElementById("head")
let txt=document.getElementById("txt")
let count=document.getElementById("count")
let prev=document.getElementById("prev")
let next=document.getElementById("next")
let dots=document.getElementById("dots")

function dotsfunc(){
    dots.innerHTML=""
    arr.forEach((b,i)=>{
        let btn=document.createElement("button")
        btn.classList.add("dots")
        btn.addEventListener("click",()=>{
            index=i
            showcar(index)
        })
        if(i===0){
            btn.classList.add("active")
        }
        dots.append(btn)
    })
}


function showcar(i){
    let getdata=arr[i]
    carimg.src=getdata.image
    head.textContent=getdata.title
    txt.textContent=getdata.description
    count.innerHTML=`${i+1} / ${arr.length}`
    let alldot=document.querySelectorAll(".dots")
    alldot.forEach((d)=>{
        d.classList.remove("active")
    })
    if(alldot[i]){
        alldot[i].classList.add("active")
    }
}

function prevfunc(){
    index--
    if(index<0){
        index=arr.length-1
    }
    showcar(index)
}
function nextfunc(){
    index++
    if(index>=arr.length){
        index=0
    }
    showcar(index)
}

prev.addEventListener("click",()=>{
    prevfunc()
})
next.addEventListener("click",()=>{
    nextfunc()
})
let i;
function autoplay(){
    clearInterval(i)
    i=setInterval(()=>{
        nextfunc()
    },3000)
}
function autopause(){
    clearInterval(i)
   
}
carousel.addEventListener("mouseenter",()=>{
    autopause()
})
carousel.addEventListener("mouseleave",()=>{
    autoplay()
})

document.addEventListener("keydown",(e)=>{
    if(e.key==="ArrowRight"){
        nextfunc()
    }
    if(e.key==="ArrowLeft"){
        prevfunc()
    }
})

dotsfunc()

showcar(index)

autoplay()
