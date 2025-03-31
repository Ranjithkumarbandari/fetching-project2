var url = `https://dummyjson.com/quotes`;
let parent=document.getElementById("parentt");
let currentpage = 1;
let quotesdata=[];
function fetchData(){
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        quotesdata=data.quotes;
        displayQuotes(currentpage);
    })
    .catch(error => {console.log( error);
        
    });
}
    function displayQuotes(pages){
        parent.innerHTML = "";
        let itemsinpage=10;
        let start = (pages-1)*itemsinpage;
        let end = start + itemsinpage;

        let pageData = quotesdata.slice(start,end);


        pageData.forEach((obj)=> {
           
        
            let divEle=document.createElement("div");
            divEle.classList.add("quote-block"); // Add a class for styling
        divEle.style.backgroundColor = getRandomColor(); 
            divEle.innerHTML=`<div>ID : ${obj.id} - Author : ${obj.author}</div>
            <p>"${obj.quote}"</p> <hr>` 
            parent.appendChild(divEle);
        });
    
    }
function change(page){
    currentpage=page;
    displayQuotes(currentpage);
}

 // Function to generate a random color
 function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}