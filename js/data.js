/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

// Storing Previous Entries
var previousEntriesJSON = localStorage.getItem('javascript-local-storage');
// console.log('previous entries: ', previousEntriesJSON);
// function to put form input values into a new object, add nextEntryId

window.addEventListener('beforeunload', function (event) {
  var entriesJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', entriesJSON);
});

if (previousEntriesJSON != null) {
  data = JSON.parse(previousEntriesJSON);
}
