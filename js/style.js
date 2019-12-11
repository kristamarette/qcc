//<---------Chevron -------->

//  $("chevron").hover(function(){
//       $("chevron").slideDown();
//     });

// <----------Shaker Motion---------->

var tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 100,
});
    tl.add({
        targets: 'img#shaker',
        width: '25%',
        // backgroundColor: 'rgb(197,197,255)',
        delay: anime.stagger(100),
    })
    tl.add({
        targets: 'img#shaker',
        width: '20%',
        // backgroundColor: 'rgb(235,235,255)',
        delay: anime.stagger(4000),
    })

    tl.add({
        targets: 'img#shaker',
        top: '20%',
        opacity: 1,
        duration: 500,
    }, '-= 1600')
    
    let rotateMe = anime ({
        targets: 'img#shaker',
        scaleY:'1',
        scaleX: '1',
        translateX: '20%',
        // rotate: '-45deg',
        rotate: '45deg',
        duration: 2000,
        autoplay: true,
    })

    document.querySelector('img#shaker')
    .addEventListener('mouseover',()=>
    {
        rotateMe.play();
 });
