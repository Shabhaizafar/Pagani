const bodytxt = document.body.innerHTML;

document.body.onload = function(){
    document.body.innerHTML = "";

    const xhttps = new XMLHttpRequest();
    xhttps.open("GET","loader.txt");
    xhttps.onload = function (data){
        document.body.innerHTML = data.target.response;
    }
    xhttps.send();

    setTimeout(() => {
        document.body.innerHTML = bodytxt;
    }, 5000);
}


function all(){
    document.querySelector('.past-c').style.left = "0vw";
    document.querySelector('.past-c').style.transition= 'all 2s';
}
