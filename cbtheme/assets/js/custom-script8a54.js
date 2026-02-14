
$(document).ready(function () {
   // $('a.linkNone').on('click', function(e){
   //    e.preventDefault();
   //    e.stopPropagation();
   // })

   $('#subEmailArticle').on('click', function(e){
      e.preventDefault()
      $('.ar_topics__nav--subscribe .subscribeArticle').click();
   });

   $('#subEmailArticleMob').on('click', function(e){
      e.preventDefault()
      $('.ar_topics__basement--subscribe .subscribeArticle').click();
   });


   if($('.cc_customSliderPic__slide').first().hasClass('whiteCurrent')){
      $('.cc_customSliderPic__slider--num p').css('color', 'white');
   }


   $( '.cc_customSliderPic__slider--btns > div' ).on('click', function(){
      setTimeout(() => {
         let typeColor = $(this).closest('.cc_customSliderPic__slider').find('.swiper-slide-active').hasClass('whiteCurrent');
         if(typeColor){
            $('.cc_customSliderPic__slider--num p').css('color', 'white');
         }else{
            $('.cc_customSliderPic__slider--num p').css('color', 'black');
         }
      }, 650);        
   });
});

// document.addEventListener("DOMContentLoaded", function () {
   // const listItems = document.querySelectorAll(".popupForm__tabs_first .wpcf7-list-item");

   // listItems.forEach(function (item) {
   //    item.addEventListener("click", function () {
   //       listItems.forEach(function (otherItem) {
   //          otherItem.classList.remove("active");
   //       });
   //       item.classList.add("active");

   //       const radioInput = item.querySelector("input[type=radio]");
   //       if (radioInput && !radioInput.checked) {
   //          radioInput.click();
   //       }
   //    });
   // });

   // const listItems_2 = document.querySelectorAll(".popupForm__tabs_second .wpcf7-list-item");

   // listItems_2.forEach(function (item) {
   //    item.addEventListener("click", function () {
   //       listItems.forEach(function (otherItem) {
   //          otherItem.classList.remove("active");
   //       });
   //       item.classList.add("active");

   //       const radioInput = item.querySelector("input[type=radio]");
   //       if (radioInput && !radioInput.checked) {
   //          radioInput.click();
   //       }
   //    });
   // });

//    document.querySelector('.popupForm--btn button').addEventListener("click", function () {
//       document.getElementById("submitMainForm").click();
//    });
// });

/*$(document).ready(function () {
   const $listItems = $(".popupForm__tabs_first .wpcf7-list-item, .popupFormBot__tabs_first .wpcf7-list-item");
   const $listItems_2 = $(".popupForm__tabs_second .wpcf7-list-item, .popupFormBot__tabs_second .wpcf7-list-item");

      $listItems.on("click", function () {
         $listItems.removeClass("active");
         $(this).addClass("active");

         const $radioInput = $(this).find("input[type=radio]");
         if ($radioInput.length && !$radioInput.is(":checked")) {
            $radioInput.click();
         }
      });

      $listItems_2.on("click", function () {
         $listItems_2.removeClass("active");
         $(this).addClass("active");

         const $radioInput = $(this).find("input[type=radio]");
         if ($radioInput.length && !$radioInput.is(":checked")) {
            $radioInput.click();
         }
      });

      $(".popupForm--btn button").on("click", function () {
         $("#submitMainForm").click();
      });
      $(".popupFormBot--btn button").on("click", function () {
         $("#submitMainFormFooter").click();
      });
      
});

var goodKey = '0123456789+ ';
var checkInputTel = function(e) {
   var key = (typeof e.which == "number") ? e.which : e.keyCode;
   var start = this.selectionStart,
      end = this.selectionEnd;

   var filtered = this.value.split('').filter(filterInput);
   this.value = filtered.join("");

   
   var move = (filterInput(String.fromCharCode(key)) || (key == 0 || key == 8)) ? 0 : 1;
      this.setSelectionRange(start - move, end - move);
   }
   var filterInput = function(val) {
   return (goodKey.indexOf(val) > -1);
}

var inputEl = document.getElementById('phoneContactform');
if(document.getElementById('phoneContactform')){
   inputEl.addEventListener('input', checkInputTel);
}
var phoneContactformFooter = document.getElementById('phoneContactformFooter');
if(document.getElementById('phoneContactformFooter')){
   phoneContactformFooter.addEventListener('input', checkInputTel);
}


$("#emailFormFooter").on("keypress", function(event) {
   var englishAlphabetAndWhiteSpace = /^[-@./#&+\w\s]*$/;
   var key = String.fromCharCode(event.which);
   if (event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || englishAlphabetAndWhiteSpace.test(key)) {
      return true;
   }
   return false;
});
$('#emailFormFooter').on("paste", function(e) {
   e.preventDefault();
});


$("#emailForm").on("keypress", function(event) {
   var englishAlphabetAndWhiteSpace = /^[-@./#&+\w\s]*$/;
   var key = String.fromCharCode(event.which);
   if (event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || englishAlphabetAndWhiteSpace.test(key)) {
      return true;
   }
   return false;
});
$('#emailForm').on("paste", function(e) {
   e.preventDefault();
});
*/

const shareIcons = document.querySelectorAll('.shareCopy'); 
shareIcons.forEach(shareIcon => {
   shareIcon.addEventListener('click', (e) => {
      const currentURL = shareIcon.getAttribute("data-url"); 
      copyToClipboard(currentURL); 
      shareIcon.classList.add('copy');
      let p = shareIcon.querySelector('p');
      if (p) {
         p.textContent = "Link copied";
      }
   });
});

const shareIconsBoard = document.querySelector('.shareCopyboard'); 

if(shareIconsBoard){
   shareIconsBoard.addEventListener('click', (e) => {
      e.preventDefault();
      const item = e.target;
      const currentURL = item.getAttribute("href"); 
      copyToClipboard(currentURL); 
      item.textContent = "Copied";
   });
}


// Copy URL
function copyToClipboard(text) {
   const input = document.createElement('textarea');
   input.style.position = 'fixed';
   input.style.top = '0';
   input.style.opacity = 0;
   input.value = text;
   document.body.appendChild(input);
   input.select();
   document.execCommand('copy');
   document.body.removeChild(input);
}



var currentYear = new Date().getFullYear();




  // Set the initial counter value

  var counterValue = currentYear - 2007; // Change 2022 to the starting year of your counter

// Get a reference to the counter element
var counterElement = document.getElementsByClassName("counter");

// Display the initial counter value
counterElement.innerText = counterValue;

// Update the counter every year
setInterval(function() {
  counterValue++;
  counterElement.innerText = counterValue;
}, 1000 * 60 * 60 * 24 * 365); // Update every year (approximation)




// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());
function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};	


(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "q4xfh11pwh");

function closeBotForm() {
   var form = document.querySelector('.popupFormBot');
   if(form) {
      form.classList.remove('show');
   }
}