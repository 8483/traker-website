document.querySelectorAll(".feature").forEach((el) =>
    el.addEventListener("click", (e) => {
        let imageSrc = e.currentTarget.querySelector("img").currentSrc;

        let picBox = document.getElementById("picBox");
        picBox.style.cssText = `
            display: flex;
            padding: 30px;
            background: rgba(0, 0, 0, 0.8);
            position: fixed;
            top:0;
            left:0;
            right:0;
            bottom:0;
            z-index: 100;
            justify-content: center;
        `;

        let img = document.createElement("img");
        img.src = imageSrc;
        img.style.cssText = `
            width: 70%; 
            height: auto;
            border-radius: 5px;
            align-self: center;
        `;
        picBox.appendChild(img);

        let picBoxClose = document.createElement("div");
        let picBoxCloseX = document.createElement("i");
        picBoxCloseX.className = "fas fa-times";
        picBoxClose.style.cssText = `
            position: absolute;
            font-size: 50pt;
            color: white;
            top: 10px;
            right: 20px;
            cursor: pointer;
        `;
        picBoxClose.addEventListener("click", () => {
            picBox.innerHTML = "";
            picBox.style.cssText = ``;
        });

        picBoxClose.appendChild(picBoxCloseX);

        picBox.appendChild(picBoxClose);
    })
);
