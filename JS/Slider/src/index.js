function slider(slider){
    if (!(slider instanceof Element)) {
        throw new Error ("No slider sent");
    }
}

const mySlider = slider(document.querySelector('.slider'));
const dogSlider = slider(document.querySelector('.dog-slider'));