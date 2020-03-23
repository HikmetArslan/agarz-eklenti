function myFunction() {
    /* Get the text field */
    document.getElementById("code").select();
    document.execCommand('copy');

    /* Alert the copied text */
    alert("Başarıyla kopyalandı! " + document.getElementById("cod2").getAttribute("key"));
}