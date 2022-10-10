function show() {
  const contactList = document.getElementById("contact-list");
  console.log(contactList);

  const liTag = document.getElementsByTagName("li");
  console.log(liTag);

  const classElement = document.getElementsByClassName("contact-input");
  console.log(classElement);

  const elementName = document.getElementsByName("contact1");
  console.log(elementName);

  const contacts = document.querySelectorAll("#contact-list > li > label");
  console.log(contacts);

  const firstContact = document.querySelector("#contact-list > li > label");
  console.log(firstContact);
}
