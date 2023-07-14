
const firstSection = document.getElementById("section-home");
const scrollBtn = document.getElementById('scrollUp')

const scollCallBack = (entries)=>{
    const  [entry] = entries;
    if(!entry.isIntersecting) scrollBtn.classList.remove('hidden');
    else scrollBtn.classList.add('hidden');
}
const scollOptions = {
    root: null,
    threshold: 0,
};

const scrollObserver = new IntersectionObserver(scollCallBack, scollOptions);
scrollObserver.observe(firstSection);

scrollBtn.addEventListener('click', function(){
    document.body.scrollTo(0,0)
});

