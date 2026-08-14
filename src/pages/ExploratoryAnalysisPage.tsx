import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

type PythonCodeProps = {
  children: string
}

function PythonCode({ children }: PythonCodeProps) {
  return (
    <pre className="article-code">
      <code>{children}</code>
    </pre>
  )
}

export default function ExploratoryAnalysisPage() {
  useEffect(() => {
    document.title = 'Análise exploratória de dados com Python e Pandas | Kauan Altino'

    const description =
      'Um fluxo prático de análise exploratória com Python, Pandas e Matplotlib para limpar dados de vendas e gerar insights.'
    let metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]')

    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }

    metaDescription.setAttribute('content', description)
  }, [])

  return (
    <div className="article-page" id="top">
      <Navbar pageTitle="Blog" />

      <main className="article-layout">
        <article className="article-content">
          <header className="article-header">
            <p className="section-eyebrow">Data Analytics · Python</p>
            <h1>Análise exploratória de dados com Python e Pandas</h1>
            <p className="article-lead">
              Um fluxo prático de limpeza, entendimento e geração de insights a partir de dados de vendas.
            </p>
            <div className="article-meta">
              <span>14 de agosto de 2026</span>
              <span>8 min de leitura</span>
              <Link to="/blog">Voltar para os artigos</Link>
            </div>
          </header>

          <section id="eda">
            <h2>1. O que é Análise Exploratória de Dados?</h2>
            <p>
              Análise Exploratória de Dados, ou EDA, é a etapa em que conhecemos uma base antes de
              tirar conclusões. O objetivo é identificar sua estrutura, problemas de qualidade,
              comportamentos e oportunidades.
            </p>
            <p>
              Para um Analista de Dados, o fluxo costuma ser: <strong>entender</strong>,
              <strong> limpar</strong>, <strong>explorar</strong>, <strong>visualizar</strong> e
              <strong> encontrar insights</strong>. Não é apenas rodar comandos: é fazer boas perguntas
              para os dados.
            </p>
          </section>

          <section id="python-pandas">
            <h2>2. Python e Pandas</h2>
            <p>
              Python é muito usado em Dados por ser simples de ler e ter bibliotecas úteis para
              análise. Pandas é a biblioteca que permite trabalhar com tabelas em Python de forma
              parecida com uma planilha, mas com operações reproduzíveis em código.
            </p>
            <p>
              A estrutura central do Pandas é o <strong>DataFrame</strong>: uma tabela com linhas e
              colunas. É nela que vamos filtrar, criar métricas, agrupar dados e preparar análises.
            </p>
          </section>

          <section id="cenario">
            <h2>3. Exemplo prático: análise de vendas</h2>
            <p>
              Vamos considerar um arquivo <code>vendas.csv</code>. Cada linha representa um item vendido
              e possui as colunas <code>data</code>, <code>produto</code>, <code>categoria</code>,
              <code>cidade</code>, <code>quantidade</code> e <code>preco</code>.
            </p>
            <p>Com essa base, queremos responder:</p>
            <ul>
              <li>Quanto a empresa faturou?</li>
              <li>Qual produto vende mais unidades?</li>
              <li>Qual categoria gera mais receita?</li>
              <li>Como as vendas evoluem ao longo do tempo?</li>
            </ul>
          </section>

          <section id="importacao">
            <h2>4. Importando e conhecendo os dados</h2>
            <PythonCode>{`import pandas as pd\n\ndf = pd.read_csv("vendas.csv")\n\ndf.head()\ndf.info()\ndf.describe()`}</PythonCode>
            <p>
              <code>read_csv()</code> carrega o arquivo. <code>head()</code> mostra as primeiras linhas;
              <code>info()</code> revela colunas, tipos e valores não nulos; e <code>describe()</code>
              resume medidas como média, mínimo e máximo das colunas numéricas.
            </p>
            <p>Esses três comandos já ajudam a detectar se a base parece ter o formato esperado antes de qualquer análise.</p>
          </section>

          <section id="qualidade">
            <h2>5. Verificando a qualidade dos dados</h2>
            <PythonCode>{`df.isnull().sum()\ndf.duplicated().sum()\ndf.dtypes`}</PythonCode>
            <p>
              Valores ausentes podem indicar campos não preenchidos; duplicidades podem inflar métricas;
              e tipos incorretos, como uma data lida como texto, impedem análises temporais corretas.
            </p>
            <PythonCode>{`df["data"] = pd.to_datetime(df["data"], errors="coerce")\ndf = df.drop_duplicates()\ndf = df.dropna(subset=["data", "quantidade", "preco"])`}</PythonCode>
            <p>
              Aqui convertemos a data, removemos linhas repetidas e descartamos registros que não podem
              ser usados para calcular faturamento. Em um projeto real, a decisão de remover ou
              preencher valores sempre depende do contexto do negócio.
            </p>
          </section>

          <section id="metricas">
            <h2>6. Criando métricas e explorando os dados</h2>
            <p>A métrica mais importante neste cenário é o faturamento: quantidade vendida multiplicada pelo preço unitário.</p>
            <PythonCode>{`df["faturamento"] = df["quantidade"] * df["preco"]\n\nfaturamento_categoria = (\n    df.groupby("categoria")["faturamento"]\n      .sum()\n      .sort_values(ascending=False)\n)\n\nprodutos_mais_vendidos = (\n    df.groupby("produto")["quantidade"]\n      .sum()\n      .sort_values(ascending=False)\n)\n\nprint(faturamento_categoria)\nprint(produtos_mais_vendidos)`}</PythonCode>
            <p>
              <code>groupby()</code> reúne linhas da mesma categoria ou produto. Em seguida,
              <code>sum()</code> calcula o total e <code>sort_values()</code> ordena do maior para o
              menor. A primeira análise mostra quais categorias sustentam a receita; a segunda revela
              quais itens têm maior saída.
            </p>
          </section>

          <section id="tempo">
            <h2>7. Analisando o tempo</h2>
            <p>Com a coluna de data convertida, podemos resumir o faturamento por mês.</p>
            <PythonCode>{`df["data"] = pd.to_datetime(df["data"])\ndf["mes"] = df["data"].dt.to_period("M")\n\nfaturamento_mensal = (\n    df.groupby("mes")["faturamento"]\n      .sum()\n      .sort_index()\n)\n\nprint(faturamento_mensal)`}</PythonCode>
            <p>
              A coluna <code>mes</code> agrupa todas as vendas do mesmo período. Ao observar a série,
              podemos identificar crescimento, quedas inesperadas ou meses com maior movimentação.
            </p>
          </section>

          <section id="visualizacao">
            <h2>8. Visualizando os resultados</h2>
            <p>Depois da análise, gráficos ajudam a comunicar padrões rapidamente. Matplotlib é suficiente para os exemplos abaixo.</p>
            <PythonCode>{`import matplotlib.pyplot as plt\n\nfaturamento_categoria.plot(kind="bar", color="#3b82f6")\nplt.title("Faturamento por categoria")\nplt.ylabel("Faturamento (R$)")\nplt.tight_layout()\nplt.show()`}</PythonCode>
            <p>O gráfico de barras facilita comparar categorias e visualizar qual delas contribui mais para a receita.</p>
            <PythonCode>{`faturamento_mensal.plot(kind="line", marker="o", color="#7c3aed")\nplt.title("Evolução do faturamento mensal")\nplt.ylabel("Faturamento (R$)")\nplt.tight_layout()\nplt.show()`}</PythonCode>
            <p>O gráfico de linha mostra evolução e sazonalidade ao longo do tempo, ajudando a destacar meses de alta ou baixa.</p>
            <PythonCode>{`df["faturamento"].plot(kind="hist", bins=20, color="#22c55e")\nplt.title("Distribuição do faturamento por venda")\nplt.xlabel("Faturamento (R$)")\nplt.tight_layout()\nplt.show()`}</PythonCode>
            <p>O histograma mostra como os valores de venda se distribuem: muitos pedidos pequenos, poucos pedidos altos ou uma distribuição mais equilibrada.</p>
          </section>

          <section id="insights">
            <h2>9. Transformando dados em insights</h2>
            <p>Um resultado é um número. Um insight explica por que esse número merece atenção e qual decisão ele pode orientar.</p>
            <div className="article-table-wrap">
              <table>
                <thead><tr><th>Resultado</th><th>Insight</th></tr></thead>
                <tbody>
                  <tr><td>Eletrônicos faturou R$ 50.000.</td><td>Eletrônicos lidera a receita e tem forte impacto no resultado comercial.</td></tr>
                  <tr><td>O Produto A vendeu mais unidades.</td><td>O Produto A pode orientar estoque, campanhas e produtos complementares.</td></tr>
                  <tr><td>As vendas caíram em julho.</td><td>Vale investigar preço, estoque, campanhas ou sazonalidade antes de definir uma ação.</td></tr>
                </tbody>
              </table>
            </div>
            <p>O papel do analista é conectar o dado ao contexto. Antes de concluir algo, compare períodos, valide a qualidade da base e converse com quem conhece a operação.</p>
          </section>

          <section id="fluxo">
            <h2>10. O fluxo completo</h2>
            <PythonCode>{`Dataset\n   ↓\nImportação\n   ↓\nEntendimento dos dados\n   ↓\nLimpeza\n   ↓\nCriação de métricas\n   ↓\nAnálise\n   ↓\nVisualização\n   ↓\nInsights`}</PythonCode>
            <p>Esse fluxo pode ser adaptado para dados de clientes, operações, marketing ou finanças. As perguntas mudam, mas a necessidade de entender e confiar na base continua a mesma.</p>
          </section>

          <section id="conclusao">
            <h2>11. Conclusão</h2>
            <p>
              EDA não é apenas executar comandos do Pandas. É usar Python, Pandas e Matplotlib para
              entender os dados, identificar problemas, responder perguntas, encontrar padrões e gerar
              insights. Essa etapa é uma das bases do trabalho de um Analista de Dados, porque boas
              decisões dependem de uma leitura correta da informação disponível.
            </p>
          </section>
        </article>

        <aside className="article-toc" aria-label="Índice do artigo">
          <p>Neste artigo</p>
          <a href="#eda">O que é EDA</a>
          <a href="#importacao">Importação e entendimento</a>
          <a href="#qualidade">Qualidade dos dados</a>
          <a href="#metricas">Métricas de vendas</a>
          <a href="#visualizacao">Visualizações</a>
          <a href="#insights">Insights de negócio</a>
        </aside>
      </main>

      <Footer backHref="#top" />
    </div>
  )
}