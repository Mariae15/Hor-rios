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
  "seg-07": { nome: "Janete Crisanto", materia: "Negociação e Vendas" },
  "ter-07": { nome: "Deise", materia: "Lingua Inglesa" },
  "qua-07": { nome: "Marcelo Mello", materia: "Lingua Portuguesa" },
  "qui-07": { nome: "Aline", materia: "Sociologia" },
  "sex-07": { nome: "Ricardo", materia: "Itrod. ao Marketing" },

  "seg-08": { nome: "Janete Crisanto", materia: "Negociação e Vendas" },
  "ter-08": { nome: "Marcelo Mello", materia: "Lingua Portuguesa" },
  "qua-08": { nome: "Jair", materia: "Matemática" },
  "qui-08": { nome: "Aline", materia: "Sociologia" },
  "sex-08": { nome: "Valdecir", materia: "História" },

  "seg-09": { nome: "Sergio Tramujas", materia: "Biologia" },
  "ter-09": { nome: "Jair", materia: "Matemática" },
  "qua-09": { nome: "Ellen Cunha", materia: "Controladoria e Finanças" },
  "qui-09": { nome: "Adélio", materia: "Geografia" },
  "sex-09": { nome: "Valdecir", materia: "História" },

  "seg-10-2": { nome: "Claudia", materia: "Ed. Financeira" },
  "ter-10-2": { nome: "Deise", materia: "Lingua Inglesa" },
  "qua-10-2": { nome: "Ellen Cunha", materia: "Controladoria e Finanças" },
  "qui-10-2": { nome: "Adélio", materia: "Geografia" },
  "sex-10-2": { nome: "Janete Crisanto", materia: "Recursos Humanos" },

  "seg-11": { nome: "Ana Cristina", materia: "Projeto de Vida" },
  "ter-11": { nome: "Janete Crisanto", materia: "Negociação e Orçamento" },
  "qua-11": { nome: "Jair", materia: "Matemática" },
  "qui-11": { nome: "Claudia", materia: "Quimica" },
  "sex-11": { nome: "Ricardo", materia: "Itrod. ao Marketing" },

  "seg-12": { nome: "Sergio Tramujas", materia: "Biologia" },
  "ter-12": { nome: "Janete Crisanto", materia: "Negociação e Orçamento" },
  "qua-12": { nome: "Marcelo Mello", materia: "Lingua Portuguesa" },
  "qui-12": { nome: "Janete Crisanto", materia: "Recursos Humanos" },
  "sex-12": { nome: "Claudia", materia: "Quimica" }
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