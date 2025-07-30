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

const gradeAulas ={
  "seg-07": { nome: "Deise", materia: "Lingua Inglesa" },
  "ter-07": { nome: "André", materia: "Arte" },
  "qua-07": { nome: "Deise", materia: "Lingua Inglesa " },
  "qui-07": { nome: "Mario", materia: "Ed. Fisica" },
  "sex-07": { nome: "Dionata", materia: "Matemática" },

  "seg-08": { nome: "Ana Cristina", materia: "Projeto de Vida" },
  "ter-08": { nome: "Raquel", materia: "Recomp. Aprend. Port." },
  "qua-08": { nome: "Adélio", materia: "Geografia" },
  "qui-08": { nome: "Mario", materia: "Ed. Fisica" },
  "sex-08": { nome: "Sabrina", materia: "Sociologia" },

  "seg-09": { nome: "Claudia", materia: "Educ. Financeira" },
  "ter-09": { nome: "Raquel", materia: "Recomp. Aprend. Port." },
  "qua-09": { nome: "Deise", materia: "Lingua Inglesa" },
  "qui-09": { nome: "Juliana", materia: "RAM" },
  "sex-09": { nome: "Sabrina", materia: "Sociologia" },

  "seg-10": { nome: "Valdecir", materia: "História" },
  "ter-10": { nome: "Raquel", materia: "Lingua Portuguesa" },
  "qua-10": { nome: "Fabiano", materia: "Física" },
  "qui-10": { nome: "Juliana", materia: "RAM" },
  "sex-10": { nome: "Dionata", materia: "Matemática" },

  "seg-11": { nome: "André", materia: "Arte" },
  "ter-11": { nome: "Raquel", materia: "Lingua Portuguesa" },
  "qua-11": { nome: "Fabiano", materia: "Física" },
  "qui-11": { nome: "Dionata", materia: "Matemática" },
  "sex-11": { nome: "Dionata", materia: "Matemática" },

  "seg-12": { nome: "Claudia", materia: "Educ. Financeira" },
  "ter-12": { nome: "Valdecir", materia: "História" },
  "qua-12": { nome: "Adélio", materia: "Geografia" },
  "qui-12": { nome: "Raquel", materia: "Lingua Portuguesa" },
  "sex-12": { nome: "Raquel", materia: "Lingua Portuguesa" }
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