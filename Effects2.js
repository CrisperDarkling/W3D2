$(document).ready(function() {
    // $("h1").on("click", function() {
    //     $(".para").toggle();
    // });
    
    $("h1").on("click", function() {
        $(".para").slideDown(1000);
    });
    // ;........................... in milliseconds...................
    
    // $("h1").on("click", function() {
    //     $(".para").toggle(slide);
    // });.................dope af side slide thing...................
    
    
    
    $("h1").on("click", function() {
        $(".para").fadetoggle(2000);
    });
    
});



// para {
//     display:none;
// }.....................in .html.....................................




$(document).ready(function() {
    $("h1").on("click", function() {
        while(true)
            $(".para").slideUp(1500).slideDown(1500);

});

//     $("h1").on("click", function() {
//         for (var i=0 i<=10; i++);{
//             $(".para").slideUp(1500).slideDown(1500);
//         }

//  });................................Sliding Loop


        $("h1").on("click", function() {
            if ($("img").attr("src") == "1.png") {
                $("img").attr("src", "2.png")
            } else {
                alert("It's already the right image!");
            }
    });
})
...................................................................

