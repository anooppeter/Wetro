$('.cd-search-trigger').on('click', function(event){
    event.preventDefault();
    toggleSearch();
});

function toggleSearch(type) {
    if(type=="close") {
        //close serach 
        $('.cd-search').removeClass('is-visible');
        $('.cd-search-trigger').removeClass('search-is-visible');
        $('.cd-overlay').removeClass('search-is-visible');
    } else {
        //toggle search visibility
        $('.cd-search').toggleClass('is-visible');
        $('.cd-search-trigger').toggleClass('search-is-visible');
        $('.cd-overlay').toggleClass('search-is-visible');
        if(windowT.width() > MqL && $('.cd-search').hasClass('is-visible')) $('.cd-search').find('input[type="search"]').focus();
        ($('.cd-search').hasClass('is-visible')) ? $('.cd-overlay').addClass('is-visible') : $('.cd-overlay').removeClass('is-visible') ;
    }
}