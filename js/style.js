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

let rotateMe = anime({
    targets: 'img#shaker',
    scaleY: '1',
    scaleX: '1',
    translateX: '20%',
    // rotate: '-45deg',
    rotate: '45deg',
    duration: 2000,
    autoplay: true,
})

document.querySelector('img#shaker')
    .addEventListener('mouseover', () => {
        rotateMe.play();
    });

// <----------Recipe Sort---------->
$(document).ready(function () {

    var content = $('#container');
    var MyObject = {
        navBrandy: [$(this).data('brandy')],
        navCordials: $(this).data('cordials'),
        navGin: $(this).data('gin'),
        navMezcal: $(this).data('mezcal'),
        navRum: $(this).data('rum'),
        navScotch: $(this).data('scotch'),
        navSherry: $(this).data('sherry'),
        navTequila: $(this).data('tequila'),
        navVodka: $(this).data('vodka'),
        navWhiskey: $(this).data('whiskey'),
        navDealer: $(this).data(''),


    };

    console.log(myObject.navBrandy);
    $('#navBrandy').on('click', function () {
        content.append(myObject.navBrandy);
    })

    console.log(myObject.navCordials);
    $('#navBrandy').on('click', function () {
        content.append(myObject.navCordials);
    })

    console.log(myObject.navGin);
    $('#navBrandy').on('click', function () {
        content.append(myObject.navGin);
    })

    console.log(myObject.navMezcal);
    $('#navBrandy').on('click', function () {
        content.append(myObject.navMezcal);
    })

    console.log(myObject.navRum);
    $('#navBrandy').on('click', function () {
        content.append(myObject.navRum);
    })

    console.log(myObject.navScotch);
    $('#navBrandy').on('click', function () {
        content.append(myObject.navScotch);
    })

    console.log(myObject.navSherry);
    $('#navBrandy').on('click', function () {
        content.append(myObject.navSherry);
    })

    console.log(myObject.navTequila);
    $('#navBrandy').on('click', function () {
        content.append(myObject.navTequila);
    })

    console.log(myObject.navVodka);
    $('#navBrandy').on('click', function () {
        content.append(myObject.navVodka);
    })

    console.log(myObject.navWhiskey);
    $('#navBrandy').on('click', function () {
        content.append(myObject.navWhiskey);
    })

    console.log(myObject.navDealer);
    $('#navBrandy').on('click', function () {
        content.append(myObject.navDealer);
    })
    //document.ready ends here
});

// });