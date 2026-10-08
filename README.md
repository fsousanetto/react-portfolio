# Portfólio | Francisco Moreira

Portfólio profissional de Francisco Moreira, Analista de Sistemas e Desenvolvedor Web Fullstack. O projeto apresenta sua trajetória, principais tecnologias, projetos desenvolvidos e canais de contato em uma interface responsiva.

## Visão geral

O site é composto por uma página única com as seguintes seções:

- **Início**: apresentação profissional, avatar e links para GitHub, LinkedIn e WhatsApp.
- **Sobre**: resumo da formação e experiência profissional.
- **Projetos**: trabalhos com descrição, tecnologias utilizadas, repositório e demonstração quando disponíveis.
- **Contato**: informações para colaborações, parcerias e oportunidades.
- **Tecnologias**: apresentação visual das ferramentas e linguagens utilizadas.

## Tecnologias

- React 19
- TypeScript
- Vite
- React Router DOM
- Swiper
- React Icons
- Sass e CSS Modules
- ESLint

## Requisitos

- Node.js 18 ou superior
- npm

## Instalação e execução

Clone o repositório, entre na pasta do projeto e instale as dependências:

```bash
git clone https://github.com/fsousanetto/francisco.moreira.git
cd francisco.moreira
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O endereço local será exibido no terminal, normalmente `http://localhost:5173`.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com atualização automática. |
| `npm run build` | Verifica os tipos TypeScript e gera a versão de produção. |
| `npm run lint` | Executa o ESLint em todo o projeto. |
| `npm run preview` | Serve localmente a build de produção. |

## Estrutura principal

```text
src/
├── components/       # Componentes reutilizáveis da interface
├── data/             # Dados do perfil, projetos e tecnologias
├── pages/            # Seções principais do portfólio
├── types/            # Tipos TypeScript compartilhados
├── App.tsx           # Componente raiz
└── main.tsx          # Ponto de entrada da aplicação
```

## Personalização

Os dados exibidos no portfólio ficam principalmente em [`src/data/data.ts`](src/data/data.ts). Nesse arquivo é possível atualizar:

- nome, cargo, descrição e avatar;
- informações de contato;
- links das redes sociais;
- projetos, tecnologias, imagens e links externos;
- itens do carrossel de tecnologias.

Imagens e outros recursos estáticos ficam em `src/data/img/` e `public/img/`.

## Validação local

Antes de publicar uma alteração, execute:

```bash
npm run lint
npm run build
```

## Licença

Este projeto é um portfólio pessoal. Para reutilizar conteúdo, imagens ou informações de contato, entre em contato com o autor.
