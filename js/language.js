'use strict';

////////////////////////////////////
//
//    LANGUAGE
//
////////////////

let languagesDiv = document.createElement('div');
languagesDiv.id = 'languageDiv';
languagesDiv.innerHTML = `
    <div class="language-case">
        <img class="language" src="./src/images/site-menu/lang-en.png" onclick="setLanguageClick('en');">
        <div class="language-name">English</div>
    </div>
    <div class="language-case">
        <img class="language" src="./src/images/site-menu/lang-ru.png" onclick="setLanguageClick('ru');">
        <div class="language-name">Русский</div>
    </div>
    <div class="language-case">
        <img class="language" src="./src/images/site-menu/lang-de.png" onclick="setLanguageClick('de');">
        <div class="language-name">Deutsch</div>
    </div>`;

SHELL.append(languagesDiv);

function setLanguageClick(lang) {
    language = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', language);
    shellOut(languagesDiv, testUserAgreementAccept);
    setTimeout(() => languagesDiv.remove(), 300);
}

shellIn(languagesDiv);