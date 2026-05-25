document.addEventListener("DOMContentLoaded", function() {
    // Mapeamento dos inputs para os spans correspondentes no texto
    const campos = [
        { inputId: 'in_data_doc', txtId: 'txt_data_doc' },
        { inputId: 'in_num_contrato', txtId: 'txt_num_contrato' },
        { inputId: 'in_nome_locador', txtId: 'txt_nome_locador' },
        { inputId: 'in_nome_locatario', txtId: 'txt_nome_locatario' },
        { inputId: 'in_endereco', txtId: 'txt_endereco' },
        { inputId: 'in_valor', txtId: 'txt_valor' },
        { inputId: 'in_desconto', txtId: 'txt_desconto' },
        { inputId: 'in_vencimento', txtId: 'txt_vencimento' },
        { inputId: 'in_prazo', txtId: 'txt_prazo' },
        { inputId: 'in_inicio', txtId: 'txt_inicio' },
        { inputId: 'in_termino', txtId: 'txt_termino' }
    ];

    campos.forEach(campo => {
        const inputEl = document.getElementById(campo.inputId);
        const txtEl = document.getElementById(campo.txtId);

        if (inputEl && txtEl) {
            inputEl.addEventListener('input', function() {
                // Atualiza o texto dinamicamente
                txtEl.textContent = inputEl.value || "___________";

                // Atualizações extras (ex: assinaturas no rodapé)
                if (campo.inputId === 'in_nome_locador') {
                    document.getElementById('txt_assinatura_locador').textContent = inputEl.value.toUpperCase();
                }
                if (campo.inputId === 'in_nome_locatario') {
                    document.getElementById('txt_assinatura_locatario').textContent = inputEl.value.toUpperCase();
                }
            });
        }
    });
});