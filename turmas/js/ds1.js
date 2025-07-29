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
  "seg-07": { nome: "Cláudia", materia: "Matemática" },
  "ter-07": { nome: "Mario", materia: "Ed. Física" },
  "qua-07": { nome: "Cláudia", materia: "Matemática" },
  "qui-07": { nome: "Ana Cristina", materia: "Projeto de Vida" },
  "sex-07": { nome: "Raquel", materia: "Língua Portuguesa" },

  "seg-08": { nome: "Sergio Tramujas", materia: "Biologia" },
  "ter-08": { nome: "Mario", materia: "Ed. Física" },
  "qua-08": { nome: "Juliana Albini", materia: "Introd" },
  "qui-08": { nome: "Ricardo", materia: "Educação Financeira" },
  "sex-08": { nome: "Raquel", materia: "Língua Portuguesa" },

  "seg-09": { nome: "André", materia: "Arte" },
  "ter-09": { nome: "Adélio", materia: "Geografia" },
  "qua-09": { nome: "Luciano", materia: "Lógica Computacional" },
  "qui-09": { nome: "Maicon Kehl", materia: "Filosofia" },
  "sex-09": { nome: "Marcelo Vella", materia: "Quimica" },

  "seg-10-2": { nome: "Bruno H.", materia: "Língua Inglesa" },
  "ter-10-2": { nome: "Ana Cristina", materia: "Projeto de Vida" },
  "qua-10-2": { nome: "Juliana Albini", materia: "Introd." },
  "qui-10-2": { nome: "Sergio Tramujas", materia: "Biologia" },
  "sex-10-2": { nome: "Valdecir", materia: "História" },

  "seg-11": { nome: "Gabriel", materia: "Int Pr" },
  "ter-11": { nome: "Adélio", materia: "Geografia" },
  "qua-11": { nome: "Marcelo Vella", materia: "Química" },
  "qui-11": { nome: "Ana Claudia", materia: "Física" },
  "sex-11": { nome: "Valdecir", materia: "História" },

  "seg-12": { nome: "Gabriel", materia: "Int Pr" },
  "ter-12": { nome: "André", materia: "Arte" },
  "qua-12": { nome: "Luciano", materia: "Lógica Computacional" },
  "qui-12": { nome: "Ana Claudia", materia: "Física" },
  "sex-12": { nome: "Claudia", materia: "Matemática" }
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
  .orderBy("data", "desc")
  .onSnapshot((snapshot) => {
    snapshot.forEach((doc) => {
      const dados = doc.data();
         console.log("Presença recebida:", doc.data());

      if (dados.turma === "DS1") {
        const celula = document.getElementById(dados.idCelula);
        if (celula) {
          celula.textContent = dados.matéria;
          celula.classList.remove("presente", "ausente");

          if (dados.status.toLowerCase() === "ausente") {
            celula.classList.add("ausente");
          } else {
            celula.classList.add("presente");
          }
        }
      }
    });
  });