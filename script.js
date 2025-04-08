document.addEventListener("DOMContentLoaded", () => {
    const preguntas = {
      matematicas: [
        { pregunta: "¿Cuánto es 8 + 12?", opciones: ["18", "20", "22", "16"], respuesta: "20" },
        { pregunta: "¿Cuál es el valor de π (aproximado)?", opciones: ["3.14", "2.72", "1.41", "1.61"], respuesta: "3.14" },
        { pregunta: "¿Cuánto es 15 x 3?", opciones: ["45", "30", "60", "50"], respuesta: "45" },
      ],
      historia: [
        { pregunta: "¿Quién descubrió América?", opciones: ["Cristóbal Colón", "Simón Bolívar", "Napoleón", "George Washington"], respuesta: "Cristóbal Colón" },
        { pregunta: "¿Qué guerra terminó en 1945?", opciones: ["Primera Guerra Mundial", "Segunda Guerra Mundial", "Guerra Fría", "Guerra de Vietnam"], respuesta: "Segunda Guerra Mundial" },
      ],
      ciencia: [
        { pregunta: "¿Cuál es el órgano que bombea sangre?", opciones: ["Pulmón", "Hígado", "Cerebro", "Corazón"], respuesta: "Corazón" },
        { pregunta: "¿Qué planeta es conocido como el planeta rojo?", opciones: ["Venus", "Marte", "Júpiter", "Saturno"], respuesta: "Marte" },
      ],
      geografia: [
        { pregunta: "¿Cuál es el río más largo del mundo?", opciones: ["Amazonas", "Nilo", "Yangtsé", "Mississippi"], respuesta: "Amazonas" },
        { pregunta: "¿Dónde se encuentra la Torre Eiffel?", opciones: ["Madrid", "Roma", "París", "Londres"], respuesta: "París" },
      ],
      lengua: [
        { pregunta: "¿Qué tipo de palabra es 'rápidamente'?", opciones: ["Sustantivo", "Adverbio", "Verbo", "Adjetivo"], respuesta: "Adverbio" },
        { pregunta: "¿Cuál es el antónimo de 'feliz'?", opciones: ["Contento", "Triste", "Alegre", "Sonriente"], respuesta: "Triste" },
      ],
      tecnologia: [
        { pregunta: "¿Qué significa HTML?", opciones: ["HyperText Markup Language", "HighText Machine Language", "Hyper Tool Markup Language", "Home Tool Markup Language"], respuesta: "HyperText Markup Language" },
        { pregunta: "¿Cuál es el sistema operativo de Microsoft?", opciones: ["Linux", "macOS", "Android", "Windows"], respuesta: "Windows" },
      ]
    };
  
    let preguntasActuales = [];
    let indice = 0;
    let puntaje = 0;
  
    const preguntaEl = document.getElementById("pregunta");
    const respuestasEl = document.getElementById("respuestas");
    const feedbackEl = document.getElementById("feedback");
    const puntajeEl = document.getElementById("puntaje");
  
    window.iniciarJuego = () => {
      const materia = document.getElementById("materia").value;
      preguntasActuales = [...preguntas[materia]].sort(() => 0.5 - Math.random());
      indice = 0;
      puntaje = 0;
      document.getElementById("materia-selector").classList.add("hidden");
      document.getElementById("juego").classList.remove("hidden");
      mostrarPregunta();
    };
  
    function mostrarPregunta() {
      const actual = preguntasActuales[indice];
      preguntaEl.textContent = actual.pregunta;
      respuestasEl.innerHTML = "";
      feedbackEl.textContent = "";
  
      actual.opciones.forEach(opcion => {
        const btn = document.createElement("button");
        btn.textContent = opcion;
        btn.classList.add("opcion");
        btn.onclick = () => seleccionarRespuesta(btn, actual.respuesta);
        respuestasEl.appendChild(btn);
      });
    }
  
    function seleccionarRespuesta(botonSeleccionado, respuestaCorrecta) {
      const botones = document.querySelectorAll(".opcion");
      botones.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === respuestaCorrecta) {
          btn.classList.add("correcta");
        } else {
          btn.classList.add("incorrecta");
        }
      });
  
      if (botonSeleccionado.textContent === respuestaCorrecta) {
        feedbackEl.textContent = "✅ ¡Correcto!";
        puntaje++;
      } else {
        feedbackEl.textContent = `❌ Incorrecto. La respuesta correcta es: ${respuestaCorrecta}`;
      }
  
      puntajeEl.textContent = `Puntaje: ${puntaje}`;
    }
  
    window.siguientePregunta = () => {
      if (indice < preguntasActuales.length - 1) {
        indice++;
        mostrarPregunta();
      } else {
        preguntaEl.textContent = "🎉 ¡Juego terminado!";
        respuestasEl.innerHTML = "";
        feedbackEl.textContent = "";
      }
    };
  });
  