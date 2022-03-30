/* global data */
/* exported data */

// the input of  #photo-url;
var $inputImageURL = document.querySelector('#photo-url');

$inputImageURL.addEventListener('change', updateImage);

// function to insert the value of the input URL into the placeholder image src)
function updateImage(event) {
  // identify the placeholder image
  var $entryImage = document.querySelector('.placeholder');

  // update the class of the placeholder image to .entry-image. Remove placeholder class & alt text
  $entryImage.classList.add('entry-image');
  $entryImage.classList.remove('placeholder');
  $entryImage.alt = '';
  $entryImage.src = event.target.value;
  // update the src attribute of the image to the $inputImageURL value
  return $entryImage;
}

// event listener for submit event on journal entry form

// function to put forn inpu values into a new object
