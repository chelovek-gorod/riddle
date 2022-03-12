'use strict';

////////////////////////////////////
//
//    MAIN
//
////////////////

/***************
    AGREEMENT V
*/

const CurrentAgreement = 'agreement-0';

localStorage.clear();

/***************
    FREE IMAGES STOCK
*/

// https://unsplash.com/
// https://www.pexels.com/
// https://www.gettyimages.com/
// https://pixabay.com/
// 

/***************
    INTERFACE
*/

const SHELL = document.getElementById('shall');

const MENU = document.getElementById('menu');
const DONAT = document.getElementById('donat');

const BAG_BUTTON = document.getElementById('bagButton');

let language;
let userAgreementAccept;

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

// menu elements onclick

function logoClick() {
    console.log('logoClick()');
}

function menuClick() {
    console.log('menuClick()');
}

function donatClick() {
    console.log('donatClick()');
}

/***************
    LANGUAGE
*/

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

/***************
    AGREEMENT
*/

function testUserAgreementAccept() {
    if (localStorage.getItem('agreement') && localStorage.getItem('agreement') === CurrentAgreement) {
    
        // AGREEMENT IS ACCEPTED
        userAgreementAccept = CurrentAgreement;
        requestFullScreen();
    
    } else {
    
        // NEED TO SET LANGUAGE
        let scriptAgreement = document.createElement('script');
        scriptAgreement.src='js/agreement.js';
        document.body.append(scriptAgreement);
    
    }
}

/***************
    FULL SCREEN
*/

const FullScreenDiv = document.createElement('div');
FullScreenDiv.id = 'fullScreenDiv';

let FullScreenDescription;
let FullScreenButton;

function requestFullScreen() {

    switch(language) {
        case 'de' : FullScreenDescription = `Die App wird weiterhin im Vollbildmodus ausgeführt`;
            FullScreenButton = `ANNEHMEN`;
            break;
    
        case 'ru' : FullScreenDescription = `Приложение продолжит работу в полноэкранном режиме`;
            FullScreenButton = `ПРИНЯТЬ`;
            break;
    
        default : FullScreenDescription = `The App will continue to run in full screen mode`;
            FullScreenButton = `ACCEPT`;
            break;
    }

    FullScreenDiv.innerHTML = `<div class="full-screen-description">${FullScreenDescription}</div>
        <button class="full-screen-button" onclick="setFullScreen();">${FullScreenButton}</button>`;

    SHELL.append(FullScreenDiv);
    shellIn(FullScreenDiv);
}

addEventListener('fullscreenchange', ()=> {
    if (!document.fullscreenElement) {
        requestFullScreen();
        DONAT.style.bottom = '-66px';
        MENU.style.top = '-66px';
        BAG_BUTTON.style.right = '-86px';
    } else {
        DONAT.style.bottom = '0';
        MENU.style.top = '0';
        BAG_BUTTON.style.right = '10px';
    }
});

function setFullScreen() {
    document.documentElement.requestFullscreen();
    shellOut(FullScreenDiv, startGame);
    setTimeout(() => FullScreenDiv.remove(), 300);
}

/***************
    GAME START
*/

function startGame() {

    let scriptJson = document.createElement('script');
    scriptJson.src='js/json.js';
    document.body.append(scriptJson);

    let scriptRooms = document.createElement('script');
    scriptRooms.src='js/rooms.js';
    document.body.append(scriptRooms);

    let scriptCanvas = document.createElement('script');
    scriptCanvas.src='js/canvas.js';
    document.body.append(scriptCanvas);
}