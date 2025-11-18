const txt_nome_operador = document.getElementById('txt_nome_operador');

const txt_leitura_atual = document.getElementById('txt_leitura_atual');
const txt_leitura_anterior = document.getElementById('txt_leitura_anterior');

const txt_fator = document.getElementById('txt_fator');
const txt_meses = document.getElementById('txt_meses');
const txt_preco_unitario = document.getElementById('txt_preco_unitario');

const txt_m3 = document.getElementById('txt_m3');
const txt_consumo = document.getElementById('txt_consumo');
const txt_valor_devido = document.getElementById('txt_valor_devido');

const txt_nome_cliente = document.getElementById('txt_nome_cliente');
const txt_cod_sap_cliente = document.getElementById('txt_cod_sap_cliente');
const txt_num_caso = document.getElementById('txt_num_caso');
const txt_data_demonstrativo_reclamado = document.getElementById('txt_data_demonstrativo_reclamado');
const cbx_fogao = document.getElementById('cbx_fogao');
const cbx_chuveiro = document.getElementById('cbx_chuveiro');
const cbx_outros = document.getElementById('cbx_outros');

const txt_analise_detalhada = document.getElementById('txt_analise_detalhada');

const txt_valor1 = document.getElementById('txt_valor1');
const txt_valor2 = document.getElementById('txt_valor2');
const txt_valor3 = document.getElementById('txt_valor3');
const txt_valor4 = document.getElementById('txt_valor4');
const txt_valor5 = document.getElementById('txt_valor5');
const txt_valor6 = document.getElementById('txt_valor6');
const txt_media = document.getElementById('txt_media');

const numeros_permitidos = ["0","1","2","3","4","5","6","7","8","9","."];

const btn_calcular_media = document.getElementById('btn_calcular_media');

const btn_limpar_nome_operador = document.getElementById('btn_limpar_nome_operador');
const btn_limpar_leitura_atual = document.getElementById('btn_limpar_leitura_atual');
const btn_limpar_leitura_anterior = document.getElementById('btn_limpar_leitura_anterior');
const btn_limpar_cod_sap_cliente = document.getElementById('btn_limpar_cod_sap_cliente');
const btn_limpar_nome_cliente = document.getElementById('btn_limpar_nome_cliente');
const btn_limpar_num_caso = document.getElementById('btn_limpar_num_caso');
const btn_limpar_data_demonstrativo_reclamado = document.getElementById('btn_limpar_data_demonstrativo_reclamado');
const btn_tipo_outros = document.getElementById('btn_tipo_outros');
const btn_limpar_ano_medidor = document.getElementById('btn_limpar_ano_medidor');
const btn_limpar_valor_demonstrativo_reclamado = document.getElementById('btn_limpar_valor_demonstrativo_reclamado');
const btn_limpar_intervalo_leitura = document.getElementById('btn_limpar_intervalo_leitura');
const btn_limpar_leitura_anterior_evidencia = document.getElementById('btn_limpar_leitura_anterior_evidencia');
const btn_limpar_leitura_demonstrativo = document.getElementById('btn_limpar_leitura_demonstrativo');
const btn_limpar_leitura_evidencia = document.getElementById('btn_limpar_leitura_evidencia');
const btn_limpar_media_seis_meses = document.getElementById('btn_limpar_media_seis_meses');
const btn_limpar_consumo_demonstrativo_reclamado = document.getElementById('btn_limpar_consumo_demonstrativo_reclamado');
const btn_limpar_bloco_apartamento = document.getElementById('btn_limpar_bloco_apartamento');
const btn_limpar_codigo_medidor = document.getElementById('btn_limpar_codigo_medidor');
const btn_limpar_analise_detalhada = document.getElementById('btn_limpar_analise_detalhada');

const btn_limpar_valor1 = document.getElementById('btn_limpar_valor1');
const btn_limpar_valor2 = document.getElementById('btn_limpar_valor2');
const btn_limpar_valor3 = document.getElementById('btn_limpar_valor3');
const btn_limpar_valor4 = document.getElementById('btn_limpar_valor4');
const btn_limpar_valor5 = document.getElementById('btn_limpar_valor5');
const btn_limpar_valor6 = document.getElementById('btn_limpar_valor6');

[
    btn_limpar_nome_operador,
    btn_limpar_cod_sap_cliente, 
    btn_limpar_leitura_atual, 
    btn_limpar_leitura_anterior,
    btn_limpar_nome_cliente,
    btn_limpar_num_caso,
    btn_limpar_data_demonstrativo_reclamado,
    btn_tipo_outros,
    btn_limpar_ano_medidor,
    btn_limpar_valor_demonstrativo_reclamado,
    btn_limpar_intervalo_leitura,
    btn_limpar_leitura_anterior_evidencia,
    btn_limpar_leitura_demonstrativo,
    btn_limpar_leitura_evidencia,
    btn_limpar_media_seis_meses,
    btn_limpar_consumo_demonstrativo_reclamado,
    btn_limpar_bloco_apartamento,
    btn_limpar_codigo_medidor,
    btn_limpar_analise_detalhada,
    btn_limpar_valor1,
    btn_limpar_valor2,
    btn_limpar_valor3,
    btn_limpar_valor4,
    btn_limpar_valor5,
    btn_limpar_valor6
].forEach(function (el) {
    el.addEventListener('click', () => {
        let idElemento = el.id.replace('btn_limpar_', 'txt_');
        // alert("idElemento: " + idElemento);
        let elementoTemp = document.getElementById(idElemento);
        elementoTemp.value = '';
        elementoTemp.focus();
    });
});

