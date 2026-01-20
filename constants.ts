
import { 
  Zap, Shield, Brain, Activity, Users, Lock, 
  Smartphone, BarChart3, Heart, Battery, TrendingUp, UserCheck,
  Timer, Search, ListCheck, Wind, BarChart, BookOpen, RotateCcw,
  Target, ShieldAlert, Droplets, Gauge, MessageSquare, Layout, ShieldCheck
} from 'lucide-react';
import { Testimonial, FeatureItem, FAQItem, Plan, Achievement, Benefit, BlogPost, Expert } from './types';

export const PRODUCT_PILLARS = [
  {
    id: 'dashboard',
    title: "Painel de Energia e Foco",
    description: "Monitore sua química cerebral em tempo real através do aplicativo DeSync. Visualize como sua clareza mental retorna conforme você avança no protocolo.",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=1000",
    align: 'right' as const
  },
  {
    id: 'scanner',
    title: "Scanner de Gatilhos",
    description: "Identifique padrões de comportamento antes que eles se tornem quedas. Uma ferramenta de engenharia reversa para desativar impulsos digitais.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
    align: 'left' as const
  }
];

export const CORE_FEATURES = [
  {
    id: 'panic',
    title: "Botão SOS",
    description: "Interrompa impulsos (urges) instantaneamente com protocolos de emergência guiados no app.",
    icon: ShieldAlert,
    badge: "Resgate Tático"
  },
  {
    id: 'dns',
    title: "Escudo DNS",
    description: "Bloqueio automático de conteúdo adulto na raiz da conexão para blindagem total e invisível.",
    icon: ShieldCheck,
    badge: "Segurança"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Como funciona o Protocolo Desviciar?",
    answer: "É um método 100% intelectual e fundamentado na ciência, desenhado para reprogramar sua química cerebral. Através do aplicativo DeSync, você acessa missões diárias, bloqueio de DNS e uma biblioteca de mais de 50 aulas que desconstroem o vício fase a fase."
  },
  {
    question: "Meu anonimato é garantido na fatura?",
    answer: "Sim. Prezamos por sua privacidade absoluta. O aplicativo se chama DeSync e é exatamente esse nome, 'DeSync', que aparecerá na fatura do seu cartão de crédito, garantindo que ninguém saiba o conteúdo do que você adquiriu."
  },
  {
    question: "O que é a Masterclass de conteúdos?",
    answer: "É uma biblioteca exclusiva com mais de 50 aulas profundas onde explicamos a biologia do vício, como você chegou nesse estado e as estratégias exatas para garantir que você nunca mais tenha uma recaída."
  },
  {
    question: "Como funciona o Bloqueio de DNS?",
    answer: "Implementamos um método tático que bloqueia o acesso a conteúdos pornográficos diretamente na sua rede. É um escudo invisível que impede que estímulos viciantes cheguem até você, facilitando sua jornada de sobriedade."
  },
  {
    question: "Meu anonimato é realmente garantido?",
    answer: "Sim. Você usa apenas e-mail e senha para acessar o DeSync. Dentro da comunidade, você usa um apelido. Nenhuma atividade é compartilhada fora do ambiente seguro do Desviciar."
  },
  {
    question: "Alguém vai ver meu histórico de uso?",
    answer: "Seu histórico é criptografado e usado apenas para gerar seus relatórios de evolução. No DeSync, seus dados são protegidos por criptografia de nível bancário."
  },
  {
    question: "O que é a revitalização física (SCARX) no plano New Life?",
    answer: "É uma consultoria multidisciplinar de alta performance focada em reconstruir seu corpo e sua rotina. Durante 3 meses, você recebe acompanhamento de um time de elite (treino, nutrição e saúde mental) para acelerar sua recuperação."
  },
  {
    question: "Posso usar o app sem contar para ninguém?",
    answer: "Com certeza. O DeSync foi criado para ser um sistema silencioso. Discreto no celular, discreto na fatura e anônimo na comunidade."
  },
  {
    question: "O que eu recebo no plano Reprogramação 90 Dias?",
    answer: "Você recebe o ciclo completo de desviciar: acesso ao app DeSync, o Escudo de Bloqueio DNS Ativo, suporte na comunidade e a Masterclass com mais de 50 aulas para blindar seu conhecimento."
  },
  {
    question: "Qual a garantia do programa?",
    answer: "Nosso objetivo aqui é para além de uma empresa. Queremos realmente transformar sua vida. Teste nossos sistemas por 7 dias. Se não estiver satisfeito, peço seu dinheiro de volta e tenha 100% de garantia."
  }
];

