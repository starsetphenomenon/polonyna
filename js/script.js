$(document).ready(function () {
    $("#gallery__items").lightSlider({
        item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 25,
        loop: true,
        addClass: 'gallery__items',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease-in', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////

        speed: 300, //ms'
        auto: true,
        slideEndAnimation: true,
        pause: 4000,

        keyPress: true,
        controls: true,
        prevHtml: '',
        nextHtml: '',

        rtl: false,
        adaptiveHeight: false,

        vertical: true,
        verticalHeight: 650,
        vThumbWidth: 100,

        thumbItem: 12,
        pager: true,
        gallery: true,
        galleryMargin: 0,
        thumbMargin: 15,
        currentPagerPosition: 'middle',
        pauseOnHover: true,
        enableTouch: true,
        enableDrag: true,
        freeMove: true,
        swipeThreshold: 40,

        responsive: [{
                breakpoint: 1200,
                settings: {
                    verticalHeight: 650,
                    vThumbWidth: 80,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    verticalHeight: 450,
                    vThumbWidth: 60,
                    thumbItem: 8,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    verticalHeight: 450,
                    vThumbWidth: 60,
                    thumbItem: 8,
                    galleryMargin: -10,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    verticalHeight: 450,
                    vThumbWidth: 60,
                    thumbItem: 8,
                    gallery: false,
                }
            }
        ],

        onBeforeStart: function (el) {},
        onSliderLoad: function (el) {},
        onBeforeSlide: function (el) {},
        onAfterSlide: function (el) {},
        onBeforeNextSlide: function (el) {},
        onBeforePrevSlide: function (el) {}
    });
    if (galleryPage != null) {
        $('#gallery__page').slick({
            lazyLoad: 'ondemand',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            cssEase: 'ease-in-out',
            focusOnSelect: true,
            prevArrow: $('.slickPrev'),
            nextArrow: $('.slickNext')
        });
    }
});


const galleryItems = document.querySelectorAll('.gallery__items>li');

galleryItems.forEach(elem => {
    elem.setAttribute('data-thumb', elem.firstChild.src);
    elem.setAttribute('data-src', elem.firstChild.src);
});

// GALLERY END //

// TABS //
const seasonTabs = document.getElementById('seasons__tabs');
const tabs = document.querySelectorAll('.tab__item');
const seasons = document.querySelectorAll('.season');
const allSeasons = document.getElementById('seasons');
const galleryPage = document.getElementById('gallery__page');
const winterSeason = document.querySelector('.winter');
const springSeason = document.querySelector('.spring');
const summerSeason = document.querySelector('.summer');
const fallSeason = document.querySelector('.fall');

const onSeasonTab = function (e) {
    if (e.target.classList.contains('tab__item')) {
        let id = e.target.getAttribute('id');
        tabs.forEach(elem => elem.classList.remove('active'));
        e.target.classList.add('active');
        seasons.forEach(elem => elem.classList.remove('active'));
        document.querySelector(`.${id}`).classList.add('active');
    }
    if (winterSeason.classList.contains('active')) {
        allSeasons.style.background = `center repeat url('img/bg/winterBG.png')`;
        allSeasons.style.backgroundSize = '80%';
    }
    if (springSeason.classList.contains('active')) {
        allSeasons.style.background = `center/contain no-repeat url('img/bg/springBG.png')`;
    }
    if (summerSeason.classList.contains('active')) {
        allSeasons.style.background = `top/contain space url('img/bg/summerBG.png')`;
        allSeasons.style.backgroundSize = '50%';
    }
    if (fallSeason.classList.contains('active')) {
        allSeasons.style.background = `center/contain space url('img/bg/fallBG.png')`;
    }
};

if (seasonTabs != null) {
    seasonTabs.addEventListener('click', onSeasonTab);
}

// TABS END //

// MENU ON SCROLL //

window.onscroll = function () {
    onMenuScroll();
    onLinkSection();
};

const menu = document.querySelector(".menu");


function onMenuScroll() {
    let h = 0;
    if (menu) {
        h = menu.offsetTop;
    }
    if (window.pageYOffset > h) {
        menu.classList.add('fixed__menu');
    } else {
        menu.classList.remove('fixed__menu');
    }
}

// MENU ON SCROLL END //

// MENU LINKS ACTIVE IF SECTION IS SCROLLED //

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".menu .menu__items li");

const onLinkSection = function () {
    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 300) {
            current = '#' + section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.firstChild.getAttribute('href') === current) {
            li.classList.add("active");
        }
    });
};

