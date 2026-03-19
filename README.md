<p align="center">
  <img src="./logo.jpeg" alt="Logomarca Miguel Almeida Cunha" width="110" />
</p>

<h1 align="center">Miguel Almeida Cunha</h1>

<p align="center">
  Landing page institucional com identidade visual sobria, elegante e responsiva.
</p>

<p align="center">
  <code>HTML5</code> | <code>CSS3</code> | <code>JavaScript</code>
</p>

---

Landing page institucional para o escritorio de advocacia de Miguel Almeida Cunha, com foco em apresentacao de areas de atuacao, diferenciais, perfil profissional e canais de contato.

## Visao geral

O projeto e um site estatico, sem etapa de build e sem dependencias de framework. A pagina foi construida para funcionar bem em desktop e mobile, com navegacao por ancoras e menu responsivo.

## Tecnologias

- HTML5
- CSS3
- JavaScript vanilla
- Google Fonts

## Funcionalidades

- Hero section com chamadas para atendimento
- Secoes de areas de atuacao, sobre, diferenciais e contato
- Menu responsivo com abertura/fechamento no mobile
- Rolagem suave entre secoes
- Layout adaptado para telas menores
- Metadados basicos de SEO no HTML

## Estrutura do projeto

```text
.
|-- index.html
|-- styles.css
|-- logo.jpeg
`-- README.md
```

## Como executar localmente

Como o projeto e estatico, basta abrir o `index.html` no navegador. Se preferir rodar com um servidor local, use qualquer servidor estatico.

Exemplo com Python:

```bash
python -m http.server 5500
```

Depois acesse `http://localhost:5500`.

## Personalizacao

Os principais pontos de edicao ficam nestes arquivos:

- `index.html`: textos, links, secoes, metadados e script do menu mobile
- `styles.css`: cores, tipografia, espacamentos, responsividade e animacoes
- `logo.jpeg`: identidade visual exibida no cabecalho

Alguns ajustes comuns:

- Alterar e-mail e Instagram na secao de contato
- Atualizar descricao, titulo e metadados no `<head>`
- Trocar a logo por outro arquivo de imagem
- Revisar textos institucionais e areas de atuacao

## Deploy

O projeto pode ser publicado em qualquer hospedagem de site estatico, como:

- GitHub Pages
- Netlify
- Vercel
- Hospedagem tradicional com suporte a arquivos HTML/CSS/JS

## Observacoes

- O menu mobile e controlado por um script inline no final do `index.html`
- O projeto depende de carregamento externo das fontes via Google Fonts
