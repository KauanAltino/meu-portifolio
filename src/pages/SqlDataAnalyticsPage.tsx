import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

type SqlCodeProps = {
  children: string
}

function SqlCode({ children }: SqlCodeProps) {
  return (
    <pre className="article-code">
      <code>{children}</code>
    </pre>
  )
}

export default function SqlDataAnalyticsPage() {
  useEffect(() => {
    document.title = 'SQL para Data Analytics | Kauan Altino'

    const description =
      'Aprenda SQL para Data Analytics com PostgreSQL, exemplos de vendas e consultas para análises de negócio.'
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
            <p className="section-eyebrow">Data Analytics · SQL</p>
            <h1>SQL para Data Analytics</h1>
            <p className="article-lead">
              Um guia prático para quem quer usar PostgreSQL para consultar, transformar e analisar
              dados que ajudam empresas a tomar decisões melhores.
            </p>
            <div className="article-meta">
              <span>14 de agosto de 2026</span>
              <span>25 min de leitura</span>
              <Link to="/blog">Voltar para os artigos</Link>
            </div>
          </header>

          <section id="o-que-e-sql">
            <h2>1. O que é SQL?</h2>
            <p>
              SQL significa <em>Structured Query Language</em>, ou Linguagem de Consulta Estruturada.
              É a linguagem usada para conversar com bancos de dados relacionais: consultar,
              organizar e transformar informações armazenadas em tabelas.
            </p>
            <p>
              SQL não é um banco de dados. PostgreSQL, MySQL e SQL Server são sistemas que guardam os
              dados; SQL é a linguagem usada para fazer perguntas a eles. Para profissionais de Dados,
              ela é essencial porque informações de clientes, vendas e operações costumam viver em
              bancos relacionais.
            </p>
          </section>

          <section id="analytics">
            <h2>2. SQL no contexto de Data Analytics</h2>
            <p>
              Um Analista de Dados usa SQL para transformar perguntas de negócio em respostas. Isso
              inclui consultar dados, filtrar registros, calcular métricas, agrupar resultados,
              combinar tabelas e preparar uma base para dashboards.
            </p>
            <ul>
              <li>Qual foi o faturamento por região no último mês?</li>
              <li>Quais categorias venderam mais no trimestre?</li>
              <li>Quais clientes deixaram de comprar?</li>
              <li>Qual tabela deve alimentar um painel de indicadores?</li>
            </ul>
            <p>
              A sintaxe é o meio. O objetivo é entender o problema, usar os dados certos e entregar
              uma resposta que ajude alguém a tomar uma decisão.
            </p>
          </section>

          <section id="relacional">
            <h2>3. Entendendo bancos de dados relacionais</h2>
            <p>
              Um banco de dados é uma coleção organizada de informações. Dentro dele, as tabelas
              funcionam como planilhas: cada linha é um registro e cada coluna descreve uma
              característica desse registro.
            </p>
            <div className="article-table-wrap">
              <table>
                <thead><tr><th>Conceito</th><th>Exemplo em vendas</th></tr></thead>
                <tbody>
                  <tr><td>Tabela</td><td><code>clientes</code>, <code>pedidos</code> ou <code>produtos</code></td></tr>
                  <tr><td>Linha</td><td>Um cliente ou um pedido específico</td></tr>
                  <tr><td>Coluna</td><td><code>cidade</code>, <code>data_pedido</code> ou <code>valor_total</code></td></tr>
                  <tr><td>Chave primária</td><td>Identificador único, como <code>cliente_id</code></td></tr>
                  <tr><td>Chave estrangeira</td><td>Campo que aponta para outra tabela, como <code>pedidos.cliente_id</code></td></tr>
                </tbody>
              </table>
            </div>
            <p>
              Quando <code>pedidos.cliente_id</code> aponta para <code>clientes.cliente_id</code>, existe
              um relacionamento. Essa ligação permite descobrir, por exemplo, quanto cada cliente
              comprou.
            </p>
          </section>

          <section id="select-from">
            <h2>4. SELECT e FROM</h2>
            <p><code>SELECT</code> define o que queremos ver e <code>FROM</code> informa de qual tabela os dados serão buscados.</p>
            <SqlCode>{`SELECT *\nFROM clientes;`}</SqlCode>
            <p>
              O asterisco traz todas as colunas. Ele ajuda a explorar uma tabela, mas em análises
              prefira selecionar somente o necessário: a consulta fica mais clara e evita dados sem
              utilidade.
            </p>
            <SqlCode>{`SELECT\n  nome AS cliente,\n  cidade AS cidade_do_cliente\nFROM clientes;`}</SqlCode>
            <p>
              Aqui selecionamos duas colunas e criamos aliases com <code>AS</code>. O resultado terá
              cabeçalhos mais legíveis, algo útil para entregar uma base pronta para um dashboard.
            </p>
          </section>

          <section id="where">
            <h2>5. WHERE</h2>
            <p>
              <code>WHERE</code> filtra linhas antes de qualquer cálculo. É o equivalente a filtrar uma
              planilha, mas de forma reproduzível e documentada.
            </p>
            <SqlCode>{`SELECT pedido_id, valor_total, status\nFROM pedidos\nWHERE status = 'concluido'\n  AND valor_total >= 500;`}</SqlCode>
            <p>
              A consulta retorna pedidos concluídos de pelo menos 500. Use <code>=</code> para
              igualdade, <code>&lt;&gt;</code> para diferente, <code>&gt;</code>, <code>&lt;</code>,
              <code>&gt;=</code> e <code>&lt;=</code> para comparações.
            </p>
            <SqlCode>{`SELECT nome, cidade\nFROM clientes\nWHERE cidade IN ('São Paulo', 'Rio de Janeiro')\n  AND nome NOT LIKE 'Teste%';`}</SqlCode>
            <p>
              <code>AND</code> exige as duas condições, <code>OR</code> aceita uma delas e
              <code>NOT</code> inverte a regra. <code>IN</code> substitui vários <code>OR</code>,
              <code>BETWEEN</code> filtra intervalos e <code>LIKE 'Teste%'</code> procura textos que
              começam com “Teste”.
            </p>
          </section>

          <section id="order-limit">
            <h2>6. ORDER BY e LIMIT</h2>
            <p><code>ORDER BY</code> organiza os resultados e <code>LIMIT</code> mantém apenas as primeiras linhas.</p>
            <SqlCode>{`SELECT pedido_id, valor_total\nFROM pedidos\nORDER BY valor_total DESC\nLIMIT 10;`}</SqlCode>
            <p><code>DESC</code> ordena do maior para o menor; <code>ASC</code>, o padrão, ordena do menor para o maior.</p>
          </section>

          <section id="distinct">
            <h2>7. DISTINCT</h2>
            <p>
              <code>DISTINCT</code> remove valores repetidos do resultado. É útil para conhecer as
              cidades atendidas ou os canais de venda disponíveis antes de iniciar uma análise.
            </p>
            <SqlCode>{`SELECT DISTINCT cidade\nFROM clientes\nORDER BY cidade;`}</SqlCode>
            <p>Não use <code>DISTINCT</code> apenas para esconder duplicidades: elas podem indicar um problema na origem ou em um JOIN.</p>
          </section>

          <section id="agregacoes">
            <h2>8. Funções de agregação</h2>
            <p>Agregações resumem muitas linhas em métricas úteis para o negócio.</p>
            <SqlCode>{`SELECT\n  COUNT(*) AS quantidade_pedidos,\n  SUM(valor_total) AS faturamento_total,\n  AVG(valor_total) AS ticket_medio,\n  MIN(valor_total) AS menor_pedido,\n  MAX(valor_total) AS maior_pedido\nFROM pedidos\nWHERE status = 'concluido';`}</SqlCode>
            <p>
              <code>COUNT</code> conta pedidos, <code>SUM</code> soma faturamento, <code>AVG</code>
              calcula ticket médio e <code>MIN</code>/<code>MAX</code> mostram extremos. O filtro evita
              que pedidos cancelados entrem nos indicadores.
            </p>
          </section>

          <section id="group-by">
            <h2>9. GROUP BY</h2>
            <p>
              <code>GROUP BY</code> separa os dados em grupos para que uma agregação seja calculada
              para cada um deles. Veja o faturamento por categoria:
            </p>
            <SqlCode>{`SELECT\n  pr.categoria,\n  SUM(ip.quantidade * ip.preco_unitario) AS faturamento\nFROM itens_pedido AS ip\nJOIN produtos AS pr ON pr.produto_id = ip.produto_id\nGROUP BY pr.categoria\nORDER BY faturamento DESC;`}</SqlCode>
            <p>
              Primeiro combinamos itens e produtos. Depois agrupamos as linhas da mesma categoria e
              somamos quantidade vezes preço. A mesma estrutura serve para vendas por cidade ou
              quantidade de clientes por estado.
            </p>
          </section>

          <section id="having">
            <h2>10. HAVING</h2>
            <p>
              <code>WHERE</code> filtra linhas antes do agrupamento; <code>HAVING</code> filtra grupos
              depois da agregação. Use <code>HAVING</code> quando a regra depende de <code>SUM</code>,
              <code>COUNT</code> ou outra função agregada.
            </p>
            <SqlCode>{`SELECT\n  cidade,\n  COUNT(*) AS total_clientes\nFROM clientes\nWHERE status = 'ativo'\nGROUP BY cidade\nHAVING COUNT(*) >= 10;`}</SqlCode>
            <p>O <code>WHERE</code> mantém clientes ativos; o <code>HAVING</code> exibe somente cidades com pelo menos dez deles.</p>
          </section>

          <section id="case-when">
            <h2>11. CASE WHEN</h2>
            <p><code>CASE WHEN</code> permite criar regras e classificações, ótimas para segmentar clientes e produtos.</p>
            <SqlCode>{`SELECT\n  cliente_id,\n  faturamento_total,\n  CASE\n    WHEN faturamento_total >= 5000 THEN 'alto valor'\n    WHEN faturamento_total >= 1000 THEN 'valor médio'\n    ELSE 'baixo valor'\n  END AS faixa_cliente\nFROM resumo_clientes;`}</SqlCode>
            <p>O banco testa as condições de cima para baixo. A primeira verdadeira define a faixa, que pode ser usada em um gráfico ou indicador.</p>
          </section>

          <section id="joins">
            <h2>12. JOINs</h2>
            <p>JOINs combinam tabelas relacionadas. Imagine <code>clientes</code> e <code>pedidos</code>: cada pedido possui um <code>cliente_id</code>.</p>
            <div className="article-table-wrap">
              <table>
                <thead><tr><th>JOIN</th><th>O que retorna</th><th>Uso comum</th></tr></thead>
                <tbody>
                  <tr><td>INNER JOIN</td><td>Apenas correspondências nas duas tabelas</td><td>Pedidos com cliente identificado</td></tr>
                  <tr><td>LEFT JOIN</td><td>Todas as linhas da tabela da esquerda</td><td>Clientes, mesmo sem pedidos</td></tr>
                  <tr><td>RIGHT JOIN</td><td>Todas as linhas da tabela da direita</td><td>Pode ser reescrito invertendo as tabelas</td></tr>
                  <tr><td>FULL OUTER JOIN</td><td>Todas as linhas dos dois lados</td><td>Auditar registros sem correspondência</td></tr>
                </tbody>
              </table>
            </div>
            <SqlCode>{`SELECT\n  c.nome,\n  p.pedido_id,\n  p.valor_total\nFROM clientes AS c\nLEFT JOIN pedidos AS p ON p.cliente_id = c.cliente_id;`}</SqlCode>
            <p>Como é um <code>LEFT JOIN</code>, todo cliente aparece. Quando não existe pedido, as colunas de <code>p</code> ficam como <code>NULL</code>.</p>
          </section>

          <section id="subqueries">
            <h2>13. Subqueries</h2>
            <p>Uma subquery é uma consulta dentro de outra. Ela ajuda quando uma resposta depende de uma métrica calculada antes.</p>
            <SqlCode>{`SELECT pedido_id, valor_total\nFROM pedidos\nWHERE valor_total > (\n  SELECT AVG(valor_total)\n  FROM pedidos\n  WHERE status = 'concluido'\n);`}</SqlCode>
            <p>A consulta interna encontra o ticket médio de pedidos concluídos; a externa mostra pedidos acima desse valor.</p>
          </section>

          <section id="ctes">
            <h2>14. CTEs</h2>
            <p>
              CTE significa <em>Common Table Expression</em>. Ela começa com <code>WITH</code> e dá um
              nome temporário a uma etapa da consulta, deixando análises complexas mais legíveis.
            </p>
            <SqlCode>{`WITH faturamento_por_cliente AS (\n  SELECT cliente_id, SUM(valor_total) AS faturamento_total\n  FROM pedidos\n  WHERE status = 'concluido'\n  GROUP BY cliente_id\n)\nSELECT cliente_id, faturamento_total\nFROM faturamento_por_cliente\nWHERE faturamento_total >= 5000;`}</SqlCode>
            <p>Primeiro criamos um resumo por cliente; depois filtramos clientes de alto valor. Uma subquery também resolveria, mas a CTE nomeia cada etapa.</p>
          </section>

          <section id="texto">
            <h2>15. Funções para trabalhar com texto</h2>
            <p>Dados reais podem chegar com letras em formatos diferentes, espaços extras ou campos separados.</p>
            <SqlCode>{`SELECT\n  UPPER(estado) AS estado_padronizado,\n  LOWER(email) AS email_padronizado,\n  TRIM(nome) AS nome_sem_espacos,\n  CONCAT(nome, ' - ', cidade) AS cliente_e_cidade\nFROM clientes;`}</SqlCode>
            <p><code>UPPER</code> e <code>LOWER</code> padronizam capitalização, <code>TRIM</code> remove espaços nas pontas e <code>CONCAT</code> une textos.</p>
          </section>

          <section id="datas">
            <h2>16. Trabalhando com datas</h2>
            <p>Datas permitem comparar períodos, criar análises mensais e identificar sazonalidade. No PostgreSQL, <code>DATE_TRUNC</code> agrupa uma data por mês.</p>
            <SqlCode>{`SELECT\n  DATE_TRUNC('month', data_pedido)::date AS mes,\n  SUM(valor_total) AS faturamento\nFROM pedidos\nWHERE data_pedido >= DATE '2026-01-01'\n  AND data_pedido < DATE '2027-01-01'\n  AND status = 'concluido'\nGROUP BY DATE_TRUNC('month', data_pedido)::date\nORDER BY mes;`}</SqlCode>
            <p>O período usa início inclusivo e fim exclusivo, uma prática segura quando a coluna também contém horário. <code>DATE_TRUNC</code> é a referência PostgreSQL; funções de data mudam entre bancos.</p>
          </section>

          <section id="null">
            <h2>17. Trabalhando com valores NULL</h2>
            <p><code>NULL</code> representa ausência de valor, não texto vazio e nem zero. Por isso, <code>= NULL</code> não funciona: use <code>IS NULL</code> ou <code>IS NOT NULL</code>.</p>
            <SqlCode>{`SELECT\n  nome,\n  COALESCE(telefone, 'não informado') AS telefone\nFROM clientes\nWHERE email IS NOT NULL;`}</SqlCode>
            <p><code>COALESCE</code> retorna o primeiro valor não nulo. Aqui, ele melhora a saída sem alterar os dados originais.</p>
          </section>

          <section id="caso-real">
            <h2>18. SQL aplicado a problemas reais de negócio</h2>
            <p>Vamos imaginar uma empresa de vendas com quatro tabelas relacionadas:</p>
            <SqlCode>{`clientes(cliente_id, nome, cidade, estado)\npedidos(pedido_id, cliente_id, data_pedido, status, valor_total)\nprodutos(produto_id, nome, categoria, preco)\nitens_pedido(pedido_id, produto_id, quantidade, preco_unitario)`}</SqlCode>
            <h3>Qual foi o faturamento total?</h3>
            <SqlCode>{`SELECT SUM(valor_total) AS faturamento_total\nFROM pedidos\nWHERE status = 'concluido';`}</SqlCode>
            <p>Somamos os pedidos concluídos para encontrar a receita efetivamente realizada.</p>
            <h3>Qual foi o produto mais vendido?</h3>
            <SqlCode>{`SELECT pr.nome, SUM(ip.quantidade) AS unidades_vendidas\nFROM itens_pedido AS ip\nJOIN produtos AS pr ON pr.produto_id = ip.produto_id\nGROUP BY pr.nome\nORDER BY unidades_vendidas DESC\nLIMIT 1;`}</SqlCode>
            <p>Unimos itens e produtos, somamos unidades por produto e mantemos o primeiro colocado.</p>
            <h3>Qual cidade possui mais clientes?</h3>
            <SqlCode>{`SELECT cidade, COUNT(*) AS total_clientes\nFROM clientes\nGROUP BY cidade\nORDER BY total_clientes DESC\nLIMIT 1;`}</SqlCode>
            <h3>Qual categoria gerou mais faturamento?</h3>
            <SqlCode>{`SELECT pr.categoria, SUM(ip.quantidade * ip.preco_unitario) AS faturamento\nFROM itens_pedido AS ip\nJOIN produtos AS pr ON pr.produto_id = ip.produto_id\nGROUP BY pr.categoria\nORDER BY faturamento DESC\nLIMIT 1;`}</SqlCode>
            <h3>Quais são os 10 maiores clientes?</h3>
            <SqlCode>{`SELECT c.nome, SUM(p.valor_total) AS faturamento_total\nFROM clientes AS c\nJOIN pedidos AS p ON p.cliente_id = c.cliente_id\nWHERE p.status = 'concluido'\nGROUP BY c.nome\nORDER BY faturamento_total DESC\nLIMIT 10;`}</SqlCode>
            <h3>Qual foi o faturamento por mês?</h3>
            <SqlCode>{`SELECT DATE_TRUNC('month', data_pedido)::date AS mes, SUM(valor_total) AS faturamento\nFROM pedidos\nWHERE status = 'concluido'\nGROUP BY DATE_TRUNC('month', data_pedido)::date\nORDER BY mes;`}</SqlCode>
            <h3>Quais clientes nunca realizaram uma compra?</h3>
            <SqlCode>{`SELECT c.nome\nFROM clientes AS c\nLEFT JOIN pedidos AS p ON p.cliente_id = c.cliente_id\nWHERE p.pedido_id IS NULL;`}</SqlCode>
            <p>O <code>LEFT JOIN</code> preserva todos os clientes. Quando não existe pedido correspondente, o identificador do pedido fica nulo.</p>
          </section>

          <section id="ordem">
            <h2>19. Ordem de execução de uma consulta SQL</h2>
            <p>
              Embora escrevamos <code>SELECT</code> primeiro, o banco segue uma ordem lógica:
              <code>FROM</code>, <code>JOIN</code>, <code>WHERE</code>, <code>GROUP BY</code>,
              <code>HAVING</code>, <code>SELECT</code>, <code>ORDER BY</code> e <code>LIMIT</code>.
            </p>
            <p>Isso explica por que um alias criado no <code>SELECT</code> normalmente não pode ser usado no <code>WHERE</code>: o filtro acontece antes.</p>
          </section>

          <section id="boas-praticas">
            <h2>20. Boas práticas para escrever SQL</h2>
            <ul>
              <li>Use nomes claros para aliases, como <code>faturamento_total</code>.</li>
              <li>Indente consultas grandes e mantenha uma coluna por linha quando ajudar a leitura.</li>
              <li>Evite <code>SELECT *</code> quando já souber as colunas necessárias.</li>
              <li>Use aliases curtos e significativos para tabelas.</li>
              <li>Organize transformações maiores em CTEs.</li>
              <li>Comente regras de negócio que não são evidentes.</li>
              <li>Escreva para que outra pessoa, inclusive você no futuro, entenda a consulta.</li>
            </ul>
          </section>

          <section id="conclusao">
            <h2>21. Conclusão</h2>
            <p>
              SQL não é apenas uma lista de comandos. Para um Analista de Dados, é uma ferramenta
              para transformar tabelas operacionais em informações úteis: medir resultados, encontrar
              padrões, preparar dashboards e apoiar decisões. Comece com consultas pequenas, pratique
              com perguntas reais de negócio e aumente a complexidade aos poucos.
            </p>
          </section>
          
        </article>

        <aside className="article-toc" aria-label="Índice do artigo">
          <p>Neste guia</p>
          <a href="#o-que-e-sql">Fundamentos de SQL</a>
          <a href="#where">Filtros e ordenação</a>
          <a href="#agregacoes">Métricas e agrupamentos</a>
          <a href="#joins">JOINs e relacionamentos</a>
          <a href="#caso-real">Caso prático de vendas</a>
          <a href="#boas-praticas">Boas práticas</a>
        </aside>
      </main>

      <Footer backHref="#top" />
    </div>
  )
}