document.getElementById('submit').onclick = function () {

    var doSubmit = validateForm();

    if (doSubmit == false) {

        return false;
    }

}

function validateForm() {

    var nameFisrt = document.getElementById('nameFirst');
    var theValue = nameFisrt.value;

    if (theValue != 'Stefan') {

        console.log('Will this fire?');

        var messageHolder = document.getElementById('target');
        messageHolder.style.color = 'red';
        messageHolder.innerHTML = '<h2>Put in my name!</h2>';
        nameFisrt.select();
        //nameFirst.focus();

        return false;

        //console.log('Will this fore 2?');

    }
}