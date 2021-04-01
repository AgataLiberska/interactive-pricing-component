const pricingConfig = {
    views: [
        {
            views: "10k",
            aria: "10 thousand PageViews",
            price: 8,
        },
        {
            views: "50K",
            aria: "50 thousand PageViews",
            price: 12,
        },
        {
            views: "100K",
            aria: "100 thousand PageViews",
            price: 16,
        },
        {
            views: "500k",
            aria: "500 thousand PageViews",
            price: 24,
        },
        {
            views: "1m",
            aria: "1 million PageViews",
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
    pageviews.textContent = `${pricingConfig.views[index].views}`;
    pageviews.setAttribute("aria-label", `${pricingConfig.views[index].aria}`)
}

function updatePrice(index) {
    if (form.billing.value === "yearly") {
        price.textContent = `${(pricingConfig.views[index].price * (1 - pricingConfig.discount)).toFixed(2)}`;
        price.setAttribute("aria-label", `${pricingConfig.views[index].price * (1 - pricingConfig.discount)} dollars per month`)
    } else {
        price.textContent = `${pricingConfig.views[index].price.toFixed(2)}`;
        price.setAttribute("aria-label", `${pricingConfig.views[index].price} dollars per month`)
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

