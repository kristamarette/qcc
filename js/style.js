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









// $(function () {

//     document.querySelector('#navBrandy').addEventListener('change', function (evt){
//         updateProductView("brandy", evt.target.onClick);
//     });
//     document.querySelector('#navCordials').addEventListener('change', function (evt){
//         updateProductView("cordials", evt.target.onClick);
//     });
//     document.querySelector('#navGin').addEventListener('change', function (evt){
//         updateProductView("gin", evt.target.onClick);
//     });
//     document.querySelector('#navMezcal').addEventListener('change', function (evt){
//         updateProductView("mezcal", evt.target.onClick);
//     });
//     document.querySelector('#navRum').addEventListener('change', function (evt){
//         updateProductView("rum", evt.target.onClick);
//     });
//     document.querySelector('#navScotch').addEventListener('change', function (evt){
//         updateProductView("scotch", evt.target.onClick);
//     });
//     document.querySelector('#navSherry').addEventListener('change', function (evt){
//         updateProductView("sherry", evt.target.onClick);
//     });
//     document.querySelector('#navTequila').addEventListener('change', function (evt){
//         updateProductView("tequila", evt.target.onClick);
//     });
//     document.querySelector('#navVodka').addEventListener('change', function (evt){
//         updateProductView("vodka", evt.target.onClick);
//     });
//     document.querySelector('#navWhiskey').addEventListener('change', function (evt){
//         updateProductView("whiskey", evt.target.onClick);
//     });
//     document.querySelector('#navDealer').addEventListener('change', function (evt){
//         updateProductView("dealer", evt.target.onClick);
//     });
  
// })

// function updateProductView(categoryName, bVisible) {
//     var dataSelectorVal = "";
//     switch (categoryName) {
//         case "brandy":
//         dataSelectorVal = "li[data-type='brandy']";
//         break;
//         case "cordials":
//         dataSelectorVal = "li[data-type='cordials']";
//         break;
//         case "gin":
//         dataSelectorVal = "li[data-type='gin']";
//         break;
//         case "mezcal":
//         dataSelectorVal = "li[data-type='mezcal']";
//         break;
//         case "rum":
//         dataSelectorVal = "li[data-type='rum']";
//         break;
//         case "scotch":
//         dataSelectorVal = "li[data-type='scotch']";
//         break;
//         case "sherry":
//         dataSelectorVal = "li[data-type='sherry']";
//         break;
//         case "tequila":
//         dataSelectorVal = "li[data-type='tequila']";
//         break;
//         case "vodka":
//         dataSelectorVal = "li[data-type='vodka']";
//         break;
//         case "whiskey":
//         dataSelectorVal = "li[data-type='whiskey']";
//         break;
//         case "dealer":
//         dataSelectorVal = "li[data-type='dealer']";
//         break;
//     }
//     $("li").has(dataSelectorVal).css('display', bVisible ? "" : "none");
// }

