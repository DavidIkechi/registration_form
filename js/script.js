window.onload = function() {
    let button_click = document.getElementById("submit");
    button_click.addEventListener("click", function(e) {
        var re = /\S+@\S+\.\S+/;
        let first_name = document.getElementById("fname").value;
        let last_name = document.getElementById("lname").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (!first_name.trim() ||
            !last_name.trim() ||
            !password.trim() ||
            re.test(email.trim()) == false
        ) {
            document.getElementById("form").className = "check";
        }
    });
};