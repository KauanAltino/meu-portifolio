import{c as e,i as t,n,r}from"./index-tG1VRGMu.js";import{t as i}from"./Footer-BBa1oKnv.js";import{t as a}from"./Navbar-COYZxps5.js";var o=e(t(),1),s=n();function c({children:e}){return(0,s.jsx)(`pre`,{className:`article-code`,children:(0,s.jsx)(`code`,{children:e})})}function l(){return(0,o.useEffect)(()=>{document.title=`SQL para Data Analytics | Kauan Altino`;let e=document.querySelector(`meta[name="description"]`);e||(e=document.createElement(`meta`),e.setAttribute(`name`,`description`),document.head.appendChild(e)),e.setAttribute(`content`,`Aprenda SQL para Data Analytics com PostgreSQL, exemplos de vendas e consultas para análises de negócio.`)},[]),(0,s.jsxs)(`div`,{className:`article-page`,id:`top`,children:[(0,s.jsx)(a,{pageTitle:`Blog`}),(0,s.jsxs)(`main`,{className:`article-layout`,children:[(0,s.jsxs)(`article`,{className:`article-content`,children:[(0,s.jsxs)(`header`,{className:`article-header`,children:[(0,s.jsx)(`p`,{className:`section-eyebrow`,children:`Data Analytics · SQL`}),(0,s.jsx)(`h1`,{children:`SQL para Data Analytics`}),(0,s.jsx)(`p`,{className:`article-lead`,children:`Um guia prático para quem quer usar PostgreSQL para consultar, transformar e analisar dados que ajudam empresas a tomar decisões melhores.`}),(0,s.jsxs)(`div`,{className:`article-meta`,children:[(0,s.jsx)(`span`,{children:`14 de agosto de 2026`}),(0,s.jsx)(`span`,{children:`25 min de leitura`}),(0,s.jsx)(r,{to:`/blog`,children:`Voltar para os artigos`})]})]}),(0,s.jsxs)(`section`,{id:`o-que-e-sql`,children:[(0,s.jsx)(`h2`,{children:`1. O que é SQL?`}),(0,s.jsxs)(`p`,{children:[`SQL significa `,(0,s.jsx)(`em`,{children:`Structured Query Language`}),`, ou Linguagem de Consulta Estruturada. É a linguagem usada para conversar com bancos de dados relacionais: consultar, organizar e transformar informações armazenadas em tabelas.`]}),(0,s.jsx)(`p`,{children:`SQL não é um banco de dados. PostgreSQL, MySQL e SQL Server são sistemas que guardam os dados; SQL é a linguagem usada para fazer perguntas a eles. Para profissionais de Dados, ela é essencial porque informações de clientes, vendas e operações costumam viver em bancos relacionais.`})]}),(0,s.jsxs)(`section`,{id:`analytics`,children:[(0,s.jsx)(`h2`,{children:`2. SQL no contexto de Data Analytics`}),(0,s.jsx)(`p`,{children:`Um Analista de Dados usa SQL para transformar perguntas de negócio em respostas. Isso inclui consultar dados, filtrar registros, calcular métricas, agrupar resultados, combinar tabelas e preparar uma base para dashboards.`}),(0,s.jsxs)(`ul`,{children:[(0,s.jsx)(`li`,{children:`Qual foi o faturamento por região no último mês?`}),(0,s.jsx)(`li`,{children:`Quais categorias venderam mais no trimestre?`}),(0,s.jsx)(`li`,{children:`Quais clientes deixaram de comprar?`}),(0,s.jsx)(`li`,{children:`Qual tabela deve alimentar um painel de indicadores?`})]}),(0,s.jsx)(`p`,{children:`A sintaxe é o meio. O objetivo é entender o problema, usar os dados certos e entregar uma resposta que ajude alguém a tomar uma decisão.`})]}),(0,s.jsxs)(`section`,{id:`relacional`,children:[(0,s.jsx)(`h2`,{children:`3. Entendendo bancos de dados relacionais`}),(0,s.jsx)(`p`,{children:`Um banco de dados é uma coleção organizada de informações. Dentro dele, as tabelas funcionam como planilhas: cada linha é um registro e cada coluna descreve uma característica desse registro.`}),(0,s.jsx)(`div`,{className:`article-table-wrap`,children:(0,s.jsxs)(`table`,{children:[(0,s.jsx)(`thead`,{children:(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`th`,{children:`Conceito`}),(0,s.jsx)(`th`,{children:`Exemplo em vendas`})]})}),(0,s.jsxs)(`tbody`,{children:[(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`td`,{children:`Tabela`}),(0,s.jsxs)(`td`,{children:[(0,s.jsx)(`code`,{children:`clientes`}),`, `,(0,s.jsx)(`code`,{children:`pedidos`}),` ou `,(0,s.jsx)(`code`,{children:`produtos`})]})]}),(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`td`,{children:`Linha`}),(0,s.jsx)(`td`,{children:`Um cliente ou um pedido específico`})]}),(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`td`,{children:`Coluna`}),(0,s.jsxs)(`td`,{children:[(0,s.jsx)(`code`,{children:`cidade`}),`, `,(0,s.jsx)(`code`,{children:`data_pedido`}),` ou `,(0,s.jsx)(`code`,{children:`valor_total`})]})]}),(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`td`,{children:`Chave primária`}),(0,s.jsxs)(`td`,{children:[`Identificador único, como `,(0,s.jsx)(`code`,{children:`cliente_id`})]})]}),(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`td`,{children:`Chave estrangeira`}),(0,s.jsxs)(`td`,{children:[`Campo que aponta para outra tabela, como `,(0,s.jsx)(`code`,{children:`pedidos.cliente_id`})]})]})]})]})}),(0,s.jsxs)(`p`,{children:[`Quando `,(0,s.jsx)(`code`,{children:`pedidos.cliente_id`}),` aponta para `,(0,s.jsx)(`code`,{children:`clientes.cliente_id`}),`, existe um relacionamento. Essa ligação permite descobrir, por exemplo, quanto cada cliente comprou.`]})]}),(0,s.jsxs)(`section`,{id:`select-from`,children:[(0,s.jsx)(`h2`,{children:`4. SELECT e FROM`}),(0,s.jsxs)(`p`,{children:[(0,s.jsx)(`code`,{children:`SELECT`}),` define o que queremos ver e `,(0,s.jsx)(`code`,{children:`FROM`}),` informa de qual tabela os dados serão buscados.`]}),(0,s.jsx)(c,{children:`SELECT *
FROM clientes;`}),(0,s.jsx)(`p`,{children:`O asterisco traz todas as colunas. Ele ajuda a explorar uma tabela, mas em análises prefira selecionar somente o necessário: a consulta fica mais clara e evita dados sem utilidade.`}),(0,s.jsx)(c,{children:`SELECT
  nome AS cliente,
  cidade AS cidade_do_cliente
FROM clientes;`}),(0,s.jsxs)(`p`,{children:[`Aqui selecionamos duas colunas e criamos aliases com `,(0,s.jsx)(`code`,{children:`AS`}),`. O resultado terá cabeçalhos mais legíveis, algo útil para entregar uma base pronta para um dashboard.`]})]}),(0,s.jsxs)(`section`,{id:`where`,children:[(0,s.jsx)(`h2`,{children:`5. WHERE`}),(0,s.jsxs)(`p`,{children:[(0,s.jsx)(`code`,{children:`WHERE`}),` filtra linhas antes de qualquer cálculo. É o equivalente a filtrar uma planilha, mas de forma reproduzível e documentada.`]}),(0,s.jsx)(c,{children:`SELECT pedido_id, valor_total, status
FROM pedidos
WHERE status = 'concluido'
  AND valor_total >= 500;`}),(0,s.jsxs)(`p`,{children:[`A consulta retorna pedidos concluídos de pelo menos 500. Use `,(0,s.jsx)(`code`,{children:`=`}),` para igualdade, `,(0,s.jsx)(`code`,{children:`<>`}),` para diferente, `,(0,s.jsx)(`code`,{children:`>`}),`, `,(0,s.jsx)(`code`,{children:`<`}),`,`,(0,s.jsx)(`code`,{children:`>=`}),` e `,(0,s.jsx)(`code`,{children:`<=`}),` para comparações.`]}),(0,s.jsx)(c,{children:`SELECT nome, cidade
FROM clientes
WHERE cidade IN ('São Paulo', 'Rio de Janeiro')
  AND nome NOT LIKE 'Teste%';`}),(0,s.jsxs)(`p`,{children:[(0,s.jsx)(`code`,{children:`AND`}),` exige as duas condições, `,(0,s.jsx)(`code`,{children:`OR`}),` aceita uma delas e`,(0,s.jsx)(`code`,{children:`NOT`}),` inverte a regra. `,(0,s.jsx)(`code`,{children:`IN`}),` substitui vários `,(0,s.jsx)(`code`,{children:`OR`}),`,`,(0,s.jsx)(`code`,{children:`BETWEEN`}),` filtra intervalos e `,(0,s.jsx)(`code`,{children:`LIKE 'Teste%'`}),` procura textos que começam com “Teste”.`]})]}),(0,s.jsxs)(`section`,{id:`order-limit`,children:[(0,s.jsx)(`h2`,{children:`6. ORDER BY e LIMIT`}),(0,s.jsxs)(`p`,{children:[(0,s.jsx)(`code`,{children:`ORDER BY`}),` organiza os resultados e `,(0,s.jsx)(`code`,{children:`LIMIT`}),` mantém apenas as primeiras linhas.`]}),(0,s.jsx)(c,{children:`SELECT pedido_id, valor_total
FROM pedidos
ORDER BY valor_total DESC
LIMIT 10;`}),(0,s.jsxs)(`p`,{children:[(0,s.jsx)(`code`,{children:`DESC`}),` ordena do maior para o menor; `,(0,s.jsx)(`code`,{children:`ASC`}),`, o padrão, ordena do menor para o maior.`]})]}),(0,s.jsxs)(`section`,{id:`distinct`,children:[(0,s.jsx)(`h2`,{children:`7. DISTINCT`}),(0,s.jsxs)(`p`,{children:[(0,s.jsx)(`code`,{children:`DISTINCT`}),` remove valores repetidos do resultado. É útil para conhecer as cidades atendidas ou os canais de venda disponíveis antes de iniciar uma análise.`]}),(0,s.jsx)(c,{children:`SELECT DISTINCT cidade
FROM clientes
ORDER BY cidade;`}),(0,s.jsxs)(`p`,{children:[`Não use `,(0,s.jsx)(`code`,{children:`DISTINCT`}),` apenas para esconder duplicidades: elas podem indicar um problema na origem ou em um JOIN.`]})]}),(0,s.jsxs)(`section`,{id:`agregacoes`,children:[(0,s.jsx)(`h2`,{children:`8. Funções de agregação`}),(0,s.jsx)(`p`,{children:`Agregações resumem muitas linhas em métricas úteis para o negócio.`}),(0,s.jsx)(c,{children:`SELECT
  COUNT(*) AS quantidade_pedidos,
  SUM(valor_total) AS faturamento_total,
  AVG(valor_total) AS ticket_medio,
  MIN(valor_total) AS menor_pedido,
  MAX(valor_total) AS maior_pedido
FROM pedidos
WHERE status = 'concluido';`}),(0,s.jsxs)(`p`,{children:[(0,s.jsx)(`code`,{children:`COUNT`}),` conta pedidos, `,(0,s.jsx)(`code`,{children:`SUM`}),` soma faturamento, `,(0,s.jsx)(`code`,{children:`AVG`}),`calcula ticket médio e `,(0,s.jsx)(`code`,{children:`MIN`}),`/`,(0,s.jsx)(`code`,{children:`MAX`}),` mostram extremos. O filtro evita que pedidos cancelados entrem nos indicadores.`]})]}),(0,s.jsxs)(`section`,{id:`group-by`,children:[(0,s.jsx)(`h2`,{children:`9. GROUP BY`}),(0,s.jsxs)(`p`,{children:[(0,s.jsx)(`code`,{children:`GROUP BY`}),` separa os dados em grupos para que uma agregação seja calculada para cada um deles. Veja o faturamento por categoria:`]}),(0,s.jsx)(c,{children:`SELECT
  pr.categoria,
  SUM(ip.quantidade * ip.preco_unitario) AS faturamento
FROM itens_pedido AS ip
JOIN produtos AS pr ON pr.produto_id = ip.produto_id
GROUP BY pr.categoria
ORDER BY faturamento DESC;`}),(0,s.jsx)(`p`,{children:`Primeiro combinamos itens e produtos. Depois agrupamos as linhas da mesma categoria e somamos quantidade vezes preço. A mesma estrutura serve para vendas por cidade ou quantidade de clientes por estado.`})]}),(0,s.jsxs)(`section`,{id:`having`,children:[(0,s.jsx)(`h2`,{children:`10. HAVING`}),(0,s.jsxs)(`p`,{children:[(0,s.jsx)(`code`,{children:`WHERE`}),` filtra linhas antes do agrupamento; `,(0,s.jsx)(`code`,{children:`HAVING`}),` filtra grupos depois da agregação. Use `,(0,s.jsx)(`code`,{children:`HAVING`}),` quando a regra depende de `,(0,s.jsx)(`code`,{children:`SUM`}),`,`,(0,s.jsx)(`code`,{children:`COUNT`}),` ou outra função agregada.`]}),(0,s.jsx)(c,{children:`SELECT
  cidade,
  COUNT(*) AS total_clientes
FROM clientes
WHERE status = 'ativo'
GROUP BY cidade
HAVING COUNT(*) >= 10;`}),(0,s.jsxs)(`p`,{children:[`O `,(0,s.jsx)(`code`,{children:`WHERE`}),` mantém clientes ativos; o `,(0,s.jsx)(`code`,{children:`HAVING`}),` exibe somente cidades com pelo menos dez deles.`]})]}),(0,s.jsxs)(`section`,{id:`case-when`,children:[(0,s.jsx)(`h2`,{children:`11. CASE WHEN`}),(0,s.jsxs)(`p`,{children:[(0,s.jsx)(`code`,{children:`CASE WHEN`}),` permite criar regras e classificações, ótimas para segmentar clientes e produtos.`]}),(0,s.jsx)(c,{children:`SELECT
  cliente_id,
  faturamento_total,
  CASE
    WHEN faturamento_total >= 5000 THEN 'alto valor'
    WHEN faturamento_total >= 1000 THEN 'valor médio'
    ELSE 'baixo valor'
  END AS faixa_cliente
FROM resumo_clientes;`}),(0,s.jsx)(`p`,{children:`O banco testa as condições de cima para baixo. A primeira verdadeira define a faixa, que pode ser usada em um gráfico ou indicador.`})]}),(0,s.jsxs)(`section`,{id:`joins`,children:[(0,s.jsx)(`h2`,{children:`12. JOINs`}),(0,s.jsxs)(`p`,{children:[`JOINs combinam tabelas relacionadas. Imagine `,(0,s.jsx)(`code`,{children:`clientes`}),` e `,(0,s.jsx)(`code`,{children:`pedidos`}),`: cada pedido possui um `,(0,s.jsx)(`code`,{children:`cliente_id`}),`.`]}),(0,s.jsx)(`div`,{className:`article-table-wrap`,children:(0,s.jsxs)(`table`,{children:[(0,s.jsx)(`thead`,{children:(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`th`,{children:`JOIN`}),(0,s.jsx)(`th`,{children:`O que retorna`}),(0,s.jsx)(`th`,{children:`Uso comum`})]})}),(0,s.jsxs)(`tbody`,{children:[(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`td`,{children:`INNER JOIN`}),(0,s.jsx)(`td`,{children:`Apenas correspondências nas duas tabelas`}),(0,s.jsx)(`td`,{children:`Pedidos com cliente identificado`})]}),(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`td`,{children:`LEFT JOIN`}),(0,s.jsx)(`td`,{children:`Todas as linhas da tabela da esquerda`}),(0,s.jsx)(`td`,{children:`Clientes, mesmo sem pedidos`})]}),(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`td`,{children:`RIGHT JOIN`}),(0,s.jsx)(`td`,{children:`Todas as linhas da tabela da direita`}),(0,s.jsx)(`td`,{children:`Pode ser reescrito invertendo as tabelas`})]}),(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`td`,{children:`FULL OUTER JOIN`}),(0,s.jsx)(`td`,{children:`Todas as linhas dos dois lados`}),(0,s.jsx)(`td`,{children:`Auditar registros sem correspondência`})]})]})]})}),(0,s.jsx)(c,{children:`SELECT
  c.nome,
  p.pedido_id,
  p.valor_total
FROM clientes AS c
LEFT JOIN pedidos AS p ON p.cliente_id = c.cliente_id;`}),(0,s.jsxs)(`p`,{children:[`Como é um `,(0,s.jsx)(`code`,{children:`LEFT JOIN`}),`, todo cliente aparece. Quando não existe pedido, as colunas de `,(0,s.jsx)(`code`,{children:`p`}),` ficam como `,(0,s.jsx)(`code`,{children:`NULL`}),`.`]})]}),(0,s.jsxs)(`section`,{id:`subqueries`,children:[(0,s.jsx)(`h2`,{children:`13. Subqueries`}),(0,s.jsx)(`p`,{children:`Uma subquery é uma consulta dentro de outra. Ela ajuda quando uma resposta depende de uma métrica calculada antes.`}),(0,s.jsx)(c,{children:`SELECT pedido_id, valor_total
FROM pedidos
WHERE valor_total > (
  SELECT AVG(valor_total)
  FROM pedidos
  WHERE status = 'concluido'
);`}),(0,s.jsx)(`p`,{children:`A consulta interna encontra o ticket médio de pedidos concluídos; a externa mostra pedidos acima desse valor.`})]}),(0,s.jsxs)(`section`,{id:`ctes`,children:[(0,s.jsx)(`h2`,{children:`14. CTEs`}),(0,s.jsxs)(`p`,{children:[`CTE significa `,(0,s.jsx)(`em`,{children:`Common Table Expression`}),`. Ela começa com `,(0,s.jsx)(`code`,{children:`WITH`}),` e dá um nome temporário a uma etapa da consulta, deixando análises complexas mais legíveis.`]}),(0,s.jsx)(c,{children:`WITH faturamento_por_cliente AS (
  SELECT cliente_id, SUM(valor_total) AS faturamento_total
  FROM pedidos
  WHERE status = 'concluido'
  GROUP BY cliente_id
)
SELECT cliente_id, faturamento_total
FROM faturamento_por_cliente
WHERE faturamento_total >= 5000;`}),(0,s.jsx)(`p`,{children:`Primeiro criamos um resumo por cliente; depois filtramos clientes de alto valor. Uma subquery também resolveria, mas a CTE nomeia cada etapa.`})]}),(0,s.jsxs)(`section`,{id:`texto`,children:[(0,s.jsx)(`h2`,{children:`15. Funções para trabalhar com texto`}),(0,s.jsx)(`p`,{children:`Dados reais podem chegar com letras em formatos diferentes, espaços extras ou campos separados.`}),(0,s.jsx)(c,{children:`SELECT
  UPPER(estado) AS estado_padronizado,
  LOWER(email) AS email_padronizado,
  TRIM(nome) AS nome_sem_espacos,
  CONCAT(nome, ' - ', cidade) AS cliente_e_cidade
FROM clientes;`}),(0,s.jsxs)(`p`,{children:[(0,s.jsx)(`code`,{children:`UPPER`}),` e `,(0,s.jsx)(`code`,{children:`LOWER`}),` padronizam capitalização, `,(0,s.jsx)(`code`,{children:`TRIM`}),` remove espaços nas pontas e `,(0,s.jsx)(`code`,{children:`CONCAT`}),` une textos.`]})]}),(0,s.jsxs)(`section`,{id:`datas`,children:[(0,s.jsx)(`h2`,{children:`16. Trabalhando com datas`}),(0,s.jsxs)(`p`,{children:[`Datas permitem comparar períodos, criar análises mensais e identificar sazonalidade. No PostgreSQL, `,(0,s.jsx)(`code`,{children:`DATE_TRUNC`}),` agrupa uma data por mês.`]}),(0,s.jsx)(c,{children:`SELECT
  DATE_TRUNC('month', data_pedido)::date AS mes,
  SUM(valor_total) AS faturamento
FROM pedidos
WHERE data_pedido >= DATE '2026-01-01'
  AND data_pedido < DATE '2027-01-01'
  AND status = 'concluido'
GROUP BY DATE_TRUNC('month', data_pedido)::date
ORDER BY mes;`}),(0,s.jsxs)(`p`,{children:[`O período usa início inclusivo e fim exclusivo, uma prática segura quando a coluna também contém horário. `,(0,s.jsx)(`code`,{children:`DATE_TRUNC`}),` é a referência PostgreSQL; funções de data mudam entre bancos.`]})]}),(0,s.jsxs)(`section`,{id:`null`,children:[(0,s.jsx)(`h2`,{children:`17. Trabalhando com valores NULL`}),(0,s.jsxs)(`p`,{children:[(0,s.jsx)(`code`,{children:`NULL`}),` representa ausência de valor, não texto vazio e nem zero. Por isso, `,(0,s.jsx)(`code`,{children:`= NULL`}),` não funciona: use `,(0,s.jsx)(`code`,{children:`IS NULL`}),` ou `,(0,s.jsx)(`code`,{children:`IS NOT NULL`}),`.`]}),(0,s.jsx)(c,{children:`SELECT
  nome,
  COALESCE(telefone, 'não informado') AS telefone
FROM clientes
WHERE email IS NOT NULL;`}),(0,s.jsxs)(`p`,{children:[(0,s.jsx)(`code`,{children:`COALESCE`}),` retorna o primeiro valor não nulo. Aqui, ele melhora a saída sem alterar os dados originais.`]})]}),(0,s.jsxs)(`section`,{id:`caso-real`,children:[(0,s.jsx)(`h2`,{children:`18. SQL aplicado a problemas reais de negócio`}),(0,s.jsx)(`p`,{children:`Vamos imaginar uma empresa de vendas com quatro tabelas relacionadas:`}),(0,s.jsx)(c,{children:`clientes(cliente_id, nome, cidade, estado)
pedidos(pedido_id, cliente_id, data_pedido, status, valor_total)
produtos(produto_id, nome, categoria, preco)
itens_pedido(pedido_id, produto_id, quantidade, preco_unitario)`}),(0,s.jsx)(`h3`,{children:`Qual foi o faturamento total?`}),(0,s.jsx)(c,{children:`SELECT SUM(valor_total) AS faturamento_total
FROM pedidos
WHERE status = 'concluido';`}),(0,s.jsx)(`p`,{children:`Somamos os pedidos concluídos para encontrar a receita efetivamente realizada.`}),(0,s.jsx)(`h3`,{children:`Qual foi o produto mais vendido?`}),(0,s.jsx)(c,{children:`SELECT pr.nome, SUM(ip.quantidade) AS unidades_vendidas
FROM itens_pedido AS ip
JOIN produtos AS pr ON pr.produto_id = ip.produto_id
GROUP BY pr.nome
ORDER BY unidades_vendidas DESC
LIMIT 1;`}),(0,s.jsx)(`p`,{children:`Unimos itens e produtos, somamos unidades por produto e mantemos o primeiro colocado.`}),(0,s.jsx)(`h3`,{children:`Qual cidade possui mais clientes?`}),(0,s.jsx)(c,{children:`SELECT cidade, COUNT(*) AS total_clientes
FROM clientes
GROUP BY cidade
ORDER BY total_clientes DESC
LIMIT 1;`}),(0,s.jsx)(`h3`,{children:`Qual categoria gerou mais faturamento?`}),(0,s.jsx)(c,{children:`SELECT pr.categoria, SUM(ip.quantidade * ip.preco_unitario) AS faturamento
FROM itens_pedido AS ip
JOIN produtos AS pr ON pr.produto_id = ip.produto_id
GROUP BY pr.categoria
ORDER BY faturamento DESC
LIMIT 1;`}),(0,s.jsx)(`h3`,{children:`Quais são os 10 maiores clientes?`}),(0,s.jsx)(c,{children:`SELECT c.nome, SUM(p.valor_total) AS faturamento_total
FROM clientes AS c
JOIN pedidos AS p ON p.cliente_id = c.cliente_id
WHERE p.status = 'concluido'
GROUP BY c.nome
ORDER BY faturamento_total DESC
LIMIT 10;`}),(0,s.jsx)(`h3`,{children:`Qual foi o faturamento por mês?`}),(0,s.jsx)(c,{children:`SELECT DATE_TRUNC('month', data_pedido)::date AS mes, SUM(valor_total) AS faturamento
FROM pedidos
WHERE status = 'concluido'
GROUP BY DATE_TRUNC('month', data_pedido)::date
ORDER BY mes;`}),(0,s.jsx)(`h3`,{children:`Quais clientes nunca realizaram uma compra?`}),(0,s.jsx)(c,{children:`SELECT c.nome
FROM clientes AS c
LEFT JOIN pedidos AS p ON p.cliente_id = c.cliente_id
WHERE p.pedido_id IS NULL;`}),(0,s.jsxs)(`p`,{children:[`O `,(0,s.jsx)(`code`,{children:`LEFT JOIN`}),` preserva todos os clientes. Quando não existe pedido correspondente, o identificador do pedido fica nulo.`]})]}),(0,s.jsxs)(`section`,{id:`ordem`,children:[(0,s.jsx)(`h2`,{children:`19. Ordem de execução de uma consulta SQL`}),(0,s.jsxs)(`p`,{children:[`Embora escrevamos `,(0,s.jsx)(`code`,{children:`SELECT`}),` primeiro, o banco segue uma ordem lógica:`,(0,s.jsx)(`code`,{children:`FROM`}),`, `,(0,s.jsx)(`code`,{children:`JOIN`}),`, `,(0,s.jsx)(`code`,{children:`WHERE`}),`, `,(0,s.jsx)(`code`,{children:`GROUP BY`}),`,`,(0,s.jsx)(`code`,{children:`HAVING`}),`, `,(0,s.jsx)(`code`,{children:`SELECT`}),`, `,(0,s.jsx)(`code`,{children:`ORDER BY`}),` e `,(0,s.jsx)(`code`,{children:`LIMIT`}),`.`]}),(0,s.jsxs)(`p`,{children:[`Isso explica por que um alias criado no `,(0,s.jsx)(`code`,{children:`SELECT`}),` normalmente não pode ser usado no `,(0,s.jsx)(`code`,{children:`WHERE`}),`: o filtro acontece antes.`]})]}),(0,s.jsxs)(`section`,{id:`boas-praticas`,children:[(0,s.jsx)(`h2`,{children:`20. Boas práticas para escrever SQL`}),(0,s.jsxs)(`ul`,{children:[(0,s.jsxs)(`li`,{children:[`Use nomes claros para aliases, como `,(0,s.jsx)(`code`,{children:`faturamento_total`}),`.`]}),(0,s.jsx)(`li`,{children:`Indente consultas grandes e mantenha uma coluna por linha quando ajudar a leitura.`}),(0,s.jsxs)(`li`,{children:[`Evite `,(0,s.jsx)(`code`,{children:`SELECT *`}),` quando já souber as colunas necessárias.`]}),(0,s.jsx)(`li`,{children:`Use aliases curtos e significativos para tabelas.`}),(0,s.jsx)(`li`,{children:`Organize transformações maiores em CTEs.`}),(0,s.jsx)(`li`,{children:`Comente regras de negócio que não são evidentes.`}),(0,s.jsx)(`li`,{children:`Escreva para que outra pessoa, inclusive você no futuro, entenda a consulta.`})]})]}),(0,s.jsxs)(`section`,{id:`conclusao`,children:[(0,s.jsx)(`h2`,{children:`21. Conclusão`}),(0,s.jsx)(`p`,{children:`SQL não é apenas uma lista de comandos. Para um Analista de Dados, é uma ferramenta para transformar tabelas operacionais em informações úteis: medir resultados, encontrar padrões, preparar dashboards e apoiar decisões. Comece com consultas pequenas, pratique com perguntas reais de negócio e aumente a complexidade aos poucos.`})]})]}),(0,s.jsxs)(`aside`,{className:`article-toc`,"aria-label":`Índice do artigo`,children:[(0,s.jsx)(`p`,{children:`Neste guia`}),(0,s.jsx)(`a`,{href:`#o-que-e-sql`,children:`Fundamentos de SQL`}),(0,s.jsx)(`a`,{href:`#where`,children:`Filtros e ordenação`}),(0,s.jsx)(`a`,{href:`#agregacoes`,children:`Métricas e agrupamentos`}),(0,s.jsx)(`a`,{href:`#joins`,children:`JOINs e relacionamentos`}),(0,s.jsx)(`a`,{href:`#caso-real`,children:`Caso prático de vendas`}),(0,s.jsx)(`a`,{href:`#boas-praticas`,children:`Boas práticas`})]})]}),(0,s.jsx)(i,{backHref:`#top`})]})}export{l as default};