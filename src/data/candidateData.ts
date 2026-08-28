import { CandidateInfo, Proposal } from '../types';

export const CANDIDATE: CandidateInfo = {
  name: "Angelo Costa",
  role: "Deputado Federal",
  state: "Minas Gerais",
  number: "5078",
  party: "PSOL",
  slogan: "PELO DESENVOLVIMENTO!",
  cnpj: "68.437.330/0001-82",
  email: "contato@angelocostaz.com",
  biography: "Angelo Costa é baiano de nascimento, mas fez de Minas Gerais o seu lar e a sua causa há mais de 15 anos. Com uma trajetória enraizada no estado, construiu sua família, sua atuação comunitária e sua luta ao lado do povo trabalhador mineiro. Concorrendo a Deputado Federal pelo PSOL com o número 5078, Angelo leva a Brasília a defesa incansável da saúde pública (SUS), das universidades e institutos federais, da recuperação das nossas rodovias e da geração de emprego e renda para quem mais precisa.",
  pillars: [
    "Mais de 15 anos de dedicação e vida em Minas Gerais",
    "Geração de Emprego e Renda com Direitos",
    "Fortalecimento da Saúde Pública e SUS em Minas",
    "Educação Integral e Apoio às Universidades e IFs Mineiros",
    "Defesa do Meio Ambiente e Soberania Hídrica",
    "Infraestrutura e Conectividade para o Interior de MG",
    "Combate às Desigualdades e Proteção Social"
  ]
};

export const PROPOSALS: Proposal[] = [
  {
    id: "desenvolvimento",
    category: "Economia e Trabalho",
    iconName: "TrendingUp",
    title: "Desenvolvimento com Geração de Emprego e Renda",
    shortDescription: "Incentivo à industrialização limpa, fomento aos pequenos negócios, cooperativas e agricultura familiar em todas as regiões mineiras.",
    details: [
      "Criação de linhas de crédito popular para microempreendedores e produtores rurais de Minas Gerais.",
      "Incentivo fiscal para empresas e indústrias que gerem empregos qualificados nos municípios do interior.",
      "Fortalecimento da agroecologia e garantia de compra direta de alimentos da agricultura familiar para merenda escolar e hospitais.",
      "Defesa dos direitos trabalhistas e valorização do salário mínimo."
    ]
  },
  {
    id: "saude",
    category: "Saúde e Vida",
    iconName: "HeartPulse",
    title: "Saúde Pública Forte e Descentralização do SUS",
    shortDescription: "Destinação prioritária de emendas para hospitais regionais, policlínicas e zeramento de filas de exames em Minas Gerais.",
    details: [
      "Modernização e ampliação de leitos em hospitais filantrópicos e unidades regionais de pronto atendimento.",
      "Piso salarial e plano de carreira para enfermeiros, técnicos, agentes comunitários e médicos da atenção básica.",
      "Programa de telemedicina e unidades móveis para atendimento de especialidades em cidades pequenas e zonas rurais.",
      "Fortalecimento da rede de saúde mental (CAPS) e combate ao desabastecimento de medicamentos essenciais."
    ]
  },
  {
    id: "educacao",
    category: "Educação e Juventude",
    iconName: "GraduationCap",
    title: "Educação Pública de Excelência e Inovação",
    shortDescription: "Valorização dos professores, expansão dos Institutos Federais (IFs) e suporte às renomadas Universidades Federais de MG.",
    details: [
      "Aporte de verbas federais para infraestrutura de escolas técnicas e polos universitários no interior de Minas.",
      "Bolsas de permanência estudantil para jovens de baixa renda nas universidades públicas mineiras (UFMG, UFV, UFOP, UFU, etc.).",
      "Conectividade e laboratórios de informática em 100% das escolas públicas do estado.",
      "Cumprimento integral do piso salarial dos profissionais da educação básica."
    ]
  },
  {
    id: "infraestrutura",
    category: "Mobilidade e Obras",
    iconName: "Truck",
    title: "Infraestrutura, Estradas e Recuperação da Malha Viária",
    shortDescription: "Cobrança e viabilização de investimentos federais para duplicações de rodovias críticas (como a BR-381 e BR-040) e ferrovias.",
    details: [
      "Articulação em Brasília pela aceleração das obras de duplicação e segurança nas rodovias federais que cortam Minas.",
      "Revitalização do transporte ferroviário de passageiros e cargas para baratear custos de produção.",
      "Pavimentação de acessos a distritos agrícolas e melhoria no escoamento da produção de café, queijo e leite.",
      "Expansão de redes de saneamento básico e água tratada em comunidades periféricas e rurais."
    ]
  },
  {
    id: "meio-ambiente",
    category: "Sustentabilidade e Clima",
    iconName: "Trees",
    title: "Proteção Ambiental, Rios Vivos e Patrimônio Mineiro",
    shortDescription: "Fiscalização rigorosa de barragens, proteção das bacias hidrográficas (São Francisco, Doce e Grande) e preservação histórica.",
    details: [
      "Rigidez total nas leis ambientais de mineração, garantindo segurança das comunidades e proteção dos mananciais.",
      "Investimentos federais na restauração e conservação das cidades históricas (Ouro Preto, Tiradentes, Diamantina, Mariana, etc.).",
      "Incentivo à energia solar descentralizada e recuperação de nascentes em áreas degradadas.",
      "Combate ao desmatamento e apoio aos guardiões comunitários das serras mineiras."
    ]
  },
  {
    id: "cidadania",
    category: "Transparência e Direitos",
    iconName: "Scale",
    title: "Gabinete Aberto, Transparência e Justiça Social",
    shortDescription: "Mandato participativo onde o povo mineiro decide prioridades de emendas parlamentares através de votação direta.",
    details: [
      "Prestação de contas digital mensal de todos os recursos, gastos e votos do mandato em Brasília.",
      "Emendas participativas: destinação de recursos decidida em plenárias e plataforma online com os cidadãos.",
      "Combate a privilégios políticos e defesa incondicional dos direitos humanos, das mulheres e da igualdade racial.",
      "Canal direto no WhatsApp para atendimento e recebimento de denúncias da população mineira."
    ]
  }
];

export const MINAS_CITIES = [
  "Belo Horizonte",
  "Uberlândia",
  "Contagem",
  "Juiz de Fora",
  "Betim",
  "Montes Claros",
  "Ribeirão das Neves",
  "Uberaba",
  "Governador Valadares",
  "Ipatinga",
  "Sete Lagoas",
  "Divinópolis",
  "Santa Luzia",
  "Ibirité",
  "Poços de Caldas",
  "Patos de Minas",
  "Pouso Alegre",
  "Teófilo Otoni",
  "Barbacena",
  "Sabará",
  "Varginha",
  "Conselheiro Lafaiete",
  "Araguari",
  "Itabira",
  "Passos",
  "Coronel Fabriciano",
  "Muriaé",
  "Ubá",
  "Ouro Preto",
  "Itajubá",
  "Lavras",
  "Paracatu",
  "São João del-Rei",
  "Curvelo",
  "Diamantina",
  "Tiradentes",
  "Mariana",
  "Outra cidade de Minas Gerais"
];
