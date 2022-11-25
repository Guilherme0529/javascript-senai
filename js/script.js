function validar() {
    let nome = document.getElementById("nome").value;

    if (nome == "") {
        document.getElementById("nome").style.border = "2px solid #ff1a1a";
        document.getElementById("erroNome").style.display = "inline";
        return false;
    } else {
        document.getElementById("nome").style.border = "1px solid #858585";
        document.getElementById("erroNome").style.display = "none";
    }

    alert(nome);

    let email = document.getElementById("email").value;

    if (email == "") {
        document.getElementById("email").style.border = "2px solid #ff1a1a";
        document.getElementById("erroEmail").style.display = "inline";
        return false;
    } else {
        document.getElementById("email").style.border = "1px solid #858585";
        document.getElementById("erroEmail").style.display = "none";
    }
    alert(email);

    let aval = document.getElementById("aval").value;
    aval = parseInt(aval);

    if (aval < 1 || aval > 5) {
        document.getElementById("aval").style.border = "2px solid #ff1a1a";
        document.getElementById("erroAval").style.display = "inline";
        return false;
    } else {
        document.getElementById("aval").style.border = "1px solid #858585";
        document.getElementById("erroAval").style.display = "none";
    }
    alert("Avaliacao: " + aval);

    let aceite = document.getElementById("aceite").checked;
    console.log(aceite);

    if (aceite) {
        document.getElementById("erroAceite").style.display = "none";
    } else {
        document.getElementById("erroAceite").style.display = "inline";
        return false;
    }

    alert("Aceitado!");
}

function limpar() {
    document.getElementById("nome").style.border = "1px solid #858585";
    document.getElementById("email").style.border = "1px solid #858585";
    document.getElementById("aval").style.border = "1px solid #858585";

    document.getElementById("erroNome").style.display = "none";
    document.getElementById("erroEmail").style.display = "none";
    document.getElementById("erroAval").style.display = "none";
    document.getElementById("erroAceite").style.display = "none";
}