const numeros_permitidos = ["0","1","2","3","4","5","6","7","8","9","."];

const txt_nome_operador = document.getElementById('txt_nome_operador');

const txt_leitura_atual = document.getElementById('txt_leitura_atual');
const txt_leitura_anterior = document.getElementById('txt_leitura_anterior');

const txt_fator = document.getElementById('txt_fator');
const txt_meses = document.getElementById('txt_meses');
const txt_preco_unitario = document.getElementById('txt_preco_unitario');

const txt_m3 = document.getElementById('txt_m3');
const txt_consumo = document.getElementById('txt_consumo');
const txt_valor_devido = document.getElementById('txt_valor_devido');

const sel_tabulacao = document.getElementById('sel_tabulacao');
const cbx_troca_titularidade = document.getElementById('cbx_troca_titularidade');

const cbx_desvinculacao_unidade = document.getElementById('cbx_desvinculacao_unidade');
const cbx_tem_sinistro = document.getElementById('cbx_tem_sinistro');
const cbx_tem_vitima = document.getElementById('cbx_tem_vitima');

const btn_colar_numero_boletim_ocorrencia = document.getElementById('btn_colar_numero_boletim_ocorrencia');
const btn_limpar_numero_boletim_ocorrencia = document.getElementById('btn_limpar_numero_boletim_ocorrencia');

const cbx_risco_morte = document.getElementById('cbx_risco_morte');
const cbx_stript_seguranca = document.getElementById('cbx_stript_seguranca');
const cbx_teste_fuga = document.getElementById('cbx_teste_fuga');
const cbx_falta_documento = document.getElementById('cbx_falta_documento');

const cbx_inadimplente = document.getElementById('cbx_inadimplente');
const btn_colar_dias_atraso = document.getElementById('btn_colar_dias_atraso');
const btn_limpar_dias_atraso = document.getElementById('btn_limpar_dias_atraso');
const btn_colar_valor_devido_atrasado = document.getElementById('btn_colar_valor_devido_atrasado');
const btn_limpar_valor_devido_atrasado = document.getElementById('btn_limpar_valor_devido_atrasado');
const cbx_medidor_bloqueado = document.getElementById('cbx_medidor_bloqueado');

const cbx_cobranca_taxas_multa = document.getElementById('cbx_cobranca_taxas_multa');

const btn_colar_valor_taxa_multa = document.getElementById('btn_colar_valor_taxa_multa');
const btn_limpar_valor_taxa_multa = document.getElementById('btn_limpar_valor_taxa_multa');

const txt_nome_cliente = document.getElementById('txt_nome_cliente');
const txt_cod_sap_cliente = document.getElementById('txt_cod_sap_cliente');
const txt_num_caso = document.getElementById('txt_num_caso');
const txt_data_demonstrativo_reclamado = document.getElementById('txt_data_demonstrativo_reclamado');
const txt_intervalo_leitura_dias = document.getElementById('txt_intervalo_leitura_dias');
const txt_media_consumo_diario = document.getElementById('txt_media_consumo_diario');

const cbx_fogao = document.getElementById('cbx_fogao');
const cbx_chuveiro = document.getElementById('cbx_chuveiro');
const cbx_outros = document.getElementById('cbx_outros');
const txt_tipo_outros = document.getElementById('txt_tipo_outros');

const txt_ano_medidor = document.getElementById('txt_ano_medidor');
const txt_valor_demonstrativo_reclamado = document.getElementById('txt_valor_demonstrativo_reclamado');

const rdg_leitura_normal = document.getElementById('rdg_leitura_normal');
const rdg_leitura_anterior_media = document.getElementById('rdg_leitura_anterior_media');

const rdg_leitura_anterior_normal = document.getElementById('rdg_leitura_anterior_normal');
const rdg_leitura_media = document.getElementById('rdg_leitura_media');

const txt_leitura_anterior_evidencia = document.getElementById('txt_leitura_anterior_evidencia');

const cbx_evidencia_leitura_disponivel = document.getElementById('cbx_evidencia_leitura_disponivel');
const cbx_evidencia_leitura_correta = document.getElementById('cbx_evidencia_leitura_correta');

