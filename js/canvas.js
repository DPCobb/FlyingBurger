/*
Daniel Cobb
WIA The Project
July 27,2016

*/

window.onload = function(){
    if(Modernizr.video){
        console.log('HTML5 video supported');
    }else{
        var msg = "<p>Bummer there should be a sweet video of chicken grilling here, but your browser doesn't support HTML video</p>";
        $('#vid').html(msg);
    }
    if(Modernizr.canvas){
        var canvas = document.getElementById("menuCan");
    	var ctx = canvas.getContext("2d");
        var canvas2 = document.getElementById('canLogo');
        var ctx2 = canvas2.getContext("2d");
        ctx.fillStyle="#FFFFF7";
        // Draws header
        header(ctx);
        footer(ctx2);

        /* Header Scene Function
            Created with Ai to Canvas Plugin.
            This plugin takes the image and outputs the needed JS to create the scene.
            Some differences between using this and creating the scene from scratch are:
            First the drawing is placed in a function and then called
            The coordinates and sizes are more exact using numbers like 71.6
            Also it creates cirlces with bezierCurveTo instead of Arcs. I decided to edit the circle
                to use an Arc instead of the bezierCurveTo.

            Plugin Credit:
            <!-- Created with Ai->Canvas Export Plug-In Version 1.3 (Mac)   -->
            <!-- By Mike Swanson (http://blog.mikeswanson.com/)             -->

        */
        function header(ctx) {
            // layer1/Path
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(0.0, 0.0);
            ctx.lineTo(799.3, 0.0);
            ctx.lineTo(799.3, 200.0);
            ctx.lineTo(0.0, 200.0);
            ctx.lineTo(0.0, 0.0);
            ctx.closePath();
            ctx.fillStyle = "rgb(33, 166, 239)";
            ctx.fill();

            // layer1/Path
            ctx.beginPath();
            ctx.moveTo(71.6, 28.0);
            ctx.arc(71,60,30,0,(360/180)*Math.PI);

            // Sun drawn with bezierCurveTo
            /*ctx.bezierCurveTo(88.7, 28.0, 102.6, 38.9, 102.6, 52.3);
            ctx.bezierCurveTo(102.6, 65.7, 88.7, 76.6, 71.6, 76.6);
            ctx.bezierCurveTo(54.5, 76.6, 40.7, 65.7, 40.7, 52.3);
            ctx.bezierCurveTo(40.7, 38.9, 54.5, 28.0, 71.6, 28.0);*/
            ctx.closePath();
            ctx.fillStyle = "rgb(218, 198, 52)";
            ctx.fill();

            // layer1/Path
            ctx.beginPath();
            ctx.moveTo(240.1, 56.0);
            ctx.bezierCurveTo(240.9, 54.9, 241.3, 53.8, 241.3, 52.6);
            ctx.bezierCurveTo(241.3, 45.8, 225.9, 40.3, 206.9, 40.3);
            ctx.bezierCurveTo(194.7, 40.3, 184.0, 42.6, 177.8, 46.0);
            ctx.bezierCurveTo(174.5, 45.8, 170.9, 45.7, 167.2, 45.7);
            ctx.bezierCurveTo(144.8, 45.7, 126.7, 50.0, 126.7, 55.3);
            ctx.bezierCurveTo(126.7, 55.6, 126.9, 55.9, 127.0, 56.3);
            ctx.bezierCurveTo(125.7, 56.9, 124.9, 58.2, 124.9, 59.7);
            ctx.lineTo(124.9, 60.9);
            ctx.bezierCurveTo(124.9, 63.1, 126.7, 64.7, 129.1, 64.7);
            ctx.lineTo(203.8, 64.7);
            ctx.bezierCurveTo(204.8, 64.7, 205.8, 64.7, 206.8, 64.7);
            ctx.bezierCurveTo(207.9, 64.7, 208.9, 64.7, 209.9, 64.7);
            ctx.lineTo(238.2, 64.7);
            ctx.bezierCurveTo(240.7, 64.7, 242.8, 63.1, 242.8, 60.9);
            ctx.lineTo(242.8, 59.7);
            ctx.bezierCurveTo(242.9, 58.0, 241.7, 56.5, 240.1, 56.0);
            ctx.closePath();
            ctx.fillStyle = "rgb(185, 195, 197)";
            ctx.fill();

            // layer1/Path
            ctx.beginPath();
            ctx.moveTo(453.3, 51.7);
            ctx.bezierCurveTo(454.3, 49.8, 454.7, 47.8, 454.7, 45.7);
            ctx.bezierCurveTo(454.7, 33.5, 437.9, 23.5, 417.1, 23.5);
            ctx.bezierCurveTo(403.8, 23.5, 392.0, 27.6, 385.3, 33.8);
            ctx.bezierCurveTo(381.7, 33.4, 377.8, 33.2, 373.7, 33.2);
            ctx.bezierCurveTo(349.3, 33.2, 329.4, 40.9, 329.4, 50.5);
            ctx.bezierCurveTo(329.4, 51.1, 329.5, 51.6, 329.6, 52.2);
            ctx.bezierCurveTo(328.2, 53.4, 327.3, 55.7, 327.3, 58.3);
            ctx.lineTo(327.3, 60.7);
            ctx.bezierCurveTo(327.3, 64.6, 329.4, 67.4, 332.1, 67.4);
            ctx.lineTo(413.8, 67.4);
            ctx.bezierCurveTo(414.9, 67.4, 415.9, 67.5, 417.1, 67.5);
            ctx.bezierCurveTo(418.2, 67.5, 419.3, 67.4, 420.4, 67.4);
            ctx.lineTo(451.4, 67.4);
            ctx.bezierCurveTo(454.1, 67.4, 456.5, 64.6, 456.5, 60.7);
            ctx.lineTo(456.5, 58.3);
            ctx.bezierCurveTo(456.5, 55.4, 455.1, 52.9, 453.3, 51.7);
            ctx.closePath();
            ctx.fill();

            // layer1/Path
            ctx.beginPath();
            ctx.moveTo(555.2, 53.5);
            ctx.bezierCurveTo(556.1, 52.0, 556.6, 50.3, 556.6, 48.7);
            ctx.bezierCurveTo(556.6, 38.8, 539.5, 30.8, 518.4, 30.8);
            ctx.bezierCurveTo(504.8, 30.8, 492.9, 34.1, 486.1, 39.0);
            ctx.bezierCurveTo(482.3, 38.7, 478.4, 38.5, 474.3, 38.5);
            ctx.bezierCurveTo(449.4, 38.5, 429.1, 44.8, 429.1, 52.5);
            ctx.bezierCurveTo(429.1, 52.9, 429.3, 53.4, 429.4, 53.8);
            ctx.bezierCurveTo(428.0, 54.8, 427.1, 56.7, 427.1, 58.8);
            ctx.lineTo(427.1, 60.7);
            ctx.bezierCurveTo(427.1, 63.8, 429.1, 66.3, 431.8, 66.3);
            ctx.lineTo(514.9, 66.3);
            ctx.bezierCurveTo(516.0, 66.3, 517.2, 66.4, 518.3, 66.4);
            ctx.bezierCurveTo(519.4, 66.4, 520.5, 66.3, 521.7, 66.3);
            ctx.lineTo(553.3, 66.3);
            ctx.bezierCurveTo(556.0, 66.3, 558.2, 63.8, 558.2, 60.7);
            ctx.lineTo(558.2, 58.8);
            ctx.bezierCurveTo(558.3, 56.5, 557.0, 54.4, 555.2, 53.5);
            ctx.closePath();
            ctx.fillStyle = "rgb(206, 208, 208)";
            ctx.fill();

            // layer1/Path
            ctx.beginPath();
            ctx.moveTo(756.5, 61.0);
            ctx.bezierCurveTo(757.3, 59.9, 757.8, 58.8, 757.8, 57.7);
            ctx.bezierCurveTo(757.8, 50.9, 742.3, 45.3, 723.3, 45.3);
            ctx.bezierCurveTo(711.1, 45.3, 700.4, 47.6, 694.3, 51.0);
            ctx.bezierCurveTo(690.9, 50.8, 687.3, 50.7, 683.6, 50.7);
            ctx.bezierCurveTo(661.2, 50.7, 643.1, 55.0, 643.1, 60.3);
            ctx.bezierCurveTo(643.1, 60.7, 643.3, 60.9, 643.4, 61.3);
            ctx.bezierCurveTo(642.1, 61.9, 641.3, 63.2, 641.3, 64.7);
            ctx.lineTo(641.3, 66.0);
            ctx.bezierCurveTo(641.3, 68.1, 643.1, 69.7, 645.6, 69.7);
            ctx.lineTo(720.2, 69.7);
            ctx.bezierCurveTo(721.2, 69.7, 722.2, 69.8, 723.2, 69.8);
            ctx.bezierCurveTo(724.2, 69.8, 725.3, 69.7, 726.3, 69.7);
            ctx.lineTo(754.6, 69.7);
            ctx.bezierCurveTo(757.1, 69.7, 759.3, 68.1, 759.3, 66.0);
            ctx.lineTo(759.3, 64.7);
            ctx.bezierCurveTo(759.3, 63.0, 758.1, 61.6, 756.5, 61.0);
            ctx.closePath();
            ctx.fillStyle = "rgb(185, 195, 197)";
            ctx.fill();
            ctx.restore();
        }
        function footer(ctx2){
            var img = document.getElementById('logoHide');
            ctx2.drawImage(img, 0,0, 200, 150);
        }
    }
    else{
        var display = "The Flying Burger uses Canvas to make this site awesome... but your browser doesn't support that."
        $('canvas').html(display);
        $('canvas2').html(display);
    }
}
