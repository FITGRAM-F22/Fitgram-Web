$(document).ready(() => {
    const $menuButton = $('.menu-button');
    const $navDropdown = $('#nav-dropdown');
    $navDropdown.hide();
  
    $menuButton.on('click', () => {
      $navDropdown.toggle();
    })
})