# Treinador Felipe de Souza — Personal Trainer e Treinador Esportivo

Landing page responsiva para apresentar Felipe de Souza, bacharel em Educação Física (CREF F025547-PR), seus serviços em Cascavel–PR e a consultoria online, gerando contatos pelo WhatsApp.

## Tecnologias

- HTML5 semântico.
- CSS3: Grid, Flexbox, propriedades personalizadas e media queries.
- JavaScript puro, sem bibliotecas, frameworks ou etapa de build.
- SVG local para favicon. Elementos de pista desenhados em CSS, sem fotografias ou fontes externas.

## Funcionalidades

- Navegação fixa, rolagem suave e menu mobile com suporte a Escape.
- Apresentação profissional, benefícios e sete serviços: Personal Trainer, consultoria online, musculação, corrida, natação, ciclismo e triatlo.
- Formatos presencial, online e preparação esportiva, com condições a combinar.
- Depoimentos **fictícios e explicitamente identificados como demonstração**. Substitua-os apenas por relatos reais autorizados e remova os avisos somente após essa substituição.
- FAQ expansível nativo (`details`/`summary`), inclusive sem JavaScript.
- Formulário com validação, seleção de modalidade/formato e geração de mensagem para o WhatsApp.
- Links de serviço preenchem a modalidade; links de atendimento preenchem o formato.
- WhatsApp flutuante, link alternativo para bloqueadores de pop-up e atualização automática do ano.
- Link para pular ao conteúdo, foco visível, campos rotulados, status acessível e respeito a `prefers-reduced-motion`.
- Layout adaptável para smartphones, tablets e desktop.

## Estrutura

```text
felipe-personal-landing/
├── index.html          # Conteúdo e estrutura semântica
├── style.css           # Identidade visual e responsividade, organizada por seção
├── script.js           # Navegação, pré-seleção e integração WhatsApp
├── README.md
├── .gitignore
└── assets/
    └── favicon.svg     # Ícone vetorial local
```

## Executar localmente

Abra `index.html` no navegador. Não é necessário instalar dependências.

Opcionalmente, com Python instalado, execute na pasta do projeto:

```sh
python -m http.server 8080
```

Acesse `http://localhost:8080`. Para encerrar o servidor, use `Ctrl+C`.

## Configuração e conteúdo

O número fornecido, **+55 (45) 99816-9954**, já está configurado. Para alterá-lo, atualize `WHATSAPP_NUMBER` em `script.js` (somente dígitos) e os links de contingência, a ação do formulário e o telefone exibido em `index.html`.

Revise textos e condições antes de campanhas. Não há preços, promessas de resultados ou relatos reais inventados. Os formatos apresentados são descritivos; frequência, valores, disponibilidade e local são combinados diretamente.

## Privacidade e comportamento do formulário

O site não usa cookies, rastreadores, banco de dados ou armazenamento local. Os campos são mantidos apenas na página e compõem um link `wa.me` quando a pessoa envia o formulário. O WhatsApp recebe os dados da mensagem ao abrir o link; a pessoa ainda precisa revisar e tocar em enviar. Não solicite informações médicas no formulário.

Se o navegador bloquear a nova aba, o link “Abrir mensagem no WhatsApp” permite continuar. Sem JavaScript, os links diretos continuam funcionando; a composição personalizada requer JavaScript.

## Publicação

Por ser estático, o projeto pode ser servido por qualquer hospedagem de HTML/CSS/JS. Em GitHub Pages, publique a raiz da branch que contém estes arquivos em **Settings → Pages → Deploy from a branch**. Criar um repositório público não ativa automaticamente o GitHub Pages.

## Revisão manual

1. Abra em larguras de 320, 375, 768, 1024 e 1440 pixels e confira ausência de rolagem horizontal.
2. Use Tab, Enter e Escape para testar navegação, menu, FAQ e formulário.
3. Teste campos obrigatórios, nomes apenas com espaços e mensagens com acentos ou símbolos.
4. Confira modalidade e formato pré-selecionados pelos respectivos links.
5. Verifique o número e o texto gerado no link do WhatsApp, sem enviar uma mensagem de teste real.
6. Confira menu e FAQ sem JavaScript e com preferência por movimento reduzido.

