const envelope = document.getElementById("envelope")
const card = document.getElementById("card")
const closeBtn = document.getElementById("close");

envelope.onclick=()=>{
    envelope.classList.add("open")

    setTimeout(()=>{
        envelope.classList.add("hide")
        card.classList.add("show")
    },700)
}

card.onclick=()=>{
    card.classList.remove("show")

    setTimeout(()=>{
        envelope.classList.remove("hide")
        envelope.classList.remove("open")
    },700)
}