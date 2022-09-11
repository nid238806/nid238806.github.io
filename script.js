$(document).ready(function () {
    let count = 0;
    window.setInterval(function () {
        $('body').append("<span id = " + count + "> <div/>")
        $('#' + count).text("Sorry\n");
        count += 1;
    }, 200);
});


// $(document).ready(function () {
//     let count = 0;
//     window.setInterval(function () {
//         $('#element').append("<div id = " + count + "> <div/>")
//         $('#' + count).typeIt({
//             strings: ["test"],
//             speed: 80
//         });
//         count += 1;
//     }, 4000);
// });
