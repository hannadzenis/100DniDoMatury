window.addEventListener('DOMContentLoaded', () => {

    //translation
    const selects = document.querySelectorAll('.change-lang');
    const allLang = ['ru', 'ua'];
    const desktopSelect = selects[0];
    const mobileSelect = selects[1];
    const header = document.querySelector('.header__nav');
    // console.log(mobileSelect)

    function checkSelect(s) {
        if (header.offsetParent === null) {
            s = mobileSelect;
            return s;
        } else {
            s = desktopSelect;
            return s;
        }
    }
    const select = checkSelect(mobileSelect) && checkSelect(desktopSelect);

    select.addEventListener('change', (e) => {
        e.preventDefault()
        changeURLLanguage()

    });

    //changing the url to one with chosen language hash
    function changeURLLanguage() {
        let lang = select.value;
        location.href = window.location.pathname + '#' + lang;
        location.reload();
    }
    function changeLanguage() {
        let hash = window.location.hash;
        hash = hash.substr(1);

        if (!allLang.includes(hash)) {
            location.href = window.location.pathname + '#ru';
            location.reload();
        }

        select.value = hash;

        for (let key in langArr) {
            const word = document.querySelector('.lng-' + key)
            if (word.id === 'input') {
                word.placeholder = langArr[key][hash];
            } else if (word.id === 'label') {
                word.dataset.value = langArr[key][hash];
            } else {
                word.innerText = langArr[key][hash];
            }
        }
    }

    changeLanguage()
})