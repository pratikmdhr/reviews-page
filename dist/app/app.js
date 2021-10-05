// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const picture = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randBtn = document.querySelector('.random-btn');
const navDots = document.querySelectorAll('.nav-dot');

// Initialization
let i = 0;
let iMemory = 0;
updateContent(i);


// Update DOM based on passed index value
function updateContent(idx) {
  i = idx;
  picture.src = reviews[i].img;
  author.textContent = reviews[i].name;
  job.textContent = reviews[i].job;
  info.textContent = reviews[i].text;
  navDots[i].classList.toggle('active');
  if (i !== iMemory) {
    navDots[iMemory].classList.toggle('active');
  }
  iMemory = i;
}

// Increase the Index Value and calls the function to update DOM
const nextReview = (reviewsArr) => {
  if (i < reviewsArr.length - 1) {
    updateContent(++i);
  }
};

// Decrease the Index Value and calls the function to update DOM
const prevReview = () => {
  if (i > 0) {
    updateContent(--i);
  }
};

// Generate random Index Value and calls the function to update DOM
const randReview = (reviewsArr) => {
  do {
    i = Math.floor(Math.random() * reviewsArr.length);
  } while (i === iMemory);
  updateContent(i);
};


// Event Listeners
nextBtn.addEventListener('click', () => {
  nextReview(reviews);
});
prevBtn.addEventListener('click', prevReview);
randBtn.addEventListener('click', () => {
  randReview(reviews);
});
navDots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    updateContent(idx);
  });
});
