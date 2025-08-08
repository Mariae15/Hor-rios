const firebaseConfig = {
    apiKey: "AIzaSyD84jgoHZ72CYlBLDoXcDf-HOHMTNkEz8s",
    authDomain: "cadastro-69a82.firebaseapp.com",
    databaseURL: "https://cadastro-69a82-default-rtdb.firebaseio.com",
    projectId: "cadastro-69a82",
    storageBucket: "cadastro-69a82.firebasestorage.app",
    messagingSenderId: "1082172217927",
    appId: "1:1082172217927:web:573cd5a9cbe19a570aef62"
  };

  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log("Firebase Carregado")
  }

const db = firebase.firestore();

function enviarAviso() {
  const texto = document.getElementById("aviso").value.trim();
  const statusMsg = document.getElementById("status-msg");

  if (texto === "") {
    statusMsg.textContent = "⚠️ O aviso não pode estar vazio.";
    statusMsg.style.color = "red";
    return;
  }

  db.collection("avisos").add({
    texto: texto,
    data: new Date()
  })
  .then(() => {
    statusMsg.textContent = "✅ Aviso enviado com sucesso!";
    statusMsg.style.color = "green";
    document.getElementById("aviso").value = ""; 
  })
  .catch((error) => {
    statusMsg.textContent = "❌ Erro ao enviar aviso: " + error;
    statusMsg.style.color = "red";
  });
}

const lista = document.getElementById("lista-avisos");

db.collection("avisos")
  .orderBy("data", "desc")
  .onSnapshot((snapshot) => {
    lista.innerHTML = "";

    snapshot.forEach((doc) => {
      const aviso = doc.data();
      const li = document.createElement("li");

      const data = new Date(aviso.data.toDate()).toLocaleString("pt-BR");

      const input = document.createElement("input");
      input.value = aviso.texto;
      input.disabled = true;
      input.style.width = "60%";

      const salvarBtn = document.createElement("button");
      salvarBtn.textContent = "💾 Salvar";
      salvarBtn.style.display = "none";

      const editarBtn = document.createElement("button");
      editarBtn.textContent = "✏️ Editar";
      editarBtn.onclick = () => {
        input.disabled = false;
        salvarBtn.style.display = "inline";
        editarBtn.style.display = "none";
      };

      salvarBtn.onclick = () => {
        db.collection("avisos").doc(doc.id).update({ texto: input.value })
          .then(() => {
            input.disabled = true;
            salvarBtn.style.display = "none";
            editarBtn.style.display = "inline";
          });
      };

      const apagarBtn = document.createElement("button");
      apagarBtn.textContent = "🗑️ Apagar";
      apagarBtn.onclick = () => {
        if (confirm("Deseja apagar este aviso?")) {
          db.collection("avisos").doc(doc.id).delete();
        }
      };

      const info = document.createElement("small");
      info.textContent = ` (${data})`;

      li.appendChild(input);
      li.appendChild(info);
      li.appendChild(editarBtn);
      li.appendChild(salvarBtn);
      li.appendChild(apagarBtn);

      lista.appendChild(li);
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

  const pagina = `turmas_pedagogia/${turma.toLowerCase()}${grau}${turno.toLowerCase()}.html`;

  window.location.href = pagina;
});
