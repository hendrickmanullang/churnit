
// isotope

const $ = require('jquery');
const jQueryBridget = require('jquery-bridget');
const Isotope = require('isotope-layout');
jQueryBridget( 'isotope', Isotope, $ );

// bind sort button click
$('#sorts').on( 'click', 'button', function() {
  const sortValue = $(this).attr('data-sort-value');
  $grid.isotope({ sortBy: sortValue });
  console.dir(sortValue);
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  const $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
// sorting function
const $grid = $('.grid').isotope({
  itemSelector: '.credit-card-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    reward_rate: '.reward_rate',
    interest_free_period: '.interest_free_period toExponential(2)',
    annual_fee_init: '.annual_fee_init',
  }
});

$('#filters').on( 'click', 'button', function() {
  let filterValue = $( this ).attr('data-filter');
  $grid.isotope( { filter: filterValue});
});
