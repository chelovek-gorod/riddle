'use strict';

let AgreementText;
let AgreementButton;

switch(language) {
    case 'de' : AgreementText = `
        <center><b>ZUSTIMMUNG</b></center><br>
        Alle Sonden sind geschützt!
        `;
        AgreementButton = `<button id="acceptButton" onclick="acceptClick();">annehmen</button>`;
        break;

    case 'ru' : AgreementText = `
        <center><b>СОГЛАШЕНИЕ</b></center><br>
        Все прова защищены!
        `;
        AgreementButton = `<button id="acceptButton" onclick="acceptClick();">принять</button>`;
        break;

    default : AgreementText = `
        <center><b>AGREEMENT</b></center><br>
        All probes are protected!
        `;
        AgreementButton = `<button id="acceptButton" onclick="acceptClick();">accapt</button>`;
        break;
}

let agreementDiv = document.createElement('div');
agreementDiv.id = 'agreementDiv';
agreementDiv.innerHTML = AgreementText;

SHELL.append(LanguagesDiv);

function setLanguageClick(lang) {
    language = lang;
    localStorage.setItem('lang', lang);
    
    shellOut(LanguagesDiv, testUserAgreementAccept);
    setTimeout(() => LanguagesDiv.remove(), 300);
}

shellIn(LanguagesDiv);