const txt_leitura_demonstrativo = document.getElementById('txt_leitura_demonstrativo');
const txt_leitura_evidencia = document.getElementById('txt_leitura_evidencia');

const txt_media_seis_meses = document.getElementById('txt_media_seis_meses');
const txt_consumo_demonstrativo_reclamado = document.getElementById('txt_consumo_demonstrativo_reclamado');

const rdg_tipo_cliente_residencial = document.getElementById('rdg_tipo_cliente_residencial');
const rdg_tipo_cliente_comercial = document.getElementById('rdg_tipo_cliente_comercial');
const rdg_tipo_cliente_shopping = document.getElementById('rdg_tipo_cliente_shopping');

const txt_bloco_apartamento = document.getElementById('txt_bloco_apartamento');

const rdg_entrada_atendimento_voz = document.getElementById('rdg_entrada_atendimento_voz');
const rdg_entrada_atendimento_email = document.getElementById('rdg_entrada_atendimento_email');
const rdg_entrada_atendimento_portal = document.getElementById('rdg_entrada_atendimento_portal');
const rdg_entrada_atendimento_whatsapp = document.getElementById('rdg_entrada_atendimento_whatsapp');

const cbx_leitura_alem_limite = document.getElementById('cbx_leitura_alem_limite');

const txt_codigo_medidor = document.getElementById('txt_codigo_medidor');
const txt_analise_detalhada = document.getElementById('txt_analise_detalhada');

const txt_valor1 = document.getElementById('txt_valor1');
const txt_valor2 = document.getElementById('txt_valor2');
const txt_valor3 = document.getElementById('txt_valor3');
const txt_valor4 = document.getElementById('txt_valor4');
const txt_valor5 = document.getElementById('txt_valor5');
const txt_valor6 = document.getElementById('txt_valor6');
const txt_media = document.getElementById('txt_media');

const txt_valor_total_divida = document.getElementById('txt_valor_total_divida');
const txt_quantidade_parcelas = document.getElementById('txt_quantidade_parcelas');
const txt_valor_parcela = document.getElementById('txt_valor_parcela');

const btn_calcular_media = document.getElementById('btn_calcular_media');

const btn_limpar_nome_operador = document.getElementById('btn_limpar_nome_operador');
const btn_colar_nome_operador = document.getElementById('btn_colar_nome_operador');

const btn_limpar_leitura_atual = document.getElementById('btn_limpar_leitura_atual');
const btn_colar_leitura_atual = document.getElementById('btn_colar_leitura_atual');

const btn_limpar_leitura_anterior = document.getElementById('btn_limpar_leitura_anterior');
const btn_colar_leitura_anterior = document.getElementById('btn_colar_leitura_anterior');

const btn_colar_nome_novo_morador = document.getElementById('btn_colar_nome_novo_morador');
const btn_limpar_nome_novo_morador = document.getElementById('btn_limpar_nome_novo_morador');

const btn_colar_nome_cliente = document.getElementById('btn_colar_nome_cliente');
const btn_limpar_nome_cliente = document.getElementById('btn_limpar_nome_cliente');

const btn_colar_cod_sap_cliente = document.getElementById('btn_colar_cod_sap_cliente');
const btn_limpar_cod_sap_cliente = document.getElementById('btn_limpar_cod_sap_cliente');

const btn_colar_num_caso = document.getElementById('btn_colar_num_caso');
const btn_limpar_num_caso = document.getElementById('btn_limpar_num_caso');

const btn_colar_data_demonstrativo_reclamado = document.getElementById('btn_colar_data_demonstrativo_reclamado');
const btn_limpar_data_demonstrativo_reclamado = document.getElementById('btn_limpar_data_demonstrativo_reclamado');

const btn_colar_intervalo_leitura_dias = document.getElementById('btn_colar_intervalo_leitura_dias');
const btn_limpar_intervalo_leitura_dias = document.getElementById('btn_limpar_intervalo_leitura_dias');

const btn_colar_tipo_outros = document.getElementById('btn_colar_tipo_outros');
const btn_limpar_tipo_outros = document.getElementById('btn_limpar_tipo_outros');

