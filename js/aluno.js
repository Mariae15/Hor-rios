document.getElementById("botao").addEventListener("click", () => {
  const turma = document.getElementById("turma").value;
  const grau = document.getElementById("Grau").value;
  const turno = document.getElementById("turno").value;

  if (!turma || !grau || !turno) {
    alert("Por favor, selecione todos os campos.");
    return;
  }

  // Monta o nome da página: ex: ds3manha.html
  const pagina = `turmas/${turma.toLowerCase()}${grau}${turno.toLowerCase()}.html`;

  // Verifica se a página existe? (opcional – requer backend). Aqui só redireciona:
  window.location.href = pagina;
});
