import {WFMComponent} from "../../art-quiz-app";
import {categoriesArtists} from "../consts/categoryConfig";
import {imagesParts} from "../../art-quiz-app/tools/array-split";
import images from "../../image-data/images";

class QuestionsPageArtistsComponent extends WFMComponent {
    constructor(config) {
        super(config);
    }

}

export const questionsPageArtistsComponent = new QuestionsPageArtistsComponent({
    selector: 'app-questions-artists-page',
    onInit: function () {
        generateQuestion();
        sliderAlgorithm();
        generateModalContent();
        // imageClickListener();
    },
    template: `
<nav class="nav-panel">
    <a href="#"><button class="nav-panel-button effect">Home</button></a> 
    <p class="nav-panel-title">QUESTIONS</p> 
    <a href="#categoryArtists"><button class="nav-panel-button effect">Categories</button></a> 
</nav>

  
<div class="wrapper">
<!--&lt;!&ndash; Button trigger modal &ndash;&gt;-->
<!--<button type="button" class="btn btn-primary" onclick="showModal()">-->
<!--  Launch demo modal-->
<!--</button>-->
<!-- Modal -->

<!--<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">-->
<!--  Launch demo modal-->
<!--</button>-->

<div class="modal fade" id="right" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Верно!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary btn-close-right" data-bs-dismiss="modal">Next question</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="Wrong" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Неверно!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary btn-close-wrong" data-bs-dismiss="modal">Next question</button>
      </div>
    </div>
  </div>
</div>

<div class="slider-container">
<div class="my-slider">
      <div class="question-wrapper slider-line">
    </div>
    </div>
  </div>
      
<!--    <div class="question-progress">-->
<!--         <label class="bullet bullet-wrong"></label>-->
<!--         <label class="bullet bullet-wrong"></label>-->
<!--         <label class="bullet bullet-right"></label>-->
<!--         <p class="bullet"></p>-->
<!--         <p class="bullet"></p>-->
<!--         <p class="bullet"></p>-->
<!--         <p class="bullet"></p>-->
<!--         <p class="bullet"></p>-->
<!--         <p class="bullet"></p>-->
<!--         <p class="bullet"></p>-->
<!--     </div>-->


  <!-- Modal Trigger -->
<!--    <button data-target="modal1" class="btn modal-trigger">Modal</button>-->
    
<!--  <div id="modal-right" class="modal">-->
<!--    <div class="modal-content">-->
<!--      <h1 style="color: green;text-align: center">Верно</h1>-->
<!--     <div class="modal-picture-content"></div>-->
<!--    </div>-->
<!--    <div class="modal-footer">-->
<!--      <p  style="color: var(&#45;&#45;purple);" class="modal-close modal-right-close waves-effect waves-green btn-flat">Next question</p>-->
<!--    </div>-->
<!--  </div>-->
<!--  -->
<!--   <div id="modal-wrong" class="modal">-->
<!--    <div class="modal-content">-->
<!--      <h1 style="color: #d93030">Неверно</h1>-->
<!--      <div class="modal-picture-content"></div>-->
<!--    </div>-->
<!--    <div class="modal-footer">-->
<!--      <p  style="color: var(&#45;&#45;purple);text-align: center" class="modal-close modal-wrong-close waves-effect waves-green btn-flat">Next question</p>-->
<!--    </div>-->
<!--  </div>-->

    `

})

function getRandomInvalidImage(activeValidImage) {
    const randomImage = images[Math.floor(Math.random() * images.length)];

    if (randomImage.author === activeValidImage.author) {
        return getRandomInvalidImage(activeValidImage);
    }

    return randomImage;
}


