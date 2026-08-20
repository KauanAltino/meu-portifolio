import{c as e,i as t,n,r}from"./index-JBWm5MPc.js";import{t as i}from"./Footer-_QJL2iHB.js";import{t as a}from"./Navbar-c6TNChiR.js";var o=e(t(),1),s=n();function c({children:e}){return(0,s.jsx)(`pre`,{className:`article-code`,children:(0,s.jsx)(`code`,{children:e})})}function l(){return(0,o.useEffect)(()=>{document.title=`Análise exploratória de dados com Python e Pandas | Kauan Altino`;let e=document.querySelector(`meta[name="description"]`);e||(e=document.createElement(`meta`),e.setAttribute(`name`,`description`),document.head.appendChild(e)),e.setAttribute(`content`,`Um fluxo prático de análise exploratória com Python, Pandas e Matplotlib para limpar dados de vendas e gerar insights.`)},[]),(0,s.jsxs)(`div`,{className:`article-page`,id:`top`,children:[(0,s.jsx)(a,{pageTitle:`Blog`}),(0,s.jsxs)(`main`,{className:`article-layout`,children:[(0,s.jsxs)(`article`,{className:`article-content`,children:[(0,s.jsxs)(`header`,{className:`article-header`,children:[(0,s.jsx)(`p`,{className:`section-eyebrow`,children:`Data Analytics · Python`}),(0,s.jsx)(`h1`,{children:`Análise exploratória de dados com Python e Pandas`}),(0,s.jsx)(`p`,{className:`article-lead`,children:`Um fluxo prático de limpeza, entendimento e geração de insights a partir de dados de vendas.`}),(0,s.jsxs)(`div`,{className:`article-meta`,children:[(0,s.jsx)(`span`,{children:`14 de agosto de 2026`}),(0,s.jsx)(`span`,{children:`8 min de leitura`}),(0,s.jsx)(r,{to:`/blog`,children:`Voltar para os artigos`})]})]}),(0,s.jsxs)(`section`,{id:`eda`,children:[(0,s.jsx)(`h2`,{children:`1. O que é Análise Exploratória de Dados?`}),(0,s.jsx)(`p`,{children:`Análise Exploratória de Dados, ou EDA, é a etapa em que conhecemos uma base antes de tirar conclusões. O objetivo é identificar sua estrutura, problemas de qualidade, comportamentos e oportunidades.`}),(0,s.jsxs)(`p`,{children:[`Para um Analista de Dados, o fluxo costuma ser: `,(0,s.jsx)(`strong`,{children:`entender`}),`,`,(0,s.jsx)(`strong`,{children:` limpar`}),`, `,(0,s.jsx)(`strong`,{children:`explorar`}),`, `,(0,s.jsx)(`strong`,{children:`visualizar`}),` e`,(0,s.jsx)(`strong`,{children:` encontrar insights`}),`. Não é apenas rodar comandos: é fazer boas perguntas para os dados.`]})]}),(0,s.jsxs)(`section`,{id:`python-pandas`,children:[(0,s.jsx)(`h2`,{children:`2. Python e Pandas`}),(0,s.jsx)(`p`,{children:`Python é muito usado em Dados por ser simples de ler e ter bibliotecas úteis para análise. Pandas é a biblioteca que permite trabalhar com tabelas em Python de forma parecida com uma planilha, mas com operações reproduzíveis em código.`}),(0,s.jsxs)(`p`,{children:[`A estrutura central do Pandas é o `,(0,s.jsx)(`strong`,{children:`DataFrame`}),`: uma tabela com linhas e colunas. É nela que vamos filtrar, criar métricas, agrupar dados e preparar análises.`]})]}),(0,s.jsxs)(`section`,{id:`cenario`,children:[(0,s.jsx)(`h2`,{children:`3. Exemplo prático: análise de vendas`}),(0,s.jsxs)(`p`,{children:[`Vamos considerar um arquivo `,(0,s.jsx)(`code`,{children:`vendas.csv`}),`. Cada linha representa um item vendido e possui as colunas `,(0,s.jsx)(`code`,{children:`data`}),`, `,(0,s.jsx)(`code`,{children:`produto`}),`, `,(0,s.jsx)(`code`,{children:`categoria`}),`,`,(0,s.jsx)(`code`,{children:`cidade`}),`, `,(0,s.jsx)(`code`,{children:`quantidade`}),` e `,(0,s.jsx)(`code`,{children:`preco`}),`.`]}),(0,s.jsx)(`p`,{children:`Com essa base, queremos responder:`}),(0,s.jsxs)(`ul`,{children:[(0,s.jsx)(`li`,{children:`Quanto a empresa faturou?`}),(0,s.jsx)(`li`,{children:`Qual produto vende mais unidades?`}),(0,s.jsx)(`li`,{children:`Qual categoria gera mais receita?`}),(0,s.jsx)(`li`,{children:`Como as vendas evoluem ao longo do tempo?`})]})]}),(0,s.jsxs)(`section`,{id:`importacao`,children:[(0,s.jsx)(`h2`,{children:`4. Importando e conhecendo os dados`}),(0,s.jsx)(c,{children:`import pandas as pd

df = pd.read_csv("vendas.csv")

df.head()
df.info()
df.describe()`}),(0,s.jsxs)(`p`,{children:[(0,s.jsx)(`code`,{children:`read_csv()`}),` carrega o arquivo. `,(0,s.jsx)(`code`,{children:`head()`}),` mostra as primeiras linhas;`,(0,s.jsx)(`code`,{children:`info()`}),` revela colunas, tipos e valores não nulos; e `,(0,s.jsx)(`code`,{children:`describe()`}),`resume medidas como média, mínimo e máximo das colunas numéricas.`]}),(0,s.jsx)(`p`,{children:`Esses três comandos já ajudam a detectar se a base parece ter o formato esperado antes de qualquer análise.`})]}),(0,s.jsxs)(`section`,{id:`qualidade`,children:[(0,s.jsx)(`h2`,{children:`5. Verificando a qualidade dos dados`}),(0,s.jsx)(c,{children:`df.isnull().sum()
df.duplicated().sum()
df.dtypes`}),(0,s.jsx)(`p`,{children:`Valores ausentes podem indicar campos não preenchidos; duplicidades podem inflar métricas; e tipos incorretos, como uma data lida como texto, impedem análises temporais corretas.`}),(0,s.jsx)(c,{children:`df["data"] = pd.to_datetime(df["data"], errors="coerce")
df = df.drop_duplicates()
df = df.dropna(subset=["data", "quantidade", "preco"])`}),(0,s.jsx)(`p`,{children:`Aqui convertemos a data, removemos linhas repetidas e descartamos registros que não podem ser usados para calcular faturamento. Em um projeto real, a decisão de remover ou preencher valores sempre depende do contexto do negócio.`})]}),(0,s.jsxs)(`section`,{id:`metricas`,children:[(0,s.jsx)(`h2`,{children:`6. Criando métricas e explorando os dados`}),(0,s.jsx)(`p`,{children:`A métrica mais importante neste cenário é o faturamento: quantidade vendida multiplicada pelo preço unitário.`}),(0,s.jsx)(c,{children:`df["faturamento"] = df["quantidade"] * df["preco"]

faturamento_categoria = (
    df.groupby("categoria")["faturamento"]
      .sum()
      .sort_values(ascending=False)
)

produtos_mais_vendidos = (
    df.groupby("produto")["quantidade"]
      .sum()
      .sort_values(ascending=False)
)

print(faturamento_categoria)
print(produtos_mais_vendidos)`}),(0,s.jsxs)(`p`,{children:[(0,s.jsx)(`code`,{children:`groupby()`}),` reúne linhas da mesma categoria ou produto. Em seguida,`,(0,s.jsx)(`code`,{children:`sum()`}),` calcula o total e `,(0,s.jsx)(`code`,{children:`sort_values()`}),` ordena do maior para o menor. A primeira análise mostra quais categorias sustentam a receita; a segunda revela quais itens têm maior saída.`]})]}),(0,s.jsxs)(`section`,{id:`tempo`,children:[(0,s.jsx)(`h2`,{children:`7. Analisando o tempo`}),(0,s.jsx)(`p`,{children:`Com a coluna de data convertida, podemos resumir o faturamento por mês.`}),(0,s.jsx)(c,{children:`df["data"] = pd.to_datetime(df["data"])
df["mes"] = df["data"].dt.to_period("M")

faturamento_mensal = (
    df.groupby("mes")["faturamento"]
      .sum()
      .sort_index()
)

print(faturamento_mensal)`}),(0,s.jsxs)(`p`,{children:[`A coluna `,(0,s.jsx)(`code`,{children:`mes`}),` agrupa todas as vendas do mesmo período. Ao observar a série, podemos identificar crescimento, quedas inesperadas ou meses com maior movimentação.`]})]}),(0,s.jsxs)(`section`,{id:`visualizacao`,children:[(0,s.jsx)(`h2`,{children:`8. Visualizando os resultados`}),(0,s.jsx)(`p`,{children:`Depois da análise, gráficos ajudam a comunicar padrões rapidamente. Matplotlib é suficiente para os exemplos abaixo.`}),(0,s.jsx)(c,{children:`import matplotlib.pyplot as plt

faturamento_categoria.plot(kind="bar", color="#3b82f6")
plt.title("Faturamento por categoria")
plt.ylabel("Faturamento (R$)")
plt.tight_layout()
plt.show()`}),(0,s.jsx)(`p`,{children:`O gráfico de barras facilita comparar categorias e visualizar qual delas contribui mais para a receita.`}),(0,s.jsx)(c,{children:`faturamento_mensal.plot(kind="line", marker="o", color="#7c3aed")
plt.title("Evolução do faturamento mensal")
plt.ylabel("Faturamento (R$)")
plt.tight_layout()
plt.show()`}),(0,s.jsx)(`p`,{children:`O gráfico de linha mostra evolução e sazonalidade ao longo do tempo, ajudando a destacar meses de alta ou baixa.`}),(0,s.jsx)(c,{children:`df["faturamento"].plot(kind="hist", bins=20, color="#22c55e")
plt.title("Distribuição do faturamento por venda")
plt.xlabel("Faturamento (R$)")
plt.tight_layout()
plt.show()`}),(0,s.jsx)(`p`,{children:`O histograma mostra como os valores de venda se distribuem: muitos pedidos pequenos, poucos pedidos altos ou uma distribuição mais equilibrada.`})]}),(0,s.jsxs)(`section`,{id:`insights`,children:[(0,s.jsx)(`h2`,{children:`9. Transformando dados em insights`}),(0,s.jsx)(`p`,{children:`Um resultado é um número. Um insight explica por que esse número merece atenção e qual decisão ele pode orientar.`}),(0,s.jsx)(`div`,{className:`article-table-wrap`,children:(0,s.jsxs)(`table`,{children:[(0,s.jsx)(`thead`,{children:(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`th`,{children:`Resultado`}),(0,s.jsx)(`th`,{children:`Insight`})]})}),(0,s.jsxs)(`tbody`,{children:[(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`td`,{children:`Eletrônicos faturou R$ 50.000.`}),(0,s.jsx)(`td`,{children:`Eletrônicos lidera a receita e tem forte impacto no resultado comercial.`})]}),(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`td`,{children:`O Produto A vendeu mais unidades.`}),(0,s.jsx)(`td`,{children:`O Produto A pode orientar estoque, campanhas e produtos complementares.`})]}),(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`td`,{children:`As vendas caíram em julho.`}),(0,s.jsx)(`td`,{children:`Vale investigar preço, estoque, campanhas ou sazonalidade antes de definir uma ação.`})]})]})]})}),(0,s.jsx)(`p`,{children:`O papel do analista é conectar o dado ao contexto. Antes de concluir algo, compare períodos, valide a qualidade da base e converse com quem conhece a operação.`})]}),(0,s.jsxs)(`section`,{id:`fluxo`,children:[(0,s.jsx)(`h2`,{children:`10. O fluxo completo`}),(0,s.jsx)(c,{children:`Dataset
   ↓
Importação
   ↓
Entendimento dos dados
   ↓
Limpeza
   ↓
Criação de métricas
   ↓
Análise
   ↓
Visualização
   ↓
Insights`}),(0,s.jsx)(`p`,{children:`Esse fluxo pode ser adaptado para dados de clientes, operações, marketing ou finanças. As perguntas mudam, mas a necessidade de entender e confiar na base continua a mesma.`})]}),(0,s.jsxs)(`section`,{id:`conclusao`,children:[(0,s.jsx)(`h2`,{children:`11. Conclusão`}),(0,s.jsx)(`p`,{children:`EDA não é apenas executar comandos do Pandas. É usar Python, Pandas e Matplotlib para entender os dados, identificar problemas, responder perguntas, encontrar padrões e gerar insights. Essa etapa é uma das bases do trabalho de um Analista de Dados, porque boas decisões dependem de uma leitura correta da informação disponível.`})]})]}),(0,s.jsxs)(`aside`,{className:`article-toc`,"aria-label":`Índice do artigo`,children:[(0,s.jsx)(`p`,{children:`Neste artigo`}),(0,s.jsx)(`a`,{href:`#eda`,children:`O que é EDA`}),(0,s.jsx)(`a`,{href:`#importacao`,children:`Importação e entendimento`}),(0,s.jsx)(`a`,{href:`#qualidade`,children:`Qualidade dos dados`}),(0,s.jsx)(`a`,{href:`#metricas`,children:`Métricas de vendas`}),(0,s.jsx)(`a`,{href:`#visualizacao`,children:`Visualizações`}),(0,s.jsx)(`a`,{href:`#insights`,children:`Insights de negócio`})]})]}),(0,s.jsx)(i,{backHref:`#top`})]})}export{l as default};