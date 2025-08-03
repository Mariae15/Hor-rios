const firebaseConfig = {
  apiKey: "AIzaSyD84jgoHZ72CYlBLDoXcDf-HOHMTNkEz8s",
  authDomain: "cadastro-69a82.firebaseapp.com",
  databaseURL: "https://cadastro-69a82-default-rtdb.firebaseio.com",
  projectId: "cadastro-69a82",
  storageBucket: "cadastro-69a82.appspot.com",
  messagingSenderId: "1082172217927",
  appId: "1:1082172217927:web:573cd5a9cbe19a570aef62"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log("Firebase Carregado");
}

const mapaHorario = {
  "07:30": "07",
  "08:20": "08",
  "09:10": "09",
  "10:20": "10-2",
  "11:10": "11",
  "12:00": "12"
};

const diaMapeado = {
  "Segunda": "seg",
  "Terça": "ter",
  "Quarta": "qua",
  "Quinta": "qui",
  "Sexta": "sex"
};

function salvarPresencaNoFirestore(professor) {
  const horarioID = mapaHorario[professor.horario];
  const diaID = diaMapeado[professor.dia];

  const idCelula = `${diaID}-${horarioID}`;

firebase.firestore().collection("presencas").doc(idCelula).set({
  nome: professor.nome,
  dia: professor.dia,
  turma: professor.turma,
  matéria: professor.matéria,
  horário: professor.horario,
  status: professor.status,
  idCelula: idCelula,
  data: new Date()
})
.then(() => {
  console.log("Presença salva (ou atualizada) com sucesso!");
})
.catch((error) => {
  console.error("Erro ao salvar presença:", error);
});

}

const professores = [
  { nome: "Gabriel", dia: "Segunda", turma: "DS3", matéria: "Programação Des. de Sist.", horario: "10:20", status: "presente" },
  { nome: "Gabriel", dia: "Segunda", turma: "DS1", matéria: "Int Pr", horario: "11:10", status: "presente" },
  { nome: "Gabriel", dia: "Segunda", turma: "DS1", matéria: "Int Pr", horario: "12:00", status: "presente" },
  { nome: "Gabriel", dia: "Quinta", turma: "DS3", matéria: "Programação Des. de Sist.", horario: "10:20", status: "presente" },
  { nome: "Gabriel", dia: "Quinta", turma: "DS3", matéria: "Programação Des. de Sist.", horario: "11:10", status: "presente" },
  { nome: "Gabriel", dia: "Sexta", turma: "DS2", matéria: "Banco de Dados", horario: "08:20", status: "presente" },
  { nome: "Gabriel", dia: "Sexta", turma: "DS2", matéria: "Banco de Dados", horario: "09:10", status: "presente" },
  { nome: "Gabriel", dia: "Sexta", turma: "DS3", matéria: "Programação Des. de Sist.", horario: "12:00", status: "presente" }
];

const lista = document.getElementById("lista-professores");

function renderizarTabela() {
  lista.innerHTML = "";
  professores.forEach((professor, index) => {
    const linha = document.createElement("tr");

    linha.innerHTML = `
      <td>${professor.dia}</td>
      <td>${professor.turma}</td>
      <td>${professor.matéria}</td>
      <td>${professor.horario}</td>
      <td class="status" id="status-${index}">${professor.status || "-"}</td>
      <td>
        <button class="presente" onclick="marcarPresenca(${index}, 'presente')">Presente</button>
        <button class="ausente" onclick="marcarPresenca(${index}, 'ausente')">Ausente</button>
      </td>
    `;

    lista.appendChild(linha);
  });
}

function marcarPresenca(index, status) {
  professores[index].status = status;
  renderizarTabela();
  salvarPresencaNoFirestore(professores[index]);
}

// Inicializa a tabela ao carregar
renderizarTabela();
