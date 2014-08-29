// When DOM is fully loaded
jQuery(document).ready(function($) {

  // Disable certain links in docs
  $('section [href^=#]').click(function (e) {
    e.preventDefault()
  });

  // Sidebar
  $('.sidenav').affix({
    offset: {
      top: 50,
      bottom: 270
    }
  });

  $('a[data-toggle="tab"]').on('shown', function (e) {
    $('body').scrollspy('refresh');
  });

  // Make code pretty
  prettyPrint();
});