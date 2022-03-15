
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
    annual_fee_init: '.annual_fee_init'
  }
});

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  console.log('filter clicked');
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// filter function
const filterFns = {
  visaCards: function() {
    let visaCards = $(this).find('.card_type').text();
      return visaCards.match( /VISA/ )
  },
  cardType: function() {
    let cardType = $(this).find('.card_type').text();
      return cardType.match( /Mastercard/ )
  }
}
