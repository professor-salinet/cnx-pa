
var jsObject;
var tem_jogo = true;
var jogo_inicial = 2950;
var num_jogo = jogo_inicial;
var ultimo_jogo;
var jogo_anterior;
var jogo_temp;
var url_endpoint = "https://servicebus2.caixa.gov.br/portaldeloterias/api/megasena/";
var url_temp = url_endpoint + num_jogo;
var notificacao = document.getElementById('notificacao');
// notificacao.innerHTML = "ok";
// $.ajax({
//     url: url_temp,
//     dataType: "text",
//     success: function(data) {
//         jsObject = $.parseJSON(data);
//         alert(jsObject.dezenasSorteadasOrdemSorteio);
//     }
// });

async function verJogo(nJogo) {
    $.ajax({
        url: url_endpoint + nJogo,
        dataType: "text",
        success: function(data) {
            return $.parseJSON(data);
        }
    });
}

// while (tem_jogo) {
//     url_temp = url_endpoint + num_jogo;
//     alert("ok");
//     const response = await fetch(url_temp);
//     //     if (response.ok) {
//     //         let jogo_temp = await response.json();
//     //         notificacao.innerHTML += JSON.stringify(jogo_temp) + "<br>";
//     //     } else {
//     //         notificacao.innerHTML += "nulo<br>";
//     //     }
//     // num_jogo++;
//     tem_jogo = false;
// }

async function buscarTodosResultadosMegaSena() {
    let concurso = 2940;
    const resultados = [];
    const endpointBase = "https://servicebus2.caixa.gov.br/portaldeloterias/api/megasena/";
    let continuarBusca = true;

    notificacao.innerHTML += "Iniciando a busca por resultados...<br>";

    while (continuarBusca) {
        const url = `${endpointBase}${concurso}`;
        notificacao.innerHTML += `Buscando concurso ${concurso}...<br>`;

        try {
            // Usa fetch para fazer a requisição assíncrona
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                resultados.push(data);
                notificacao.innerHTML += `Concurso ${concurso} encontrado.<br>`;
                concurso++;
            } else {
                // Se a resposta não for OK (ex: 404 Not Found), assume que o último concurso foi atingido
                notificacao.innerHTML += `Resposta não-OK para o concurso ${concurso}. Fim dos resultados ou erro.<br>`;
                continuarBusca = false;
            }
        } catch (error) {
            // Em caso de erro de rede ou outro problema, interrompe o loop
            notificacao.innerHTML += `Erro na requisição do concurso ${concurso}:${error}<br>`;
            continuarBusca = false;
        }
    }

    notificacao.innerHTML += `Busca finalizada. Total de resultados: ${resultados.length}.<br>`;
    
    // Converte o array de resultados para uma string JSON
    const jsonOutput = JSON.stringify(resultados, null, 2);

    // Exibe o JSON no console (ou você pode processá-lo de outra forma)
    notificacao.innerHTML += "Dados JSON gerados:" + jsonOutput + "<br>";

    // Para salvar em um arquivo .json, em um ambiente de navegador web
    // você precisaria de um método para download ou um backend (Node.js/PHP)
    // para gravar o arquivo no sistema de arquivos.

    return jsonOutput;
}

// Para executar a função:
buscarTodosResultadosMegaSena();

// $(document).ready(function () {
//     verJogos();
// });

// while (tem_jogo) {
//     if (num_jogo > jogo_inicial && jogo_temp != undefined) {
//         alert(ultimo_jogo);
//         jogo_anterior = jogo_temp.dezenasSorteadasOrdemSorteio;
//     }
//     // alert("ok");

//     url_temp = "https://servicebus2.caixa.gov.br/portaldeloterias/api/megasena/" + num_jogo;
//     $.ajax({
//         url: url_temp,
//         dataType: "text",
//         success: function(data) {
//             jsObject = $.parseJSON(data);
//         }
//     });
//     alert(url_temp);
    
//     let jogo_temp = jsObject;
//     alert(jogo_temp.dezenasSorteadasOrdemSorteio);

//     if (jogo_temp.dezenasSorteadasOrdemSorteio) {
//         ultimo_jogo = jogo_temp.dezenasSorteadasOrdemSorteio;
//     } else {
//         tem_jogo = false;
//     }
//     num_jogo++;
//     setTimeout(alert, 1000);
// }

