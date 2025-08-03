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

  function loginUsuario() {
    event.preventDefault();

    const email = document.getElementById('username').value;
    const senha = document.getElementById('password').value;

    if (!email || !senha) {
      alert("Erro, por favor preencha todos os campos");
      return;
    }

    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(() =>{
        console.log("Autenticação bem sucedida");
        setTimeout(()=>{
          window.location.href = "professores.html";
        }, 1500);
      })
      .catch((error) =>{
        console.log("Erro ao fazer login: ", error.message);
        alert("Erro ao fazer seu login. Email ou senha errados.")
      })
      ;

      auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("Usuário logado:", user.email);

    } else {
      console.log("Nenhum usuário logado");
      function bloquearRecursosDoProfessor() {

  const colunas = document.querySelectorAll(".col-acao");
  colunas.forEach(col => col.style.display = "none");

  const botoes = document.querySelectorAll(".botao-presenca");
  botoes.forEach(btn => btn.style.display = "none");
}
    }
  }
)}
