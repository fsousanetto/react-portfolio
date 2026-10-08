import type { CardProps } from "../types/Card";
import type { HomeLinks } from "../types/HomeLinks";
import imgClima from "./img/clima.png";
import imgSysMei from "./img/sysmei.gif";
import imgTabarato from "./img/home_tabarato.png";
import imgMVP from "./img/teste_extensão.png";
import imgContrl from "./img/home_financ.png";

export const data: CardProps[] = [
  {
    id: 0,
    title: "Controle Financeiro",
    description:
      "Ecossistema Full Stack em desenvolvimento para gestão de finanças pessoais. Atualmente focado em uma experiência robusta para Desktop com consumo de API RESTful modular e escalável com persistência e integridade de dados. O projeto possui em seu planejamento o desenvolvimento de uma aplicação mobile com React Native.",
    alt: "Full Stack, REST API, Dashboard, Finanças, Mobile Roadmap",
    img: imgContrl,
    tags: [
      "Full Stack ",
      "NodeJS",
      "Angular",
      "REST API",
      "Prisma ORM",
      "PostgreSQL",
    ],
    repoUrl: "",
    liveUrl: "",
  },
  {
    id: 1,
    title: "Clima",
    description:
      "Aplicação web voltada para consulta meteorológica em tempo real com renderização server-side (SSR). Desenvolvida em Node.js com o motor de templates Mustache, a plataforma consome a API REST da OpenWeather via Axios para processar e expor métricas climáticas dinâmicas (temperatura, umidade e condições gerais). O projeto foi estruturado sob os princípios de design de software backend, garantindo baixo tempo de resposta, modularidade e alta performance no carregamento de dados.",
    alt: "",
    img: imgClima,
    tags: ["NodeJS", "Mustache", "Axios", "REST API (OpenWeather)"],
    repoUrl: "https://www.github.com/fsousanetto/clima",
    liveUrl: "https://clima-pi-sand.vercel.app/",
  },
  {
    id: 2,
    title: "SysMei (Landing Page)",
    description:
      "Landing page corporativa de alta conversão projetada para a captação estratégica de leads para a plataforma SysMei. Desenvolvida em AngularJS, a aplicação conta com componentes dinâmicos, formulários reativos inteligentes com validação de dados em tempo real e arquitetura focada em SEO e performance. O design responsivo garante uma experiência fluida e consistente em qualquer dispositivo.",
    alt: "",
    img: imgSysMei,
    tags: ["Angular", "TailwindCSS"],
    repoUrl: "",
    liveUrl: "https://dev.sysmei.com/home",
  },
  {
    id: 3,
    title: "#TáBarato (Landing Page)",
    description:
      "Landing page responsiva e institucional voltada para o lançamento e captação de leads do aplicativo #TáBarato. Desenvolvido durante a Formação Web Fullstack da Mais1Code, o projeto priorizou a otimização de performance (Core Web Vitals), acessibilidade e semântica estrutural utilizando HTML5, CSS3 e JavaScript puro (Vanilla JS). Focado em conversão e experiência do usuário (UX/UI)",
    alt: "",
    img: imgTabarato,
    tags: ["HTML5", "CSS3", "JavaScript (Vanilla JS)"],
    repoUrl: "https://github.com/fsousanetto/landing-page_tabarato",
    liveUrl: "https://tabarato.vercel.app/",
  },
  {
    id: 4,
    title: "MVP de Gestão Acadêmica (Projeto de Extensão)",
    description:
      "Sistema corporativo de gestão de cadastros desenvolvido como projeto de extensão universitária de encerramento de ciclo. A aplicação foi concebida seguindo a metodologia ágil RAD (Rapid Application Development), desde a etapa de prototipagem até a entrega final. No backend, implementa regras rígidas de persistência, consistência e integridade de dados através da integração com o banco de dados relacional PostgreSQL utilizando Python.",
    alt: "",
    img: imgMVP,
    tags: ["Python", "PostgreSQL", "RAD"],
    repoUrl: "https://github.com/fsousanetto/projeto-extensao-universitaria",
    liveUrl: "",
  },
];

export const HomeLink: HomeLinks[] = [
  {
    githubUrl: "https://www.github.com/fsousanetto",
    socialUrl: "https://www.linkedin.com/in/francisco-sousa1/",
    whatsappUrl: "https://wa.me/5591984268089",
  },
];

export const Profile = [
  {
    id: 1,
    name: "Francisco Moreira",
    profession: ["Analista de Sistemas", "Desenvolvedor Web Fullstack"],
    description: "",
    avatar: "../img/avatar.webp",
    about:
      "Tecnólogo em Análise e Desenvolvimento de Sistemas, atuo como Analista de Suporte Júnior, com experiência em atendimento técnico, resolução de chamados e suporte a sistemas ERP. Possuo conhecimentos em desenvolvimento web, com experiência em JavaScript, ReactJS, AngularJS e NodeJS, além de noções em Python. Tenho contato com bancos de dados relacionais e MongoDB, e iniciei recentemente uma pós-graduação em Desenvolvimento Web Fullstack para Sistemas Cloud Native. Sou movido pelo aprendizado contínuo e pela busca constante de evolução técnica, visando construir soluções cada vez mais eficientes e bem estruturadas. ",
  },
];

export const ContactData = [
  {
    id: 1,
    title: "Contato",
    text: "Estou aberto a colaborações, parcerias e oportunidades de trabalho. Sinta-se à vontade para me enviar uma mensagem através do meu LinkedIn, GitHub ou WhatsApp. Será um prazer conectar e compartilhar conhecimentos com outros profissionais da área. Vamos construir algo incrível juntos!",
    phone: "91 98426-8089",
    email: "franciscon238@gmail.com",
    address: "Belém, Pará, Brasil",
    href: "",
  },
];

export const SlideData = [
  {
    id: 1,
    url: "../img/slide/css.png",
  },
  {
    id: 2,
    url: "../img/slide/git.png",
  },
  {
    id: 3,
    url: "../img/slide/html.png",
  },
  {
    id: 4,
    url: "../img/slide/js.png",
  },
  {
    id: 5,
    url: "../../img/slide/node.png",
  },
  {
    id: 6,
    url: "../img/slide/python.png",
  },
  {
    id: 7,
    url: "../img/slide/react.png",
  },
  {
    id: 8,
    url: "../img/slide/sql.png",
  },
  {
    id: 9,
    url: "../img/slide/terminal.png",
  },
  {
    id: 10,
    url: "../img/slide/vscode.png",
  },
];
