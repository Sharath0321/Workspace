function saveData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "save_data.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("output").innerHTML = xhr.responseText;
        }
    };
    xhr.send("name=" + name + "&email=" + email);
}
