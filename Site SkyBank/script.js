(() => {
    const header = document.querySelector("#header-menu-bar");
    const banner = document.querySelector("#banner");

    const ElementsToOpacity = [
        {
            Division: document.querySelector("#main"),
            childDivision: document.querySelectorAll(".ElementsCardsOpacity")
        },
        {
            Division: document.querySelector(".division-webSite-skybank"),
            childDivision: document.querySelectorAll(".ElementsWebsiteSkyBankOpacity")
        }, 
        {
            Division: document.querySelector(".division-ajuda-us"),
            childDivision: document.querySelectorAll(".ElementsAtendimentoOpacity")
        }, 
        {
            Division: document.querySelector(".division-about"),
            childDivision: document.querySelectorAll(".ElementAboutOpacity")
        }
    ];

    //Animações do header e a animação de opacidade em elementos node list.
    function AddAnimateScroll(GroupElements) {
        let ElementsOpacityDelay = 200;

        GroupElements.forEach(element => setTimeout(() => 
            element.classList.add("ElementToUpOpacity"), ElementsOpacityDelay += 100));
    }

    window.addEventListener("scroll", () => {
        const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
        const BannerSize = banner.clientHeight - (banner.clientHeight / 3);

        window.pageYOffset > BannerSize
            ? header.classList.add("header-menu-bar-sticky")
            : header.classList.remove("header-menu-bar-sticky");

        ElementsToOpacity.forEach(({ Division, childDivision }) => {
            if(windowTop > Division.offsetTop) AddAnimateScroll(childDivision);
        })
    })

    //Ativa e desativa o menu e algumas coisa a mais...
    //O uso do touchstart é para reduzir o delay em dispositivos movéis.
    function toggleMenu(event) {
        if(event.type === 'touchstart') event.preventDefault();

        const body = document.getElementsByTagName('body')[0];
        body.classList.toggle('active-mobile');

        const links = document.querySelectorAll(".nav-mobile");
        links.forEach(element => 
            element.addEventListener("click", toggleMenu));

        const nav = document.querySelector("#nav");
        nav.classList.toggle('active-nav');

        const active = nav.classList.contains('active-nav');

        const logoMobile = document.querySelector('.nav-logo-mobile');
        logoMobile.addEventListener('click', () => {
            if(active) toggleMenu();
        })

        event.currentTarget.setAttribute('aria-expanded', active);
        active 
            ? event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
            : event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
    
    const btn_mobile = document.querySelector('.btn-mobile');

    btn_mobile.addEventListener('click', toggleMenu);
    btn_mobile.addEventListener('touchstart', toggleMenu);
})();