$(document).ready(function() {
    $('#button').click(function() {
        var toDo = $('input[name=newToDo]').val();
        $(".list").append('<div class = "item">' + toDo + '</div>');
    });
    $(document).on('click', '.item', function() {
        $(this).remove();
    });
});
