// ANIMATION COMING UFO
let startTime;
const duration = 3000; // in milliseconds
let intervalId;

const startTransform = { scale: 0.8, translateX: 1045, translateY: -100 };
const endTransform = { scale: 2, translateX: 500, translateY: -150 };

function drawSaucer(ctx) {
	const clickSound = new Audio('assets/ufo.mp3');
	document.addEventListener('click', playAudio, { once: true });
  
    function playAudio() {
        clickSound.play();
    }
    startTime = performance.now(); 

	drawHouse(ctx)
    intervalId = setInterval(() => {
        const elapsedTime = performance.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1); 

		// drawHouse(ctx)
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
		disappearHouse(ctx);		
        const scale = interpolate(startTransform.scale, endTransform.scale, progress);
        const translateX = interpolate(startTransform.translateX, endTransform.translateX, progress);
        const translateY = interpolate(startTransform.translateY, endTransform.translateY, progress);

        ctx.save();
        ctx.transform(scale, 0.2, 0.2, scale, translateX, translateY);
		
        drawSaucerRaw(ctx)
        ctx.restore();
        if (progress === 1) {
			clearInterval(intervalId);
			drawHouse(ctx)
			disappearHouse(ctx);
			drawHouse(ctx)
            setTimeout(() => {
                drawLLight(ctx);
            }, 1000); 
     
            setTimeout(() => {
                // animateMan(-95,200,150, -10);
				drawMan(ctx)
            }, 2000);
			setTimeout(()=>{
				const manElement = document.getElementById('man');
				manElement.style.opacity=0
			},5500);
			// setTimeout(() => {
				
            //     drawSaucerBack(ctx);
            // },7000);
       
		}
    }, 16);


}
// ANIMATION GOING UFO
const startTransformBack = { scale: 2, translateX: 500, translateY: -150 };
const endTransformBack = { scale: 0.8, translateX: 2000, translateY: -300 };

function drawSaucerBack(ctx) {
    startTime = performance.now(); 

    intervalId = setInterval(() => {
        const elapsedTime = performance.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
		 disappearHouse(ctx);
		// ctx.addEventListener('click', () => {
		// 	drawHouse(ctx, 0);
		// });
        
        const scale = interpolate(startTransformBack.scale, endTransformBack.scale, progress);
        const translateX = interpolate(startTransformBack.translateX, endTransformBack.translateX, progress);
        const translateY = interpolate(startTransformBack.translateY, endTransformBack.translateY, progress);

        ctx.save();
        ctx.transform(scale, -0.1, -0.1, scale, translateX, translateY);
        
        drawSaucerRaw(ctx);
		
        ctx.restore();
        
        if (progress === 1) {
            clearInterval(intervalId);
			disappearHouse(ctx)
			drawHouse(ctx)
			
        }
    }, 6); 
}


function interpolate(start, end, progress) {
    return start + (end - start) * progress;
}

