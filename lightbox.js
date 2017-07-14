$(document).ready(function($) {

    //has to be link to the css for example http://localhost:8888/lightbox/lightbox.css
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'Put your link here') );

    $('body').append('<p><a href="#ct" class="lightbox_trigger">Lightbox Example</a></p>');

    $('.lightbox_trigger').click(function(e) {

        //prevent default action (hyperlink)
        e.preventDefault();



        if ($('#lightbox').length > 0) {


            $('#content').html('<div class="ctbox">Lightbox example</div>');

            //show lightbox window - you could use .show('fast') for a transition
            $('#lightbox').show();
        }

        else {

            var ct =
                '<div id="lightbox">' +
                '<p>Click to close</p>' +
                '<div id="content">' + //insert clicked link's href into img src
                '<div id="ctbox">Lightbox example</div>' +
                '</div>' +
                '</div>';

            //insert lightbox HTML into page
            $('body').append(ct);
        }

    });

    $(document).on('click', '#lightbox', function() {
        $('#lightbox').hide();
    });

});
