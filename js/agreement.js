'use strict';

/*
IF AGREEMENT CHANGED
in main.js edit const CurrentAgreement version
*/

let AgreementTitle;
let AgreementText;
let AgreementButton;

switch(language) {
    case 'de' : AgreementTitle = `ZUSTIMMUNG`;
        AgreementText = `
            Alle Sonden sind geschützt!

            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word
            in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        `;
        AgreementButton = `ANNEHMEN`;
        break;

    case 'ru' : AgreementTitle = `СОГЛАШЕНИЕ`;
        AgreementText = `
            Все прова защищены!

            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word
            in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        `;
        AgreementButton = `ПРИНЯТЬ`;
        break;

    default : AgreementTitle = `AGREEMENT`;
        AgreementText = `
            All rights reserved!

            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word
            in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        `;
        AgreementButton = `ACCEPT`;
        break;
}

let agreementDiv = document.createElement('div');
agreementDiv.id = 'agreementDiv';
agreementDiv.innerHTML = `
    <div class="agreement-title">${AgreementTitle}</div>
    <div class="agreement-text">${AgreementText}</div>
    <button class="agreement-button" onclick="acceptClick();">${AgreementButton}</button>
    `;

SHELL.append(agreementDiv);

function acceptClick() {
    userAgreementAccept = CurrentAgreement;
    localStorage.setItem('agreement', CurrentAgreement);
    
    shellOut(agreementDiv, requestFullScreen);
    setTimeout(() => agreementDiv.remove(), 300);
}

shellIn(agreementDiv);