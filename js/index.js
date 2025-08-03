document.addEventListener("DOMContentLoaded", function () {
    const btnAluno = document.getElementById("aluno");
    const btnProfessores = document.getElementById("professores");
    const btnPedagogia = document.getElementById("pedagogia");

    btnAluno.addEventListener("click", function () {
       window.location.href = 'aluno.html'; 
    });

    btnProfessores.addEventListener("click", function () {
        window.location.href = 'professores_login.html'; 
    });

    btnPedagogia.addEventListener("click", function () {
        window.location.href = 'pedagogia_login.html'; 
    });
});