function drawSaucerRaw (ctx) {
	// Middle light
ctx.beginPath();
ctx.id = 'mlight';
	ctx.fillStyle = 'rgb(243, 242, 0)';
	ctx.lineWidth = 0.070004;
	ctx.moveTo(89.152133, 182.962350);
	ctx.bezierCurveTo(105.382270, 182.846350, 125.611930, 182.228950, 119.507240, 182.415690);
	ctx.bezierCurveTo(118.246460, 193.820920, 92.970951, 199.016620, 89.152133, 182.962350);
	ctx.closePath();
	ctx.fill();
	// Blue Part 
// #path1
	ctx.beginPath();
	ctx.globalAlpha = 1.0;
	ctx.fillStyle = 'rgb(0, 150, 150)';
	ctx.lineWidth = 0.070004;
	ctx.moveTo(150.696310, 144.827740);
	ctx.bezierCurveTo(109.194580, 166.663960, 61.825010, 143.990500, 58.476035, 144.827740);
	ctx.bezierCurveTo(40.252454, 150.656560, 30.185665, 157.655640, 28.085264, 166.415670);
	ctx.bezierCurveTo(30.736888, 190.861470, 184.702530, 188.098620, 180.039120, 160.966290);
	ctx.bezierCurveTo(179.226020, 154.771520, 169.950610, 149.346040, 150.696310, 144.827740);
	ctx.closePath();
	ctx.fill();

	// first light (Left)
// #path2
	ctx.beginPath();
	ctx.id = 'llight';	
	ctx.globalAlpha = 1.0;
	ctx.fillStyle = 'rgb(243, 242, 0)';
	ctx.lineWidth = 0.070004;
	ctx.moveTo(39.403207, 175.952090);
	ctx.bezierCurveTo(48.866539, 178.691590, 58.545042, 180.807420, 68.169644, 181.715850);
	ctx.bezierCurveTo(64.039803, 194.808900, 38.983927, 190.210050, 39.403207, 175.952090);
	ctx.closePath();
	ctx.fill();
	
	// Third light (right)
// #path2-0
	ctx.beginPath();
	ctx.id = 'rlight';
	ctx.fillStyle = 'rgb(243, 242, 0)';
	ctx.lineWidth = 0.070004;
	ctx.moveTo(140.849350, 180.126980);
	ctx.bezierCurveTo(150.599200, 179.075580, 162.101610, 176.100720, 171.228340, 172.279030);
	ctx.bezierCurveTo(172.273060, 186.408950, 146.344900, 192.827790, 140.849350, 180.126980);
	ctx.closePath();
	ctx.fill();
	
// #path3
	ctx.beginPath();
	ctx.globalAlpha = 1.0;
	ctx.fillStyle = 'rgba(144, 144, 114, 0.80083)';
	ctx.lineWidth = 0.070004;
	ctx.moveTo(59.104812, 145.142130);
	ctx.bezierCurveTo(99.603153, 158.079400, 129.723660, 157.667280, 150.696300, 145.142130);
	ctx.bezierCurveTo(155.215360, 114.645010, 120.035390, 100.147160, 103.747810, 101.861480);
	ctx.bezierCurveTo(75.939907, 101.871480, 54.138069, 123.943560, 59.104812, 145.142130);
	ctx.closePath();
	ctx.fill();
	
// #path4
	ctx.beginPath();
	ctx.globalAlpha = 1.0;
	ctx.fillStyle = 'rgb(0, 91, 0)';
	ctx.lineWidth = 0.070004;
	ctx.moveTo(105.424540, 154.154570);
	ctx.bezierCurveTo(106.765470, 146.365130, 115.582600, 137.221780, 115.904110, 136.024900);
	ctx.bezierCurveTo(105.749160, 129.171850, 110.224740, 117.494650, 115.275340, 113.808200);
	ctx.bezierCurveTo(115.065750, 113.579750, 114.856160, 112.551350, 114.646570, 111.502690);
	ctx.bezierCurveTo(108.858210, 109.635150, 117.942660, 106.176390, 115.484930, 110.873920);
	ctx.lineTo(116.532890, 113.389020);
	ctx.bezierCurveTo(116.532890, 113.389020, 123.541640, 112.276750, 129.422770, 116.113710);
	ctx.bezierCurveTo(131.611950, 117.541970, 129.151260, 116.091810, 129.422770, 116.323300);
	ctx.lineTo(131.309090, 114.227380);
	ctx.bezierCurveTo(131.281590, 108.909330, 137.728230, 115.114680, 132.147460, 114.960950);
	ctx.lineTo(130.365930, 116.952070);
	ctx.bezierCurveTo(134.497320, 121.258380, 132.928180, 136.128950, 122.296660, 136.863270);
	ctx.bezierCurveTo(122.205160, 144.717160, 126.027220, 146.663860, 125.545320, 153.001820);
	ctx.bezierCurveTo(124.871580, 153.553420, 112.200870, 154.985460, 105.424540, 154.154570);
	ctx.closePath();
	ctx.fill();
	
// #path7-9
	ctx.beginPath();
	ctx.fillStyle = 'rgb(18, 18, 18)';
	ctx.lineWidth = 0.070004;
	ctx.globalAlpha = 1.0;
	ctx.moveTo(123.871720, 128.610080);
	ctx.bezierCurveTo(122.018460, 126.630640, 122.877530, 124.248680, 124.492670, 122.438240);
	ctx.bezierCurveTo(127.742830, 119.746010, 129.543950, 120.801960, 129.806570, 121.067490);
	ctx.bezierCurveTo(130.299880, 121.769820, 131.962780, 123.835840, 128.891880, 127.635910);
	ctx.bezierCurveTo(127.621310, 128.775270, 126.085120, 129.428470, 123.871720, 128.610080);
	ctx.closePath();
	ctx.fill();
	
// #path5
	ctx.beginPath();
	ctx.globalAlpha = 1.0;
	ctx.fillStyle = 'rgb(0, 92, 0)';
	ctx.lineWidth = 0.070004;
	ctx.moveTo(122.401450, 139.587960);
	ctx.bezierCurveTo(128.835640, 143.123510, 133.971740, 149.284260, 133.689800, 151.442600);
	ctx.lineTo(136.596470, 150.647640);
	ctx.bezierCurveTo(132.321250, 143.882570, 127.750530, 138.422610, 122.296660, 136.863270);
	ctx.bezierCurveTo(122.261860, 137.736660, 122.296480, 138.644710, 122.401450, 139.587960);
	ctx.closePath();
	ctx.fill();
	
// #path6
	ctx.beginPath();
	ctx.globalAlpha = 1.0;
	ctx.fillStyle = 'rgb(0, 92, 0)';
	ctx.lineWidth = 0.070004;
	ctx.moveTo(115.222940, 135.448530);
	ctx.bezierCurveTo(109.550660, 137.580220, 104.067590, 140.483280, 100.184750, 149.910340);
	ctx.bezierCurveTo(98.713762, 150.867890, 97.603653, 152.114140, 96.831286, 153.630590);
	ctx.bezierCurveTo(98.721416, 153.789030, 100.164640, 153.988090, 102.542660, 154.102170);
	ctx.lineTo(102.699850, 153.578190);
	ctx.bezierCurveTo(102.833540, 153.416740, 103.058830, 153.459050, 103.436600, 154.176270);
	ctx.lineTo(104.425250, 154.240870);
	ctx.bezierCurveTo(103.783650, 152.458260, 103.358850, 151.308990, 102.437860, 150.643940);
	ctx.bezierCurveTo(105.477280, 145.072940, 109.067680, 140.627170, 114.057090, 138.677570);
	ctx.bezierCurveTo(114.057110, 138.677570, 115.581030, 137.071820, 115.869340, 136.224680);
	ctx.bezierCurveTo(115.950240, 135.987000, 116.049710, 136.142980, 115.222940, 135.448560);
	ctx.closePath();
	ctx.fill();
	
// #path7
	ctx.beginPath();
	ctx.globalAlpha = 1.0;
	ctx.fillStyle = 'rgb(18, 18, 18)';
	ctx.lineWidth = 0.070004;
	ctx.moveTo(118.562870, 127.306890);
	ctx.bezierCurveTo(115.894760, 127.790540, 113.724570, 125.940610, 113.079340, 123.601800);
	ctx.bezierCurveTo(112.579900, 119.411070, 114.566370, 118.417220, 114.931880, 118.340570);
	ctx.bezierCurveTo(115.789490, 118.306970, 118.146960, 117.849380, 119.674400, 122.490270);
	ctx.bezierCurveTo(119.942660, 124.175660, 120.450790, 125.891030, 118.562870, 127.306890);
	ctx.closePath();
	ctx.fill();
	
// #path8
	ctx.beginPath();
	ctx.globalAlpha = 1.0;
	ctx.fillStyle = 'rgb(200, 55, 55)';
	ctx.lineWidth = 0.070004;
	ctx.moveTo(118.000030, 133.195420);
	ctx.bezierCurveTo(118.315140, 133.764000, 118.625850, 133.953370, 119.276110, 134.378320);
	ctx.bezierCurveTo(120.230920, 134.424920, 120.496370, 134.189680, 120.829520, 133.614600);
	ctx.bezierCurveTo(119.783880, 134.260540, 118.903660, 133.638200, 118.000030, 133.195420);
	ctx.closePath();
	ctx.fill();
	
// #path9
	ctx.beginPath();
	ctx.globalAlpha = 1.0;
	ctx.fillStyle = 'rgb(0, 92, 0)';
	ctx.lineWidth = 0.070004;
	ctx.moveTo(81.882485, 151.093570);
	ctx.bezierCurveTo(82.777285, 148.654920, 83.124985, 146.257760, 83.364515, 143.312880);
	ctx.bezierCurveTo(75.287225, 141.469060, 71.388475, 130.725570, 77.139965, 122.638480);
	ctx.bezierCurveTo(76.435495, 121.994870, 75.907115, 121.116490, 75.343005, 120.285750);
	ctx.bezierCurveTo(71.031665, 119.178840, 76.540625, 115.222800, 76.473055, 119.600310);
	ctx.bezierCurveTo(76.886845, 120.387620, 77.283185, 121.180170, 78.177395, 121.823360);
	ctx.bezierCurveTo(80.183255, 120.000750, 85.936005, 118.644290, 91.071105, 120.415430);
	ctx.bezierCurveTo(91.309485, 119.635200, 91.739845, 118.902970, 92.256735, 118.192370);
	ctx.bezierCurveTo(90.701885, 114.001640, 97.802635, 116.647790, 93.294165, 118.859290);
	ctx.bezierCurveTo(93.036815, 119.772070, 92.651285, 120.364370, 92.256735, 120.934140);
	ctx.bezierCurveTo(96.701285, 121.899220, 101.303430, 138.286190, 90.404185, 142.645970);
	ctx.bezierCurveTo(91.992105, 146.365170, 93.764045, 150.023020, 96.184135, 153.464830);
	ctx.bezierCurveTo(91.307955, 153.055790, 86.561525, 152.192610, 81.882485, 151.093570);
	ctx.closePath();
	ctx.fill();
	
// #path10
	ctx.beginPath();
	ctx.globalAlpha = 1.0;
	ctx.fillStyle = 'rgb(0, 92, 0)';
	ctx.lineWidth = 0.070004;
	ctx.moveTo(83.107797, 147.144460);
	ctx.bezierCurveTo(70.636142, 142.704570, 71.042976, 139.605970, 66.913921, 136.050900);
	ctx.bezierCurveTo(63.725821, 135.822740, 61.572668, 130.916060, 61.949102, 129.900450);
	ctx.bezierCurveTo(62.598615, 129.417010, 63.372823, 131.182430, 64.424383, 132.642210);
	ctx.bezierCurveTo(64.152275, 131.260260, 63.080552, 129.300810, 63.928145, 128.727530);
	ctx.bezierCurveTo(64.676797, 128.567100, 65.736513, 132.023200, 65.736513, 132.023200);
	ctx.bezierCurveTo(65.529833, 131.389390, 64.885077, 123.658660, 67.210328, 131.901200);
	ctx.lineTo(67.210328, 131.901200);
	ctx.bezierCurveTo(67.307378, 130.607500, 67.011542, 128.247390, 67.545648, 128.139990);
	ctx.bezierCurveTo(68.231116, 127.745530, 68.508150, 130.890830, 68.988772, 132.271700);
	ctx.bezierCurveTo(69.977643, 130.030950, 70.231676, 130.288650, 70.544909, 130.345060);
	ctx.bezierCurveTo(71.124644, 130.694220, 69.696446, 133.289910, 69.473067, 135.353280);
	ctx.bezierCurveTo(70.977484, 136.985160, 75.115124, 142.408740, 83.290420, 144.424400);
	ctx.closePath();
	ctx.fill();
	
// #path10-8
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 92, 0)';
	ctx.lineWidth = 0.070004;
	ctx.moveTo(92.268519, 147.102480);
	ctx.bezierCurveTo(104.340640, 141.669380, 103.981180, 137.428150, 105.882830, 135.477730);
	ctx.bezierCurveTo(108.465410, 134.704380, 110.554490, 129.920640, 110.260350, 129.020320);
	ctx.bezierCurveTo(109.573900, 128.590940, 108.944860, 130.413150, 108.014700, 131.953120);
	ctx.bezierCurveTo(108.174250, 130.553700, 109.084140, 128.514060, 108.193000, 128.011140);
	ctx.bezierCurveTo(107.433830, 127.911740, 106.656840, 131.442160, 106.656840, 131.442160);
	ctx.bezierCurveTo(106.811590, 130.793720, 106.829620, 123.036170, 105.177990, 131.439160);
	ctx.lineTo(105.177990, 131.439160);
	ctx.bezierCurveTo(104.976760, 130.157530, 105.080890, 127.781240, 104.539860, 127.717340);
	ctx.bezierCurveTo(103.824750, 127.379560, 103.802780, 130.536970, 103.435290, 131.952160);
	ctx.bezierCurveTo(102.268600, 129.798640, 102.036230, 130.076020, 101.728580, 130.157560);
	ctx.bezierCurveTo(101.178950, 130.552420, 102.812210, 133.024220, 103.201590, 135.062790);
	ctx.bezierCurveTo(101.833950, 136.810890, 99.259594, 142.106460, 91.273897, 144.776100);
	ctx.closePath();
	ctx.fill();
	
