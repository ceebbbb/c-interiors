function validateForm() {

    let namef = document.forms["enquiryform"]["fname"].value;
    if (namef == "") {
      alert("First Name must be filled out");
      return false;
    }

    let namel = document.forms["enquiryform"]["lname"].value;
    if (namel == "") {
      alert("Last Name must be filled out");
      return false;
    }

    let email = document.forms["enquiryform"]["email"].value;
    if (email == "") {
      alert("Email Address must be filled out");
      return false;
    }

    let contactn = document.forms["enquiryform"]["contactno"].value;
    if (contactn == "") {
      alert("Contact Number must be filled out");
      return false;
    }

    let colours = document.forms["enquiryform"]["colours"].value;
    if (colours == "") {
      alert("Colours must be selected");
      return false;
    }

    let design = document.forms["enquiryform"]["design"].value;
    if (design == "") {
      alert("Please write something regarding your design requirements");
      return false;
    }

  }