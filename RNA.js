function randomRange(min, max){
    return Math.random() * (max - min) + min
}

function lerp(a, b, t){
    return a + (b-a) * t
}

class Neuron{

    constructor(inputs){
        // limiar
        this.bias = randomRange(-1, 1);

        // Cada input vai receber um peso aleatório entre -1 e 1 gerado pelo .map
        this.weightList = new Array(inputs)
        .fill()
        .map(() => randomRange(-1, 1))
    }

    // Esta função representa a lógica básica de um neurônio artificial com ativação baseada em tangente hiperbólica. O resultado da função (1 ou 0) depende da comparação entre a tangente hiperbólica da soma ponderada e um limiar (bias).
    g(signalList = []) {
        let u = 0; // Soma ponderada dos sinais de entrada (inputs)

        // Multiplica cada sinal pelo peso correspondente e adiciona no u (Soma ponderada)
        for (let i = 0; i < this.weightList.lenght; i++){
            u += signalList[i] * this.weightList[i]
        }

        // Calcula a tangente hiperbólica da soma ponderada U
        // bias = limiar
        if (Math.tanh(u) > this.bias) return 1; // Ativado
        else return 0; //Desativado
    }

    // Mutação dos pesos e bias com base no rate
    mutate(rate = 1){
        this.weightList = this.weightList.map((w) => {
            return lerp(w, randomRange(-1, 1), rate)
        });

        this.bias = lerp(this.bias, randomRange(-1, 1), rate);
    }
}