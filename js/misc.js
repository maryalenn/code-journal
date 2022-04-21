/// /WORKING ON 04.13
/// /DEFINE WHAT PARTS ARE FOR THE NEW ENTRY VS WHAT PARTS ARE FOR THE EDIT ENTRY AND WHAT PARTS ARE UNIVERSAL TO THE FUNCTION

// function saveEntry(event) {
// // UNIVERSAL
//   // To remove the initial "no entries" message div
//   $noEntries.remove();
//   event.preventDefault();
//   $entryForm.reset();
//   $entryFormContainer.classList.add('hidden');
//   $dataViewEntries.classList.remove('hidden');
//   $entryImage.src = 'images/placeholder-image-square.jpg';

//   $inputNotes = $entryForm.elements.notes.value;
//   $inputTitle = $entryForm.elements.title.value;
//   // NEW ENTRY
//   data.entries.unshift({
//     title: $inputTitle,
//     photoURL: $inputImageURL,
//     notes: $inputNotes
//   });
//   data.nextEntryId++;
//   var newEntry = renderEntries(data.entries[0]);
//   $entriesList[0].prepend(newEntry);

//   // EDIT ENTRY

// }

/// /BROKEN - 04.12 ATTEMPT
// function saveEntry(event) {
//   event.preventDefault();
//   if (!data.editing) {
//     data.entries.unshift({
//       title: $inputTitle,
//       photoURL: $inputImageURL,
//       notes: $inputNotes,
//       entryId: data.nextEntryId
//     });
//     data.nextEntryId++;
//     var newEntry = renderEntries(data.entries[0]);
//     $entriesList[0].prepend(newEntry);
//   } else {
//     for ()
//   }
//   $inputNotes = $entryForm.elements.notes.value;
//   $inputTitle = $entryForm.elements.title.value;

//   $entryImage.src = 'images/placeholder-image-square.jpg';
//   $entryForm.reset();
//   $entryFormContainer.classList.add('hidden');
//   $dataViewEntries.classList.remove('hidden');
//   // To remove the initial "no entries" message div
//   $noEntries.remove();
// }

/// //USED TO DO SOME CLEANUP OF OLD TESTING ENTRIES - MAY BE ABLE TO USE FOR NEXT FEATURE TO DELETE ENTRY.
// function deleteUndefined() {
//   // var undefinedID = document.querySelectorAll('[data-entry-id="undefined"]');
//   var undefinedIDs = document.querySelectorAll('[data-entry-id="undefined"]');
//   console.log(undefinedIDs.length);
//   for (var i = 0; i < undefinedIDs.length; i++) {
//     var undefinedID = document.querySelector('[data-entry-id="undefined"]');
//     console.log(undefinedID);
//     undefinedID.remove();
//     // delete undefinedID;
//   }

// }
// deleteUndefined();
//
