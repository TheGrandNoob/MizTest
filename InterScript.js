var TitleName;
$(".popUpMenuM").fadeOut(0);
$(".popUpMenuG").fadeOut(0);
$(document).ready(function($) {
    $(".Po_Gorodu").hover(function()
    {
        $(".popUpMenuG").fadeIn(0);
    },function()
    {
        $(".popUpMenuG").fadeOut(10);
    });
    $(".popUpMenuG").hover(function()
    {
        $(".popUpMenuG").fadeIn(0);
    },function()
    {
        $(".popUpMenuG").fadeOut(10);
    });
    $(".PoMecinatu").hover(function()
    {
        $(".popUpMenuM").fadeIn(0);
    },function()
    {
        $(".popUpMenuM").fadeOut(10);
    });
    $(".popUpMenuM").hover(function()
    {
        $(".popUpMenuM").fadeIn(0);
    },function()
    {
        $(".popUpMenuM").fadeOut(10);
    });
    $(".Viktorina").click(function(){
        window.location.replace("GamesHub.html")
    });
    $(".searchElem").hover(function()
    {
        var $SearchElem = $(this);
        var $Elementbuffer = $SearchElem.attr("fregion") ; 
        var Rg = document.getElementById($Elementbuffer);
        Rg.style.fill = "#4169E1";  
    },
    function()
    {
        var $SearchElem = $(this);
        var $Elementbuffer = $SearchElem.attr("fregion") ; 
        var Rg = document.getElementById($Elementbuffer);
        Rg.style.fill = "#05316D"
    });
    $(".tiles").hover(function(e){
        $('#Hint').text(e.clientX + ' ' + e.clientY);
        $('#Hint').css(
        {
            'left': e.clientX + 10, 
            'top': e.clientY + 10,
            "z-index":1000,
        });
        $('#Hint').show().text("hint");
    });
    $(".searchElem").click(function()
    {
        $(".popup-fade").fadeIn();
        $("#ModalWindow").fadeIn();
    });

    $("#ExitBtn").click(function()
    {
        $(".popup-fade").fadeOut();
        $("#ModalWindow").fadeOut();
        
    });
   
    $(".tiles").click(function()
    {
        $(".popup-fade").fadeIn();
        $("#ModalWindow").fadeIn();
        var ModalHeader = document.getElementById("ModalHeader");
        //ModalHeader.innerHTML  = $(this).attr('id'); 
        var p = $(this).attr('id') + ".txt";
    });

    $(".searchElemM").click(function()
    {
        $Miz = $(this);
        window.location.replace($Miz.attr("site"));
        
    });
});

//<script src="InterScript.js"></script>