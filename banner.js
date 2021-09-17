(() => {
    const banner_images = document.querySelectorAll('[data-js="banner-images"');
    const buttons_banner = document.querySelectorAll('.button-banner');
    const lastIndex = buttons_banner.length - 1.
    let currentIndex = 0;
    let BannerChangeInterval;

    //Caso tenha mais botões é só mudar para remove com o ForEach com um array de buttons!
    /*Se houver mais de 2 botões, podemos criar um array de botões e usar um ForEach para
    adicionar um event click em cada um e depois chamar a função BannerChange passando o 
    parametro index que vai ser tanto para o banner quanto para marcar o button.*/

    function MarkButtonBanner(currentIndex) {
        buttons_banner.forEach(button => button.classList.remove('active'));
        buttons_banner[currentIndex].classList.add('active');
    }

    //Essa func reatribui o intervalo para mudar a imagem do banner.
    function CreateIntervalToChangeTheBanner() {
        BannerChangeInterval = setInterval(BannerChange, 7000);
    }
    CreateIntervalToChangeTheBanner();

    //Muda a imagem do banner usando um index e um array de divs!
    /*O clear interval é para parar o andamento do intervalo e o 
    CreateIntervalToChangeTheBanner é para inicializar o intervalo novamente.
    Obs: isso é para resolver uns problemas ao usuário mudar o banner.*/
    function BannerChange(button, index) {
        clearInterval(BannerChangeInterval);

        button === undefined
            ? currentIndex = currentIndex === lastIndex ? 0 : ++currentIndex
            : currentIndex = index;

        MarkButtonBanner(currentIndex);

        const MoveImage = `translateX(${-currentIndex * 100}%)`;
        
        banner_images.forEach(element => element.style.transform = MoveImage);
        
        CreateIntervalToChangeTheBanner();
    }

    buttons_banner.forEach((button, index) => 
        button.addEventListener('click', () => BannerChange(button, index)));
})();
