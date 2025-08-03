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

  function cadastrarUsuario(){
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value

  const senhaForte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (!senhaForte.test(senha)) {
    alert("A senha deve conter:\n- Mínimo 8 caracteres\n- Letras maiúsculas e minúsculas\n- Pelo menos 1 número\n- Pelo menos 1 caractere especial (!@#$...)");
    return;
  }

    if (!nome || !email || !senha) {
      alert("Preencha os Campos")
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(email,senha)
    .then((userCredencial) =>{
      const userId = userCredencial.user.uid;

      firebase.database().ref("professores/" + userId).set({
        nome: nome,
        email: email
      })
      .then(()=>{
        console.log("Cadastro realizado com sucesso");
        setTimeout(()=>{
          window.location.href = "professores.html";
        }, 1500);
      })
      .catch( (error)=>{
        console.log("Erro ao salvar no banco", error.message);
      })
    }).catch( (error) =>{
      console.log("Erro ao cadastrar:", error.message);
    })
  }

  window.addEventListener("DOMContentLoaded", () => {
  const dica = document.getElementById("senhaDica");
  dica.style.display = "none";
});


  function apareceFrase() {
document.getElementById('senhaDica').style.display = 'block'
}

function desapareceFrase() {
    document.getElementById('senhaDica').style.display = 'none'
}