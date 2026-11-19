Portfólio da Jho

Portfólio pessoal de Jhovana Thomaz, estudante de Sistemas de Informação interessada em desenvolvimento web Full Stack. O site apresenta sua trajetória, interesses, habilidades, projetos e formas de contato.

## Tecnologias

- **HTML5** para a estrutura semântica e acessível das páginas.
- **CSS3** para identidade visual, layouts com Grid e Flexbox e adaptação a diferentes telas.
- **JavaScript** para controlar o menu de navegação em dispositivos móveis.

O site é estático e não precisa de frameworks, instalação de dependências, compilação ou servidor de aplicação. As fontes DM Sans e Playfair Display são carregadas pelo Google Fonts quando há conexão com a internet; fontes alternativas são usadas se elas não estiverem disponíveis.

## Estrutura de arquivos

```text
jho-portfolio/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── childhood-computer.png
    ├── flower-decor.png
    ├── graduation-portrait.png
    ├── graduation-stage.png
    ├── hero-stage.png
    └── stage-photo.png
```

### Arquivos principais

- `index.html` contém as seções e o conteúdo do portfólio.
- `styles.css` define cores, tipografia, espaçamentos, imagens, cartões e estilos responsivos.
- `script.js` implementa a abertura e o fechamento do menu em telas pequenas.
- `assets/` reúne as imagens usadas no site.

## Seções do site

1. **Início:** apresentação curta, nome e foto.
2. **Sobre mim:** formação, interesses e características pessoais.
3. **Minha história:** origem do interesse por computadores, jogos e programação.
4. **Habilidades:** tecnologias e ferramentas estudadas.
5. **Projetos:** apresentação dos trabalhos e links para os repositórios.
6. **Contato:** e-mail, WhatsApp, LinkedIn e GitHub.

## Como abrir localmente

1. Extraia a pasta do ZIP, caso tenha baixado o pacote compactado.
2. Abra `index.html` diretamente no navegador.

Para acompanhar alterações enquanto edita, abra a pasta no Visual Studio Code e use uma extensão de servidor local, como Live Server.

## Como editar o conteúdo

- **Textos, links, nomes de projetos e contatos:** edite os elementos correspondentes em `index.html`.
- **Habilidades:** procure a lista com a classe `skill-list` em `index.html`.
- **Cartões de projeto:** cada projeto é um elemento `article` com a classe `project-card`. Atualize o título, descrição, tecnologias e endereço do repositório.
- **Menu:** os links do cabeçalho apontam para seções por meio dos atributos `href` e `id`. Se uma seção mudar de identificador, atualize o link correspondente.
- **Imagens:** substitua os arquivos de `assets/` mantendo os nomes atuais ou atualize os caminhos `src` em `index.html` e os caminhos de imagem em `styles.css`.
- **Aparência:** cores e fontes principais ficam nas variáveis no início de `styles.css`; os demais estilos estão organizados por seção.

## Publicação no GitHub Pages

O site pode ser publicado como um site estático. Envie `index.html`, `styles.css`, `script.js` e a pasta `assets/` para o repositório e configure o GitHub Pages para publicar a pasta que contém o `index.html`. Se o portfólio ficar dentro de uma subpasta, o endereço do site também terá essa subpasta no caminho.

## Acessibilidade e adaptação

- O HTML usa landmarks e títulos de seção para facilitar a navegação assistiva.
- As imagens de conteúdo têm descrições alternativas; as ilustrações decorativas são ignoradas por leitores de tela.
- O menu móvel informa seu estado com `aria-expanded` e pode ser fechado com a tecla `Escape`.
- A folha de estilos inclui ajustes para celular, tablet e telas maiores, além de respeitar a preferência por movimento reduzido.