export const PLANS: Plan[] = [
  {
    name: "RESTART",
    price: "R$ 47",
    description: "Resgate Tático imediato com acesso ao aplicativo DeSync para interromper as quedas.",
    features: [
      "Acesso mensal ao App DeSync",
      "Painel de comando de evolução",
      "Botão de Pânico SOS",
      "Comunidade 100% anônima",
      "Scanner de gatilhos básico"
    ],
    cta: "Iniciar Restart",
    checkoutUrl: "https://buy.stripe.com/9B6aEQ5Kl9nE3wH1QYbjW06"
  },
  {
    name: "REPROGRAMAÇÃO",
    price: "R$ 267",
    description: "Método 90 dias: Masterclass com 50+ aulas, Bloqueio DNS e suporte estratégico para erradicar o vício.",
    highlight: true,
    features: [
      "Acesso ao App DeSync (90 dias)",
      "Masterclass: 50+ aulas exclusivas",
      "Método 100% Intelectual e Científico",
      "Escudo de Bloqueio DNS Ativo",
      "Comunidade Elite de Suporte",
      "Mapeamento avançado de gatilhos"
    ],
    cta: "COMEÇAR PROTOCOLO 90 DIAS",
    checkoutUrl: "https://buy.stripe.com/00w7sEb4F43kaZ9dzGbjW07"
  },
  {
    name: "NEW LIFE SCARX",
    price: "R$ 697",
    description: "Reconstrução Total: 1 ano de DeSync blindado mais 3 meses de Revitalização Física de elite ScarX.",
    features: [
      "Acesso anual ao App DeSync",
      "3 meses de revitalização física (SCARX)",
      "Time: personal, nutri, fisio e psi",
      "Acompanhamento Concierge ScarX",
      "Escudo de Bloqueio DNS Premium",
      "Masterclasses Vitalícias"
    ],
    cta: "Garantir New Life",
    checkoutUrl: "https://buy.stripe.com/6oUaEQ5Kl7fw3wHgLSbjW08"
  }
];

export const EXPERTS: Expert[] = [
  {
    name: "João Scar",
    role: "Fundador da ScarX e Desviciar",
    description: "Treinador do Peter Jordan focado em reestruturação de rotina e hábitos para alta performance. Aplico metodologias de elite para garantir que sua envergadura intelectual se traduza em um novo padrão de vida duradouro e definitivo.",
    stats: [
      { label: "Performance", value: "Elite Trainer" },
      { label: "Membros", value: "1200+ Aluno" }
    ],
    image: "https://scarx.com.br/images/scarterno2.jpeg"
  },
  {
    name: "Grace",
    role: "Psicanalista Comportamental",
    description: "Especialista em vícios de alta complexidade. Com vasta experiência clínica, adaptou protocolos de resgate tático para o método Desviciar, combatendo a epidemia de vícios digitais moderna através da reprogramação psíquica profunda.",
    stats: [
      { label: "Atendimentos", value: "500+" },
      { label: "Experiência", value: "12 anos" }
    ],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    user: "u/MarcosProtocol",
    title: "DeSync salvou minha semana",
    content: "O app identificou meu tédio e o Botão SOS me tirou do transe antes da queda. O bloqueio de DNS é surreal, não passa nada.",
    streakDay: 90,
    platform: 'reddit'
  },
  {
    user: "u/Lucas90D",
    title: "O método científico funciona",
    content: "A Masterclass me fez entender por que eu caía. When you understand biology, addiction loses its strength. 45 days clean.",
    streakDay: 45,
    platform: 'reddit'
  },
  {
    user: "u/RafaelCosta",
    title: "Energia recuperada",
    content: "O New Life com a ScarX mudou meu físico enquanto o DeSync mudava minha mente. Outro nível de vida.",
    streakDay: 30,
    platform: 'reddit'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { name: "Semente", level: "0-7 DIAS", color: "from-gray-400 to-gray-600" },
  { name: "Lenda", level: "VITALÍCIO", color: "from-purple-500 to-indigo-600" }
];
