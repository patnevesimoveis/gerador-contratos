// Base de dados com as cláusulas integrais para cada modelo de contrato
const bancoClausulas = {
    um_locatario_sem_fiador: `
        <h3>II – DO OBJETO, ESTADO E PRAZO</h3>
        <p><strong>CLÁUSULA 1ª:</strong> O Locador é senhor e legítimo possuidor do imóvel residencial descrito no resumo deste contrato, entregando-o nesta data ao LOCATÁRIO livre e desembaraçado de quaisquer ônus.</p>
        <p><strong>CLÁUSULA 2ª:</strong> O LOCATÁRIO declara que recebe o imóvel em perfeitas condições de habitabilidade, pintura, vidraças, instalações elétricas e hidráulicas, conforme Termo de Vistoria assinado pelas partes, obrigando-se a devolvê-lo no mesmo estado.</p>
        <p><strong>CLÁUSULA 3ª:</strong> O prazo da locação é o fixado no quadro resumo. Caso o LOCATÁRIO permaneça no imóvel após o término sem oposição do LOCADOR, presumir-se-á prorrogada a locação por prazo indeterminado, mantidas as demais cláusulas.</p>
        
        <h3>III – DO ALUGUEL, PAGAMENTO, REAJUSTES E ENCARGOS</h3>
        <p><strong>CLÁUSULA 4ª:</strong> O valor mensal do aluguel é o estipulado no resumo. O pagamento deverá ser efetuado impreterivelmente até o dia do vencimento estipulado através de meio indicado pela ADMINISTRADORA.</p>
        <p><strong>CLÁUSULA 5ª:</strong> É concedido um bônus/desconto por pontualidade no valor descrito no resumo. O pagamento efetuado após a data de vencimento perderá o desconto e sofrerá multa de 10% mais juros de mora.</p>
        <p><strong>CLÁUSULA 6ª:</strong> Além do aluguel, correm por conta exclusiva do LOCATÁRIO todas as despesas de consumo de energia, água, taxa de lixo, condomínio (se houver) e IPTU proporcionais ao período de locação.</p>

        <h3>IV – DAS BENFEITORIAS E MODIFICAÇÕES</h3>
        <p><strong>CLÁUSULA 7ª:</strong> Qualquer benfeitoria ou modificação no imóvel dependerá de prévia autorização por escrito do LOCADOR, não gerando direito de retenção ou indenização pelas mesmas.</p>
        
        <h3>V – DA MULTA POR INFRAÇÃO E RESCISÃO</h3>
        <p><strong>CLÁUSULA 8ª:</strong> Fica estipulada a multa equivalente a 03 (três) meses de aluguel vigente à parte que infringir qualquer cláusula deste contrato, cobrada proporcionalmente ao tempo restante de contrato se houver rescisão antecipada.</p>
        <p><strong>CLÁUSULA 27ª (DO DIREITO DE PREFERÊNCIA):</strong> Na hipótese de o Locador desejar vender, prometer vender, ceder ou prometer ceder direitos de aquisição sobre o imóvel objeto desta locação, fica o Locador obrigado a dar conhecimento do negócio ao LOCATÁRIO. O LOCATÁRIO terá o prazo de 30 (trinta) dias para exercer seu direito de preferência na aquisição, nos termos do art. 27 da Lei 8.245/91.</p>
    `,
    um_locatario_com_fiador: `
        <h3>II – DO OBJETO, ESTADO E PRAZO</h3>
        <p><strong>CLÁUSULA 1ª:</strong> O Locador é senhor e legítimo possuidor do imóvel residencial descrito no resumo deste contrato...</p>
        <p><strong>CLÁUSULA 2ª:</strong> O LOCATÁRIO recebe o imóvel em perfeitas condições...</p>
        
        <h3>III – DO ALUGUEL, PAGAMENTO E ENCARGOS</h3>
        <p><strong>CLÁUSULA 4ª:</strong> O valor mensal do aluguel é o estipulado no resumo...</p>

        <h3>IV – DA GARANTIA DA FIANÇA</h3>
        <p><strong>CLÁUSULA 25ª:</strong> Assina também o presente contrato de locação, na qualidade de FIADOR(A) e principal pagador, solidariamente responsável com o LOCATÁRIO por todas as obrigações contratuais, a pessoa qualificada no quadro resumo, cuja responsabilidade subsistirá até a efetiva entrega das chaves.</p>
        <p><strong>CLÁUSULA 29ª (DO DIREITO DE PREFERÊNCIA):</strong> Na hipótese de o Locador desejar vender o imóvel, o LOCATÁRIO terá o prazo de 30 dias para exercer seu direito de preferência nos termos da Lei 8.245/91.</p>
    `,
    dois_locatarios_sem_fiador: `
        <h3>II – DO OBJETO, ESTADO E PRAZO</h3>
        <p><strong>CLÁUSULA 1ª:</strong> O Locador aluga o imóvel aos LOCATÁRIOS 1 e 2 configurados no resumo...</p>
        <p><strong>CLÁUSULA 5ª:</strong> Os LOCATÁRIOS declaram-se devedores solidários por todas as obrigações financeiras emanadas deste contrato...</p>
        <p><strong>CLÁUSULA 28ª (DO DIREITO DE PREFERÊNCIA):</strong> Conforme art. 27 da Lei 8.245/91, os LOCATÁRIOS terão preferência conjunta ou individual na compra do imóvel...</p>
    `
};

