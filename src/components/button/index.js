'use strict';

(function(window, document, undefined){
    // Import the SCSS and assign to variable as an object mapping of the class names.
    var styles = require('./Button.scss');

    // Create a new element and add some content
    var button = document.createElement('button'); 
    var buttonContent = document.createTextNode('Do not press');
    button.appendChild(buttonContent);

    // Add classes to the element
    button.classList.add(styles.primary);
    button.classList.add(styles['primary--danger']);

    // Enable Hot Module Reloading (optional)
    if(module.hot) {
        module.hot.accept();

        module.hot.dispose(function() {
            document.body.removeChild(button);
        });
    }

    // Append the element to the document
    document.body.appendChild(button);
})(window, document);