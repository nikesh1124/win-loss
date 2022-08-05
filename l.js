
document.querySelector("h1").addEventListener("click", function () {
    let nmbr1 = Math.floor(Math.random() * 6) + 1;
    let nmbr2 = Math.floor(Math.random() * 6) + 1;
    let randomphoto1 = "images/dice" + nmbr1 + ".png";
    console.log(randomphoto1);
    let randomphoto2 = "images/dice" + nmbr2 + ".png";
    document.querySelector("#img1").setAttribute("src", randomphoto1);
    document.querySelector("#img2").setAttribute("src", randomphoto2);
    let x = document.querySelector("#win").innerHTML;
    if (nmbr1 > nmbr2) {
        document.querySelector("#win").innerHTML = "Winner is A";
    }
    else if (nmbr1 < nmbr2) {
        document.querySelector("#win").innerHTML = "Winner is B";

    }
    else {
        document.querySelector("#win").innerHTML = "Draw";

    }
})