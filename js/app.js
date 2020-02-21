const loader = document.querySelector('#loader');

const checkLoad = ()=>{ //function qui desactive le loader une fois que la connexion est etablie
    document.addEventListener('load',()=>{
        loader.style.opacity = 0;
    });
}
checkLoad();

