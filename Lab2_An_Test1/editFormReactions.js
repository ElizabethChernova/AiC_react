let email_id =  localStorage["email_id"];


function prepareData(){
    jQuery.ajax({
        url:`http://localhost:8888/emails/${email_id}`,
        type:'GET',
        success : function (json) {
            console.log("array - " + json);
            $("#edit_first_name").val((json.firstName));
            $("#edit_surname").val((json.surname));
            $("#edit_father_name").val((json.fatherName));
            $("#edit_email").val((json.email));
        }
    });

}

function saveChanges(){
    $('form').submit(function (event) {
        event.preventDefault();
        const name = $('#edit_first_name').val();
        const surname = $('#edit_surname').val();
        const fatherName = $('#edit_father_name').val();
        const email = $('#edit_email').val();

        let js = {
            firstName: name,
            surname: surname,
            fatherName: fatherName,
            email: email
        }
        console.log("Done1")
        let xhr = new XMLHttpRequest();
        let url = `http://localhost:8888/emails/:${email_id}`;
        xhr.open("PUT", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(js));
        console.log("Done")
        document.location = 'index.html';
    });

}

prepareData();
saveChanges();