const btn_colar_ano_medidor = document.getElementById('btn_colar_ano_medidor');
const btn_limpar_ano_medidor = document.getElementById('btn_limpar_ano_medidor');

const btn_colar_valor_demonstrativo_reclamado = document.getElementById('btn_colar_valor_demonstrativo_reclamado');
const btn_limpar_valor_demonstrativo_reclamado = document.getElementById('btn_limpar_valor_demonstrativo_reclamado');

const btn_colar_leitura_anterior_evidencia = document.getElementById('btn_colar_leitura_anterior_evidencia');
const btn_limpar_leitura_anterior_evidencia = document.getElementById('btn_limpar_leitura_anterior_evidencia');

const btn_colar_leitura_demonstrativo = document.getElementById('btn_colar_leitura_demonstrativo');
const btn_limpar_leitura_demonstrativo = document.getElementById('btn_limpar_leitura_demonstrativo');

const btn_colar_leitura_evidencia = document.getElementById('btn_colar_leitura_evidencia');
const btn_limpar_leitura_evidencia = document.getElementById('btn_limpar_leitura_evidencia');

const btn_colar_media_seis_meses = document.getElementById('btn_colar_media_seis_meses');
const btn_limpar_media_seis_meses = document.getElementById('btn_limpar_media_seis_meses');

const btn_colar_consumo_demonstrativo_reclamado = document.getElementById('btn_colar_consumo_demonstrativo_reclamado');
const btn_limpar_consumo_demonstrativo_reclamado = document.getElementById('btn_limpar_consumo_demonstrativo_reclamado');

const btn_colar_bloco_apartamento = document.getElementById('btn_colar_bloco_apartamento');
const btn_limpar_bloco_apartamento = document.getElementById('btn_limpar_bloco_apartamento');

const btn_colar_codigo_medidor = document.getElementById('btn_colar_codigo_medidor');
const btn_limpar_codigo_medidor = document.getElementById('btn_limpar_codigo_medidor');

const btn_colar_analise_detalhada = document.getElementById('btn_colar_analise_detalhada');
const btn_limpar_analise_detalhada = document.getElementById('btn_limpar_analise_detalhada');

const btn_gerar_email = document.getElementById('btn_gerar_email');
const btn_gerar_sms = document.getElementById('btn_gerar_sms');
const btn_gerar_whatsapp = document.getElementById('btn_gerar_whatsapp');

const btn_limpar_valor1 = document.getElementById('btn_limpar_valor1');
const btn_limpar_valor2 = document.getElementById('btn_limpar_valor2');
const btn_limpar_valor3 = document.getElementById('btn_limpar_valor3');
const btn_limpar_valor4 = document.getElementById('btn_limpar_valor4');
const btn_limpar_valor5 = document.getElementById('btn_limpar_valor5');
const btn_limpar_valor6 = document.getElementById('btn_limpar_valor6');

const btn_limpar_valor_total_divida = document.getElementById('btn_limpar_valor_total_divida');
const btn_limpar_quantidade_parcelas = document.getElementById('btn_limpar_quantidade_parcelas');

[
    btn_limpar_nome_operador,
    btn_limpar_leitura_atual, 
    btn_limpar_leitura_anterior,
    btn_limpar_nome_novo_morador,
    btn_limpar_numero_boletim_ocorrencia,
    btn_limpar_dias_atraso,
    btn_limpar_valor_devido_atrasado,
    btn_limpar_valor_taxa_multa,
    btn_limpar_nome_cliente,
    btn_limpar_cod_sap_cliente, 
    btn_limpar_num_caso,
    btn_limpar_data_demonstrativo_reclamado,
    btn_limpar_intervalo_leitura_dias,
    btn_limpar_tipo_outros,
    btn_limpar_ano_medidor,
    btn_limpar_valor_demonstrativo_reclamado,
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
    btn_limpar_valor6,
    btn_limpar_valor_total_divida,
    btn_limpar_quantidade_parcelas
].forEach(function (el) {
    el.addEventListener('click', () => {
        let idElemento = el.id.replace('btn_limpar_', 'txt_');
        let elementoTemp = document.getElementById(idElemento);
        elementoTemp.value = '';
        elementoTemp.focus();
    });
});

