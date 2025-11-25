const resultados = [];
var continuarBusca = true;
async function buscarTodosResultadosMegaSena() {
    let concurso = 1;
    const endpointBase = "https://servicebus2.caixa.gov.br/portaldeloterias/api/megasena/";

    // notificacao.innerHTML += "Iniciando a busca por resultados...<br>";
    console.log("Iniciando a busca por resultados...");

    while (continuarBusca) {
        const url = `${endpointBase}${concurso}`;
        // notificacao.innerHTML += `Buscando concurso ${concurso}...<br>`;
        console.log(`Buscando concurso ${concurso}...`);

        try {
            // Usa fetch para fazer a requisição assíncrona
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                resultados.push(data);
                // notificacao.innerHTML += `Concurso ${concurso} encontrado.<br>`;
                console.log(`Concurso ${concurso} encontrado.`);
                concurso++;
            } else {
                // Se a resposta não for OK (ex: 404 Not Found), assume que o último concurso foi atingido
                // notificacao.innerHTML += `Resposta não-OK para o concurso ${concurso}. Fim dos resultados ou erro.<br>`;
                console.log(`Resposta não-OK para o concurso ${concurso}. Fim dos resultados ou erro.`);
                continuarBusca = false;
            }
        } catch (error) {
            // Em caso de erro de rede ou outro problema, interrompe o loop
            // notificacao.innerHTML += `Erro na requisição do concurso ${concurso}: ${error}<br>`;
            console.error(`Erro na requisição do concurso ${concurso}: ${error}`);
            continuarBusca = false;
        }
    }

    // notificacao.innerHTML += `Busca finalizada. Total de resultados: ${resultados.length}.<br>`;
    console.log(`Busca finalizada. Total de resultados: ${resultados.length}.`);
    
    // Converte o array de resultados para uma string JSON
    const jsonOutput = JSON.stringify(resultados, null, 2);
    
    // Exibe o JSON no console (ou você pode processá-lo de outra forma)
    // notificacao.innerHTML += "Dados JSON gerados:" + jsonOutput + "<br>";
    console.log("Dados JSON gerados: ", jsonOutput);
    notificacao.innerText = jsonOutput;
    downloadJson(jsonOutput);

    // Para salvar em um arquivo .json, em um ambiente de navegador web
    // você precisaria de um método para download ou um backend (Node.js/PHP)
    // para gravar o arquivo no sistema de arquivos.

    return jsonOutput;
}

function downloadJson(jsonOutput) {
    const blob = new Blob([jsonOutput], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "application_data.json"; // The filename to be downloaded

    document.body.appendChild(a); // Temporarily add to DOM
    a.click(); // Programmatically click the link
    document.body.removeChild(a); // Remove from DOM
    URL.revokeObjectURL(url); // Clean up the URL object
}

// Para executar a função:
buscarTodosResultadosMegaSena();

window.addEventListener('click', function() {
    console.log("clicou");
    // notificacao.innerHTML = JSON.stringify(resultados);
});
