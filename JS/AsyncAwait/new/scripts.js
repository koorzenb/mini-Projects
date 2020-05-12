function ask(options) {
    return new Promise(resolve => {
        const popup = document.createElement('form');
        popup.classList.add("popup");
        popup.insertAdjacentHTML('afterbegin', `
            <fieldset>
                <label>${options.title}</label>
            </fieldset>    
        `);
        console.log(popup);
    })
}

got ot 7:33

