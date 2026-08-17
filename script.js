```javascript
// ============================================
// AJUDANTE
// Primeira versão
// ============================================


// ELEMENTOS

const input =
    document.getElementById("messageInput");

const sendButton =
    document.getElementById("sendButton");

const microphone =
    document.getElementById("microphone");

const conversation =
    document.getElementById("conversation");

const systemStatus =
    document.getElementById("systemStatus");


// ============================================
// RELÓGIO
// ============================================

function updateClock() {

    const now = new Date();

    const time =
        now.toLocaleTimeString(
            "pt-BR",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );

    document.getElementById("clock")
        .textContent = time;
}

setInterval(updateClock, 1000);

updateClock();


// ============================================
// ADICIONAR MENSAGEM
// ============================================

function addMessage(
    type,
    text
) {

    const message =
        document.createElement("div");

    message.classList.add(
        "message",
        type
    );


    const name =
        type === "assistant"
            ? "AJUDANTE"
            : "VOCÊ";


    const time =
        new Date().toLocaleTimeString(
            "pt-BR",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );


    message.innerHTML = `

        <div class="message-name">
            ${name}
        </div>

        <p>
            ${text}
        </p>

        <span class="message-time">
            ${time}
        </span>

    `;


    conversation.appendChild(message);


    conversation.scrollTop =
        conversation.scrollHeight;
}


// ============================================
// RESPOSTA TEMPORÁRIA
// ============================================

function think(command) {

    const text =
        command.toLowerCase();


    if (
        text.includes("oi") ||
        text.includes("olá")
    ) {

        return "Olá. Estou aqui. Como posso ajudar?";

    }


    if (
        text.includes("quem é você")
    ) {

        return "Eu sou o Ajudante. Esta é minha primeira versão.";

    }


    if (
        text.includes("hora")
    ) {

        return `Agora são ${new Date().toLocaleTimeString("pt-BR")}.`;

    }


    if (
        text.includes("aprender")
    ) {

        return "Ainda estou no início. Meu sistema de aprendizado será conectado nas próximas etapas.";

    }


    return "Entendi. Ainda não possuo conhecimento suficiente para responder isso. Meu próximo passo será aprender a pesquisar e utilizar informações da internet.";

}


// ============================================
// ENVIAR
// ============================================

function sendMessage() {

    const text =
        input.value.trim();


    if (!text) return;


    addMessage(
        "user",
        text
    );


    input.value = "";


    systemStatus.textContent =
        "Processando";


    setTimeout(() => {

        const response =
            think(text);


        addMessage(
            "assistant",
            response
        );


        systemStatus.textContent =
            "Aguardando comando";

    }, 500);

}


// ============================================
// BOTÃO ENVIAR
// ============================================

sendButton.addEventListener(
    "click",
    sendMessage
);


// ============================================
// ENTER
// ============================================

input.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter"
        ) {

            sendMessage();

        }

    }
);


// ============================================
// MICROFONE
// ============================================

microphone.addEventListener(
    "click",
    function() {

        systemStatus.textContent =
            "Microfone será conectado em breve";

        addMessage(
            "assistant",
            "O sistema de voz ainda não foi conectado. Primeiro vamos construir meu cérebro."
        );

        setTimeout(() => {

            systemStatus.textContent =
                "Aguardando comando";

        }, 2000);

    }
);
```
