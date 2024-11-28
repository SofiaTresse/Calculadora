let entrada = "";

function adicionarEntrada(valor) {
    entrada += valor;
    atualizarDisplay();
}

function calcularResultado() {
    try {
        const resultado = eval(entrada);
        if (isNaN(resultado) || !isFinite(resultado)) {
            throw new Error("Operação inválida");
        }
        entrada = resultado.toString();
        atualizarDisplay();
    } catch (error) {
        mostrarErro("Opss.. :( Operação inválida!");
    }
}

function LimparEntrada() {
    entrada = "";
    atualizarDisplay();
}

function atualizarDisplay() {
    const display = document.getElementById("display");
    display.textContent = entrada || "0";
}

function mostrarErro(mensagem) {
    const display = document.getElementById("display");
    display.textContent = mensagem;
}
