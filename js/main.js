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
  $entryForm.reset();
}

// function to build out the basic node structure for the entries

// <li>
// <div class="entries row">
//    <div class="column-half">
//      <img src="$entryImage.src" alt=""></div>
//    <div class="column-half">
//      <h2>$$inputTitle</h2>
//     <p>$$inputNotes</p>
//    </div>
//  </div>
// </li> */

// Define the parent element
var $entriesList = document.getElementsByClassName('entries-list');
// Create the first child element and append it to parent element
var $listItem = document.createElement('li');
$entriesList[0].appendChild($listItem);

// Define the rendering function
function renderEntries(entries) {

  // Create inner div with row class attribute and append it to the parent li element
  var $entryRow = document.createElement('div');
  $entryRow.setAttribute('class', 'entries row');
  $listItem.appendChild($entryRow);

  // Create inner div with $columnHalf class attribute and append it to the parent div.row element
  var $columnHalf = document.createElement('div');
  $columnHalf.setAttribute('class', 'column-half');
  $entryRow.appendChild($columnHalf);

  // Create the content elements that will hold the entry data (image, title, & text)
  var $entryImg = document.createElement('img');
  $entryImg.setAttribute('src', entries.photoURL);
  $columnHalf.appendChild($entryImg);

  var $entryTitle = document.createElement('h2');
  $columnHalf.appendChild($entryTitle);
  $entryTitle.innerHTML = entries.title;

  var $entryNotes = document.createElement('p');
  $columnHalf.appendChild($entryNotes);
  $entryNotes.innerHTML = entries.notes;

  return $listItem;
}

for (var i = 0; i < data.entries.length; i++) {
  // eslint-disable-next-line no-unused-vars
  var $entry = renderEntries(data.entries[i]);
  // eslint-disable-next-line no-unused-expressions
  $entriesList.appendChild;
}

// Entries link in navigation bar - on click, hide the entry form.
// New button on click hide the entries list
