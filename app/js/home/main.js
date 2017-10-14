
    (function() {
        const $toggleMnuBtn = document.querySelector('.toggleButton');
        const $menu = document.querySelector('.header__navigation');
        const $header = document.querySelector('.header');
        const $content = document.querySelector('.header__content');
        const $btnIcon = document.querySelector('.toggleButton i');

        $toggleMnuBtn.addEventListener('click', () => {
            if ($menu.getAttribute('class') === 'header__navigation') {
                $menu.setAttribute('class', 'header__navigation opened');
                $header.style.height = 1000 + 'px';
                $content.style.marginTop = 15 + 'rem';
                $btnIcon.setAttribute('class', 'fa fa-times');
            } else {
                $menu.classList = 'header__navigation';
                $header.style.height = 700 + 'px';
                $content.style.marginTop = 0;
                $btnIcon.setAttribute('class', 'fa fa-bars');
            }
        });
    })();
