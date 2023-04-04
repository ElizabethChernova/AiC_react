

//import nodemailer from "nodemailer";

function preparePage() {
    $(document).ready(function () {
        $('form').submit(function (event) {
            event.preventDefault();
            let firstName = $('#first_name').val();
            let surname = $('#surname').val();
            let fatherName = $('#father_name').val();
            let email_add = $('#email').val();
            if (firstName.length < 1 || surname.length < 1 || fatherName < 1 || email_add < 1) {
                alert("Fields can not be empty");
                return;
            } else {
                let user = {
                    firstName: firstName,
                    surname: surname,
                    fatherName: fatherName,
                    email: email_add

                }

                let xhr = new XMLHttpRequest();
                let url = 'http://localhost:8888/emails';
                xhr.open("POST", url, true);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.send(JSON.stringify(user));
                prepareData()
            }
        });
    });
}



function prepareData() {
    fetch('http://localhost:8888/emails')
        .then(response => response.json())
        .then(emails => {
            const emailTable = document.getElementById('email_table');
            const tbody = document.createElement('tbody');
            tbody.id="email_list"
            emails.forEach(email => {
                let current_id = email._id;
                const tr = document.createElement('tr');
                tr.innerHTML = `
                        <td>${email.surname}</td>
                        <td>${email.firstName}</td>
                        <td>${email.fatherName}</td>
                        <td>${email.email}</td>
                        <td>
                        <button class="btn btn-sm btn-primary edit-email" onclick="editUser('${current_id}')">Edit</button> 
                        <button class="btn btn-sm btn-danger delete-email" onclick="deleteUser('${current_id}')">Delete</button>
                        </td>
        `               ;
                tbody.appendChild(tr);
            });
            emailTable.removeChild(document.getElementById("email_list"));
            emailTable.appendChild(tbody);
        });
}


function deleteUser(id){
    console.log(id)
    $.ajax({
        url: "http://localhost:8888/emails/" + id,
        method: "DELETE",
        success: function (){
            prepareData()
        }
    });
}

function editUser(id){
    console.log("Edit");
    localStorage["email_id"] = id;
    document.location = 'editForm.html';
}

function sendMails(){
    document.getElementById('send_email').addEventListener('click', function() {
        let table = document.getElementById('email_table');
        let emailList = table.querySelectorAll('tbody tr td:nth-child(4)');
        let emails = [];
        for (let i = 0; i < emailList.length; i++) {
            emails.push(emailList[i].textContent);
        }

        let data = {
            emails : emails,
            subject : document.getElementById("spamInput").value,
            title : document.getElementById("titleInput").value,
        }

        let xhr = new XMLHttpRequest();
        let url = 'http://localhost:8888/emails/spam';
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
        alert("Emails successfully delivered");

    });

}

function chooseMessage() {
    document.getElementById("titleInput").value = "";
    document.getElementById("spamInput").value = "";
    let val = document.getElementById("chooseBasicSpam").value;
    document.getElementById("titleInput").value = val;
    switch (val){
        case "Greeting": {
            document.getElementById("spamInput").value = "Hello, user!";
            break;
        }
        case "Advertisement": {
            document.getElementById("spamInput").value = "Discover a world of imagination and knowledge at BestBooks. From classic literature to the latest bestsellers, we've got something for everyone. Come and explore our shelves today!";
            break;
        }
        case "Blank": {
            document.getElementById("spamInput").value = "";
            break;
        }
    }

}

preparePage();
prepareData();
sendMails();
