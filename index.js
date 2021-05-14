//Navigation menu
function showMenu(navId, ToggleId) {
    const toggle = document.getElementById(ToggleId),
        nav = document.getElementById(navId)


    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle('show')
            document.getElementById('welcome').style.display = 'none'
        })

    }

}



showMenu('navList', 'toggle-btn')

if (showMenu()) {
    document.getElementById('welcome').style.display = 'block'
} else {
    document.getElementById('welcome').style.display = 'block'
}

const closeToggle = document.getElementById('close-toggle')

function closeNav() {
    const nav = document.getElementById("navList")
    nav.classList.remove('show')

    mainContent.style.display = 'block'

}
closeToggle.addEventListener('click', closeNav)


//NAVBAR ITEM SELECTION

const navLink = document.querySelectorAll('.navLink')

function linkMenu() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    const navMenu = document.getElementById('navList')
    navMenu.classList.remove('show')
}
navLink.forEach(link => link.addEventListener('click', linkMenu))

// CONTACT FORM SUBMISSION
const subscribeBtn = document.getElementById('subscribeBtn');
const contactFirstName = document.getElementById('contactFirstName');
const contactSecondName = document.getElementById('contactSecondName');
const email = document.getElementById('contactEmail')
const results = document.getElementById('results');
const resultContainer = document.getElementById('result-container')
const timesBtn = document.getElementById('times')
const mainContent = document.getElementById('mainContent')
    // const subscribeUser = {
    //         firstName: `${contactFirstName.value}`,
    //         secondName: `${contactSecondName.value}`,
    //         userEmail: `${email.value}`
    //     }
    // console.log(subscribeUser)


subscribeBtn.addEventListener('click', function(event) {
    const subscribeUser = {}
    subscribeUser.firstName = `${contactFirstName.value}`
    subscribeUser.secondName = `${contactSecondName.value}`
    subscribeUser.userEmail = `${email.value}`
    results.innerHTML = `Hello ${subscribeUser.firstName}, <br> Thanks for showing interest in our newsletter, please confirm if ${subscribeUser.userEmail} is your email address, <br/> <a href="confirmemail.htm" class="btn btn-secondary mt-4">Confirm Email</a>`

    function show() {
        if (subscribeUser.firstName && subscribeUser.secondName && subscribeUser.userEmail) {
            resultContainer.style.display = 'block';
            document.getElementById('mainContent').style.filter = 'blur(2px)'
        } else {
            resultContainer.style.display = 'none'
        }
    }
    show()
    timesBtn.addEventListener('click', function() {
        resultContainer.style.display = 'none';
        document.getElementById('mainContent').style.filter = 'none'
    })

    event.preventDefault()
})

// scroll review animation
// const sr = ScrollReveal({
//         origin: 'right',
//         distance: '80px',
//         duration: 2000,
//         reset: true
//     })
// const xr = ScrollReveal({
//     origin: 'left',
//     distance: '600px',
//     duration: 1500,
//     reset: true
// })

//home
// sr.reveal('.header-content', {})

//welcome
// sr.reveal('.welcome-content', { delay: 200 })
//mission
// sr.reveal('#mission', { delay: 400 })
//servie Time
// sr.reveal('#service', {})
//     //leadership
// sr.reveal('#leader', {})

// //pazekiel
// sr.reveal('.paezekiel', {})
//     //contact
// sr.reveal('.maezekiel', { delay: 200 })
//     //contact
// sr.reveal('.maojoka', { interval: 200 })
//contact
// sr.reveal('#contact', {})

// let body = document.body,
//     btn = document.getElementById('scroll-top'),
//     docElem = document.documentElement,
//     offset = 100,
//     scrollPos, docHeight;

// docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.offsetHeight, docElem.clientHeight, docElem.scrollHeight);
// if (docHeight != 'undefined') {
//     offset = docHeight / 4
// }

// window.addEventListener('scroll', function(event) {
//     scrollPos = body.scrollTop || docElem.scrollTop

//     btn.className = (scrollPos > offset) ? 'visible' : ''
// })
let slideIndex = 0;
slideShow();

function slideShow() {
    let i
    let slides = document.getElementsByClassName('slide');
    for (i = 0; i < slides.length; i++)
        slides[i].style.display = 'none'
    slideIndex++
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = 'block'
    setTimeout(slideShow, 6000)
}
// let body = document.body,
//     docElement = document.documentElement,
//     btn = document.getElementById('scroll-top'),
//     offset = 100,
//     scrollPos, docHeight;

// docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElement.clientHeight, docElement.scrollHeight, docElement.offsetHeight)

// if (docHeight != 'undefined') {
//     offset = docHeight / 4
// }
// window.addEventListener('scroll', function(event) {
//     scrollPos = body.scrollTop || docElement.scrollTop

//     btn.className = (scrollPos > offset) ? 'visible' : ''
// })