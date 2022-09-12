$(document).ready(function () {
    let count = 0;
    window.setInterval(function () {
        var classNumber = Math.floor(Math.random() * 10) + 1;
        $('body').append("<span id = " + count + " class =c" + classNumber +"> <div/>")
        $('#' + count).text("really sorry\n");
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
