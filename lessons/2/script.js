document.addEventListener('DOMContentLoaded', function() {
    var navigation = document.querySelector('.tabs__navigation')
    var navigationLinks = document.getElementsByClassName('tabs__navigation-link');
    var contents = document.getElementsByClassName('tabs__content');

    navigation.addEventListener('click', function(e) {
        if (e.target.tagName !== 'LI') {
            return;
        }

        for (var i = 0; i < navigationLinks.length; ++i) {
            navigationLinks[i].classList.remove('tabs__navigation-link_active');
        }

        e.target.classList.add('tabs__navigation-link_active');

        for (var i = 0; i < contents.length; ++i) {
            contents[i].classList.remove('tabs__content_active')
        }

        var index = Array.from(navigationLinks).indexOf(e.target);

        contents[index].classList.add('tabs__content_active');
    })
});