// MENU LINKS ACTIVE ... END //

// SOCIAL ICONS COME OUT ON CLICK //

const bodyWrapper = document.querySelector('.body__wrapper');
const contactsBtn = document.querySelector('.main__social__btn');
const contacts = document.querySelector('.main__social');
const onContacts = function () {
    contacts.classList.toggle('active');
    if (contacts.classList.contains('active')) {
        bodyWrapper.style.display = 'block';
    } else {
        bodyWrapper.style.display = 'none';
    }
};

const onBodyWrapper = function (e) {
    e.currentTarget.style.display = 'none';
    if (contacts.classList.contains('active')) {
        contacts.classList.remove('active');
    }
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
    }
};

bodyWrapper.addEventListener('click', onBodyWrapper);
contacts.addEventListener('click', onContacts);

// MOBILE MENU ON BURGER CLICK //

const burger = document.getElementById('burger');
const mobileMenu = document.querySelector('.mobile__menu');


const onBurger = function (e) {
    // MOBILE MENU OUT and CLOSE ON BURGER CLICK //
    if (e.target.classList.contains('burger') || e.target.classList.contains('burger__item')) {
        mobileMenu.classList.toggle('active');
        if (mobileMenu.classList.contains('active')) {
            bodyWrapper.style.display = 'block';
        } else {
            bodyWrapper.style.display = 'none';
        }
    }

    // CLOSE MOBILE MENU IF LINK IS CLICKED //
    if (e.target.classList.contains('menu__item')) {
        setTimeout(function () {
            mobileMenu.classList.remove('active');
            bodyWrapper.style.display = 'none';
        }, 600);
    }
};

mobileMenu.addEventListener('click', onBurger);


new WOW().init();


// CUSTOM GALLERY //

const flexGallery = document.querySelector('.flex__gallery__items');
const overlay = document.querySelector('.overlay');

const onFlexGalleryItem = function (e) {
    if (e.target.tagName === 'IMG') {
        e.target.classList.toggle('active__flex__image');
        overlay.classList.toggle('hidden');
    }
};

const onOverlay = function (e) {
    if (e.target.classList.contains('overlay')) {
        let activeFlexIMG = document.querySelector('.active__flex__image');
        activeFlexIMG.classList.remove('active__flex__image');
        e.target.classList.add('hidden');
    }
};
if (overlay != null) {
    overlay.addEventListener('click', onOverlay);
}

if (flexGallery != null) {
    flexGallery.addEventListener('click', onFlexGalleryItem);
}

// CUSTOM GALLERY //


// PRELOADER

const preloader = document.querySelector('.preloader');

window.onload = function () {
    window.setTimeout(function () {
        preloader.classList.add('hide');
    }, 300);
};

// PRELOADER //


// PARALLAX //

const parallaxElem = document.querySelector(".promo__content__logo");


document.addEventListener("mousemove", function (e) {
    MoveBackground(e);
});

function MoveBackground(e) {

    let offsetX = (e.clientX / window.innerWidth * 30) - 15;
    let offsetY = (e.clientY / window.innerHeight * 10) - 10;
    if (parallaxElem) {
        parallaxElem.style.transform = `translate(${offsetX}%, ${offsetY}%)`;
    }
}

// ON SCROLL 

window.addEventListener('scroll', elementInViewport);
var myElement = document.querySelector('.seasons .active .season__img img');
if (myElement) {
    var bounding = myElement.getBoundingClientRect();

    function elementInViewport() {
        if (bounding.top >= 0 && bounding.left >= 0 &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            let fromTOP = bounding.top * 0.2;
            if (window.innerWidth <= 768) {
                // style translateX * fromTOP ...
            }
        } else {
            return;
        }
    }
}



// UPLOAD FILES //

function uploadFile() {

    var totalfiles = document.getElementById('files').files.length;

    if (totalfiles > 0) {

        var formData = new FormData();

        // Read selected files
        for (var index = 0; index < totalfiles; index++) {
            formData.append("files[]", document.getElementById('files').files[index]);
        }

        var xhttp = new XMLHttpRequest();

        // Set POST method and ajax file path
        xhttp.open("POST", "ajaxfile.php", true);

        // call on request changes state
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                var response = this.responseText;

                alert(response + " File uploaded.");

            }
        };

        // Send request with data
        xhttp.send(formData);

    } else {
        alert("Please select a file");
    }

}