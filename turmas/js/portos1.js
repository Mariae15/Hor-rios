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
  "seg-07": { nome: "Sergio Tramujas", materia: "Biologia" },
  "ter-07": { nome: "Raquel", materia: "Lingua Portuguesa" },
  "qua-07": { nome: "Luciano", materia: "Informática" },
  "qui-07": { nome: "Maicon Kehl", materia: "Filosofia" },
  "sex-07": { nome: "Patricia", materia: "Matemática" },

  "seg-08": { nome: "Valdecir", materia: "História" },
  "ter-08": { nome: "Juciane", materia: "Ed. Física" },
  "qua-08": { nome: "Deise", materia: "Lingua Inglesa" },
  "qui-08": { nome: "Sergio Tramujas", materia: "Biologia" },
  "sex-08": { nome: "Ricardo", materia: "Educ. Financeira" },

  "seg-09": { nome: "Valdecir", materia: "História" },
  "ter-09": { nome: "Juciane", materia: "Ed. Física" },
  "qua-09": { nome: "Marcelo Vella", materia: "Quimica" },
  "qui-09": { nome: "Ana Cristina", materia: "Projeto de Vida" },
  "sex-09": { nome: "Adélio", materia: "Geografia" },

  "seg-10-2": { nome: "André", materia: "Arte" },
  "ter-10-2": { nome: "André", materia: "Arte" },
  "qua-10-2": { nome: "Marcelo Vella", materia: "Quimica" },
  "qui-10-2": { nome: "Maicon Kehl", materia: "Filosofia" },
  "sex-10-2": { nome: "Raquel", materia: "Lingua Portuguesa" },

  "seg-11": { nome: "Patricia", materia: "Matemática" },
  "ter-11": { nome: "Deise", materia: "Lingua Inglesa" },
  "qua-11": { nome: "Ana Claudia", materia: "Física" },
  "qui-11": { nome: "Thamires Pires", materia: "Gestão Ambiental" },
  "sex-11": { nome: "Raquel", materia: "Lingua Portuguesa" },

  "seg-12": { nome: "Patricia", materia: "Matemática" },
  "ter-12": { nome: "Ana Cristina", materia: "Projeto de Vida" },
  "qua-12": { nome: "Ana Claudia", materia: "Física" },
  "qui-12": { nome: "Adélio", materia: "Geografia" },
  "sex-12": { nome: "Luciano", materia: "Informática" }
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