function Person(name, surname, age, email) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.email = email;
}

function addToTable() {
  let PersonOne = new Person(
    document.getElementById("addName").value,
    document.getElementById("addSurname").value,
    document.getElementById("addage").value,
    document.getElementById("addemail").value
  );
  listPersons = document.getElementById("innerPersons");
  let tr = document.createElement("tr");
  //   let aggiungoTr = (tr.innerHTML = `<td>${currentName}</td>
  //   <td>${currentSurname}</td>
  //   <td>${currentAge}</td>
  //   <td>${currentMail}</td>`);
  //   aggiungoTr.appendChild(listPersons);
  let tdname = document.createElement("td");
  tdname.innerHTML = PersonOne.name;
  let tdsurname = document.createElement("td");
  tdsurname.innerHTML = PersonOne.surname;
  let tdage = document.createElement("td");
  tdage.innerHTML = PersonOne.age;
  let tdemail = document.createElement("td");
  tdemail.innerHTML = PersonOne.email;
  tr.appendChild(tdname);
  tr.appendChild(tdsurname);
  tr.appendChild(tdage);
  tr.appendChild(tdemail);
  listPersons.appendChild(tr);
}
