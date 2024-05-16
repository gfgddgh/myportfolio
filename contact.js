let scriptURL = "https://script.google.com/macros/s/AKfycby_Wiwo7Rx_7l5CvK5FKVTr4nNdXMTbR6vvdJHt00USxvo4kPGg2bZdhQBA-ob9dzRx/exec";
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById("send").textContent = "Please wait...";
    document.getElementById("send").disabled = true;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            document.getElementById("send").textContent = "Send Succesfuly🤩";
            setTimeout(() => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                document.getElementById("send").textContent = "Send";
                document.getElementById("send").disabled = false;
            }, 3500);
        }).catch(error => {
            document.getElementById("send").textContent = "Please Try Again😘"
            document.getElementById("send").disabled = false;
        });
});