['keyup','change'].forEach(function(e) {
    [txt_leitura_atual, txt_leitura_anterior].forEach(function (el) {
        el.addEventListener(e, () => {
            txt_m3.value = "";
            txt_consumo.value = "";
            txt_valor_devido.value = "";

            let leitura_atual = parseFloat(txt_leitura_atual.value.trim());
            let leitura_anterior = parseFloat(txt_leitura_anterior.value.trim());
            
            if (leitura_atual > leitura_anterior) {
                calcularM3();
                calcularConsumo();
                calcularValorDevido();
            }
        });
    });
});

btn_calcular_media.addEventListener('click', function () {
    calcularMedia();
});

function calcularM3() {
    const leitura_atual = parseFloat(txt_leitura_atual.value.trim());
    const leitura_anterior = parseFloat(txt_leitura_anterior.value.trim());

    if (leitura_atual > 0 && leitura_anterior > 0) {
        txt_m3.value = leitura_atual - leitura_anterior;
    }
}

function calcularConsumo() {
    const m3 = parseFloat(txt_m3.value.trim());
    const fator = parseFloat(txt_fator.value.trim());

    if (m3 > 0 && fator > 0) {
        txt_consumo.value = m3 * fator;
    }
}

function calcularValorDevido() {
    const consumo = parseFloat(txt_consumo.value.trim());
    const preco_unitario = parseFloat(txt_preco_unitario.value.trim());

    if (consumo > 0 && preco_unitario > 0) {
        txt_valor_devido.value = consumo * preco_unitario;
    }
}

function calcularMedia() {
    const valor1 = parseFloat(txt_valor1.value.trim());
    const valor2 = parseFloat(txt_valor2.value.trim());
    const valor3 = parseFloat(txt_valor3.value.trim());
    const valor4 = parseFloat(txt_valor4.value.trim());
    const valor5 = parseFloat(txt_valor5.value.trim());
    const valor6 = parseFloat(txt_valor6.value.trim());

    txt_media.value = "";

    let valores = [
        (isNaN(valor1)) ? 0 : valor1, 
        (isNaN(valor2)) ? 0 : valor2,
        (isNaN(valor3)) ? 0 : valor3,
        (isNaN(valor4)) ? 0 : valor4,
        (isNaN(valor5)) ? 0 : valor5,
        (isNaN(valor6)) ? 0 : valor6
    ];

    let i = 0;
    valores.forEach(valor => {
        if (valor > 0) {
            i++;
        }
    });
    // alert(i);

    let total_valores = valores.reduce((a, b) => a + b, 0);
    // alert(total_valores);

    let media = total_valores / i;

    if(!isNaN(media)) {
        txt_media.value = media;
    }

    // alert(media);
}

function achouNumero(numero_digitado) {
    let achou = false;
    numeros_permitidos.forEach(numero_permitido => {
        if (numero_permitido == numero_digitado) {
            achou = true;
        }
    });
    return achou;
    /**
     * Utilização:
     * if (!achouNumero(txt_leitura_atual.key)) {
     *     return false;
     * }
     */
}

function emailAnaliseConsumo() {
    let nome_operador = txt_nome_operador.value.trim();
    let nome_cliente = txt_nome_cliente.value.trim();
    let numero_caso = txt_num_caso.value.trim();
    let condicao_leitura = ""; /** parei aqui */

    var cumprimento = "Prezado(a) Sr. " + nome_cliente + ", esperamos que esteja bem.\n" + 
    "Meu nome é " + nome_operador + ", sou representante de atendimento Copa Energia.\n\n" + 
    "Gostaríamos de informar que verificamos a solicitação nº " + numero_caso + ", referente à conta com vencimento em " + txt_data_demonstrativo_reclamado + ", " + 
    "pela qual foi analisado que " + txt_analise_detalhada + ", visto as evidências abaixo, as quais comprovam a veracidade dos fatos: \n\n" + 
    "Condição de leitura: " + condicao_leitura;
}

// document.addEventListener('change', function (event) {
//     alert('event.key: ' + event.key);
//     alert('event.code:' + event.code);
//     alert('event.keyCode:' + event.keyCode);
//     alert(event.target.type);
//     if (event.target.type == 'number') {
//         alert("input number");
//     }
// });

$(document).ready(function() {
    // $('#txt_leitura_atual').mask('00000.000');
    // $('#txt_leitura_anterior').mask('00000.000');

    // $('#txt_fator').mask('0.0');
    // $('#txt_meses').mask('00');
    // $('#txt_preco_unitario').mask('0000.000');

    // $('#txt_m3').mask('00000.000');
    // $('#txt_valor_devido').mask('R$00000,00');

    $('#txt_cod_sap_cliente').mask('0000000000');
    $('#txt_num_caso').mask('0000000000');
    $('#txt_data_demonstrativo_reclamado').mask('00/00/0000');
    $('#txt_ano_medidor').mask('0000');
    // $('#txt_valor_demonstrativo_reclamado').mask('0000.00');
    // em construção...

    // $('#txt_valor1').mask('0000.0000');
    // $('#txt_valor2').mask('0000.0000');
    // $('#txt_valor3').mask('0000.0000');
    // $('#txt_valor4').mask('0000.0000');
    // $('#txt_valor5').mask('0000.0000');
    // $('#txt_valor6').mask('0000.0000');

});

// alert("ok");