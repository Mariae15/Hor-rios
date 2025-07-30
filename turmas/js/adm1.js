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
  "seg-07": { nome: "André", materia: "Arte" },
  "ter-07": { nome: "Adélio", materia: "Geografia" },
  "qua-07": { nome: "Sergio Tramujas", materia: "Biologia" },
  "qui-07": { nome: "Raquel", materia: "Lingua Portuguesa" },
  "sex-07": { nome: "Claudia", materia: "Matemática" },

  "seg-08": { nome: "Deise", materia: "Lingua Inglesa" },
  "ter-08": { nome: "André", materia: "Arte" },
  "qua-08": { nome: "Claudia", materia: "Matemática" },
  "qui-08": { nome: "Raquel", materia: "Lingua Portuguesa" },
  "sex-08": { nome: "Maicon Kehl", materia: "Filosofia" },

  "seg-09": { nome: "Ana Cristina", materia: "História" },
  "ter-09": { nome: "Ana Cristina", materia: "Projeto de Vida" },
  "qua-09": { nome: "Ana Cláudia", materia: "Física" },
  "qui-09": { nome: "Marcelo Vella", materia: "Quimica" },
  "sex-09": { nome: "Ricardo", materia: "Educ. Financeira" },

  "seg-10-2": { nome: "Sergio Tramujas", materia: "Biologia" },
  "ter-10-2": { nome: "Juciane", materia: "Ed. Física" },
  "qua-10-2": { nome: "Ana Cláudia", materia: "Física" },
  "qui-10-2": { nome: "Ricardo", materia: "PrAdm" },
  "sex-10-2": { nome: "Marcos Souza", materia: "C e V" },

  "seg-11": { nome: "Deise", materia: "Lingua Inglesa" },
  "ter-11": { nome: "Juciane", materia: "Ed. Física" },
  "qua-11": { nome: "Adélio", materia: "Geografia" },
  "qui-11": { nome: "Ana Cristina", materia: "Projeto de Vida" },
  "sex-11": { nome: "Maicon Kehl", materia: "Filosofia" },

  "seg-12": { nome: "Ana Cristina", materia: "História" },
  "ter-12": { nome: "Raquel", materia: "Lingua Portuguesa" },
  "qua-12": { nome: "Claudia", materia: "Matemática" },
  "qui-12": { nome: "Marcelo Vella", materia: "Quimica" },
  "sex-12": { nome: "Ricardo", materia: "PrAdm" }
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