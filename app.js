const pricing = {
    views: [
        {
            views: "10k",
            aria: "10 thousand page views",
            price: 8,
        },
        {
            views: "50K",
            aria: "50 thousand page views",
            price: 12,
        },
        {
            views: "100K",
            aria: "100 thousand page views",
            price: 16,
        },
        {
            views: "500k",
            aria: "500 thousand page views",
            price: 24,
        },
        {
            views: "1m",
            aria: "1 million page views",
            price: 36,
        }   
    ],
    discount: 0.25,
}

const slider = document.getElementById('pageviews-slider');
const form = document.querySelector('.js-form');
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
    pageviews.textContent = `${pricing.views[index].views}`;
    pageviews.setAttribute("aria-label", `${pricing.views[index].aria}`)
}

function updatePrice(index) {
    if (form.billing.value === "yearly") {
        price.textContent = `${(pricing.views[index].price * (1 - pricing.discount)).toFixed(2)}`;
    } else {
        price.textContent = `${pricing.views[index].price.toFixed(2)}`;
    }
    
}

fillSlider();

slider.addEventListener('change', (e) => {
	fillSlider();
});

form.addEventListener('change', e => {
    switch(e.target.name) {
        case 'pageviews' :
            updateViews(e.target.value);
            updatePrice(e.target.value);
            break;
        case 'billing' :
            updatePrice(form.pageviews.value);
            break;
    }
})

