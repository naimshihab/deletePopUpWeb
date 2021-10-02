// Event Handling

// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
//     card.style.display = 'none';
// });



// DOM Traversal
// Menghapus Element

// const close = document.querySelectorAll('.close');

// for ( let i = 0; i < close.length; i++ ) {
//     close[i].addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//     })
// }

// Bisa juga menggunakan cara ini 

// close.forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//     });
// }); 

// Cara menghentikan aksi default
// Prevent Default

// close.forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//         // Prevent Default
//         e.preventDefault();
//         // Menghentikan bubbling
//         e.stopPropagation();
//     });
// }); 


// // Event Bubbling

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//     card.addEventListener('click', function() {
//         alert('Oke');
//     });
// });



const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    if ( e.target.className == 'close' ) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});


