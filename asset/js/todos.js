//checkoff(linethrough) specfic todos by clicking
$('ul').on("click", "li", function () { 
    $(this).toggleClass("completed");
});

// click on X to delete to do
$("ul").on("click", "span",function (e) { 
    $(this).parent().fadeOut( 500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//add type new todo and press enter to add

$("input[type='text']").keypress(function (e) { 
    if(e.which === 13){
        //grabing new to do from nput
        var todotext= $(this).val();
        $(this).val("");
        //create new li and add to ul
        $('ul').append("<li><span><i class='fa fa-trash'></i></span>"+ todotext+"</li>");
    }
});

$("#hideSwitch").click(function () { 
    $("input[type='text']").fadeToggle(); 
    $(this).toggleClass("fa-minus fa-plus");

});