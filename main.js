//elementos
let enviarReview = document.querySelector("#enviarReview");
let review = document.querySelector("#review");
let nomeReviewer = document.querySelector("#nomeReviewer");
let sectionFeedback = document.querySelector("#feedback");


//adicionar review
enviarReview.addEventListener("click", ()=>{AdicionarReview()});
function AdicionarReview(){
    if(review.value != "" && nomeReviewer.value != ""){
        let cardReview = document.createElement("div");
        cardReview.className = "cardReview";
        let textoReview = document.createElement("p");
        let nomeReview = document.createElement("h2");
        nomeReview.innerText = nomeReviewer.value;
        textoReview.innerHTML = review.value;
        cardReview.append(nomeReview);
        cardReview.append(textoReview);
        sectionFeedback.append(cardReview);
        review.value = "";
        nomeReviewer.value = "";
    }
}