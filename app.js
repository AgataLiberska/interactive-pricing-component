const slider = document.getElementById('pageviews');

function fillSlider() {
    const sliderProgress = 'hsl(174, 77%, 80%)';
    const sliderBackground = 'hsl(224, 65%, 95%)';

    const breakpoint = `${Number(slider.value) * 25}%`;

    slider.style.backgroundImage = 
        `linear-gradient(90deg, 
        ${sliderProgress} ${breakpoint}, 
        ${sliderBackground} ${breakpoint})`;
}

fillSlider();

slider.addEventListener('change', () => {
	fillSlider();
});