// #path11
	ctx.beginPath();
	ctx.globalAlpha = 1.0;
	ctx.fillStyle = 'rgb(0, 0, 128)';
	ctx.lineWidth = 0.070004;
	ctx.moveTo(48.625236, 178.257590);
	ctx.bezierCurveTo(53.739396, 169.942700, 57.976086, 162.317250, 70.632346, 148.076420);
	ctx.lineTo(71.261120, 148.390800);
	ctx.bezierCurveTo(63.720341, 156.856220, 56.342919, 166.383440, 49.358806, 178.467190);
	ctx.closePath();
	ctx.fill();
	
// #path11-3
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 128)';
	ctx.lineWidth = 0.061602;
	ctx.moveTo(100.995610, 183.351890);
	ctx.bezierCurveTo(100.693580, 175.763240, 100.040670, 169.024570, 102.754550, 154.129980);
	ctx.lineTo(103.447610, 154.016670);
	ctx.bezierCurveTo(101.820000, 162.879130, 100.907840, 172.313150, 101.718310, 183.123300);
	ctx.closePath();
	ctx.fill();
	
// #path11-3-1
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 128)';
	ctx.lineWidth = 0.061271;
	ctx.moveTo(102.776000, 183.167080);
	ctx.bezierCurveTo(102.473970, 175.659760, 101.821060, 168.993310, 104.534940, 154.258350);
	ctx.lineTo(105.228000, 154.146250);
	ctx.bezierCurveTo(103.600390, 162.913730, 102.688230, 172.246650, 103.498700, 182.940940);
	ctx.closePath();
	ctx.fill();
	
