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
  "seg-07": { nome: "Esthefany", materia: "Programação Front End" },
  "ter-07": { nome: "Esthefany", materia: "Programação Front End" },
  "qua-07": { nome: "Juliana Albini", materia: "Programação Mobile" },
  "qui-07": { nome: "Jair", materia: "Matemática" },
  "sex-07": { nome: "Adélio", materia: "Geografia" },

  "seg-08": { nome: "Esthefany", materia: "Programação Front End" },
  "ter-08": { nome: "Jair", materia: "Matemática" },
  "qua-08": { nome: "Marcelo Mello", materia: "Língua Portuguesa" },
  "qui-08": { nome: "Ana Cristina", materia: "Projeto de Vida" },
  "sex-08": { nome: "Gabriel", materia: "Banco de dados" },

  "seg-09": { nome: "Bruno H", materia: "Língua Inglesa" },
  "ter-09": { nome: "Esthefany", materia: "Programação Front End" },
  "qua-09": { nome: "Juliana Albini", materia: "Programação Mobile" },
  "qui-09": { nome: "Claudia", materia: "Quimica" },
  "sex-09": { nome: "Gabriel", materia: "Banco de dados" },

  "seg-10-2": { nome: "Juliana Albini", materia: "Análise e Proj. de Sist." },
  "ter-10-2": { nome: "Jair", materia: "Matemática" },
  "qua-10-2": { nome: "Marcelo Mello", materia: "Língua Portuguesa" },
  "qui-10-2": { nome: "Aline", materia: "Sociologia" },
  "sex-10-2": { nome: "Sergio Tramujas", materia: "Biologia" },

  "seg-11": { nome: "Claudia", materia: "Educ. Financeira" },
  "ter-11": { nome: "Marcelo Mello", materia: "Língua Portuguesa" },
  "qua-11": { nome: "Luciano", materia: "Ciências da Comp." },
  "qui-11": { nome: "Aline", materia: "Sociologia" },
  "sex-11": { nome: "Adélio", materia: "Geografia" },

  "seg-12": { nome: "Juliana Albini", materia: "Análise e Proj. de Sist." },
  "ter-12": { nome: "Luciano", materia: "Ciências da Comp." },
  "qua-12": { nome: "Sergio Tramujas", materia: "Biologia" },
  "qui-12": { nome: "Claudia", materia: "Quimica" },
  "sex-12": { nome: "Valdecir", materia: "História" }
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

       if (dados.turma === "DS2") {
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