window.onloadCallback = function () {
    window.alert("recaptcha loaded!");
}

function googleRecaptcha(dotNetObject, selector, sitekeyValue) {
   
    
};

function getResponse(response) {
    return grecaptcha.getResponse(response);
} 

