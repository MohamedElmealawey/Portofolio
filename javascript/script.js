const up=document.querySelector(".up");
window.addEventListener("scroll",()=>{
    if(window.scrollY>400){
        up.classList.add("active");
    }else{
        up.classList.remove("active");
    }
});
up.addEventListener("click",()=>{
    window.scrollTo(0,0);
})
var typed = new Typed('.typedEll', {
    strings: ['Mohamed Elmealawey', 'a Front-End Developer'],
    typeSpeed:100,
    backSpeed:100,
    loop:true,
    loopCount: Infinity,
});

$('.dark-mood').click(()=>{
    $('body').css('backgroundColor','rgb(21, 32, 43)')
    $('body').css('color','white')
    $('.first-ul li a').css('color','rgb(21, 32, 43)')
    $('.nav').css('backgroundColor','#ebf4fa')
    $('.main-title').css('borderColor','white')
    $('.dark-mood').fadeOut(500)
    $('.light-mood').fadeIn(500)
    $('#contacts a').css('color','white')
    $('.up i').css('color','white')
    $('.up').css('backgroundColor','transparent')
    $('.up').css('border','2px solid #0099ff')
})

$('.light-mood').click(()=>{
    $('body').css('backgroundColor','#ebf4fa')
    $('body').css('color','rgb(21, 32, 43)')
    $('.nav').css('backgroundColor','rgb(21, 32, 43)')
    $('.first-ul li a').css('color','#ebf4fa')
    $('.main-title').css('borderColor','black')
    $('.dark-mood').fadeIn(500)
    $('.light-mood').fadeOut(500)
    $('#contacts a').css('color','black')
    $('.up i').css('color','black')
    $('.up').css('backgroundColor','transparent')
    $('.up').css('border','2px solid rgb(21, 32, 43)')
})

let aboutoffset=$('.img-home').offset().top
$(window).scroll(()=>{
if($(window).scrollTop()>aboutoffset){
    $('.bar-one').css('animationName','width-one')
    $('.bar-two').css('animationName','width-two')
    $('.bar-three').css('animationName','width-three')
    $('.bar-four').css('animationName','width-four')
    $('.bar-five').css('animationName','width-five')
    $('.bar-six').css('animationName','width-six')
    $('.bar-seven').css('animationName','width-seven')
}
})

$('.load').delay(3500).fadeOut(1000,()=>{
    $('body').css({'overflow':'visible'})
    $('#about').fadeIn()
    $('#projects').fadeIn()
    $('#contacts').fadeIn()
    AOS.init();
})

