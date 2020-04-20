
var reactor1Tl = new TimelineMax(),
    seguirForma = MorphSVGPlugin.pathDataToBezier('#motionPath', { align: '#heartCircle1' }),
    seguirForma2 = MorphSVGPlugin.pathDataToBezier('#motionPath', { align: '#heartCircle2' }),
    seguirForma3 = MorphSVGPlugin.pathDataToBezier('#motionPath', { align: '#heartCircle3' }),
    //offset is just a time value that controls how far apart we start animating things.
    offset = 5.9;
var offset2 = 2.9;
//notice we needed to do a separate path for each one because their coordinates are different based on the "align" (which makes the path relative to that particular element)

TweenLite.set('#heartCircle1, #heartCircle2, #heartCircle3', { xPercent: 0, yPercent: 0 });

reactor1Tl
    .to('#heartCircle1', 8,
        {
            bezier:
                { values: seguirForma, type: "cubic", autoRotate: ["x", "y", "rotation", 140, false] },
            ease: Power0.easeNone, repeat: -1
        }, 0)
    .to('#heartCircle2', 8,
        {
            bezier:
                { values: seguirForma2, type: "cubic", autoRotate: ["x", "y", "rotation", 135, false] },
            ease: Power0.easeNone, repeat: -1
        }, offset)
    .to('#heartCircle3', 8,
        {
            bezier:
                { values: seguirForma3, type: "cubic", autoRotate: ["x", "y", "rotation", 135, false] },
            ease: Power0.easeNone, repeat: -1
        }, offset2)

    .time(offset);


var el = $('.balance'),
    oulineEl = $('#outline-content'),
    innerEl = $('#inner-outline'),
    middleEl = $('#middle-outline');


TweenMax.from($('.pet-logo'), 2, { css: { scale: .5 }, ease: Quad.easeInOut });


var Etl = new TimelineMax();
Etl.to($('#outer-circle'), 55, { rotation: -360, transformOrigin: "center center", repeat: -1, ease: Linear.easeNone });
Etl.play();


var outlinetl = new TimelineMax();
outlinetl.to(oulineEl, 20, { rotation: 360, repeatDelay: 0, transformOrigin: "400px 399px", repeat: -1, ease: Linear.easeNone })
outlinetl.play();


var innerTl = new TimelineMax();
innerTl.to(innerEl, 15, { rotation: -360, repeatDelay: 0, transformOrigin: "-59px 352px", repeat: -1, ease: Linear.easeNone })
innerTl.play();


var middleTl = new TimelineMax();
middleTl.to(middleEl, 8, { rotation: 360, repeatDelay: 0, transformOrigin: "317px 280px", repeat: -1, ease: Linear.easeNone })
innerTl.play();

var newTl = new TimelineMax();
newTl.from($('.leftLoader'), 6.5, { css: { width: 0 }, ease: Power0.easeNone })
    .from($('.balance'), 1.5, { scale: 0.5, ease: Power0.easeNone }, '-=6.2')
    .from($('.balance'), 2, { rotation: -10, repeatDelay: .1, transformOrigin: "center center", repeat: -1, yoyo: true, ease: Power0.easeNone }, '-=5')
    .to($('.loader-container'), .5, { opacity: 0, ease: Power0.easeNone })
    .to($('.diet-container'), 1, { x: "-30%", ease: Linear.easeNone })
    .to($('.svg-pet'), 1, { opacity: 1, ease: Linear.easeNone })
    .to($('.curve-container'), 0, { opacity: 1, ease: Power0.easeNone }, '-=.5')
    .to($('#curve'), 1.5, { strokeDashoffset: "0", ease: Power0.easeNone }, '-=.1')
//.to($('.circlePoint'), 7, { r: "20.855", ease: Power0.easeNone })

newTl.play();



// $('.maskText').on('click',() => {
// //    window.location.href="/homepage";
// this.router.navigate(['/parent/detail']);

// })

$('.circlePoint,.maskText').on('mouseenter', function () {

    $(this).parents('.curve').find('rect').stop().animate({
        'width': '300px'
    }, 500);
    $(this).parents('.curve').find('.maskText').stop().animate({
        'fill-opacity': '1'
    }, 500);
});
$('.rectMap,.maskText').on('mouseout', function () {

    $(this).parents('.curve').find('rect').stop().animate({
        'width': '0px'
    }, 500);
    $(this).parents('.curve').find('.maskText').stop().animate({
        'fill-opacity': '0'
    }, 500);
});
