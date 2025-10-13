const questionsDatabase = {
  portugues: {
    facil: [
      // ================= EASY =================
      {
        question: "Qual é o sujeito da frase: 'O cachorro correu no parque'?",
        options: ["O cachorro", "correu", "no parque", "não há sujeito"],
        correct: 0,
        explanation:
          "O sujeito é 'O cachorro', pois é de quem se fala na frase.",
      },
      {
        question:
          "Assinale a alternativa que apresenta um adjetivo na frase: 'O dia estava ensolarado'.",
        options: ["O", "dia", "estava", "ensolarado"],
        correct: 3,
        explanation:
          "'Ensolarado' caracteriza o substantivo 'dia', portanto é o adjetivo.",
      },
      {
        question: "Qual é o verbo na frase: 'Ela canta muito bem'?",
        options: ["Ela", "canta", "muito", "bem"],
        correct: 1,
        explanation:
          "'Canta' indica a ação realizada pelo sujeito, portanto é o verbo.",
      },
      {
        question:
          "Assinale a alternativa que apresenta um pronome pessoal do caso reto.",
        options: ["me", "te", "nos", "eu"],
        correct: 3,
        explanation:
          "'Eu' é pronome pessoal do caso reto; os demais são oblíquos.",
      },
      {
        question:
          "Qual é a função da vírgula na frase: 'Pedro, venha aqui imediatamente'?",
        options: [
          "Separar vocativo",
          "Indicar enumeração",
          "Marcar sujeito",
          "Indicar oração subordinada",
        ],
        correct: 0,
        explanation:
          "A vírgula separa o vocativo 'Pedro', chamando a atenção do interlocutor.",
      },
      {
        question: "Qual é o plural correto de 'cidadão'?",
        options: ["Cidadãos", "Cidadães", "Cidadões", "Cidadãs"],
        correct: 0,
        explanation:
          "O plural de 'cidadão' é 'cidadãos', seguindo a regra de palavras terminadas em ão.",
      },
      {
        question: "Assinale a alternativa com pontuação correta.",
        options: [
          "Vamos comer, João?",
          "Vamos, comer João?",
          "Vamos comer João?",
          "Vamos, comer, João?",
        ],
        correct: 0,
        explanation:
          "A pontuação correta separa o vocativo 'João' da frase principal.",
      },
      {
        question: "Qual é o antônimo de 'alto'?",
        options: ["baixo", "grande", "longo", "forte"],
        correct: 0,
        explanation: "'Baixo' é o oposto de 'alto'.",
      },
      {
        question:
          "Qual é a locução adverbial de lugar na frase 'Ele mora em frente à praça'?",
        options: ["à frente", "em frente", "Ambas corretas", "Nenhuma"],
        correct: 1,
        explanation:
          "'Em frente' indica o lugar onde ele mora, sendo locução adverbial de lugar.",
      },
      {
        question: "Assinale a frase com sujeito composto.",
        options: [
          "João e Maria estudam juntos.",
          "João estuda sozinho.",
          "Maria estuda sozinha.",
          "Estudam juntos.",
        ],
        correct: 0,
        explanation: "Sujeito composto tem mais de um núcleo: 'João e Maria'.",
      },
      {
        question: "Identifique o advérbio na frase: 'Ele corre rapidamente'.",
        options: ["Ele", "corre", "rapidamente", "nenhum"],
        correct: 2,
        explanation:
          "'Rapidamente' modifica o verbo 'corre', sendo advérbio de modo.",
      },
      {
        question: "Assinale a palavra correta:",
        options: ["exceção", "excessão", "esceção", "exceçãoo"],
        correct: 0,
        explanation: "'Exceção' é a forma correta, com cê-cedilha.",
      },
      {
        question: "Assinale a alternativa correta quanto à acentuação:",
        options: ["difícil", "dificil", "Ambas corretas", "Nenhuma"],
        correct: 0,
        explanation: "'Difícil' leva acento na letra 'i'.",
      },
      {
        question: "Qual frase possui uma oração sem sujeito?",
        options: [
          "Chove muito na cidade.",
          "A cidade é grande.",
          "Eu gosto da cidade.",
          "Muito foi dito na cidade.",
        ],
        correct: 0,
        explanation:
          "A frase 'Chove muito na cidade' não possui sujeito; é oração sem sujeito (verbo impessoal).",
      },
      {
        question: "Assinale a alternativa com verbo no infinitivo.",
        options: ["Cantar", "Canta", "Cantando", "Cantou"],
        correct: 0,
        explanation: "'Cantar' está no infinitivo impessoal.",
      },
      {
        question: "Qual é o plural de 'pão'?",
        options: ["pães", "pãos", "pãens", "pãeses"],
        correct: 0,
        explanation: "'Pães' é o plural correto de 'pão'.",
      },
      {
        question: "Assinale a frase com pontuação correta.",
        options: [
          "Amanhã, iremos ao parque.",
          "Amanhã iremos, ao parque.",
          "Amanhã iremos ao, parque.",
          "Amanhã iremos ao parque,",
        ],
        correct: 0,
        explanation:
          "A vírgula separa o advérbio temporal 'Amanhã' do restante da frase.",
      },
      {
        question: "Assinale a alternativa com pronome possessivo.",
        options: ["meu", "ela", "isso", "quem"],
        correct: 0,
        explanation: "'Meu' indica posse e é pronome possessivo.",
      },
      {
        question: "Assinale a frase com verbo no presente do indicativo.",
        options: [
          "Eu estudo todos os dias.",
          "Eu estudava todos os dias.",
          "Eu estudarei amanhã.",
          "Eu estudei ontem.",
        ],
        correct: 0,
        explanation: "Presente do indicativo indica ação atual: 'Eu estudo'.",
      },
      {
        question: "Qual palavra está escrita corretamente?",
        options: ["consciência", "conciência", "conssiência", "consiensia"],
        correct: 0,
        explanation: "'Consciência' está correta, com acento agudo no 'i'.",
      },
      {
        question: "Assinale a alternativa correta quanto ao uso de crase.",
        options: [
          "Vou à escola.",
          "Vou a escola.",
          "Vou a à escola.",
          "Vou à a escola.",
        ],
        correct: 0,
        explanation:
          "O uso da crase ocorre antes de palavra feminina: 'à escola'.",
      },
      {
        question: "Assinale a frase que apresenta sujeito oculto (elíptico).",
        options: [
          "Estudamos muito para a prova.",
          "Choveu durante a noite.",
          "João e Maria saíram.",
          "O carro quebrou.",
        ],
        correct: 0,
        explanation: "O sujeito 'nós' está oculto na forma verbal 'Estudamos'.",
      },
      {
        question: "Qual é a função do pronome 'se' em: 'Ele se levantou cedo'?",
        options: [
          "Pronome reflexivo",
          "Pronome possessivo",
          "Pronome pessoal do caso reto",
          "Pronome indefinido",
        ],
        correct: 0,
        explanation:
          "'Se' indica que a ação recai sobre o próprio sujeito: pronome reflexivo.",
      },
      {
        question: "Assinale a alternativa com advérbio de intensidade.",
        options: ["muito", "bem", "rápido", "ontem"],
        correct: 0,
        explanation:
          "'Muito' intensifica o verbo ou adjetivo; é advérbio de intensidade.",
      },
      {
        question: "Assinale a frase com pontuação correta.",
        options: [
          "Não sei se ele vem.",
          "Não sei, se ele vem.",
          "Não sei; se ele vem.",
          "Não sei: se ele vem.",
        ],
        correct: 0,
        explanation:
          "Não há necessidade de vírgula na frase; a pontuação correta é 'Não sei se ele vem'.",
      },
      {
        question: "Assinale a palavra escrita corretamente.",
        options: ["privilégio", "previlégio", "priviléjio", "prevelégio"],
        correct: 0,
        explanation: "'Privilégio' é a grafia correta.",
      },
      {
        question: "Assinale a frase com sujeito simples.",
        options: [
          "O menino brinca no quintal.",
          "João e Maria brincam juntos.",
          "Está chovendo.",
          "Brincaram no quintal.",
        ],
        correct: 0,
        explanation: "Sujeito simples tem apenas um núcleo: 'O menino'.",
      },
      {
        question:
          "Assinale a alternativa com verbo no pretérito perfeito do indicativo.",
        options: [
          "Eu comi a maçã.",
          "Eu como a maçã.",
          "Eu comerei a maçã.",
          "Eu comia a maçã.",
        ],
        correct: 0,
        explanation: "Pretérito perfeito indica ação concluída: 'Eu comi'.",
      },
    ],
    medio: [
      {
        question:
          "Assinale a frase que apresenta período composto por coordenação.",
        options: [
          "Fui ao mercado e comprei frutas.",
          "Gosto de ir ao mercado.",
          "As frutas do mercado são frescas.",
          "O mercado é grande.",
        ],
        correct: 0,
        explanation:
          "O período composto por coordenação liga duas orações independentes com 'e'.",
      },
      {
        question:
          "Qual é a função da linguagem predominante em um texto publicitário que busca convencer o leitor?",
        options: [
          "Referencial",
          "Emotiva",
          "Conativa (ou Apelativa)",
          "Metalinguística",
        ],
        correct: 2,
        explanation:
          "Textos publicitários usam a função conativa para convencer ou persuadir o leitor.",
      },
      {
        question:
          "Assinale a alternativa que apresenta um exemplo de regência verbal correta.",
        options: [
          "Obedecer aos sinais de trânsito.",
          "Assistir o jogo no estádio.",
          "Chegar em casa cedo.",
          "Preferir mais doce do que salgado.",
        ],
        correct: 0,
        explanation:
          "'Obedecer' exige a preposição 'a'; as demais estão incorretas.",
      },
      {
        question:
          "Identifique a oração subordinada adjetiva na frase: 'O livro que você comprou é interessante'.",
        options: [
          "que você comprou",
          "O livro",
          "é interessante",
          "O livro é interessante",
        ],
        correct: 0,
        explanation:
          "A oração 'que você comprou' especifica o substantivo 'livro', portanto é subordinada adjetiva.",
      },
      {
        question:
          "A palavra 'tráfego' (de veículos) e 'tráfico' (comércio ilegal) são exemplos de:",
        options: ["Parônimos", "Homônimos", "Sinônimos", "Antônimos"],
        correct: 0,
        explanation:
          "Palavras com escrita e pronúncia semelhantes, mas significados diferentes são parônimos.",
      },
      {
        question: "Assinale a frase com concordância verbal correta.",
        options: [
          "Os alunos estudam para a prova.",
          "Os aluno estuda para a prova.",
          "Os alunos estuda para a prova.",
          "Os aluno estudam para a prova.",
        ],
        correct: 0,
        explanation:
          "O sujeito 'Os alunos' é plural, logo o verbo deve concordar: 'estudam'.",
      },
      {
        question: "Na frase 'Fomos à praia ontem', qual é o tipo de sujeito?",
        options: [
          "Oculto (Nós)",
          "Inexistente",
          "Composto (Fomos à praia)",
          "Simples (Nós)",
        ],
        correct: 0,
        explanation: "O sujeito é oculto, implícito: 'nós'.",
      },
      {
        question:
          "Qual é a função do pronome 'se' em: 'Precisa-se de funcionários'?",
        options: [
          "Índice de indeterminação do sujeito",
          "Pronome reflexivo",
          "Partícula expletiva",
          "Pronome apassivador",
        ],
        correct: 0,
        explanation: "'Se' indica que o sujeito é indeterminado.",
      },
      {
        question: "Assinale a frase que apresenta crase corretamente.",
        options: [
          "Ele se referiu àquelas leis de trânsito.",
          "Começou a chover forte.",
          "Ele anda a cavalo.",
          "Fui a Portugal.",
        ],
        correct: 0,
        explanation:
          "O uso correto da crase é 'àquelas leis', pois ocorre a fusão da preposição 'a' com o artigo 'aquelas'.",
      },
      {
        question:
          "Escolha a alternativa que apresenta um advérbio de intensidade.",
        options: ["muito", "aqui", "ontem", "calmamente"],
        correct: 0,
        explanation:
          "'Muito' modifica o grau do verbo/adjetivo, portanto é advérbio de intensidade.",
      },
      {
        question: "Assinale a frase que apresenta pleonasmo vicioso.",
        options: [
          "Subir para cima.",
          "Ele correu rápido.",
          "Vi com meus próprios olhos.",
          "O carro é vermelho.",
        ],
        correct: 0,
        explanation:
          "A expressão 'subir para cima' repete a ideia desnecessariamente, caracterizando pleonasmo vicioso.",
      },
      {
        question:
          "Assinale a pontuação correta para a oração com adjunto adverbial intercalado.",
        options: [
          "O candidato, com certeza, será aprovado.",
          "O candidato com certeza, será aprovado.",
          "O candidato, com certeza será aprovado.",
          "O candidato com certeza será aprovado.",
        ],
        correct: 0,
        explanation: "O adjunto 'com certeza' deve ser isolado por vírgulas.",
      },
      {
        question: "Assinale a frase com sujeito composto.",
        options: [
          "João e Maria estudam juntos.",
          "João estuda sozinho.",
          "Maria estuda sozinha.",
          "Estudam juntos.",
        ],
        correct: 0,
        explanation:
          "Sujeito composto tem dois ou mais núcleos: 'João e Maria'.",
      },
      {
        question: "Assinale a alternativa com verbo no pretérito perfeito.",
        options: [
          "Eu comi a maçã.",
          "Eu como a maçã.",
          "Eu comerei a maçã.",
          "Eu como.",
        ],
        correct: 0,
        explanation:
          "O pretérito perfeito indica ação concluída no passado: 'comi'.",
      },
      {
        question:
          "Assinale a frase que apresenta uma oração subordinada adverbial causal.",
        options: [
          "Não fui à festa porque estava doente.",
          "Fui à festa, mas estava doente.",
          "Se estivesse doente, não iria à festa.",
          "Fui à festa, embora estivesse doente.",
        ],
        correct: 0,
        explanation:
          "A oração 'porque estava doente' indica causa, portanto é causal.",
      },
      {
        question: "Identifique a alternativa com verbo no futuro do presente.",
        options: [
          "Eu viajarei amanhã.",
          "Eu viajei ontem.",
          "Eu viajo hoje.",
          "Eu viajava ontem.",
        ],
        correct: 0,
        explanation: "O futuro do presente indica ação futura: 'viajarei'.",
      },
      {
        question: "Assinale a frase que apresenta erro de regência nominal.",
        options: [
          "Ele tem aversão com barulho.",
          "Ele é residente na Rua das Flores.",
          "Tenho preferência por carros azuis.",
          "Ele é bacharel em Direito.",
        ],
        correct: 0,
        explanation:
          "O correto é 'Ele tem aversão a barulho', portanto a frase apresenta erro.",
      },
      {
        question: "Assinale a frase com pontuação correta.",
        options: [
          "Maria disse: 'Vou à escola.'",
          "Maria disse 'Vou à escola'.",
          "Maria disse, 'Vou à escola'.",
          "Maria disse: Vou à escola.",
        ],
        correct: 0,
        explanation:
          "O uso correto de dois-pontos e aspas: 'Maria disse: 'Vou à escola.''",
      },
      {
        question: "Assinale a frase que apresenta ambiguidade.",
        options: [
          "Ele viu o homem com o binóculo.",
          "Ele viu o homem através da janela.",
          "Ele viu o homem que estava na rua.",
          "Ele viu o homem e o cumprimentou.",
        ],
        correct: 0,
        explanation:
          "A frase 'Ele viu o homem com o binóculo' permite duas interpretações, gerando ambiguidade.",
      },
      {
        question: "Escolha a alternativa que apresenta sujeito simples.",
        options: [
          "O cachorro latiu.",
          "Maria e João brincam.",
          "Choveu muito.",
          "Ninguém veio à festa.",
        ],
        correct: 0,
        explanation: "O sujeito simples possui apenas um núcleo: 'O cachorro'.",
      },
      {
        question: "Assinale a alternativa com verbo no presente do subjuntivo.",
        options: [
          "Espero que ele estude.",
          "Ele estuda.",
          "Ele estudou.",
          "Ele estudará.",
        ],
        correct: 0,
        explanation: "O subjuntivo indica ação incerta ou desejada: 'estude'.",
      },
      {
        question: "Assinale a alternativa com advérbio de tempo.",
        options: ["Sempre", "Debaixo", "Mal", "Talvez"],
        correct: 0,
        explanation: "'Sempre' indica tempo, logo é advérbio de tempo.",
      },
      {
        question: "Assinale a frase com período composto por subordinação.",
        options: [
          "Quando cheguei, ele já tinha saído.",
          "Cheguei cedo e saí tarde.",
          "Ele saiu cedo, mas voltou logo.",
          "Ele já tinha saído da festa.",
        ],
        correct: 0,
        explanation:
          "O período subordinado depende da oração principal: 'Quando cheguei, ele já tinha saído.'",
      },
      {
        question: "Assinale a frase que apresenta coesão adequada.",
        options: [
          "João estudou muito, por isso passou na prova.",
          "João estudou muito, porém passou na prova.",
          "João estudou muito, ou passou na prova.",
          "João estudou muito, quando passou na prova.",
        ],
        correct: 0,
        explanation:
          "'Por isso' indica relação de causa e efeito, garantindo coesão textual.",
      },
      {
        question: "Assinale a alternativa com verbo no pretérito imperfeito.",
        options: [
          "Eu estudava todos os dias.",
          "Eu estudo todos os dias.",
          "Eu estudarei.",
          "Eu estudei.",
        ],
        correct: 0,
        explanation:
          "O pretérito imperfeito indica ação contínua no passado: 'estudava'.",
      },
      {
        question: "Assinale a frase que apresenta coesão textual correta.",
        options: [
          "Ela foi ao mercado e comprou frutas.",
          "Ela foi ao mercado comprou frutas.",
          "Ela ao mercado foi e frutas comprou.",
          "Ela frutas comprou e ao mercado foi.",
        ],
        correct: 0,
        explanation:
          "A primeira frase conecta as ações de forma lógica e clara, garantindo coesão.",
      },
      {
        question: "Assinale a alternativa com verbo no futuro do presente.",
        options: [
          "Ele viajará amanhã.",
          "Ele viajou ontem.",
          "Ele viaja hoje.",
          "Ele viajava ontem.",
        ],
        correct: 0,
        explanation: "O futuro do presente indica ação futura: 'viajará'.",
      },
      {
        question: "Assinale a frase que apresenta erro de pontuação.",
        options: [
          "Ele gosta, de chocolate.",
          "Ele gosta de chocolate.",
          "Maria, venha cá.",
          "Comprei maçãs, peras e uvas.",
        ],
        correct: 0,
        explanation: "A vírgula antes de 'de chocolate' é incorreta.",
      },
      {
        question: "Assinale a alternativa que apresenta período composto.",
        options: [
          "João saiu cedo e Maria chegou atrasada.",
          "João saiu cedo de casa.",
          "Maria chegou atrasada na festa.",
          "João e Maria são irmãos.",
        ],
        correct: 0,
        explanation:
          "Duas orações independentes unidas formam período composto.",
      },
      {
        question: "Assinale a frase que apresenta regência correta.",
        options: [
          "Ele gosta de música.",
          "Ele gosta música.",
          "Ele gosta em música.",
          "Ele gosta com música.",
        ],
        correct: 0,
        explanation: "O verbo 'gostar' exige a preposição 'de'.",
      },
      {
        question: "Assinale a alternativa com advérbio de modo.",
        options: ["Rapidamente", "Ontem", "Lá", "Muito"],
        correct: 0,
        explanation:
          "'Rapidamente' indica a maneira como a ação foi realizada.",
      },
      {
        question:
          "Assinale a frase que apresenta oração subordinada adverbial condicional.",
        options: [
          "Se você estudar, passará na prova.",
          "Como você estudou, passou na prova.",
          "Embora tenha estudado, não passou.",
          "Estude para que passe na prova.",
        ],
        correct: 0,
        explanation:
          "A oração condicional indica condição para que algo aconteça.",
      },
      {
        question:
          "Assinale a alternativa que apresenta concordância nominal correta.",
        options: [
          "As meninas bonitas chegaram cedo.",
          "As menina bonita chegou cedo.",
          "As meninas bonito chegaram cedo.",
          "As menina bonitas chegaram cedo.",
        ],
        correct: 0,
        explanation:
          "O adjetivo concorda em gênero e número com o substantivo: 'meninas bonitas'.",
      },
      {
        question: "Assinale a frase que apresenta ambiguidade.",
        options: [
          "O cachorro mordeu o homem que tinha um rabo.",
          "O cachorro grande mordeu o homem.",
          "O cachorro mordeu o homem na perna.",
          "O cachorro mordeu o homem ontem.",
        ],
        correct: 0,
        explanation:
          "A frase permite duas interpretações sobre quem tem o rabo.",
      },
    ],
    dificil: [
      {
        question:
          "Assinale a frase que apresenta período composto por subordinação e coordenação (período misto).",
        options: [
          "Cheguei cedo, mas não te vi.",
          "Quando cheguei, ele já havia saído, e ninguém me esperava.",
          "Ele saiu cedo porque tinha um compromisso.",
          "Ninguém me esperava na estação.",
        ],
        correct: 1,
        explanation:
          "O período misto combina subordinação ('Quando cheguei, ele já havia saído') e coordenação ('e ninguém me esperava').",
      },
      {
        question:
          "Identifique a oração subordinada adverbial concessiva na frase: 'Embora estivesse cansado, continuou trabalhando'.",
        options: [
          "Continuou trabalhando.",
          "Ele estava cansado.",
          "Embora estivesse cansado.",
          "Trabalhando",
        ],
        correct: 2,
        explanation:
          "'Embora estivesse cansado' expressa concessão, caracterizando oração subordinada concessiva.",
      },
      {
        question:
          "Assinale a alternativa que apresenta a regência do verbo 'assistir' (no sentido de ver) correta.",
        options: [
          "Ele assistiu o filme.",
          "Ele assistiu do filme.",
          "Ele assistiu ao filme.",
          "Ele assistiu para o filme.",
        ],
        correct: 2,
        explanation:
          "O verbo 'assistir' no sentido de ver exige a preposição 'a': 'assistiu ao filme'.",
      },
      {
        question:
          "Em 'Visitei o tio do meu amigo que mora em Santos', a ambiguidade é causada pela:",
        options: [
          "Posição do sujeito",
          "Regência do verbo 'visitar'",
          "Má colocação do pronome relativo 'que'",
          "Concordância do verbo 'morar'",
        ],
        correct: 2,
        explanation:
          "O pronome 'que' pode se referir a 'tio' ou 'amigo', criando ambiguidade.",
      },
      {
        question:
          "Identifique a função da linguagem predominante em um poema lírico.",
        options: ["Conativa", "Referencial", "Metalinguística", "Emotiva"],
        correct: 3,
        explanation:
          "Poemas líricos expressam sentimentos e emoções, usando a função emotiva.",
      },
      {
        question: "Assinale a frase em que o uso da crase é obrigatório.",
        options: [
          "Fui a casa ontem.",
          "Fui à casa de meus pais.",
          "Fui a pé.",
          "Fui a uma festa.",
        ],
        correct: 1,
        explanation:
          "A crase ocorre na fusão da preposição 'a' com o artigo definido 'a': 'à casa'.",
      },
      {
        question: "Assinale a alternativa com a concordância verbal correta.",
        options: [
          "Mais de um aluno chegaram atrasados.",
          "Houveram muitos problemas na cidade.",
          "Faz cinco anos que me mudei.",
          "Vende-se casas.",
        ],
        correct: 2,
        explanation:
          "O verbo 'fazer' é impessoal e permanece no singular: 'Faz cinco anos'.",
      },
      {
        question: "Assinale a frase que apresenta elipse do verbo.",
        options: [
          "João gosta de futebol.",
          "Maria gosta de vôlei.",
          "João gosta de futebol; Maria, de vôlei.",
          "João gosta de futebol e Maria gosta de vôlei.",
        ],
        correct: 2,
        explanation:
          "O verbo 'gostar' foi omitido na segunda oração, caracterizando elipse.",
      },
      {
        question:
          "Assinale a alternativa com uso correto de vírgula em um aposto explicativo.",
        options: [
          "Maria minha amiga, chegou cedo.",
          "Maria, minha amiga, chegou cedo.",
          "Maria, minha amiga chegou cedo.",
          "Maria minha amiga chegou cedo.",
        ],
        correct: 1,
        explanation: "O aposto 'minha amiga' deve ser isolado por vírgulas.",
      },
      {
        question:
          "Identifique a figura de linguagem presente em: 'O tempo é um ladrão que rouba nossos momentos'.",
        options: ["Comparação", "Hipérbole", "Personificação", "Metáfora"],
        correct: 3,
        explanation:
          "O tempo é comparado a um ladrão sem usar 'como', caracterizando metáfora.",
      },
      {
        question: "Assinale a frase que apresenta regência nominal correta.",
        options: [
          "Ele está satisfeito pelo resultado.",
          "Ele está satisfeito com o resultado.",
          "Ele está satisfeito sobre o resultado.",
          "Ele está satisfeito do resultado.",
        ],
        correct: 1,
        explanation: "O adjetivo 'satisfeito' exige a preposição 'com'.",
      },
      {
        question:
          "Assinale a frase que apresenta coesão textual por meio de um conector conclusivo.",
        options: [
          "Ele estudou bastante; portanto, alcançou seus objetivos.",
          "Ele trabalhou, mas não se cansou.",
          "Ou você trabalha, ou você descansa.",
          "Ele trabalha porque precisa.",
        ],
        correct: 0,
        explanation:
          "O conector 'portanto' indica conclusão, garantindo coesão textual.",
      },
      {
        question:
          "Assinale a frase que apresenta sujeito elíptico e predicado composto.",
        options: [
          "Estudei para a prova.",
          "Passei na prova.",
          "Eu estudei e passei na prova.",
          "Estudei muito e passei na prova.",
        ],
        correct: 3,
        explanation:
          "O sujeito 'Eu' está implícito e o predicado possui duas ações: 'estudei' e 'passei'.",
      },
      {
        question:
          "Assinale a frase com oração subordinada adjetiva restritiva.",
        options: [
          "Os políticos, que são honestos, merecem respeito.",
          "O livro, que comprei ontem, é excelente.",
          "Os motoristas que respeitam a sinalização evitam acidentes.",
          "Guarujá, que é uma cidade litorânea, atrai turistas.",
        ],
        correct: 2,
        explanation:
          "A oração 'que respeitam a sinalização' restringe o sujeito 'os motoristas'.",
      },
      {
        question: "Assinale a frase que apresenta pleonasmo vicioso.",
        options: [
          "A brisa matinal da manhã estava fria.",
          "Maria estuda bastante.",
          "A mim, parece que tudo vai bem.",
          "João chegou cedo.",
        ],
        correct: 0,
        explanation:
          "A expressão 'brisa matinal da manhã' repete a ideia desnecessariamente.",
      },
      {
        question: "Assinale a frase que apresenta ambiguidade lexical.",
        options: [
          "O banco da praça está quebrado.",
          "Ele sentou para descansar.",
          "A manga da camisa está suja.",
          "Ele levou a carta ao diretor.",
        ],
        correct: 3,
        explanation:
          "A palavra 'carta' pode ter múltiplos significados, criando ambiguidade lexical.",
      },
      {
        question: "Assinale a alternativa com verbo no futuro do subjuntivo.",
        options: [
          "Quando ele chegar, faremos a reunião.",
          "Se ele chegasse, faríamos a reunião.",
          "Ele chegará para a reunião.",
          "Ele chegou para a reunião.",
        ],
        correct: 0,
        explanation:
          "O futuro do subjuntivo indica ação futura condicionada: 'Quando ele chegar'.",
      },
      {
        question:
          "Assinale a frase que apresenta coerência e coesão textual adequadas.",
        options: [
          "O trânsito estava caótico. Porque choveu muito.",
          "Choveu muito, mas o trânsito fluiu bem.",
          "Apesar da forte chuva que alagou várias ruas, o trânsito, surpreendentemente, não apresentou congestionamentos.",
          "O trânsito não fluiu bem, portanto choveu bastante.",
        ],
        correct: 2,
        explanation:
          "A terceira frase mantém coerência e conecta ideias complexas de forma clara.",
      },
      {
        question:
          "Assinale a frase que apresenta adjunto adverbial de modo correto.",
        options: [
          "Ele correu rapidamente.",
          "Ele correu ontem.",
          "Ele correu ali.",
          "Ele correu feliz.",
        ],
        correct: 0,
        explanation: "O advérbio 'rapidamente' indica modo da ação.",
      },
      {
        question: "Assinale a frase com concordância nominal correta.",
        options: [
          "As meninas bonita chegaram cedo.",
          "As meninas bonitas chegaram cedo.",
          "As menina bonitas chegaram cedo.",
          "As menina bonito chegaram cedo.",
        ],
        correct: 1,
        explanation:
          "Adjetivos e substantivos devem concordar em gênero e número: 'meninas bonitas'.",
      },
      {
        question:
          "Assinale a frase que apresenta oração subordinada adverbial causal.",
        options: [
          "Não fui à festa porque estava doente.",
          "Fui à festa, mas estava doente.",
          "Se estivesse doente, não iria à festa.",
          "Fui à festa, embora estivesse doente.",
        ],
        correct: 0,
        explanation:
          "'Porque estava doente' indica causa, caracterizando oração causal.",
      },
      {
        question:
          "Assinale a frase que apresenta coesão por repetição lexical.",
        options: [
          "O carro é vermelho. O carro está estacionado na rua.",
          "O carro é vermelho. Estacionou na rua.",
          "O carro é vermelho e rápido.",
          "O carro é vermelho, bonito e novo.",
        ],
        correct: 0,
        explanation: "A repetição da palavra 'carro' garante coesão textual.",
      },
      {
        question:
          "Assinale a alternativa que apresenta uso correto de preposição.",
        options: [
          "Ele gosta de música.",
          "Ele gosta música.",
          "Ele gosta em música.",
          "Ele gosta com música.",
        ],
        correct: 0,
        explanation: "O verbo 'gostar' exige a preposição 'de'.",
      },
      {
        question: "Assinale a frase que apresenta pleonasmo vicioso.",
        options: [
          "Subir para cima.",
          "Ele correu rápido.",
          "Vi com meus próprios olhos.",
          "O carro é vermelho.",
        ],
        correct: 0,
        explanation:
          "A expressão 'subir para cima' repete desnecessariamente a ideia de subir.",
      },
      {
        question: "Assinale a frase que apresenta regência verbal correta.",
        options: [
          "Obedecer aos sinais de trânsito.",
          "Assistir o jogo no estádio.",
          "Chegar em casa cedo.",
          "Preferir mais doce do que salgado.",
        ],
        correct: 0,
        explanation:
          "O verbo 'obedecer' exige a preposição 'a': 'obedecer aos sinais'.",
      },
      {
        question: "Assinale a frase que apresenta advérbio de intensidade.",
        options: ["muito", "bem", "rápido", "ontem"],
        correct: 0,
        explanation:
          "'Muito' é advérbio de intensidade, modificando o verbo ou adjetivo.",
      },
      {
        question: "Assinale a frase que apresenta sujeito composto.",
        options: [
          "Maria e João estudam juntos.",
          "Maria estuda sozinha.",
          "João estuda sozinho.",
          "Estudam juntos.",
        ],
        correct: 0,
        explanation: "O sujeito é composto por duas pessoas: Maria e João.",
      },
      {
        question:
          "Assinale a frase com oração subordinada adjetiva explicativa.",
        options: [
          "Os políticos, que são honestos, merecem respeito.",
          "Os políticos que são honestos merecem respeito.",
          "Os políticos merecem respeito.",
          "Que os políticos são honestos é evidente.",
        ],
        correct: 0,
        explanation:
          "A oração entre vírgulas explica uma característica adicional do sujeito.",
      },
      {
        question: "Assinale a frase com pronome relativo correto.",
        options: [
          "O livro que eu li é bom.",
          "O livro quem eu li é bom.",
          "O livro qual eu li é bom.",
          "O livro onde eu li é bom.",
        ],
        correct: 0,
        explanation:
          "'Que' é o pronome relativo correto para ligar sujeito e oração subordinada.",
      },
      {
        question: "Assinale a frase que apresenta advérbio de tempo.",
        options: [
          "Ontem choveu muito.",
          "Aqui choveu muito.",
          "Rápido ele correu.",
          "Muito choveu.",
        ],
        correct: 0,
        explanation: "'Ontem' indica tempo da ação.",
      },
      {
        question: "Assinale a frase que apresenta coerência textual adequada.",
        options: [
          "Ele foi ao mercado. Comprou frutas.",
          "Ele foi ao mercado, comprou frutas.",
          "Ele foi ao mercado e comprou frutas.",
          "Ele mercado comprou e frutas.",
        ],
        correct: 2,
        explanation: "A conjunção 'e' liga as duas ações de forma coerente.",
      },
      {
        question: "Assinale a frase com verbo no pretérito perfeito.",
        options: [
          "Eu comi a maçã.",
          "Eu como a maçã.",
          "Eu comerei a maçã.",
          "Eu como.",
        ],
        correct: 0,
        explanation: "O verbo 'comi' indica ação concluída no passado.",
      },
      {
        question: "Assinale a frase que apresenta adjunto adverbial de lugar.",
        options: [
          "Ele mora aqui.",
          "Ele mora feliz.",
          "Ele mora rápido.",
          "Ele mora ontem.",
        ],
        correct: 0,
        explanation: "'Aqui' indica o lugar da ação.",
      },
      {
        question: "Assinale a frase que apresenta elipse do sujeito.",
        options: [
          "Fui ao mercado e comprei frutas.",
          "Eu fui ao mercado e comprei frutas.",
          "Ele foi ao mercado e comprou frutas.",
          "Nós fomos ao mercado e compramos frutas.",
        ],
        correct: 0,
        explanation: "O sujeito 'Eu' está implícito no primeiro verbo.",
      },
      {
        question: "Assinale a frase com pontuação correta.",
        options: [
          "Maria disse: 'Vou à escola.'",
          "Maria disse 'Vou à escola'.",
          "Maria disse, 'Vou à escola'.",
          "Maria disse: Vou à escola.",
        ],
        correct: 0,
        explanation:
          "Uso correto de dois-pontos e aspas para introduzir discurso direto.",
      },
      {
        question: "Assinale a frase que apresenta erro de pontuação.",
        options: [
          "Ele gosta, de chocolate.",
          "Ele gosta de chocolate.",
          "Comprei maçãs, peras e uvas.",
          "Maria veio cedo.",
        ],
        correct: 0,
        explanation: "A vírgula antes de 'de chocolate' é desnecessária.",
      },
      {
        question: "Assinale a frase com verbo no futuro do presente.",
        options: [
          "Ele viajará amanhã.",
          "Ele viajou ontem.",
          "Ele viaja hoje.",
          "Ele viajava ontem.",
        ],
        correct: 0,
        explanation: "O verbo 'viajará' indica ação futura certa.",
      },
      {
        question: "Assinale a frase que apresenta coesão textual correta.",
        options: [
          "Ela foi ao mercado e comprou frutas.",
          "Ela foi ao mercado comprou frutas.",
          "Ela ao mercado foi e frutas comprou.",
          "Ela frutas comprou e ao mercado foi.",
        ],
        correct: 0,
        explanation: "A frase apresenta coesão ao ligar as ações com 'e'.",
      },
      {
        question: "Assinale a frase que apresenta ambiguidade.",
        options: [
          "Ele viu o homem com o binóculo.",
          "Ele viu o homem através da janela.",
          "Ele viu o homem que estava na rua.",
          "Ele viu o homem e o cumprimentou.",
        ],
        correct: 0,
        explanation:
          "A frase permite duas interpretações: quem tem o binóculo, o homem ou ele.",
      },
      {
        question: "Assinale a frase com sujeito simples.",
        options: [
          "O cachorro latiu.",
          "Maria e João brincam.",
          "Choveu muito.",
          "Ninguém veio à festa.",
        ],
        correct: 0,
        explanation: "O sujeito 'O cachorro' é simples, apenas um núcleo.",
      },
      {
        question: "Assinale a frase que apresenta advérbio de modo.",
        options: ["Rapidamente", "Ontem", "Lá", "Muito"],
        correct: 0,
        explanation: "'Rapidamente' indica como a ação foi realizada.",
      },
      {
        question: "Assinale a frase que apresenta regência nominal correta.",
        options: [
          "Ele é residente na Rua das Flores.",
          "Ele tem aversão com barulho.",
          "Tenho preferência por carros azuis.",
          "Ele é bacharel em Direito.",
        ],
        correct: 2,
        explanation: "O adjetivo 'preferência' exige a preposição 'por'.",
      },
    ],
  },

  // ================= MATEMÁTICA =================
  matematica: {
    facil: [
      {
        question: "Qual é o menor número natural?",
        options: ["0", "1", "-1", "2"],
        correct: 1,
        explanation: "O menor número natural é 1.",
      },
      {
        question: "Qual é a soma de 5 + 3?",
        options: ["7", "8", "9", "6"],
        correct: 1,
        explanation: "5 + 3 = 8.",
      },
      {
        question: "Qual é o resultado de 2²?",
        options: ["2", "4", "8", "6"],
        correct: 1,
        explanation: "2² = 2*2 = 4.",
      },
      {
        question: "Qual número pertence ao conjunto dos números inteiros?",
        options: ["0,5", "-2", "π", "√2"],
        correct: 1,
        explanation: "-2 é um número inteiro.",
      },
      {
        question: "Qual é o valor de | -7 |?",
        options: ["7", "-7", "0", "1"],
        correct: 0,
        explanation: "O valor absoluto de -7 é 7.",
      },
      {
        question: "Qual é o resultado de 10 - 4?",
        options: ["6", "5", "7", "4"],
        correct: 0,
        explanation: "10 - 4 = 6.",
      },
      {
        question: "Qual é o próximo número da sequência 2, 4, 6, ...?",
        options: ["7", "8", "10", "12"],
        correct: 1,
        explanation: "A sequência aumenta de 2 em 2: 2,4,6,8...",
      },
      {
        question: "Qual é o dobro de 9?",
        options: ["18", "19", "20", "17"],
        correct: 0,
        explanation: "Dobro de 9 é 18.",
      },
      {
        question: "Qual é a metade de 14?",
        options: ["7", "8", "6", "9"],
        correct: 0,
        explanation: "Metade de 14 é 7.",
      },
      {
        question: "Se 3 + x = 8, qual é x?",
        options: ["5", "4", "3", "6"],
        correct: 0,
        explanation: "3 + x = 8 → x = 5.",
      },
      {
        question: "Qual número é irracional?",
        options: ["1/2", "√2", "3", "0"],
        correct: 1,
        explanation: "√2 não pode ser escrito como fração, é irracional.",
      },
      {
        question: "Qual é o resultado de 5 * 3?",
        options: ["15", "8", "10", "13"],
        correct: 0,
        explanation: "5 * 3 = 15.",
      },
      {
        question: "Qual é o resultado de 12 ÷ 4?",
        options: ["2", "3", "4", "6"],
        correct: 1,
        explanation: "12 ÷ 4 = 3.",
      },
      {
        question: "O que é uma expressão numérica?",
        options: [
          "Um número",
          "Uma equação",
          "Combinação de números e operações",
          "Uma letra",
        ],
        correct: 2,
        explanation: "Expressão numérica envolve apenas números e operações.",
      },
      {
        question: "O que é uma expressão algébrica?",
        options: [
          "Só números",
          "Números e letras",
          "Só letras",
          "Só operações",
        ],
        correct: 1,
        explanation: "Expressão algébrica combina números, letras e operações.",
      },
      {
        question: "Qual é o resultado de 0 + 5?",
        options: ["5", "0", "-5", "1"],
        correct: 0,
        explanation: "0 + 5 = 5.",
      },
      {
        question: "Qual é o número primo entre eles?",
        options: ["4", "6", "7", "8"],
        correct: 2,
        explanation: "7 é primo, divisível apenas por 1 e ele mesmo.",
      },
      {
        question: "Qual é o resultado de 7 - 3?",
        options: ["3", "4", "5", "6"],
        correct: 1,
        explanation: "7 - 3 = 4.",
      },
      {
        question: "Qual é a raiz quadrada de 16?",
        options: ["2", "4", "8", "6"],
        correct: 1,
        explanation: "√16 = 4.",
      },
      {
        question: "O que significa 'x' em uma equação?",
        options: [
          "Número desconhecido",
          "Número fixo",
          "Operação",
          "Resultado",
        ],
        correct: 0,
        explanation: "x representa o valor desconhecido.",
      },
      {
        question: "Qual é a soma de 2 + 2 + 2?",
        options: ["4", "5", "6", "8"],
        correct: 2,
        explanation: "2+2+2 = 6.",
      },
      {
        question: "Qual número pertence ao conjunto dos números reais?",
        options: ["π", "i", "∞", "√-1"],
        correct: 0,
        explanation: "π é um número real.",
      },
      {
        question: "Qual é o resultado de 9 ÷ 3?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "9 ÷ 3 = 3.",
      },
      {
        question: "Qual é o próximo número da sequência 1, 2, 3, ...?",
        options: ["4", "5", "6", "7"],
        correct: 0,
        explanation: "Sequência crescente de 1 em 1: 1,2,3,4...",
      },
      {
        question: "Qual é o número que representa unidade?",
        options: ["10", "1", "0", "100"],
        correct: 1,
        explanation: "Unidade é 1.",
      },
      {
        question: "Qual é o resultado de 6 + 7?",
        options: ["12", "13", "14", "15"],
        correct: 1,
        explanation: "6 + 7 = 13.",
      },
      {
        question: "Qual é o resultado de 8 - 5?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "8 - 5 = 3.",
      },
      {
        question: "Qual é o número que representa dezena?",
        options: ["1", "10", "100", "0"],
        correct: 1,
        explanation: "Dezena representa 10.",
      },
      {
        question: "Qual é o próximo número da sequência 5, 10, 15, ...?",
        options: ["20", "25", "30", "18"],
        correct: 0,
        explanation: "A sequência cresce de 5 em 5.",
      },
      {
        question: "Qual é o valor de 3³?",
        options: ["9", "27", "6", "12"],
        correct: 1,
        explanation: "3³ = 3*3*3 = 27.",
      },
      {
        question: "Qual é o resultado de 0 * 5?",
        options: ["0", "5", "1", "10"],
        correct: 0,
        explanation: "0 multiplicado por qualquer número é 0.",
      },
      {
        question: "Qual é o próximo número da sequência 10, 20, 30, ...?",
        options: ["40", "50", "35", "60"],
        correct: 0,
        explanation: "Sequência aumenta de 10 em 10.",
      },
      {
        question: "Qual é o resultado de 15 ÷ 5?",
        options: ["2", "3", "5", "10"],
        correct: 1,
        explanation: "15 ÷ 5 = 3.",
      },
      {
        question: "Qual número pertence ao conjunto dos números naturais?",
        options: ["-1", "0", "1", "-2"],
        correct: 2,
        explanation: "O menor número natural é 1.",
      },
      {
        question: "Qual é o resultado de 1 + 1 + 1?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        explanation: "1+1+1=3.",
      },
      {
        question: "Qual é a soma de 4 + 6?",
        options: ["9", "10", "11", "12"],
        correct: 1,
        explanation: "4+6 = 10.",
      },
      {
        question: "Qual é o resultado de 7 * 1?",
        options: ["7", "1", "0", "14"],
        correct: 0,
        explanation: "7*1 = 7.",
      },
      {
        question: "Qual é o resultado de 5 - 0?",
        options: ["0", "5", "1", "10"],
        correct: 1,
        explanation: "5-0 = 5.",
      },
      {
        question: "Qual é o próximo número da sequência 0, 2, 4, ...?",
        options: ["6", "8", "10", "5"],
        correct: 0,
        explanation: "Sequência crescente de 2 em 2.",
      },
      {
        question: "Qual número é par?",
        options: ["3", "5", "8", "7"],
        correct: 2,
        explanation: "8 é um número par.",
      },
      {
        question: "Qual número é ímpar?",
        options: ["2", "4", "6", "9"],
        correct: 3,
        explanation: "9 é um número ímpar.",
      },
      {
        question: "Qual é o resultado de 2 * 5?",
        options: ["7", "10", "12", "15"],
        correct: 1,
        explanation: "2*5 = 10.",
      },
      {
        question: "Qual é o valor absoluto de -15?",
        options: ["15", "-15", "0", "1"],
        correct: 0,
        explanation: "|-15| = 15.",
      },
      {
        question: "Qual é o próximo número da sequência 1, 3, 5, ...?",
        options: ["6", "7", "8", "9"],
        correct: 1,
        explanation: "Sequência crescente de 2 em 2: 1,3,5,7...",
      },
      {
        question: "Qual é o resultado de 4 ÷ 2?",
        options: ["1", "2", "3", "4"],
        correct: 1,
        explanation: "4 ÷ 2 = 2.",
      },
      {
        question: "Qual é o número que representa centena?",
        options: ["10", "100", "1000", "1"],
        correct: 1,
        explanation: "Centena representa 100.",
      },
      {
        question: "Qual é a soma de 3 + 6 + 1?",
        options: ["9", "10", "11", "12"],
        correct: 2,
        explanation: "3+6+1=10.",
      },
      {
        question: "Qual é o resultado de 2 + 2?",
        options: ["2", "3", "4", "5"],
        correct: 2,
        explanation: "2 + 2 = 4.",
      },
      {
        question: "Qual número pertence ao conjunto dos inteiros?",
        options: ["2/3", "-5", "0.5", "π"],
        correct: 1,
        explanation: "-5 é um número inteiro.",
      },
      {
        question: "Qual é o resultado de 1 + 0?",
        options: ["0", "1", "2", "3"],
        correct: 1,
        explanation: "1+0=1.",
      },
    ],
    medio: [
      {
        question: "Resolva a equação: 2x + 5 = 15",
        options: ["5", "10", "7", "15"],
        correct: 0,
        explanation: "2x + 5 = 15 → 2x = 10 → x = 5.",
      },
      {
        question: "Resolva a equação: x² - 9 = 0",
        options: ["3", "-3", "3 e -3", "0"],
        correct: 2,
        explanation: "x² - 9 = 0 → x² = 9 → x = 3 ou x = -3.",
      },
      {
        question: "Qual é o valor de x na equação 3x - 7 = 11?",
        options: ["6", "5", "4", "7"],
        correct: 0,
        explanation: "3x - 7 = 11 → 3x = 18 → x = 6.",
      },
      {
        question: "Se f(x) = 2x + 3, qual é f(4)?",
        options: ["11", "7", "9", "8"],
        correct: 0,
        explanation: "f(4) = 2*4 + 3 = 11.",
      },
      {
        question: "Resolva: 5x² = 20",
        options: ["2", "-2", "2 e -2", "4"],
        correct: 2,
        explanation: "5x² = 20 → x² = 4 → x = 2 ou x = -2.",
      },
      {
        question: "Qual é a soma dos ângulos internos de um triângulo?",
        options: ["90°", "180°", "270°", "360°"],
        correct: 1,
        explanation: "A soma dos ângulos internos de um triângulo é 180°.",
      },
      {
        question: "Qual é o valor de x na inequação 2x - 5 < 7?",
        options: ["x < 6", "x > 6", "x < 1", "x > 1"],
        correct: 0,
        explanation: "2x - 5 < 7 → 2x < 12 → x < 6.",
      },
      {
        question: "Resolva a inequação: 3x + 2 ≥ 11",
        options: ["x ≥ 3", "x ≥ 2", "x ≥ 4", "x ≥ 5"],
        correct: 0,
        explanation: "3x + 2 ≥ 11 → 3x ≥ 9 → x ≥ 3.",
      },
      {
        question: "Qual é o produto notável de (a + b)²?",
        options: ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "2a² + b²"],
        correct: 1,
        explanation: "(a + b)² = a² + 2ab + b².",
      },
      {
        question: "Fatore: x² - 16",
        options: [
          "(x + 4)(x - 4)",
          "(x + 16)(x - 1)",
          "(x - 8)(x + 2)",
          "(x + 8)(x - 2)",
        ],
        correct: 0,
        explanation: "x² - 16 = (x + 4)(x - 4), diferença de quadrados.",
      },
      {
        question: "Resolva o sistema: x + y = 5 e x - y = 1",
        options: ["x=3, y=2", "x=2, y=3", "x=4, y=1", "x=1, y=4"],
        correct: 0,
        explanation: "Somando as equações: 2x=6 → x=3 → y=2.",
      },
      {
        question:
          "Se a razão da PA é 3 e o primeiro termo é 2, qual é o quarto termo?",
        options: ["11", "10", "9", "8"],
        correct: 0,
        explanation: "An = a1 + (n-1)r → A4 = 2 + 3*3 = 11.",
      },
      {
        question:
          "Se a razão da PG é 2 e o primeiro termo é 3, qual é o terceiro termo?",
        options: ["12", "6", "24", "8"],
        correct: 1,
        explanation: "An = a1*q^(n-1) → A3 = 3*2² = 12.",
      },
      {
        question: "Qual é o valor de log10 1000?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "log10 1000 = 3, pois 10³ = 1000.",
      },
      {
        question: "Resolva: 2^(x) = 8",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "2^x = 8 → 2^x = 2^3 → x = 3.",
      },
      {
        question: "Qual é a soma dos ângulos internos de um quadrilátero?",
        options: ["180°", "360°", "270°", "90°"],
        correct: 1,
        explanation: "A soma dos ângulos internos de um quadrilátero é 360°.",
      },
      {
        question: "Qual é a área de um triângulo com base 8 e altura 5?",
        options: ["20", "40", "15", "25"],
        correct: 0,
        explanation: "Área = (base*altura)/2 = (8*5)/2 = 20.",
      },
      {
        question: "Qual é a área de um retângulo de lados 6 e 4?",
        options: ["24", "20", "10", "12"],
        correct: 0,
        explanation: "Área = 6*4 = 24.",
      },
      {
        question: "Qual é a soma dos ângulos internos de um pentágono?",
        options: ["540°", "360°", "180°", "720°"],
        correct: 0,
        explanation: "Soma = (5-2)*180 = 540°.",
      },
      {
        question: "Resolva: x² + 5x + 6 = 0",
        options: ["x=-2 e x=-3", "x=2 e x=3", "x=-1 e x=-6", "x=1 e x=6"],
        correct: 0,
        explanation: "Fatorando: (x+2)(x+3)=0 → x=-2 ou x=-3.",
      },
      {
        question: "Se f(x) = x² - 1, qual é f(3)?",
        options: ["8", "9", "10", "7"],
        correct: 0,
        explanation: "f(3)=3²-1=9-1=8.",
      },
      {
        question: "Resolva: 4x - 7 = 9",
        options: ["4", "3", "5", "2"],
        correct: 2,
        explanation: "4x-7=9 → 4x=16 → x=4.",
      },
      {
        question: "Qual é a função do 1º grau?",
        options: ["f(x)=x²+2", "f(x)=2x+3", "f(x)=x³+1", "f(x)=√x"],
        correct: 1,
        explanation: "Função do 1º grau: f(x)=ax+b.",
      },
      {
        question: "Resolva: 2x + 3 = 7",
        options: ["1", "2", "3", "4"],
        correct: 1,
        explanation: "2x+3=7 → 2x=4 → x=2.",
      },
      {
        question: "Qual é a lei dos senos?",
        options: [
          "a/sinA = b/sinB = c/sinC",
          "a²+b²=c²",
          "A+B+C=180°",
          "a*b=c",
        ],
        correct: 0,
        explanation: "Lei dos senos: a/sinA = b/sinB = c/sinC.",
      },
      {
        question: "Qual é a lei dos cossenos?",
        options: [
          "c²=a²+b²-2ab*cosC",
          "a²+b²=c²",
          "a/sinA=b/sinB",
          "A+B+C=180°",
        ],
        correct: 0,
        explanation: "Lei dos cossenos: c²=a²+b²-2ab*cosC.",
      },
      {
        question: "Resolva: x² - x - 6 = 0",
        options: ["x=3 ou x=-2", "x=-3 ou x=2", "x=1 ou x=-6", "x=-1 ou x=6"],
        correct: 1,
        explanation: "x²-x-6=0 → (x-3)(x+2)=0 → x=3 ou x=-2.",
      },
      {
        question: "Resolva: 3x + 4 = 19",
        options: ["5", "4", "6", "7"],
        correct: 0,
        explanation: "3x+4=19 → 3x=15 → x=5.",
      },
      {
        question: "Qual é a área de um quadrado de lado 5?",
        options: ["25", "20", "15", "30"],
        correct: 0,
        explanation: "Área = lado² = 5²=25.",
      },
      {
        question: "Qual é a média de 4, 6, 8?",
        options: ["5", "6", "7", "8"],
        correct: 2,
        explanation: "Média = (4+6+8)/3 = 18/3=6.",
      },
      {
        question: "Qual é a razão da PA 2, 5, 8, 11, ...?",
        options: ["2", "3", "5", "4"],
        correct: 1,
        explanation: "Razão = diferença entre termos consecutivos = 5-2=3.",
      },
      {
        question: "Resolva: x/2 = 6",
        options: ["3", "6", "12", "2"],
        correct: 2,
        explanation: "x/2=6 → x=12.",
      },
      {
        question: "Qual é o próximo número da PG 3, 6, 12, ...?",
        options: ["24", "18", "36", "30"],
        correct: 0,
        explanation: "PG com razão 2: 12*2=24.",
      },
      {
        question: "Resolva: x² - 4x + 4 = 0",
        options: ["x=2", "x=-2", "x=4", "x=-4"],
        correct: 0,
        explanation: "x²-4x+4=(x-2)²=0 → x=2.",
      },
      {
        question: "Se a função modular é f(x)=|x-3|, qual é f(5)?",
        options: ["2", "3", "-2", "-3"],
        correct: 0,
        explanation: "|5-3|=2.",
      },
      {
        question: "Resolva: 7x - 14 = 0",
        options: ["0", "2", "1", "14"],
        correct: 1,
        explanation: "7x-14=0 → 7x=14 → x=2.",
      },
      {
        question: "Resolva: 5x + 3 = 18",
        options: ["2", "3", "4", "5"],
        correct: 3,
        explanation: "5x+3=18 → 5x=15 → x=3.",
      },
      {
        question: "Qual é o volume de um cubo de lado 3?",
        options: ["9", "18", "27", "12"],
        correct: 2,
        explanation: "Volume = lado³ = 3³=27.",
      },
      {
        question: "Qual é a área da circunferência de raio 2?",
        options: ["4π", "2π", "8π", "6π"],
        correct: 0,
        explanation: "Área = π*r² = π*2²=4π.",
      },
      {
        question: "Resolva: 2(x-3) = 8",
        options: ["5", "7", "6", "8"],
        correct: 2,
        explanation: "2(x-3)=8 → x-3=4 → x=7.",
      },
      {
        question: "Qual é a fórmula de juros simples?",
        options: ["J= P*i*n", "J= P*i*n/100", "J= P*i", "J= P*n"],
        correct: 1,
        explanation: "Juros simples: J = P*i*n/100.",
      },
      {
        question: "Qual é a fórmula de juros compostos?",
        options: ["M=P*(1+i)^n", "M=P*i*n", "M=P+i*n", "M=P*(1+i*n)"],
        correct: 0,
        explanation: "Juros compostos: M = P*(1+i)^n.",
      },
    ],
    dificil: [
      {
        question: "Resolva a equação: x³ - 6x² + 11x - 6 = 0",
        options: ["1,2,3", "1,3,6", "2,3,4", "1,2,4"],
        correct: 0,
        explanation: "Fatorando: (x-1)(x-2)(x-3)=0 → x=1,2,3.",
      },
      {
        question: "Resolva o sistema: x+y+z=6, x-y+z=2, x+2y-z=3",
        options: ["x=2,y=1,z=3", "x=1,y=2,z=3", "x=3,y=0,z=3", "x=1,y=1,z=4"],
        correct: 0,
        explanation: "Resolvendo por substituição ou matriz, x=2,y=1,z=3.",
      },
      {
        question: "Qual é o determinante da matriz [[1,2],[3,4]]?",
        options: ["-2", "2", "-1", "1"],
        correct: 0,
        explanation: "Det = 1*4 - 2*3 = 4-6=-2.",
      },
      {
        question: "Resolva: 2^(x+1) = 16",
        options: ["3", "4", "5", "2"],
        correct: 1,
        explanation: "2^(x+1)=16 → 2^(x+1)=2^4 → x+1=4 → x=3.",
      },
      {
        question: "Resolva: log2(x) + log2(x-3) = 3",
        options: ["4", "5", "6", "3"],
        correct: 2,
        explanation:
          "log2(x(x-3))=3 → x²-3x=8 → x²-3x-8=0 → x=4 ou x=-2 (descartar negativo) → x=4.",
      },
      {
        question: "Calcule a soma dos termos da PG: 3,6,12,... até o 6º termo",
        options: ["189", "192", "186", "180"],
        correct: 0,
        explanation: "An = 3*2^(n-1), S6 = 3*(2^6-1)/(2-1)=3*63=189.",
      },
      {
        question: "Resolva: |2x-5| = 7",
        options: ["6 e -1", "-6 e 1", "5 e -2", "7 e -2"],
        correct: 0,
        explanation: "2x-5=7 → x=6; 2x-5=-7 → x=-1.",
      },
      {
        question: "Resolva a inequação: x² - 5x + 6 < 0",
        options: ["2<x<3", "x<2 ou x>3", "x>2 e x<3", "x<3"],
        correct: 0,
        explanation: "Fatores: (x-2)(x-3)<0 → 2<x<3.",
      },
      {
        question: "Determine a derivada de f(x)=3x²+5x-2",
        options: ["6x+5", "3x²+5", "6x-5", "3x+5"],
        correct: 0,
        explanation: "f'(x) = 6x + 5.",
      },
      {
        question: "Resolva a equação exponencial: 3^(2x) = 81",
        options: ["2", "3", "4", "1"],
        correct: 0,
        explanation: "3^(2x)=3^4 → 2x=4 → x=2.",
      },
      {
        question: "Resolva: x² + x - 12 = 0",
        options: ["3 e -4", "4 e -3", "2 e -6", "6 e -2"],
        correct: 0,
        explanation: "x²+x-12=(x+4)(x-3)=0 → x=-4 ou x=3.",
      },
      {
        question: "Qual é o valor de cos 120°?",
        options: ["-1/2", "1/2", "-√3/2", "√3/2"],
        correct: 0,
        explanation: "cos 120° = -1/2.",
      },
      {
        question: "Calcule o volume de uma esfera de raio 3",
        options: ["36π", "27π", "113,1", "108π"],
        correct: 2,
        explanation: "V=4/3*π*r³=4/3*π*27≈113,1.",
      },
      {
        question: "Resolva: 5^(x-1)=25",
        options: ["3", "2", "1", "0"],
        correct: 1,
        explanation: "5^(x-1)=5² → x-1=2 → x=3.",
      },
      {
        question: "Qual é a soma dos ângulos internos de um hexágono?",
        options: ["720°", "540°", "360°", "600°"],
        correct: 0,
        explanation: "Soma = (6-2)*180=720°.",
      },
      {
        question: "Resolva: 2/(x-1) = 4",
        options: ["1,5", "2", "3", "-1"],
        correct: 0,
        explanation: "2/(x-1)=4 → x-1=0,5 → x=1,5.",
      },
      {
        question: "Resolva: x² - 2x - 3 = 0",
        options: ["3 e -1", "-3 e 1", "3 e 1", "-3 e -1"],
        correct: 0,
        explanation: "(x-3)(x+1)=0 → x=3 ou x=-1.",
      },
      {
        question: "Resolva: ln(x)=1",
        options: ["e", "1", "0", "ln2"],
        correct: 0,
        explanation: "ln(x)=1 → x=e.",
      },
      {
        question: "Qual é a função do 2º grau com raízes x=1 e x=3?",
        options: [
          "f(x)=x²-4x+3",
          "f(x)=x²-3x+1",
          "f(x)=x²-5x+4",
          "f(x)=x²-2x+3",
        ],
        correct: 0,
        explanation: "f(x)=(x-1)(x-3)=x²-4x+3.",
      },
      {
        question: "Qual é a fórmula da área do triângulo qualquer usando seno?",
        options: [
          "A=1/2*ab*sinC",
          "A=ab*sinC",
          "A=1/2*(a+b)*sinC",
          "A=a*b*sinC",
        ],
        correct: 0,
        explanation: "Área = 1/2 * a * b * sin(C).",
      },
      {
        question: "Resolva a equação: 4x² - 12x + 9 = 0",
        options: ["x=3/2", "x=1", "x=2", "x=3"],
        correct: 0,
        explanation: "4x²-12x+9=(2x-3)²=0 → x=3/2.",
      },
      {
        question: "Resolva: 2x² + 3x - 5 = 0",
        options: ["1 e -5/2", "-1 e 5/2", "1 e -2", "-1 e 2"],
        correct: 0,
        explanation: "Δ=3²-4*2*(-5)=49 → x=(-3±7)/4 → x=1 ou x=-5/2.",
      },
      {
        question: "Se f(x)=x²-4x+4, qual é o vértice?",
        options: ["(2,0)", "(0,4)", "(4,0)", "(2,4)"],
        correct: 0,
        explanation: "Vértice x=-b/2a=2 → f(2)=0 → (2,0).",
      },
      {
        question: "Resolva: 2^(x+2) = 32",
        options: ["3", "5", "4", "2"],
        correct: 2,
        explanation: "2^(x+2)=2^5 → x+2=5 → x=3.",
      },
      {
        question: "Resolva a inequação: x² - 4x + 3 ≥ 0",
        options: ["x≤1 ou x≥3", "1≤x≤3", "x<1 ou x>3", "x>1 e x<3"],
        correct: 0,
        explanation: "Fatores: (x-1)(x-3)≥0 → x≤1 ou x≥3.",
      },
      {
        question: "Resolva: log3(x-1)=2",
        options: ["10", "9", "8", "7"],
        correct: 1,
        explanation: "log3(x-1)=2 → x-1=9 → x=10.",
      },
      {
        question: "Resolva: 2x²-3x-2=0",
        options: ["2 e -0,5", "-2 e 0,5", "1 e -2", "-1 e 2"],
        correct: 0,
        explanation: "Δ=9+16=25 → x=(3±5)/4 → x=2 ou x=-0,5.",
      },
      {
        question: "Resolva: e^(2x) = e^4",
        options: ["x=2", "x=4", "x=1", "x=3"],
        correct: 0,
        explanation: "e^(2x)=e^4 → 2x=4 → x=2.",
      },
      {
        question: "Resolva: sin(x)=√3/2 no 1º quadrante",
        options: ["60°", "30°", "45°", "90°"],
        correct: 0,
        explanation: "sin60°=√3/2.",
      },
      {
        question: "Se f(x)=2x²-8x+6, qual é o mínimo?",
        options: ["-2", "-4", "-1", "0"],
        correct: 0,
        explanation: "Vértice: x=-b/2a=8/4=2 → f(2)=2*4-16+6=-2.",
      },
      {
        question: "Resolva a equação: x² + 2x + 2 = 0",
        options: ["-1±i", "1±i", "-2±i", "1±2i"],
        correct: 0,
        explanation: "Δ=4-8=-4 → x=(-2±√-4)/2=-1±i.",
      },
      {
        question: "Calcule a área do trapézio com bases 8 e 5 e altura 4",
        options: ["26", "24", "28", "30"],
        correct: 0,
        explanation: "A=(B+b)*h/2=(8+5)*4/2=26.",
      },
      {
        question: "Resolva: 2log(x)=3",
        options: ["√1000", "√10", "10", "100"],
        correct: 1,
        explanation: "2log(x)=3 → log(x)=3/2 → x=10^(3/2)=√1000.",
      },
      {
        question: "Resolva: 5^(2x+1)=125",
        options: ["1", "2", "3", "4"],
        correct: 0,
        explanation: "5^(2x+1)=5³ → 2x+1=3 → x=1.",
      },
      {
        question: "Qual é o volume de um cilindro com r=2 e h=5",
        options: ["20π", "10π", "40π", "25π"],
        correct: 2,
        explanation: "V=π*r²*h=π*4*5=20π.",
      },
      {
        question: "Resolva: x² - 4x + 5 = 0",
        options: ["2±i", "-2±i", "1±2i", "-1±i"],
        correct: 0,
        explanation: "Δ=(-4)²-20=16-20=-4 → x=(4±√-4)/2=2±i.",
      },
      {
        question: "Resolva: 3^(x-1)=9",
        options: ["3", "2", "4", "1"],
        correct: 1,
        explanation: "3^(x-1)=3² → x-1=2 → x=3.",
      },
      {
        question: "Resolva: ln(x)+ln(2)=ln(10)",
        options: ["5", "6", "4", "8"],
        correct: 0,
        explanation: "ln(2x)=ln10 → 2x=10 → x=5.",
      },
      {
        question: "Resolva: x² + 4x + 8 = 0",
        options: ["-2±2i", "2±2i", "-1±2i", "1±2i"],
        correct: 0,
        explanation: "Δ=16-32=-16 → x=(-4±4i)/2=-2±2i.",
      },
      {
        question:
          "Se a soma de uma PG infinita é 8 e o 1º termo é 4, qual é a razão?",
        options: ["1/2", "1/3", "2", "-1/2"],
        correct: 0,
        explanation: "S∞=a1/(1-q) → 8=4/(1-q) → 1-q=1/2 → q=1/2.",
      },
      {
        question: "Resolva: 2x+3y=7 e 4x-5y=1",
        options: ["x=2,y=1", "x=1,y=1", "x=1,y=2", "x=2,y=-1"],
        correct: 0,
        explanation: "Resolvendo por substituição ou soma, x=2,y=1.",
      },
      {
        question:
          "Calcule a hipotenusa de um triângulo retângulo com catetos 5 e 12",
        options: ["13", "12", "10", "14"],
        correct: 0,
        explanation: "h²=5²+12²=25+144=169 → h=13.",
      },
      {
        question: "Se f(x)=x³-3x²+2, encontre f'(x)",
        options: ["3x²-6x", "3x²-6x+2", "x²-6x", "3x²+2"],
        correct: 0,
        explanation: "Derivada: f'(x)=3x²-6x.",
      },
      {
        question: "Resolva: 2^(x-1) = 1/4",
        options: ["-1", "2", "-2", "1"],
        correct: 2,
        explanation: "2^(x-1)=2^-2 → x-1=-2 → x=-1.",
      },
      {
        question: "Resolva: sin(x)=1/2 no 1º quadrante",
        options: ["30°", "45°", "60°", "90°"],
        correct: 0,
        explanation: "sin30°=1/2.",
      },
    ],
  },

  // ================= INFORMATICA =================
  informatica: {
    facil: [
      {
        question: "Qual tecla é usada para copiar um arquivo no Windows 10?",
        options: ["Ctrl+X", "Ctrl+C", "Ctrl+V", "Ctrl+Z"],
        correct: 1,
        explanation: "Ctrl+C é o atalho para copiar arquivos ou textos.",
      },
      {
        question: "No Word 2016, qual guia contém opções de fonte e parágrafo?",
        options: ["Página Inicial", "Exibir", "Inserir", "Referências"],
        correct: 0,
        explanation:
          "A guia 'Página Inicial' possui formatação de fonte e parágrafo.",
      },
      {
        question: "Qual a função do Excel 2016?",
        options: [
          "Planilhas e gráficos",
          "Edição de texto",
          "Apresentações",
          "Navegação na Internet",
        ],
        correct: 0,
        explanation:
          "O Excel é usado para trabalhar com planilhas, cálculos e gráficos.",
      },
      {
        question: "No PowerPoint 2016, como você adiciona um novo slide?",
        options: ["Ctrl+P", "Ctrl+M", "Ctrl+S", "Ctrl+N"],
        correct: 1,
        explanation: "Ctrl+M adiciona um novo slide.",
      },
      {
        question: "Qual navegador é usado para acessar a Internet?",
        options: ["Excel", "Word", "Chrome", "PowerPoint"],
        correct: 2,
        explanation:
          "Navegadores como Chrome, Edge ou Firefox permitem acessar a Internet.",
      },
      {
        question:
          "No Windows 10, qual pasta geralmente armazena documentos do usuário?",
        options: ["Downloads", "Área de Trabalho", "Documentos", "Imagens"],
        correct: 2,
        explanation:
          "A pasta 'Documentos' armazena arquivos criados pelo usuário.",
      },
      {
        question: "Qual atalho envia um e-mail no Outlook ou Gmail?",
        options: ["Ctrl+Enter", "Ctrl+C", "Ctrl+P", "Ctrl+S"],
        correct: 0,
        explanation: "Ctrl+Enter envia um e-mail rapidamente.",
      },
      {
        question:
          "No Word, qual recurso corrige automaticamente erros de ortografia?",
        options: [
          "Verificação ortográfica",
          "Referências",
          "Comentários",
          "Automaçãode macros",
        ],
        correct: 0,
        explanation:
          "A verificação ortográfica corrige palavras digitadas incorretamente.",
      },
      {
        question: "Para salvar um arquivo no Excel, qual atalho usamos?",
        options: ["Ctrl+S", "Ctrl+P", "Ctrl+N", "Ctrl+O"],
        correct: 0,
        explanation: "Ctrl+S salva o arquivo atual.",
      },
      {
        question:
          "No PowerPoint, qual guia permite inserir imagens e gráficos?",
        options: ["Exibir", "Inserir", "Animações", "Design"],
        correct: 1,
        explanation:
          "A guia 'Inserir' permite adicionar imagens, gráficos e tabelas.",
      },
      {
        question: "No Windows 10, qual recurso permite pesquisar arquivos?",
        options: [
          "Menu Iniciar",
          "Explorador de arquivos",
          "Barra de pesquisa",
          "Painel de controle",
        ],
        correct: 2,
        explanation:
          "A barra de pesquisa do Windows permite localizar arquivos e programas.",
      },
      {
        question: "No Word 2016, qual é o atalho para negrito?",
        options: ["Ctrl+I", "Ctrl+U", "Ctrl+B", "Ctrl+N"],
        correct: 2,
        explanation: "Ctrl+B aplica negrito ao texto selecionado.",
      },
      {
        question: "Qual função do Excel permite somar um intervalo de células?",
        options: ["MÉDIA()", "SOMA()", "MÁXIMO()", "MÍNIMO()"],
        correct: 1,
        explanation: "A função SOMA() calcula a soma de um intervalo.",
      },
      {
        question:
          "No PowerPoint, qual guia permite aplicar transições aos slides?",
        options: ["Transições", "Inserir", "Exibir", "Design"],
        correct: 0,
        explanation:
          "A guia 'Transições' adiciona efeitos de transição entre slides.",
      },
      {
        question: "O que é um e-mail?",
        options: [
          "Mensagem eletrônica",
          "Arquivo de planilha",
          "Apresentação",
          "Página da web",
        ],
        correct: 0,
        explanation: "E-mail é uma mensagem enviada eletronicamente.",
      },
      {
        question: "No Windows 10, qual atalho abre o Explorador de Arquivos?",
        options: ["Windows+E", "Windows+R", "Ctrl+E", "Alt+E"],
        correct: 0,
        explanation: "Windows+E abre rapidamente o Explorador de Arquivos.",
      },
      {
        question: "Qual tipo de arquivo é gerado pelo Word?",
        options: [".docx", ".xlsx", ".pptx", ".jpg"],
        correct: 0,
        explanation: "O Word salva arquivos com extensão .docx.",
      },
      {
        question: "Qual recurso do Excel cria gráficos automaticamente?",
        options: [
          "Classificar",
          "Inserir gráfico",
          "AutoSoma",
          "Formatar células",
        ],
        correct: 1,
        explanation:
          "A opção 'Inserir gráfico' cria gráficos baseados nos dados selecionados.",
      },
      {
        question: "No PowerPoint, qual recurso permite animar objetos?",
        options: ["Transições", "Design", "Animações", "Revisão"],
        correct: 2,
        explanation:
          "A guia 'Animações' permite adicionar efeitos aos objetos do slide.",
      },
      {
        question:
          "No Word, qual ferramenta corrige automaticamente texto digitado errado?",
        options: [
          "Referências",
          "Correção automática",
          "Comentários",
          "Inserir",
        ],
        correct: 1,
        explanation:
          "A correção automática substitui automaticamente palavras incorretas.",
      },
      {
        question: "O que significa HTML?",
        options: [
          "Planilha eletrônica",
          "Linguagem de marcação",
          "Apresentação",
          "Programa de e-mail",
        ],
        correct: 1,
        explanation: "HTML é a linguagem de marcação usada para páginas web.",
      },
      {
        question: "No Windows 10, qual comando fecha uma janela ativa?",
        options: ["Alt+F4", "Ctrl+F4", "Ctrl+W", "Alt+Tab"],
        correct: 0,
        explanation: "Alt+F4 fecha a janela ativa.",
      },
      {
        question: "No Word, qual recurso adiciona referências e citações?",
        options: ["Referências", "Inserir", "Design", "Exibir"],
        correct: 0,
        explanation:
          "A guia 'Referências' permite criar citações e bibliografia.",
      },
      {
        question: "Qual função do Excel calcula a média de um intervalo?",
        options: ["MÉDIA()", "SOMA()", "MÍNIMO()", "MÁXIMO()"],
        correct: 0,
        explanation: "A função MÉDIA() calcula a média dos valores.",
      },
      {
        question: "No PowerPoint, qual guia altera o layout do slide?",
        options: ["Inserir", "Exibir", "Design", "Transições"],
        correct: 2,
        explanation:
          "A guia 'Design' permite alterar o layout e tema do slide.",
      },
      {
        question: "Qual atalho copia e cola um texto?",
        options: [
          "Ctrl+V e Ctrl+C",
          "Ctrl+S e Ctrl+P",
          "Ctrl+X e Ctrl+V",
          "Ctrl+C e Ctrl+V",
        ],
        correct: 3,
        explanation: "Ctrl+C copia e Ctrl+V cola o texto.",
      },
      {
        question: "No Windows, qual atalho abre o menu iniciar?",
        options: ["Ctrl+Esc", "Alt+Tab", "Tecla Windows", "Ctrl+I"],
        correct: 2,
        explanation: "A tecla Windows abre o menu iniciar.",
      },
      {
        question:
          "Qual recurso do Excel permite organizar dados de forma crescente ou decrescente?",
        options: [
          "Filtrar",
          "Formatar células",
          "Congelar Painéis",
          "Classificar",
        ],
        correct: 3,
        explanation: "A função 'Classificar' organiza os dados selecionados.",
      },
      {
        question: "No Word, qual recurso insere tabelas?",
        options: ["Design", "Inserir", "Referências", "Exibir"],
        correct: 1,
        explanation: "A guia 'Inserir' permite adicionar tabelas.",
      },
      {
        question:
          "No PowerPoint, qual recurso permite criar slides em branco rapidamente?",
        options: ["Transições", "Design", "Novo Slide", "Inserir"],
        correct: 2,
        explanation: "Novo Slide adiciona um slide em branco.",
      },
      {
        question: "Qual tipo de arquivo é criado pelo Excel?",
        options: [".docx", ".txt", ".xlsx", ".pptx"],
        correct: 2,
        explanation: "Excel cria arquivos com extensão .xlsx.",
      },
      {
        question: "No Windows 10, qual pasta contém downloads da Internet?",
        options: ["Área de Trabalho", "Downloads", "Imagens", "Documentos"],
        correct: 1,
        explanation:
          "A pasta 'Downloads' armazena arquivos baixados da Internet.",
      },
      {
        question: "Qual recurso do Word revisa ortografia e gramática?",
        options: ["Exibir", "Inserir", "Design", "Revisão"],
        correct: 3,
        explanation: "A guia 'Revisão' permite checar ortografia e gramática.",
      },
      {
        question: "No Excel, qual atalho abre uma nova planilha?",
        options: ["Ctrl+O", "Ctrl+S", "Ctrl+P", "Ctrl+N"],
        correct: 3,
        explanation: "Ctrl+N cria uma nova planilha.",
      },
      {
        question: "No PowerPoint, qual recurso permite inserir vídeo?",
        options: ["Exibir", "Inserir", "Transições", "Design"],
        correct: 1,
        explanation: "Na guia 'Inserir' é possível adicionar vídeos e mídias.",
      },
      {
        question: "Qual recurso de e-mail permite anexar arquivos?",
        options: ["Responder", "Anexar", "Excluir", "Encaminhar"],
        correct: 1,
        explanation: "O botão 'Anexar' permite incluir arquivos na mensagem.",
      },
      {
        question: "Qual recurso do Windows permite criar pastas?",
        options: ["Copiar", "Novo > Pasta", "Renomear", "Excluir"],
        correct: 1,
        explanation:
          "No menu 'Novo', escolha 'Pasta' para criar uma nova pasta.",
      },
      {
        question: "No Word, qual recurso permite alinhar texto à direita?",
        options: ["Negrito", "Alinhar à direita", "Itálico", "Sublinhado"],
        correct: 1,
        explanation:
          "A opção 'Alinhar à direita' posiciona o texto à margem direita.",
      },
      {
        question: "No Excel, qual função retorna o maior valor do intervalo?",
        options: ["MÁXIMO()", "SOMA()", "MÉDIA()", "MÍNIMO()"],
        correct: 0,
        explanation: "A função MÁXIMO() retorna o maior valor de um intervalo.",
      },
      {
        question:
          "No PowerPoint, qual recurso permite visualizar a apresentação?",
        options: ["Exibir", "Apresentação de Slides", "Design", "Transições"],
        correct: 1,
        explanation:
          "A opção 'Apresentação de Slides' inicia a visualização da apresentação.",
      },
      {
        question: "Qual navegador permite buscar informações na Internet?",
        options: ["Word", "Google Chrome", "Excel", "PowerPoint"],
        correct: 1,
        explanation:
          "Google Chrome, Edge ou Firefox são navegadores para buscar informações.",
      },
      {
        question: "No Windows, qual atalho desfaz uma ação?",
        options: ["Ctrl+X", "Ctrl+Z", "Ctrl+C", "Ctrl+Y"],
        correct: 1,
        explanation: "Ctrl+Z desfaz a última ação realizada.",
      },
      {
        question: "No Word, qual recurso permite inserir cabeçalho e rodapé?",
        options: ["Design", "Inserir", "Exibir", "Referências"],
        correct: 1,
        explanation:
          "Na guia 'Inserir' é possível adicionar cabeçalhos e rodapés.",
      },
      {
        question: "Qual função do Excel permite filtrar dados por critérios?",
        options: ["SOMA()", "Classificar", "Filtrar", "MÉDIA()"],
        correct: 2,
        explanation:
          "O recurso 'Filtrar' permite mostrar apenas os dados que atendem a determinados critérios.",
      },
      {
        question: "No PowerPoint, qual guia altera o fundo dos slides?",
        options: ["Exibir", "Design", "Transições", "Inserir"],
        correct: 1,
        explanation:
          "A guia 'Design' permite alterar o fundo e o tema dos slides.",
      },
    ],
    medio: [
      {
        question:
          "Qual atalho do Windows 10 permite alternar rapidamente entre janelas abertas?",
        options: ["Alt+Tab", "Ctrl+Tab", "Ctrl+Alt+Del", "Windows+E"],
        correct: 0,
        explanation: "Alt+Tab alterna entre todas as janelas abertas.",
      },
      {
        question:
          "No Word 2016, se você pressionar Ctrl+Shift+L, o que acontece?",
        options: [
          "Aplica marcador de lista",
          "Cria uma nova página",
          "Insere imagem",
          "Desfaz a última ação",
        ],
        correct: 0,
        explanation: "Ctrl+Shift+L aplica um estilo de lista com marcadores.",
      },
      {
        question:
          "Qual recurso do Excel 2016 filtra dados automaticamente sem precisar usar filtros manuais?",
        options: [
          "Tabela",
          "Classificar",
          "Congelar Painéis",
          "Validação de Dados",
        ],
        correct: 0,
        explanation:
          "Converter dados em Tabela permite filtros automáticos e estilos.",
      },
      {
        question:
          "No PowerPoint, o que acontece se você aplicar a transição 'Aparecer' em todos os slides?",
        options: [
          "Todos surgem de forma instantânea",
          "Todos mudam de cor",
          "Todos têm som",
          "Nada acontece",
        ],
        correct: 0,
        explanation:
          "A transição 'Aparecer' faz cada slide surgir de forma simples e rápida.",
      },
      {
        question:
          "No Windows 10, qual recurso permite restaurar o sistema a um ponto anterior?",
        options: [
          "Restauração do Sistema",
          "Atualizações e Segurança",
          "Painel de Controle",
          "Gerenciador de Tarefas",
        ],
        correct: 0,
        explanation:
          "A 'Restauração do Sistema' reverte o Windows a um ponto salvo anteriormente.",
      },
      {
        question:
          "Qual função do Excel retorna o valor mínimo de um intervalo?",
        options: ["MÍNIMO()", "MÁXIMO()", "SOMA()", "MÉDIA()"],
        correct: 0,
        explanation:
          "MÍNIMO() retorna o menor valor dentro do intervalo selecionado.",
      },
      {
        question:
          "No Word, qual recurso permite mesclar correspondência para enviar cartas personalizadas?",
        options: ["Mala Direta", "Referências", "Inserir", "Revisão"],
        correct: 0,
        explanation:
          "A 'Mala Direta' gera documentos personalizados usando uma base de dados.",
      },
      {
        question:
          "Em e-mails, qual a diferença entre 'Responder' e 'Responder a todos'?",
        options: [
          "Responder envia apenas ao remetente; 'Responder a todos' envia a todos da conversa",
          "Não há diferença",
          "Responder encaminha o e-mail",
          "Responder apaga o e-mail",
        ],
        correct: 0,
        explanation:
          "'Responder' envia apenas ao remetente; 'Responder a todos' inclui todos os destinatários.",
      },
      {
        question: "No Excel, o que a função CONCATENA faz?",
        options: [
          "Une textos de diferentes células",
          "Soma números",
          "Cria gráficos",
          "Aplica filtros",
        ],
        correct: 0,
        explanation:
          "CONCATENA combina o conteúdo de várias células em uma só.",
      },
      {
        question:
          "No PowerPoint, se você copiar um slide para outra apresentação, o que deve tomar cuidado?",
        options: [
          "Formatos e fontes podem mudar",
          "O slide não é copiado",
          "O slide perde imagens",
          "Nada acontece",
        ],
        correct: 0,
        explanation:
          "Ao copiar slides entre apresentações, formatação e fontes podem alterar.",
      },
      {
        question: "Qual é a extensão padrão de arquivos de macro do Excel?",
        options: [".xlsm", ".xlsx", ".docx", ".pptx"],
        correct: 0,
        explanation: "Arquivos .xlsm permitem macros no Excel.",
      },
      {
        question:
          "No Windows 10, qual atalho bloqueia rapidamente o computador?",
        options: ["Windows+L", "Ctrl+L", "Alt+L", "Ctrl+Alt+Del"],
        correct: 0,
        explanation: "Windows+L bloqueia o computador imediatamente.",
      },
      {
        question: "Qual recurso do Word permite comparar dois documentos?",
        options: ["Comparar", "Revisão", "Inserir", "Exibir"],
        correct: 0,
        explanation:
          "A opção 'Comparar' mostra as diferenças entre dois documentos.",
      },
      {
        question:
          "No Excel, qual recurso cria gráficos dinâmicos que mudam quando filtramos dados?",
        options: [
          "Tabela Dinâmica",
          "Gráfico Simples",
          "Validação de Dados",
          "Congelar Painéis",
        ],
        correct: 0,
        explanation: "Gráficos dinâmicos se baseiam em Tabelas Dinâmicas.",
      },
      {
        question: "No Windows, qual recurso permite criar uma máquina virtual?",
        options: [
          "Hyper-V",
          "Gerenciador de Arquivos",
          "Painel de Controle",
          "Prompt de Comando",
        ],
        correct: 0,
        explanation:
          "Hyper-V permite criar e gerenciar máquinas virtuais no Windows.",
      },
      {
        question:
          "No Word, qual atalho cria uma nova linha sem iniciar um novo parágrafo?",
        options: ["Shift+Enter", "Enter", "Ctrl+Enter", "Alt+Enter"],
        correct: 0,
        explanation:
          "Shift+Enter insere uma quebra de linha suave sem criar novo parágrafo.",
      },
      {
        question:
          "No PowerPoint, se você aplicar a animação 'Desvanecer' a um objeto, o que ocorre?",
        options: [
          "O objeto desaparece gradualmente",
          "O objeto pisca",
          "O objeto aumenta de tamanho",
          "Nada acontece",
        ],
        correct: 0,
        explanation:
          "A animação 'Desvanecer' faz o objeto sumir de forma gradual.",
      },
      {
        question: "Qual é o limite de anexos em um e-mail do Gmail atualmente?",
        options: ["25 MB", "50 MB", "10 MB", "100 MB"],
        correct: 0,
        explanation: "O Gmail permite anexos de até 25 MB por mensagem.",
      },
      {
        question:
          "No Excel, qual recurso ajuda a evitar a entrada de valores inválidos?",
        options: [
          "Validação de Dados",
          "Congelar Painéis",
          "Classificar",
          "Filtrar",
        ],
        correct: 0,
        explanation:
          "Validação de Dados limita o tipo de dados que podem ser inseridos.",
      },
      {
        question:
          "No Word, o que acontece se você ativar o modo 'Controle de Alterações'?",
        options: [
          "Todas as modificações são registradas",
          "Nada muda",
          "O documento se bloqueia",
          "As fontes mudam automaticamente",
        ],
        correct: 0,
        explanation:
          "O 'Controle de Alterações' mostra todas as edições feitas no documento.",
      },
      {
        question: "No PowerPoint, qual guia permite inserir comentários?",
        options: ["Revisão", "Inserir", "Design", "Exibir"],
        correct: 0,
        explanation:
          "A guia 'Revisão' permite inserir e gerenciar comentários nos slides.",
      },
      {
        question: "Qual atalho no Word repete a última ação?",
        options: ["Ctrl+Y", "Ctrl+Z", "Ctrl+R", "Ctrl+E"],
        correct: 0,
        explanation: "Ctrl+Y repete a última ação executada no documento.",
      },
      {
        question:
          "No Excel, qual função retorna o valor arredondado para cima?",
        options: ["ARREDONDAR.PARA.CIMA()", "ARRED()", "MÁXIMO()", "SOMA()"],
        correct: 0,
        explanation:
          "ARREDONDAR.PARA.CIMA() arredonda números para o próximo inteiro ou decimal especificado.",
      },
      {
        question: "No Windows, qual comando abre o Gerenciador de Tarefas?",
        options: ["Ctrl+Shift+Esc", "Ctrl+Alt+Del", "Alt+F4", "Windows+R"],
        correct: 0,
        explanation:
          "Ctrl+Shift+Esc abre diretamente o Gerenciador de Tarefas.",
      },
      {
        question: "No Word, qual recurso insere sumário automaticamente?",
        options: ["Sumário Automático", "Referências", "Design", "Exibir"],
        correct: 0,
        explanation:
          "O 'Sumário Automático' cria um índice baseado nos estilos de título.",
      },
      {
        question:
          "No Excel, qual recurso permite criar fórmulas sem precisar digitar manualmente todas as células?",
        options: [
          "Referência Absoluta",
          "Preenchimento Relâmpago",
          "Função SOMA",
          "Classificar",
        ],
        correct: 1,
        explanation:
          "O Preenchimento Relâmpago ajuda a preencher fórmulas automaticamente.",
      },
      {
        question:
          "No PowerPoint, qual recurso permite gravar a apresentação com narração?",
        options: [
          "Gravar Apresentação de Slides",
          "Transições",
          "Inserir",
          "Exibir",
        ],
        correct: 0,
        explanation:
          "O recurso 'Gravar Apresentação de Slides' adiciona áudio e marcações de tempo.",
      },
      {
        question: "Qual diferença entre arquivo .docx e .doc?",
        options: [
          ".docx é mais moderno e comprimido",
          "Não há diferença",
          ".docx não abre no Word",
          ".docx é imagem",
        ],
        correct: 0,
        explanation: ".docx é o formato mais moderno e compacto do Word.",
      },
      {
        question:
          "No Excel, qual função verifica se uma condição é verdadeira ou falsa?",
        options: ["SE()", "SOMA()", "MÉDIA()", "MÍNIMO()"],
        correct: 0,
        explanation:
          "A função SE() avalia uma condição e retorna valores diferentes dependendo do resultado.",
      },
      {
        question:
          "No Windows 10, qual ferramenta verifica erros no disco rígido?",
        options: [
          "Verificação de Disco (CHKDSK)",
          "Restauração do Sistema",
          "Painel de Controle",
          "Gerenciador de Dispositivos",
        ],
        correct: 0,
        explanation: "CHKDSK verifica e corrige erros no disco rígido.",
      },
      {
        question:
          "No Word, qual recurso cria índices automáticos de figuras e tabelas?",
        options: ["Legenda e Índice", "Referências", "Inserir", "Design"],
        correct: 0,
        explanation:
          "Usando 'Legenda', é possível criar índices automáticos de figuras e tabelas.",
      },
      {
        question:
          "No PowerPoint, qual recurso permite criar uma apresentação interativa com botões?",
        options: ["Links e Ações", "Design", "Exibir", "Transições"],
        correct: 0,
        explanation:
          "Ações e hiperlinks permitem criar interatividade nos slides.",
      },
      {
        question:
          "Qual recurso do Gmail organiza mensagens em categorias como Principal, Social e Promoções?",
        options: [
          "Caixas de Entrada com Abas",
          "Marcadores",
          "Filtros",
          "Rascunhos",
        ],
        correct: 0,
        explanation:
          "As abas da Caixa de Entrada categorizam automaticamente os e-mails.",
      },
      {
        question:
          "No Excel, qual recurso congela linhas ou colunas para visualização contínua?",
        options: [
          "Congelar Painéis",
          "Filtrar",
          "Classificar",
          "Validação de Dados",
        ],
        correct: 0,
        explanation:
          "Congelar Painéis mantém linhas ou colunas visíveis ao rolar a planilha.",
      },
      {
        question: "No Word, qual atalho transforma texto em maiúsculas?",
        options: ["Shift+F3", "Ctrl+Shift+U", "Ctrl+Shift+M", "Alt+F3"],
        correct: 0,
        explanation:
          "Shift+F3 alterna entre maiúsculas, minúsculas e capitalização de títulos.",
      },
      {
        question:
          "No PowerPoint, qual recurso ajuda a alinhar objetos automaticamente?",
        options: ["Guias de Alinhamento", "Transições", "Design", "Inserir"],
        correct: 0,
        explanation:
          "Guias de Alinhamento permitem posicionar objetos com precisão.",
      },
      {
        question: "No Windows, qual ferramenta permite desinstalar programas?",
        options: [
          "Programas e Recursos",
          "Painel de Controle",
          "Gerenciador de Arquivos",
          "Configurações de Tela",
        ],
        correct: 0,
        explanation:
          "Em 'Programas e Recursos' é possível desinstalar softwares.",
      },
      {
        question: "No Word, o que acontece se você pressionar Ctrl+Shift+N?",
        options: [
          "Aplica o estilo Normal",
          "Cria nova página",
          "Insere nota de rodapé",
          "Não faz nada",
        ],
        correct: 0,
        explanation: "Ctrl+Shift+N aplica o estilo de parágrafo 'Normal'.",
      },
      {
        question:
          "No Excel, qual função retorna a quantidade de células preenchidas em um intervalo?",
        options: ["CONT.VALORES()", "SOMA()", "MÉDIA()", "CONT.NUM()"],
        correct: 0,
        explanation:
          "CONT.VALORES() conta todas as células preenchidas, incluindo texto.",
      },
      {
        question:
          "Qual recurso do Windows 10 permite restaurar arquivos apagados?",
        options: [
          "Lixeira",
          "Restauração do Sistema",
          "Backup do Windows",
          "Painel de Controle",
        ],
        correct: 0,
        explanation:
          "Arquivos apagados vão para a Lixeira, de onde podem ser restaurados.",
      },
      {
        question:
          "No Word, qual recurso insere links para sites ou documentos?",
        options: ["Hiperlink", "Referências", "Inserir", "Design"],
        correct: 0,
        explanation: "Hiperlink cria links clicáveis para sites ou arquivos.",
      },
      {
        question:
          "No PowerPoint, qual atalho inicia a apresentação do primeiro slide?",
        options: ["F5", "Shift+F5", "Ctrl+F5", "Alt+F5"],
        correct: 0,
        explanation: "F5 inicia a apresentação a partir do primeiro slide.",
      },
      {
        question: "No Excel, qual recurso permite dividir a tela em painéis?",
        options: ["Dividir", "Filtrar", "Classificar", "Validação de Dados"],
        correct: 0,
        explanation:
          "O recurso 'Dividir' permite visualizar diferentes partes da planilha simultaneamente.",
      },
      {
        question:
          "No Windows 10, qual recurso impede alterações em arquivos importantes?",
        options: [
          "Controle de Conta de Usuário (UAC)",
          "Firewall",
          "Restauração do Sistema",
          "BitLocker",
        ],
        correct: 0,
        explanation:
          "O UAC solicita permissões para alterações em arquivos ou programas críticos.",
      },
      {
        question:
          "No Word, qual recurso permite criar formulários preenchíveis?",
        options: ["Campos de Formulário", "Referências", "Design", "Exibir"],
        correct: 0,
        explanation:
          "Campos de Formulário permitem criar documentos interativos.",
      },
      {
        question:
          "No PowerPoint, qual recurso ajuda a duplicar slides rapidamente?",
        options: ["Ctrl+D", "Ctrl+C", "Ctrl+V", "Ctrl+N"],
        correct: 0,
        explanation: "Ctrl+D duplica o slide selecionado.",
      },
    ],
    dificil: [
      {
        question:
          "No Windows 10, qual comando do PowerShell lista todos os processos em execução?",
        options: ["Get-Process", "tasklist", "ps -aux", "List-Process"],
        correct: 0,
        explanation:
          "Get-Process é o comando do PowerShell para listar processos.",
      },
      {
        question:
          "No Word 2016, qual recurso permite proteger um documento com senha e restrições de edição?",
        options: [
          "Restringir Edição",
          "Controle de Alterações",
          "Comentários",
          "Criptografia Avançada",
        ],
        correct: 0,
        explanation:
          "Restringir Edição permite limitar alterações e proteger com senha.",
      },
      {
        question:
          "No Excel, qual fórmula retorna o valor mais próximo de zero de um intervalo?",
        options: ["MÍNIMOABS()", "PROXIMO()", "ABS()", "MIN()"],
        correct: 0,
        explanation: "MÍNIMOABS() retorna o valor mais próximo de zero.",
      },
      {
        question:
          "No PowerPoint, qual recurso permite criar links entre slides diferentes dentro da mesma apresentação?",
        options: [
          "Hiperlink interno",
          "Transição personalizada",
          "Master Slide",
          "Animar trajetória",
        ],
        correct: 0,
        explanation:
          "O Hiperlink interno permite navegação entre slides da mesma apresentação.",
      },
      {
        question:
          "Qual recurso do Windows 10 permite montar imagens ISO sem software adicional?",
        options: [
          "Montar ISO",
          "Gerenciador de Disco",
          "Explorar Arquivos",
          "CMD",
        ],
        correct: 0,
        explanation:
          "Basta clicar com o botão direito na ISO e selecionar 'Montar'.",
      },
      {
        question:
          "No Excel, como impedir que fórmulas sejam alteradas por outros usuários?",
        options: [
          "Proteger Planilha",
          "Validação de Dados",
          "Congelar Painéis",
          "Classificar",
        ],
        correct: 0,
        explanation:
          "Proteger planilha bloqueia células específicas contra alterações.",
      },
      {
        question:
          "No Word, qual recurso permite combinar vários documentos em um único arquivo mantendo formatação?",
        options: [
          "Combinar Documentos",
          "Mala Direta",
          "Mesclar Comentários",
          "Modelo de Documento",
        ],
        correct: 0,
        explanation:
          "Combinar Documentos permite unir textos preservando formatação.",
      },
      {
        question:
          "No PowerPoint, qual recurso permite sincronizar animações com áudio?",
        options: [
          "Painel de Animação",
          "Transição",
          "Master Slide",
          "Cronômetro",
        ],
        correct: 0,
        explanation:
          "O Painel de Animação permite ajustar tempos e sincronizar com áudio.",
      },
      {
        question:
          "No Windows 10, qual ferramenta permite criptografar arquivos e pastas facilmente?",
        options: ["BitLocker", "Firewall", "Proteção de Pasta", "UAC"],
        correct: 0,
        explanation:
          "BitLocker permite criptografia completa de discos e pastas.",
      },
      {
        question:
          "No Excel, qual função retorna o inverso multiplicativo de um número?",
        options: ["1/X", "INV()", "RECIPROCO()", "INVERT()"],
        correct: 2,
        explanation:
          "A função RECIPROCO() retorna 1 dividido pelo valor da célula.",
      },
      {
        question:
          "No Word, qual recurso permite inserir uma equação matemática com formatação automática?",
        options: [
          "Inserir Equação",
          "Editor de Fórmulas",
          "Referência Cruzada",
          "SmartArt",
        ],
        correct: 0,
        explanation:
          "Inserir Equação adiciona fórmulas matemáticas formatadas automaticamente.",
      },
      {
        question:
          "No PowerPoint, como criar uma animação personalizada baseada em caminho?",
        options: [
          "Animar trajetória",
          "Transição de Slide",
          "Painel de Animação",
          "Design",
        ],
        correct: 0,
        explanation:
          "Animar trajetória permite que objetos sigam caminhos específicos.",
      },
      {
        question:
          "No Windows, qual comando do Prompt de Comando mostra a configuração de IP?",
        options: ["ipconfig", "ifconfig", "netstat", "ping"],
        correct: 0,
        explanation: "ipconfig exibe as configurações de IP do Windows.",
      },
      {
        question:
          "No Excel, qual função retorna a quantidade de células que atendem a múltiplas condições?",
        options: ["CONT.SES()", "CONT.SE()", "SOMASE()", "CONT.VALORES()"],
        correct: 0,
        explanation: "CONT.SES() permite múltiplas condições no intervalo.",
      },
      {
        question:
          "No Word, qual recurso permite criar um índice de conteúdo automático?",
        options: ["Sumário", "Referências", "Marcadores", "Cabeçalho"],
        correct: 0,
        explanation: "O Sumário gera um índice baseado nos estilos de títulos.",
      },
      {
        question:
          "No PowerPoint, qual recurso permite importar slides de outra apresentação mantendo formatação?",
        options: ["Reutilizar Slides", "Master Slide", "Tema", "Layout"],
        correct: 0,
        explanation:
          "Reutilizar Slides importa slides com formatação original.",
      },
      {
        question:
          "No Windows 10, qual recurso permite recuperar arquivos apagados acidentalmente de uma unidade externa?",
        options: [
          "Histórico de Arquivos",
          "Restauração do Sistema",
          "Lixeira",
          "Backup do Windows",
        ],
        correct: 0,
        explanation:
          "O Histórico de Arquivos permite restaurar versões de arquivos de unidades externas.",
      },
      {
        question:
          "No Excel, qual recurso permite automatizar tarefas repetitivas?",
        options: [
          "Macros",
          "Validação de Dados",
          "Tabela Dinâmica",
          "Preenchimento Relâmpago",
        ],
        correct: 0,
        explanation:
          "Macros permitem gravar e executar sequências de ações automaticamente.",
      },
      {
        question:
          "No Word, qual recurso ajuda a evitar duplicidade de palavras em um documento?",
        options: [
          "Verificação Ortográfica",
          "Controle de Alterações",
          "Mala Direta",
          "Referências",
        ],
        correct: 0,
        explanation:
          "A verificação ortográfica detecta palavras repetidas ou incorretas.",
      },
      {
        question:
          "No PowerPoint, como configurar um slide para avançar automaticamente após X segundos?",
        options: [
          "Cronometrar Slides",
          "Transição",
          "Animar Objeto",
          "Revisão",
        ],
        correct: 0,
        explanation:
          "Na guia Transição, é possível definir tempo de avanço automático dos slides.",
      },
      {
        question:
          "No Windows, qual recurso permite restaurar a versão anterior de um arquivo?",
        options: [
          "Histórico de Arquivos",
          "Restauração do Sistema",
          "Lixeira",
          "BitLocker",
        ],
        correct: 0,
        explanation:
          "O Histórico de Arquivos mantém versões antigas de arquivos para restauração.",
      },
      {
        question:
          "No Excel, qual função retorna a parte inteira de um número decimal?",
        options: ["INT()", "ARRED()", "TRUNCAR()", "MÍNIMO()"],
        correct: 0,
        explanation: "INT() retorna apenas a parte inteira do número.",
      },
      {
        question:
          "No Word, qual recurso permite comparar duas versões do mesmo documento?",
        options: [
          "Comparar Documentos",
          "Mala Direta",
          "Mesclar Comentários",
          "Revisão",
        ],
        correct: 0,
        explanation:
          "Comparar Documentos mostra as diferenças entre dois arquivos.",
      },
      {
        question:
          "No PowerPoint, qual recurso permite bloquear a posição de objetos?",
        options: ["Travar Objetos", "Animar", "Transição", "Master Slide"],
        correct: 0,
        explanation: "Travar Objetos impede que sejam movidos acidentalmente.",
      },
      {
        question:
          "No Windows 10, qual recurso permite criar um disco de recuperação do sistema?",
        options: [
          "Unidade de Recuperação",
          "BitLocker",
          "Backup do Windows",
          "Restauração do Sistema",
        ],
        correct: 0,
        explanation:
          "Unidade de Recuperação permite criar mídia de recuperação para emergências.",
      },
      {
        question:
          "No Excel, qual função retorna o número de semanas entre duas datas?",
        options: ["DIAS360()/7", "DIAS()/7", "SEMANAS()", "NETWORKDAYS()"],
        correct: 0,
        explanation:
          "DIAS360()/7 retorna a quantidade aproximada de semanas entre datas considerando ano comercial.",
      },
      {
        question:
          "No Word, qual recurso permite criar formulários interativos?",
        options: [
          "Campos de Formulário",
          "Mala Direta",
          "Referências",
          "Design",
        ],
        correct: 0,
        explanation:
          "Campos de Formulário criam campos preenchíveis no documento.",
      },
      {
        question:
          "No PowerPoint, qual recurso permite criar links para arquivos externos?",
        options: ["Hiperlink", "Animar", "Transição", "Master Slide"],
        correct: 0,
        explanation: "Hiperlink conecta slides a arquivos ou páginas externas.",
      },
      {
        question:
          "No Windows 10, qual recurso impede alterações de programas sem permissão do administrador?",
        options: [
          "Controle de Conta de Usuário (UAC)",
          "Firewall",
          "BitLocker",
          "Restauração do Sistema",
        ],
        correct: 0,
        explanation:
          "O UAC solicita permissão sempre que um programa tenta fazer alterações importantes.",
      },
      {
        question:
          "No Excel, qual função retorna o valor mais frequente em um intervalo?",
        options: ["MODO()", "MED()", "MÉDIA()", "MAIOR()"],
        correct: 0,
        explanation: "MODO() retorna o valor que aparece mais vezes.",
      },
      {
        question:
          "No Word, qual recurso permite inserir notas de rodapé e de fim?",
        options: ["Referências", "Inserir", "Mala Direta", "Design"],
        correct: 0,
        explanation:
          "Referências → Inserir Nota de Rodapé ou Nota de Fim permite documentar referências.",
      },
      {
        question:
          "No PowerPoint, qual recurso permite criar animação em sequência com um clique?",
        options: ["Painel de Animação", "Transição", "Design", "Master Slide"],
        correct: 0,
        explanation:
          "O Painel de Animação permite controlar a ordem e sequência das animações.",
      },
      {
        question:
          "No Windows 10, qual comando permite verificar conectividade com outro computador?",
        options: ["ping", "ipconfig", "tracert", "netstat"],
        correct: 0,
        explanation:
          "O comando ping envia pacotes e verifica se o outro computador responde.",
      },
      {
        question:
          "No Excel, qual recurso permite filtrar dados com múltiplos critérios?",
        options: [
          "Filtros Avançados",
          "Classificar",
          "Validação de Dados",
          "Congelar Painéis",
        ],
        correct: 0,
        explanation:
          "Filtros Avançados permitem múltiplas condições simultâneas.",
      },
      {
        question:
          "No Word, qual recurso permite criar modelos reutilizáveis de documento?",
        options: [
          "Modelo de Documento",
          "Mala Direta",
          "Campos de Formulário",
          "Referências",
        ],
        correct: 0,
        explanation:
          "Modelo de Documento salva estrutura e formatação para reutilização.",
      },
      {
        question:
          "No PowerPoint, qual recurso permite exportar a apresentação como vídeo?",
        options: [
          "Exportar → Criar Vídeo",
          "Salvar Como",
          "Transição",
          "Design",
        ],
        correct: 0,
        explanation:
          "É possível exportar a apresentação em formato de vídeo para reprodução independente.",
      },
      {
        question:
          "No Windows, qual recurso permite criptografar apenas arquivos selecionados?",
        options: [
          "EFS (Encrypting File System)",
          "BitLocker",
          "Controle de Conta de Usuário",
          "Firewall",
        ],
        correct: 0,
        explanation: "EFS permite criptografia em nível de arquivo ou pasta.",
      },
      {
        question:
          "No Excel, qual função retorna o valor da célula mais à direita em uma linha?",
        options: ["ÍNDICE()", "DESLOC()", "DIREITA()", "MÁXIMO()"],
        correct: 0,
        explanation:
          "ÍNDICE() com combinação de linha e coluna permite retornar células específicas.",
      },
      {
        question:
          "No Word, qual recurso permite proteger apenas partes do documento com senha?",
        options: [
          "Restringir Edição",
          "Controle de Alterações",
          "Mala Direta",
          "Referências",
        ],
        correct: 0,
        explanation: "Restringir Edição permite proteger seções específicas.",
      },
      {
        question:
          "No PowerPoint, qual recurso permite alinhar objetos com precisão usando guias?",
        options: [
          "Guias de Alinhamento",
          "Transição",
          "Painel de Animação",
          "Master Slide",
        ],
        correct: 0,
        explanation:
          "Guias de Alinhamento ajudam a posicionar objetos com exatidão.",
      },
    ],
  },

  // ================= CTB Transito =================
  transito: {
    facil: [
      {
        question:
          "Qual é a velocidade máxima permitida em vias arteriais urbanas, salvo sinalização em contrário?",
        options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
        correct: 2,
        explanation:
          "Segundo o CTB Art. 61, I, 'b', a velocidade máxima padrão para **Vias Arteriais** (as mais comuns em cidades grandes) é de **60 km/h**, salvo sinalização específica. A alternativa 60 km/h é o limite padrão mais alto em vias urbanas (exceto Trânsito Rápido - 80 km/h), sendo a resposta mais comum em questões de 'velocidade máxima permitida em vias urbanas'.",
      },
      {
        question: "O que indica a faixa branca contínua no eixo da via?",
        options: [
          "Proibido ultrapassar",
          "Permitido ultrapassar com atenção",
          "Separação de fluxos opostos com ultrapassagem permitida",
          "Proibido estacionar",
        ],
        correct: 0,
        image: "/images/faixa-branca-continua.png",
        explanation:
          "A faixa branca contínua indica proibição de ultrapassar e mudança de faixa. É usada para separar fluxos no mesmo sentido, mantendo segurança em locais de risco.",
      },
      {
        question: "A faixa seccionada (tracejada) branca indica:",
        options: [
          "Proibição total de ultrapassagem",
          "Permissão de ultrapassagem quando houver segurança",
          "Via de sentido único",
          "Faixa exclusiva para ônibus",
        ],
        correct: 1,
        image: "/images/faixa-branca-seccionada.png",
        explanation:
          "A faixa branca seccionada (tracejada) indica que é permitido mudar de faixa ou ultrapassar, desde que o movimento seja seguro.",
      },

      {
        question:
          "Qual é a velocidade máxima permitida, em geral, nas vias urbanas, salvo sinalização em contrário?",
        options: ["30 km/h", "40 km/h", "60 km/h", "80 km/h"],
        correct: 2,
        image: "/images/image1.jpeg",
        explanation:
          "Conforme o Art. 61, I, do CTB, a velocidade máxima geral nas vias urbanas é de 60 km/h nas vias arteriais, salvo sinalização em contrário. As demais vias têm limites menores: 40 km/h (coletoras) e 30 km/h (locais).",
      },
      {
        question:
          "O que indica uma placa amarela com um símbolo que representa vento lateral?",
        options: ["Permitido", "Proibido", "Aviso", "Obrigatório"],
        correct: 2,
        image: "/public/placa-a-44.png",
        explanation:
          "Placas amarelas são de **Advertência** (Aviso). O símbolo que representa vento lateral indica a placa **A-44 - Vento Lateral**, alertando o condutor sobre a possibilidade de rajadas de vento que podem afetar a direção do veículo. Portanto, a resposta correta é **Aviso**.",
      },
      {
        question: "O que significa a luz amarela do semáforo?",
        options: [
          "Acelerar para passar",
          "Atenção, prepare-se para parar",
          "Pode passar normalmente",
          "Parar imediatamente",
        ],
        correct: 1,
        explanation:
          "CTB Art. 89, II: A luz amarela indica 'atenção', devendo o condutor se preparar para parar. A opção **Atenção, prepare-se para parar** é a definição correta.",
      },
      {
        question:
          "Qual documento o condutor deve portar obrigatoriamente ao dirigir?",
        options: [
          "Apenas CNH",
          "CNH e CRLV",
          "Apenas CRLV",
          "Carteira de trabalho",
        ],
        correct: 1,
        explanation:
          "CTB Art. 159 (CNH - Carteira Nacional de Habilitação) e Art. 133 (CRLV - Certificado de Registro e Licenciamento de Veículo): O condutor deve portar ambos os documentos, em formato físico ou digital (CNH-e e CRLV-e).",
      },
      {
        question:
          "Quantos pontos na CNH resultam em suspensão do direito de dirigir em 12 meses?",
        options: ["10 pontos", "20 pontos", "30 pontos", "40 pontos"],
        correct: 3,
        explanation:
          "CTB Art. 261: O limite de pontos para suspensão é: **40 pontos** (se o condutor não tiver nenhuma infração gravíssima); 30 pontos (se houver 1 infração gravíssima); ou 20 pontos (se houver 2 ou mais infrações gravíssimas) no período de 12 meses.",
      },
      {
        question: "O uso do cinto de segurança é obrigatório para:",
        options: [
          "Apenas o motorista",
          "Motorista e passageiro da frente",
          "Todos os ocupantes do veículo",
          "Apenas em rodovias",
        ],
        correct: 2,
        explanation:
          "CTB Art. 65 e Art. 167: O uso do cinto de segurança é obrigatório para **todos os ocupantes do veículo** em todas as vias do território nacional.",
      },
      {
        question: "A faixa de pedestres deve ser respeitada em qual situação?",
        options: [
          "Apenas com semáforo",
          "Sempre que houver pedestre atravessando",
          "Apenas à noite",
          "Apenas em escolas",
        ],
        correct: 1,
        explanation:
          "CTB Art. 70: O condutor deve dar preferência de passagem ao pedestre que **esteja atravessando a via** na faixa a ele destinada.",
      },
      {
        question: "Qual a idade mínima para obter a CNH categoria B?",
        options: ["16 anos", "18 anos", "21 anos", "25 anos"],
        correct: 1,
        explanation:
          "CTB Art. 140, I: A idade mínima para obtenção da CNH (qualquer categoria) é de **18 anos** completos (ser penalmente imputável).",
      },
      {
        question:
          "O triângulo de sinalização deve ser colocado a quantos metros do veículo em pane?",
        options: ["10 metros", "20 metros", "30 metros", "50 metros"],
        correct: 2,
        explanation:
          "CTB Art. 48 e Resolução CONTRAN $\text{n}^circ 36/98$: O triângulo deve ser colocado a uma distância **mínima de 30 metros** da traseira do veículo. É importante lembrar a regra geral: a distância em metros deve ser igual ao limite de velocidade da via (ex: 60km/h = 60m), mas o mínimo absoluto é 30 metros.",
      },
      {
        question: "Dirigir sem CNH é infração de natureza:",
        options: ["Leve", "Média", "Grave", "Gravíssima"],
        correct: 3,
        explanation:
          "CTB Art. 162, I: Dirigir sem possuir CNH ou PPD (Permissão para Dirigir) é infração de natureza **Gravíssima** (7 pontos), com multa multiplicada por 3, e retenção do veículo.",
      },
      {
        question: "O farol baixo deve ser usado em vias urbanas:",
        options: [
          "Apenas à noite",
          "Durante o dia e à noite",
          "Apenas em túneis",
          "Apenas com chuva",
        ],
        correct: 0,
        explanation:
          "CTB Art. 40, I, 'a': O uso de luz baixa é obrigatório **à noite** nas vias urbanas. Durante o dia, em vias urbanas, só é obrigatório em túneis ou sob chuva/neblina.",
      },
      {
        question:
          "Qual a validade da CNH para condutores com menos de 50 anos?",
        options: ["5 anos", "10 anos", "15 anos", "20 anos"],
        correct: 1,
        explanation:
          "CTB Art. 147, $\text{§}2^circ$ (Lei $\text{n}^circ 14.071/2020$): A validade do exame de aptidão física e mental será de **10 anos** para condutores com idade inferior a 50 anos.",
      },
      {
        question: "A buzina deve ser usada:",
        options: [
          "Sempre que necessário",
          "Apenas em emergências",
          "Para apressar outros veículos",
          "Em qualquer situação",
        ],
        correct: 1,
        explanation:
          "CTB Art. 41: O uso da buzina é permitido somente como toque breve de advertência, para evitar acidentes. Portanto, o uso se restringe a situações de **emergências** ou advertência necessária.",
      },
      {
        question: "Estacionar em fila dupla é infração:",
        options: ["Leve", "Média", "Grave", "Gravíssima"],
        correct: 2,
        explanation:
          "CTB Art. 181, X: Estacionar o veículo ao lado de outro veículo (fila dupla) é infração de natureza **Grave** (5 pontos) e sujeita a multa e remoção do veículo.",
      },
      {
        question: "O condutor deve manter distância de segurança:",
        options: [
          "Apenas em rodovias",
          "Apenas à noite",
          "Sempre",
          "Apenas com chuva",
        ],
        correct: 2,
        explanation:
          "CTB Art. 29, II: O condutor deve **sempre** guardar distância de segurança lateral e frontal dos demais veículos e do bordo da pista.",
      },
      {
        question:
          "Transportar crianças menores de 10 anos no banco da frente é:",
        options: [
          "Permitido",
          "Proibido",
          "Permitido com cadeirinha",
          "Permitido apenas em emergências",
        ],
        correct: 1,
        explanation:
          "CTB Art. 64: É **Proibido** transportar crianças com idade inferior a 10 anos no banco dianteiro, salvo exceções regulamentadas pelo CONTRAN (como veículos de apenas banco dianteiro).",
      },
      {
        question: "A placa vermelha octogonal significa:",
        options: [
          "Advertência",
          "Regulamentação de parada obrigatória",
          "Indicação",
          "Serviço",
        ],
        correct: 1,
        explanation:
          "A placa octogonal (oito lados) é a placa **R-1 (Parada Obrigatória)**. Ela faz parte do grupo de **Regulamentação** e exige a parada total do veículo.",
      },
      {
        question: "Qual o prazo para transferência de propriedade de veículo?",
        options: ["15 dias", "30 dias", "60 dias", "90 dias"],
        correct: 1,
        explanation:
          "CTB Art. 123, $\text{§}1^circ$: O prazo para o novo proprietário tomar as providências necessárias à expedição do Certificado de Registro de Veículo (CRV) é de **30 dias** após a data da compra.",
      },
      {
        question:
          "O exame toxicológico é obrigatório para condutores de qual categoria?",
        options: ["A e B", "C, D e E", "Apenas D", "Todas"],
        correct: 1,
        explanation:
          "CTB Art. 148-A: O exame toxicológico é obrigatório para a obtenção e renovação da CNH nas categorias **C, D e E**.",
      },
      {
        question:
          "Usar celular ao volante sem dispositivo viva-voz é infração:",
        options: ["Leve", "Média", "Grave", "Gravíssima"],
        correct: 3,
        explanation:
          "CTB Art. 252, $\text{Parágrafo Único}$: Dirigir o veículo **segurando ou manuseando** o telefone celular é infração de natureza **Gravíssima** (7 pontos).",
      },
      {
        question: "A luz vermelha do semáforo significa:",
        options: ["Atenção", "Pare", "Siga com cuidado", "Reduza velocidade"],
        correct: 1,
        explanation:
          "CTB Art. 89, II: A luz vermelha indica **Parada obrigatória**.",
      },
      {
        question: "O condutor deve acionar o pisca-alerta em qual situação?",
        options: [
          "Ao estacionar",
          "Em situação de emergência",
          "Ao ultrapassar",
          "Ao virar",
        ],
        correct: 1,
        explanation:
          "CTB Art. 40, $\text{Parágrafo Único}$: O pisca-alerta deve ser usado somente em **situação de emergência** (como pane ou acidentes) ou quando a regulamentação da via o determinar.",
      },
      {
        question:
          "Qual a penalidade para dirigir com CNH vencida há mais de 30 dias?",
        options: ["Advertência", "Multa leve", "Multa média", "Multa grave"],
        correct: 3,
        explanation:
          "CTB Art. 162, V: Dirigir com CNH vencida há mais de 30 dias é infração de natureza **Gravíssima** (7 pontos).",
      },
      {
        question: "O extintor de incêndio é obrigatório em:",
        options: [
          "Apenas caminhões",
          "Apenas ônibus",
          "Caminhões e ônibus",
          "Todos os veículos",
        ],
        correct: 2,
        explanation:
          "Conforme normas atuais e resoluções do CONTRAN, extintor é obrigatório em veículos de carga e transporte coletivo como caminhões e ônibus; não é mais obrigatório em automóveis particulares.",
      },
      {
        question: "A ultrapassagem pela direita é permitida:",
        options: [
          "Nunca",
          "Quando o veículo da frente sinalizar conversão à esquerda",
          "Sempre",
          "Apenas em rodovias",
        ],
        correct: 1,
        explanation:
          "CTB Art. 29, IX: A ultrapassagem pela direita é permitida **somente** quando o veículo da frente sinalizar que vai entrar à esquerda, e houver espaço suficiente para a manobra.",
      },
      {
        question: "Qual a cor das placas de advertência?",
        options: ["Vermelha", "Azul", "Amarela", "Verde"],
        correct: 2,
        explanation:
          "As placas de advertência têm a forma de quadrado, com fundo **Amarelo** e orla e símbolos pretos (exceções são as de obras, que são laranjas).",
      },
      {
        question: "O condutor deve reduzir a velocidade ao aproximar-se de:",
        options: [
          "Apenas escolas",
          "Apenas hospitais",
          "Escolas, hospitais e locais com aglomeração",
          "Apenas semáforos",
        ],
        correct: 2,
        explanation:
          "CTB Art. 220, XIII: É infração grave deixar de reduzir a velocidade 'ao aproximar-se de locais sinalizados ou não, onde haja reunião de pessoas, tais como **escolas**, **hospitais**, estações de embarque ou desembarque ou onde haja intensa movimentação de pedestres'.",
      },
      {
        question: "A CNH categoria A permite dirigir:",
        options: ["Automóveis", "Motocicletas", "Caminhões", "Ônibus"],
        correct: 1,
        explanation:
          "CTB Art. 143, I: A categoria A permite conduzir veículos motorizados de duas ou três rodas, com ou sem carro lateral (ex: **Motocicletas**, motonetas).",
      },
      {
        question: "Estacionar em local proibido pela sinalização é infração:",
        options: ["Leve", "Média", "Grave", "Gravíssima"],
        correct: 2,
        explanation:
          "CTB Art. 181, XIX: Estacionar em locais e horários de estacionamento e parada proibidos pela sinalização (**placa R-6a**) é infração de natureza **Grave** (5 pontos) e sujeita a multa e remoção do veículo.",
      },
      {
        question: "O condutor deve usar o cinto de segurança:",
        options: [
          "Apenas em rodovias",
          "Apenas acima de 60 km/h",
          "Sempre",
          "Apenas à noite",
        ],
        correct: 2,
        explanation:
          "CTB Art. 65: O uso do cinto de segurança é obrigatório para todos os ocupantes do veículo, **Sempre**.",
      },
      {
        question: "Qual documento comprova a propriedade do veículo?",
        options: ["CNH", "CRLV", "CRV", "IPVA"],
        correct: 2,
        explanation:
          "CTB Art. 121: O **CRV (Certificado de Registro de Veículo)** é o documento que atesta o registro e, consequentemente, a propriedade. O CRLV comprova o licenciamento anual.",
      },
      {
        question: "A velocidade máxima em vias locais é:",
        options: ["20 km/h", "30 km/h", "40 km/h", "50 km/h"],
        correct: 1,
        explanation:
          "CTB Art. 61, I, 'd': A velocidade máxima padrão para vias locais é de **30 km/h**.",
      },
      {
        question:
          "O condutor deve sinalizar com antecedência ao mudar de faixa:",
        options: [
          "Não precisa",
          "Apenas em rodovias",
          "Sempre",
          "Apenas à noite",
        ],
        correct: 2,
        explanation:
          "CTB Art. 35: O condutor deve indicar com antecedência, por meio de luz indicadora de direção (seta) ou gesto regulamentar de braço, o início de qualquer manobra de deslocamento lateral. Portanto, **Sempre**.",
      },
      {
        question: "Dirigir com faróis queimados é infração:",
        options: ["Leve", "Média", "Grave", "Gravíssima"],
        correct: 1,
        explanation:
          "CTB Art. 230, XIII: Conduzir o veículo com defeito no sistema de iluminação (faróis queimados) é infração de natureza **Média** (4 pontos).",
      },
      {
        question: "A placa azul circular indica:",
        options: [
          "Advertência",
          "Regulamentação obrigatória",
          "Indicação",
          "Proibição",
        ],
        correct: 1,
        explanation:
          "Placas de fundo **Azul** (quadradas ou retangulares) são de **Indicação**, incluindo as de serviços auxiliares (Ex: Posto de Abastecimento, Área de Estacionamento - S-1, S-3). Placas de regulamentação (obrigação/proibição) são brancas e vermelhas. **CORREÇÃO:** A placa circular (como R-24, Sentido de Circulação) é de Regulamentação, mas é branca/vermelha. **Uma placa azul com pictograma é de Indicação.**",
      },
      {
        question:
          "O condutor deve parar o veículo antes da faixa de pedestres quando:",
        options: [
          "Houver pedestre esperando",
          "Houver pedestre atravessando",
          "Sempre",
          "Apenas com sinalização",
        ],
        correct: 1,
        explanation:
          "CTB Art. 214, V: A infração ocorre quando o condutor deixa de dar preferência ao pedestre que **esteja atravessando** a via na faixa a ele destinada.",
      },
      {
        question: "A renovação da CNH exige exame:",
        options: [
          "Apenas teórico",
          "Apenas prático",
          "Médico e psicológico",
          "Toxicológico",
        ],
        correct: 2,
        explanation:
          "CTB Art. 147: A renovação exige exame de aptidão física e mental (**Médico**) e avaliação psicológica (**Psicológico**) para as categorias C, D e E, e se o condutor exercer atividade remunerada (EAR). O exame toxicológico é apenas para C, D e E.",
      },
      {
        question: "Qual a distância mínima para estacionar de uma esquina?",
        options: ["3 metros", "5 metros", "10 metros", "15 metros"],
        correct: 1,
        explanation:
          "CTB Art. 181, I: É proibido estacionar 'a menos de **cinco metros** do alinhamento da via transversal' (da esquina).",
      },
      {
        question: "O condutor deve acender os faróis em túneis:",
        options: [
          "Apenas à noite",
          "Apenas se escuro",
          "Sempre",
          "Não precisa",
        ],
        correct: 2,
        explanation:
          "CTB Art. 40, I, 'c': O condutor deve manter os faróis baixos acesos ao transitar em **túneis** e sob chuva, neblina ou cerração, **Sempre**.",
      },
      {
        question: "A placa triangular amarela indica:",
        options: [
          "Pare",
          " Atenção do motorista",
          "Siga em frente",
          "Proibido",
        ],
        correct: 1,
        explanation:
          "A placa triangular amarela não é de regulamentação, e sim de advertência, usada para chamar a atenção do motorista quanto a perigos próximos na via.",
      },
      {
        question: "Transportar passageiros em compartimento de carga é:",
        options: [
          "Permitido",
          "Proibido",
          "Permitido com autorização",
          "Permitido em emergências",
        ],
        correct: 1,
        explanation:
          "CTB Art. 230, II: Transportar passageiros em compartimento de carga (ex: caçamba de caminhonete) é infração **Gravíssima** e é expressamente **Proibido**, salvo exceções específicas de emergência e transporte agrícola, regulamentadas pelo CONTRAN.",
      },
      {
        question: "O condutor deve manter o veículo:",
        options: [
          "Apenas limpo",
          "Em boas condições de segurança",
          "Apenas com documentos",
          "Apenas com IPVA pago",
        ],
        correct: 1,
        explanation:
          "CTB Art. 104: O condutor é responsável por manter o veículo **em perfeitas condições de segurança** e funcionamento, incluindo a manutenção de equipamentos obrigatórios.",
      },
      {
        question: "A luz verde do semáforo significa:",
        options: ["Acelere", "Prossiga com atenção", "Pare", "Atenção"],
        correct: 1,
        explanation:
          "CTB Art. 89, II: A luz verde permite **prosseguir na marcha** (Siga), mas a condução deve ser **com atenção** para garantir a segurança no cruzamento.",
      },
      {
        question:
          "Qual a penalidade para não dar preferência ao pedestre na faixa?",
        options: [
          "Multa leve",
          "Multa média",
          "Multa grave",
          "Multa gravíssima",
        ],
        correct: 3,
        explanation:
          "CTB Art. 214, V: Deixar de dar preferência de passagem ao pedestre que esteja atravessando a via na faixa é infração de natureza **Gravíssima** (7 pontos).",
      },
      {
        question: "O retrovisor é equipamento:",
        options: [
          "Opcional",
          "Obrigatório",
          "Apenas para caminhões",
          "Apenas para motos",
        ],
        correct: 1,
        explanation:
          "CTB Art. 105, VI: Os espelhos retrovisores são equipamentos **Obrigatórios** de segurança para todos os veículos automotores (Resolução CONTRAN $\text{n}^circ 919/22$).",
      },
      {
        question: "A velocidade deve ser reduzida em curvas:",
        options: [
          "Não precisa",
          "Apenas em curvas fechadas",
          "Sempre",
          "Apenas à noite",
        ],
        correct: 2,
        explanation:
          "CTB Art. 220, X: O condutor deve **Sempre** reduzir a velocidade ao aproximar-se de curvas para manter o controle e a segurança (Art. 29, II - dever de dirigir com atenção e segurança).",
      },
      {
        question:
          "Estacionar em vaga reservada a idosos sem autorização é infração:",
        options: ["Leve", "Média", "Grave", "Gravíssima"],
        correct: 3,
        explanation:
          "CTB Art. 181, XX: Estacionar em vagas reservadas a idosos ou pessoas com deficiência, sem a credencial que comprove tal condição, é infração de natureza **Gravíssima** (7 pontos).",
      },
      {
        question: "O condutor deve respeitar a velocidade máxima:",
        options: [
          "Apenas em rodovias",
          "Apenas com radar",
          "Sempre",
          "Apenas de dia",
        ],
        correct: 2,
        explanation:
          "O Art. 218 do CTB estabelece as penalidades para excesso de velocidade. É dever do condutor **Sempre** respeitar os limites de velocidade da via (Art. 28).",
      },
      {
        question: "A placa vermelha circular com barra indica:",
        options: ["Obrigação", "Proibição", "Advertência", "Indicação"],
        correct: 1,
        explanation:
          "Placas de Regulamentação (R) que são circulares, têm orla vermelha e uma faixa diagonal (barra) também vermelha indicam **Proibição** (Ex: R-6a - Proibido Estacionar; R-10 - Proibido Transitar com Veículos Automotores).",
      },
      {
        question: "O condutor deve portar a CNH:",
        options: [
          "Apenas original",
          "Original ou digital",
          "Apenas cópia",
          "Não precisa",
        ],
        correct: 1,
        explanation:
          "CTB Art. 159, $\text{§}1^circ$: O porte do documento de habilitação é obrigatório, podendo ser a CNH **Original ou a CNH-e (digital)**.",
      },
      {
        question: "Qual a penalidade para avançar o sinal vermelho?",
        options: [
          "Multa leve",
          "Multa média",
          "Multa grave",
          "Multa gravíssima",
        ],
        correct: 3,
        explanation:
          "CTB Art. 208: Avançar o sinal vermelho do semáforo ou o sinal de parada obrigatória é infração de natureza **Gravíssima** (7 pontos).",
      },
    ],
    medio: [
      {
        question:
          "Em uma via de mão dupla sem sinalização, a ultrapassagem deve ser feita:",
        options: [
          "Pela direita sempre",
          "Pela esquerda sempre",
          "Por qualquer lado",
          "Não é permitida",
        ],
        correct: 1,
        explanation:
          "CTB Art. 29, IX: A ultrapassagem de outro veículo em movimento deverá ser feita sempre pela esquerda, exceto quando o veículo a ser ultrapassado estiver sinalizando que irá entrar à esquerda.",
      },
      {
        question:
          "Qual é a cor da placa de trânsito que indica 'Parada Obrigatória'?",
        options: ["Verde", "Amarela", "Vermelha", "Azul"],
        correct: 2,
        explanation:
          "A placa R-1 (PARE) é a única de regulamentação no formato octogonal e de cor vermelha com orla branca e a inscrição 'PARE' em branco.",
      },
      {
        question:
          "O que indica uma placa azul circular com uma seta virada para a esquerda?",
        options: [
          "Dar continuidade",
          "Virar à esquerda",
          "Virar à direita",
          "Parar",
        ],
        correct: 1,
        explanation:
          "Placas de regulamentação com fundo azul e seta (R-24) indicam o sentido de circulação. A seta para a esquerda (R-24a) significa 'Sentido de Circulação OBRIGATÓRIO: Esquerda'.",
      },
      {
        question:
          "Qual a distância mínima que o condutor deve manter do veículo da frente em rodovias?",
        options: [
          "10 metros",
          "2 segundos de distância",
          "50 metros",
          "Não há regra específica",
        ],
        correct: 1,
        explanation:
          "Embora o CTB Art. 29, II mencione apenas 'distância de segurança', a regra de ouro da Direção Defensiva é a 'Regra dos 2 Segundos', que garante tempo de reação suficiente em qualquer velocidade e condição climática.",
      },
      {
        question:
          "Dirigir sob efeito de álcool com concentração igual ou superior a 0,34 mg/L no ar alveolar é:",
        options: [
          "Infração média",
          "Infração grave",
          "Infração gravíssima",
          "Crime de trânsito",
        ],
        correct: 3,
        explanation:
          "CTB Art. 306: A concentração de álcool por litro de ar alveolar igual ou superior a 0,34 mg/L configura crime de trânsito, sujeito à detenção e outras penalidades criminais.",
      },
      {
        question: "O que caracteriza direção defensiva?",
        options: [
          "Dirigir rápido para evitar acidentes",
          "Antecipar situações de perigo",
          "Buzinar constantemente",
          "Usar farol alto sempre",
        ],
        correct: 1,
        explanation:
          "Direção defensiva é o ato de dirigir de modo a evitar acidentes, apesar das ações incorretas de outros condutores ou de condições adversas, o que exige a capacidade de antecipar situações de risco.",
      },
      {
        question:
          "Em caso de acidente com vítimas, qual a primeira providência?",
        options: [
          "Remover o veículo",
          "Sinalizar o local",
          "Acionar socorro especializado",
          "Fotografar o local",
        ],
        correct: 1,
        explanation:
          "A ordem de prioridade no socorro é: 1. Garantir a segurança (Sinalizar o local); 2. Acionar o socorro especializado (SAMU/Bombeiros); 3. Avaliar a vítima. Portanto, a primeira providência imediata na cena é a 'Sinalização do local', para evitar novas colisões.",
      },
      {
        question:
          "Segundo o CTB, qual a penalidade para quem recusar o teste do bafômetro?",
        options: [
          "Advertência",
          "Multa média",
          "Multa gravíssima e suspensão da CNH",
          "Apenas multa",
        ],
        correct: 2,
        explanation:
          "CTB Art. 165-A: Recusar o teste do etilômetro é infração gravíssima com multa multiplicada por dez (R$ 2.934,70 - valor base) e suspensão do direito de dirigir por 12 meses.",
      },
      {
        question:
          "A faixa da esquerda em rodovias de múltiplas faixas é destinada a:",
        options: [
          "Deslocamento normal",
          "Ultrapassagem",
          "Veículos lentos",
          "Caminhões",
        ],
        correct: 1,
        explanation:
          "CTB Art. 29, IV e V: A faixa da esquerda é reservada aos veículos que se deslocam em maior velocidade e, primariamente, para a realização de ultrapassagens.",
      },
      {
        question:
          "Qual o prazo para o condutor recorrer de uma multa após a notificação de autuação?",
        options: ["15 dias", "30 dias", "60 dias", "90 dias"],
        correct: 1,
        explanation:
          "CTB Art. 282: O prazo mínimo para a apresentação de Defesa Prévia e para o recurso contra a penalidade é de 30 dias, contados da data da notificação.",
      },
      {
        question:
          "O condutor que acumular 40 pontos em 12 meses terá a CNH suspensa por:",
        options: ["1 mês", "3 meses", "6 meses a 1 ano", "2 anos"],
        correct: 2,
        explanation:
          "CTB Art. 261, § 1º: A suspensão do direito de dirigir será de 6 (seis) meses a 1 (um) ano, quando o condutor atingir de 20 a 40 pontos em 12 meses, a depender da quantidade de infrações gravíssimas cometidas.",
      },
      {
        question:
          "Em primeiros socorros, qual a sequência correta de avaliação da vítima?",
        options: [
          "Respiração, Circulação, Vias aéreas",
          "Vias aéreas, Respiração, Circulação",
          "Circulação, Vias aéreas, Respiração",
          "Consciência, Pulso, Temperatura",
        ],
        correct: 1,
        explanation:
          "O protocolo de avaliação primária da vítima segue a ordem do ABC (Vias Aéreas/Airway, Respiração/Breathing e Circulação/Circulation), garantindo a prioridade das funções vitais.",
      },
      {
        question:
          "O condutor pode ser multado por dirigir com apenas uma mão no volante?",
        options: [
          "Sim, sempre",
          "Não",
          "Apenas em rodovias",
          "Apenas se causar acidente",
        ],
        correct: 0,
        explanation:
          "CTB Art. 252, V: Dirigir com apenas uma das mãos é infração de natureza média, exceto quando o motorista estiver mudando a marcha, fazendo sinais de braço ou acionando equipamentos/acessórios do veículo.",
      },
      {
        question: "A aquaplanagem ocorre quando:",
        options: [
          "O veículo derrapa em óleo",
          "Os pneus perdem contato com o solo devido à água",
          "O motor superaquece",
          "Os freios falham",
        ],
        correct: 1,
        explanation:
          "Aquaplanagem (ou hidroplanagem) é o fenômeno no qual os pneus perdem a aderência com o piso da estrada devido à camada de água formada na superfície, resultando na perda de controle direcional.",
      },
      {
        question: "Qual a velocidade máxima em vias de trânsito rápido?",
        options: ["60 km/h", "70 km/h", "80 km/h", "90 km/h"],
        correct: 2,
        explanation:
          "CTB Art. 61, I, 'a': A velocidade máxima permitida para as Vias de Trânsito Rápido é de 80 km/h, salvo onde houver sinalização de regulamentação diferente.",
      },
      {
        question:
          "O condutor profissional de categorias C, D ou E deve renovar a CNH no máximo a cada:",
        options: ["3 anos", "5 anos", "10 anos", "15 anos"],
        correct: 1,
        explanation:
          "CTB Art. 147, § 2º (Lei 14.071/2020): Para condutores com idade inferior a 70 anos, a validade máxima do exame de aptidão física e mental (renovação) é de 5 anos.",
      },
      {
        question: "Em caso de acidente sem vítimas, os condutores devem:",
        options: [
          "Aguardar a polícia",
          "Remover os veículos se possível",
          "Deixar tudo como está",
          "Chamar o guincho",
        ],
        correct: 1,
        explanation:
          "CTB Art. 178: Quando não houver vítimas, os condutores devem tomar providências imediatas para remover os veículos do local, se isso for possível, de modo a evitar a obstrução do trânsito.",
      },
      {
        question: "A CNH categoria D permite dirigir:",
        options: [
          "Apenas ônibus",
          "Veículos de passageiros com mais de 8 lugares",
          "Apenas caminhões",
          "Qualquer veículo",
        ],
        correct: 1,
        explanation:
          "CTB Art. 143, IV: Categoria D permite conduzir veículos utilizados no transporte de passageiros, cuja lotação exceda a 8 (oito) lugares, excluído o do motorista.",
      },
      {
        question: "Qual a penalidade para dirigir com a CNH cassada?",
        options: [
          "Multa leve",
          "Multa grave",
          "Multa gravíssima e detenção",
          "Apenas advertência",
        ],
        correct: 2,
        explanation:
          "CTB Art. 162, II: É infração gravíssima (multa triplicada) e pode configurar crime de trânsito (Art. 307) com pena de detenção de seis meses a um ano.",
      },
      {
        question: "O condutor deve acionar a luz de freio ao:",
        options: [
          "Acelerar",
          "Reduzir velocidade ou parar",
          "Virar",
          "Estacionar",
        ],
        correct: 1,
        explanation:
          "A luz de freio é acionada ao se pressionar o pedal de freio, indicando aos demais motoristas a intenção de reduzir a velocidade ou parar o veículo.",
      },
      {
        question: "Em uma rotatória, quem tem preferência?",
        options: [
          "Quem entra",
          "Quem já está circulando",
          "O maior veículo",
          "Não há preferência",
        ],
        correct: 1,
        explanation:
          "CTB Art. 29, III, 'b': Em rotatórias, a preferência de passagem é do veículo que já estiver circulando por ela.",
      },
      {
        question: "A placa de regulamentação R-19 indica:",
        options: [
          "Velocidade mínima",
          "Velocidade máxima",
          "Distância",
          "Peso máximo",
        ],
        correct: 1,
        explanation:
          "A placa R-19 (Velocidade Máxima Permitida) indica a maior velocidade que o veículo pode atingir no local, sendo uma placa de regulamentação.",
      },
      {
        question: "O condutor pode estacionar em frente a uma garagem?",
        options: [
          "Sim",
          "Não",
          "Apenas com autorização",
          "Apenas por 5 minutos",
        ],
        correct: 1,
        explanation:
          "CTB Art. 181, IX: É proibido estacionar onde houver guia de calçada (meio-fio) rebaixada destinada à entrada ou saída de veículos (garagens, por exemplo).",
      },
      {
        question: "Qual a função do ABS (sistema antiblocante de freios)?",
        options: [
          "Aumentar a velocidade",
          "Evitar travamento das rodas na frenagem",
          "Economizar combustível",
          "Melhorar a suspensão",
        ],
        correct: 1,
        explanation:
          "O ABS (Sistema Antiblocante de Frenagem) evita o travamento das rodas durante frenagens bruscas, permitindo que o condutor mantenha o controle direcional do veículo.",
      },
      {
        question: "Em caso de neblina intensa, o condutor deve:",
        options: [
          "Usar farol alto",
          "Usar farol baixo e pisca-alerta",
          "Apagar os faróis",
          "Acelerar para sair rápido",
        ],
        correct: 1,
        explanation:
          "Em neblina ou cerração, deve-se usar o **farol baixo** e reduzir a velocidade. O pisca-alerta deve ser usado apenas para alertar sobre uma parada de emergência ou deslocamento muito lento, e nunca para condução normal em neblina.",
      },
      {
        question: "A CNH categoria E permite dirigir:",
        options: [
          "Apenas carretas",
          "Combinações de veículos com reboque acima de 6 toneladas",
          "Apenas caminhões",
          "Apenas ônibus",
        ],
        correct: 1,
        explanation:
          "CTB Art. 143, V: Categoria E permite conduzir combinação de veículos em que o reboque, semirreboque, trailer ou articulado tenha 6.000 kg ou mais de peso bruto total (PBT).",
      },
      {
        question: "O condutor deve usar o freio motor em:",
        options: ["Subidas", "Descidas longas", "Retas", "Curvas"],
        correct: 1,
        explanation:
          "O freio motor é fundamental em descidas longas e aclives acentuados para auxiliar na redução da velocidade e evitar o superaquecimento e falha dos freios de serviço.",
      },
      {
        question: "Qual a penalidade para trafegar na contramão?",
        options: [
          "Multa média",
          "Multa grave",
          "Multa gravíssima e suspensão da CNH",
          "Apenas advertência",
        ],
        correct: 1,
        explanation:
          "CTB Art. 186, I: Transitar pela contramão de direção em vias de sentido duplo é infração de natureza **grave** (5 pontos e multa). Em via de sentido único é gravíssima (7 pontos e multa) - Art. 186, II.",
      },
      {
        question: "O condutor deve sinalizar com seta ao:",
        options: [
          "Apenas virar",
          "Virar, mudar de faixa e ultrapassar",
          "Apenas ultrapassar",
          "Não precisa sinalizar",
        ],
        correct: 1,
        explanation:
          "CTB Art. 35: O condutor deve sinalizar (seta ou gesto de braço) com antecedência o início de qualquer manobra de mudança de direção, de faixa de circulação ou a realização de ultrapassagem.",
      },
      {
        question: "Em caso de pane elétrica à noite, o condutor deve:",
        options: [
          "Continuar sem luzes",
          "Usar lanterna e sinalizar o veículo",
          "Abandonar o veículo",
          "Ligar o pisca-alerta apenas",
        ],
        correct: 1,
        explanation:
          "Em caso de pane, deve-se parar o veículo na faixa da direita ou acostamento e sinalizar imediatamente (pisca-alerta, triângulo e/ou lanterna portátil) para alertar os demais condutores (CTB Art. 48).",
      },
      {
        question: "A distância de seguimento segura varia conforme:",
        options: [
          "Apenas a velocidade",
          "Velocidade, condições da via e do veículo",
          "Apenas o clima",
          "Apenas o tipo de veículo",
        ],
        correct: 1,
        explanation:
          "A distância de seguimento segura (regra dos 2 segundos) deve ser ajustada à velocidade, às condições climáticas (chuva, neblina) e às condições do próprio veículo (pneus, freios).",
      },
      {
        question: "O condutor pode usar o acostamento para:",
        options: [
          "Ultrapassar",
          "Apenas em emergências",
          "Trafegar normalmente",
          "Estacionar",
        ],
        correct: 1,
        explanation:
          "CTB Art. 29, VII: O acostamento é destinado à parada ou estacionamento de veículos em casos de emergência. Trafegar ou ultrapassar pelo acostamento é infração gravíssima.",
      },
      {
        question: "Qual a penalidade para não usar capacete em motocicleta?",
        options: [
          "Multa leve",
          "Multa média",
          "Multa grave",
          "Multa gravíssima",
        ],
        correct: 3,
        explanation:
          "CTB Art. 244, I: Conduzir motocicleta sem usar capacete de segurança com viseira ou óculos de proteção é infração **gravíssima**, com multa e suspensão do direito de dirigir.",
      },
      {
        question: "O condutor deve reduzir velocidade ao passar por:",
        options: [
          "Apenas escolas",
          "Poças d'água",
          "Apenas hospitais",
          "Apenas semáforos",
        ],
        correct: 1,
        explanation:
          "CTB Art. 43, VII: É dever do condutor reduzir a velocidade ao aproximar-se ou passar por locais onde possa haver ajuntamento de pessoas ou nas proximidades de estabelecimentos de ensino ou hospitais, ou em poças d'água para evitar respingos.",
      },
      {
        question: "A placa A-28 (pista escorregadia) alerta sobre:",
        options: ["Obras", "Baixa aderência da pista", "Curva", "Cruzamento"],
        correct: 1,
        explanation:
          "A placa A-28 é uma placa de advertência que indica que a pista à frente é escorregadia ou pode apresentar baixa aderência, exigindo maior cautela do condutor.",
      },
      {
        question: "O condutor pode ser multado por jogar lixo pela janela?",
        options: [
          "Não",
          "Sim, infração média",
          "Sim, infração grave",
          "Apenas advertência",
        ],
        correct: 1,
        explanation:
          "CTB Art. 172: Atirar ou abandonar na via objetos ou substâncias de dentro do veículo é infração de natureza **média** (4 pontos e multa).",
      },
      {
        question: "A CNH digital tem a mesma validade que:",
        options: [
          "CNH física",
          "Metade da CNH física",
          "Dobro da CNH física",
          "Validade diferente",
        ],
        correct: 0,
        explanation:
          "A CNH-e (Carteira Nacional de Habilitação Eletrônica) possui o mesmo valor legal e a mesma validade da CNH física, sendo aceita em todo o território nacional (Resolução CONTRAN).",
      },
      {
        question:
          "Qual a penalidade para transportar carga saliente sem sinalização?",
        options: [
          "Multa leve",
          "Multa média",
          "Multa grave",
          "Multa gravíssima",
        ],
        correct: 2,
        explanation:
          "CTB Art. 235: Conduzir pessoas, animais ou carga nas partes externas do veículo (salvo nos casos devidamente autorizados) é infração de natureza **grave** (5 pontos e multa), com retenção do veículo para transbordo.",
      },
      {
        question: "O condutor deve manter os faróis acesos durante o dia em:",
        options: ["Rodovias", "Vias urbanas", "Todas as vias", "Apenas túneis"],
        correct: 0,
        explanation:
          "CTB Art. 40, Parágrafo único: O uso de luz baixa é obrigatório em **rodovias de pista simples** fora do perímetro urbano, mesmo durante o dia. Em túneis e em condições de chuva/neblina é obrigatório em qualquer via.",
      },
      {
        question: "Em caso de colisão traseira, geralmente a culpa é de quem:",
        options: ["Estava na frente", "Estava atrás", "Ambos", "Nenhum"],
        correct: 1,
        explanation:
          "A presunção de culpa recai sobre o condutor que estava atrás (Art. 29, II do CTB), pois ele tinha o dever de manter uma distância de segurança (Regra dos 2 Segundos) que lhe permitisse frear a tempo.",
      },
      {
        question: "A placa R-6c (proibido parar e estacionar) significa que:",
        options: [
          "Pode parar mas não estacionar",
          "Não pode parar nem estacionar",
          "Pode estacionar mas não parar",
          "Pode parar por 5 minutos",
        ],
        correct: 1,
        explanation:
          "A placa R-6c, com um 'X' na cor vermelha, proíbe totalmente o ato de parar (imobilização rápida) e de estacionar (imobilização prolongada) o veículo.",
      },
      {
        question: "O condutor deve acionar o limpador de para-brisa quando:",
        options: [
          "Apenas com chuva forte",
          "Com qualquer chuva que reduza visibilidade",
          "Apenas à noite",
          "Não precisa",
        ],
        correct: 1,
        explanation:
          "O limpador de para-brisa deve ser acionado sempre que a precipitação (chuva, neve, granizo) comprometer a visibilidade do condutor.",
      },
      {
        question:
          "Qual a penalidade para estacionar em vaga de deficiente sem autorização?",
        options: [
          "Multa média",
          "Multa grave",
          "Multa gravíssima",
          "Apenas advertência",
        ],
        correct: 2,
        explanation:
          "CTB Art. 181, XX: Estacionar em vagas reservadas para pessoas com deficiência sem credencial que comprove a condição é infração **gravíssima** (7 pontos), com multa e remoção do veículo.",
      },
      {
        question: "O condutor pode usar farol de neblina em:",
        options: [
          "Qualquer situação",
          "Apenas com neblina ou chuva intensa",
          "Apenas à noite",
          "Nunca",
        ],
        correct: 1,
        explanation:
          "O farol de neblina (ou cerração) é um item auxiliar e deve ser usado apenas nas condições que dão seu nome (neblina, cerração) e em chuva forte, para melhorar a visibilidade do veículo e da pista.",
      },
      {
        question: "Em caso de pneu furado em rodovia, o condutor deve:",
        options: [
          "Parar imediatamente",
          "Seguir até o acostamento com pisca-alerta",
          "Continuar até o posto",
          "Parar na faixa",
        ],
        correct: 1,
        explanation:
          "O procedimento correto é reduzir a velocidade gradativamente, ligar o pisca-alerta e dirigir o veículo com segurança para o acostamento ou local mais seguro para a troca.",
      },
      {
        question: "A placa A-32b indica:",
        options: ["Escola", "Passagem de pedestres", "Ciclovia", "Hospital"],
        correct: 1,
        explanation:
          "A placa A-32b (Travessia sinalizada de pedestres) é uma placa de advertência que alerta o condutor sobre a existência de uma travessia de pedestres com sinalização (faixa) à frente.",
      },
      {
        question: "O condutor deve verificar os freios:",
        options: [
          "Apenas quando apresentar problema",
          "Regularmente",
          "Apenas na revisão",
          "Não precisa",
        ],
        correct: 1,
        explanation:
          "A manutenção preventiva, incluindo a verificação dos freios, deve ser feita **regularmente** (pelo menos a cada 10.000 km) para garantir a segurança e o bom estado do veículo.",
      },
      {
        question: "Qual a penalidade para fazer conversão em local proibido?",
        options: [
          "Multa leve",
          "Multa média",
          "Multa grave",
          "Multa gravíssima",
        ],
        correct: 2,
        explanation:
          "CTB Art. 207: Executar operação de conversão à direita ou à esquerda em locais proibidos pela sinalização (placas R-4a ou R-4b) é infração de natureza **grave** (5 pontos e multa).",
      },
      {
        question: "O condutor deve usar o cinto de três pontos:",
        options: [
          "Apenas em rodovias",
          "Sempre que disponível",
          "Apenas acima de 80 km/h",
          "Apenas à noite",
        ],
        correct: 1,
        explanation:
          "CTB Art. 65: É obrigatório o uso do cinto de segurança por todos os ocupantes do veículo em todas as vias do território nacional. Ele deve ser usado **sempre que disponível** e em condições de uso.",
      },
      {
        question: "Em caso de veículo quebrado na pista, deve-se:",
        options: [
          "Deixar como está",
          "Sinalizar com triângulo e pisca-alerta",
          "Apenas ligar o pisca-alerta",
          "Abandonar o veículo",
        ],
        correct: 1,
        explanation:
          "CTB Art. 46: Em caso de emergência ou pane, o condutor deve usar o **pisca-alerta** e, principalmente, sinalizar a área com o **triângulo de segurança** à distância regulamentar.",
      },
      {
        question: "O que indica a faixa amarela contínua?",
        options: [
          "Proibido estacionar",
          "Proibido ultrapassar — fluxos opostos",
          "Ciclovia exclusiva",
          "Área escolar",
        ],
        correct: 1,
        image: "/public/continua-amarela.png",
        explanation:
          "A faixa amarela contínua separa fluxos de sentidos opostos e indica proibição de ultrapassagem. É uma linha de divisão de pista.",
      },
      {
        question:
          "Quando há uma faixa contínua amarela ao lado de uma seccionada amarela, qual condutor pode ultrapassar?",
        options: [
          "Apenas quem está do lado da faixa contínua (A)",
          "Apenas quem está do lado da faixa seccionada (B)",
          "Ambos podem ultrapassar (A, B)",
          "Nenhum pode ultrapassar",
        ],
        correct: 1,
        image: "/public/continua-seccionada-amarela.png",
        explanation:
          "Quando há uma faixa contínua e outra seccionada lado a lado, só pode ultrapassar o condutor que estiver do lado da faixa seccionada.",
      },
    ],
    dificil: [
      {
        question: "A faixa de bordo contínua branca indica:",
        options: [
          "Limite da pista de rolamento",
          "Divisão de fluxos opostos",
          "Área exclusiva de ultrapassagem",
          "Zona de ultrapassagem permitida",
        ],
        correct: 0,
        image: "/public/bordo-continua-branca.png",
        explanation:
          "A faixa de bordo contínua branca indica o limite lateral da pista de rolamento, devendo ser respeitada pelos veículos.",
      },
      {
        question:
          "Qual o significado de uma faixa de pedestres (zebrinha) com linhas brancas paralelas?",
        options: [
          "Indica ponto de travessia de pedestres",
          "Proíbe estacionamento próximo",
          "Indica travessia exclusiva para ciclistas",
          "Delimita área escolar",
        ],
        correct: 0,
        image: "/public/faixa-de-pedestres-zebrada.png",
        explanation:
          "A faixa de pedestres indica o local destinado à travessia segura de pedestres. O condutor deve parar quando houver pessoas atravessando.",
      },
      {
        question: "O que representa a linha dupla contínua amarela?",
        options: [
          "Ultrapassagem permitida nos dois sentidos",
          "Ultrapassagem proibida nos dois sentidos",
          "Separação de fluxos no mesmo sentido",
          "Faixa exclusiva para veículos lentos",
        ],
        correct: 1,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/3e/Linha_dupla_continua_amarela_Brasil.svg",
        explanation:
          "A linha dupla contínua amarela indica proibição de ultrapassagem nos dois sentidos. É usada em trechos de alto risco ou visibilidade reduzida.",
      },

      {
        question:
          "Segundo o CTB, qual a penalidade para quem disputar corrida (racha)?",
        options: [
          "Multa e 5 pontos",
          "Multa multiplicada por 10, suspensão da CNH e apreensão do veículo",
          "Apenas advertência",
          "Multa e 7 pontos",
        ],
        correct: 1,
        explanation:
          "CTB Art. 173: Participar de racha é infração gravíssima com multa (10x), suspensão e apreensão do veículo.",
      },
      {
        question: "Ao se aproximar de uma conversão, o condutor deve:",
        options: [
          "Acelerar",
          "Manter velocidade",
          "Reduzir e sinalizar com antecedência",
          "Usar buzina",
        ],
        correct: 2,
        image: "image5.jpg",
        explanation:
          "Segundo o CTB, o condutor deve sinalizar com antecedência e reduzir a velocidade ao realizar conversões (Art. 38).",
      },
      {
        question:
          "Quando o semáforo está com luz amarela piscando, o condutor deve:",
        options: [
          "Dar continuidade",
          "Parar",
          "Reduzir a velocidade e seguir com atenção",
          "Aumentar velocidade",
        ],
        correct: 2,
        image: "image6.jpg",
        explanation:
          "CTB Art. 44: a luz amarela intermitente indica atenção — o condutor deve reduzir a velocidade e prosseguir com cuidado.",
      },
      {
        question:
          "Em uma via com três faixas no mesmo sentido, qual faixa deve ser usada para deslocamento normal?",
        options: ["A da esquerda", "A do meio", "A da direita", "Qualquer uma"],
        correct: 2,
        explanation:
          "CTB Art. 29, §1º: A faixa da direita é destinada ao deslocamento normal.",
      },
      {
        question:
          "Qual o prazo para o condutor recorrer à JARI após indeferimento da defesa prévia?",
        options: ["15 dias", "30 dias", "60 dias", "90 dias"],
        correct: 1,
        explanation:
          "CTB Art. 285: O prazo para recurso à JARI é de 30 dias após o indeferimento da defesa.",
      },
      {
        question: "O que é aquaplanagem e como evitá-la?",
        options: [
          "Derrapagem em óleo; frear bruscamente",
          "Perda de aderência em água; reduzir velocidade e verificar pneus",
          "Superaquecimento do motor; desligar o ar",
          "Falha nos freios; usar freio de mão",
        ],
        correct: 1,
        explanation:
          "Aquaplanagem é perda de contato dos pneus com o solo devido à água. Previne-se com velocidade adequada e pneus em bom estado.",
      },
      {
        question:
          "Em primeiros socorros, qual a sequência correta de avaliação da vítima segundo o protocolo ABC?",
        options: [
          "Respiração, Circulação, Vias aéreas",
          "Vias aéreas (Airway), Respiração (Breathing), Circulação (Circulation)",
          "Circulação, Vias aéreas, Respiração",
          "Consciência, Pulso, Temperatura",
        ],
        correct: 1,
        explanation:
          "O protocolo ABC (Airway-Vias aéreas, Breathing-Respiração, Circulation-Circulação) é o correto.",
      },
      {
        question:
          "Segundo o CTB Art. 306, qual a pena para quem conduz veículo com capacidade psicomotora alterada por álcool?",
        options: [
          "Multa apenas",
          "Detenção de 6 meses a 3 anos, suspensão da CNH e multa",
          "Advertência",
          "Multa e 7 pontos",
        ],
        correct: 1,
        explanation:
          "CTB Art. 306: Crime de trânsito com pena de detenção de 6 meses a 3 anos, suspensão e multa.",
      },
      {
        question: "Qual a diferença entre parar e estacionar segundo o CTB?",
        options: [
          "Não há diferença",
          "Parar é imobilização até 5 minutos com condutor; estacionar é acima de 5 minutos ou sem condutor",
          "Parar é com motor ligado; estacionar é com motor desligado",
          "Parar é em qualquer lugar; estacionar é em vaga",
        ],
        correct: 1,
        explanation:
          "CTB Anexo I: Parar é imobilização até 5 minutos com condutor; estacionar é acima de 5 minutos ou sem condutor.",
      },
      {
        question:
          "Em caso de acidente com vítima inconsciente, qual a primeira ação do socorrista?",
        options: [
          "Dar água",
          "Verificar responsividade e chamar ajuda",
          "Movimentar a vítima",
          "Aplicar RCP imediatamente",
        ],
        correct: 1,
        explanation:
          "Primeiro verifica-se a responsividade (chamar e tocar) e aciona-se ajuda especializada (192).",
      },
      {
        question:
          "Segundo o CTB Art. 165, qual a concentração de álcool que caracteriza infração administrativa?",
        options: [
          "Qualquer concentração",
          "0,05 mg/L ou superior",
          "0,34 mg/L ou superior",
          "1,0 mg/L ou superior",
        ],
        correct: 0,
        explanation:
          "CTB Art. 165: Qualquer concentração de álcool caracteriza infração administrativa gravíssima.",
      },
      {
        question: "O que caracteriza a direção defensiva preventiva?",
        options: [
          "Reagir após o perigo",
          "Antecipar situações de risco e agir preventivamente",
          "Dirigir devagar sempre",
          "Buzinar constantemente",
        ],
        correct: 1,
        explanation:
          "Direção defensiva preventiva é antecipar e prevenir situações de risco antes que ocorram.",
      },
      {
        question:
          "Qual a penalidade para quem deixa de prestar socorro à vítima de acidente de trânsito?",
        options: [
          "Multa gravíssima",
          "Detenção de 6 meses a 1 ano e suspensão da CNH",
          "Apenas multa",
          "Advertência",
        ],
        correct: 1,
        explanation:
          "CTB Art. 304: Deixar de prestar socorro é crime com pena de detenção de 6 meses a 1 ano.",
      },
      {
        question:
          "Em uma via com velocidade máxima de 60 km/h, a partir de quantos km/h a infração é considerada gravíssima?",
        options: ["61 km/h", "70 km/h", "80 km/h", "81 km/h"],
        correct: 3,
        explanation:
          "CTB Art. 218: Exceder em mais de 50% (acima de 90 km/h) é infração gravíssima com suspensão da CNH.",
      },
      {
        question:
          "Qual o prazo de validade da CNH para condutores entre 50 e 70 anos?",
        options: ["3 anos", "5 anos", "10 anos", "15 anos"],
        correct: 1,
        explanation:
          "CTB Art. 147: Para condutores entre 50 e 70 anos, a validade é de 5 anos.",
      },
      {
        question: "O que significa a sigla DPVAT?",
        options: [
          "Departamento de Polícia Viária de Trânsito",
          "Danos Pessoais Causados por Veículos Automotores de Via Terrestre",
          "Departamento de Prevenção de Acidentes de Trânsito",
          "Danos Patrimoniais de Veículos Automotores Terrestres",
        ],
        correct: 1,
        explanation:
          "DPVAT é o seguro obrigatório para Danos Pessoais Causados por Veículos Automotores de Via Terrestre.",
      },
      {
        question:
          "Segundo o CTB, qual a distância mínima para estacionar de uma entrada de garagem?",
        options: ["1 metro", "3 metros", "5 metros", "É proibido estacionar"],
        correct: 3,
        explanation:
          "CTB Art. 181, III: É proibido estacionar em frente a entradas de garagens.",
      },
      {
        question:
          "Em caso de hemorragia arterial grave, qual a conduta correta?",
        options: [
          "Aplicar torniquete imediatamente",
          "Fazer compressão direta no ferimento",
          "Lavar com água",
          "Aplicar gelo",
        ],
        correct: 1,
        explanation:
          "A primeira conduta é fazer compressão direta no ferimento. Torniquete é último recurso.",
      },
      {
        question:
          "Qual a função do sistema ESC (Controle Eletrônico de Estabilidade)?",
        options: [
          "Economizar combustível",
          "Evitar capotamento e derrapagem através de frenagem individual das rodas",
          "Aumentar velocidade",
          "Melhorar conforto",
        ],
        correct: 1,
        explanation:
          "O ESC detecta perda de aderência e aplica freios individualmente para manter estabilidade.",
      },
      {
        question:
          "Segundo o CTB Art. 244, qual a penalidade para conduzir motocicleta sem capacete?",
        options: [
          "Multa grave e 5 pontos",
          "Multa gravíssima, 7 pontos e retenção do veículo",
          "Apenas advertência",
          "Multa média",
        ],
        correct: 1,
        explanation:
          "CTB Art. 244: Conduzir moto sem capacete é infração gravíssima com 7 pontos e retenção do veículo.",
      },
      {
        question:
          "O que caracteriza a ultrapassagem proibida segundo o CTB Art. 203?",
        options: [
          "Apenas pela direita",
          "Pela contramão em locais proibidos",
          "Apenas à noite",
          "Acima de 80 km/h",
        ],
        correct: 1,
        explanation:
          "CTB Art. 203: Ultrapassar pela contramão em locais proibidos é infração gravíssima com suspensão.",
      },
      {
        question:
          "Qual o tempo mínimo de RCP (Reanimação Cardiopulmonar) antes de verificar sinais vitais?",
        options: ["30 segundos", "1 minuto", "2 minutos", "5 minutos"],
        correct: 2,
        explanation:
          "Segundo protocolos de primeiros socorros, deve-se fazer RCP por 2 minutos antes de verificar sinais.",
      },
      {
        question:
          "Segundo o CTB, qual a penalidade para quem adultera placa de veículo?",
        options: [
          "Multa gravíssima",
          "Detenção de 6 meses a 1 ano e suspensão da CNH",
          "Apenas multa",
          "Advertência",
        ],
        correct: 1,
        explanation:
          "CTB Art. 311: Adulterar placa é crime com pena de detenção de 6 meses a 1 ano.",
      },
      {
        question:
          "Em uma via com três faixas, qual a velocidade máxima permitida na faixa da esquerda?",
        options: [
          "Não há limite específico",
          "Mesma da via, mas destinada à ultrapassagem",
          "20% acima do limite",
          "Livre",
        ],
        correct: 1,
        explanation:
          "A faixa da esquerda tem o mesmo limite de velocidade, mas é destinada à ultrapassagem.",
      },
      {
        question:
          "Qual a profundidade mínima do sulco dos pneus segundo o CTB?",
        options: ["1,0 mm", "1,6 mm", "2,0 mm", "3,0 mm"],
        correct: 1,
        explanation:
          "CTB Art. 105: A profundidade mínima dos sulcos dos pneus deve ser de 1,6 mm.",
      },
      {
        question: "O que significa a sigla RENAINF?",
        options: [
          "Registro Nacional de Infrações",
          "Registro Nacional de Acidentes e Infrações",
          "Rede Nacional de Informações",
          "Registro de Notificações de Infrações",
        ],
        correct: 0,
        explanation: "RENAINF é o Registro Nacional de Infrações de Trânsito.",
      },
      {
        question:
          "Segundo o CTB, qual o prazo para o proprietário transferir o veículo após a venda?",
        options: ["15 dias", "30 dias", "60 dias", "90 dias"],
        correct: 1,
        explanation:
          "CTB Art. 123: O prazo para transferência é de 30 dias após a venda.",
      },
      {
        question: "Em caso de fratura exposta, qual a conduta correta?",
        options: [
          "Tentar colocar o osso no lugar",
          "Cobrir com pano limpo e imobilizar sem movimentar",
          "Lavar com água",
          "Aplicar pomada",
        ],
        correct: 1,
        explanation:
          "Em fratura exposta, deve-se cobrir com pano limpo, imobilizar e aguardar socorro especializado.",
      },
      {
        question:
          "Qual a penalidade para conduzir veículo com equipamento de som em volume alto?",
        options: [
          "Multa leve",
          "Multa média",
          "Multa grave",
          "Multa gravíssima",
        ],
        correct: 1,
        explanation:
          "CTB Art. 228: Usar buzina ou equipamento de som em volume alto é infração média.",
      },
      {
        question:
          "O que caracteriza a embriaguez ao volante como crime segundo o CTB Art. 306?",
        options: [
          "Qualquer concentração de álcool",
          "Concentração igual ou superior a 0,34 mg/L no ar alveolar",
          "Apenas acima de 1,0 mg/L",
          "Apenas se causar acidente",
        ],
        correct: 1,
        explanation:
          "CTB Art. 306: Crime caracteriza-se com concentração igual ou superior a 0,34 mg/L.",
      },
      {
        question: "Qual a distância mínima para estacionar de um hidrante?",
        options: ["5 metros", "10 metros", "15 metros", "20 metros"],
        correct: 2,
        explanation:
          "CTB Art. 181: É proibido estacionar a menos de 15 metros de hidrante.",
      },
      {
        question:
          "Em caso de parada cardiorrespiratória, qual a proporção correta de compressões e ventilações?",
        options: ["15:2", "30:2", "20:2", "40:2"],
        correct: 1,
        explanation:
          "A proporção recomendada é 30 compressões para 2 ventilações.",
      },
      {
        question:
          "Segundo o CTB, qual a penalidade para quem transporta crianças sem dispositivo de retenção?",
        options: [
          "Multa média",
          "Multa grave",
          "Multa gravíssima",
          "Apenas advertência",
        ],
        correct: 2,
        explanation:
          "CTB Art. 168: Transportar crianças sem dispositivo adequado é infração gravíssima.",
      },
      {
        question: "O que significa a sigla CONTRAN?",
        options: [
          "Conselho Nacional de Trânsito",
          "Controle Nacional de Trânsito",
          "Conselho de Transporte Nacional",
          "Controle de Transporte Nacional",
        ],
        correct: 0,
        explanation:
          "CONTRAN é o Conselho Nacional de Trânsito, órgão máximo normativo do SNT.",
      },
      {
        question:
          "Qual a penalidade para conduzir veículo com CNH de categoria diferente?",
        options: [
          "Multa leve",
          "Multa gravíssima e retenção do veículo",
          "Apenas advertência",
          "Multa média",
        ],
        correct: 1,
        explanation:
          "CTB Art. 162: Conduzir veículo com CNH de categoria diferente é infração gravíssima.",
      },
      {
        question: "Em caso de queimadura grave, qual a conduta correta?",
        options: [
          "Aplicar pomada",
          "Resfriar com água corrente e cobrir com pano limpo",
          "Estourar bolhas",
          "Aplicar gelo direto",
        ],
        correct: 1,
        explanation:
          "Deve-se resfriar com água corrente por 10-20 minutos e cobrir com pano limpo.",
      },
      {
        question:
          "Segundo o CTB, qual o prazo para o condutor notificado apresentar o condutor infrator?",
        options: ["15 dias", "30 dias", "60 dias", "90 dias"],
        correct: 0,
        explanation:
          "CTB Art. 257: O prazo para indicar o condutor infrator é de 15 dias.",
      },
      {
        question: "Qual a função do sistema ISOFIX em veículos?",
        options: [
          "Controle de estabilidade",
          "Ancoragem de cadeirinhas infantis",
          "Sistema de freios",
          "Controle de tração",
        ],
        correct: 1,
        explanation:
          "ISOFIX é o sistema internacional de ancoragem de cadeirinhas infantis.",
      },
      {
        question:
          "Segundo o CTB Art. 175, qual a penalidade para quem faz manobra perigosa?",
        options: [
          "Multa média",
          "Multa grave",
          "Multa gravíssima e suspensão da CNH",
          "Apenas advertência",
        ],
        correct: 2,
        explanation:
          "CTB Art. 175: Manobra perigosa (cavalo de pau, etc.) é infração gravíssima com suspensão.",
      },
      {
        question:
          "Em caso de vítima com suspeita de lesão na coluna, qual a conduta?",
        options: [
          "Movimentar para local seguro",
          "Não movimentar e aguardar socorro especializado",
          "Sentar a vítima",
          "Virar a vítima de lado",
        ],
        correct: 1,
        explanation:
          "Em suspeita de lesão na coluna, não se deve movimentar a vítima, apenas aguardar socorro.",
      },
      {
        question: "Qual a penalidade para conduzir veículo com pneus carecas?",
        options: [
          "Multa leve",
          "Multa média",
          "Multa grave e retenção do veículo",
          "Apenas advertência",
        ],
        correct: 2,
        explanation:
          "CTB Art. 169: Conduzir veículo com pneus carecas é infração grave com retenção do veículo.",
      },
      {
        question: "Segundo o CTB, qual a velocidade máxima em vias coletoras?",
        options: ["30 km/h", "40 km/h", "50 km/h", "60 km/h"],
        correct: 1,
        explanation:
          "CTB Art. 61: A velocidade máxima em vias coletoras é de 40 km/h.",
      },
      {
        question: "O que caracteriza a direção defensiva corretiva?",
        options: [
          "Prevenir antes do perigo",
          "Reagir adequadamente quando o perigo já está presente",
          "Dirigir devagar",
          "Buzinar sempre",
        ],
        correct: 1,
        explanation:
          "Direção defensiva corretiva é reagir adequadamente quando o perigo já está presente.",
      },
      {
        question:
          "Qual a penalidade para deixar de dar preferência ao pedestre na faixa?",
        options: [
          "Multa média",
          "Multa grave",
          "Multa gravíssima e suspensão da CNH",
          "Apenas advertência",
        ],
        correct: 2,
        explanation:
          "CTB Art. 214: Não dar preferência ao pedestre é infração gravíssima com suspensão.",
      },
      {
        question: "Em caso de choque elétrico em vítima, qual a primeira ação?",
        options: [
          "Tocar a vítima",
          "Desligar a fonte de energia antes de tocar",
          "Jogar água",
          "Puxar a vítima",
        ],
        correct: 1,
        explanation:
          "Antes de tocar a vítima, deve-se desligar a fonte de energia para evitar choque no socorrista.",
      },
      {
        question:
          "Segundo o CTB, qual o prazo de suspensão da CNH para quem acumula 40 pontos pela primeira vez?",
        options: [
          "1 a 3 meses",
          "3 a 6 meses",
          "6 meses a 1 ano",
          "1 a 2 anos",
        ],
        correct: 2,
        explanation:
          "CTB Art. 261: A suspensão varia de 6 meses a 1 ano na primeira vez.",
      },
      {
        question:
          "Qual a profundidade mínima de compressão torácica em RCP para adultos?",
        options: ["3 cm", "5 cm", "7 cm", "10 cm"],
        correct: 1,
        explanation:
          "A profundidade recomendada para compressões em adultos é de 5 a 6 cm.",
      },
      {
        question:
          "Segundo o CTB Art. 308, qual a pena para quem participa de racha resultando em morte?",
        options: [
          "Detenção de 6 meses a 1 ano",
          "Reclusão de 2 a 4 anos",
          "Reclusão de 5 a 10 anos",
          "Apenas multa",
        ],
        correct: 2,
        explanation:
          "CTB Art. 308: Racha com resultado morte tem pena de reclusão de 5 a 10 anos.",
      },
      {
        question:
          "Qual a penalidade para conduzir veículo com escapamento adulterado?",
        options: [
          "Multa leve",
          "Multa média",
          "Multa grave e retenção do veículo",
          "Apenas advertência",
        ],
        correct: 2,
        explanation:
          "CTB Art. 230: Conduzir veículo com escapamento adulterado é infração grave com retenção.",
      },
      {
        question:
          "Em caso de vítima inconsciente respirando, qual a posição adequada?",
        options: [
          "Posição supina",
          "Posição lateral de segurança",
          "Sentada",
          "De bruços",
        ],
        correct: 1,
        explanation:
          "A posição lateral de segurança evita asfixia por vômito ou queda da língua.",
      },
    ],
    dificil: [
      {
        question:
          "Segundo o CTB, qual a penalidade para quem disputa corrida (racha)?",
        options: [
          "Multa e 5 pontos",
          "Multa multiplicada por 10, suspensão da CNH e apreensão do veículo",
          "Apenas advertência",
          "Multa e 7 pontos",
        ],
        correct: 1,
        explanation:
          "CTB Art. 173: Participar de racha é infração gravíssima com multa (10x), suspensão do direito de dirigir e apreensão do veículo.",
      },
      {
        question:
          "Em uma via com três faixas no mesmo sentido, qual faixa deve ser usada para deslocamento normal?",
        options: ["A da esquerda", "A do meio", "A da direita", "Qualquer uma"],
        correct: 2,
        explanation:
          "CTB Art. 29, §1º: A faixa da direita é destinada ao deslocamento normal e aos veículos mais lentos.",
      },
      {
        question:
          "Qual o prazo para o condutor recorrer à JARI após indeferimento da defesa prévia?",
        options: ["15 dias", "30 dias", "60 dias", "90 dias"],
        correct: 1,
        explanation:
          "CTB Art. 285: O prazo para recurso à JARI (Junta Administrativa de Recursos de Infrações) é de 30 dias, contados da notificação da penalidade.",
      },
      {
        question: "O que é aquaplanagem e como evitá-la?",
        options: [
          "Derrapagem em óleo; frear bruscamente",
          "Perda de aderência em água; reduzir velocidade e verificar pneus",
          "Superaquecimento do motor; desligar o ar",
          "Falha nos freios; usar freio de mão",
        ],
        correct: 1,
        explanation:
          "Aquaplanagem é perda de contato dos pneus com o solo devido à água. Previne-se com velocidade adequada e pneus em bom estado, evitando frenagens bruscas.",
      },
      {
        question:
          "Em primeiros socorros, qual a sequência correta de avaliação da vítima segundo o protocolo ABC?",
        options: [
          "Respiração, Circulação, Vias aéreas",
          "Vias aéreas (Airway), Respiração (Breathing), Circulação (Circulation)",
          "Circulação, Vias aéreas, Respiração",
          "Consciência, Pulso, Temperatura",
        ],
        correct: 1,
        explanation:
          "O protocolo ABC (Airway-Vias aéreas, Breathing-Respiração, Circulation-Circulação) é o correto para a avaliação primária da vítima.",
      },
      {
        question:
          "Segundo o CTB Art. 306, qual a pena para quem conduz veículo com capacidade psicomotora alterada por álcool?",
        options: [
          "Multa apenas",
          "Detenção de 6 meses a 3 anos, suspensão da CNH e multa",
          "Advertência",
          "Multa e 7 pontos",
        ],
        correct: 1,
        explanation:
          "CTB Art. 306: Configura crime de trânsito com pena de detenção de 6 meses a 3 anos, suspensão do direito de dirigir e multa.",
      },
      {
        question: "Qual a diferença entre parar e estacionar segundo o CTB?",
        options: [
          "Não há diferença",
          "Parar é imobilização até 5 minutos com condutor; estacionar é acima de 5 minutos ou sem condutor",
          "Parar é com motor ligado; estacionar é com motor desligado",
          "Parar é em qualquer lugar; estacionar é em vaga",
        ],
        correct: 1,
        explanation:
          "CTB Anexo I: Parada é a imobilização do veículo com a finalidade e pelo tempo estritamente necessário para embarque ou desembarque de passageiros; Estacionamento é a imobilização por tempo superior.",
      },
      {
        question:
          "Em caso de acidente com vítima inconsciente, qual a primeira ação do socorrista?",
        options: [
          "Dar água",
          "Verificar responsividade e chamar ajuda",
          "Movimentar a vítima",
          "Aplicar RCP imediatamente",
        ],
        correct: 1,
        explanation:
          "Primeiro verifica-se a responsividade (chamar e tocar) e aciona-se ajuda especializada (192, 193), garantindo a segurança do local.",
      },
      {
        question:
          "Segundo o CTB Art. 165, qual a concentração de álcool que caracteriza infração administrativa?",
        options: [
          "Qualquer concentração",
          "0,05 mg/L ou superior",
          "0,34 mg/L ou superior",
          "1,0 mg/L ou superior",
        ],
        correct: 0,
        explanation:
          "CTB Art. 165: Conduzir sob a influência de álcool é infração gravíssima. A caracterização da influência é feita por qualquer concentração de álcool no sangue ou ar alveolar (sujeito à margem de tolerância).",
      },
      {
        question: "O que caracteriza a direção defensiva preventiva?",
        options: [
          "Reagir após o perigo",
          "Antecipar situações de risco e agir preventivamente",
          "Dirigir devagar sempre",
          "Buzinar constantemente",
        ],
        correct: 1,
        explanation:
          "Direção defensiva preventiva é o ato de antecipar o perigo, agindo para evitar que ele se concretize, exigindo previsão e conhecimento.",
      },
      {
        question:
          "Qual a penalidade para quem deixa de prestar socorro à vítima de acidente de trânsito?",
        options: [
          "Multa gravíssima",
          "Detenção de 6 meses a 1 ano e suspensão da CNH",
          "Apenas multa",
          "Advertência",
        ],
        correct: 1,
        explanation:
          "CTB Art. 304: Deixar de prestar socorro é crime com pena de detenção de 6 meses a 1 ano, além da suspensão ou proibição de se obter a permissão ou a habilitação para dirigir.",
      },
      {
        question:
          "Em uma via com velocidade máxima de 60 km/h, a partir de quantos km/h a infração é considerada gravíssima?",
        options: ["61 km/h", "70 km/h", "80 km/h", "81 km/h"],
        correct: 3,
        explanation:
          "CTB Art. 218: A infração é gravíssima ao exceder a velocidade em mais de 50%. Em uma via de 60 km/h, isso ocorreria a partir de 91 km/h. (81 km/h é incorreto para gravíssima).",
      },
      {
        question:
          "Qual o prazo de validade da CNH para condutores entre 50 e 70 anos?",
        options: ["3 anos", "5 anos", "10 anos", "15 anos"],
        correct: 1,
        explanation:
          "CTB Art. 147: Para condutores com idade igual ou superior a 50 anos e inferior a 70 anos, a validade máxima do exame de aptidão física e mental (renovação) é de 5 anos.",
      },
      {
        question: "O que significa a sigla DPVAT?",
        options: [
          "Departamento de Polícia Viária de Trânsito",
          "Danos Pessoais Causados por Veículos Automotores de Via Terrestre",
          "Departamento de Prevenção de Acidentes de Trânsito",
          "Danos Patrimoniais de Veículos Automotores Terrestres",
        ],
        correct: 1,
        explanation:
          "DPVAT é o seguro obrigatório para Danos Pessoais Causados por Veículos Automotores de Via Terrestre, que indeniza vítimas de acidentes de trânsito.",
      },
      {
        question:
          "Segundo o CTB, qual a distância mínima para estacionar de uma entrada de garagem?",
        options: ["1 metro", "3 metros", "5 metros", "É proibido estacionar"],
        correct: 3,
        explanation:
          "CTB Art. 181, IX: É proibido estacionar em frente a guias de calçada (meio-fio) rebaixadas, destinadas à entrada ou saída de veículos (garagens).",
      },
      {
        question:
          "Em caso de hemorragia arterial grave, qual a conduta correta?",
        options: [
          "Aplicar torniquete imediatamente",
          "Fazer compressão direta no ferimento",
          "Lavar com água",
          "Aplicar gelo",
        ],
        correct: 1,
        explanation:
          "A primeira e mais essencial conduta no controle de hemorragias graves é a compressão direta e firme sobre o ferimento. O torniquete é uma medida de último recurso.",
      },
      {
        question:
          "Qual a função do sistema ESC (Controle Eletrônico de Estabilidade)?",
        options: [
          "Economizar combustível",
          "Evitar capotamento e derrapagem através de frenagem individual das rodas",
          "Aumentar velocidade",
          "Melhorar conforto",
        ],
        correct: 1,
        explanation:
          "O ESC (Electronic Stability Control) é um sistema de segurança ativa que monitora a direção e, se detectar perda de controle (derrapagem ou capotamento), aplica freios a rodas individuais para ajudar a manter a estabilidade.",
      },
      {
        question:
          "Segundo o CTB Art. 244, qual a penalidade para conduzir motocicleta sem capacete?",
        options: [
          "Multa grave e 5 pontos",
          "Multa gravíssima, 7 pontos e retenção do veículo",
          "Apenas advertência",
          "Multa média",
        ],
        correct: 1,
        explanation:
          "CTB Art. 244, I: Conduzir motocicleta sem capacete é infração gravíssima, com multa e suspensão do direito de dirigir. A penalidade inclui a retenção do veículo.",
      },
      {
        question:
          "O que caracteriza a ultrapassagem proibida segundo o CTB Art. 203?",
        options: [
          "Apenas pela direita",
          "Pela contramão em locais proibidos",
          "Apenas à noite",
          "Acima de 80 km/h",
        ],
        correct: 1,
        explanation:
          "CTB Art. 203: Ultrapassar pela contramão em curvas, aclives sem visibilidade, pontes, viadutos ou túneis, ou em interseções, é infração gravíssima.",
      },
      {
        question:
          "Qual o tempo mínimo de RCP (Reanimação Cardiopulmonar) antes de verificar sinais vitais?",
        options: ["30 segundos", "1 minuto", "2 minutos", "5 minutos"],
        correct: 2,
        explanation:
          "Segundo protocolos de primeiros socorros (AHA/ILCOR), o socorrista leigo deve realizar ciclos contínuos de RCP e verificar sinais (ou pedir ajuda/DEA) após aproximadamente 2 minutos (5 ciclos de 30:2).",
      },
      {
        question:
          "Segundo o CTB, qual a penalidade para quem adultera placa de veículo?",
        options: [
          "Multa gravíssima",
          "Detenção de 6 meses a 1 ano e suspensão da CNH",
          "Apenas multa",
          "Advertência",
        ],
        correct: 1,
        explanation:
          "CTB Art. 311: Adulterar ou remarcar chassi ou qualquer sinal identificador de veículo automotor (incluindo placas) é crime com pena de Reclusão de 3 a 6 anos e multa.",
      },
      {
        question:
          "Em uma via com três faixas, qual a velocidade máxima permitida na faixa da esquerda?",
        options: [
          "Não há limite específico",
          "Mesma da via, mas destinada à ultrapassagem",
          "20% acima do limite",
          "Livre",
        ],
        correct: 1,
        explanation:
          "A velocidade máxima permitida é a mesma para todas as faixas, definida pela sinalização da via (CTB Art. 61). A faixa da esquerda é reservada para ultrapassagem e veículos de maior velocidade de deslocamento.",
      },
      {
        question:
          "Qual a profundidade mínima do sulco dos pneus segundo o CTB?",
        options: ["1,0 mm", "1,6 mm", "2,0 mm", "3,0 mm"],
        correct: 1,
        explanation:
          "CTB Art. 230, XVIII: Conduzir o veículo com os equipamentos obrigatórios em desacordo (pneus com sulcos inferiores a 1,6 mm) é infração grave e retenção do veículo.",
      },
      {
        question: "O que significa a sigla RENAINF?",
        options: [
          "Registro Nacional de Infrações",
          "Registro Nacional de Acidentes e Infrações",
          "Rede Nacional de Informações",
          "Registro de Notificações de Infrações",
        ],
        correct: 0,
        explanation:
          "RENAINF é o Registro Nacional de Infrações de Trânsito, um sistema que interliga os órgãos de trânsito para registro e processamento de multas interestaduais.",
      },
      {
        question:
          "Segundo o CTB, qual o prazo para o proprietário transferir o veículo após a venda?",
        options: ["15 dias", "30 dias", "60 dias", "90 dias"],
        correct: 1,
        explanation:
          "CTB Art. 123 e 134: O prazo para transferência de propriedade (e comunicação de venda) é de 30 dias.",
      },
      {
        question: "Em caso de fratura exposta, qual a conduta correta?",
        options: [
          "Tentar colocar o osso no lugar",
          "Cobrir com pano limpo e imobilizar sem movimentar",
          "Lavar com água",
          "Aplicar pomada",
        ],
        correct: 1,
        explanation:
          "Em fratura exposta, deve-se cobrir o ferimento com material limpo (gaze, pano), imobilizar o membro na posição encontrada e aguardar socorro, sem tentar recolocar o osso no lugar.",
      },
      {
        question:
          "Qual a penalidade para conduzir veículo com equipamento de som em volume alto?",
        options: [
          "Multa leve",
          "Multa média",
          "Multa grave",
          "Multa gravíssima",
        ],
        correct: 1,
        explanation:
          "CTB Art. 228: Usar no veículo equipamento com som em volume ou frequência que não sejam autorizados pelo CONTRAN é infração **média**, com multa e retenção do veículo para regularização.",
      },
      {
        question:
          "O que caracteriza a embriaguez ao volante como crime segundo o CTB Art. 306?",
        options: [
          "Qualquer concentração de álcool",
          "Concentração igual ou superior a 0,34 mg/L no ar alveolar",
          "Apenas acima de 1,0 mg/L",
          "Apenas se causar acidente",
        ],
        correct: 1,
        explanation:
          "CTB Art. 306: Crime caracteriza-se com concentração igual ou superior a 0,34 mg/L no ar alveolar, ou por sinais que atestem alteração da capacidade psicomotora.",
      },
      {
        question: "Qual a distância mínima para estacionar de um hidrante?",
        options: ["5 metros", "10 metros", "15 metros", "20 metros"],
        correct: 0,
        explanation:
          "CTB Art. 181, VI: É proibido estacionar junto a hidrantes de incêndio e registros de água, a uma distância de **5 (cinco) metros** de um lado e outro.",
      },
      {
        question:
          "Em caso de parada cardiorrespiratória, qual a proporção correta de compressões e ventilações?",
        options: ["15:2", "30:2", "20:2", "40:2"],
        correct: 1,
        explanation:
          "A proporção recomendada para RCP em adultos (por um socorrista leigo) é de 30 compressões torácicas para 2 ventilações.",
      },
      {
        question:
          "Segundo o CTB, qual a penalidade para quem transporta crianças sem dispositivo de retenção?",
        options: [
          "Multa média",
          "Multa grave",
          "Multa gravíssima",
          "Apenas advertência",
        ],
        correct: 2,
        explanation:
          "CTB Art. 168: Transportar crianças sem observância das normas de segurança é infração **gravíssima** (7 pontos), com multa e retenção do veículo.",
      },
      {
        question: "O que significa a sigla CONTRAN?",
        options: [
          "Conselho Nacional de Trânsito",
          "Controle Nacional de Trânsito",
          "Conselho de Transporte Nacional",
          "Controle de Transporte Nacional",
        ],
        correct: 0,
        explanation:
          "CONTRAN é o Conselho Nacional de Trânsito, órgão máximo normativo e consultivo do Sistema Nacional de Trânsito (SNT).",
      },
      {
        question:
          "Qual a penalidade para conduzir veículo com CNH de categoria diferente?",
        options: [
          "Multa leve",
          "Multa gravíssima e retenção do veículo",
          "Apenas advertência",
          "Multa média",
        ],
        correct: 1,
        explanation:
          "CTB Art. 162, III: Conduzir veículo de categoria diferente daquela para a qual está habilitado é infração **gravíssima** (multa de 2x), com retenção do veículo até a apresentação de condutor habilitado.",
      },
      {
        question: "Em caso de queimadura grave, qual a conduta correta?",
        options: [
          "Aplicar pomada",
          "Resfriar com água corrente e cobrir com pano limpo",
          "Estourar bolhas",
          "Aplicar gelo direto",
        ],
        correct: 1,
        explanation:
          "Deve-se resfriar a área com água corrente fria por 10-20 minutos e cobrir com pano limpo e seco. Nunca estourar bolhas ou aplicar produtos.",
      },
      {
        question:
          "Segundo o CTB, qual o prazo para o condutor notificado apresentar o condutor infrator?",
        options: ["15 dias", "30 dias", "60 dias", "90 dias"],
        correct: 0,
        explanation:
          "CTB Art. 257, § 7º: O prazo para a identificação do condutor infrator é de 15 dias, contado da notificação da autuação.",
      },
      {
        question: "Qual a função do sistema ISOFIX em veículos?",
        options: [
          "Controle de estabilidade",
          "Ancoragem de cadeirinhas infantis",
          "Sistema de freios",
          "Controle de tração",
        ],
        correct: 1,
        explanation:
          "ISOFIX é o sistema internacional padronizado de ancoragem para a fixação segura de dispositivos de retenção para crianças (cadeirinhas) diretamente à estrutura do veículo.",
      },
      {
        question:
          "Segundo o CTB Art. 175, qual a penalidade para quem faz manobra perigosa?",
        options: [
          "Multa média",
          "Multa grave",
          "Multa gravíssima e suspensão da CNH",
          "Apenas advertência",
        ],
        correct: 2,
        explanation:
          "CTB Art. 175: Manobra perigosa (derrapagem, etc.) é infração **gravíssima** (multa de 10x) e suspensão do direito de dirigir.",
      },
      {
        question:
          "Em caso de vítima com suspeita de lesão na coluna, qual a conduta?",
        options: [
          "Movimentar para local seguro",
          "Não movimentar e aguardar socorro especializado",
          "Sentar a vítima",
          "Virar a vítima de lado",
        ],
        correct: 1,
        explanation:
          "Em suspeita de lesão na coluna, a prioridade é a imobilização total da vítima e não a sua movimentação, apenas aguardando socorro especializado.",
      },
      {
        question: "Qual a penalidade para conduzir veículo com pneus carecas?",
        options: [
          "Multa leve",
          "Multa média",
          "Multa grave e retenção do veículo",
          "Apenas advertência",
        ],
        correct: 2,
        explanation:
          "CTB Art. 230, XVIII: Conduzir veículo com pneus carecas (em mau estado) é infração **grave** (5 pontos), com multa e retenção do veículo.",
      },
      {
        question: "Segundo o CTB, qual a velocidade máxima em vias coletoras?",
        options: ["30 km/h", "40 km/h", "50 km/h", "60 km/h"],
        correct: 1,
        explanation:
          "CTB Art. 61: A velocidade máxima em vias coletoras é de 40 km/h, salvo sinalização em contrário.",
      },
      {
        question: "O que caracteriza a direção defensiva corretiva?",
        options: [
          "Prevenir antes do perigo",
          "Reagir adequadamente quando o perigo já está presente",
          "Dirigir devagar",
          "Buzinar sempre",
        ],
        correct: 1,
        explanation:
          "Direção defensiva corretiva é a reação do condutor para evitar o acidente quando uma situação de perigo já está estabelecida ou iminente.",
      },
      {
        question:
          "Qual a penalidade para deixar de dar preferência ao pedestre na faixa?",
        options: [
          "Multa média",
          "Multa grave",
          "Multa gravíssima e suspensão da CNH",
          "Apenas advertência",
        ],
        correct: 2,
        explanation:
          "CTB Art. 214, V: Não dar preferência ao pedestre na faixa é infração **gravíssima** (7 pontos) e multa.",
      },
      {
        question: "Em caso de choque elétrico em vítima, qual a primeira ação?",
        options: [
          "Tocar a vítima",
          "Desligar a fonte de energia antes de tocar",
          "Jogar água",
          "Puxar a vítima",
        ],
        correct: 1,
        explanation:
          "A primeira ação é garantir a segurança do socorrista, desligando a fonte de energia (eletricidade) antes de tocar na vítima.",
      },
      {
        question:
          "Segundo o CTB, qual o prazo de suspensão da CNH para quem acumula 40 pontos pela primeira vez?",
        options: [
          "1 a 3 meses",
          "3 a 6 meses",
          "6 meses a 1 ano",
          "1 a 2 anos",
        ],
        correct: 2,
        explanation:
          "CTB Art. 261: A suspensão do direito de dirigir será aplicada pelo prazo de 6 (seis) meses a 1 (um) ano, no caso de o condutor atingir a pontuação limite (variável entre 20 e 40 pontos).",
      },
      {
        question:
          "Qual a profundidade mínima de compressão torácica em RCP para adultos?",
        options: ["3 cm", "5 cm", "7 cm", "10 cm"],
        correct: 1,
        explanation:
          "A profundidade recomendada para compressões torácicas em RCP para adultos é de pelo menos 5 cm (e não mais de 6 cm).",
      },
      {
        question:
          "Segundo o CTB Art. 308, qual a pena para quem participa de racha resultando em morte?",
        options: [
          "Detenção de 6 meses a 1 ano",
          "Reclusão de 2 a 4 anos",
          "Reclusão de 5 a 10 anos",
          "Apenas multa",
        ],
        correct: 2,
        explanation:
          "CTB Art. 308, § 2º: Se resultar morte, a pena é de reclusão de 5 (cinco) a 10 (dez) anos.",
      },
      {
        question:
          "Qual a penalidade para conduzir veículo com escapamento adulterado?",
        options: [
          "Multa leve",
          "Multa média",
          "Multa grave e retenção do veículo",
          "Apenas advertência",
        ],
        correct: 2,
        explanation:
          "CTB Art. 230, XI: Conduzir veículo com descarga livre ou silenciador de motor inoperante ou defeituoso é infração **grave** (5 pontos), com retenção do veículo para regularização.",
      },
      {
        question:
          "Em caso de vítima inconsciente respirando, qual a posição adequada?",
        options: [
          "Posição supina",
          "Posição lateral de segurança",
          "Sentada",
          "De bruços",
        ],
        correct: 1,
        explanation:
          "A Posição Lateral de Segurança (PLS) é indicada para vítimas inconscientes que estão respirando, pois evita que a língua caia e obstrue as vias aéreas, ou que a vítima se asfixie com vômito.",
      },
    ],
  },

  legislacao: {
    facil: [
      {
        question:
          "Segundo a Lei Municipal nº 4.034/2013, qual o prazo para resgate de veículo abandonado após notificação de remoção?",
        options: ["5 dias", "10 dias", "15 dias", "30 dias"],
        correct: 1,
        explanation:
          "Lei 4.034/2013: O proprietário tem 10 dias para remover o veículo após a notificação afixada, sob pena de remoção e recolhimento ao pátio municipal.",
      },
      {
        question:
          "A Lei Complementar nº 285/2021 regulamenta qual tipo de transporte?",
        options: [
          "Transporte escolar",
          "Transporte por aplicativos",
          "Transporte de carga",
          "Transporte público",
        ],
        correct: 1,
        explanation:
          "LC 285/2021 estabelece normas para o Serviço de Transporte Individual de Passageiros por Aplicativos no município.",
      },
      {
        question: "O Código de Posturas Municipal (Lei 44/1998) trata de:",
        options: [
          "Apenas trânsito",
          "Normas de convivência urbana",
          "Apenas construções",
          "Apenas comércio",
        ],
        correct: 1,
        explanation:
          "O Código de Posturas estabelece normas gerais de convivência urbana, abrangendo aspectos como limpeza, ruídos e estacionamento em calçadas.",
      },
      {
        question:
          "Quem pode solicitar Autorização Especial de Trânsito (AET) para carga superdimensionada (Decreto 12.827/2018)?",
        options: [
          "Qualquer cidadão",
          "Apenas empresas de transporte cadastradas",
          "Apenas órgãos públicos",
          "Qualquer motorista",
        ],
        correct: 1,
        explanation:
          "Decreto 12.827/2018: A AET é solicitada pelo transportador/proprietário do veículo de carga para o trânsito de cargas com dimensões excedentes.",
      },
      {
        question: "A Lei Complementar nº 216/2017 trata de:",
        options: [
          "Estacionamento",
          "Mobilidade Urbana",
          "Transporte escolar",
          "Sinalização",
        ],
        correct: 1,
        explanation:
          "LC 216/2017 estabelece a Política Municipal de Mobilidade Urbana e seus princípios.",
      },
      {
        question:
          "Segundo a Lei 2.729/1999, o transporte escolar deve contar com:",
        options: [
          "Apenas motorista habilitado",
          "Motorista e monitor",
          "Apenas seguro",
          "Apenas autorização",
        ],
        correct: 1,
        explanation:
          "Lei 2.729/1999 (Art. 13, I, § 3º e Art. 16): Exige motorista habilitado (Cat. D ou E) e, na prática regulamentar, a presença de um monitor.",
      },
      {
        question: "O Decreto 14.719/2021 regulamenta a entrada de:",
        options: [
          "Veículos de carga",
          "Veículos de turismo",
          "Motocicletas",
          "Ônibus",
        ],
        correct: 1,
        explanation:
          "Decreto 14.719/2021 regulamenta a entrada, circulação, permanência e estacionamento de veículos de transporte coletivo de passageiros privados (veículos de turismo) em áreas específicas.",
      },
      {
        question:
          "Veículo abandonado em via pública por mais de quanto tempo pode ser considerado abandonado (Lei 4.034/2013)?",
        options: ["7 dias", "15 dias", "30 dias", "60 dias"],
        correct: 2,
        explanation:
          "Lei 4.034/2013 (Art. 2º): Veículo estacionado em logradouro público por período superior a 30 (trinta) dias ininterruptos e em evidente estado de má conservação, pode ser considerado abandonado.",
      },
      {
        question:
          "A LC 285/2021 exige que motoristas de aplicativo tenham CNH de qual categoria mínima?",
        options: ["Categoria A", "Categoria B", "Categoria C", "Categoria D"],
        correct: 1,
        explanation:
          "A LC 285/2021 exige CNH na categoria B, no mínimo, com a observação 'Exerce Atividade Remunerada (EAR)', em conformidade com o CTB.",
      },
      {
        question: "O Código de Posturas proíbe estacionar em calçadas:",
        options: [
          "Apenas à noite",
          "Sempre",
          "Apenas em dias úteis",
          "Apenas em áreas centrais",
        ],
        correct: 1,
        explanation:
          "Lei 44/1998: É sempre proibido estacionar em calçadas, pois obstruem a passagem de pedestres, sendo uma infração de trânsito e de postura.",
      },
      {
        question: "A AET (Autorização Especial de Trânsito) é necessária para:",
        options: [
          "Qualquer veículo de carga",
          "Veículos com carga superdimensionada",
          "Apenas caminhões",
          "Veículos de passeio",
        ],
        correct: 1,
        explanation:
          "Decreto 12.827/2018: AET é necessária para o trânsito de veículos de carga com dimensões (largura, altura, comprimento) acima dos limites regulamentares.",
      },
      {
        question:
          "Segundo a LC 216/2017, qual modal de transporte tem prioridade?",
        options: [
          "Automóveis",
          "Transporte coletivo e não motorizado",
          "Motocicletas",
          "Caminhões",
        ],
        correct: 1,
        explanation:
          "LC 216/2017: A política prioriza os modos não motorizados (pedestres e ciclistas) e o transporte público coletivo.",
      },
      {
        question: "O transporte escolar deve ter qual cor predominante?",
        options: ["Branca", "Amarela", "Vermelha", "Azul"],
        correct: 1,
        explanation:
          "Lei 2.729/1999 (em conformidade com o CTB): Veículos de transporte escolar devem ter cor amarela predominante e faixa horizontal preta.",
      },
      {
        question: "Quem fiscaliza o cumprimento do Código de Posturas?",
        options: ["Polícia Militar", "Guarda Municipal", "DETRAN", "Bombeiros"],
        correct: 1,
        explanation:
          "Lei 44/1998: A Guarda Civil Municipal e outros Agentes de Fiscalização são responsáveis pela fiscalização do Código de Posturas.",
      },
      {
        question: "A Lei 4.034/2013 considera veículo abandonado aquele que:",
        options: [
          "Está sujo",
          "Está sem documentos",
          "Está estacionado há mais de 30 dias ininterruptos e sem uso",
          "Está sem placa",
        ],
        correct: 2,
        explanation:
          "Lei 4.034/2013: Veículo abandonado é aquele estacionado há mais de 30 dias ininterruptos sem uso aparente, em estado de má conservação.",
      },
      {
        question:
          "Motoristas de aplicativo devem estar cadastrados em qual órgão municipal?",
        options: [
          "Prefeitura",
          "Secretaria de Mobilidade",
          "DETRAN",
          "Polícia Civil",
        ],
        correct: 1,
        explanation:
          "LC 285/2021: Motoristas devem estar credenciados na Diretoria de Trânsito (Ditran) da Secretaria Municipal de Mobilidade Urbana.",
      },
      {
        question: "O Código de Posturas proíbe lavar veículos em:",
        options: [
          "Garagens",
          "Vias públicas",
          "Postos de gasolina",
          "Estacionamentos",
        ],
        correct: 1,
        explanation: "Lei 44/1998: É proibido lavar veículos em vias públicas.",
      },
      {
        question: "A LC 216/2017 incentiva o uso de:",
        options: [
          "Automóveis individuais",
          "Bicicletas e transporte coletivo",
          "Motocicletas",
          "Táxis",
        ],
        correct: 1,
        explanation:
          "LC 216/2017: A política incentiva bicicletas e transporte coletivo para mobilidade sustentável.",
      },
      {
        question:
          "Segundo o Decreto 14.719/2021, veículos de turismo precisam de:",
        options: [
          "Apenas placa",
          "Autorização prévia",
          "Apenas seguro",
          "Apenas CNH",
        ],
        correct: 1,
        explanation:
          "Decreto 14.719/2021: Veículos de turismo (acima de 8 lugares) precisam de autorização prévia para circular em áreas restritas.",
      },
      {
        question: "O transporte escolar deve ter seguro de:",
        options: [
          "Apenas o veículo",
          "Passageiros (APP)",
          "Apenas o motorista",
          "Não precisa",
        ],
        correct: 1,
        explanation:
          "Lei 2.729/1999: É obrigatório Seguro de Acidentes Pessoais por Passageiros (APP).",
      },
      {
        question: "A remoção de veículo abandonado é feita por:",
        options: ["Proprietário", "Prefeitura", "DETRAN", "Polícia"],
        correct: 1,
        explanation:
          "Lei 4.034/2013: A Prefeitura, por meio dos órgãos competentes (Guarda ou Agentes de Trânsito), executa a remoção do veículo abandonado após o prazo da notificação.",
      },
      {
        question: "Motoristas de aplicativo devem ter idade mínima de:",
        options: ["18 anos", "21 anos", "25 anos", "30 anos"],
        correct: 1,
        explanation:
          "LC 285/2021 (em consonância com o CTB): Idade mínima de 21 anos para motoristas de aplicativo.",
      },
      {
        question: "O Código de Posturas proíbe som alto em veículos:",
        options: [
          "Apenas à noite",
          "Sempre em áreas residenciais",
          "Apenas em escolas",
          "Nunca",
        ],
        correct: 1,
        explanation:
          "Lei 44/1998: Som alto que perturbe o sossego é proibido, com limites de ruído mais baixos no período noturno em áreas residenciais.",
      },
      {
        question:
          "A AET (Autorização Especial de Trânsito) tem validade máxima de:",
        options: [
          "24 horas",
          "7 dias",
          "Período específico da viagem",
          "30 dias",
        ],
        correct: 2,
        explanation:
          "Decreto 12.827/2018 (Art. 7º, § 1º): A AET tem validade para o período específico da viagem autorizada, com prazo máximo de 1 ano.",
      },
      {
        question:
          "Segundo a LC 216/2017, calçadas devem ter largura mínima de:",
        options: ["1,0 metro", "1,2 metros", "1,5 metros", "2,0 metros"],
        correct: 1,
        explanation:
          "LC 216/2017: A faixa livre de circulação de pedestres deve ter largura mínima de 1,2 metros para garantir a acessibilidade.",
      },
      {
        question: "O transporte escolar deve ter extintor de incêndio:",
        options: [
          "Não precisa",
          "Sim, obrigatório",
          "Apenas ônibus",
          "Apenas vans",
        ],
        correct: 1,
        explanation:
          "Lei 2.729/1999 (em consonância com o CTB): Extintor de incêndio é equipamento obrigatório no transporte escolar.",
      },
      {
        question:
          "O Código de Posturas Municipal (Lei 44/1998) permite a fixação de cartazes e anúncios em postes de iluminação pública?",
        options: [
          "Sim, desde que sejam anúncios de utilidade pública.",
          "Não, é proibido fixar qualquer tipo de anúncio ou cartaz.",
          "Sim, desde que com autorização prévia da Prefeitura.",
          "Sim, se a fixação for feita com fita adesiva de fácil remoção.",
        ],
        correct: 1,
        explanation:
          "O Código de Posturas veda a colocação de publicidade em postes de iluminação e outras estruturas públicas para manter a estética e o ordenamento urbano.",
      },
      {
        question:
          "De acordo com o Código de Posturas (Lei 44/1998), de quem é a responsabilidade pela manutenção da limpeza de terrenos não edificados?",
        options: [
          "Da empresa de limpeza urbana",
          "Do vizinho mais próximo",
          "Do proprietário ou responsável pelo imóvel",
          "Da Guarda Municipal",
        ],
        correct: 2,
        explanation:
          "O Código de Posturas estabelece que cabe ao proprietário ou detentor manter os terrenos não edificados limpos, murados e drenados, evitando o acúmulo de lixo e entulho.",
      },
      {
        question:
          "Qual a penalidade principal aplicada por infração às normas do Código de Posturas Municipal (Lei 44/1998)?",
        options: [
          "Apreensão do veículo",
          "Detenção do infrator",
          "Multa e embargo (se for obra/comércio)",
          "Advertência verbal",
        ],
        correct: 2,
        explanation:
          "A penalidade administrativa mais comum e principal prevista no Código de Posturas é a multa, que pode ser acompanhada de embargo, interdição ou cassação de licença, dependendo da gravidade e reincidência.",
      },
      {
        question:
          "Qual o nome da taxa de utilização cobrada para a entrada e permanência de veículos de turismo no município (Decreto 14.719/2021)?",
        options: [
          "Taxa de Estacionamento Turístico (TET)",
          "Tarifa de Entrada de Veículos (TEV)",
          "Tarifa de Uso do Guia Turístico (TUGT)",
          "Imposto de Circulação de Turismo (ICT)",
        ],
        correct: 2,
        explanation:
          "A Tarifa de Uso do Guia Turístico (TUGT) é o nome estabelecido para a cobrança da entrada de veículos de turismo.",
      },
      {
        question:
          "Os veículos de turismo, para circularem nas áreas restritas (Decreto 14.719/2021), precisam de cadastramento e autorização junto a qual órgão municipal?",
        options: [
          "Secretaria de Turismo",
          "Corpo de Bombeiros",
          "Secretaria de Mobilidade Urbana (SEMOB)",
          "Agência de Regulação de Transporte (ART)",
        ],
        correct: 2,
        explanation:
          "A Secretaria de Mobilidade Urbana, por meio de seu órgão de trânsito, é a responsável pela emissão da autorização de circulação (AETC) e pelo cadastramento dos veículos de turismo.",
      },
      {
        question:
          "O Decreto 14.719/2021 exige qual documento para comprovar a finalidade da viagem de turismo?",
        options: [
          "CNH do motorista",
          "Certificado de Registro e Licenciamento do Veículo (CRLV)",
          "Voucher de hospedagem ou lista de passageiros (romaneio)",
          "Certificado de Inspeção Veicular",
        ],
        correct: 2,
        explanation:
          "O decreto exige documentos que comprovem a finalidade do transporte, como a lista de passageiros e o voucher de hospedagem, para atestar a natureza turística da viagem.",
      },
      {
        question: "Qual o principal objetivo do Decreto 12.827/2018?",
        options: [
          "Determinar a cor da placa dos caminhões",
          "Regular o transporte escolar",
          "Disciplina o trânsito de veículos de carga fora das vias específicas",
          "Regulamentar o transporte por aplicativos",
        ],
        correct: 2,
        explanation:
          "O Decreto 12.827/2018 regula o trânsito de veículos de carga (articulados, extratores, ou superdimensionados) nas vias urbanas que não são as vias de trânsito de carga, mediante AET.",
      },
      {
        question:
          "Qual a proibição para veículos de carga com dimensões excedentes que não possuem a AET (Autorização Especial de Trânsito) no Guarujá?",
        options: [
          "Circular apenas em vias municipais",
          "Circular em vias restritas ou fora do horário permitido",
          "Circular apenas em vias federais",
          "Circular apenas com escolta policial",
        ],
        correct: 1,
        explanation:
          "A circulação sem AET é vedada nas vias onde há restrição de trânsito para veículos de carga, sujeitando-se à multa e remoção.",
      },
      {
        question:
          "No contexto do Decreto 12.827/2018, o que se entende por 'unidade extratora'?",
        options: [
          "Veículo que transporta lixo",
          "Veículo que retira areia, pedra ou outros materiais de jazidas",
          "Veículo que transporta combustível",
          "Veículo de reboque ou guincho",
        ],
        correct: 1,
        explanation:
          "A 'unidade extratora' é especificamente referida no decreto para designar veículos que realizam a extração e transporte de materiais brutos, como areia, pedra e terra.",
      },
      {
        question:
          "Para qual finalidade os veículos abandonados e não resgatados no prazo legal (Lei 4.034/2013) são destinados?",
        options: [
          "Doação a instituições de caridade",
          "Desmanche imediato",
          "Leilão público",
          "Entrega ao DETRAN",
        ],
        correct: 2,
        explanation:
          "A Lei 4.034/2013 prevê que, se o proprietário não resgatar o veículo do pátio no prazo legal, ele será destinado a leilão público para cobrir custos de remoção e estadia.",
      },
      {
        question:
          "A Lei 4.034/2013 estabelece que a notificação sobre a remoção de um veículo abandonado deve ser feita a quem?",
        options: [
          "Ao morador da rua onde o veículo foi encontrado",
          "Ao DETRAN",
          "Ao proprietário ou detentor do veículo",
          "Apenas à seguradora",
        ],
        correct: 2,
        explanation:
          "A notificação deve ser endereçada ao proprietário ou detentor do veículo, para que ele possa tomar as providências para o resgate.",
      },
      {
        question:
          "A Lei 4.034/2013 (Abandono de Veículos) se aplica a veículos estacionados em propriedade particular?",
        options: [
          "Sim, em qualquer situação.",
          "Apenas se o veículo estiver visível da rua.",
          "Não, a lei se aplica apenas a logradouros públicos.",
          "Sim, desde que o veículo tenha mais de 10 anos de fabricação.",
        ],
        correct: 2,
        explanation:
          "A competência da Prefeitura para remoção de veículos abandonados se limita a ruas, praças e outros logradouros públicos, e não a propriedades privadas.",
      },
      {
        question:
          "O Plano de Mobilidade Urbana, previsto na LC 216/2017, é obrigatório para o município do Guarujá?",
        options: [
          "Não, é apenas opcional.",
          "Sim, é obrigatório por lei federal e municipal.",
          "Apenas para municípios turísticos.",
          "Apenas em anos de eleição.",
        ],
        correct: 1,
        explanation:
          "A LC 216/2017 estabelece a Política Municipal de Mobilidade, sendo o Plano de Mobilidade um instrumento obrigatório para o município.",
      },
      {
        question:
          "A LC 216/2017 visa a integração entre quais modos de transporte?",
        options: [
          "Apenas transporte individual e táxis",
          "Motorizado e Não Motorizado",
          "Apenas transporte coletivo",
          "Apenas veículos de carga e de turismo",
        ],
        correct: 1,
        explanation:
          "A lei busca a integração plena entre os modos motorizados (ônibus, carros) e não motorizados (pedestres, bicicletas) para um sistema eficiente e acessível.",
      },
      {
        question:
          "Qual o principal objetivo da Política de Mobilidade Urbana (LC 216/2017)?",
        options: [
          "Aumentar o número de estacionamentos",
          "Acessibilidade",
          "Reduzir o custo do combustível",
          "Aumentar a velocidade nas vias",
        ],
        correct: 1,
        explanation:
          "A Política de Mobilidade Urbana tem como objetivo central garantir a acessibilidade universal, ou seja, o acesso facilitado de todos os cidadãos ao espaço urbano.",
      },
      {
        question:
          "Qual o papel do Conselho Municipal de Mobilidade Urbana, instituído pela LC 216/2017?",
        options: [
          "Aprovar o orçamento anual da Prefeitura",
          "Realizar obras de infraestrutura",
          "Aplicar multas de trânsito",
          "Fiscalizar e acompanhar a execução da política e do Plano de Mobilidade",
        ],
        correct: 3,
        explanation:
          "O Conselho tem caráter consultivo e deliberativo, sendo sua principal função fiscalizar, acompanhar e propor melhorias na Política e no Plano de Mobilidade.",
      },
      {
        question:
          "O veículo utilizado para o transporte por aplicativo (LC 285/2021) deve ser obrigatoriamente emplacado no município do Guarujá?",
        options: [
          "Não, o emplacamento pode ser em qualquer município do estado de São Paulo.",
          "Sim, é obrigatório que o veículo seja registrado e licenciado no Guarujá.",
          "Apenas se o motorista também morar no município.",
          "Apenas veículos com mais de 5 anos de uso.",
        ],
        correct: 1,
        explanation:
          "A LC 285/2021 estabelece a obrigatoriedade de o veículo ser registrado e licenciado no município para garantir o controle e a fiscalização do serviço.",
      },
      {
        question:
          "Para operar no Guarujá, o motorista de aplicativo (LC 285/2021) precisa de algum tipo de cadastro ou credenciamento junto à Prefeitura?",
        options: [
          "Não, apenas a empresa de aplicativo precisa de autorização.",
          "Sim, o motorista precisa de credenciamento e registro no Cadastro Municipal de Condutores.",
          "Apenas a CNH com a observação EAR (Exerce Atividade Remunerada).",
          "Apenas se for operar à noite.",
        ],
        correct: 1,
        explanation:
          "A LC 285/2021 exige que o motorista obtenha o credenciamento e registre-se no Cadastro Municipal de Condutores de Transporte Individual de Passageiros.",
      },
      {
        question:
          "A LC 285/2021 permite que o motorista utilize um veículo de propriedade de terceiros (não próprio) para o transporte por aplicativo?",
        options: [
          "Não, o veículo deve estar obrigatoriamente no nome do motorista.",
          "Sim, desde que o veículo seja novo (com menos de 1 ano de uso).",
          "Não, apenas veículos de locadora de veículos.",
          "Sim, desde que autorizado pelo proprietário e o veículo esteja cadastrado.",
        ],
        correct: 3,
        explanation:
          "A lei permite o uso de veículos de terceiros, desde que o motorista apresente o contrato de locação ou a autorização do proprietário para o exercício da atividade e o veículo atenda aos demais requisitos.",
      },
      {
        question:
          "A Lei Complementar nº 285/2021 exige que o veículo de aplicativo utilize alguma identificação visual obrigatória e permanente (adesivo ou pintura) para caracterizar o serviço?",
        options: [
          "Sim, um adesivo obrigatório no vidro traseiro.",
          "Sim, o veículo deve ser pintado de cor amarela.",
          "Não, para preservar a característica de veículo particular, não há exigência de identificação visual permanente.",
          "Apenas se o veículo for de motorista mulher.",
        ],
        correct: 2,
        explanation:
          "A lei não exige a descaracterização do veículo particular, mas permite o uso de identificação interna ou digital, ou externa e removível, desde que não seja permanente.",
      },
      {
        question:
          "Com que frequência o veículo de transporte escolar (Lei 2.729/1999) deve ser submetido à vistoria no órgão municipal competente?",
        options: [
          "Anualmente",
          "A cada 3 meses",
          "Semestralmente (duas vezes ao ano)",
          "Apenas uma única vez, no primeiro emplacamento",
        ],
        correct: 2,
        explanation:
          "A Lei 2.729/1999 exige, em conformidade com o CTB, que o veículo de transporte escolar seja submetido à vistoria de segurança semestralmente (a cada seis meses).",
      },
      {
        question:
          "A Lei 2.729/1999 permite o transporte, em veículos escolares, de pessoas que não sejam estudantes ou monitores?",
        options: [
          "Sim, desde que sejam parentes do motorista.",
          "Sim, se o veículo estiver vazio.",
          "Não, é proibido o transporte de passageiros estranhos à atividade.",
          "Apenas se forem adultos e pagarem a passagem.",
        ],
        correct: 2,
        explanation:
          "A Lei 2.729/1999 proíbe o transporte de pessoas que não sejam estudantes, professores ou monitores, exceto em situações de emergência, para garantir a segurança e o foco do serviço.",
      },
      {
        question:
          "Segundo a Lei 2.729/1999 (Transporte Escolar), é permitido ultrapassar a capacidade máxima de passageiros do veículo?",
        options: [
          "Sim, em no máximo 10% da capacidade total.",
          "Não, em nenhuma hipótese, para garantir a segurança de todos.",
          "Apenas se forem crianças de até 5 anos.",
          "Apenas na área rural do município.",
        ],
        correct: 1,
        explanation:
          "A lei proíbe a superlotação, ou seja, o transporte de um número de passageiros superior à capacidade máxima estabelecida pelo fabricante, por ser uma grave ameaça à segurança.",
      },
      {
        question:
          "Qual é um dos documentos obrigatórios que deve constar no Certificado de Registro e Licenciamento do Veículo (CRLV) para o transporte escolar (Lei 2.729/1999)?",
        options: [
          "A observação 'Transporte de Carga'",
          "A observação 'Veículo de Aluguel'",
          "A observação 'Veículo Antigo'",
          "A autorização específica para 'Transporte Escolar'",
        ],
        correct: 3,
        explanation:
          "O veículo deve ter no seu certificado de registro a anotação 'Transp. Escolar' para indicar que ele está autorizado a realizar este serviço, conforme exigido pela lei.",
      },
      {
        question: "Veículos de aplicativo devem ter qual idade máxima?",
        options: ["5 anos", "8 anos", "10 anos", "15 anos"],
        correct: 2,
        explanation:
          "LC 285/2021: Veículos de aplicativo devem ter no máximo 10 anos de fabricação.",
      },
      {
        question: "O Código de Posturas proíbe estacionar em frente a:",
        options: [
          "Apenas escolas",
          "Entradas de garagens",
          "Apenas hospitais",
          "Apenas igrejas",
        ],
        correct: 1,
        explanation:
          "Lei 44/1998: É proibido estacionar em frente a entradas de garagens, obstruindo a passagem de veículos.",
      },
      {
        question: "A LC 216/2017 prevê a criação de:",
        options: [
          "Apenas estacionamentos",
          "Ciclovias e ciclofaixas",
          "Apenas viadutos",
          "Apenas túneis",
        ],
        correct: 1,
        explanation:
          "LC 216/2017: Prevê a criação de infraestrutura para modos não motorizados, como ciclovias e ciclofaixas.",
      },
      {
        question:
          "Segundo o Decreto 14.719/2021, veículos de turismo precisam de autorização prévia para:",
        options: [
          "Estacionar",
          "Circular em áreas restritas",
          "Trocar de marcha",
          "Abastecer",
        ],
        correct: 1,
        explanation:
          "Decreto 14.719/2021: Necessário autorização para circular e estacionar em áreas específicas (centrais e turísticas).",
      },
      {
        question: "O transporte escolar deve ter cintos de segurança:",
        options: [
          "Apenas no banco da frente",
          "Em todos os assentos",
          "Não precisa",
          "Apenas para crianças",
        ],
        correct: 1,
        explanation:
          "Lei 2.729/1999 (em consonância com o CTB): Cintos de segurança são obrigatórios em todos os assentos.",
      },
      {
        question: "A taxa de remoção de veículo abandonado é paga por:",
        options: [
          "Prefeitura",
          "Proprietário do veículo",
          "Seguradora",
          "DETRAN",
        ],
        correct: 1,
        explanation:
          "Lei 4.034/2013: O proprietário é responsável pelo pagamento da multa, da taxa de remoção e da diária de estadia no depósito.",
      },
      {
        question: "Motoristas de aplicativo devem ter certidão negativa de:",
        options: [
          "Apenas antecedentes criminais",
          "Antecedentes criminais e de trânsito",
          "Apenas dívidas",
          "Não precisa",
        ],
        correct: 1,
        explanation:
          "LC 285/2021: Exige-se certidão negativa de antecedentes criminais, além da comprovação de ausência de multas graves na CNH (certidão de trânsito).",
      },
      {
        question: "O Código de Posturas proíbe som alto em veículos após:",
        options: ["20h", "21h", "22h", "23h"],
        correct: 2,
        explanation:
          "Lei 44/1998: O período noturno, com limites de ruído mais estritos, é considerado a partir das 22h01 (após 22h) em áreas residenciais.",
      },
      {
        question: "A AET deve ser solicitada com antecedência mínima de:",
        options: ["24 horas", "48 horas", "2 dias", "7 dias"],
        correct: 2,
        explanation:
          "Decreto 12.827/2018: A AET deve ser solicitada com antecedência razoável para a análise do órgão municipal (usualmente 2 dias/48 horas).",
      },
      {
        question:
          "Segundo a LC 216/2017, estacionamentos públicos devem ter vagas para:",
        options: [
          "Apenas carros",
          "Idosos, deficientes e motos",
          "Apenas deficientes",
          "Apenas motos",
        ],
        correct: 1,
        explanation:
          "LC 216/2017: Estacionamentos devem ter vagas reservadas para idosos, deficientes e motocicletas.",
      },
      {
        question: "O transporte escolar deve ter placa de identificação:",
        options: [
          "Não precisa",
          "Sim, com a palavra ESCOLAR",
          "Apenas o nome da escola",
          "Apenas o número",
        ],
        correct: 1,
        explanation:
          "Lei 2.729/1999 (em consonância com o CTB): Veículos devem ter placa de identificação (luminosa/removível) com a palavra ESCOLAR.",
      },
      {
        question: "Veículos abandonados removidos são levados para:",
        options: [
          "Ferro-velho",
          "Depósito municipal",
          "DETRAN",
          "Leilão direto",
        ],
        correct: 1,
        explanation:
          "Lei 4.034/2013: Veículos removidos são levados para depósito municipal, onde o proprietário deve resgatá-los em até 10 dias após a notificação de remoção, se ainda não estiver guinchado.",
      },
      {
        question: "Motoristas de aplicativo devem fazer curso de:",
        options: [
          "Não precisa",
          "Transporte de passageiros",
          "Apenas direção defensiva",
          "Apenas primeiros socorros",
        ],
        correct: 1,
        explanation:
          "LC 285/2021: Motoristas devem fazer curso específico de transporte de passageiros (conforme Resolução Contran).",
      },
      {
        question: "O Código de Posturas proíbe jogar lixo em:",
        options: [
          "Apenas rios",
          "Vias públicas",
          "Apenas praias",
          "Apenas praças",
        ],
        correct: 1,
        explanation:
          "Lei 44/1998: É proibido jogar lixo, entulho ou detritos em vias, praças e logradouros públicos.",
      },
      {
        question: "A LC 216/2017 prevê a criação de zonas de:",
        options: [
          "Apenas estacionamento",
          "Tráfego calmo (Zona 30)",
          "Apenas pedestres",
          "Apenas ciclistas",
        ],
        correct: 1,
        explanation:
          "LC 216/2017: Prevê criação de zonas de tráfego calmo (Zona 30) para priorizar pedestres e ciclistas.",
      },
      {
        question:
          "Segundo o Decreto 14.719/2021, veículos de turismo precisam de autorização prévia se tiverem capacidade acima de:",
        options: [
          "4 passageiros",
          "8 passageiros",
          "15 passageiros",
          "20 passageiros",
        ],
        correct: 1,
        explanation:
          "Decreto 14.719/2021 (Art. 2º): A exigência de autorização prévia é para veículos com capacidade acima de 8 (oito) lugares.",
      },
      {
        question: "O transporte escolar deve ter saídas de emergência em:",
        options: [
          "Todos os veículos",
          "Apenas ônibus",
          "Veículos com mais de 20 passageiros",
          "Não precisa",
        ],
        correct: 2,
        explanation:
          "Lei 2.729/1999 (em consonância com o CTB): Saídas de emergência são obrigatórias em veículos com mais de 20 passageiros (ônibus).",
      },
    ],
    medio: [
      {
        question:
          "Qual órgão municipal é responsável pela fiscalização do transporte por aplicativos?",
        options: [
          "Polícia Militar",
          "Guarda Municipal",
          "Secretaria de Mobilidade",
          "DETRAN",
        ],
        correct: 2,
        explanation:
          "LC 285/2021: A Secretaria Municipal de Mobilidade é o órgão competente para fiscalizar.",
      },
      {
        question:
          "Segundo o Código de Posturas, qual a penalidade para estacionar em local proibido reincidentemente?",
        options: [
          "Multa simples",
          "Multa dobrada e possível apreensão",
          "Apreensão do veículo",
          "Suspensão da CNH",
        ],
        correct: 1,
        explanation:
          "Lei 44/1998: A reincidência em infrações pode resultar em multa com valor dobrado.",
      },
      {
        question:
          "A Política de Mobilidade Urbana (LC 216/2017) prioriza qual modal de transporte?",
        options: [
          "Transporte individual motorizado",
          "Transporte coletivo e não motorizado",
          "Transporte de carga",
          "Todos igualmente",
        ],
        correct: 1,
        explanation:
          "LC 216/2017: Prioriza transporte coletivo e modos não motorizados sobre o individual motorizado.",
      },
      {
        question: "Carga superdimensionada sem AET está sujeita a:",
        options: [
          "Apenas advertência",
          "Multa e impedimento de circulação",
          "Apenas multa",
          "Apreensão da carga",
        ],
        correct: 1,
        explanation:
          "Decreto 12.827/2018: Circular sem AET resulta em multa e impedimento até regularização.",
      },
      {
        question:
          "Qual o prazo para recurso contra remoção de veículo abandonado?",
        options: ["5 dias", "10 dias", "15 dias", "30 dias"],
        correct: 2,
        explanation:
          "Lei 4.034/2013: Prazo de 15 dias para apresentar recurso contra remoção.",
      },
      {
        question:
          "Segundo a LC 285/2021, qual a penalidade para motorista de aplicativo sem cadastro?",
        options: [
          "Advertência",
          "Multa de R$ 500,00 e apreensão do veículo",
          "Apenas multa",
          "Suspensão da CNH",
        ],
        correct: 1,
        explanation:
          "LC 285/2021: Operar sem cadastro resulta em multa de R$ 500,00 e apreensão do veículo.",
      },
      {
        question:
          "O Código de Posturas Art. 45 estabelece que obras em vias públicas devem ter:",
        options: [
          "Apenas sinalização",
          "Autorização prévia e sinalização adequada",
          "Apenas autorização",
          "Não precisa nada",
        ],
        correct: 1,
        explanation:
          "Lei 44/1998 Art. 45: Obras requerem autorização prévia e sinalização adequada.",
      },
      {
        question:
          "Segundo a LC 216/2017 Art. 12, qual o percentual mínimo de vagas para motos em estacionamentos?",
        options: ["2%", "5%", "10%", "15%"],
        correct: 1,
        explanation:
          "LC 216/2017 Art. 12: Mínimo de 2% das vagas devem ser para motocicletas.",
      },
      {
        question:
          "O Decreto 12.827/2018 estabelece que a AET pode ser cassada quando:",
        options: [
          "Nunca",
          "Houver descumprimento das condições estabelecidas",
          "Apenas em feriados",
          "Apenas com ordem judicial",
        ],
        correct: 1,
        explanation:
          "Decreto 12.827/2018: AET pode ser cassada por descumprimento das condições.",
      },
      {
        question:
          "Segundo a Lei 2.729/1999 Art. 8º, o monitor de transporte escolar deve ter:",
        options: [
          "Apenas ensino fundamental",
          "Ensino médio e curso específico",
          "Apenas curso específico",
          "Não precisa formação",
        ],
        correct: 1,
        explanation:
          "Lei 2.729/1999 Art. 8º: Monitor deve ter ensino médio completo e curso específico.",
      },
      {
        question:
          "A Lei 4.034/2013 Art. 15 estabelece que veículos abandonados com débitos acima de quanto são leiloados como sucata?",
        options: [
          "50% do valor",
          "70% do valor",
          "80% do valor",
          "100% do valor",
        ],
        correct: 2,
        explanation:
          "Lei 4.034/2013 Art. 15: Veículos com débitos acima de 80% do valor são leiloados como sucata.",
      },
      {
        question:
          "Segundo a LC 285/2021 Art. 18, empresas de aplicativo devem repassar ao município:",
        options: [
          "Nada",
          "1% do faturamento",
          "2% do faturamento",
          "5% do faturamento",
        ],
        correct: 1,
        explanation:
          "LC 285/2021 Art. 18: Empresas devem repassar 2% do faturamento ao município.",
      },
      {
        question:
          "O Código de Posturas Art. 67 estabelece que propaganda sonora em veículos é proibida entre:",
        options: ["20h e 8h", "21h e 7h", "22h e 8h", "23h e 7h"],
        correct: 2,
        explanation:
          "Lei 44/1998 Art. 67: Propaganda sonora é proibida entre 22h e 8h.",
      },
      {
        question: "Segundo a LC 216/2017 Art. 25, Zonas 30 devem ter:",
        options: [
          "Apenas sinalização",
          "Sinalização e dispositivos redutores de velocidade",
          "Apenas lombadas",
          "Apenas semáforos",
        ],
        correct: 1,
        explanation:
          "LC 216/2017 Art. 25: Zonas 30 devem ter sinalização e dispositivos redutores de velocidade.",
      },
      {
        question:
          "O Decreto 14.719/2021 Art. 10 estabelece que veículos de turismo devem ter seguro com cobertura mínima de:",
        options: ["R$ 50.000", "R$ 100.000", "R$ 200.000", "R$ 500.000"],
        correct: 2,
        explanation:
          "Decreto 14.719/2021 Art. 10: Seguro deve ter cobertura mínima total de R$ 200.000.",
      },
      {
        question:
          "Segundo a Lei 2.729/1999 Art. 12, o transporte escolar deve ter revisão técnica a cada:",
        options: ["3 meses", "6 meses", "1 ano", "2 anos"],
        correct: 1,
        explanation:
          "Lei 2.729/1999 Art. 12: Revisão técnica obrigatória a cada 6 meses.",
      },
      {
        question:
          "A Lei 4.034/2013 Art. 8º estabelece que a taxa diária de depósito de veículo abandonado é de:",
        options: ["R$ 50,00", "R$ 100,00", "R$ 150,00", "R$ 200,00"],
        correct: 1,
        explanation:
          "Lei 4.034/2013 Art. 8º: Taxa diária de depósito é de R$ 100,00.",
      },
      {
        question:
          "Segundo a LC 285/2021 Art. 22, motoristas de aplicativo devem ter quantos anos de habilitação?",
        options: ["1 ano", "2 anos", "3 anos", "5 anos"],
        correct: 1,
        explanation:
          "LC 285/2021 Art. 22: Motoristas devem ter no mínimo 2 anos de habilitação.",
      },
      {
        question:
          "O Código de Posturas Art. 89 estabelece multa de quanto para jogar lixo em via pública?",
        options: ["R$ 100,00", "R$ 200,00", "R$ 500,00", "R$ 1.000,00"],
        correct: 2,
        explanation:
          "Lei 44/1998 Art. 89: Multa de R$ 500,00 para descarte irregular de lixo.",
      },
      {
        question:
          "Segundo a LC 216/2017 Art. 30, ciclovias devem ter largura mínima de:",
        options: ["1,0 metro", "1,5 metros", "2,0 metros", "2,5 metros"],
        correct: 2,
        explanation:
          "LC 216/2017 Art. 30: Ciclovias devem ter largura mínima de 1,5 metro.",
      },
      {
        question:
          "O Decreto 12.827/2018 Art. 15 estabelece que veículos com carga acima de quantas toneladas precisam de AET?",
        options: [
          "10 toneladas",
          "20 toneladas",
          "30 toneladas",
          "40 toneladas",
        ],
        correct: 2,
        explanation:
          "Decreto 12.827/2018 Art. 15: Veículos com carga acima de 30 toneladas precisam de AET.",
      },
      {
        question:
          "Segundo o Decreto 14.719/2021 Art. 18, a autorização para veículos de turismo pode ser suspensa por:",
        options: [
          "Apenas inadimplência",
          "Reclamações procedentes ou infrações graves",
          "Apenas infrações",
          "Nunca pode ser suspensa",
        ],
        correct: 1,
        explanation:
          "Decreto 14.719/2021 Art. 18: Autorização pode ser suspensa por reclamações ou infrações graves.",
      },
      {
        question:
          "A Lei 2.729/1999 Art. 20 estabelece que o transporte escolar deve ter seguro com cobertura de:",
        options: ["R$ 50.000", "R$ 100.000", "R$ 150.000", "R$ 200.000"],
        correct: 1,
        explanation:
          "Lei 2.729/1999 Art. 20: Seguro deve ter cobertura mínima de R$ 100.000 por passageiro.",
      },
      {
        question:
          "Segundo a Lei 4.034/2013 Art. 25, veículos leiloados sem comprador são:",
        options: ["Devolvidos", "Releiloados", "Destruídos", "Doados"],
        correct: 1,
        explanation:
          "Lei 4.034/2013 Art. 25: Veículos sem comprador são releiloados após 30 dias.",
      },
      {
        question:
          "A LC 285/2021 Art. 35 estabelece que veículos de aplicativo devem ter vistoria a cada:",
        options: ["6 meses", "1 ano", "2 anos", "3 anos"],
        correct: 1,
        explanation: "LC 285/2021 Art. 35: Vistoria obrigatória anualmente.",
      },
      {
        question:
          "O Código de Posturas Art. 102 estabelece multa de quanto para propaganda irregular em veículos?",
        options: ["R$ 200,00", "R$ 500,00", "R$ 1.000,00", "R$ 2.000,00"],
        correct: 2,
        explanation:
          "Lei 44/1998 Art. 102: Multa de R$ 1.000,00 para propaganda irregular.",
      },
      {
        question:
          "Segundo a LC 216/2017 Art. 42, estacionamentos rotativos devem ter desconto de quanto para residentes?",
        options: ["20%", "30%", "50%", "70%"],
        correct: 2,
        explanation:
          "LC 216/2017 Art. 42: Residentes têm desconto de 50% em estacionamentos rotativos.",
      },
      {
        question:
          "O Decreto 12.827/2018 Art. 28 estabelece que a AET pode ter restrição de horário em vias com fluxo acima de:",
        options: [
          "1.000 veículos/hora",
          "2.000 veículos/hora",
          "3.000 veículos/hora",
          "5.000 veículos/hora",
        ],
        correct: 2,
        explanation:
          "Decreto 12.827/2018 Art. 28: Restrição de horário em vias com fluxo acima de 3.000 veículos/hora.",
      },
      {
        question:
          "Segundo o Decreto 14.719/2021 Art. 32, guias de turismo devem renovar cadastro a cada:",
        options: ["1 ano", "2 anos", "3 anos", "5 anos"],
        correct: 1,
        explanation:
          "Decreto 14.719/2021 Art. 32: Cadastro de guias deve ser renovado a cada 2 anos.",
      },
      {
        question:
          "A Lei 2.729/1999 Art. 35 estabelece que o transporte escolar deve ter tacógrafo em veículos com mais de:",
        options: [
          "8 passageiros",
          "10 passageiros",
          "15 passageiros",
          "20 passageiros",
        ],
        correct: 1,
        explanation:
          "Lei 2.729/1999 Art. 35: Tacógrafo obrigatório em veículos com mais de 10 passageiros.",
      },
      {
        question:
          "Segundo a Lei 4.034/2013 Art. 40, o proprietário de veículo abandonado responde por danos causados:",
        options: [
          "Não responde",
          "Apenas materiais",
          "Materiais e ambientais",
          "Apenas ambientais",
        ],
        correct: 2,
        explanation:
          "Lei 4.034/2013 Art. 40: Proprietário responde por danos materiais e ambientais.",
      },
      {
        question:
          "A LC 285/2021 Art. 48 estabelece que empresas de aplicativo devem fornecer dados ao município:",
        options: ["Nunca", "Mensalmente", "Trimestralmente", "Anualmente"],
        correct: 1,
        explanation:
          "LC 285/2021 Art. 48: Empresas devem fornecer dados mensalmente ao município.",
      },
      {
        question:
          "O Código de Posturas Art. 115 estabelece que food trucks devem estar a quantos metros de restaurantes?",
        options: ["50 metros", "100 metros", "200 metros", "500 metros"],
        correct: 2,
        explanation:
          "Lei 44/1998 Art. 115: Food trucks devem estar a no mínimo 100 metros de restaurantes.",
      },
      {
        question:
          "Segundo a LC 216/2017 Art. 55, ciclovias devem ter largura mínima de:",
        options: ["1,0 metro", "1,5 metros", "2,0 metros", "2,5 metros"],
        correct: 2,
        explanation:
          "LC 216/2017 Art. 55: Ciclovias devem ter largura mínima de 1,5 metro.",
      },
      {
        question:
          "O Decreto 12.827/2018 Art. 45 estabelece que veículos com carga indivisível acima de quanto precisam de escolta?",
        options: [
          "3 metros de largura",
          "4 metros de largura",
          "5 metros de largura",
          "6 metros de largura",
        ],
        correct: 1,
        explanation:
          "Decreto 12.827/2018 Art. 45: Cargas acima de 3 metros de largura precisam de escolta.",
      },
      {
        question:
          "Segundo o Decreto 14.719/2021 Art. 50, veículos de turismo devem ter identificação com letras de quantos centímetros?",
        options: ["5 cm", "10 cm", "15 cm", "20 cm"],
        correct: 1,
        explanation:
          "Decreto 14.719/2021 Art. 50: Identificação deve ter letras com no mínimo 15 cm.",
      },
      {
        question:
          "A Lei 2.729/1999 Art. 52 estabelece que monitores de transporte escolar devem fazer curso de reciclagem a cada:",
        options: ["1 ano", "2 anos", "3 anos", "5 anos"],
        correct: 1,
        explanation:
          "Lei 2.729/1999 Art. 52: Curso de reciclagem obrigatório a cada 3 anos.",
      },
      {
        question:
          "Segundo a Lei 4.034/2013 Art. 58, veículos com mais de quanto tempo de abandono são considerados irrecuperáveis?",
        options: ["6 meses", "1 ano", "2 anos", "5 anos"],
        correct: 2,
        explanation:
          "Lei 4.034/2013 Art. 58: Veículos abandonados há mais de 2 anos são considerados irrecuperáveis.",
      },
      {
        question:
          "A LC 285/2021 Art. 65 estabelece que motoristas de aplicativo não podem ter mais de quantas infrações graves em 12 meses?",
        options: ["1", "2", "3", "5"],
        correct: 1,
        explanation:
          "LC 285/2021 Art. 65: Máximo de 3 infrações graves ou 1 infração gravíssima em 12 meses.",
      },
      {
        question:
          "O Código de Posturas Art. 128 estabelece multa de quanto para reparos em veículos em via pública?",
        options: ["R$ 300,00", "R$ 500,00", "R$ 800,00", "R$ 1.000,00"],
        correct: 2,
        explanation:
          "Lei 44/1998 Art. 128: Multa de R$ 800,00 para reparos em via pública.",
      },
      {
        question:
          "Segundo a LC 216/2017 Art. 72, áreas de compartilhamento de veículos devem ter quantas vagas mínimas?",
        options: ["2 vagas", "5 vagas", "10 vagas", "20 vagas"],
        correct: 1,
        explanation:
          "LC 216/2017 Art. 72: Áreas de compartilhamento devem ter no mínimo 5 vagas.",
      },
      {
        question:
          "O Decreto 12.827/2018 Art. 68 estabelece que a AET para cargas perigosas exige:",
        options: [
          "Apenas autorização",
          "Autorização e escolta obrigatória",
          "Apenas escolta",
          "Não precisa AET",
        ],
        correct: 1,
        explanation:
          "Decreto 12.827/2018 Art. 68: Cargas perigosas exigem AET e escolta obrigatória.",
      },
      {
        question:
          "Segundo o Decreto 14.719/2021 Art. 75, veículos de turismo devem ter extintor com capacidade mínima de:",
        options: ["1 kg", "2 kg", "4 kg", "6 kg"],
        correct: 2,
        explanation:
          "Decreto 14.719/2021 Art. 75: Extintor deve ter capacidade mínima de 2 kg.",
      },
      {
        question:
          "A Lei 2.729/1999 Art. 80 estabelece que o transporte escolar deve ter kit de primeiros socorros com validade máxima de:",
        options: ["6 meses", "1 ano", "2 anos", "3 anos"],
        correct: 1,
        explanation:
          "Lei 2.729/1999 Art. 80: Kit de primeiros socorros deve ter validade máxima de 1 ano.",
      },
      {
        question:
          "Segundo a Lei 4.034/2013 Art. 92, o valor mínimo de leilão de veículo abandonado é:",
        options: [
          "50% do valor de mercado",
          "60% do valor de mercado",
          "70% do valor de mercado",
          "Valor dos débitos",
        ],
        correct: 3,
        explanation:
          "Lei 4.034/2013 Art. 92: Valor mínimo é o valor total dos débitos do veículo.",
      },
      {
        question:
          "A LC 285/2021 Art. 98 estabelece que veículos de aplicativo devem ter seguro APP com cobertura mínima de:",
        options: ["R$ 50.000", "R$ 100.000", "R$ 200.000", "R$ 500.000"],
        correct: 1,
        explanation:
          "LC 285/2021 Art. 98: Seguro APP deve ter cobertura mínima de R$ 100.000 por passageiro.",
      },
      {
        question:
          "O Código de Posturas Art. 105 estabelece que propaganda em veículos não pode exceder quantos por cento da área?",
        options: ["20%", "30%", "40%", "50%"],
        correct: 1,
        explanation:
          "Lei 44/1998 Art. 105: Propaganda não pode exceder 30% da área lateral do veículo.",
      },
      {
        question:
          "Segundo a LC 216/2017 Art. 110, corredores exclusivos de ônibus devem ter largura mínima de:",
        options: ["3,0 metros", "3,5 metros", "4,0 metros", "4,5 metros"],
        correct: 1,
        explanation:
          "LC 216/2017 Art. 110: Corredores de ônibus devem ter largura mínima de 3,5 metros.",
      },
      {
        question:
          "O Decreto 12.827/2018 Art. 80 estabelece que a AET para veículos especiais tem validade de:",
        options: ["30 dias", "60 dias", "90 dias", "1 ano"],
        correct: 3,
        explanation:
          "Decreto 12.827/2018 Art. 80: AET para veículos especiais tem validade de 1 ano.",
      },
    ],
    dificil: [
      {
        question:
          "Qual órgão municipal é responsável pela fiscalização do transporte por aplicativos?",
        options: [
          "Polícia Militar",
          "Guarda Municipal",
          "Secretaria de Mobilidade",
          "DETRAN",
        ],
        correct: 2,
        explanation:
          "LC 285/2021: A Secretaria Municipal de Mobilidade é o órgão competente para fiscalizar.",
      },
      {
        question:
          "Segundo o Código de Posturas, qual a penalidade para estacionar em local proibido reincidentemente?",
        options: [
          "Multa simples",
          "Multa dobrada e possível apreensão",
          "Apreensão do veículo",
          "Suspensão da CNH",
        ],
        correct: 1,
        explanation:
          "Lei 44/1998: A reincidência em infrações pode resultar em multa com valor dobrado.",
      },
      {
        question:
          "A Política de Mobilidade Urbana (LC 216/2017) prioriza qual modal de transporte?",
        options: [
          "Transporte individual motorizado",
          "Transporte coletivo e não motorizado",
          "Transporte de carga",
          "Todos igualmente",
        ],
        correct: 1,
        explanation:
          "LC 216/2017: Prioriza transporte coletivo e modos não motorizados sobre o individual motorizado.",
      },
      {
        question: "Carga superdimensionada sem AET está sujeita a:",
        options: [
          "Apenas advertência",
          "Multa e impedimento de circulação",
          "Apenas multa",
          "Apreensão da carga",
        ],
        correct: 1,
        explanation:
          "Decreto 12.827/2018: Circular sem AET resulta em multa e impedimento até regularização.",
      },
      {
        question:
          "Qual o prazo para recurso contra remoção de veículo abandonado?",
        options: ["5 dias", "10 dias", "15 dias", "30 dias"],
        correct: 2,
        explanation:
          "Lei 4.034/2013: Prazo de 15 dias para apresentar recurso contra remoção.",
      },
      {
        question:
          "Segundo a LC 285/2021, qual a penalidade para motorista de aplicativo sem cadastro?",
        options: [
          "Advertência",
          "Multa de R$ 500,00 e apreensão do veículo",
          "Apenas multa",
          "Suspensão da CNH",
        ],
        correct: 1,
        explanation:
          "LC 285/2021: Operar sem cadastro resulta em multa de R$ 500,00 e apreensão do veículo.",
      },
      {
        question:
          "O Código de Posturas Art. 45 estabelece que obras em vias públicas devem ter:",
        options: [
          "Apenas sinalização",
          "Autorização prévia e sinalização adequada",
          "Apenas autorização",
          "Não precisa nada",
        ],
        correct: 1,
        explanation:
          "Lei 44/1998 Art. 45: Obras requerem autorização prévia e sinalização adequada.",
      },
      {
        question:
          "Segundo a LC 216/2017 Art. 12, qual o percentual mínimo de vagas para motos em estacionamentos?",
        options: ["2%", "5%", "10%", "15%"],
        correct: 1,
        explanation:
          "LC 216/2017 Art. 12: Mínimo de 2% das vagas devem ser para motocicletas.",
      },
      {
        question:
          "O Decreto 12.827/2018 estabelece que a AET pode ser cassada quando:",
        options: [
          "Nunca",
          "Houver descumprimento das condições estabelecidas",
          "Apenas em feriados",
          "Apenas com ordem judicial",
        ],
        correct: 1,
        explanation:
          "Decreto 12.827/2018: AET pode ser cassada por descumprimento das condições.",
      },
      {
        question:
          "Segundo a Lei 2.729/1999 Art. 8º, o monitor de transporte escolar deve ter:",
        options: [
          "Apenas ensino fundamental",
          "Ensino médio e curso específico",
          "Apenas curso específico",
          "Não precisa formação",
        ],
        correct: 1,
        explanation:
          "Lei 2.729/1999 Art. 8º: Monitor deve ter ensino médio completo e curso específico.",
      },
      {
        question:
          "A Lei 4.034/2013 Art. 15 estabelece que veículos abandonados com débitos acima de quanto são leiloados como sucata?",
        options: [
          "50% do valor",
          "70% do valor",
          "80% do valor",
          "100% do valor",
        ],
        correct: 2,
        explanation:
          "Lei 4.034/2013 Art. 15: Veículos com débitos acima de 80% do valor são leiloados como sucata.",
      },
      {
        question:
          "Segundo a LC 285/2021 Art. 18, empresas de aplicativo devem repassar ao município:",
        options: [
          "Nada",
          "1% do faturamento",
          "2% do faturamento",
          "5% do faturamento",
        ],
        correct: 1,
        explanation:
          "LC 285/2021 Art. 18: Empresas devem repassar 2% do faturamento ao município.",
      },
      {
        question:
          "O Código de Posturas Art. 67 estabelece que propaganda sonora em veículos é proibida entre:",
        options: ["20h e 8h", "21h e 7h", "22h e 8h", "23h e 7h"],
        correct: 2,
        explanation:
          "Lei 44/1998 Art. 67: Propaganda sonora é proibida entre 22h e 8h.",
      },
      {
        question: "Segundo a LC 216/2017 Art. 25, Zonas 30 devem ter:",
        options: [
          "Apenas sinalização",
          "Sinalização e dispositivos redutores de velocidade",
          "Apenas lombadas",
          "Apenas semáforos",
        ],
        correct: 1,
        explanation:
          "LC 216/2017 Art. 25: Zonas 30 devem ter sinalização e dispositivos redutores de velocidade.",
      },
      {
        question:
          "O Decreto 14.719/2021 Art. 10 estabelece que veículos de turismo devem ter seguro com cobertura mínima de:",
        options: ["R$ 50.000", "R$ 100.000", "R$ 200.000", "R$ 500.000"],
        correct: 2,
        explanation:
          "Decreto 14.719/2021 Art. 10: Seguro deve ter cobertura mínima total de R$ 200.000.",
      },
      {
        question:
          "Segundo a Lei 2.729/1999 Art. 12, o transporte escolar deve ter revisão técnica a cada:",
        options: ["3 meses", "6 meses", "1 ano", "2 anos"],
        correct: 1,
        explanation:
          "Lei 2.729/1999 Art. 12: Revisão técnica obrigatória a cada 6 meses.",
      },
      {
        question:
          "A Lei 4.034/2013 Art. 8º estabelece que a taxa diária de depósito de veículo abandonado é de:",
        options: ["R$ 50,00", "R$ 100,00", "R$ 150,00", "R$ 200,00"],
        correct: 1,
        explanation:
          "Lei 4.034/2013 Art. 8º: Taxa diária de depósito é de R$ 100,00.",
      },
      {
        question:
          "Segundo a LC 285/2021 Art. 22, motoristas de aplicativo devem ter quantos anos de habilitação?",
        options: ["1 ano", "2 anos", "3 anos", "5 anos"],
        correct: 1,
        explanation:
          "LC 285/2021 Art. 22: Motoristas devem ter no mínimo 2 anos de habilitação.",
      },
      {
        question:
          "O Código de Posturas Art. 89 estabelece multa de quanto para jogar lixo em via pública?",
        options: ["R$ 100,00", "R$ 200,00", "R$ 500,00", "R$ 1.000,00"],
        correct: 2,
        explanation:
          "Lei 44/1998 Art. 89: Multa de R$ 500,00 para descarte irregular de lixo.",
      },
      {
        question:
          "Segundo a LC 216/2017 Art. 30, ciclovias devem ter largura mínima de:",
        options: ["1,0 metro", "1,5 metros", "2,0 metros", "2,5 metros"],
        correct: 2,
        explanation:
          "LC 216/2017 Art. 30: Ciclovias devem ter largura mínima de 1,5 metro.",
      },
      {
        question:
          "O Decreto 12.827/2018 Art. 15 estabelece que veículos com carga acima de quantas toneladas precisam de AET?",
        options: [
          "10 toneladas",
          "20 toneladas",
          "30 toneladas",
          "40 toneladas",
        ],
        correct: 2,
        explanation:
          "Decreto 12.827/2018 Art. 15: Veículos com carga acima de 30 toneladas precisam de AET.",
      },
      {
        question:
          "Segundo o Decreto 14.719/2021 Art. 18, a autorização para veículos de turismo pode ser suspensa por:",
        options: [
          "Apenas inadimplência",
          "Reclamações procedentes ou infrações graves",
          "Apenas infrações",
          "Nunca pode ser suspensa",
        ],
        correct: 1,
        explanation:
          "Decreto 14.719/2021 Art. 18: Autorização pode ser suspensa por reclamações ou infrações graves.",
      },
      {
        question:
          "A Lei 2.729/1999 Art. 20 estabelece que o transporte escolar deve ter seguro com cobertura de:",
        options: ["R$ 50.000", "R$ 100.000", "R$ 150.000", "R$ 200.000"],
        correct: 1,
        explanation:
          "Lei 2.729/1999 Art. 20: Seguro deve ter cobertura mínima de R$ 100.000 por passageiro.",
      },
      {
        question:
          "Segundo a Lei 4.034/2013 Art. 25, veículos leiloados sem comprador são:",
        options: ["Devolvidos", "Releiloados", "Destruídos", "Doados"],
        correct: 1,
        explanation:
          "Lei 4.034/2013 Art. 25: Veículos sem comprador são releiloados após 30 dias.",
      },
      {
        question:
          "A LC 285/2021 Art. 35 estabelece que veículos de aplicativo devem ter vistoria a cada:",
        options: ["6 meses", "1 ano", "2 anos", "3 anos"],
        correct: 1,
        explanation: "LC 285/2021 Art. 35: Vistoria obrigatória anualmente.",
      },
      {
        question:
          "O Código de Posturas Art. 102 estabelece multa de quanto para propaganda irregular em veículos?",
        options: ["R$ 200,00", "R$ 500,00", "R$ 1.000,00", "R$ 2.000,00"],
        correct: 2,
        explanation:
          "Lei 44/1998 Art. 102: Multa de R$ 1.000,00 para propaganda irregular.",
      },
      {
        question:
          "Segundo a LC 216/2017 Art. 42, estacionamentos rotativos devem ter desconto de quanto para residentes?",
        options: ["20%", "30%", "50%", "70%"],
        correct: 2,
        explanation:
          "LC 216/2017 Art. 42: Residentes têm desconto de 50% em estacionamentos rotativos.",
      },
      {
        question:
          "O Decreto 12.827/2018 Art. 28 estabelece que a AET pode ter restrição de horário em vias com fluxo acima de:",
        options: [
          "1.000 veículos/hora",
          "2.000 veículos/hora",
          "3.000 veículos/hora",
          "5.000 veículos/hora",
        ],
        correct: 2,
        explanation:
          "Decreto 12.827/2018 Art. 28: Restrição de horário em vias com fluxo acima de 3.000 veículos/hora.",
      },
      {
        question:
          "Segundo o Decreto 14.719/2021 Art. 32, guias de turismo devem renovar cadastro a cada:",
        options: ["1 ano", "2 anos", "3 anos", "5 anos"],
        correct: 1,
        explanation:
          "Decreto 14.719/2021 Art. 32: Cadastro de guias deve ser renovado a cada 2 anos.",
      },
      {
        question:
          "A Lei 2.729/1999 Art. 35 estabelece que o transporte escolar deve ter tacógrafo em veículos com mais de:",
        options: [
          "8 passageiros",
          "10 passageiros",
          "15 passageiros",
          "20 passageiros",
        ],
        correct: 1,
        explanation:
          "Lei 2.729/1999 Art. 35: Tacógrafo obrigatório em veículos com mais de 10 passageiros.",
      },
      {
        question:
          "Segundo a Lei 4.034/2013 Art. 40, o proprietário de veículo abandonado responde por danos causados:",
        options: [
          "Não responde",
          "Apenas materiais",
          "Materiais e ambientais",
          "Apenas ambientais",
        ],
        correct: 2,
        explanation:
          "Lei 4.034/2013 Art. 40: Proprietário responde por danos materiais e ambientais.",
      },
      {
        question:
          "A LC 285/2021 Art. 48 estabelece que empresas de aplicativo devem fornecer dados ao município:",
        options: ["Nunca", "Mensalmente", "Trimestralmente", "Anualmente"],
        correct: 1,
        explanation:
          "LC 285/2021 Art. 48: Empresas devem fornecer dados mensalmente ao município.",
      },
      {
        question:
          "O Código de Posturas Art. 115 estabelece que food trucks devem estar a quantos metros de restaurantes?",
        options: ["50 metros", "100 metros", "200 metros", "500 metros"],
        correct: 2,
        explanation:
          "Lei 44/1998 Art. 115: Food trucks devem estar a no mínimo 100 metros de restaurantes.",
      },
      {
        question:
          "Segundo a LC 216/2017 Art. 55, ciclovias devem ter largura mínima de:",
        options: ["1,0 metro", "1,5 metros", "2,0 metros", "2,5 metros"],
        correct: 2,
        explanation:
          "LC 216/2017 Art. 55: Ciclovias devem ter largura mínima de 1,5 metro.",
      },
      {
        question:
          "O Decreto 12.827/2018 Art. 45 estabelece que veículos com carga indivisível acima de quanto precisam de escolta?",
        options: [
          "3 metros de largura",
          "4 metros de largura",
          "5 metros de largura",
          "6 metros de largura",
        ],
        correct: 1,
        explanation:
          "Decreto 12.827/2018 Art. 45: Cargas acima de 3 metros de largura precisam de escolta.",
      },
      {
        question:
          "Segundo o Decreto 14.719/2021 Art. 50, veículos de turismo devem ter identificação com letras de quantos centímetros?",
        options: ["5 cm", "10 cm", "15 cm", "20 cm"],
        correct: 1,
        explanation:
          "Decreto 14.719/2021 Art. 50: Identificação deve ter letras com no mínimo 15 cm.",
      },
      {
        question:
          "A Lei 2.729/1999 Art. 52 estabelece que monitores de transporte escolar devem fazer curso de reciclagem a cada:",
        options: ["1 ano", "2 anos", "3 anos", "5 anos"],
        correct: 1,
        explanation:
          "Lei 2.729/1999 Art. 52: Curso de reciclagem obrigatório a cada 3 anos.",
      },
      {
        question:
          "Segundo a Lei 4.034/2013 Art. 58, veículos com mais de quanto tempo de abandono são considerados irrecuperáveis?",
        options: ["6 meses", "1 ano", "2 anos", "5 anos"],
        correct: 2,
        explanation:
          "Lei 4.034/2013 Art. 58: Veículos abandonados há mais de 2 anos são considerados irrecuperáveis.",
      },
      {
        question:
          "A LC 285/2021 Art. 65 estabelece que motoristas de aplicativo não podem ter mais de quantas infrações graves em 12 meses?",
        options: ["1", "2", "3", "5"],
        correct: 1,
        explanation:
          "LC 285/2021 Art. 65: Máximo de 3 infrações graves ou 1 infração gravíssima em 12 meses.",
      },
      {
        question:
          "O Código de Posturas Art. 128 estabelece multa de quanto para reparos em veículos em via pública?",
        options: ["R$ 300,00", "R$ 500,00", "R$ 800,00", "R$ 1.000,00"],
        correct: 2,
        explanation:
          "Lei 44/1998 Art. 128: Multa de R$ 800,00 para reparos em via pública.",
      },
      {
        question:
          "Segundo a LC 216/2017 Art. 72, áreas de compartilhamento de veículos devem ter quantas vagas mínimas?",
        options: ["2 vagas", "5 vagas", "10 vagas", "20 vagas"],
        correct: 1,
        explanation:
          "LC 216/2017 Art. 72: Áreas de compartilhamento devem ter no mínimo 5 vagas.",
      },
      {
        question:
          "O Decreto 12.827/2018 Art. 68 estabelece que a AET para cargas perigosas exige:",
        options: [
          "Apenas autorização",
          "Autorização e escolta obrigatória",
          "Apenas escolta",
          "Não precisa AET",
        ],
        correct: 1,
        explanation:
          "Decreto 12.827/2018 Art. 68: Cargas perigosas exigem AET e escolta obrigatória.",
      },
      {
        question:
          "Segundo o Decreto 14.719/2021 Art. 75, veículos de turismo devem ter extintor com capacidade mínima de:",
        options: ["1 kg", "2 kg", "4 kg", "6 kg"],
        correct: 2,
        explanation:
          "Decreto 14.719/2021 Art. 75: Extintor deve ter capacidade mínima de 2 kg.",
      },
      {
        question:
          "A Lei 2.729/1999 Art. 80 estabelece que o transporte escolar deve ter kit de primeiros socorros com validade máxima de:",
        options: ["6 meses", "1 ano", "2 anos", "3 anos"],
        correct: 1,
        explanation:
          "Lei 2.729/1999 Art. 80: Kit de primeiros socorros deve ter validade máxima de 1 ano.",
      },
      {
        question:
          "Segundo a Lei 4.034/2013 Art. 92, o valor mínimo de leilão de veículo abandonado é:",
        options: [
          "50% do valor de mercado",
          "60% do valor de mercado",
          "70% do valor de mercado",
          "Valor dos débitos",
        ],
        correct: 3,
        explanation:
          "Lei 4.034/2013 Art. 92: Valor mínimo é o valor total dos débitos do veículo.",
      },
      {
        question:
          "A LC 285/2021 Art. 98 estabelece que veículos de aplicativo devem ter seguro APP com cobertura mínima de:",
        options: ["R$ 50.000", "R$ 100.000", "R$ 200.000", "R$ 500.000"],
        correct: 1,
        explanation:
          "LC 285/2021 Art. 98: Seguro APP deve ter cobertura mínima de R$ 100.000 por passageiro.",
      },
      {
        question:
          "O Código de Posturas Art. 105 estabelece que propaganda em veículos não pode exceder quantos por cento da área?",
        options: ["20%", "30%", "40%", "50%"],
        correct: 1,
        explanation:
          "Lei 44/1998 Art. 105: Propaganda não pode exceder 30% da área lateral do veículo.",
      },
      {
        question:
          "Segundo a LC 216/2017 Art. 110, corredores exclusivos de ônibus devem ter largura mínima de:",
        options: ["3,0 metros", "3,5 metros", "4,0 metros", "4,5 metros"],
        correct: 1,
        explanation:
          "LC 216/2017 Art. 110: Corredores de ônibus devem ter largura mínima de 3,5 metros.",
      },
      {
        question:
          "O Decreto 12.827/2018 Art. 80 estabelece que a AET para veículos especiais tem validade de:",
        options: ["30 dias", "60 dias", "90 dias", "1 ano"],
        correct: 3,
        explanation:
          "Decreto 12.827/2018 Art. 80: AET para veículos especiais tem validade de 1 ano.",
      },
    ],
  },

  placas: {
    facil: [
      {
        question: "O que significa esta placa?",
        image: "/images/placa-de-pare-parada-obrigatoria-r-1-2-ty6x8yqyt6.jpg",
        options: [
          "Diminua a velocidade",
          "Pare obrigatoriamente",
          "Dê preferência",
          "Proibido estacionar",
        ],
        correct: 1,
        explanation:
          "Placa R-1 (PARE) - Regulamentação. O condutor deve parar obrigatoriamente antes da linha de retenção.",
      },
      {
        question: "Esta placa indica:",
        image: "/images/preferencia.jpeg",
        options: [
          "Pare",
          "Dê a preferência",
          "Siga em frente",
          "Proibido virar",
        ],
        correct: 1,
        explanation:
          "Placa R-2 (DÊ A PREFERÊNCIA) - O condutor deve reduzir velocidade e dar preferência aos veículos da via preferencial.",
      },
      {
        question: "O que esta placa proíbe?",
        image: "/images/proibido-estacionar.jpg",
        options: ["Parar", "Estacionar", "Parar e estacionar", "Ultrapassar"],
        correct: 1,
        explanation:
          "Placa R-6a (PROIBIDO ESTACIONAR) - É proibido estacionar, mas é permitido parar temporariamente.",
      },
      {
        question: "Esta placa significa:",
        image: "/images/sentido-obrigatorio.jpeg",
        options: [
          "Sentido proibido",
          "Sentido obrigatório",
          "Preferencial",
          "Retorno obrigatório",
        ],
        correct: 1,
        explanation:
          "Placa R-24a (SENTIDO DE CIRCULAÇÃO DA VIA) - Indica o sentido obrigatório de circulação.",
      },
      {
        question: "O que indica esta placa amarela?",
        image: "/images/cruzamento-vias.jpeg",
        options: ["Pare", "Cruzamento de vias", "Escola", "Hospital"],
        correct: 1,
        explanation:
          "Placa A-6 (CRUZAMENTO DE VIAS) - Advertência sobre cruzamento à frente. Reduzir velocidade e redobrar atenção.",
      },
      {
        question: "Esta placa de advertência indica:",
        image: "/images/passagem-sinalizada-de-pedestres",
        options: [
          "Área de pedestres",
          "Passagem de pedestres",
          "Escola",
          "Parque",
        ],
        correct: 1,
        explanation:
          "Placa A-32b (PASSAGEM SINALIZADA DE PEDESTRES) - Advertência sobre passagem sinalizada de pedestres à frente.",
      },
      {
        question: "O que significa esta placa azul?",
        image: "/images/placa-hospital.png",
        options: ["Posto de saúde", "Hospital", "Farmácia", "Ambulância"],
        correct: 1,
        explanation:
          "Placa SAU-10 (HOSPITAL) - Indica serviço de hospital nas proximidades.",
      },
      {
        question: "Esta placa de regulamentação indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Ctext x='100' y='125' font-family='Arial' font-size='70' font-weight='bold' fill='%23000' text-anchor='middle'%3E60%3C/text%3E%3C/svg%3E",
        options: [
          "Velocidade mínima 60 km/h",
          "Velocidade máxima 60 km/h",
          "Distância 60m",
          "Peso 60t",
        ],
        correct: 1,
        explanation:
          "Placa R-19 (VELOCIDADE MÁXIMA PERMITIDA) - Indica velocidade máxima permitida de 60 km/h na via.",
      },
      {
        question: "O que esta placa proíbe?",
        image: "/images/estacionar-em-local-proibido-2.jpg",
        options: [
          "Apenas estacionar",
          "Apenas parar",
          "Parar e estacionar",
          "Ultrapassar",
        ],
        correct: 2,
        explanation:
          "Placa R-6a (PROIBIDO PARAR E ESTACIONAR) - É proibido tanto parar quanto estacionar no local.",
      },
      {
        question: "Esta placa indica:",
        image: "/images/area-escolar.jpg",
        options: ["Parque", "Área escolar", "Playground", "Creche"],
        correct: 1,
        explanation:
          "Placa A-33a (ÁREA ESCOLAR) - Advertência sobre proximidade de escola. Redobrar atenção com crianças.",
      },
      {
        question: "O que significa esta placa?",
        image: "/images/proibido-ultrapassar.png",
        options: [
          "Ultrapassagem permitida",
          "Proibido ultrapassar",
          "Mão dupla",
          "Pista dupla",
        ],
        correct: 1,
        explanation:
          "Placa R-10 (PROIBIDO ULTRAPASSAR) - Proíbe a ultrapassagem de veículos automotores.",
      },
      {
        question: "Esta placa de regulamentação significa:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Cpath d='M 100 60 L 70 100 L 100 100 L 100 140' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cline x1='40' y1='60' x2='160' y2='140' stroke='%23ff0000' stroke-width='10'/%3E%3C/svg%3E",
        options: [
          "Proibido virar à direita",
          "Proibido virar à esquerda",
          "Proibido retornar",
          "Proibido seguir em frente",
        ],
        correct: 1,
        explanation:
          "Placa R-4a (PROIBIDO VIRAR À ESQUERDA) - Proíbe conversão à esquerda.",
      },
      {
        question: "O que indica esta placa?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 50 120 L 70 120 L 70 80 L 90 80 L 90 120 L 110 120 L 110 80 L 130 80 L 130 120 L 150 120' stroke='%23000' stroke-width='6' fill='none'/%3E%3C/svg%3E",
        options: [
          "Pista escorregadia",
          "Pista irregular",
          "Obras na pista",
          "Pista molhada",
        ],
        correct: 1,
        explanation:
          "Placa A-14 (PISTA IRREGULAR) - Advertência sobre irregularidades na pista. Reduzir velocidade.",
      },
      {
        question: "Esta placa significa:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Crect x='60' y='40' width='80' height='120' rx='10' fill='%23ff0000'/%3E%3C/svg%3E",
        options: [
          "Sentido obrigatório",
          "Sentido proibido",
          "Mão dupla",
          "Retorno permitido",
        ],
        correct: 1,
        explanation:
          "Placa R-3 (SENTIDO PROIBIDO) - Proíbe a circulação de veículos no sentido indicado.",
      },
      {
        question: "O que esta placa indica?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Ccircle cx='100' cy='70' r='25' fill='%23ff0000'/%3E%3Ccircle cx='100' cy='100' r='25' fill='%23ffcc00' stroke='%23000' stroke-width='2'/%3E%3Ccircle cx='100' cy='130' r='25' fill='%2300cc00'/%3E%3Crect x='85' y='40' width='30' height='120' rx='5' fill='none' stroke='%23000' stroke-width='4'/%3E%3C/svg%3E",
        options: [
          "Cruzamento à frente",
          "Semáforo à frente",
          "Pare obrigatório",
          "Fiscalização eletrônica",
        ],
        correct: 1,
        explanation:
          "Placa A-21a (SEMÁFORO À FRENTE) - Advertência sobre presença de semáforo adiante.",
      },
      {
        question: "Esta placa de regulamentação indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Cpath d='M 100 60 L 130 100 L 100 100 L 100 140' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cline x1='40' y1='140' x2='160' y2='60' stroke='%23ff0000' stroke-width='10'/%3E%3C/svg%3E",
        options: [
          "Proibido virar à esquerda",
          "Proibido virar à direita",
          "Proibido retornar",
          "Siga em frente",
        ],
        correct: 1,
        explanation:
          "Placa R-4b (PROIBIDO VIRAR À DIREITA) - Proíbe conversão à direita.",
      },
      {
        question: "O que significa esta placa?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Cpath d='M 140 60 Q 60 60 60 100 Q 60 140 100 140 L 120 140 M 110 130 L 120 140 L 110 150' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cline x1='40' y1='60' x2='160' y2='140' stroke='%23ff0000' stroke-width='10'/%3E%3C/svg%3E",
        options: [
          "Retorno obrigatório",
          "Proibido retornar à esquerda",
          "Proibido virar",
          "Retornar",
        ],
        correct: 1,
        explanation:
          "Placa R-5a (PROIBIDO RETORNAR À ESQUERDA) - Proíbe retorno à esquerda.",
      },
      {
        question: "Esta placa indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 40 100 Q 60 80 100 80 Q 140 80 160 100' stroke='%23000' stroke-width='8' fill='none'/%3E%3Cpath d='M 40 120 L 160 120' stroke='%23000' stroke-width='8'/%3E%3C/svg%3E",
        options: ["Depressão", "Saliência ou lombada", "Buraco", "Valeta"],
        correct: 1,
        explanation:
          "Placa A-7a (SALIÊNCIA OU LOMBADA) - Advertência sobre lombada ou elevação na pista. Reduzir velocidade.",
      },
      {
        question: "O que esta placa proíbe?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Cpath d='M 60 80 L 90 80 L 90 60 M 110 80 L 140 80 L 140 60' stroke='%23000' stroke-width='8' fill='none' stroke-linecap='round'/%3E%3Cpath d='M 60 100 L 90 100 M 110 100 L 140 100' stroke='%23000' stroke-width='8' stroke-dasharray='5,5'/%3E%3Cline x1='40' y1='60' x2='160' y2='140' stroke='%23ff0000' stroke-width='10'/%3E%3C/svg%3E",
        options: [
          "Ultrapassar",
          "Mudar de faixa da esquerda para direita",
          "Virar à esquerda",
          "Retornar",
        ],
        correct: 1,
        explanation:
          "Placa R-7 (PROIBIDO MUDAR DE FAIXA OU PISTA DE TRÂNSITO DA ESQUERDA PARA A DIREITA) - Proíbe mudança de faixa da esquerda para direita.",
      },
      {
        question: "Esta placa significa:",
        image: "/images/proibido-buzinar.png",
        options: [
          "Proibido usar o celular enquanto dirige",
          "Proibido buzinar",
          "Somente permitido buzinar em curvas",
          "Obrigatório o uso de buzina em situações de risco",
        ],
        correct: 1,
        explanation:
          "Placa R-20 (PROIBIDO ACIONAR BUZINA) - Indica que é proibido o uso de buzina ou qualquer outro sinal sonoro no trecho sinalizado. Essa placa é usada principalmente em áreas próximas a hospitais, escolas e locais que exigem silêncio.",
      },
      {
        question: "O que esta placa indica?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%230066cc' stroke='%23fff' stroke-width='8'/%3E%3Ctext x='100' y='125' font-family='Arial' font-size='80' font-weight='bold' fill='%23fff' text-anchor='middle'%3EE%3C/text%3E%3C/svg%3E",
        options: [
          "Estacionamento proibido",
          "Estacionamento regulamentado",
          "Estacionamento livre",
          "Estacionamento pago",
        ],
        correct: 1,
        explanation:
          "Placa R-6c (ESTACIONAMENTO REGULAMENTADO) - Permite estacionamento conforme regulamentação local.",
      },
      {
        question: "Esta placa de advertência indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 140 100 Q 140 60 100 60 Q 60 60 60 100' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round'/%3E%3Cpath d='M 70 90 L 60 100 L 70 110' stroke='%23000' stroke-width='8' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Curva suave à direita",
          "Curva acentuada à direita",
          "Retorno à direita",
          "Desvio à direita",
        ],
        correct: 1,
        explanation:
          "Placa A-3a (CURVA ACENTUADA À DIREITA) - Advertência sobre curva acentuada à direita. Reduzir velocidade.",
      },
      {
        question: "O que significa esta placa?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Ctext x='100' y='125' font-family='Arial' font-size='70' font-weight='bold' fill='%23000' text-anchor='middle'%3E80%3C/text%3E%3C/svg%3E",
        options: [
          "Velocidade mínima 80 km/h",
          "Velocidade máxima 80 km/h",
          "Distância 80m",
          "Peso 80t",
        ],
        correct: 1,
        explanation:
          "Placa R-19 (VELOCIDADE MÁXIMA PERMITIDA) - Indica velocidade máxima permitida de 80 km/h na via.",
      },
      {
        question: "Esta placa indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 50 80 L 100 80 M 100 80 L 150 80 M 100 60 L 100 140' stroke='%23000' stroke-width='10' stroke-linecap='round'/%3E%3Crect x='95' y='75' width='10' height='70' fill='%23000'/%3E%3C/svg%3E",
        options: ["Mão dupla", "Pista dividida", "Duas pistas", "Bifurcação"],
        correct: 0,
        explanation:
          "Placa A-13b (MÃO DUPLA ADIANTE) - Advertência sobre início de trecho com trânsito nos dois sentidos.",
      },
      {
        question: "O que esta placa proíbe?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Ccircle cx='100' cy='80' r='20' fill='none' stroke='%23000' stroke-width='6'/%3E%3Cline x1='100' y1='100' x2='100' y2='130' stroke='%23000' stroke-width='8'/%3E%3Cline x1='100' y1='130' x2='85' y2='155' stroke='%23000' stroke-width='8'/%3E%3Cline x1='100' y1='130' x2='115' y2='155' stroke='%23000' stroke-width='8'/%3E%3Cline x1='100' y1='110' x2='85' y2='120' stroke='%23000' stroke-width='6'/%3E%3Cline x1='100' y1='110' x2='115' y2='120' stroke='%23000' stroke-width='6'/%3E%3Cline x1='40' y1='60' x2='160' y2='140' stroke='%23ff0000' stroke-width='10'/%3E%3C/svg%3E",
        options: [
          "Proibido trânsito de veículos",
          "Proibido trânsito de pedestres",
          "Proibido trânsito de bicicletas",
          "Proibido trânsito de motocicletas",
        ],
        correct: 1,
        explanation:
          "A placa R-29 (PROIBIDO TRÂNSITO DE PEDESTRES) indica que é proibida a circulação de pedestres na via ou trecho sinalizado.",
      },
      {
        question: "Esta placa de advertência significa:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 60 80 L 100 120 L 140 80' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ctext x='100' y='155' font-family='Arial' font-size='35' font-weight='bold' fill='%23000' text-anchor='middle'%3E10%25%3C/text%3E%3C/svg%3E",
        options: ["Aclive", "Declive", "Pista plana", "Lombada"],
        correct: 1,
        explanation:
          "Placa A-20a (DECLIVE) - Advertência sobre descida acentuada. Usar marcha reduzida e freio motor.",
      },
      {
        question: "O que indica esta placa?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%230066cc' stroke='%23fff' stroke-width='8'/%3E%3Cpath d='M 70 100 L 130 100 M 115 85 L 130 100 L 115 115' stroke='%23fff' stroke-width='12' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Vire à direita",
          "Passe à direita",
          "Conserve-se à direita",
          "Acostamento à direita",
        ],
        correct: 1,
        explanation:
          "Placa R-27 (PASSE À DIREITA) - Indica que o condutor deve passar à direita do obstáculo.",
      },
      {
        question: "Esta placa significa:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 140 120 L 100 80 L 60 120' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ctext x='100' y='155' font-family='Arial' font-size='35' font-weight='bold' fill='%23000' text-anchor='middle'%3E10%25%3C/text%3E%3C/svg%3E",
        options: ["Declive", "Aclive", "Lombada", "Depressão"],
        correct: 1,
        explanation:
          "Placa A-19 (ACLIVE) - Advertência sobre subida acentuada. Usar marcha adequada.",
      },
      {
        question: "O que esta placa proíbe?",
        image: "/images/proibido-transito-bicicleta.png",
        options: [
          "Trânsito de motos",
          "Trânsito de bicicletas",
          "Trânsito de pedestres",
          "Ciclovia",
        ],
        correct: 1,
        explanation:
          "Placa R-34 (PROIBIDO TRÂNSITO DE BICICLETAS) - Proíbe a circulação de bicicletas.",
      },
      {
        question: "Esta placa indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 50 110 Q 70 90 100 90 Q 130 90 150 110' stroke='%23000' stroke-width='8' fill='none'/%3E%3Cpath d='M 60 120 L 140 120' stroke='%23000' stroke-width='8'/%3E%3Cpath d='M 70 130 Q 80 125 90 130 Q 100 135 110 130 Q 120 125 130 130' stroke='%23000' stroke-width='6' fill='none'/%3E%3C/svg%3E",
        options: [
          "Pista molhada",
          "Pista escorregadia",
          "Pista irregular",
          "Obras",
        ],
        correct: 1,
        explanation:
          "Placa A-12 (PISTA ESCORREGADIA) - Advertência sobre pista com baixa aderência. Reduzir velocidade e evitar freadas bruscas.",
      },
      {
        question: "O que significa esta placa?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Ctext x='100' y='125' font-family='Arial' font-size='70' font-weight='bold' fill='%23000' text-anchor='middle'%3E40%3C/text%3E%3C/svg%3E",
        options: [
          "Velocidade mínima 40 km/h",
          "Velocidade máxima 40 km/h",
          "Distância 40m",
          "Peso 40t",
        ],
        correct: 1,
        explanation:
          "Placa R-19 (VELOCIDADE MÁXIMA PERMITIDA) - Indica velocidade máxima permitida de 40 km/h na via.",
      },
      {
        question: "Esta placa de advertência indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 70 80 L 90 100 L 70 120 M 110 80 L 130 100 L 110 120' stroke='%23000' stroke-width='8' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Crect x='60' y='130' width='80' height='20' fill='%23000'/%3E%3C/svg%3E",
        options: ["Manutenção", "Obras na pista", "Desvio", "Pista irregular"],
        correct: 1,
        explanation:
          "Placa A-24 (OBRAS) - Advertência sobre obras na via. Reduzir velocidade e redobrar atenção.",
      },
      {
        question: "O que esta placa indica?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%230066cc' stroke='%23fff' stroke-width='8'/%3E%3Cpath d='M 130 100 L 70 100 M 85 85 L 70 100 L 85 115' stroke='%23fff' stroke-width='12' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Vire à esquerda",
          "Passe à esquerda",
          "Conserve-se à esquerda",
          "Acostamento à esquerda",
        ],
        correct: 1,
        explanation:
          "Placa R-28 (PASSE À ESQUERDA) - Indica que o condutor deve passar à esquerda do obstáculo.",
      },
      {
        question: "Esta placa significa:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 60 80 L 100 80 L 140 80 M 60 120 L 100 120 L 140 120' stroke='%23000' stroke-width='10' stroke-linecap='round'/%3E%3Cpath d='M 60 80 L 60 120 M 140 80 L 140 120' stroke='%23000' stroke-width='10' stroke-linecap='round'/%3E%3C/svg%3E",
        options: ["Ponte estreita", "Ponte móvel", "Ponte", "Viaduto"],
        correct: 2,
        explanation:
          "Placa A-22 (PONTE MÓVEL) - Advertência sobre presença de ponte móvel à frente.",
      },
      {
        question: "O que esta placa proíbe?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Crect x='60' y='60' width='80' height='50' rx='5' fill='none' stroke='%23000' stroke-width='6'/%3E%3Ccircle cx='75' cy='130' r='10' fill='%23000'/%3E%3Ccircle cx='125' cy='130' r='10' fill='%23000'/%3E%3Crect x='70' y='70' width='15' height='20' fill='%23000'/%3E%3Crect x='115' y='70' width='15' height='20' fill='%23000'/%3E%3Cline x1='40' y1='60' x2='160' y2='140' stroke='%23ff0000' stroke-width='10'/%3E%3C/svg%3E",
        options: [
          "Trânsito de bicicletas",
          "Trânsito de veículos automotores",
          "Trânsito de pedestres",
          "Trânsito de motos",
        ],
        correct: 1,
        explanation:
          "Placa R-8a (PROIBIDO TRÂNSITO DE VEÍCULOS AUTOMOTORES) - Proíbe a circulação de todos os veículos automotores.",
      },
      {
        question: "Esta placa indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 50 100 L 100 60 L 150 100 L 100 60 L 100 140' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Entroncamento oblíquo à esquerda",
          "Entroncamento oblíquo à direita",
          "Bifurcação",
          "Cruzamento",
        ],
        correct: 0,
        explanation:
          "Placa A-11a (ENTRONCAMENTO OBLÍQUO À ESQUERDA) - Advertência sobre entroncamento oblíquo à esquerda.",
      },
      {
        question: "O que significa esta placa?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Ctext x='100' y='125' font-family='Arial' font-size='70' font-weight='bold' fill='%23000' text-anchor='middle'%3E50%3C/text%3E%3C/svg%3E",
        options: [
          "Velocidade mínima 50 km/h",
          "Velocidade máxima 50 km/h",
          "Distância 50m",
          "Peso 50t",
        ],
        correct: 1,
        explanation:
          "Placa R-19 (VELOCIDADE MÁXIMA PERMITIDA) - Indica velocidade máxima permitida de 50 km/h na via.",
      },
      {
        question: "Esta placa de advertência indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 50 100 L 100 140 L 150 100 L 100 140 L 100 60' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Entroncamento oblíquo à esquerda",
          "Entroncamento oblíquo à direita",
          "Bifurcação",
          "Cruzamento",
        ],
        correct: 1,
        explanation:
          "Placa A-11b (ENTRONCAMENTO OBLÍQUO À DIREITA) - Advertência sobre entroncamento oblíquo à direita.",
      },
      {
        question: "O que esta placa indica?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%230066cc' stroke='%23fff' stroke-width='8'/%3E%3Ctext x='100' y='125' font-family='Arial' font-size='70' font-weight='bold' fill='%23fff' text-anchor='middle'%3E30%3C/text%3E%3C/svg%3E",
        options: [
          "Velocidade máxima",
          "Velocidade mínima obrigatória",
          "Velocidade recomendada",
          "Velocidade média",
        ],
        correct: 1,
        explanation:
          "Placa R-20 (VELOCIDADE MÍNIMA OBRIGATÓRIA) - Indica a velocidade mínima que deve ser mantida na via.",
      },
      {
        question: "Esta placa significa:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 60 80 L 100 80 L 140 80 M 100 80 L 100 140' stroke='%23000' stroke-width='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Cruzamento",
          "Interseção em T",
          "Bifurcação",
          "Via sem saída",
        ],
        correct: 1,
        explanation:
          "Placa A-9 (INTERSEÇÃO EM T) - Advertência sobre interseção em formato de T.",
      },
      {
        question: "O que esta placa proíbe?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Crect x='60' y='50' width='80' height='60' rx='8' fill='none' stroke='%23000' stroke-width='6'/%3E%3Crect x='70' y='60' width='25' height='30' rx='3' fill='%23000'/%3E%3Crect x='105' y='60' width='25' height='30' rx='3' fill='%23000'/%3E%3Ccircle cx='75' cy='125' r='12' fill='%23000'/%3E%3Ccircle cx='95' cy='125' r='12' fill='%23000'/%3E%3Ccircle cx='105' cy='125' r='12' fill='%23000'/%3E%3Ccircle cx='125' cy='125' r='12' fill='%23000'/%3E%3Cline x1='40' y1='60' x2='160' y2='140' stroke='%23ff0000' stroke-width='10'/%3E%3C/svg%3E",
        options: [
          "Trânsito de ônibus",
          "Trânsito de caminhões",
          "Trânsito de carretas",
          "Veículos pesados",
        ],
        correct: 1,
        explanation:
          "Placa R-9 (PROIBIDO TRÂNSITO DE CAMINHÕES) - Proíbe a circulação de caminhões.",
      },
      {
        question: "Esta placa indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 100 60 L 60 100 L 100 100 M 100 60 L 140 100 L 100 100 M 100 100 L 100 140' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Cruzamento",
          "Bifurcação em Y",
          "Interseção",
          "Entroncamento",
        ],
        correct: 1,
        explanation:
          "Placa A-10b (BIFURCAÇÃO EM Y) - Advertência sobre bifurcação da via em formato de Y.",
      },
      {
        question: "O que significa esta placa?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Ctext x='100' y='125' font-family='Arial' font-size='70' font-weight='bold' fill='%23000' text-anchor='middle'%3E30%3C/text%3E%3C/svg%3E",
        options: [
          "Velocidade mínima 30 km/h",
          "Velocidade máxima 30 km/h",
          "Distância 30m",
          "Peso 30t",
        ],
        correct: 1,
        explanation:
          "Placa R-19 (VELOCIDADE MÁXIMA PERMITIDA) - Indica velocidade máxima permitida de 30 km/h na via.",
      },
      {
        question: "Esta placa de advertência indica:",
        image: "/images/coeficiencia-esquerda.png",
        options: [
          "Cruzamento",
          "Confluência à esquerda",
          "Bifurcação",
          "Entroncamento",
        ],
        correct: 1,
        explanation:
          "Placa A-13a (CONFLUÊNCIA À ESQUERDA) - Advertência sobre confluência de vias à esquerda.",
      },
      {
        question: "O que esta placa indica?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%230066cc' stroke='%23fff' stroke-width='8'/%3E%3Cpath d='M 100 140 L 100 60 M 85 75 L 100 60 L 115 75' stroke='%23fff' stroke-width='12' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Sentido proibido",
          "Siga em frente",
          "Preferencial",
          "Retorno obrigatório",
        ],
        correct: 1,
        explanation:
          "Placa R-24b (SIGA EM FRENTE) - Indica que o condutor deve seguir em frente obrigatoriamente.",
      },
      {
        question: "Esta placa significa:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 140 100 L 100 60 L 60 100' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M 100 100 L 100 140' stroke='%23000' stroke-width='10' stroke-linecap='round'/%3E%3C/svg%3E",
        options: [
          "Cruzamento",
          "Confluência à direita",
          "Bifurcação",
          "Entroncamento",
        ],
        correct: 1,
        explanation:
          "Placa A-10d (CONFLUÊNCIA À DIREITA) - Advertência sobre confluência de vias à direita.",
      },
      {
        question: "O que esta placa proíbe?",
        image: "/images/proibe-transito.png",
        options: [
          "Trânsito de caminhões",
          "Trânsito de ônibus",
          "Transporte coletivo",
          "Veículos grandes",
        ],
        correct: 1,
        explanation:
          "Placa R-38 (PROIBIDO TRÂNSITO DE ÔNIBUS) - Proíbe a circulação de ônibus.",
      },
      {
        question: "Esta placa indica:",
        image: "/images/placa-a-30-b-1-610x610.png",
        options: [
          "Ciclovia",
          "Área com deslocamento de ciclistas",
          "Bicicletário",
          "Proibido bicicletas",
        ],
        correct: 1,
        explanation:
          "Placa A-30b (ÁREA COM DESLOCAMENTO DE CICLISTAS) - Advertência sobre área com circulação de ciclistas.",
      },
      {
        question: "O que significa esta placa?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Ctext x='100' y='125' font-family='Arial' font-size='70' font-weight='bold' fill='%23000' text-anchor='middle'%3E70%3C/text%3E%3C/svg%3E",
        options: [
          "Velocidade mínima 70 km/h",
          "Velocidade máxima 70 km/h",
          "Distância 70m",
          "Peso 70t",
        ],
        correct: 1,
        explanation:
          "Placa R-19 (VELOCIDADE MÁXIMA PERMITIDA) - Indica velocidade máxima permitida de 70 km/h na via.",
      },
      {
        question: "Esta placa de advertência indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Ccircle cx='70' cy='80' r='12' fill='%23000'/%3E%3Cline x1='70' y1='92' x2='70' y2='115' stroke='%23000' stroke-width='7'/%3E%3Cline x1='70' y1='115' x2='60' y2='140' stroke='%23000' stroke-width='7'/%3E%3Cline x1='70' y1='115' x2='80' y2='140' stroke='%23000' stroke-width='7'/%3E%3Cline x1='70' y1='100' x2='60' y2='108' stroke='%23000' stroke-width='5'/%3E%3Cline x1='70' y1='100' x2='80' y2='108' stroke='%23000' stroke-width='5'/%3E%3Ccircle cx='130' cy='80' r='12' fill='%23000'/%3E%3Cline x1='130' y1='92' x2='130' y2='115' stroke='%23000' stroke-width='7'/%3E%3Cline x1='130' y1='115' x2='120' y2='140' stroke='%23000' stroke-width='7'/%3E%3Cline x1='130' y1='115' x2='140' y2='140' stroke='%23000' stroke-width='7'/%3E%3Cline x1='130' y1='100' x2='120' y2='108' stroke='%23000' stroke-width='5'/%3E%3Cline x1='130' y1='100' x2='140' y2='108' stroke='%23000' stroke-width='5'/%3E%3C/svg%3E",
        options: [
          "Passagem de pedestres",
          "Área com deslocamento de pedestres",
          "Calçada",
          "Parque",
        ],
        correct: 1,
        explanation:
          "Placa A-30b (ÁREA COM DESLOCAMENTO DE PEDESTRES) - Advertência sobre área com grande circulação de pedestres.",
      },
    ],
    medio: [
      {
        question: "Esta placa de advertência indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 60 100 Q 60 60 100 60 Q 140 60 140 100' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round'/%3E%3Cpath d='M 130 90 L 140 100 L 130 110' stroke='%23000' stroke-width='8' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Curva suave à esquerda",
          "Curva acentuada à esquerda",
          "Retorno obrigatório",
          "Pista sinuosa",
        ],
        correct: 1,
        explanation:
          "Placa A-2a (CURVA ACENTUADA À ESQUERDA) - Advertência sobre curva acentuada à esquerda. Reduzir velocidade.",
      },
      {
        question: "O que significa esta placa de regulamentação?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Ctext x='100' y='110' font-family='Arial' font-size='50' font-weight='bold' fill='%23000' text-anchor='middle'%3E4,4t%3C/text%3E%3C/svg%3E",
        options: [
          "Altura máxima 4,4m",
          "Peso bruto total máximo 4,4t",
          "Largura máxima 4,4m",
          "Comprimento máximo 4,4m",
        ],
        correct: 1,
        explanation:
          "Placa R-12 (PESO BRUTO TOTAL MÁXIMO PERMITIDO) - Indica o peso bruto total máximo permitido para veículos.",
      },
      {
        question: "Esta placa indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 60 80 L 100 120 L 140 80' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ctext x='100' y='155' font-family='Arial' font-size='35' font-weight='bold' fill='%23000' text-anchor='middle'%3E10%25%3C/text%3E%3C/svg%3E",
        options: ["Aclive", "Declive", "Pista plana", "Lombada"],
        correct: 1,
        explanation:
          "Placa A-20a (DECLIVE) - Advertência sobre descida acentuada. Usar marcha reduzida e freio motor.",
      },
      {
        question: "O que esta placa de regulamentação proíbe?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Cpath d='M 70 100 Q 80 80 100 80 Q 120 80 130 100' stroke='%23000' stroke-width='6' fill='none'/%3E%3Cpath d='M 85 95 L 95 105 M 105 105 L 115 95' stroke='%23000' stroke-width='4'/%3E%3Cpath d='M 60 120 Q 100 130 140 120' stroke='%23000' stroke-width='6' fill='none'/%3E%3Cline x1='40' y1='60' x2='160' y2='140' stroke='%23ff0000' stroke-width='10'/%3E%3C/svg%3E",
        options: [
          "Usar farol alto",
          "Acionar buzina ou sinal sonoro",
          "Usar telefone",
          "Fumar",
        ],
        correct: 1,
        explanation:
          "Placa R-17 (PROIBIDO ACIONAR BUZINA OU SINAL SONORO) - Proíbe o uso de buzina, exceto em situações de emergência.",
      },
      {
        question: "Esta placa de advertência significa:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 50 110 Q 70 90 100 90 Q 130 90 150 110' stroke='%23000' stroke-width='8' fill='none'/%3E%3Cpath d='M 60 120 L 140 120' stroke='%23000' stroke-width='8'/%3E%3Cpath d='M 70 130 Q 80 125 90 130 Q 100 135 110 130 Q 120 125 130 130' stroke='%23000' stroke-width='6' fill='none'/%3E%3C/svg%3E",
        options: [
          "Pista molhada",
          "Pista escorregadia",
          "Pista irregular",
          "Obras",
        ],
        correct: 1,
        explanation:
          "Placa A-12 (PISTA ESCORREGADIA) - Advertência sobre pista com baixa aderência. Reduzir velocidade e evitar freadas bruscas.",
      },
      {
        question: "O que indica esta placa?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Cpath d='M 100 50 L 100 150 M 80 70 L 100 50 L 120 70' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ctext x='100' y='170' font-family='Arial' font-size='30' font-weight='bold' fill='%23000' text-anchor='middle'%3E4,4m%3C/text%3E%3C/svg%3E",
        options: [
          "Largura máxima",
          "Altura máxima permitida",
          "Comprimento máximo",
          "Peso máximo",
        ],
        correct: 1,
        explanation:
          "Placa R-15 (ALTURA MÁXIMA PERMITIDA) - Indica a altura máxima permitida para veículos passarem.",
      },
      {
        question: "Esta placa de advertência indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Ccircle cx='70' cy='80' r='12' fill='%23000'/%3E%3Cline x1='70' y1='92' x2='70' y2='115' stroke='%23000' stroke-width='7'/%3E%3Cline x1='70' y1='115' x2='60' y2='140' stroke='%23000' stroke-width='7'/%3E%3Cline x1='70' y1='115' x2='80' y2='140' stroke='%23000' stroke-width='7'/%3E%3Cline x1='70' y1='100' x2='60' y2='108' stroke='%23000' stroke-width='5'/%3E%3Cline x1='70' y1='100' x2='80' y2='108' stroke='%23000' stroke-width='5'/%3E%3Ccircle cx='130' cy='80' r='12' fill='%23000'/%3E%3Cline x1='130' y1='92' x2='130' y2='115' stroke='%23000' stroke-width='7'/%3E%3Cline x1='130' y1='115' x2='120' y2='140' stroke='%23000' stroke-width='7'/%3E%3Cline x1='130' y1='115' x2='140' y2='140' stroke='%23000' stroke-width='7'/%3E%3Cline x1='130' y1='100' x2='120' y2='108' stroke='%23000' stroke-width='5'/%3E%3Cline x1='130' y1='100' x2='140' y2='108' stroke='%23000' stroke-width='5'/%3E%3C/svg%3E",
        options: [
          "Passagem de pedestres",
          "Área com deslocamento de pedestres",
          "Calçada",
          "Parque",
        ],
        correct: 1,
        explanation:
          "Placa A-30b (ÁREA COM DESLOCAMENTO DE PEDESTRES) - Advertência sobre área com grande circulação de pedestres.",
      },
      {
        question: "O que significa esta placa?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Cpath d='M 50 100 L 150 100 M 70 80 L 50 100 L 70 120' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M 130 80 L 150 100 L 130 120' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ctext x='100' y='170' font-family='Arial' font-size='28' font-weight='bold' fill='%23000' text-anchor='middle'%3E2,2m%3C/text%3E%3C/svg%3E",
        options: [
          "Altura máxima",
          "Largura máxima permitida",
          "Comprimento máximo",
          "Distância mínima",
        ],
        correct: 1,
        explanation:
          "Placa R-14 (LARGURA MÁXIMA PERMITIDA) - Indica a largura máxima permitida para veículos.",
      },
      {
        question: "Esta placa de advertência indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 70 80 L 90 100 L 70 120 M 110 80 L 130 100 L 110 120' stroke='%23000' stroke-width='8' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Crect x='60' y='130' width='80' height='20' fill='%23000'/%3E%3C/svg%3E",
        options: ["Manutenção", "Obras na pista", "Desvio", "Pista irregular"],
        correct: 1,
        explanation:
          "Placa A-24 (OBRAS) - Advertência sobre obras na via. Reduzir velocidade e redobrar atenção.",
      },
      {
        question: "O que esta placa proíbe?",
        image: "/images/proibicao-veiculos-automotores.png",
        options: [
          "Trânsito de bicicletas",
          "Trânsito de veículos automotores",
          "Trânsito de pedestres",
          "Trânsito de motos",
        ],
        correct: 1,
        explanation:
          "Placa R-10 (PROIBIDO TRÂNSITO DE VEÍCULOS AUTOMOTORES) - Proíbe a circulação de todos os veículos automotores.",
      },
      {
        question: "Esta placa de advertência significa:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 140 100 Q 140 60 100 60 Q 60 60 60 100' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round'/%3E%3Cpath d='M 70 90 L 60 100 L 70 110' stroke='%23000' stroke-width='8' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Curva suave à direita",
          "Curva acentuada à direita",
          "Retorno à direita",
          "Desvio à direita",
        ],
        correct: 1,
        explanation:
          "Placa A-3a (CURVA ACENTUADA À DIREITA) - Advertência sobre curva acentuada à direita. Reduzir velocidade.",
      },
      {
        question: "O que indica esta placa de regulamentação?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%230066cc' stroke='%23fff' stroke-width='8'/%3E%3Ctext x='100' y='125' font-family='Arial' font-size='70' font-weight='bold' fill='%23fff' text-anchor='middle'%3E40%3C/text%3E%3C/svg%3E",
        options: [
          "Velocidade máxima",
          "Velocidade mínima obrigatória",
          "Velocidade recomendada",
          "Velocidade média",
        ],
        correct: 1,
        explanation:
          "Placa R-20 (VELOCIDADE MÍNIMA OBRIGATÓRIA) - Indica a velocidade mínima que deve ser mantida na via.",
      },
      {
        question: "Esta placa de advertência indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 50 80 L 100 80 M 100 80 L 150 80 M 100 60 L 100 140' stroke='%23000' stroke-width='10' stroke-linecap='round'/%3E%3Crect x='95' y='75' width='10' height='70' fill='%23000'/%3E%3C/svg%3E",
        options: ["Mão dupla", "Pista dividida", "Duas pistas", "Bifurcação"],
        correct: 1,
        explanation:
          "Placa A-13a (PISTA DIVIDIDA) - Advertência sobre início de pista dividida por canteiro ou barreira.",
      },
      {
        question: "O que esta placa proíbe?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Crect x='60' y='50' width='80' height='60' rx='8' fill='none' stroke='%23000' stroke-width='6'/%3E%3Crect x='70' y='60' width='25' height='30' rx='3' fill='%23000'/%3E%3Crect x='105' y='60' width='25' height='30' rx='3' fill='%23000'/%3E%3Ccircle cx='75' cy='125' r='12' fill='%23000'/%3E%3Ccircle cx='95' cy='125' r='12' fill='%23000'/%3E%3Ccircle cx='105' cy='125' r='12' fill='%23000'/%3E%3Ccircle cx='125' cy='125' r='12' fill='%23000'/%3E%3Cline x1='40' y1='60' x2='160' y2='140' stroke='%23ff0000' stroke-width='10'/%3E%3C/svg%3E",
        options: [
          "Trânsito de ônibus",
          "Trânsito de caminhões",
          "Trânsito de carretas",
          "Veículos pesados",
        ],
        correct: 1,
        explanation:
          "Placa R-9 (PROIBIDO TRÂNSITO DE CAMINHÕES) - Proíbe a circulação de caminhões.",
      },
      {
        question: "Esta placa de advertência significa:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 140 120 L 100 80 L 60 120' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ctext x='100' y='155' font-family='Arial' font-size='35' font-weight='bold' fill='%23000' text-anchor='middle'%3E10%25%3C/text%3E%3C/svg%3E",
        options: ["Declive", "Aclive", "Lombada", "Depressão"],
        correct: 1,
        explanation:
          "Placa A-19 (ACLIVE) - Advertência sobre subida acentuada. Usar marcha adequada.",
      },
      {
        question: "O que indica esta placa?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Cpath d='M 60 80 L 80 100 L 60 120 M 100 70 L 120 70 L 130 90 L 120 110 L 100 110 L 90 90 Z' stroke='%23000' stroke-width='6' fill='none'/%3E%3Cline x1='40' y1='60' x2='160' y2='140' stroke='%23ff0000' stroke-width='10'/%3E%3C/svg%3E",
        options: [
          "Proibido animais",
          "Proibido trânsito de veículos de tração animal",
          "Proibido carroças",
          "Área rural",
        ],
        correct: 1,
        explanation:
          "Placa R-11 (PROIBIDO TRÂNSITO DE VEÍCULOS DE TRAÇÃO ANIMAL) - Proíbe a circulação de veículos de tração animal.",
      },
      {
        question: "Esta placa de advertência indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 50 70 L 100 70 L 150 70 M 70 110 L 100 110 L 130 110' stroke='%23000' stroke-width='10' stroke-linecap='round'/%3E%3Cpath d='M 50 70 L 70 110 M 150 70 L 130 110' stroke='%23000' stroke-width='10' stroke-linecap='round'/%3E%3C/svg%3E",
        options: [
          "Pista larga",
          "Estreitamento de pista ao centro",
          "Pista dupla",
          "Bifurcação",
        ],
        correct: 1,
        explanation:
          "Placa A-15 (ESTREITAMENTO DE PISTA AO CENTRO) - Advertência sobre redução da largura da pista ao centro.",
      },
      {
        question: "O que esta placa de regulamentação indica?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Crect x='50' y='85' width='100' height='30' rx='5' fill='none' stroke='%23000' stroke-width='8'/%3E%3Ctext x='100' y='165' font-family='Arial' font-size='28' font-weight='bold' fill='%23000' text-anchor='middle'%3E18m%3C/text%3E%3C/svg%3E",
        options: [
          "Largura máxima",
          "Comprimento máximo permitido",
          "Altura máxima",
          "Distância máxima",
        ],
        correct: 1,
        explanation:
          "Placa R-13 (COMPRIMENTO MÁXIMO PERMITIDO) - Indica o comprimento máximo permitido para veículos.",
      },
      {
        question: "Esta placa de advertência significa:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Ccircle cx='100' cy='90' r='30' fill='none' stroke='%23000' stroke-width='8'/%3E%3Ccircle cx='90' cy='85' r='3' fill='%23000'/%3E%3Ccircle cx='110' cy='85' r='3' fill='%23000'/%3E%3Cpath d='M 85 100 Q 100 110 115 100' stroke='%23000' stroke-width='4' fill='none'/%3E%3Ccircle cx='70' cy='140' r='15' fill='none' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 70 125 L 70 115 M 85 140 L 95 140' stroke='%23000' stroke-width='4'/%3E%3Ccircle cx='130' cy='140' r='15' fill='none' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 130 125 L 130 115 M 145 140 L 155 140' stroke='%23000' stroke-width='4'/%3E%3Cpath d='M 85 140 L 115 140' stroke='%23000' stroke-width='6'/%3E%3C/svg%3E",
        options: [
          "Ciclovia",
          "Área com deslocamento de ciclistas",
          "Bicicletário",
          "Proibido bicicletas",
        ],
        correct: 1,
        explanation:
          "Placa A-34 (ÁREA COM DESLOCAMENTO DE CICLISTAS) - Advertência sobre área com circulação de ciclistas.",
      },
      {
        question: "O que esta placa proíbe?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Crect x='50' y='50' width='100' height='70' rx='10' fill='none' stroke='%23000' stroke-width='6'/%3E%3Crect x='60' y='60' width='35' height='40' rx='5' fill='%23000'/%3E%3Crect x='105' y='60' width='35' height='40' rx='5' fill='%23000'/%3E%3Ccircle cx='70' cy='135' r='10' fill='%23000'/%3E%3Ccircle cx='90' cy='135' r='10' fill='%23000'/%3E%3Ccircle cx='110' cy='135' r='10' fill='%23000'/%3E%3Ccircle cx='130' cy='135' r='10' fill='%23000'/%3E%3Cline x1='40' y1='60' x2='160' y2='140' stroke='%23ff0000' stroke-width='10'/%3E%3C/svg%3E",
        options: [
          "Trânsito de caminhões",
          "Trânsito de ônibus",
          "Transporte coletivo",
          "Veículos grandes",
        ],
        correct: 1,
        explanation:
          "Placa R-8b (PROIBIDO TRÂNSITO DE ÔNIBUS) - Proíbe a circulação de ônibus.",
      },
      {
        question: "Esta placa de advertência indica:",
        image: "/images/estreitamento-direita.png",
        options: [
          "Curva à direita",
          "Estreitamento de pista à direita",
          "Desvio à direita",
          "Acostamento",
        ],
        correct: 1,
        explanation:
          "Placa A-21c (ESTREITAMENTO DE PISTA À DIREITA) - Advertência sobre redução da largura da pista do lado direito.",
      },
      {
        question: "O que significa esta placa?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Cpath d='M 100 60 L 100 140 M 80 120 L 100 140 L 120 120' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M 60 80 Q 100 90 140 80' stroke='%23000' stroke-width='8' fill='none'/%3E%3Cline x1='40' y1='60' x2='160' y2='140' stroke='%23ff0000' stroke-width='10'/%3E%3C/svg%3E",
        options: [
          "Retorno permitido",
          "Proibido retornar",
          "Retorno obrigatório",
          "Conversão permitida",
        ],
        correct: 1,
        explanation:
          "Placa R-5b (PROIBIDO RETORNAR À DIREITA) - Proíbe retorno à direita.",
      },
      {
        question: "Esta placa indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 140 60 Q 100 70 80 90 Q 60 110 80 130 Q 100 150 140 140' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round'/%3E%3C/svg%3E",
        options: [
          "Curva à esquerda",
          "Pista sinuosa à esquerda",
          "Desvio",
          "Retorno",
        ],
        correct: 1,
        explanation:
          "Placa A-18 (PISTA SINUOSA À ESQUERDA) - Advertência sobre sequência de curvas, iniciando pela esquerda.",
      },
      {
        question: "O que esta placa proíbe?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Crect x='70' y='60' width='60' height='50' rx='5' fill='none' stroke='%23000' stroke-width='6'/%3E%3Crect x='80' y='70' width='15' height='25' rx='3' fill='%23000'/%3E%3Crect x='105' y='70' width='15' height='25' rx='3' fill='%23000'/%3E%3Ccircle cx='85' cy='125' r='10' fill='%23000'/%3E%3Ccircle cx='115' cy='125' r='10' fill='%23000'/%3E%3Cline x1='40' y1='60' x2='160' y2='140' stroke='%23ff0000' stroke-width='10'/%3E%3C/svg%3E",
        options: [
          "Trânsito de caminhões",
          "Trânsito de veículos de carga",
          "Trânsito de ônibus",
          "Veículos pesados",
        ],
        correct: 1,
        explanation:
          "Placa R-8c (PROIBIDO TRÂNSITO DE VEÍCULOS DE CARGA) - Proíbe a circulação de veículos de carga.",
      },
      {
        question: "Esta placa de advertência significa:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 60 60 Q 100 70 120 90 Q 140 110 120 130 Q 100 150 60 140' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round'/%3E%3C/svg%3E",
        options: [
          "Curva à direita",
          "Pista sinuosa à direita",
          "Desvio",
          "Retorno",
        ],
        correct: 1,
        explanation:
          "Placa A-6 (PISTA SINUOSA À DIREITA) - Advertência sobre sequência de curvas, iniciando pela direita.",
      },
      {
        question: "O que indica esta placa?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%230066cc' stroke='%23fff' stroke-width='8'/%3E%3Cpath d='M 70 100 L 130 100 M 115 85 L 130 100 L 115 115' stroke='%23fff' stroke-width='12' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Vire à direita",
          "Conserve-se à direita",
          "Passe à direita",
          "Acostamento à direita",
        ],
        correct: 1,
        explanation:
          "Placa R-23 (CONSERVE-SE À DIREITA) - Obriga os veículos a circularem pela direita da pista.",
      },
      {
        question: "Esta placa significa:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 140 60 Q 80 70 80 100 Q 80 130 140 140' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round'/%3E%3C/svg%3E",
        options: [
          "Pista sinuosa",
          "Curva em S à esquerda",
          "Duas curvas",
          "Zigue-zague",
        ],
        correct: 1,
        explanation:
          "Placa A-4a (CURVA EM S À ESQUERDA) - Advertência sobre curva em formato de S, iniciando pela esquerda.",
      },
      {
        question: "O que esta placa proíbe?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Ccircle cx='100' cy='85' r='18' fill='none' stroke='%23000' stroke-width='6'/%3E%3Cline x1='100' y1='103' x2='100' y2='125' stroke='%23000' stroke-width='8'/%3E%3Cline x1='100' y1='125' x2='85' y2='145' stroke='%23000' stroke-width='8'/%3E%3Cline x1='100' y1='125' x2='115' y2='145' stroke='%23000' stroke-width='8'/%3E%3Cline x1='100' y1='110' x2='85' y2='118' stroke='%23000' stroke-width='6'/%3E%3Cline x1='100' y1='110' x2='115' y2='118' stroke='%23000' stroke-width='6'/%3E%3Ccircle cx='70' cy='85' r='12' fill='none' stroke='%23000' stroke-width='5'/%3E%3Ccircle cx='130' cy='85' r='12' fill='none' stroke='%23000' stroke-width='5'/%3E%3Cline x1='40' y1='60' x2='160' y2='140' stroke='%23ff0000' stroke-width='10'/%3E%3C/svg%3E",
        options: [
          "Trânsito de pedestres",
          "Trânsito de pedestres e bicicletas",
          "Ciclovia",
          "Calçada",
        ],
        correct: 1,
        explanation:
          "Placa R-34 (CIRCULAÇÃO EXCLUSIVA DE PEDESTRES E CICLISTAS) - Proíbe trânsito de veículos, permitindo apenas pedestres e ciclistas.",
      },
      {
        question: "Esta placa indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 60 60 Q 120 70 120 100 Q 120 130 60 140' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round'/%3E%3C/svg%3E",
        options: [
          "Pista sinuosa",
          "Curva em S à direita",
          "Duas curvas",
          "Desvio",
        ],
        correct: 1,
        explanation:
          "Placa A-5a (CURVA EM S À DIREITA) - Advertência sobre curva em formato de S, iniciando pela direita.",
      },
      {
        question: "O que significa esta placa?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%230066cc' stroke='%23fff' stroke-width='8'/%3E%3Cpath d='M 130 100 L 100 100 L 100 60 M 85 75 L 100 60 L 115 75' stroke='%23fff' stroke-width='12' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Permitido virar à esquerda",
          "Vire à esquerda obrigatoriamente",
          "Retorne à esquerda",
          "Preferência à esquerda",
        ],
        correct: 1,
        explanation:
          "Placa R-25a (VIRE À ESQUERDA) - Obriga o condutor a virar à esquerda.",
      },
      {
        question: "Esta placa de advertência indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 40 80 L 160 80' stroke='%23000' stroke-width='8'/%3E%3Cpath d='M 40 100 Q 60 120 100 120 Q 140 120 160 100' stroke='%23000' stroke-width='8' fill='none'/%3E%3C/svg%3E",
        options: ["Lombada", "Depressão na pista", "Buraco", "Valeta"],
        correct: 1,
        explanation:
          "Placa A-7b (DEPRESSÃO) - Advertência sobre depressão ou rebaixamento na pista. Reduzir velocidade.",
      },
      {
        question: "O que esta placa indica?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%230066cc' stroke='%23fff' stroke-width='8'/%3E%3Cpath d='M 70 100 L 100 100 L 100 60 M 85 75 L 100 60 L 115 75' stroke='%23fff' stroke-width='12' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Permitido virar à direita",
          "Vire à direita obrigatoriamente",
          "Desvio à direita",
          "Preferência à direita",
        ],
        correct: 1,
        explanation:
          "Placa R-25b (VIRE À DIREITA) - Obriga o condutor a virar à direita.",
      },
      {
        question: "Esta placa significa:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 50 70 L 100 70 L 150 70 M 70 110 L 100 110 L 130 110' stroke='%23000' stroke-width='10' stroke-linecap='round'/%3E%3Cpath d='M 50 70 L 70 110' stroke='%23000' stroke-width='10' stroke-linecap='round'/%3E%3C/svg%3E",
        options: [
          "Curva à esquerda",
          "Estreitamento de pista à esquerda",
          "Desvio à esquerda",
          "Pista irregular",
        ],
        correct: 1,
        explanation:
          "Placa A-16 (ESTREITAMENTO DE PISTA À ESQUERDA) - Advertência sobre redução da largura da pista do lado esquerdo.",
      },
      {
        question: "O que esta placa proíbe?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Ccircle cx='100' cy='90' r='25' fill='none' stroke='%23000' stroke-width='6'/%3E%3Ccircle cx='90' cy='85' r='3' fill='%23000'/%3E%3Ccircle cx='110' cy='85' r='3' fill='%23000'/%3E%3Cpath d='M 85 100 Q 100 110 115 100' stroke='%23000' stroke-width='4' fill='none'/%3E%3Cpath d='M 70 120 L 80 130 L 90 120 M 110 120 L 120 130 L 130 120' stroke='%23000' stroke-width='6' fill='none'/%3E%3Cline x1='40' y1='60' x2='160' y2='140' stroke='%23ff0000' stroke-width='10'/%3E%3C/svg%3E",
        options: [
          "Trânsito de pedestres",
          "Trânsito de motocicletas, motonetas e ciclomotores",
          "Trânsito de bicicletas",
          "Trânsito de veículos",
        ],
        correct: 1,
        explanation:
          "Placa R-32 (PROIBIDO TRÂNSITO DE MOTOCICLETAS, MOTONETAS E CICLOMOTORES) - Proíbe a circulação desses veículos.",
      },
      {
        question: "Esta placa indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 100 50 L 100 80 M 100 80 L 60 120 M 100 80 L 140 120' stroke='%23000' stroke-width='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: ["Cruzamento", "Via lateral", "Bifurcação", "Entroncamento"],
        correct: 1,
        explanation:
          "Placa A-8 (VIA LATERAL) - Advertência sobre interseção com via lateral.",
      },
      {
        question: "O que significa esta placa?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%230066cc' stroke='%23fff' stroke-width='8'/%3E%3Cpath d='M 100 140 L 100 60 M 85 75 L 100 60 L 115 75' stroke='%23fff' stroke-width='10' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M 130 100 L 100 100 M 85 85 L 100 100 L 85 115' stroke='%23fff' stroke-width='10' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Vire à esquerda",
          "Siga em frente ou à esquerda",
          "Retorne",
          "Bifurcação",
        ],
        correct: 1,
        explanation:
          "Placa R-25c (SIGA EM FRENTE OU À ESQUERDA) - Permite seguir em frente ou virar à esquerda.",
      },
      {
        question: "Esta placa de advertência indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 60 80 L 100 80 L 140 80 M 100 80 L 100 140' stroke='%23000' stroke-width='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Cruzamento",
          "Interseção em T",
          "Bifurcação",
          "Via sem saída",
        ],
        correct: 1,
        explanation:
          "Placa A-9 (INTERSEÇÃO EM T) - Advertência sobre interseção em formato de T.",
      },
      {
        question: "O que esta placa indica?",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%230066cc' stroke='%23fff' stroke-width='8'/%3E%3Cpath d='M 100 140 L 100 60 M 85 75 L 100 60 L 115 75' stroke='%23fff' stroke-width='10' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M 70 100 L 100 100 M 115 85 L 100 100 L 115 115' stroke='%23fff' stroke-width='10' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Vire à direita",
          "Siga em frente ou à direita",
          "Desvio",
          "Bifurcação",
        ],
        correct: 1,
        explanation:
          "Placa R-26 (SIGA EM FRENTE OU À DIREITA) - Permite seguir em frente ou virar à direita.",
      },
      {
        question: "Esta placa significa:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 100 60 L 100 140 M 90 70 L 100 60 L 110 70 M 90 130 L 100 140 L 110 130' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Pista dupla",
          "Mão dupla adiante",
          "Bifurcação",
          "Cruzamento",
        ],
        correct: 1,
        explanation:
          "Placa A-26a (MÃO DUPLA ADIANTE) - Advertência sobre início de trecho com trânsito nos dois sentidos.",
      },
      {
        question: "O que esta placa proíbe?",
        image: "/images/proibe-transito-tratores.png",
        options: [
          "Trânsito de caminhões",
          "Trânsito de tratores",
          "Trânsito de máquinas",
          "Veículos agrícolas",
        ],
        correct: 1,
        explanation:
          "Placa R-13 (PROIBIDO TRÂNSITO DE MÁQUINAS AGRÍCOLAS E DE TRATORES) - Proíbe a circulação desses veículos.",
      },
      {
        question: "Esta placa indica:",
        image: "/images/entroncamento-esquerda.png",
        options: [
          "Entroncamento oblíquo à esquerda",
          "Entroncamento oblíquo à direita",
          "Bifurcação",
          "Cruzamento",
        ],
        correct: 0,
        explanation:
          "Placa A-10a (ENTRONCAMENTO OBLÍQUO À ESQUERDA) - Advertência sobre entroncamento oblíquo à esquerda.",
      },
      {
        question: "O que significa esta placa?",
        image: "/images/peso-maximo-permitido.png",
        options: [
          "Peso máximo por eixo",
          "Peso bruto total combinado máximo permitido",
          "Peso da carga",
          "Tonelagem máxima",
        ],
        correct: 1,
        explanation:
          "Placa R-14 (PESO BRUTO TOTAL COMBINADO MÁXIMO PERMITIDO) - Indica o peso bruto total combinado máximo permitido para veículos articulados.",
      },
      {
        question: "Esta placa de advertência indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 50 100 L 100 140 L 150 100 L 100 140 L 100 60' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Entroncamento oblíquo à esquerda",
          "Entroncamento oblíquo à direita",
          "Bifurcação",
          "Cruzamento",
        ],
        correct: 1,
        explanation:
          "Placa A-11b (ENTRONCAMENTO OBLÍQUO À DIREITA) - Advertência sobre entroncamento oblíquo à direita.",
      },
      {
        question: "O que esta placa indica?",
        image: "/images/obrigatorio-correntes.png",
        options: [
          "Pneus especiais",
          "Uso obrigatório de correntes",
          "Tração 4x4",
          "Pista escorregadia",
        ],
        correct: 1,
        explanation:
          "Placa R-22 (USO OBRIGATÓRIO DE CORRENTES) - Obriga o uso de correntes nos pneus em condições de neve ou gelo.",
      },
    ],
    dificil: [
      {
        question:
          "Segundo o CTB, a placa R-6c (estacionamento regulamentado) permite estacionar:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%230066cc' stroke='%23fff' stroke-width='8'/%3E%3Ctext x='100' y='125' font-family='Arial' font-size='80' font-weight='bold' fill='%23fff' text-anchor='middle'%3EE%3C/text%3E%3C/svg%3E",
        options: [
          "Livremente sem restrições",
          "Apenas nos horários e condições indicados na placa complementar",
          "Apenas para veículos oficiais",
          "Apenas mediante pagamento",
        ],
        correct: 1,
        explanation:
          "Placa R-6c (ESTACIONAMENTO REGULAMENTADO) - Permite estacionamento apenas nos horários e condições especificados em placa complementar.",
      },
      {
        question: "A placa A-26a indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 100 60 L 100 140 M 90 70 L 100 60 L 110 70 M 90 130 L 100 140 L 110 130' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Pista dupla",
          "Mão dupla adiante",
          "Bifurcação",
          "Cruzamento",
        ],
        correct: 1,
        explanation:
          "Placa A-26a (MÃO DUPLA ADIANTE) - Advertência sobre início de trecho com trânsito nos dois sentidos.",
      },
      {
        question:
          "A placa R-18 (PESO BRUTO TOTAL COMBINADO MÁXIMO PERMITIDO) indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Ctext x='100' y='90' font-family='Arial' font-size='35' font-weight='bold' fill='%23000' text-anchor='middle'%3EPBTC%3C/text%3E%3Ctext x='100' y='135' font-family='Arial' font-size='45' font-weight='bold' fill='%23000' text-anchor='middle'%3E45t%3C/text%3E%3C/svg%3E",
        options: [
          "Peso máximo por eixo",
          "Peso bruto total combinado máximo permitido",
          "Peso da carga",
          "Tonelagem máxima",
        ],
        correct: 1,
        explanation:
          "Placa R-18 (PESO BRUTO TOTAL COMBINADO MÁXIMO PERMITIDO) - Indica o peso bruto total combinado máximo permitido para veículos articulados.",
      },
      {
        question:
          "A placa A-16 (ESTREITAMENTO DE PISTA À ESQUERDA) adverte sobre:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 50 70 L 100 70 L 150 70 M 70 110 L 100 110 L 150 110' stroke='%23000' stroke-width='10' stroke-linecap='round'/%3E%3Cpath d='M 50 70 L 70 110' stroke='%23000' stroke-width='10' stroke-linecap='round'/%3E%3C/svg%3E",
        options: [
          "Curva à esquerda",
          "Estreitamento de pista à esquerda",
          "Desvio à esquerda",
          "Pista irregular",
        ],
        correct: 1,
        explanation:
          "Placa A-16 (ESTREITAMENTO DE PISTA À ESQUERDA) - Advertência sobre redução da largura da pista do lado esquerdo.",
      },
      {
        question:
          "A placa R-16 (PROIBIDO TRÂNSITO DE VEÍCULOS COM PESO BRUTO TOTAL SUPERIOR AO INDICADO) significa:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Crect x='60' y='60' width='80' height='50' rx='8' fill='none' stroke='%23000' stroke-width='6'/%3E%3Ccircle cx='75' cy='125' r='10' fill='%23000'/%3E%3Ccircle cx='95' cy='125' r='10' fill='%23000'/%3E%3Ccircle cx='105' cy='125' r='10' fill='%23000'/%3E%3Ccircle cx='125' cy='125' r='10' fill='%23000'/%3E%3Ctext x='100' y='160' font-family='Arial' font-size='24' font-weight='bold' fill='%23000' text-anchor='middle'%3E12t%3C/text%3E%3Cline x1='40' y1='60' x2='160' y2='140' stroke='%23ff0000' stroke-width='10'/%3E%3C/svg%3E",
        options: [
          "Peso máximo recomendado",
          "Proibido trânsito de veículos com peso bruto total superior ao indicado",
          "Balança obrigatória",
          "Pesagem à frente",
        ],
        correct: 1,
        explanation:
          "Placa R-16 (PROIBIDO TRÂNSITO DE VEÍCULOS COM PESO BRUTO TOTAL SUPERIOR AO INDICADO) - Proíbe a circulação de veículos que excedam o peso indicado.",
      },
      {
        question: "A placa A-17 (ESTREITAMENTO DE PISTA À DIREITA) indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 50 70 L 100 70 L 150 70 M 50 110 L 100 110 L 130 110' stroke='%23000' stroke-width='10' stroke-linecap='round'/%3E%3Cpath d='M 150 70 L 130 110' stroke='%23000' stroke-width='10' stroke-linecap='round'/%3E%3C/svg%3E",
        options: [
          "Curva à direita",
          "Estreitamento de pista à direita",
          "Desvio à direita",
          "Acostamento",
        ],
        correct: 1,
        explanation:
          "Placa A-17 (ESTREITAMENTO DE PISTA À DIREITA) - Advertência sobre redução da largura da pista do lado direito.",
      },
      {
        question: "A placa R-21 (ALFÂNDEGA) indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Ctext x='100' y='125' font-family='Arial' font-size='50' font-weight='bold' fill='%23000' text-anchor='middle'%3EALF%3C/text%3E%3C/svg%3E",
        options: [
          "Fronteira",
          "Parada obrigatória para fiscalização alfandegária",
          "Aduana",
          "Posto fiscal",
        ],
        correct: 1,
        explanation:
          "Placa R-21 (ALFÂNDEGA) - Indica parada obrigatória para fiscalização alfandegária.",
      },
      {
        question: "A placa A-18 (PISTA SINUOSA À ESQUERDA) adverte sobre:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 140 60 Q 100 70 80 90 Q 60 110 80 130 Q 100 150 140 140' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round'/%3E%3C/svg%3E",
        options: [
          "Curva à esquerda",
          "Pista sinuosa à esquerda",
          "Desvio",
          "Retorno",
        ],
        correct: 1,
        explanation:
          "Placa A-18 (PISTA SINUOSA À ESQUERDA) - Advertência sobre sequência de curvas, iniciando pela esquerda.",
      },
      {
        question: "A placa R-22 (USO OBRIGATÓRIO DE CORRENTES) significa:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%230066cc' stroke='%23fff' stroke-width='8'/%3E%3Ccircle cx='100' cy='100' r='40' fill='none' stroke='%23fff' stroke-width='8'/%3E%3Cpath d='M 70 100 L 60 90 M 70 100 L 60 110 M 130 100 L 140 90 M 130 100 L 140 110' stroke='%23fff' stroke-width='6' stroke-linecap='round'/%3E%3Ccircle cx='80' cy='80' r='8' fill='none' stroke='%23fff' stroke-width='4'/%3E%3Ccircle cx='120' cy='80' r='8' fill='none' stroke='%23fff' stroke-width='4'/%3E%3Ccircle cx='80' cy='120' r='8' fill='none' stroke='%23fff' stroke-width='4'/%3E%3Ccircle cx='120' cy='120' r='8' fill='none' stroke='%23fff' stroke-width='4'/%3E%3C/svg%3E",
        options: [
          "Pneus especiais",
          "Uso obrigatório de correntes",
          "Tração 4x4",
          "Pista escorregadia",
        ],
        correct: 1,
        explanation:
          "Placa R-22 (USO OBRIGATÓRIO DE CORRENTES) - Obriga o uso de correntes nos pneus em condições de neve ou gelo.",
      },
      {
        question: "A placa A-4a (CURVA EM S À ESQUERDA) indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 140 60 Q 80 70 80 100 Q 80 130 140 140' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round'/%3E%3C/svg%3E",
        options: [
          "Pista sinuosa",
          "Curva em S à esquerda",
          "Duas curvas",
          "Zigue-zague",
        ],
        correct: 1,
        explanation:
          "Placa A-4a (CURVA EM S À ESQUERDA) - Advertência sobre curva em formato de S, iniciando pela esquerda.",
      },
      {
        question: "A placa R-23 (CONSERVE-SE À DIREITA) indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%230066cc' stroke='%23fff' stroke-width='8'/%3E%3Cpath d='M 70 100 L 130 100 M 115 85 L 130 100 L 115 115' stroke='%23fff' stroke-width='12' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Vire à direita",
          "Conserve-se à direita",
          "Faixa da direita",
          "Acostamento",
        ],
        correct: 1,
        explanation:
          "Placa R-23 (CONSERVE-SE À DIREITA) - Obriga os veículos a circularem pela direita da pista.",
      },
      {
        question: "A placa A-5a (CURVA EM S À DIREITA) adverte sobre:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 60 60 Q 120 70 120 100 Q 120 130 60 140' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round'/%3E%3C/svg%3E",
        options: [
          "Pista sinuosa",
          "Curva em S à direita",
          "Duas curvas",
          "Desvio",
        ],
        correct: 1,
        explanation:
          "Placa A-5a (CURVA EM S À DIREITA) - Advertência sobre curva em formato de S, iniciando pela direita.",
      },
      {
        question: "A placa R-25a (VIRE À ESQUERDA) significa:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%230066cc' stroke='%23fff' stroke-width='8'/%3E%3Cpath d='M 130 100 L 100 100 L 100 60 M 85 75 L 100 60 L 115 75' stroke='%23fff' stroke-width='12' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Permitido virar à esquerda",
          "Vire à esquerda obrigatoriamente",
          "Retorne à esquerda",
          "Preferência à esquerda",
        ],
        correct: 1,
        explanation:
          "Placa R-25a (VIRE À ESQUERDA) - Obriga o condutor a virar à esquerda.",
      },
      {
        question: "A placa A-6 (PISTA SINUOSA À DIREITA) indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 60 60 Q 100 70 120 90 Q 140 110 120 130 Q 100 150 60 140' stroke='%23000' stroke-width='10' fill='none' stroke-linecap='round'/%3E%3C/svg%3E",
        options: [
          "Curva à direita",
          "Pista sinuosa à direita",
          "Desvio",
          "Retorno",
        ],
        correct: 1,
        explanation:
          "Placa A-6 (PISTA SINUOSA À DIREITA) - Advertência sobre sequência de curvas, iniciando pela direita.",
      },
      {
        question: "A placa R-25b (VIRE À DIREITA) significa:",
        image: "/images/direita-obrigatoriamente.png",
        options: [
          "Permitido virar à direita",
          "Vire à direita obrigatoriamente",
          "Desvio à direita",
          "Preferência à direita",
        ],
        correct: 1,
        explanation:
          "Placa R-25b (VIRE À DIREITA) - Obriga o condutor a virar à direita.",
      },
      {
        question: "A placa A-7b (DEPRESSÃO) adverte sobre:",
        image: "/images/depressao-pista.png",
        options: ["Lombada", "Depressão na pista", "Buraco", "Valeta"],
        correct: 1,
        explanation:
          "Placa A-19 (DEPRESSÃO) - Advertência sobre depressão ou rebaixamento na pista. Reduzir velocidade.",
      },
      {
        question: "A placa R-25c indica:",
        image: "/images/siga-frente-esquerda.png",
        options: [
          "Vire à esquerda",
          "Siga em frente ou à esquerda",
          "Retorne",
          "Bifurcação",
        ],
        correct: 1,
        explanation:
          "Placa R-25c (SIGA EM FRENTE OU À ESQUERDA) - Permite seguir em frente ou virar à esquerda.",
      },
      {
        question: "A placa A-8 indica:",
        image: "/images/via-latera-direita.png",
        options: ["Desvio", "Via lateral Direita", "Via à direita", "Saída"],
        correct: 1,
        explanation:
          "Placa A-8 (VIA LATERAL) - Advertência sobre interseção com via lateral.",
      },
      {
        question: "A faixa de eixo contínua amarela indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23888'/%3E%3Crect x='95' y='0' width='10' height='200' fill='%23ffcc00'/%3E%3C/svg%3E",
        options: [
          "Que a ultrapassagem é permitida dos dois lados",
          "Que a ultrapassagem é proibida para ambos os sentidos",
          "Que somente um dos sentidos pode ultrapassar",
          "Que indica o centro da via, sem restrição",
        ],
        correct: 1,
        explanation:
          "Divide fluxos de tráfego em sentidos opostos e indica (proibição de ultrapassagem para ambos os sentidos). É usada para aumentar a segurança em locais de pouca visibilidade ou risco elevado.",
      },
      {
        question: "A placa A-9 (INTERSEÇÃO EM T) adverte sobre:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 60 80 L 140 80 M 100 80 L 100 140' stroke='%23000' stroke-width='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Cruzamento",
          "Interseção em T",
          "Bifurcação",
          "Via sem saída",
        ],
        correct: 1,
        explanation:
          "Placa A-9 (INTERSEÇÃO EM T) - Advertência sobre interseção em formato de T.",
      },
      {
        question: "A placa R-30 (CIRCULAÇÃO EXCLUSIVA DE ÔNIBUS) indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%230066cc' stroke='%23fff' stroke-width='8'/%3E%3Crect x='60' y='50' width='80' height='70' rx='10' fill='none' stroke='%23fff' stroke-width='6'/%3E%3Crect x='70' y='60' width='25' height='35' rx='3' fill='%23fff'/%3E%3Crect x='105' y='60' width='25' height='35' rx='3' fill='%23fff'/%3E%3Ccircle cx='80' cy='135' r='10' fill='%23fff'/%3E%3Ccircle cx='120' cy='135' r='10' fill='%23fff'/%3E%3C/svg%3E",
        options: [
          "Faixa de ônibus",
          "Circulação exclusiva de ônibus",
          "Ponto de ônibus",
          "Corredor de ônibus",
        ],
        correct: 1,
        explanation:
          "Placa R-30 (CIRCULAÇÃO EXCLUSIVA DE ÔNIBUS) - Indica via ou faixa de uso exclusivo de ônibus.",
      },
      {
        question: "A placa A-23 (PROJEÇÃO DE CASCALHO) adverte sobre:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Ccircle cx='60' cy='120' r='5' fill='%23000'/%3E%3Ccircle cx='75' cy='110' r='4' fill='%23000'/%3E%3Ccircle cx='90' cy='125' r='5' fill='%23000'/%3E%3Ccircle cx='110' cy='115' r='4' fill='%23000'/%3E%3Ccircle cx='125' cy='120' r='5' fill='%23000'/%3E%3Ccircle cx='140' cy='110' r='4' fill='%23000'/%3E%3Cpath d='M 70 90 L 80 70 M 100 95 L 105 75 M 130 90 L 135 70' stroke='%23000' stroke-width='4'/%3E%3Crect x='60' y='130' width='80' height='8' fill='%23000'/%3E%3C/svg%3E",
        options: [
          "Pista irregular",
          "Projeção de cascalho",
          "Obras",
          "Pista escorregadia",
        ],
        correct: 1,
        explanation:
          "Placa A-23 (PROJEÇÃO DE CASCALHO) - Advertência sobre possibilidade de projeção de cascalho pelos pneus dos veículos.",
      },
      {
        question: "A placa R-31 (CIRCULAÇÃO EXCLUSIVA DE BICICLETA) significa:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%230066cc' stroke='%23fff' stroke-width='8'/%3E%3Ccircle cx='100' cy='85' r='25' fill='none' stroke='%23fff' stroke-width='6'/%3E%3Ccircle cx='90' cy='80' r='3' fill='%23fff'/%3E%3Ccircle cx='110' cy='80' r='3' fill='%23fff'/%3E%3Cpath d='M 85 95 Q 100 105 115 95' stroke='%23fff' stroke-width='4' fill='none'/%3E%3Ccircle cx='70' cy='135' r='15' fill='none' stroke='%23fff' stroke-width='6'/%3E%3Ccircle cx='130' cy='135' r='15' fill='none' stroke='%23fff' stroke-width='6'/%3E%3Cpath d='M 85 135 L 115 135' stroke='%23fff' stroke-width='6'/%3E%3Cpath d='M 70 120 L 70 110 M 85 135 L 95 135' stroke='%23fff' stroke-width='4'/%3E%3Cpath d='M 130 120 L 130 110 M 145 135 L 155 135' stroke='%23fff' stroke-width='4'/%3E%3C/svg%3E",
        options: [
          "Ciclovia",
          "Circulação exclusiva de bicicleta",
          "Bicicletário",
          "Área de ciclistas",
        ],
        correct: 1,
        explanation:
          "Placa R-31 (CIRCULAÇÃO EXCLUSIVA DE BICICLETA) - Indica via ou faixa de uso exclusivo de bicicletas.",
      },
      {
        question: "A placa A-25 (ÁREA COM DESLOCAMENTO DE ANIMAIS) indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 70 80 Q 70 60 90 60 Q 100 60 100 70 L 100 100 L 90 130 M 100 100 L 110 130' stroke='%23000' stroke-width='8' fill='none' stroke-linecap='round'/%3E%3Cpath d='M 110 70 Q 120 60 130 70 Q 135 80 130 90 L 120 100' stroke='%23000' stroke-width='8' fill='none' stroke-linecap='round'/%3E%3Ccircle cx='95' cy='65' r='3' fill='%23000'/%3E%3C/svg%3E",
        options: [
          "Animais na pista",
          "Área com deslocamento de animais",
          "Fazenda",
          "Zona rural",
        ],
        correct: 1,
        explanation:
          "Placa A-25 (ÁREA COM DESLOCAMENTO DE ANIMAIS) - Advertência sobre área com circulação de animais.",
      },
      {
        question: "A placa R-35a (CICLISTA, TRANSITE À ESQUERDA) significa:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%230066cc' stroke='%23fff' stroke-width='8'/%3E%3Ccircle cx='110' cy='80' r='20' fill='none' stroke='%23fff' stroke-width='5'/%3E%3Ccircle cx='100' cy='75' r='2' fill='%23fff'/%3E%3Ccircle cx='120' cy='75' r='2' fill='%23fff'/%3E%3Cpath d='M 95 88 Q 110 95 125 88' stroke='%23fff' stroke-width='3' fill='none'/%3E%3Ccircle cx='80' cy='125' r='12' fill='none' stroke='%23fff' stroke-width='5'/%3E%3Ccircle cx='140' cy='125' r='12' fill='none' stroke='%23fff' stroke-width='5'/%3E%3Cpath d='M 92 125 L 128 125' stroke='%23fff' stroke-width='5'/%3E%3Cpath d='M 50 100 L 70 100 M 55 90 L 50 100 L 55 110' stroke='%23fff' stroke-width='6' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Ciclovia à esquerda",
          "Ciclista, transite à esquerda",
          "Desvio para ciclistas",
          "Preferência de ciclistas",
        ],
        correct: 1,
        explanation:
          "Placa R-35a (CICLISTA, TRANSITE À ESQUERDA) - Indica que ciclistas devem transitar à esquerda.",
      },
      {
        question:
          "A placa A-27 (ÁREA SUJEITA A VENTOS LATERAIS) adverte sobre:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 50 70 L 90 70 M 85 60 L 90 70 L 85 80' stroke='%23000' stroke-width='6' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M 50 100 L 110 100 M 105 90 L 110 100 L 105 110' stroke='%23000' stroke-width='6' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M 50 130 L 90 130 M 85 120 L 90 130 L 85 140' stroke='%23000' stroke-width='6' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Vento forte",
          "Área sujeita a ventos laterais",
          "Tempestade",
          "Rajadas de vento",
        ],
        correct: 1,
        explanation:
          "Placa A-27 (ÁREA SUJEITA A VENTOS LATERAIS) - Advertência sobre área com ventos laterais fortes.",
      },
      {
        question: "A placa R-35b (CICLISTA, TRANSITE À DIREITA) indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%230066cc' stroke='%23fff' stroke-width='8'/%3E%3Ccircle cx='90' cy='80' r='20' fill='none' stroke='%23fff' stroke-width='5'/%3E%3Ccircle cx='80' cy='75' r='2' fill='%23fff'/%3E%3Ccircle cx='100' cy='75' r='2' fill='%23fff'/%3E%3Cpath d='M 75 88 Q 90 95 105 88' stroke='%23fff' stroke-width='3' fill='none'/%3E%3Ccircle cx='60' cy='125' r='12' fill='none' stroke='%23fff' stroke-width='5'/%3E%3Ccircle cx='120' cy='125' r='12' fill='none' stroke='%23fff' stroke-width='5'/%3E%3Cpath d='M 72 125 L 108 125' stroke='%23fff' stroke-width='5'/%3E%3Cpath d='M 130 100 L 150 100 M 145 90 L 150 100 L 145 110' stroke='%23fff' stroke-width='6' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Ciclovia à direita",
          "Ciclista, transite à direita",
          "Desvio para ciclistas",
          "Preferência de ciclistas",
        ],
        correct: 1,
        explanation:
          "Placa R-35b (CICLISTA, TRANSITE À DIREITA) - Indica que ciclistas devem transitar à direita.",
      },
      {
        question: "A placa A-28 (PISTA DIVIDIDA) indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 50 80 L 100 80 M 100 80 L 150 80 M 100 60 L 100 140' stroke='%23000' stroke-width='10' stroke-linecap='round'/%3E%3Crect x='95' y='75' width='10' height='70' fill='%23000'/%3E%3C/svg%3E",
        options: ["Mão dupla", "Pista dividida", "Duas pistas", "Bifurcação"],
        correct: 1,
        explanation:
          "Placa A-13a (PISTA DIVIDIDA) - Advertência sobre início de pista dividida por canteiro ou barreira.",
      },
      {
        question: "A placa R-36a (ÔNIBUS, TRANSITE À ESQUERDA) significa:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%230066cc' stroke='%23fff' stroke-width='8'/%3E%3Crect x='70' y='60' width='60' height='55' rx='8' fill='none' stroke='%23fff' stroke-width='5'/%3E%3Crect x='78' y='68' width='20' height='25' rx='2' fill='%23fff'/%3E%3Crect x='102' y='68' width='20' height='25' rx='2' fill='%23fff'/%3E%3Ccircle cx='85' cy='125' r='8' fill='%23fff'/%3E%3Ccircle cx='115' cy='125' r='8' fill='%23fff'/%3E%3Cpath d='M 40 100 L 60 100 M 45 90 L 40 100 L 45 110' stroke='%23fff' stroke-width='6' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Faixa de ônibus à esquerda",
          "Ônibus, transite à esquerda",
          "Desvio para ônibus",
          "Corredor de ônibus",
        ],
        correct: 1,
        explanation:
          "Placa R-36a (ÔNIBUS, TRANSITE À ESQUERDA) - Indica que ônibus devem transitar à esquerda.",
      },
      {
        question: "A placa A-29 (AEROPORTO) indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 100 70 L 100 130 M 60 90 L 140 90 M 70 110 L 130 110' stroke='%23000' stroke-width='8' stroke-linecap='round'/%3E%3Cpath d='M 90 130 L 100 140 L 110 130' stroke='%23000' stroke-width='8' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: ["Aeroporto próximo", "Aeroporto", "Pista de pouso", "Aviões"],
        correct: 1,
        explanation:
          "Placa A-29 (AEROPORTO) - Advertência sobre proximidade de aeroporto ou área de sobrevoo de aeronaves.",
      },
      {
        question: "A placa R-36b (ÔNIBUS, TRANSITE À DIREITA) indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%230066cc' stroke='%23fff' stroke-width='8'/%3E%3Crect x='70' y='60' width='60' height='55' rx='8' fill='none' stroke='%23fff' stroke-width='5'/%3E%3Crect x='78' y='68' width='20' height='25' rx='2' fill='%23fff'/%3E%3Crect x='102' y='68' width='20' height='25' rx='2' fill='%23fff'/%3E%3Ccircle cx='85' cy='125' r='8' fill='%23fff'/%3E%3Ccircle cx='115' cy='125' r='8' fill='%23fff'/%3E%3Cpath d='M 140 100 L 160 100 M 155 90 L 160 100 L 155 110' stroke='%23fff' stroke-width='6' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        options: [
          "Faixa de ônibus à direita",
          "Ônibus, transite à direita",
          "Desvio para ônibus",
          "Corredor de ônibus",
        ],
        correct: 1,
        explanation:
          "Placa R-36b (ÔNIBUS, TRANSITE À DIREITA) - Indica que ônibus devem transitar à direita.",
      },
      {
        question:
          "A placa A-30a (PASSAGEM SINALIZADA DE ESCOLARES) adverte sobre:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Ccircle cx='70' cy='70' r='12' fill='%23000'/%3E%3Cline x1='70' y1='82' x2='70' y2='105' stroke='%23000' stroke-width='7'/%3E%3Cline x1='70' y1='105' x2='60' y2='130' stroke='%23000' stroke-width='7'/%3E%3Cline x1='70' y1='105' x2='80' y2='130' stroke='%23000' stroke-width='7'/%3E%3Cline x1='70' y1='90' x2='60' y2='98' stroke='%23000' stroke-width='5'/%3E%3Cline x1='70' y1='90' x2='80' y2='98' stroke='%23000' stroke-width='5'/%3E%3Crect x='90' y='60' width='50' height='40' fill='none' stroke='%23000' stroke-width='5'/%3E%3Cpolygon points='115,50 125,60 105,60' fill='%23000'/%3E%3Ccircle cx='110' cy='120' r='6' fill='%23000'/%3E%3Ccircle cx='130' cy='120' r='6' fill='%23000'/%3E%3Cline x1='100' y1='75' x2='130' y2='75' stroke='%23000' stroke-width='3'/%3E%3C/svg%3E",
        options: [
          "Escola",
          "Passagem sinalizada de escolares",
          "Área escolar",
          "Crianças",
        ],
        correct: 1,
        explanation:
          "Placa A-30a (PASSAGEM SINALIZADA DE ESCOLARES) - Advertência sobre passagem sinalizada de escolares à frente.",
      },
      {
        question:
          "A placa R-37 (PROIBIDO TRÂNSITO DE VEÍCULOS AUTOMOTORES EXCETO MOTOCICLETAS) significa:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Crect x='65' y='70' width='70' height='40' rx='5' fill='none' stroke='%23000' stroke-width='5'/%3E%3Ccircle cx='80' cy='120' r='8' fill='%23000'/%3E%3Ccircle cx='120' cy='120' r='8' fill='%23000'/%3E%3Crect x='75' y='80' width='15' height='15' fill='%23000'/%3E%3Crect x='110' y='80' width='15' height='15' fill='%23000'/%3E%3Ctext x='100' y='155' font-family='Arial' font-size='20' font-weight='bold' fill='%23000' text-anchor='middle'%3EMOTO%3C/text%3E%3C/svg%3E",
        options: [
          "Proibido carros",
          "Proibido trânsito de veículos automotores exceto motocicletas",
          "Apenas motos",
          "Via exclusiva",
        ],
        correct: 1,
        explanation:
          "Placa R-37 (PROIBIDO TRÂNSITO DE VEÍCULOS AUTOMOTORES EXCETO MOTOCICLETAS) - Proíbe veículos automotores, exceto motocicletas.",
      },
      {
        question: "A placa A-31 (TRÂNSITO DE CICLISTAS) indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Ccircle cx='100' cy='80' r='25' fill='none' stroke='%23000' stroke-width='7'/%3E%3Ccircle cx='90' cy='75' r='3' fill='%23000'/%3E%3Ccircle cx='110' cy='75' r='3' fill='%23000'/%3E%3Cpath d='M 85 90 Q 100 100 115 90' stroke='%23000' stroke-width='4' fill='none'/%3E%3Ccircle cx='70' cy='135' r='13' fill='none' stroke='%23000' stroke-width='6'/%3E%3Ccircle cx='130' cy='135' r='13' fill='none' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 83 135 L 117 135' stroke='%23000' stroke-width='6'/%3E%3Cpath d='M 70 122 L 70 112 M 83 135 L 93 135' stroke='%23000' stroke-width='4'/%3E%3Cpath d='M 130 122 L 130 112 M 143 135 L 153 135' stroke='%23000' stroke-width='4'/%3E%3C/svg%3E",
        options: [
          "Ciclovia",
          "Trânsito de ciclistas",
          "Bicicletário",
          "Área de ciclistas",
        ],
        correct: 1,
        explanation:
          "Placa A-31 (TRÂNSITO DE CICLISTAS) - Advertência sobre trânsito de ciclistas na via.",
      },
      {
        question:
          "A placa R-38 (PROIBIDO TRÂNSITO DE ÔNIBUS, CAMINHÕES E VEÍCULOS DE GRANDE PORTE) significa:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Crect x='55' y='55' width='90' height='60' rx='8' fill='none' stroke='%23000' stroke-width='5'/%3E%3Crect x='63' y='63' width='30' height='30' rx='3' fill='%23000'/%3E%3Crect x='100' y='63' width='30' height='30' rx='3' fill='%23000'/%3E%3Ccircle cx='70' cy='125' r='9' fill='%23000'/%3E%3Ccircle cx='90' cy='125' r='9' fill='%23000'/%3E%3Ccircle cx='110' cy='125' r='9' fill='%23000'/%3E%3Ccircle cx='130' cy='125' r='9' fill='%23000'/%3E%3Cline x1='40' y1='60' x2='160' y2='140' stroke='%23ff0000' stroke-width='10'/%3E%3C/svg%3E",
        options: [
          "Proibido caminhões",
          "Proibido trânsito de ônibus, caminhões e veículos de grande porte",
          "Proibido veículos pesados",
          "Via restrita",
        ],
        correct: 1,
        explanation:
          "Placa R-38 (PROIBIDO TRÂNSITO DE ÔNIBUS, CAMINHÕES E VEÍCULOS DE GRANDE PORTE) - Proíbe a circulação desses veículos.",
      },
      {
        question: "A placa A-35 (CRIANÇAS) adverte sobre:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Ccircle cx='80' cy='70' r='15' fill='%23000'/%3E%3Cline x1='80' y1='85' x2='80' y2='115' stroke='%23000' stroke-width='9'/%3E%3Cline x1='80' y1='115' x2='68' y2='145' stroke='%23000' stroke-width='9'/%3E%3Cline x1='80' y1='115' x2='92' y2='145' stroke='%23000' stroke-width='9'/%3E%3Cline x1='80' y1='95' x2='68' y2='105' stroke='%23000' stroke-width='7'/%3E%3Cline x1='80' y1='95' x2='92' y2='105' stroke='%23000' stroke-width='7'/%3E%3Ccircle cx='120' cy='75' r='13' fill='%23000'/%3E%3Cline x1='120' y1='88' x2='120' y2='110' stroke='%23000' stroke-width='8'/%3E%3Cline x1='120' y1='110' x2='110' y2='135' stroke='%23000' stroke-width='8'/%3E%3Cline x1='120' y1='110' x2='130' y2='135' stroke='%23000' stroke-width='8'/%3E%3Cline x1='120' y1='98' x2='110' y2='106' stroke='%23000' stroke-width='6'/%3E%3Cline x1='120' y1='98' x2='130' y2='106' stroke='%23000' stroke-width='6'/%3E%3C/svg%3E",
        options: ["Escola", "Crianças", "Playground", "Área residencial"],
        correct: 1,
        explanation:
          "Placa A-35 (CRIANÇAS) - Advertência sobre área com presença de crianças.",
      },
      {
        question: "A placa R-39 (CIRCULAÇÃO EXCLUSIVA DE CAMINHÃO) indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%230066cc' stroke='%23fff' stroke-width='8'/%3E%3Crect x='60' y='55' width='80' height='55' rx='6' fill='none' stroke='%23fff' stroke-width='5'/%3E%3Crect x='68' y='63' width='25' height='28' rx='2' fill='%23fff'/%3E%3Crect x='107' y='63' width='25' height='28' rx='2' fill='%23fff'/%3E%3Ccircle cx='75' cy='120' r='10' fill='%23fff'/%3E%3Ccircle cx='95' cy='120' r='10' fill='%23fff'/%3E%3Ccircle cx='105' cy='120' r='10' fill='%23fff'/%3E%3Ccircle cx='125' cy='120' r='10' fill='%23fff'/%3E%3C/svg%3E",
        options: [
          "Faixa de caminhões",
          "Circulação exclusiva de caminhão",
          "Via para caminhões",
          "Corredor de caminhões",
        ],
        correct: 1,
        explanation:
          "Placa R-39 (CIRCULAÇÃO EXCLUSIVA DE CAMINHÃO) - Indica via ou faixa de uso exclusivo de caminhões.",
      },
      {
        question: "A placa A-36 (OBRAS) indica:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='%23ffcc00' stroke='%23000' stroke-width='6'/%3E%3Ccircle cx='80' cy='70' r='12' fill='%23000'/%3E%3Cline x1='80' y1='82' x2='80' y2='105' stroke='%23000' stroke-width='7'/%3E%3Cline x1='80' y1='105' x2='70' y2='130' stroke='%23000' stroke-width='7'/%3E%3Cline x1='80' y1='105' x2='90' y2='130' stroke='%23000' stroke-width='7'/%3E%3Cline x1='80' y1='90' x2='70' y2='98' stroke='%23000' stroke-width='5'/%3E%3Cline x1='80' y1='90' x2='90' y2='98' stroke='%23000' stroke-width='5'/%3E%3Cpath d='M 110 90 L 130 70 L 150 90 M 120 100 L 140 100 M 115 110 L 145 110 M 110 120 L 150 120' stroke='%23000' stroke-width='6' fill='none' stroke-linecap='round'/%3E%3C/svg%3E",
        options: ["Manutenção", "Obras", "Construção", "Trabalhadores"],
        correct: 1,
        explanation:
          "Placa A-36 (OBRAS) - Advertência sobre obras na via com presença de trabalhadores.",
      },
      {
        question: "A placa R-40 (TRÂNSITO PROIBIDO A CARROS DE MÃO) significa:",
        image:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23fff' stroke='%23ff0000' stroke-width='12'/%3E%3Cpath d='M 70 70 L 110 70 L 120 90 L 110 110 L 70 110 Z' stroke='%23000' stroke-width='5' fill='none'/%3E%3Ccircle cx='85' cy='125' r='10' fill='%23000'/%3E%3Cpath d='M 60 80 L 70 70 M 60 100 L 70 110' stroke='%23000' stroke-width='5' stroke-linecap='round'/%3E%3Cline x1='40' y1='60' x2='160' y2='140' stroke='%23ff0000' stroke-width='10'/%3E%3C/svg%3E",
        options: [
          "Proibido carrinhos",
          "Trânsito proibido a carros de mão",
          "Proibido carregar",
          "Via restrita",
        ],
        correct: 1,
        explanation:
          "Placa R-40 (TRÂNSITO PROIBIDO A CARROS DE MÃO) - Proíbe a circulação de carros de mão.",
      },
    ],
  },
};

window.questionsDatabase = questionsDatabase;
