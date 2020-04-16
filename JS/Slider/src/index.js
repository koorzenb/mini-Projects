function Slider(){
    console.log('Check at end of training if "Slider" can effectively be renamed to something else');

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
        console.log(current); 
    }

    startSlider();
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));



