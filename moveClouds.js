const cloudContainer = document.getElementById('cloud-container');

cloudContainer.addEventListener('mouseover', () => {
    const clouds = document.getElementsByClassName('move');
    for (let i = 0; i < clouds.length; i++) {
        clouds[i].style.transform = 'translateX(-100px)';
        clouds[i].style.opacity = 0;
    }
});

cloudContainer.addEventListener('mouseout', () => {
    const clouds = document.getElementsByClassName('move');
    for (let i = 0; i < clouds.length; i++) {
        clouds[i].style.transform = 'translateX(-100px)';
        clouds[i].style.opacity = 0;
    }
});


// const house = document.getElementById('house');

// house.addEventListener('click', function() {
//     const currentOpacity = parseFloat(house.style.opacity);
//     const clickSound = new Audio('assets/light out.mp3');
//     clickSound.play();    
//     if (currentOpacity === 1) {
//         house.style.opacity = '0';
//     } else {
//         house.style.opacity = '1';
//     }
// });