function generateQuestion() {
    const categoryId = window.location.hash.split('/').pop();
    const categoryQuestions = imagesParts[categoryId];

    const imagesWithoutQuestionsImages = images.splice(categoriesArtists[categoryId].startImageIndex, 10)

    const filledQuestion = categoryQuestions.map((el) => {
        // imageClickListener()
        const randomPositionID = Math.floor(Math.random() * 4);

        const authorPartHTML = `<p class="main-question">Автором какой из картин является ${el.author}?</p><div class="question-cards">`;

        let variants = Array.from(Array(4).keys());

        variants = variants.map((variant, index) => {
            const invalidRandomImage = getRandomInvalidImage(el);
            if (index === randomPositionID) {

                return `<button data-bs-toggle="modal" data-bs-target="#right" style="border: none; background: transparent"><img class="question-cards-img modal-trigger" data-target="modal-right" src="../../image-data/img/${el.imageNum}.jpg" alt="Picture"/></button>`;
            }
            return `<button data-bs-toggle="modal" data-bs-target="#Wrong" style="border: none; background: transparent"><img class="question-cards-img modal-trigger" data-target="modal-wrong"
                src="../../image-data/img/${invalidRandomImage.imageNum}.jpg" alt="Picture"/></button>`;

        })
        return authorPartHTML + variants.join(' ') + '</div>';
    })
    let filledQuestion1 = filledQuestion.map((el) => {
        return `
        <div class="slider-el" style="list-style-type: none; display: inline">
        ${el}
        </div>
        `
    })
    let generateQuestionForm = filledQuestion1.join(' ').toString()

    const parser = new DOMParser();
    // let parsedHtml = parser.parseFromString(categoryArtistsPageComponent.template, 'text/html');
    document.querySelector('.question-wrapper').insertAdjacentHTML('beforeend', generateQuestionForm)
}


function sliderAlgorithm() {
    const slides = document.querySelectorAll('.my-slider .slider-line')
    const sliderLine = document.querySelector('.slider-line')
    let count = 0;
    let width;


    function init() {
        width = document.querySelector('.slider-line').offsetWidth;
        sliderLine.style.width = width * slides.length + 'px';
        slides.forEach(item => {
            item.style.width = width + 'px';
            item.style.height = 'auto';
        })
    }

    window.addEventListener('resize', init)
    init()

    // document.querySelector('.finish-question').addEventListener('click', () => {
    //     count++;
    //     rollSlider()
    // })
    document.querySelector('.btn-close-right').addEventListener('click', () => {
        count++;
        rollSlider();
    })

    document.querySelector('.btn-close-wrong').addEventListener('click', () => {
        count++;
        rollSlider();
    })

    function rollSlider() {
        sliderLine.style.transform = 'translate(-' + count * width + 'px)'
    }
    var wrongModal = document.getElementById('Wrong')
    wrongModal.addEventListener('hidden.bs.modal', function (event) {
        count++;
        rollSlider()
    })

    var rigthModal = document.getElementById('rigth')
    rigthModal.addEventListener('hidden.bs.modal', function (event) {
        count++;
        rollSlider()
    })
}


function open() {
    const elem = document.querySelectorAll('.modal');
    const instance = M.Modal.getInstance(elem);
    instance.open();
}


function generateModalContent() {
Array.from(document.querySelectorAll('.question-cards-img')).forEach((element)=>{
        element.addEventListener('click', function (e) {

        })
    })
    //
    // var wrongModal = document.getElementById('Wrong')
    // wrongModal.addEventListener('hidden.bs.modal', function (event) {
    //         count++;
    //         rollSlider()
    // })
    //
    // var rigthModal = document.getElementById('rigth')
    // rigthModal.addEventListener('hidden.bs.modal', function (event) {
    //         count++;
    //         rollSlider()
    // })
    // let rightAnswer = `
    //              <div class="modal-content">
    //   <div style="color: black">Автор:  ${this.author}</div>
    //         <div style="color: black">Название:  ${this.name}</div>
    //               <div style="color: black">Год:  ${this.year}</div>
    // </div>
    //       `
    // document.querySelector('.modal-picture-content').innerHTML = rightAnswer;
}

function imageClickListener(instance) {
    document.querySelectorAll('.question-cards-img').forEach(item => {
            item.addEventListener('click', (elem) => {
                console.log(item)
                console.log(instance)
            })

        }
    )
}
