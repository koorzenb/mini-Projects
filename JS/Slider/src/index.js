function Slider(slider){
    if(!(slider instanceof Element)) {
        throw new Error('No slider passed in')
    }

    let current;
    let prevent;
    let next;

    const slides = slider.querySelector('.slides');
    const prevButton = document.querySelector('.goToPrev');
    const nextButton = document.querySelector('.goToNext');
    
    function startSlider() {
        console.log();
        
        current = slider.querySelector('.current') || slides.firstElementChild;
        prev = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;
        console.log({current, prev, next});
        
    }

    function applyClasses() {
        current.classList.add("current");
        prev.classList.add("prev");
        next.classList.add("next");
    }

    startSlider();
    applyClasses();
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));

// console.log('Check at end of training if "Slider" can effectively be renamed to something else');
// console.log('What is the property you use to select next sibling? Write syntax');


