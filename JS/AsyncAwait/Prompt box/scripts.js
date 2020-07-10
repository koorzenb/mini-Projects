function wait(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  popup = null;
}
  
  function ask(options) {
    return new Promise(async function(resolve) {
      // First we need to create a popup with all the fields in it
      const popup = document.createElement('form');
      popup.classList.add('popup');
      popup.insertAdjacentHTML(
        'afterbegin',
        `<fieldset>
          <label>${options.title}</label>
          <input type="text" name="input"/>
          <button type="submit">Submit</button>
        </fieldset>`
      );

      popup.addEventListener("submit", (e) => {
          e.preventDefault;
          resolve(e.target.input.value);          
      }, {once: true});
  
      // check if they want a cancel button
      if (options.cancel) {
        const skipButton = document.createElement('button');
        skipButton.type = 'button';
        skipButton.textContent = 'Cancel'; 
        popup.firstElementChild.appendChild(skipButton);
        destroyPopup(popup)
      }
      
      document.body.appendChild(popup);
  
      await wait(50);
      popup.classList.add('open');
    });
  }


  // got to 31:40 

  async function askQuestion(e) {
    const button = e.currentTarget;
    const cancel = button.hasAttribute('data-cancel');
      
    const answer = await ask({ 
      title: button.dataset.question,
      cancel
    });
    
  }

  const buttons = document.querySelectorAll('[data-question]');
  buttons.forEach(button => {button.addEventListener('click', askQuestion)});
  
  