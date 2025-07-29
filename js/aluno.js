document.getElementById("botao").addEventListener("click", () => {
  const turma = document.getElementById("turma").value;
  const grau = document.getElementById("Grau").value;
  const turno = document.getElementById("turno").value;

  if (!turma || !grau || !turno) {
    alert("Por favor, selecione todos os campos.");
    return;
  }

  const pagina = `turmas/${turma.toLowerCase()}${grau}${turno.toLowerCase()}.html`;

  window.location.href = pagina;
});
