// ==========================================
// JARVIS AI - FRONTEND
// ==========================================


// ELEMENTOS

const commandInput = document.getElementById("commandInput");
const sendButton = document.getElementById("sendButton");
const micButton = document.getElementById("micButton");

const chat = document.getElementById("chat");
const jarvisState = document.getElementById("jarvis-state");


// ==========================================
// RELÓGIO
// ==========================================

function updateClock() {

    const now = new Date();

    const time = now.toLocaleTimeString("pt-BR");

    const date = now.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });

    document.getElementById("time").textContent = time;
    document.getElementById("date").textContent = date;
}

setInterval(updateClock, 1000);

updateClock();


// ==========================================
// ESTADO DO JARVIS
// ==========================================

function setJarvisState(state) {

    jarvisState.textContent = state;

}


// ==========================================
// CHAT
// ==========================================

function addMessage(sender, text) {

    const message = document.createElement("div");

    message.className =
        sender === "JARVIS"
            ? "message jarvis-message"
            : "message user-message";

    message.innerHTML = `
        <div class="message-label">${sender}</div>

        <p>${text}</p>

        <span class="message-time">
            ${new Date().toLocaleTimeString("pt-BR")}
        </span>
    `;

    chat.appendChild(message);

    chat.scrollTop = chat.scrollHeight;
}


// ==========================================
// COMANDOS
// ==========================================

function processCommand(command) {

    const text = command.toLowerCase();

    setJarvisState("THINKING");

    setTimeout(() => {

        let response =
            "Comando recebido. Ainda estou aprendendo essa função.";

        if (text.includes("olá") || text.includes("oi")) {

            response =
                "Olá. Estou online e pronto para ajudá-lo.";

        }

        else if (text.includes("quem é você")) {

            response =
                "Sou o JARVIS, seu assistente pessoal. Esta é minha primeira versão.";

        }

        else if (text.includes("hora")) {

            response =
                `Agora são ${new Date().toLocaleTimeString("pt-BR")}.`;

        }

        else if (text.includes("treino")) {

            response =
                "Seu treino programado é um treino de força.";

        }

        else if (text.includes("tarefa")) {

            response =
                "Você possui 3 tarefas pendentes.";

        }

        else if (text.includes("nota")) {

            response =
                "O sistema de notas está disponível no menu lateral.";

        }

        else if (text.includes("status")) {

            response =
                "Todos os sistemas básicos estão funcionando.";

        }

        setJarvisState("SPEAKING");

        addMessage("JARVIS", response);

        setTimeout(() => {

            setJarvisState("STANDBY");

        }, 1500);

    }, 700);
}


// ==========================================
// ENVIAR COMANDO
// ==========================================

function sendCommand() {

    const command = commandInput.value.trim();

    if (!command) return;

    addMessage("VOCÊ", command);

    commandInput.value = "";

    processCommand(command);
}


sendButton.addEventListener("click", sendCommand);


commandInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        sendCommand();

    }

});


// ==========================================
// MICROFONE
// ==========================================

micButton.addEventListener("click", function() {

    setJarvisState("LISTENING");

    addMessage(
        "JARVIS",
        "O reconhecimento de voz será conectado na próxima etapa."
    );

    setTimeout(() => {

        setJarvisState("STANDBY");

    }, 2000);

});


// ==========================================
// NAVEGAÇÃO
// ==========================================

const navItems =
    document.querySelectorAll(".nav-item");

const pages =
    document.querySelectorAll(".page");

const pageTitle =
    document.getElementById("page-title");


navItems.forEach(button => {

    button.addEventListener("click", function() {

        const page = this.dataset.page;

        if (!page) return;

        navItems.forEach(item => {

            item.classList.remove("active");

        });

        this.classList.add("active");


        pages.forEach(section => {

            section.classList.remove("active-page");

        });


        const target =
            document.getElementById(page);

        if (target) {

            target.classList.add("active-page");

        }


        const titles = {

            dashboard: "Dashboard",
            tasks: "Tarefas",
            notes: "Notas",
            calendar: "Agenda",
            workout: "Treinos",
            memory: "Memória",
            system: "Sistema",
            settings: "Configurações"

        };

        pageTitle.textContent =
            titles[page] || "JARVIS";

    });

});


// ==========================================
// TAREFAS
// ==========================================

function addTask() {

    const title =
        prompt("Nome da tarefa:");

    if (!title) return;

    const list =
        document.getElementById("taskList");

    const item =
        document.createElement("div");

    item.className = "list-item";

    item.innerHTML = `
        <div>
            <strong>${title}</strong>
            <small>Nova tarefa</small>
        </div>

        <button onclick="completeTask(this)">
            ✓
        </button>
    `;

    list.appendChild(item);

}


function completeTask(button) {

    const item =
        button.parentElement;

    item.style.opacity = "0.4";

    button.textContent = "✓";

}


// ==========================================
// NOTAS
// ==========================================

function createNote() {

    const title =
        prompt("Título da nota:");

    if (!title) return;

    const content =
        prompt("Conteúdo da nota:");

    if (!content) return;

    const note =
        document.createElement("div");

    note.className = "note";

    note.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
    `;

    document
        .getElementById("notesList")
        .appendChild(note);

}


// ==========================================
// TREINO
// ==========================================

function startWorkout() {

    addMessage(
        "JARVIS",
        "Treino iniciado. Sistema de cronômetro será conectado posteriormente."
    );

    setJarvisState("EXECUTING");

    setTimeout(() => {

        setJarvisState("STANDBY");

    }, 2000);

}


// ==========================================
// SIMULAÇÃO DO SISTEMA
// ==========================================

function updateSystem() {

    const cpu =
        Math.floor(Math.random() * 40) + 15;

    const ram =
        Math.floor(Math.random() * 30) + 30;

    document.getElementById("cpu").textContent =
        `${cpu}%`;

    document.getElementById("ram").textContent =
        `${ram}%`;

    document.getElementById("cpuBar").style.width =
        `${cpu}%`;

    document.getElementById("ramBar").style.width =
        `${ram}%`;

}

setInterval(updateSystem, 3000);

updateSystem();
