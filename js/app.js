const loader = document.querySelector('#loader');
var back = document.querySelectorAll('.back');
[back1,back2] = back;
const checkLoad = ()=>{ //function qui desactive le loader une fois que la connexion est etablie
    document.addEventListener('load',()=>{
        loader.style.opacity = 0;
    });
}
checkLoad();

const changeBackground = ()=>{
    document.addEventListener('scroll', () => {
        console.log(document.documentElement.scrollTop);
        if(document.body.scrollTop > (window.innerHeight/1.2) || document.documentElement.scrollTop > (window.innerHeight/1.2)){
            back1.classList.remove('black');
            back1.classList.add('white');
            back2.classList.remove('white');
            back2.classList.add('black');
        }
        else if (document.body.scrollTop <= (window.innerHeight/8) || document.documentElement.scrollTop <= (window.innerHeight/8)){
            back2.classList.remove('black');
            back2.classList.add('white');
            back1.classList.remove('white');
            back1.classList.add('black');
        }
    })
};

changeBackground();

