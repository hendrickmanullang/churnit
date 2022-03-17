import Isotope from 'isotope-layout'


const initIsotope = (grid) => {
  return new Isotope(grid, {
    itemSelector: '.credit-card-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      // reward_rate: '.reward_rate parseInt',
      reward_rate: (itemElem) => {
        const rate = parseInt(itemElem.querySelector('.reward_rate').innerText, 10)
        return -rate
      },
      interest_free_period: (item) => {
        const period = parseInt(item.querySelector('.interest_free_period').innerText, 10)
        return -period
      },
      annual_fee_init: (item) => {
        const fee = parseInt(item.querySelector('.annual_fee_init').innerText, 10)
        return fee
      }
    }
  })
}

const initSortButtons = (iso) => {
  const buttons = document.querySelectorAll('#sorts button')
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const sortMethod = e.currentTarget.dataset.sortValue
      iso.arrange({sortBy: sortMethod})
    })
  })
}

const initFilterButtons = (iso) => {
  const buttons = document.querySelectorAll('#filters button')
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const filterValue = e.currentTarget.dataset.filter
      iso.arrange({filter: filterValue})
    })
  })
}

document.addEventListener('turbolinks:load', () => {
  const grid = document.querySelector('.grid')
  const iso = initIsotope(grid)
  initSortButtons(iso)
  initFilterButtons(iso)
  const buttonGroups = document.querySelectorAll('.button-group');
  for ( let i=0, len = buttonGroups.length; i < len; i++ ) {
    let buttonGroup = buttonGroups[i];
    radioButtonGroup( buttonGroup );
  }
})
// change is checked

function radioButtonGroup( buttonGroup ) {
  buttonGroup.addEventListener( 'click', (e) => {
    buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
    e.target.classList.add('is-checked');
  });
}



// isotope

// const $ = require('jquery');
// const jQueryBridget = require('jquery-bridget');
// const Isotope = require('isotope-layout');
// jQueryBridget( 'isotope', Isotope, $ );


// $(window).on("load", function() {
//   // weave your magic here.
//   var $grid = $('.grid').isotope({
//     itemSelector: '.credit-card-item',
//     layoutMode: 'fitRows',
//     getSortData: {
//       annualFeeInit: '.annual parseInt',
//       // name: '.name',
//       // reward_rate: '.reward_rate',
//       // interest_free_period: '.interest_free_period toExponential(2)',
//     }
//   });

//   // bind sort button click
//   const sortButtons = document.querySelectorAll('#sorts button')
//   sortButtons.forEach((button) => {
//     button.addEventListener('click', (e) => {
//       const sortValue = e.currentTarget.dataset.sortValue
//       debugger
//       $grid.isotope({ sortBy: sortValue })
//     })
//   })
  // $('#sorts').on( 'click', 'button', function() {
  //   const sortValue = $(this).attr('data-sort-value');
    // bind sort button click
  // $('#sorts button').on( 'click', 'button', function() {
  //   // const sortValue = $(this).attr('data-sort-value');
  //   debugger
  //   // $grid.isotope({ sortBy: sortValue });
  // });
  // change is-checked class on buttons
  // $('.button-group').each( function( i, buttonGroup ) {
  //   const $buttonGroup = $( buttonGroup );
  //   $buttonGroup.on( 'click', 'button', function() {
  //     $buttonGroup.find('.is-checked').removeClass('is-checked');
  //     $( this ).addClass('is-checked');
  //   });
  // });
  // // sorting function

  // // layout Isotope after each image loads


  // $('#filters').on( 'click', 'button', function() {
  //   let filterValue = $( this ).attr('data-filter');
  //   $grid.isotope( { filter: filterValue});
  // });

  //   $grid.isotope({ sortBy: sortValue });
  // });
  // // change is-checked class on buttons
  // $('.button-group').each( function( i, buttonGroup ) {
  //   const $buttonGroup = $( buttonGroup );
  //   $buttonGroup.on( 'click', 'button', function() {
  //     $buttonGroup.find('.is-checked').removeClass('is-checked');
  //     $( this ).addClass('is-checked');
  //   });
  // });
  // sorting function

  // $('#filters').on( 'click', 'button', function() {
  //   let filterValue = $( this ).attr('data-filter');
  //   $grid.isotope( { filter: filterValue});
  // });

// });

// const $grid = $('.grid').isotope({
//   itemSelector: '.credit-card-item',
//   layoutMode: 'fitRows',
//   getSortData: {
//     name: '.name',
//     reward_rate: '.reward_rate',
//     interest_free_period: '.interest_free_period toExponential(2)',
//     annual_fee_init: '.annual_fee_init',
//   }
// });
