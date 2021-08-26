const table = document.getElementById("table");


const createRecord = () => {
    const userName = document.getElementById("username").value
    const userEmail = document.getElementById("email").value
    const row = document.createElement("tr");
    const nameTd = document.createElement("td");
    nameTd.innerText = userName;
    const emailTd = document.createElement("td");
    emailTd.innerText = userEmail;
    row.appendChild(nameTd);
    row.appendChild(emailTd);
    table.appendChild(row);
    userName = ""
    userEmail = ""
};
