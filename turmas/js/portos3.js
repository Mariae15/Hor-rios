 const firebaseConfig = {
    apiKey: "AIzaSyD84jgoHZ72CYlBLDoXcDf-HOHMTNkEz8s",
    authDomain: "cadastro-69a82.firebaseapp.com",
    databaseURL: "https://cadastro-69a82-default-rtdb.firebaseio.com",
    projectId: "cadastro-69a82",
    storageBucket: "cadastro-69a82.firebasestorage.app",
    messagingSenderId: "1082172217927",
    appId: "1:1082172217927:web:573cd5a9cbe19a570aef62"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log("Firebase Carregado");
}

const gradeAulas = {
  "seg-07": { nome: "Natacha", materia: "Lingua Portuguesa" },
  "ter-07": { nome: "Janete Scremin", materia: "Regulamentação Aduaneira" },
  "qua-07": { nome: "Lucio", materia: "Higi. e Seg. do Trab." },
  "qui-07": { nome: "Janete Scremin", materia: "Logística de Cargas" },
  "sex-07": { nome: "Janete Scremin", materia: "Regulamentação Aduaneira" },

  "seg-08": { nome: "Maria Eduarda", materia: "Projeto de Vida" },
  "ter-08": { nome: "Janete Scremin", materia: "Regulamentação Aduaneira" },
  "qua-08": { nome: "Lucio", materia: "Higi. e Seg. do Trab." },
  "qui-08": { nome: "Janete Scremin", materia: "Logística de Cargas" },
  "sex-08": { nome: "Janete Scremin", materia: "Regulamentação Aduaneira" },

  "seg-09": { nome: "Natacha", materia: "Lingua Portuguesa" },
  "ter-09": { nome: "Mario", materia: "Ed. Física" },
  "qua-09": { nome: "Bruno", materia: "Operações com Cargas" },
  "qui-09": { nome: "Mario", materia: "Ed. Física" },
  "sex-09": { nome: "Delane", materia: "Física" },

  "seg-10-2": { nome: "Alexandre", materia: "Transp. Maritímo" },
  "ter-10-2": { nome: "Janete Scremin", materia: "Les. Port." },
  "qua-10-2": { nome: "Bruno", materia: "Operações com Cargas" },
  "qui-10-2": { nome: "Claudia", materia: "Educ. Financeira" },
  "sex-10-2": { nome: "Maxwel", materia: "Adm. Portuária" },

  "seg-11": { nome: "Juliana", materia: "Matemática" },
  "ter-11": { nome: "Natacha", materia: "Recomp. Aprend. Port." },
  "qua-11": { nome: "Alexandre", materia: "Transp. Maritímo" },
  "qui-11": { nome: "Juliana", materia: "RAM" },
  "sex-11": { nome: "Bruno", materia: "Operações com Cargas" },

  "seg-12": { nome: "Juliana", materia: "Matemática" },
  "ter-12": { nome: "Natacha", materia: "Recomp. Aprend. Port." },
  "qua-12": { nome: "Alexandre", materia: "Transp. Maritímo" },
  "qui-12": { nome: "Juliana", materia: "RAM" },
  "sex-12": { nome: "Maxwel", materia: "Adm. Portuária" }
}

for (const id in gradeAulas) {
  const cell = document.getElementById(id);
  if (cell) {
    const aula = gradeAulas[id];
    cell.innerHTML = `<strong>${aula.materia}</strong><br><small>${aula.nome}</small>`;
    cell.classList.add("presente");
  }
}

firebase.firestore()
  .collection("presencas")
  .onSnapshot((snapshot) => {
    snapshot.forEach((doc) => {
      const dados = doc.data();

      console.log("Presença recebida:", dados);

      if (dados.turma === "") {
        const celula = document.getElementById(dados.idCelula);
        if (celula) {
          celula.innerHTML = `<strong>${dados.matéria}</strong><br><small>${dados.nome}</small>`;

          celula.classList.remove("presente", "ausente");

          const status = dados.status?.trim().toLowerCase();

          if (status === "ausente") {
            celula.classList.add("ausente");
          } else if (status === "presente") {
            celula.classList.add("presente");
          } else {
            console.warn("Status desconhecido:", status);
          }
        }
      }
    });
  });