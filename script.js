const form = document.getElementId("registrationForm");
const message=document.getElementaryById("formMesage");

form.addEventListener("submit",function(event){
    event.preventDefault();

    const selectedActivities=form.querySelectorAll('input[name="activities"]:checked');
    