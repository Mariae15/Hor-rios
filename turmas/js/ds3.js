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
  "seg-07": { nome: "Dionata", materia: "R. Matemática" },
  "ter-07": { nome: "Juliana Albini", materia: "Banco de Dados" },
  "qua-07": { nome: "Natacha", materia: "R. Português" },
  "qui-07": { nome: "Natacha", materia: "Português" },
  "sex-07": { nome: "Luciano", materia: "Análise e Proj. de Sist." },

  "seg-08": { nome: "Dionata", materia: "R. Matemática" },
  "ter-08": { nome: "Esthefany", materia: "Ciência de Dados"},
  "qua-08": { nome: "Natacha", materia: "R. Português" },
  "qui-08": { nome: "Dionata", materia: "Matemática" },
  "sex-08": { nome: "Delane", materia: "Física"},

  "seg-09": { nome: "Esthefany", materia: "Ciência de Dados"},
  "ter-09": { nome: "Luciano", materia: "Programação Back-end"},
  "qua-09": { nome: "Marcos", materia: "Ed. Física"},
  "qui-09": { nome: "Dionata", materia: "Matemática" },
  "sex-09": { nome: "Luciano", materia: "Análise e Proj. de Sist." },

  "seg-10-2": { nome: "Gabriel", materia: "Programação Des. de Sist."},
  "ter-10-2": { nome:"Juliana Albini", materia: "Banco de Dados" },
  "qua-10-2": { nome: "Luciano", materia: "Análise e Proj. de Sist." },
  "qui-10-2": { nome: "Gabriel", materia: "Programação Des. de Sist." },
  "sex-10-2": { nome: "Luciano", materia: "Programação Back-end"},

  "seg-11": { nome: "Juliana Albini", materia: "Comp. Gráfica"},
  "ter-11": { nome: "Luciano", materia: "Programação Back-end"},
  "qua-11": { nome: "Juliana Albini", materia: "Programação Mobile"},
  "qui-11": { nome: "Gabriel", materia: "Programação Des. de Sist." },
  "sex-11": { nome: "Luciano", materia: "Programação Back-end"},

  "seg-12": { nome: "Natacha", materia: "Português"},
  "ter-12": { nome: "Juliana Albini", materia: "Comp. Gráfica"},
  "qua-12": { nome: "Juliana Albini", materia: "Programação Mobile"},
  "qui-12": { nome: "Claudia", materia: "Educ. Financeira"},
  "sex-12": { nome: "Gabriel", materia: "Programação Des. de Sist." }
};

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

      if (dados.turma === "DS3") {
        const celula = document.getElementById(dados.idCelula);
        if (celula) {
          celula.innerHTML = `<strong>${dados.matéria}</strong><br><small>${dados.nome}</small>`;


          // Remove manualmente as classes anteriores
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