// #path11-8
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 128)';
	ctx.lineWidth = 0.070145;
	ctx.moveTo(46.412068, 177.890470);
	ctx.bezierCurveTo(51.509486, 169.514760, 55.732307, 161.833520, 68.347135, 147.488520);
	ctx.lineTo(68.973851, 147.805210);
	ctx.bezierCurveTo(61.457757, 156.332540, 54.104486, 165.929450, 47.143237, 178.101600);
	ctx.closePath();
	ctx.fill();
	
// #path11-6
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 128)';
	ctx.lineWidth = 0.059603;
	ctx.moveTo(156.104180, 177.407900);
	ctx.bezierCurveTo(152.031800, 169.838480, 148.658140, 162.896690, 138.580000, 149.932630);
	ctx.lineTo(138.079310, 150.218820);
	ctx.bezierCurveTo(144.084010, 157.925270, 149.958610, 166.598330, 155.520040, 177.598710);
	ctx.closePath();
	ctx.fill();
	
// #path11-6-2
	ctx.beginPath();
	ctx.fillStyle = 'rgb(0, 0, 128)';
	ctx.lineWidth = 0.059603;
	ctx.moveTo(158.137200, 176.772990);
	ctx.bezierCurveTo(154.064820, 169.203570, 150.691160, 162.261780, 140.613020, 149.297720);
	ctx.lineTo(140.112330, 149.583910);
	ctx.bezierCurveTo(146.117030, 157.290360, 151.991630, 165.963420, 157.553060, 176.963800);
	ctx.closePath();
	ctx.fill();
	
