function showModal() {
    let modal = document.getElementById("modal");
    modal.style.visibility = "visible";
}

function closeModal() {
    let modal = document.getElementById("modal");
    modal.style.visibility = "hidden";
    let modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = "";
}

document.querySelectorAll(".feature").forEach((el) =>
    el.addEventListener("click", (e) => {
        showModal();
        let modalWrapper = document.getElementById("modal-wrapper");
        modalWrapper.className = "modal-image";

        let modalContent = document.getElementById("modal-content");

        let imageSrc = e.currentTarget.querySelector("img").currentSrc;

        let img = document.createElement("img");
        img.src = imageSrc;

        modalContent.appendChild(img);

        let modalClose = document.getElementById("modal-close");
        modalClose.addEventListener("click", () => {
            closeModal();
        });
    })
);

document.querySelectorAll(".btn-demo").forEach((el) =>
    el.addEventListener("click", (e) => {
        showModal();
        let modalWrapper = document.getElementById("modal-wrapper");
        modalWrapper.className = "modal-demo";

        let modalContent = document.getElementById("modal-content");

        let title = document.createElement("h1");
        title.innerText = "Закажете демо";
        title.style.cssText = `
            margin: 0px;
        `;
        modalContent.append(title);

        let description = document.createElement("p");
        description.innerText = "Пополнете го формуларот и ќе бидете контактирани од наша страна.";
        modalContent.append(description);

        let form = document.createElement("div");

        let nameInputGroup = document.createElement("div");
        nameInputGroup.className = "input-group";
        let nameLabel = document.createElement("label");
        nameLabel.innerText = "Име";
        nameInputGroup.append(nameLabel);
        let nameInput = document.createElement("input");
        nameInput.id = "demo-name";
        nameInputGroup.append(nameInput);
        form.append(nameInputGroup);

        let emailInputGroup = document.createElement("div");
        emailInputGroup.className = "input-group";
        let emailLabel = document.createElement("label");
        emailLabel.innerText = "Емаил";
        emailInputGroup.append(emailLabel);
        let emailInput = document.createElement("input");
        emailInput.id = "demo-email";
        emailInputGroup.append(emailInput);
        form.append(emailInputGroup);

        let phoneInputGroup = document.createElement("div");
        phoneInputGroup.className = "input-group";
        let phoneLabel = document.createElement("label");
        phoneLabel.innerText = "Телефон";
        phoneInputGroup.append(phoneLabel);
        let phoneInput = document.createElement("input");
        phoneInput.id = "demo-phone";
        phoneInputGroup.append(phoneInput);
        form.append(phoneInputGroup);

        form.append(document.createElement("br"));

        let buttonInputGroup = document.createElement("div");
        buttonInputGroup.className = "input-group";
        let button = document.createElement("button");
        button.innerText = "Испрати";
        button.className = "btn btn-small btn-blue";

        button.addEventListener("click", (event) => {
            let name = document.getElementById("demo-name").value;
            let email = document.getElementById("demo-email").value;
            let phone = document.getElementById("demo-phone").value;

            if (name !== "" && email !== "" && phone !== "") {
                let data = {
                    name,
                    email,
                    phone,
                };

                sendMail("/mail-demo", email, data, () => {
                    closeModal();
                });
            }
        });

        buttonInputGroup.append(button);

        form.append(buttonInputGroup);

        modalContent.appendChild(form);

        let modalClose = document.getElementById("modal-close");
        modalClose.addEventListener("click", () => {
            closeModal();
        });
    })
);

let messageButton = document.getElementById("message-send-button");
messageButton.addEventListener("click", (event) => {
    let emailEl = document.getElementById("contact-email");
    let messageEl = document.getElementById("contact-message");

    let data = {
        sender: emailEl.value,
        message: messageEl.value,
    };

    sendMail("/mail-message", data, messageEl.value, () => {
        emailEl.value = "";
        messageEl.value = "";
    });
});

async function sendMail(url, sender, data, callback) {
    if (isValidEmail(sender)) {
        try {
            showLoader();

            let result = await (
                await fetch(url, {
                    method: "POST",
                    // withCredentials: true,
                    // credentials: "include",
                    headers: {
                        Accept: "application/json",
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(data),
                })
            ).json();

            if (result.status == 200) {
                setMessage("success", result.message);
                callback();
            } else {
                setMessage("error", result.message);
            }

            hideLoader();
        } catch (err) {
            console.log("error", err);
        }
    } else {
        setMessage("error", "Внесете валидна емаил адреса");
    }
}

function showLoader() {
    document.getElementById("load-container").style.visibility = "visible";
    document.getElementById("loader").style.visibility = "visible";
}

function hideLoader() {
    document.getElementById("load-container").style.visibility = "hidden";
    document.getElementById("loader").style.visibility = "hidden";
}

function setMessage(type, message) {
    // console.log("message", message);
    let messageContainer = document.getElementById("message-container");

    // Set the content and color
    messageContainer.innerText = message;
    messageContainer.className = `message-${type}`;
    messageContainer.style.visibility = "visible";

    // // After 1 sec...
    setTimeout(() => {
        // start the fadeout that lasts 1 sec
        messageContainer.classList.add(`fadeOut`);

        // By the time the 1 sec fadeout is completed...
        setTimeout(() => {
            // be transitioned into the default element look
            messageContainer.style.visibility = "hidden";
            messageContainer.innerText = "";
        }, 1000); // how fast it fades out
    }, 1000); // after how long the fadeout starts
}

function isValidEmail(email) {
    regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
    return email.match(regex);
}
