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
    })

// <----------Recipe Sort---------->
$(function(){
    document.querySelector('#brandy').addEventListener('change', function (evt) {
        updateProductView("brandy",evt.target.onClick);
    })
    document.querySelector('#cordials').addEventListener('change', function (evt) {
        updateProductView("cordials",evt.target.onClick);
    })
    document.querySelector('#gin').addEventListener('change', function (evt) {
        updateProductView("gin",evt.target.onClick);
    })
    document.querySelector('#mezcal').addEventListener('change', function (evt) {
        updateProductView("mezcal",evt.target.onClick);
    })
    document.querySelector('#rum').addEventListener('change', function (evt) {
        updateProductView("rum",evt.target.onClick);
    })
    document.querySelector('#scotch').addEventListener('change', function (evt) {
        updateProductView("scotch",evt.target.onClick);
    })
    document.querySelector('#sherry').addEventListener('change', function (evt) {
        updateProductView("sherry",evt.target.onClick);
    })
    document.querySelector('#tequila').addEventListener('change', function (evt) {
        updateProductView("tequila",evt.target.onClick);
    })
    document.querySelector('#vodka').addEventListener('change', function (evt) {
        updateProductView("vodka",evt.target.onClick);
    })
    document.querySelector('#whiskey').addEventListener('change', function (evt) {
        updateProductView("whiskey",evt.target.onClick);
    })
    document.querySelector('#dealer').addEventListener('change', function (evt) {
        updateProductView("dealer",evt.target.onClick);
    })
})

function updateProductView(categoryName, bVisible) {
    var dataSelectorVal = "";
    switch (categoryName) {
        case "#brandy":
            dataSelectorVal = ".item[data-type='brandy']";
            break;
        case "#cordials":
            dataSelectorVal = ".item[data-type='cordials']";
            break;
        case "#gin":
            dataSelectorVal = ".item[data-type='gin']";
            break;
        case "#mezcal":
            dataSelectorVal = ".item[data-type='mezcal']";
            break;
        case "#rum":
            dataSelectorVal = ".item[data-type='rum']";
            break;
        case "#scotch":
            dataSelectorVal = ".item[data-type='scotch']";
            break;
        case "#sherry":
            dataSelectorVal = ".item[data-type='sherry']";
            break;
        case "#tequila":
            dataSelectorVal = ".item[data-type='tequila']";
            break;
        case "#vodka":
            dataSelectorVal = ".item[data-type='vodka']";
            break;
        case "#whiskey":
            dataSelectorVal = ".item[data-type='whiskey']";
            break;
        
        $(".item").has(dataSelectorVal).css('display', bVisible ? "" : "none");
    }

    };