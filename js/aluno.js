const horarios = {
      "6A": {
        manha: ["Português", "Matemática", "História", "Educação Física"],
        tarde: ["Artes", "Geografia", "Ciências"],
        noite: ["Matemática", "Português"]
      },
      "7A": {
        manha: ["Ciências", "Inglês", "Matemática"],
        tarde: ["Português", "História"],
        noite: ["Geografia", "Educação Física"]
      }
    };

    function mostrarHorario() {
      const turma = document.getElementById("turma").value;
      const turno = document.getElementById("turno").value;
      const resultado = document.getElementById("horario");

      if (!turma || !turno) {
        resultado.innerHTML = "<p style='color:red'>Por favor, selecione a turma e o turno.</p>";
        return;
      }

      const aulas = horarios[turma]?.[turno];

      if (aulas) {
        resultado.innerHTML = `
          <h3>Horário da Turma ${turma} - Turno ${turno.charAt(0).toUpperCase() + turno.slice(1)}</h3>
          <ul>${aulas.map(aula => `<li>${aula}</li>`).join("")}</ul>
        `;
      } else {
        resultado.innerHTML = "<p style='color:red'>Horário não encontrado para essa turma e turno.</p>";
      }
    }