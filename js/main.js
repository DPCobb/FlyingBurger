/*
Daniel Cobb
WIA The Project
July 27,2016

*/
// jQuery Animations/Effects
// Home Page Logo, Menu, and Cars
$(document).ready(function(){
    $('#logo').fadeIn(2000);
    $('nav ul').fadeIn(5000);
    $('#car').animate({
        left: "+=150%",
    }, 9000);
    $('#car3').animate({
        left: "+=90%",
    }, 6000);
    $('#car2').animate({
        left: "-500px",
    }, 10000);


/*-------------------------

Image Gallery

---------------------------*/
    // Set needed Vars
    var index = $('.selected'), currentIndex = $('.imgGal li').index(index), imgs = $('.imgGal li').find('img'), totImg = imgs.length, modalHeight = $(window).height(), firstImg = $('.selected').find('img').attr('src');

    // Set the Modal height to the height of the current Window
    $('.modal').css('height', modalHeight);
    // Set the Modal Img height to 75% of the height of the window
    $('.modalView img').css('height', modalHeight * .75);

    // Set initial img in Viewer
    $('.viewer').attr('src', firstImg);

    // Function To Change Img on left/right arrow click
    function changeImg(){
        // Set currentImg to currentIndex
        var currentImg = imgs.eq(currentIndex);
        // Set src Var to currentImg's src
        var src = currentImg.attr('src');
        // Remove selected class from previous li
        $('.selected').removeClass('selected');
        // Add selected class to new li
        currentImg.closest('li').addClass('selected');
        // fade out current image with complete function
        $('.viewer').fadeOut(function(){
            // set new img src and fade in
            $('.viewer').attr('src', src).fadeIn();
        });
    };

    // Similar to changeImg, but changes on thumbnail click
    $('.imgGal img').on('click', function(e){
        e.preventDefault();
        var newSrc = $(this).attr('src');
        $('.selected').removeClass('selected');
        $(this).closest('li').addClass('selected');
        $('.viewer').fadeOut(function(){
            $('.viewer').attr('src', newSrc).fadeIn();
        });
        var updateIndex = $('.selected');
        currentIndex = $('.imgGal li').index(updateIndex);
    });

    // Change currentIndex on left/right arrow click
    $('.next').on('click', function(){
        currentIndex +=1;
        if (currentIndex > totImg - 1){
            currentIndex=0;
        }
        changeImg();
    });
    $('.prev').on('click',function() {
        currentIndex -= 1;
        if (currentIndex < 0) {
            currentIndex = totImg - 1;
        }
        changeImg();
    });

    // Click event for clicking on viewer image
    $('.viewer').on('click', function(e){
        e.preventDefault();
        // set the newSrc value
        var newSrc = $(this).attr('src');
        // Set modal image src to newSrc
        $('.modalView img').attr('src', newSrc)
        // Fade in Modal
        $('.modal').fadeIn();
    });
    // Close Modal on Screen Click
    $('.modal').on('click', function(e){
        $(this).fadeOut();
    });

/*-------------------------

Ratings bar chart

---------------------------*/
var spans = $('#ratings').find('span');
var spansTot = spans.length;
var colors = ['#bb9e60', '#dac644', '#51ae7d', '#d3dadd', '#762019'];

for(i = 0; i < spansTot; i++){
    var heightMult = $('#ratings').find('span').eq(i).attr('data-rate');
    $('#ratings').find('span').eq(i).css('height', heightMult * 10).css('left', 55 * i).css('background', colors[i]);

};
spans.animate({
    display: 'inline-block',
    height: 'toggle'
},1000);




});
