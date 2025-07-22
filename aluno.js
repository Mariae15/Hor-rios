// Exemplo de dados com base em turma + grau + turno
const horarios = {
  DS: {
    "1": {
      manha: "07:00 - 11:30",
      tarde: "13:00 - 17:30",
      noite: "18:30 - 22:00"
    },
    "2": {
      manha: "07:30 - 12:00",
      tarde: "13:30 - 18:00",
      noite: "18:00 - 21:30"
    },
    "3": {
      manha: "08:00 - 12:30",
      tarde: "13:00 - 17:30",
      noite: "18:15 - 22:15"
    }
  },
  ADM: {
    "1": {
      manha: "07:10 - 11:40",
      tarde: "13:20 - 17:50",
      noite: "18:20 - 22:10"
    },
    // ... adicione mais graus se quiser
  },
  // ... adicione BIO, PORTOS, REGULAR conforme necessário
};

// Manipular clique no botão
document.getElementById("botao").addEventListener("click", function () {
  const turma = document.getElementById("turma").value;
  const grau = document.getElementById("Grau").value;
  const turno = document.getElementById("turno").value;

  const resultadoDiv = document.getElementById("resultado");

  // Verifica se os dados existem
  if (horarios[turma] && horarios[turma][grau] && horarios[turma][grau][turno]) {
    const horario = horarios[turma][grau][turno];
    resultadoDiv.innerHTML = `<p><strong>Horário da turma:</strong> ${horario}</p>`;
  } else {
    resultadoDiv.innerHTML = `<p><strong>Horário não encontrado</strong> para essa combinação.</p>`;
  }
});
