$(window).on('load', function(){

    $('#homebtn').on('click', function(){
        openInfo(event, 'home')
    })

    $('#doc1btn').on('click', function(){
        openInfo(event, 'docs-1')
    })

    $('#pic1btn').on('click', function(){
        openInfo(event, 'pics-1')
    })

    $('#doc2btn').on('click', function(){
        openInfo(event, 'docs-2')
    })

    $('#pic2btn').on('click', function(){
        openInfo(event, 'pics-2')
    })
})

function openInfo(evt, tabname) {

    $('.section').hide();

    // Get all elements with class="tablinks" and remove the class "active"

    $('.navlinks').removeClass('active');
  
    // Show the current tab, and add an "active" class to the button that opened the tab

    var tempname = '#' + tabname;

    $(tempname).show();
    
    evt.currentTarget.className += " active";
}