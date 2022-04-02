/* global data */
/* exported data */
// the form
var $entryForm = document.getElementById('entry-form');
var $entryImage = document.querySelector('.placeholder');
// the form inputs
var $inputImageURL = document.querySelector('#photo-url');
var $inputTitle = document.querySelector('#title');
var $inputNotes = document.querySelector('#notes');

// Event listener to update img src with input values
$inputImageURL.addEventListener('change', updateImage);

// function to insert the value of the input URL into the placeholder image src)
function updateImage(event) {
  // update the class of the placeholder image to .entry-image. Remove placeholder class & alt text
  $entryImage.classList.add('entry-image');
  $entryImage.alt = '';
  $entryImage.src = event.target.value;
  $inputImageURL = event.target.value;
  // update the src attribute of the image to the $inputImageURL value
  return $entryImage;
}
// event listener for submit event on journal entry form
$entryForm.addEventListener('submit', saveEntry);
function saveEntry(event) {
  event.preventDefault();
  $inputNotes = $entryForm.elements.notes.value;
  $inputTitle = $entryForm.elements.title.value;
  data.entries.push({
    title: $inputTitle,
    photoURL: $inputImageURL,
    notes: $inputNotes
  });
  data.nextEntryId++;
  $entryImage.src = 'images/placeholder-image-square.jpg';
  // console.log(data);
  $entryForm.reset();
}
/// /FINAL STEP BEFORE SUBMIT - TEST IN PRIVATE BROWSER AND MAKE SURE NO ERRORS
