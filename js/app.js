const loader = document.querySelector('#loader');
var back = document.querySelectorAll('.back');
[back1,back2] = back;
const checkLoad = ()=>{ //function qui desactive le loader une fois que la connexion est etablie
    window.addEventListener('load',()=>{
        loader.classList.toggle('load');
    });
}
checkLoad();

const changeBackground = ()=>{
    document.addEventListener('scroll', () => {
        console.log(document.documentElement.scrollTop);
        if(document.body.scrollTop > (window.innerHeight/1.2) || document.documentElement.scrollTop > (window.innerHeight/1.2)){
            back1.classList.add('annim1');
            setTimeout(()=>{
                back1.style.transform = 'translateX(50%)';
                document.querySelector('.myNav a').style.color = '#5A5959';
            })
    }});
};

changeBackground();

