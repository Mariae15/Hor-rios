document.addEventListener("DOMContentLoaded", function () {
    const btnAluno = document.getElementById("aluno");
    const btnPedagogia = document.getElementById("pedagogia");

    btnAluno.addEventListener("click", function () {
       window.location.href = 'aluno.html'; // substitua pelo link correto
    });

    btnPedagogia.addEventListener("click", function () {
        window.location.href = 'pedagogia_login.html'; // substitua pelo link correto
    });
});
