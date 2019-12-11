
var buttonList = document.getElementsByClassName('barIcon')
var elemList = document.getElementsByClassName('myBar');

document.addEventListener('DOMContentLoaded', init);

function init() {
    var i = 0;

    while (i < elemList.length) {
        buttonList[i].addEventListener('click', move);
        i++;
    }
}

function move() {
    var i = 0;

    var n = event.target.className.split(" ")[0];
    var value = event.target.className.split(" ")[1];


    console.log(n);

    if (i == 0) {
        i = 1;
        var elem = elemList[n];
        console.log(elem);
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= value) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
}
// // Form Submit // https://www.codebrainer.com/blog/contact-form-in-javascript
var fields = {};

document.addEventListener("DOMcontentLoaded", function () {
    fields.firstName = document.getElementById('fname');
    fields.lastName = document.getElementById('lname');
    fields.eMail = document.getElementById('email');
    fields.subject = document.getElementById('subject');
});

