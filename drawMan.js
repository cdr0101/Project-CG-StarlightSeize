function drawMan(ctx) {
    ctx.save();

    // Store the initial transformation state
    const initialTransform = ctx.getTransform();

    // Start and end points for transformation
    const startX = 350
    const startY = 550
    const endX = 450
    const endY = 50
    // Loop to perform the transformation
    let scaleFactor = 0;
    const animationInterval = setInterval(() => {
        scaleFactor += 0.09;
        if (scaleFactor <= 0.8) {
            ctx.setTransform(initialTransform); // Reset transformation to initial state
            const translateX = startX + (endX - startX) * scaleFactor;
            const translateY = startY + (endY - startY) * scaleFactor;
            ctx.globalAlpha = scaleFactor; // Adjust opacity (starts from 0 and increases)
            ctx.transform(scaleFactor, 0, 0, scaleFactor, translateX, translateY); // Apply transformation
            drawManRaw(ctx); 
        } else {
            clearInterval(animationInterval); // Stop the animation when done

			drawSaucerBack(ctx) 
            ctx.restore(); // Restore the initial transformation state
            ctx.globalAlpha = 1; // Reset opacity
        }
    }, 250);
	 
}

function drawManRaw(ctx){
ctx.beginPath();
    // ctx.arc(0, 0, 20, 0, Math.PI * 2);
    // ctx.fillStyle = "blue";
    // ctx.fill();
	// ctx.fillStyle = 'rgba(4, 4, 4, 0.976)';
	// ctx.fillStyle=fillStyle
	ctx.moveTo(235.828340, 106.816370);
	ctx.lineTo(241.654690, 111.810380);
	ctx.bezierCurveTo(242.704290, 122.774850, 243.357900, 133.673310, 242.209580, 144.271460);
	ctx.bezierCurveTo(236.026310, 152.079470, 234.202610, 161.869090, 231.944110, 171.461080);
	ctx.bezierCurveTo(225.536070, 174.852640, 229.654280, 177.978830, 232.791790, 180.616770);
	ctx.bezierCurveTo(242.045670, 188.397210, 239.901010, 180.914900, 236.938120, 175.622750);
	ctx.bezierCurveTo(237.757360, 170.635710, 235.993920, 169.315110, 244.429140, 152.872260);
	ctx.bezierCurveTo(245.947040, 151.985630, 247.161590, 150.795660, 248.313370, 149.542910);
	ctx.bezierCurveTo(248.867450, 148.063200, 249.348810, 146.583500, 250.255490, 145.103790);
	ctx.bezierCurveTo(250.458590, 146.935290, 250.539290, 148.889180, 251.087820, 150.375250);
	ctx.bezierCurveTo(247.853160, 156.989600, 245.509470, 165.720210, 244.012980, 177.981040);
	ctx.bezierCurveTo(236.167730, 183.587230, 259.932990, 194.503810, 250.116760, 181.171650);
	ctx.bezierCurveTo(254.653310, 162.158500, 258.264320, 151.384270, 262.463070, 136.086820);
	ctx.bezierCurveTo(263.108870, 124.934810, 261.212830, 122.191160, 262.740520, 115.972060);
	ctx.lineTo(263.572850, 114.862280);
	ctx.bezierCurveTo(259.473710, 106.170690, 258.408970, 101.277220, 253.723560, 94.192614);
	ctx.bezierCurveTo(250.577150, 89.305455, 247.934590, 84.982533, 242.209580, 81.568862);
	ctx.bezierCurveTo(241.410300, 80.488124, 240.645350, 79.379928, 241.654690, 76.852295);
	ctx.bezierCurveTo(242.783560, 75.683410, 242.744490, 73.458424, 240.822360, 72.690619);
	ctx.bezierCurveTo(237.614080, 71.819515, 233.555190, 70.036247, 232.221560, 70.748503);
	ctx.lineTo(231.666670, 69.638723);
	ctx.bezierCurveTo(229.269680, 70.846635, 227.589970, 72.592511, 226.672650, 74.910180);
	ctx.bezierCurveTo(225.040550, 80.225262, 226.235840, 81.299260, 226.672650, 83.510978);
	ctx.bezierCurveTo(227.945400, 84.689959, 227.741830, 86.079843, 233.886230, 86.562874);
	ctx.lineTo(233.886230, 87.672655);
	ctx.bezierCurveTo(232.406520, 88.068167, 230.926820, 89.127137, 229.447110, 91.001996);
	ctx.lineTo(228.892220, 105.706590);
	ctx.lineTo(223.343310, 124.850300);
	ctx.lineTo(222.788420, 130.676650);
	ctx.bezierCurveTo(225.100580, 135.098150, 230.288390, 135.811860, 226.395210, 130.121760);
	ctx.lineTo(227.227550, 126.237530);
	ctx.lineTo(228.614770, 127.069860);
	ctx.bezierCurveTo(230.257520, 119.556920, 232.706150, 112.849870, 235.828340, 106.816370);
	ctx.closePath();
	ctx.fill();
    
}
// // function animateMan(startX, startY, endX, endY) {
// //     const manElement = document.getElementById('man');
// //     manElement.style.transition = 'transform 5s ease, opacity 5s ease, scale 5s ease'; 
// //     const deltaX = endX - startX;
// //     const deltaY = endY - startY;
// //     manElement.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.8)`;
// //     manElement.style.opacity = '1'; 

// // }

