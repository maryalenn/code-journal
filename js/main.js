/* global data */
/* exported data */
// the form
var $entryFormContainer = document.querySelector('.entry-form');
var $entryForm = document.getElementById('entry-form');
var $entryImage = document.querySelector('.placeholder');

// the form inputs
var $inputImageURL = document.querySelector('#photo-url');
var $inputTitle = document.querySelector('#title');
var $inputNotes = document.querySelector('#notes');

var $entriesNavLink = document.querySelector('.nav');
var $newButton = document.querySelector('.new-button');
var $dataViewEntries = document.querySelector("div[data-view='entries']");
var $noEntries = document.querySelector('.no-entries');

// Event listener to update img src with input values
$inputImageURL.addEventListener('change', updateImage);

// updateImage function: to insert the value of the input URL into the placeholder image src)
function updateImage(event) {
  // update the class of the placeholder image to .entry-image. Remove placeholder class & alt text
  $entryImage.classList.add('entry-image');
  $entryImage.alt = '';
  // update the src attribute of the image to the $inputImageURL value
  $entryImage.src = event.target.value;
  $inputImageURL = event.target.value;
}
// event listener for submit event on journal entry form
$entryForm.addEventListener('submit', saveEntry);
$entryForm.addEventListener('submit', renderEntries);

// Define the parent element
var $entriesList = document.getElementsByClassName('entries-list');

// Define the rendering function
function renderEntries(entries) {
  // <li>
  // <div class="entries row">
  //    <div class="column-half">
  //      <img src="$entryImage.src" alt=""></div>
  //    <div class="column-half">
  //      <h2>$inputTitle <i class="fa-solid fa-pen"></i></h2>
  //     <p>$$inputNotes</p>
  //    </div>
  //  </div>
  // </li>

  // Create inner div with row class attribute and append it to the parent ul element
  var $listItem = document.createElement('li');
  var $entryRow = document.createElement('div');
  $entryRow.setAttribute('class', 'entries row');
  $listItem.setAttribute('data-entry-id', entries.entryId);
  $listItem.appendChild($entryRow);

  // Create inner div with $columnHalf class attribute and append it to the parent div.row element
  var $columnHalfLeft = document.createElement('div');
  $columnHalfLeft.setAttribute('class', 'column-half');
  $entryRow.appendChild($columnHalfLeft);

  // Create the content elements that will hold the entry data (image, title, & text)
  var $entryImg = document.createElement('img');
  $entryImg.setAttribute('src', entries.photoURL);
  $columnHalfLeft.appendChild($entryImg);
  var $columnHalfRight = document.createElement('div');
  $columnHalfRight.setAttribute('class', 'column-half');
  $entryRow.appendChild($columnHalfRight);

  var $entryTitle = document.createElement('h2');
  $columnHalfRight.appendChild($entryTitle);
  $entryTitle.innerHTML = entries.title;

  var $editIcon = document.createElement('i');
  $entryTitle.appendChild($editIcon);
  $editIcon.setAttribute('class', 'fas fa-pen');
  $editIcon.setAttribute('data-entry-id', entries.entryId);

  var $entryNotes = document.createElement('p');
  $columnHalfRight.appendChild($entryNotes);
  $entryNotes.innerHTML = entries.notes;
  return $listItem;
}
// To remove the "no entries" message if there are entries stored
if (data.entries.length > 0) {
  $noEntries.remove();
}

for (var i = 0; i < data.entries.length; i++) {
  var entryStructure = renderEntries(data.entries[i]);
  $entriesList[0].append(entryStructure);
}

$newButton.addEventListener('click', newButton);

function newButton(event) {
  $entryFormContainer.classList.remove('hidden');
  $dataViewEntries.classList.add('hidden');
}

$entriesNavLink.addEventListener('click', navLink);

function navLink(event) {
  $dataViewEntries.classList.remove('hidden');
  $entryFormContainer.classList.add('hidden');
}

function editEntry(event) {

  var target = event.target;
  if (target === document.querySelector('i')) {
    $entryFormContainer.classList.remove('hidden');
    $dataViewEntries.classList.add('hidden');
    var editEntryId = target.getAttribute('data-entry-id');
    data.editing = editEntryId;
  }
}
$dataViewEntries.addEventListener('click', editEntry);

function saveEntry(event) {
  event.preventDefault();
  $inputNotes = $entryForm.elements.notes.value;
  $inputTitle = $entryForm.elements.title.value;
  data.entries.unshift({
    title: $inputTitle,
    photoURL: $inputImageURL,
    notes: $inputNotes,
    entryId: data.nextEntryId
  });
  data.nextEntryId++;
  $entryImage.src = 'images/placeholder-image-square.jpg';
  $entryForm.reset();
  $entryFormContainer.classList.add('hidden');
  $dataViewEntries.classList.remove('hidden');
  var newEntry = renderEntries(data.entries[0]);
  $entriesList[0].prepend(newEntry);
  // To remove the initial "no entries" message div
  $noEntries.remove();
}
