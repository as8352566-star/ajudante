```javascript
const input =
    document.getElementById("messageInput");

const sendButton =
    document.getElementById("sendButton");

const micButton =
    document.getElementById("micButton");

const conversation =
    document.getElementById("conversation");

const status =
    document.getElementById("status");


// ==========================================
// RELÓGIO
// ==========================================

function updateClock() {

    const now = new Date();

    document.getElementById("clock")
        .textContent =
        now.toLocaleTimeString(
            "pt-BR",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );
}

setInterval(updateClock, 1000);

updateClock();


// ==========================================
// ADICIONAR MENSAGEM
// ==========================================

function addMessage(type, text) {

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


    message.innerHTML = `

        <div class="name">
            ${name}
        </div>

        <p>
            ${text}
        </p>

    `;


    conversation.appendChild(message);


    conversation.scrollTop =
        conversation.scrollHeight;
}


// ==========================================
// RESPOSTA TEMPORÁRIA
// ==========================================

function generateResponse(text) {

    const message =
        text.toLowerCase();


    if (
        message.includes("oi") ||
        message.includes("olá")
    ) {

        return "Olá. Estou aqui. Como posso ajudar?";

    }


    if (
        message.includes("quem é você")
    ) {

        return "Eu sou o Ajudante. Ainda estou sendo construído.";

    }


    if (
        message.includes("hora")
    ) {

        return `Agora são ${new Date().toLocaleTimeString("pt-BR")}.`;

    }


    if (
        message.includes("aprender")
    ) {

        return "Meu sistema de aprendizado ainda será construído. Quero aprender através de conhecimento verificado e das suas correções.";

    }


    return "Recebi sua mensagem. Meu cérebro ainda está sendo construído. Em breve poderei compreender, pesquisar e aprender.";

}


// ==========================================
// ENVIAR MENSAGEM
// ==========================================

function sendMessage() {

    const text =
        input.value.trim();


    if (!text) return;


    addMessage(
        "user",
        text
    );


    input.value = "";


    status.textContent =
        "Processando";


    setTimeout(() => {

        const response =
            generateResponse(text);


        addMessage(
            "assistant",
            response
        );


        status.textContent =
            "Aguardando comando";

    }, 500);
}


// ==========================================
// BOTÃO
// ==========================================

sendButton.addEventListener(
    "click",
    sendMessage
);


// ==========================================
// ENTER
// ==========================================

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


// ==========================================
// MICROFONE
// ==========================================

micButton.addEventListener(
    "click",
    function() {

        status.textContent =
            "Microfone ainda não conectado";

        addMessage(
            "assistant",
            "O sistema de voz será adicionado posteriormente."
        );

    }
);
```