[
    btn_colar_nome_operador,
    btn_colar_leitura_atual,
    btn_colar_leitura_anterior,
    btn_colar_nome_novo_morador,
    btn_colar_numero_boletim_ocorrencia,
    btn_colar_dias_atraso,
    btn_colar_valor_devido_atrasado,
    btn_colar_valor_taxa_multa,
    btn_colar_nome_cliente,
    btn_colar_cod_sap_cliente,
    btn_colar_num_caso,
    btn_colar_data_demonstrativo_reclamado,
    btn_colar_intervalo_leitura_dias,
    btn_colar_tipo_outros,
    btn_colar_ano_medidor,
    btn_colar_valor_demonstrativo_reclamado,
    btn_colar_leitura_anterior_evidencia,
    btn_colar_leitura_demonstrativo,
    btn_colar_leitura_evidencia,
    btn_colar_media_seis_meses,
    btn_colar_consumo_demonstrativo_reclamado,
    btn_colar_bloco_apartamento,
    btn_colar_codigo_medidor,
    btn_colar_analise_detalhada
].forEach(function (el) {
    el.addEventListener('click', () => {
        let idElemento = el.id.replace('btn_colar_', 'txt_');
        let elementoTemp = document.getElementById(idElemento);
        pasteFromClipboard(elementoTemp);
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

['keyup','change'].forEach(function(e) {
    [txt_valor_total_divida, txt_quantidade_parcelas].forEach(function (el) {
        el.addEventListener(e, () => {
            txt_valor_parcela.value = "";
            
            let valor_total_divida = parseFloat(txt_valor_total_divida.value.trim());
            
            let quantidade_parcelas = parseInt(txt_quantidade_parcelas.value.trim());
            
            if (valor_total_divida > 0 && quantidade_parcelas > 0) {
                calcularParcelamento();
            }
        });
    });
});


btn_calcular_media.addEventListener('click', function () {
    calcularMedia();
});

txt_intervalo_leitura_dias.addEventListener('change', () => {
   calcularMediaConsumoDiario();
});

btn_limpar_intervalo_leitura_dias.addEventListener('click', () => {
   calcularMediaConsumoDiario();
});

btn_gerar_email.addEventListener('click', () => {
    gerarEmail();
});

btn_gerar_sms.addEventListener('click', () => {
    gerarSMS();
});

btn_gerar_whatsapp.addEventListener('click', () => {
    gerarWhatsapp();
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

    let total_valores = valores.reduce((a, b) => a + b, 0);

    let media = total_valores / i;

    if(!isNaN(media)) {
        txt_media.value = media;
    }
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

function gerarEmail() {
    let nome_operador = txt_nome_operador.value.trim();
    if (nome_operador.length == 0) {
        nome_operador = "PREENCHER NOME DO OPERADOR";
    }

    let nome_cliente = txt_nome_cliente.value.trim();
    if (nome_cliente.length == 0) {
        nome_cliente = "PREENCHER NOME DO CLIENTE";
    }

    let numero_caso = txt_num_caso.value.trim();
    if (numero_caso.length == 0) {
        numero_caso = "PREENCHER NÚMERO DO CASO";
    }

    let condicao_leitura = "";
    if (rdg_leitura_normal.checked) {
        condicao_leitura = "Normal";
    } else if (rdg_leitura_media.checked) {
        condicao_leitura = "Média";
    }

    let inadimplente = "Não";
    if (cbx_inadimplente.checked) {
        inadimplente = "Sim";
    }

    let taxas_multas = "Não";
    if (cbx_cobranca_taxas_multa.checked) {
        taxas_multas = "Sim";
    }

    let texto = "Prezado(a) Sr(a). <span onclick=\"txt_nome_cliente.focus()\">" + nome_cliente + "</span>,\n esperamos que esteja bem.<br>" + 
    "Meu nome é <span onclick=\"txt_nome_operador.focus()\">" + nome_operador + "</span>,<br> sou representante de atendimento Copa Energia<br> e vou te ajudar a resolver sua demanda.<br><br>" + 
    "Gostaria de informar que a solicitação nº <span onclick=\"txt_num_caso.focus()\">" + numero_caso + "</span> foi atendida,<br> referente à conta com vencimento em <span onclick=\"txt_data_demonstrativo_reclamado.focus()\">" + txt_data_demonstrativo_reclamado.value.trim() + "</span>, " + 
    "pela qual foi analisado que <span onclick=\"txt_analise_detalhada.focus()\">" + txt_analise_detalhada.value.trim() + "</span>,<br> visto as evidências abaixo, as quais comprovam a veracidade dos fatos: <br><br>" + 
    "Há cobrança de taxas/multa: <span onclick=\"cbx_cobranca_taxas_multa.focus()\">" + taxas_multas + "</span>;<br>" +
    "Inadimplente: <span onclick=\"cbx_inadimplente.focus()\">" + inadimplente + "</span>;<br>" +
    "Condição de leitura: <span onclick=\"rdg_leitura_normal.focus()\">" + condicao_leitura + "</span>;";

    notificarOk(texto);
}

function gerarSMS() {
    let nome_cliente = txt_nome_cliente.value.trim();
    if (nome_cliente.length == 0) {
        nome_cliente = "PREENCHER NOME DO CLIENTE";
    }

    let numero_caso = txt_num_caso.value.trim();
    if (numero_caso.length == 0) {
        numero_caso = "PREENCHER NÚMERO DO CASO";
    }

    let texto = "Prezado(a) <span onclick=\"txt_nome_cliente.focus()\">" + nome_cliente + "</span>,\n" + 
    "A Copa Energia tem informações sobre o protocolo: <span onclick=\"txt_num_caso.focus()\">" + numero_caso + "</span>.\n" + 
    "Favor entrar em contato e verificar email/whatsapp.";

    notificarOk(texto);
}

function gerarWhatsapp() {
    let nome_operador = txt_nome_operador.value.trim();
    if (nome_operador.length == 0) {
        nome_operador = "PREENCHER NOME DO OPERADOR";
    }

    let nome_cliente = txt_nome_cliente.value.trim();
    if (nome_cliente.length == 0) {
        nome_cliente = "PREENCHER NOME DO CLIENTE";
    }

    let numero_caso = txt_num_caso.value.trim();
    if (numero_caso.length == 0) {
        numero_caso = "PREENCHER NÚMERO DO CASO";
    }
    
    let condicao_leitura = "";
    if (rdg_leitura_normal.checked) {
        condicao_leitura = "Normal";
    } else if (rdg_leitura_media.checked) {
        condicao_leitura = "Média";
    }

    let inadimplente = "Não";
    if (cbx_inadimplente.checked) {
        inadimplente = "Sim";
    }

    let taxas_multas = "Não";
    if (cbx_cobranca_taxas_multa.checked) {
        taxas_multas = "Sim";
    }

    let texto = "Prezado(a) Sr(a). <span onclick=\"txt_nome_cliente.focus()\">" + nome_cliente + "</span>,\n esperamos que esteja bem.<br>" + 
    "Meu nome é <span onclick=\"txt_nome_operador.focus()\">" + nome_operador + "</span>,<br> sou representante de atendimento Copa Energia<br> e vou te ajudar a resolver sua demanda.<br><br>" + 
    "Gostaria de informar que a solicitação nº <span onclick=\"txt_num_caso.focus()\">" + numero_caso + "</span> foi atendida,<br> referente à conta com vencimento em <span onclick=\"txt_data_demonstrativo_reclamado.focus()\">" + txt_data_demonstrativo_reclamado.value.trim() + "</span>, " + 
    "pela qual foi analisado que <span onclick=\"txt_analise_detalhada.focus()\">" + txt_analise_detalhada.value.trim() + "</span>,<br> visto as evidências abaixo, as quais comprovam a veracidade dos fatos: <br><br>" + 
    "Há cobrança de taxas/multa: <span onclick=\"cbx_cobranca_taxas_multa.focus()\">" + taxas_multas + "</span>;<br>" +
    "Inadimplente: <span onclick=\"cbx_inadimplente.focus()\">" + inadimplente + "</span>;<br>" +
    "Condição de leitura: <span onclick=\"rdg_leitura_normal.focus()\">" + condicao_leitura + "</span>;" + 
    "Observações: a leitura do consumo de gás é realizada apenas conforme o intervalo de leitura (em dias) informado, não sendo possível identificar picos de uso em dia/horário específicos;<br>" + 
    "<i>Dicas para economizar energia e colaborar para sustentabilidade</i>:<br>" + 
    "<b>Na Cozinha</b>:" + 
    "- <b>Use a panela de pressão</b>: Ela cozinha os alimentos muito mais rapidamente, o que reduz drasticamente o tempo de uso do gás;<br>" + 
    "- <b>Tampe as panelas</b>: Manter a panela tampada retém o calor e acelera o cozimento, economizando energia;<br>" + 
    "<b>Ajuste a chama</b>: Use a boca do fogão do tamanho adequado para a panela. A chama nunca deve ser maior que o fundo da panela, para evitar desperdício de calor para o ambiente;<br>" + 
    "<b>Reduza o fogo após ferver</b>: Assim que a água ou o alimento ferver, abaixe a chama para o mínimo necessário para manter a fervura. O fogo alto não acelera o processo nesse ponto;<br>" + 
    "<b>Corte os alimentos em pedaços menores</b>: Pedaços menores cozinham mais rapidamente;<br>" + 
    "<b>Aproveite o calor residual</b>: Desligue o fogo um pouco antes do alimento estar totalmente pronto. O calor já presente na panela e no alimento terminará o cozimento (isso funciona bem com massas, por exemplo);<br>" + 
    "<b>Planeje as refeições</b>: Cozinhar uma maior quantidade de comida de uma só vez ou usar o vapor de um cozimento para cozinhar outro alimento (ex: batatas e cenouras no vapor da panela de arroz) otimiza o uso do gás;<br>" + 
    "<b>Descongele alimentos</b>: Alimentos congelados levam muito mais tempo para cozinhar. Descongele-os completamente antes de levar ao fogo;<br>" + 
    "<b>Use o micro-ondas para aquecer</b>: Para pequenas porções ou líquidos, o micro-ondas é geralmente mais rápido e eficiente;<br>" + 
    "<b>No Banho e Outros Usos</b>:" + 
    "<b>Banhos mais curtos</b>: Se o seu chuveiro é a gás, reduzir o tempo debaixo da água quente diminui significativamente o consumo;<br>" + 
    "<b>Regule a temperatura</b>: Evite a temperatura máxima do aquecedor, se possível. Uma temperatura confortável, mas não excessivamente quente, economiza gás;<br>" + 
    "<b>Feche a torneira</b>: Desligue o aquecedor a gás (ou a torneira de água quente) enquanto se ensaboa ou escova os dentes;<br>" + 
    "<b>Manutenção e Segurança</b>:<br>" + 
    "<b>Mantenha o fogão limpo</b>: Bocas entupidas ou sujas resultam em uma queima ineficiente, com chamas alaranjadas. A chama ideal para o bom funcionamento e economia é a azul;<br>" + 
    "<b>Verifique vazamentos e a validade dos equipamentos</b>: Mangueiras e reguladores de gás têm data de validade (geralmente 5 anos). Verifique periodicamente se há vazamentos para garantir a segurança e evitar desperdício";

    notificarOk(texto);
}

function calcularMediaConsumoDiario() {
    let consumo = parseFloat(txt_consumo.value.trim());
    let intervalo_leitura_dias = parseInt(txt_intervalo_leitura_dias.value.trim());
    let media_consumo_diario = consumo / intervalo_leitura_dias;

    txt_media_consumo_diario.value = "";
    if (consumo > 0 && intervalo_leitura_dias > 0) {
        txt_media_consumo_diario.value = media_consumo_diario;
    }
}

async function pasteFromClipboard(input) {
  const text = await navigator.clipboard.readText();
  input.value = text;
}

function calcularParcelamento() {
    let valor_total_divida = parseFloat(txt_valor_total_divida.value.trim());
    let quantidade_parcelas = parseInt(txt_quantidade_parcelas.value.trim());

    txt_valor_parcela.value = valor_total_divida / quantidade_parcelas;
}

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