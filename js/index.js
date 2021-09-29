// Your code goes here

// mouseover
const navBar = document.querySelector('.logo-heading');

navBar.addEventListener('mouseover', function(event){event.target.style.color = '#cc1b73';
setTimeout(function() {
    event.target.style.color = "";
    }, 700);
})

// dblclick
const letsClk = document.querySelector('footer');
letsClk.addEventListener('dblclick', function(event){
    console.log('This does nothing!');
});


// select
// function selectDestination(event){
//     const select = document.querySelector('.content-destination h2');
//     const destination = event.target.value.substring(event.target.destinationStart, event.target.destinationEnd);
//     log.textContent = 'You selected: ${destination}';
//     console.log(selectDestination)
// }


// mouseenter
var enterEventCount = 0;
var leaveEventCount = 0;
const mouseH4 = document.querySelector('.destination h4');

mouseH4.addEventListener('mouseenter', function(event) {
  mouseH4.style.border = '5px dotted blue';
  enterEventCount++;
  addListItem('More fun in the sun' + enterEventCount + '.');
});

mouseH4.addEventListener('mouseleave', function(event) {
    mouseH4.style.border = '1px solid #ffff';
    leaveEventCount++;
    addListItem('Lots of fun in the sun' + leaveEventCount + '.');
  });


// keydown
// const busImage = document.querySelector('.intro img')
// // console.log(busImage)

// document.addEventListener('keydown', escKey);

// function escKey(event) {
//   if(event.key === 'Escape'){
//     busImage.classList.add('off')
//   }
// }


// onclick
const btn = document.querySelector('.btn');
btn.addEventListener('onclick', function(event){
  console.log('This is a button!');
})
}

