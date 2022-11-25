const links = document.querySelectorAll("nav a")

function cleaner() {
    for(let s = 0; s < links.length; s++) {
        links[s].classList.remove("CA")
    }
}

function draw() {
    cleaner()
    const CL = this.classList[0]
    if (CL == "CA" ){
        this.classList.remove("CA")
    }
    else {
        this.classList.add("CA")
    }
}

for (let n = 0; n < links.length; n++) {
    links[n].addEventListener("click",draw)
}