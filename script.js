let convertBtn = document.querySelector(".convert-button");
let URLinput = document.querySelector(".URL-input");

convertBtn.addEventListner("keypress", function (event) {
    event.preventDefault();
    if(event.key === 'Enter'){
        console.log(`URL : ${URLinput.value}`);
        sendURL(URLinput.value);
    }
   
    
});

function sendURL(URLinput){
    window.location.href = `http://localhost:000/download?URL=${URLinput}`;
    // fetch(`http://localhost/4000/download?URL=${URL}`,{
    //     method: 'GET'
    // }).then(res => res.json())
    //   .then(json=> console.log(json));
}