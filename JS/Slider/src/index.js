function Slider(){
    console.log('Check at end of training if "Slider" can effectively be renamed to something else');
    up to 21 - What is the property you use to select next sibling? Write syntax
    if(!(slider instanceof Element)) {
        throw new Error('No slider passed in') 
    }

    let current;
    let prevent;
    let next;

    const slides = slider.querySelector('.sliders');
    const prevButton = document.querySelector('.goToPrev');
    const nextButton = document.querySelector('.goToNext');
    
    function startSlider() {
        current = slider.querySelector('.current') || slides.firstElementChild;
        prev = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;
    }

    startSlider();
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));



