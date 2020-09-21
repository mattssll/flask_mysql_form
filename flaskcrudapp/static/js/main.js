const btnDelete = document.querySelectorAll('.btn-delete');

if(btnDelete) {
    const btnArray = Array.from(btnDelete);
    btnArray.forEach((btn => {
        btn.addEventListener('click', (e) => {
            if(!confirm("Are you sure you want to delete it?")) {
                e.preventDefault();
            }
        })
    }))
}

function validateForm() {
    var x = document.forms["myformadd"]["fullname"].value;
    var y = document.forms["myformadd"]["phone"].value;
    var z = document.forms["myformadd"]["email"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    if (y == "") {
        alert("Phone must be filled out");
        return false;
      }
      if (z == "") {
        alert("Email must be filled out");
        return false;
      }
      if(!(z.includes('@'))) {
          alert("'@' is missing")
          return false
      }
  }
