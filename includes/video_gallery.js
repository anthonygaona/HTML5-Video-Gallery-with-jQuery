$(function() {
    $('a.videoLink').each(function() {

        var thumbnailFilePath = 'video/' + $(this).attr('videofile') + ".jpg";
        var videoCaption = $(this).attr('videocaption');

        $(this).css('background-image', 'url(' + thumbnailFilePath + ')');
        $(this).html('<div class="caption">' + videoCaption + "</div><img src='images/play_icon.png' class='play' />")

    });//Each loop

    

});//DOM Ready