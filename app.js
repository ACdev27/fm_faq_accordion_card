window.addEventListener('DOMContentLoaded', function() {
  const answers = document.getElementsByClassName('faq-item');
  for (let i = 0; i < answers.length; i++) {
    answers[i].classList.toggle('close');
  }
});

const questions = document.getElementsByClassName('faq-question');
const faqItem = document.getElementsByClassName('faq-item');
const answers = document.getElementsByClassName('faq-answer');
const answersArray = Array.from(answers);

for (let i = 0; i < questions.length; i++) {


  questions[i].addEventListener('click', function() {
    

    


          // close current open faq
    // let faqItemOpen = document.getElementsByClassName('faq-item');
    // for (let j = 0; j < faqItemOpen.length; j++) {
    //   if (!faqItemOpen[j].classList.contains('close')) {
    //     faqItemOpen[j].classList.toggle('close');
    //   }
    // }


    faqItem[i].classList.toggle('close');
    


  });

  answersArray[i].style.display = 'block';


}


const faqQuestion = document.querySelectorAll('.faq-question');
const desktopBox = document.querySelector('.desktop-box');

for (let i = 0; i < faqQuestion.length; i++) {
  
  faqQuestion[i].addEventListener('mouseover', () => {
    desktopBox.style.left = '-127px';
    });
  
  
  faqQuestion[i].addEventListener('mouseout', () => {
    desktopBox.style.left = '-92px';
    });
  }






 


/*
window.addEventListener('DOMContentLoaded', function() {
  const answers = document.getElementsByClassName('faq-item');
  for (let i = 0; i < answers.length; i++) {
    answers[i].classList.toggle('close');
  }
});

const answers = document.getElementsByClassName('faq-item');
const questions = document.getElementsByClassName('faq-question');


for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', function() {
      console.log('you clicked me');
      answers[i].classList.toggle('close');
  });

}


*/