// var myFunc01 = function() {
//   var i = 0;
//   while (i < 100) {
//     (function(i) {
//       setTimeout(function() {
//         document.getElementById('d01').innerHTML += 100 - i + "<br>";
//       }, 1000 * i)
//     })(i++)
//   }
// };

// myFunc01();

var limite = 3;
var i = 0;

var jogos = function() {
    while (i < limite) {
        (function(i) {
            setTimeout(function() {
                notificacao.innerHTML += limite - i + "<br>";
                
                url_temp = url_endpoint + num_jogo;
                notificacao.innerHTML += url_temp + "<br>";

                // notificacao.innerHTML += (typeof jogo_temp) + "<br>";
                // if (num_jogo > jogo_inicial && typeof jogo_temp != undefined) {
                //     notificacao.innerHTML += ultimo_jogo + "<br>";
                //     if (jogo_temp.dezenasSorteadasOrdemSorteio != undefined) {
                //         jogo_anterior = jogo_temp.dezenasSorteadasOrdemSorteio;
                //     }
                // }

                $.ajax({
                    url: url_temp,
                    dataType: "text",
                    success: function(data) {
                        jsObject = $.parseJSON(data);
                        notificacao.innerHTML += jsObject + "<br>";
                    }
                });
                num_jogo++;
                notificacao.innerHTML += jsObject + "<br>";
                
                let jogo_temp = jsObject;
                notificacao.innerHTML += jogo_temp.dezenasSorteadasOrdemSorteio + "<br>";

                if (jogo_temp.dezenasSorteadasOrdemSorteio) {
                    ultimo_jogo = jogo_temp.dezenasSorteadasOrdemSorteio;
                } else {
                    tem_jogo = false;
                }
            }, 2000 * i)
        })(i++)
    }
};


// var intervalo = setInterval(async function() {
//     notificacao.innerHTML += limite - i + "<br>";
    
//     url_temp = url_endpoint + num_jogo;
//     notificacao.innerHTML += url_temp + "<br>";

//     num_jogo++;
//     i++;

//     // notificacao.innerHTML += typeof jsObject + "<br>";
//     if (typeof jsObject != "undefined") {
//         notificacao.innerHTML += jsObject + "<br>";
//         jogo_temp = jsObject;
//         if (typeof jogo_temp.dezenasSorteadasOrdemSorteio != "undefined") {
//             ultimo_jogo = jogo_temp.dezenasSorteadasOrdemSorteio;
//         } else {
//             tem_jogo = false;
//             clearInterval(intervalo);
//         }
//     } else {
//         notificacao.innerHTML += "nulo<br>";
//     }

//     // notificacao.innerHTML += (typeof jsObject != "undefined") ? jsObject + "<br>" : "nulo<br>";
//     // notificacao.innerHTML += (jsObject !== undefined) ? jsObject + "<br>" : "nulo<br>";
    
//     // jogo_temp = jsObject;
//     // notificacao.innerHTML += (typeof jogo_temp.dezenasSorteadasOrdemSorteio != undefined) ? jogo_temp.dezenasSorteadasOrdemSorteio + "<br>" : "nulo<br>";

//     $.ajax({
//         url: url_temp,
//         dataType: "text",
//         success: function(data) {
//             jsObject = $.parseJSON(data);
//             notificacao.innerHTML += jsObject + "<br>";
//         }
//     });
//     if (i == limite) {
//         clearInterval(intervalo);
//     }
// },2000);

// jogos();
// $(document).ready(function () {
//     // alert(jsObject);
// });

// jogos();

// function requestMore(i) {
//   $.get('/my/url/?get=' + i, function (data) {
//      if (data != '') {
//        sortArticles(data);
//        requestMore(i + 1);
//      }
//   });
// }

// (document).ready(function () {
//   requestMore(1);
// });

// var obj = {
//     username: "James",
//     surname: "Brandon",
//     id: "[2]"
// };

// var users = [
//     {    
//         "username": "Andy",
//         "surname": "Thompson",
//         "id": [0]
//     },
//     {    
//         "username": "Moe",
//         "surname": "Brown",
//         "id": [1]
//     }
// ];

// users.push(obj);
// notificacao.innerHTML = JSON.stringify(users);