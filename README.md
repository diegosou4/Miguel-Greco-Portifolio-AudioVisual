# Miguel Greco — portfólio audiovisual

Site em React e Vite com mídia real do portfólio original. Inclui seleção de filmes, filtros, acervo completo de 13 projetos, páginas de filme e contato via WhatsApp.

## Executar

```sh
npm ci
npm run dev
```

## Gerar o site

```sh
npm run build
```

O resultado está em `dist/`. Hospedagem estática, sem credenciais no cliente e sem servidor de aplicação.

## Atualizar projetos

Os filmes e créditos ficam em `src/projects.js`. As capas e o vídeo de abertura ficam em `public/assets/`. Cada filme usa um endereço individual no formato `#filme/nome-do-projeto`. A seleção inicial é definida no componente `Portfolio` de `src/main.jsx`.

O formulário monta uma mensagem e oferece um link para o WhatsApp; o visitante revisa e envia por lá. O site não armazena nem envia os dados do formulário a um servidor próprio.

## Conteúdo e limites desta versão

- Fontes das mídias registradas em `ASSET-SOURCES.json` e nos metadados de cada imagem.
- Créditos preservados a partir do portfólio público original; nomes de alguns projetos identificados pelas capas.
- Filmes completos incorporados pelo Google Drive, com acesso ao arquivo original caso o player não carregue.
- A primeira versão não inclui painel CMS, formulário de e-mail nem novas alegações de clientes, prêmios ou resultados.
- O trabalho da Coca-Cola mencionado pelo usuário ainda precisa ser identificado para inclusão com os créditos corretos.
- A fonte Manrope é distribuída com sua licença OFL em `public/assets/Manrope-OFL.txt`.
