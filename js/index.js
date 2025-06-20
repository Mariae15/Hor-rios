document.addEventListener("DOMContentLoaded", function () {
    const btnAluno = document.getElementById("aluno");
    const btnPedagogia = document.getElementById("pedagogia");

    btnAluno.addEventListener("click", function () {
       window.location.href = 'aluno.html';
    });

    btnPedagogia.addEventListener("click", function () {
        window.location.href = 'pedagogia_login.html'; 
    });
});
