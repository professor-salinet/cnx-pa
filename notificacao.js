const div_polite = document.createElement('div');
div_polite.ariaLive = "polite";
div_polite.ariaAtomic = "true";
div_polite.classList.add("position-fixed");
div_polite.classList.add("bottom-0");
div_polite.classList.add("end-0");
div_polite.classList.add("p-3");
div_polite.classList.add("overflow-auto");
div_polite.classList.add("h-100");
div_polite.style.zIndex = "1050";
// div_polite.style.height = "300px";

const divNotificacoes = document.createElement('div');
divNotificacoes.id = "divNotificacoes";
divNotificacoes.classList.add("toast");
divNotificacoes.role = "alert";
divNotificacoes.ariaLive = "assertive";
divNotificacoes.ariaAtomic = "true";
// divNotificacoes.dataset.bsDelay = "5000";

const div_toast_header = document.createElement('div');
div_toast_header.classList.add("toast-header");

const strong_me_auto = document.createElement('strong');
strong_me_auto.classList.add("me-auto");
const txt_titulo_notificacao = "Texto gerado:";
strong_me_auto.innerText = txt_titulo_notificacao;

div_toast_header.appendChild(strong_me_auto);

const link_copiar = document.createElement('a');
link_copiar.href = "javascript:copiarTexto()";
link_copiar.classList.add("btn");
link_copiar.classList.add("btn-info");
link_copiar.classList.add("btn-sm");

const i_copiar = document.createElement('i');
i_copiar.classList.add("fa-solid");
i_copiar.classList.add("fa-copy");

link_copiar.innerText = "Copiar ";
link_copiar.appendChild(i_copiar);

const small_agora = document.createElement('small');
small_agora.appendChild(link_copiar);

div_toast_header.appendChild(small_agora);

const btn_close = document.createElement('button');
btn_close.type = "button";
btn_close.classList.add("btn-close");
btn_close.dataset.bsDismiss = "toast";
btn_close.ariaLabel = "Fechar";

div_toast_header.appendChild(btn_close);

const div_toast_body = document.createElement('div');
div_toast_body.classList.add("toast-body");
div_toast_body.classList.add("alert");
div_toast_body.classList.add("mb-0");
div_toast_body.innerText = "Esta é a sua notificação flutuante fixa em Bootstrap 5.3!";

divNotificacoes.appendChild(div_toast_header);
divNotificacoes.appendChild(div_toast_body);

div_polite.appendChild(divNotificacoes);

document.body.appendChild(div_polite);

const toast = new bootstrap.Toast(divNotificacoes);
// toast.show();

/*
<div class="alert alert-success" id="div_notificacoes_ok" style="display: none;"></div>
<div class="alert alert-danger" id="div_notificacoes_nok" style="display: none;"></div>*/


function notificarOk(msg) {
    // div_notificacoes_nok.style.display = "none";
    // div_notificacoes_ok.innerText = msg;
    // div_notificacoes_ok.style.display = "block";
    // window.setTimeout(() => {
    //     div_notificacoes_ok.style.display = "none";
    // }, 5000);
    div_toast_body.classList.remove("alert-danger");
    div_toast_body.classList.add("alert-success");
    div_toast_body.innerHTML = msg;
    strong_me_auto.innerText = txt_titulo_notificacao + " (" + msg.length + " caracteres)";
    toast.show();
}

function notificarNok(msg) {
    // div_notificacoes_ok.style.display = "none";
    // div_notificacoes_nok.innerText = msg;
    // div_notificacoes_nok.style.display = "block";
    // window.setTimeout(() => {
    //     div_notificacoes_nok.style.display = "none";
    // }, 5000);
    div_toast_body.classList.remove("alert-success");
    div_toast_body.classList.add("alert-danger");
    div_toast_body.innerHTML = msg;
    strong_me_auto.innerText = txt_titulo_notificacao + " (" + msg.length + " caracteres)";
    toast.show();
}

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}

function copiarTexto() {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(div_toast_body.innerText);
        alert("Fallback");
        return;
    }

    navigator.clipboard.writeText(div_toast_body.innerText).then(function() {
        alert('Texto copiado com sucesso!');
    }, function(err) {
        alert('Não foi possível copiar o texto!');
    });
}

// alert("ok");