// Exract from the DOM
// Mobile Menu
const menuBar = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('menu')

menuBar.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
})


// On speech Typing Animation``
const textDisplay = document.getElementById('header-text');
const phrase = ['Unlock your next adventure with our premium car rentals.']

let i = 0;
let j = 0;
let isDeleting = false;
let newPhrase = [];

// using nested loops
function loops() {
    // get the length of the phrase
    if(i < phrase.length) {
        // console.log(phrase[i])
        // using j as an iterator to loop over each letter
        if(j <= phrase[i].length){
            // console.log(phrase[i][j])
        }
        
        // to count each letters in steps of 1
        if(!isDeleting && j <= phrase[i].length) {
            // push the letter into the newPhrase array
            newPhrase.push(phrase[i][j])
            // count 
            j++
        }
    }

    // delete the letters backwards
    if(isDeleting && j <= phrase[i].length) {
        // pop the letter from the newPhrase array
        newPhrase.pop(phrase[i][j])
        // uncount
        j--
    }

    // when its strictly = phraselength
    if(j === phrase[i].length){
        isDeleting = true;
    }

    // when the counting is over 
    // repeat the counts process
    if(isDeleting && j === 0) {
        isDeleting = false;
        newPhrase = [];
        i++

        if(i = phrase.length) {
            i = 0;
        }
    }
    // display in the HTML
    textDisplay.innerHTML = newPhrase.join('')

    // set timeout for counts
    setTimeout(loops, 300)
}
loops()

// Gallery with modal Display
const images = document.querySelectorAll('.gallery-img img');
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal-content');
const modalText = document.querySelector('.modal-text');
const modalImg = document.querySelector('.modal-img');
const closeBtn = document.querySelector('.close');

// select each image using forEach
images.forEach(image => {
    image.addEventListener('click', () => {
        modal.classList.add('show-img');
        modalImg.src = image.src;
        modalText.innerHTML = image.alt;
        document.body.classList.add('no-scroll');
    })

    

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show-img')
        document.body.classList.remove('no-scroll')
    })
})


// REVIEWS Local Storage
const reviews = [
    {
        id: 1,
        name: "Allen Johnson",
        job: "Mechanical Engineer",
        img: "img/allen.jpg",
        rating : "<p>&#9733;</p> <p>&#9733;</p> <p>&#9733;</p>",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
        

    },
    {
        id: 2,
        name: "Ollie Watkins",
        job: "Electrical Engineer",
        img: "img/ollie.png",
        rating : "<p>&#9733;</p> <p>&#9733;</p> <p>&#9733;</p>       <p>&#9733;</p>",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry."
        

    },
    {
        id: 3,
        name: "Ania Malkova",
        job: "Aeronautical Engineer",
        img: "img/ania.jpeg",
        rating : "<p>&#9733;</p> <p>&#9733;</p> <p>&#9733;</p>      <p>&#9733;</p>",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
        

    },
    {
        id: 4,
        name: "Maryamme Stuart",
        job: "Mechanical Engineer",
        img: "img/maryamme.jpg",
        rating : "<p>&#9733;</p> <p>&#9733;</p>",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        id: 4,
        name: "Jon Doe",
        job: "Water Engineer",
        img: "img/man-1.jpg",
        rating : "<p>&#9733;</p> <p>&#9733;</p>",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sit atque modi ipsam ducimus. Tempore impedit similique adipisci, quidem delectus corporis deleniti sunt voluptatem incidunt ipsa hic aperiam repellendus exercitationem."
    }
]

// DOM Extraction
const image = document.getElementById('img');
const author = document.getElementById('name');
const job = document.getElementById('job');
const ratings = document.getElementById('rating');
const info = document.getElementById('text')

let currentReview = 0;

// Page Load Event
window.addEventListener('DOMContentLoaded', () => {
    // Invoke the showReview()
    showReview(currentReview)
    
})

function showReview() {
    const review = reviews[currentReview];
    image.src = review.img;
    author.textContent = review.name;
    job.textContent = review.job;
    ratings.innerHTML = review.rating;
    info.textContent = review.text;
}

// REVIEWS BUTTONS
// prev btn
const prevBtn = document.getElementById('prev');
// Listen for a click on prevBtn
prevBtn.addEventListener('click', () => {
    // iteration
    currentReview--

    if(currentReview < 0) {
        currentReview = reviews.length - 1
    }
    
    // Invoke the function
    showReview()
})

// next btn
const nextBtn = document.getElementById('next');
// Listen for a click on prevBtn
nextBtn.addEventListener('click', () => {
    // iteration
    currentReview++

    if(currentReview > reviews.length - 1) {
        currentReview = 0
    }
    
    // Invoke the function
    showReview()
})

// Blogs
window.addEventListener('DOMContentLoaded', () => {
    const expandsMore = document.querySelectorAll('[expand-more]');

    expandsMore.forEach(expandMore => {
        // listen for a click event
        expandMore.addEventListener('click', expand)         
    })
})

function expand() {
    // Target the Data-Id of expand-more
    const showContent = document.getElementById(this.dataset.target)
    // write  an if statement
    if(showContent.classList.contains('expand-active')) {
        // when it has a class of expand-active activate dataset of showtext 
        this.innerHTML = this.dataset.showtext
    }else {
        // if it doesnt contain class of expand-active activate dataset of hidetext
        this.innerHTML = this.dataset.hidetext
    }
    // toggle class of expand-active 
    showContent.classList.toggle('expand-active')
}
