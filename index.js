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
  let tdname = document.createElement("td");
  tdname.innerHTML = PersonOne.name;
  tr.appendChild(tdname);
  let tdsurname = document.createElement("td");
  tdsurname.innerHTML = PersonOne.surname;
  tr.appendChild(tdsurname);
  let tdage = document.createElement("td");
  tdage.innerHTML = PersonOne.age;
  tr.appendChild(tdage);
  let tdemail = document.createElement("td");
  tdemail.innerHTML = PersonOne.email;
  tr.appendChild(tdemail);
  listPersons.appendChild(tr);
  //   let aggiungoTr = (tr.innerHTML = `<td>${currentName}</td>
  //   <td>${currentSurname}</td>
  //   <td>${currentAge}</td>
  //   <td>${currentMail}</td>`);
  //   aggiungoTr.appendChild(listPersons);
}
