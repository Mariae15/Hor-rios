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
  "seg-07": { nome: "Jair", materia: "Matemática" },
  "ter-07": { nome: "Valdecir", materia: "História" },
  "qua-07": { nome: "Jair", materia: "Matemática" },
  "qui-07": { nome: "Deise", materia: "Lingua Inglesa" },
  "sex-07": { nome: "Claudia", materia: "Química" },

  "seg-08": { nome: "Francisca", materia: "Espanhol Tec." },
  "ter-08": { nome: "Valdecir", materia: "História" },
  "qua-08": { nome: "Sergio Tramujas", materia: "Biologia" },
  "qui-08": { nome: "Jair", materia: "Matemática" },
  "sex-08": { nome: "Adélio", materia: "Geografia" },

  "seg-09": { nome: "Francisca", materia: "Espanhol Tec." },
  "ter-09": { nome: "Itamar", materia: "Sociologia" },
  "qua-09": { nome: "Adélio", materia: "Geografia" },
  "qui-09": { nome: "Natacha", materia: "Lingua Portuguesa" },
  "sex-09": { nome: "Claudia", materia: "Educ. Financeira" },

  "seg-10-2": { nome: "Natacha", materia: "Lingua Portuguesa" },
  "ter-10-2": { nome: "Natacha", materia: "Lingua Portuguesa" },
  "qua-10-2": { nome: "Lucio", materia: "Higi. e Seg. do Trab." },
  "qui-10-2": { nome: "Janete Scremin", materia: "Transp. Maritímo" },
  "sex-10-2": { nome: "Claudia", materia: "Química" },

  "seg-11": { nome: "Sergio Tramujas", materia: "Biologia" },
  "ter-11": { nome: "Ana Cristina", materia: "Projeto de Vida" },
  "qua-11": { nome: "Deise", materia: "Lingua Inglesa" },
  "qui-11": { nome: "Janete Scremin", materia: "Transp. Maritímo" },
  "sex-11": { nome: "Janete Scremin", materia: "Leg. Port." },

  "seg-12": { nome: "Alexandre", materia: "Adm. Portuária" },
  "ter-12": { nome: "Itamar", materia: "Sociologia" },
  "qua-12": { nome: "Bruno", materia: "Operações com Campos" },
  "qui-12": { nome: "Thamires Pires", materia: "Gestão Ambiental" },
  "sex-12": { nome: "Janete Scremin", materia: "Leg. Port." }
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