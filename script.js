const hamburger = document.querySelector('.hamburger');
var navbar = document.getElementById('listitem');
const body = document.querySelector('body')
let firstline = document.getElementById('firstline');
let secondline = document.getElementById('secondline');
let thirdline = document.getElementById('thirdline');
var logo = document.querySelector('.logo')




hamburger.addEventListener('click', () => {
    navbar.classList.toggle('slide');
    firstline.classList.toggle('line1');
    secondline.classList.toggle('line2');
    thirdline.classList.toggle('line3');
})

// body.addEventListener("click",function(event){
//   var hamburger = document.querySelector('.hamburger');
//   var body = document.querySelector('body')
//   var navbar = document.getElementById('listitem');

//         if(navbar && event.target !== navbar && event.target !== hamburger){
//             navbar.style.display = "none";
//         }
//         navbar.style.display = "block"
//       })

        // document.addEventListener('click', function(event) {
        //     if(event.target.id === !navbar)
        //         navbar.remove();
            
        // });

// document.body.addEventListener('click', function(event) {
//     // Check if the clicked element or its parent has the 'navbar' class
//     if (!event.target.closest('#navbar')) {
//         // Call your function here
//         navbar.remove()
//     }
// });

