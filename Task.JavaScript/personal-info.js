
const intialFirstName = "John"
const intialLastName = "Brown"
const intialEmail = "john.brown@gmail.com"
const placeHolderImage = "assets/img/avatar-placeholder.png"

document.getElementById("personal-input-firstname-id").value = intialFirstName
document.getElementById("personal-input-lastname-id").value = intialLastName
document.getElementById("personal-email-input").value = intialEmail


function handleChange() {
    document.getElementById("personal-info-cancel").classList.remove("disabled");
    document.getElementById("personal-info-save").classList.remove("disabled");
}

function handleCancel() {
    document.getElementById("personal-input-firstname-id").value = intialFirstName
    document.getElementById("personal-input-lastname-id").value = intialLastName
    document.getElementById("personal-email-input").value = intialEmail
    document.getElementById("personal-info-cancel").classList.add("disabled");
    document.getElementById("personal-info-save").classList.add("disabled");
}

function handleSave() {
    document.getElementById("modal-updated").classList.remove("d-none");
    document.getElementById("personal-info-cancel").classList.add("disabled");
    document.getElementById("personal-info-save").classList.add("disabled");
}

function handleImage() {
    const fileData = document.getElementById("add-user-photo").files[0];
    document.getElementById("new-profile-photo").src = (window.URL ? URL : webkitURL).createObjectURL(fileData);;
    console.log("fileData", fileData);

}


function handleDeleteImage() {
    document.getElementById("new-profile-photo").src =placeHolderImage

}


