'use strict';

localStorage.clear();

const SHELL = document.getElementById('shall');

let language;
let userAgreementAcceptIs;

function shellIn(elementToShow, callBack) {
    SHELL.style.display = 'flex';
    setTimeout(() => {
        SHELL.style.opacity = 1;
        elementToShow.style.transform = 'scale(1)';
        if(callBack) callBack();
    }, 30);
}

function shellOut(elementToHide, callBack) {
    if(elementToHide) elementToHide.style.transform = 'scale(0)';
    SHELL.style.opacity = 0;
    setTimeout(() => {
        SHELL.style.display = 'none';
        if(callBack) callBack();
    }, 300);
}

if (localStorage.getItem('lang') && (
    localStorage.getItem('lang') === 'en' ||
    localStorage.getItem('lang') === 'ru' ||
    localStorage.getItem('lang') === 'de' )) {

    // LANGUAGE IS SET CORRECTLY
    language = localStorage.getItem('lang');
    document.documentElement.setAttribute('lang', language);
    testUserAgreementAccept();

} else {

    // NEED TO SET LANGUAGE
    let scriptReady = document.createElement('script');
    scriptReady.src='js/language.js';
    document.body.append(scriptReady);

}

function testUserAgreementAccept() {
    if (localStorage.getItem('agreement') && localStorage.getItem('agreement') === 'true') {
    
        // AGREEMENT IS ACCEPTED
        userAgreementAcceptIs = true;
    
    } else {
    
        // NEED TO SET LANGUAGE
        let scriptAgreement = document.createElement('script');
        scriptAgreement.src='js/agreement.js';
        document.body.append(scriptAgreement);
    
    }
}

function testFullScreen() {
    console.log('testFullScreen()');
}