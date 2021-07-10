/**

 *

 * Manipulating the DOM exercise.

 * Exercise programmatically builds navigation,

 * scrolls to anchors from navigation,

 * and highlights section in viewport upon scrolling.

 *

 * Dependencies: None

 *

 * JS Version: ES2015/ES6

 *

 * JS Standard: ESlint

 *

*/

/**

 * Define Global Variables

 *

*/
 window.onerror = errorHandler();

 function errorHandler(msg,url,l,colno,error){
   return true;
 }


let allSections = document.querySelectorAll("section");

let sections = Array.from(allSections);

let fragment = document.createDocumentFragment();

let nav = document.getElementById('navBar');

let header = document.getElementById('header');

let container = document.getElementById('navbar__list');

let links;

//creat li list using loop over array

for (let section of sections) {

    let li = document.createElement('li');

    let dataNav = section.getAttribute('data-nav');

    let sectionId = section.id;

    let anchor = document.createElement("a");

    anchor.addEventListener('click', function() {

        section.scrollIntoView();

    });

    anchor.textContent = dataNav;

    anchor.classList = 'menu__link';

    li.appendChild(anchor);

    let liId = li.id;

    liId = sectionId + 'L';

    fragment.appendChild(li);

    //add the li created to document fragment

    container.appendChild(fragment);

}

//function call

links = document.querySelectorAll("a");

//hide navigation bar as the page loaded

nav.style.top = '-50px';

//scroll event that show the nav while scrolling and hide it after 5 sec

let time;

function scrolling() {

    if (nav.style.top === '-50px') {

        nav.style.top = '0';

    } else {

        clearTimeout(time);

        time = setTimeout(function() {

            nav.style.top = '-50px';

        }, 5000);

    }

}

//scrool event

document.addEventListener('scroll', function() {

    scrolling();

    activeMotion();

});

//fire when rhe mouse is over the nav area

header.addEventListener('mouseover', function() {

    scrolling();

});

//change activeMotion over the page

let inView = function(e) {

    return Math.floor(e.getBoundingClientRect().top);

};

let removeLiveMotion = function(e, a) {

    e.classList.remove('liveMotion');

    a.classList.remove('activeNav');

};

let addLiveMotion = function(stute, e, a) {

    if (stute) {

        e.classList.add('liveMotion');

        a.classList.add('activeNav');

    }

};

//set or delete activeMotion from an section

let activeMotion = function() {

    for (let i = 0; i <= sections.length; i++) {

        let elementInView = inView(sections[i], links[i]);

        let height = sections[i].offsetHeight;

        let inViewPort = function() {

            if (elementInView < 0.25 * height && elementInView >= -0.75 * height) {

                return true;

            } else {

                return false;

            }

        };

        removeLiveMotion(sections[i], links[i]);

        addLiveMotion(inViewPort(), sections[i], links[i]);

    }

};

