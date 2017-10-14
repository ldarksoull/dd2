(function() {
    const $toggleMnuBtn = document.querySelector('.toggle-menu-btn');
    const $menu = document.querySelector('.main-header__top');
    const $header = document.querySelector('.main-header');
    const $btnIcon = document.querySelector('.toggle-menu-btn i');

    $toggleMnuBtn.addEventListener('click', () => {
        if ($menu.getAttribute('class') === 'main-header__top') {
            $menu.setAttribute('class', 'main-header__top opened');
            $header.style.height = 300 + 'px';
            $btnIcon.setAttribute('class', 'fa fa-times');
        } else {
            $menu.classList = 'main-header__top';
            $header.style.height = 70 + 'px';
            $btnIcon.setAttribute('class', 'fa fa-bars');
        }
    });

    /* TODO: WORK WITH BLOCKS */
    var blocks = document.getElementsByClassName('content__items__information');
    var button = document.getElementsByClassName('content__items__button');
    for(var i =0; i < blocks.length; i++){
        blocks[i].id = 'content ' + i;
        blocks[i].classList.add('show');
        button[i].id = i;
    }

    window.onclick = function(e) {
        var elem = e.target;
        blocks[elem.id].classList.toggle('show');
        if(!blocks[elem.id].classList.contains('show') && elem.classList.contains('content__items__button')){
            elem.innerHTML = 'скрыть';
        }  else if(blocks[elem.id].classList.contains('show') && elem.classList.contains('content__items__button')){
            elem.innerHTML = 'подробнее';
        }
    }
})();    