document.addEventListener("DOMContentLoaded", function() {
    const selectTipo = document.getElementById('select-tipo-contrato');
    
    // Lista de inputs simples de espelhamento texto
    const inputsMap = [
        { inId: 'in_num_contrato', txtId: 'txt_num_contrato' },
        { inId: 'in_endereco', txtId: 'txt_endereco' },
        { inId: 'in_valor', txtId: 'txt_valor' },
        { inId: 'in_desconto', txtId: 'txt_desconto' },
        { inId: 'in_vencimento', txtId: 'txt_vencimento' },
        { inId: 'in_prazo', txtId: 'txt_prazo' },
        { inId: 'in_inicio', txtId: 'txt_inicio' },
        { inId: 'in_termino', txtId: 'txt_termino' }
    ];

    // Atualização em tempo real do texto comum
    inputsMap.forEach(item => {
        const inputEl = document.getElementById(item.inId);
        const txtEl = document.getElementById(item.txtId);
        if (inputEl && txtEl) {
            inputEl.addEventListener('input', () => {
                txtEl.textContent = inputEl.value || "________";
            });
        }
    });

    // Inputs especiais (Datas e Nomes que mudam em mais de um lugar)
    document.getElementById('in_data_doc').addEventListener('input', function() {
        const v = this.value || "_______________________, ___ de _____________ de ______";
        document.getElementById('txt_data_doc_topo').textContent = v;
        document.getElementById('txt_data_doc_rodape').textContent = v;
    });

    document.getElementById('in_nome_locador').addEventListener('input', function() {
        document.getElementById('txt_nome_locador').textContent = this.value || "[NOME DO LOCADOR]";
        document.getElementById('ass_locador').textContent = this.value.toUpperCase() || "_________________";
    });

    document.getElementById('in_nome_locatario1').addEventListener('input', function() {
        const sufixo = selectTipo.value === 'dois_locatarios_sem_fiador' ? " 1" : "";
        document.getElementById('celula-locatarios').querySelector('strong').textContent = `LOCATÁRIO (A)${sufixo}:`;
        document.getElementById('txt_nome_locatario1').textContent = this.value || "[NOME DO LOCATÁRIO]";
        document.getElementById('ass_locatario1').textContent = this.value.toUpperCase() || "_________________";
    });

    // Monitora a mudança do tipo de contrato para redesenhar a tabela e as cláusulas
    selectTipo.addEventListener('change', adaptarInterfaceEContrato);

    function adaptarInterfaceEContrato() {
        const tipo = selectTipo.value;
        
        // 1. Injeta o bloco integral de cláusulas correto
        document.getElementById('conteudo-clausulas').innerHTML = bancoClausulas[tipo];

        // 2. Controla visibilidade de inputs no painel esquerdo
        document.getElementById('grupo-locatario2').style.display = (tipo === 'dois_locatarios_sem_fiador') ? 'block' : 'none';
        document.getElementById('grupo-fiador').style.display = (tipo === 'um_locatario_com_fiador') ? 'block' : 'none';

        // 3. Reajusta os blocos e células internos da tabela resumo do contrato
        const celulaLocatarios = document.getElementById('celula-locatarios');
        const celulaGarantia = document.getElementById('celula-garantia');
        const blocoAssinaturaExtra = document.getElementById('bloco-assinatura-extra');
        
        blocoAssinaturaExtra.innerHTML = ""; // limpa assinaturas extras

        if (tipo === 'um_locatario_sem_fiador') {
            celulaLocatarios.innerHTML = `<strong>LOCATÁRIO (A):</strong> <span id="txt_nome_locatario1">___________</span>`;
            celulaGarantia.innerHTML = `<strong>GARANTIA:</strong> <span id="txt_garantia_status">Sem fiador — contrato sem garantia de fiança</span>`;
        } 
        else if (tipo === 'um_locatario_com_fiador') {
            celulaLocatarios.innerHTML = `<strong>LOCATÁRIO (A):</strong> <span id="txt_nome_locatario1">___________</span>`;
            celulaGarantia.innerHTML = `<strong>FIADOR (A):</strong> <span id="txt_nome_fiador">[NOME DO FIADOR]</span>`;
            
            blocoAssinaturaExtra.innerHTML = `
                <div class="campo-assinatura">
                    <p>__________________________________________</p>
                    <p>FIADOR(A): <span id="ass_fiador">_________________</span></p>
                </div>
            `;
            
            // Ativa escuta do input do fiador
            document.getElementById('in_fiador').addEventListener('input', function() {
                document.getElementById('txt_nome_fiador').textContent = this.value || "[NOME DO FIADOR]";
                document.getElementById('ass_fiador').textContent = this.value.toUpperCase() || "_________________";
            });
        } 
        else if (tipo === 'dois_locatarios_sem_fiador') {
            celulaLocatarios.innerHTML = `
                <strong>LOCATÁRIO (A) 1:</strong> <span id="txt_nome_locatario1">___________</span><br>
                <strong>LOCATÁRIO (A) 2:</strong> <span id="txt_nome_locatario2">[NOME DO LOCATÁRIO 2]</span>
            `;
            celulaGarantia.innerHTML = `<strong>GARANTIA:</strong> <span id="txt_garantia_status">Sem fiador — contrato sem garantia de fiança</span>`;
            
            blocoAssinaturaExtra.innerHTML = `
                <div class="campo-assinatura">
                    <p>__________________________________________</p>
                    <p>LOCATÁRIO(A) 2: <span id="ass_locatario2">_________________</span></p>
                </div>
            `;

            // Ativa escuta do segundo locatário
            document.getElementById('in_nome_locatario2').addEventListener('input', function() {
                document.getElementById('txt_nome_locatario2').textContent = this.value || "[NOME DO LOCATÁRIO 2]";
                document.getElementById('ass_locatario2').textContent = this.value.toUpperCase() || "_________________";
            });
        }

        // Força a reinicialização dos gatilhos de digitação para os campos principais
        document.getElementById('in_nome_locatario1').value = "";
        document.getElementById('in_nome_locador').value = "";
    }

    // Inicializa a ferramenta com o primeiro modelo ativo
    adaptarInterfaceEContrato();
});
