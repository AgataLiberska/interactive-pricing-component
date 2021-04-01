const pricing = {
    views: [
        {
            views: "10k",
            price: 8,
        },
        {
            views: "50K",
            price: 12,
        },
        {
            views: "100K",
            price: 16,
        },
        {
            views: "500k",
            price: 24,
        },
        {
            views: "1m",
            price: 36
        }   
    ],
    discount: 0.25,
}

const slider = document.getElementById('pageviews-slider');
const pageviews = document.querySelector('.js-views');
const price = document.querySelector('.js-price');

function fillSlider() {
    const sliderProgress = 'hsl(174, 77%, 80%)';
    const sliderBackground = 'hsl(224, 65%, 95%)';

    const breakpoint = `${Number(slider.value) * 25}%`;

    slider.style.backgroundImage = 
        `linear-gradient(90deg, 
        ${sliderProgress} ${breakpoint}, 
        ${sliderBackground} ${breakpoint})`;
}

function updateViews(index) {
    pageviews.innerHTML = pricing.views[index].views;
}

fillSlider();

slider.addEventListener('change', (e) => {
	fillSlider();
    updateViews(e.target.value);
    //updatePrice(e.target.value);
});