// #path7-6
	ctx.beginPath();
	ctx.fillStyle = 'rgb(18, 18, 18)';
	ctx.lineWidth = 0.072839;
	ctx.moveTo(83.182731, 134.066770);
	ctx.bezierCurveTo(80.172396, 134.530870, 77.723850, 132.755740, 76.995859, 130.511500);
	ctx.bezierCurveTo(76.432360, 126.490220, 78.673621, 125.536560, 79.086013, 125.463000);
	ctx.bezierCurveTo(80.050092, 125.434300, 82.326554, 125.378600, 84.436830, 129.444910);
	ctx.bezierCurveTo(84.739498, 131.062160, 85.312803, 132.708160, 83.182731, 134.066770);
	ctx.closePath();
	ctx.fill();
	
// #path7-9-9
	ctx.beginPath();
	ctx.fillStyle = 'rgb(18, 18, 18)';
	ctx.lineWidth = 0.065755;
	ctx.moveTo(87.262230, 133.016690);
	ctx.bezierCurveTo(85.696700, 130.949270, 86.422394, 128.461440, 87.786774, 126.570530);
	ctx.bezierCurveTo(90.532327, 123.758630, 92.053812, 124.861520, 92.275659, 125.138850);
	ctx.bezierCurveTo(92.692380, 125.800790, 94.764021, 127.934980, 92.169896, 131.925120);
	ctx.bezierCurveTo(91.096590, 133.115130, 89.131986, 133.871460, 87.262230, 133.016690);
	ctx.closePath();
	ctx.fill();
	
// #path8-3
	ctx.beginPath();
	ctx.fillStyle = 'rgb(255, 10, 10)';
	ctx.lineWidth = 0.070004;
	ctx.moveTo(84.697704, 137.139940);
	ctx.bezierCurveTo(85.012814, 137.708520, 85.323524, 138.064620, 86.084937, 138.267260);
	ctx.bezierCurveTo(86.873018, 138.128610, 87.045840, 137.763690, 87.378990, 137.188610);
	ctx.bezierCurveTo(86.333350, 137.834550, 85.601334, 137.582720, 84.697704, 137.139910);
	ctx.closePath();
	ctx.fill();


  }