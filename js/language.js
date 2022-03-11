'use strict';

let languagesDiv = document.createElement('div');
languagesDiv.id = 'languageDiv';
languagesDiv.innerHTML = `
    <div class="language-case">
        <div id="langEn" class="language" onclick="setLanguageClick('en');"></div>
        <div class="language-name">English</div>
    </div>
    <div class="language-case">
        <div id="langRu" class="language" onclick="setLanguageClick('ru');"></div>
        <div class="language-name">Русский</div>
    </div>
    <div class="language-case">
        <div id="langDe" class="language" onclick="setLanguageClick('de');"></div>
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