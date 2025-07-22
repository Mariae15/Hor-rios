// Simulação dos horários do professor
const horarios = [
  { dia: "Segunda", horario: "08:00 - 09:00", turma: "DS1", status: "presente" },
  { dia: "Terça", horario: "10:00 - 11:00", turma: "ADM2", status: "presente" },
  { dia: "Quarta", horario: "13:00 - 14:00", turma: "BIO1", status: "presente" },
];

// Função para renderizar os horários na tabela
function renderizarHorarios() {
  const tbody = document.querySelector("#tabela-horarios tbody");
  tbody.innerHTML = "";

  horarios.forEach((aula, index) => {
    const tr = document.createElement("tr");

    const statusClass = aula.status === "ausente" ? "status-ausente" : "status-presente";
    const textoStatus = aula.status === "ausente" ? "Ausente" : "Presente";
    const textoBotao = aula.status === "ausente" ? "Marcar Presença" : "Marcar Ausência";
    const classeBotao = aula.status === "ausente" ? "presente" : "ausente";

    tr.innerHTML = `
      <td>${aula.dia}</td>
      <td>${aula.horario}</td>
      <td>${aula.turma}</td>
      <td class="${statusClass}">${textoStatus}</td>
      <td><button class="${classeBotao}" onclick="alternarStatus(${index})">${textoBotao}</button></td>
    `;

    tbody.appendChild(tr);
  });
}

// Alternar status de presença/ausência
function alternarStatus(index) {
  horarios[index].status = horarios[index].status === "presente" ? "ausente" : "presente";
  renderizarHorarios();
}

renderizarHorarios();
