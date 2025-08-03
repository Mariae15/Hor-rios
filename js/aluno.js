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
}

const db = firebase.firestore();

const listaAvisos = document.getElementById("lista-avisos");

db.collection("avisos")
  .orderBy("data", "desc")
  .onSnapshot((snapshot) => {
    listaAvisos.innerHTML = ""; 

    if (snapshot.empty) {
      listaAvisos.innerHTML = "<li class='aviso'>Nenhum aviso disponível.</li>";
      return;
    }

    snapshot.forEach((doc) => {
      const aviso = doc.data();
      const dataFormatada = new Date(aviso.data.toDate()).toLocaleString("pt-BR");

      const li = document.createElement("li");
      li.classList.add("aviso");
      li.innerHTML = `<strong>${dataFormatada}:</strong> ${aviso.texto}`;
      listaAvisos.appendChild(li);
    });
  });


document.getElementById("botao").addEventListener("click", () => {
  const turma = document.getElementById("turma").value;
  const grau = document.getElementById("Grau").value;
  const turno = document.getElementById("turno").value;

  if (!turma || !grau || !turno) {
    alert("Por favor, selecione todos os campos.");
    return;
  }

  const pagina = `turmas/${turma.toLowerCase()}${grau}${turno.toLowerCase()}.html`;

  window.location.href = pagina;
});
