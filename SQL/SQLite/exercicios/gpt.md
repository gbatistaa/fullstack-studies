# Exercícios SQL

## 🧩 Parte 1: Operações SQL em PostgreSQL

### 🟢 Nível Básico (DDL + DML)

1. **Crie uma tabela `clientes` com os seguintes campos:**

   - id (serial, primary key)
   - nome (varchar)
   - email (varchar)
   - data_cadastro (date)

2. **Insira 5 registros de clientes.**

3. **Atualize o email de um cliente.**

4. **Exclua um cliente pelo ID.**

5. **Selecione todos os clientes ordenados pela data de cadastro decrescente.**

6. **Filtre clientes cujo nome começa com a letra "A".**

7. **Use `LIKE` para buscar clientes cujo email termina com `@gmail.com`.**

---

### 🟡 Nível Intermediário

1. **Crie uma tabela `pedidos`:**

   - id (serial, primary key)
   - cliente_id (foreign key para `clientes`)
   - valor_total (numeric)
   - data_pedido (timestamp)

2. **Insira 10 pedidos variados para diferentes clientes.**

3. **Liste os nomes dos clientes e o total de pedidos que cada um fez.**

4. **Liste os clientes que não fizeram nenhum pedido.**

5. **Calcule o valor médio dos pedidos por cliente.**

6. **Mostre os 3 clientes com maior valor total em pedidos.**

7. **Liste todos os pedidos com data no último mês.**

8. **Use `CASE` para criar uma coluna "status" nos pedidos:**

- "ALTO" se valor_total > 500
- "MÉDIO" se entre 200 e 500
- "BAIXO" se < 200

---

### 🔵 Nível Avançado

1. **Crie uma `view` chamada `resumo_clientes` com:**

   - nome do cliente
   - quantidade de pedidos
   - valor total gasto

2. **Use `CTE (WITH)` para listar clientes e a média de seus pedidos, e filtrar somente aqueles com média > 300.**

3. **Crie uma função SQL para calcular a idade de um pedido (em dias).**

4. **Crie uma trigger que preenche automaticamente `data_cadastro` com a data atual na tabela `clientes`.**

5. **Use uma subquery correlacionada para listar clientes cujo valor total de pedidos é acima da média geral.**

6. **Utilize uma janela (`OVER()`) para listar os pedidos e mostrar a soma acumulada dos pedidos por cliente.**

7. **Faça um `UPSERT` (INSERT ON CONFLICT DO UPDATE) na tabela de clientes com base no email.**

---

## 💡 Parte 2: Situações para modelagem de banco de dados

### 🧾 Situação 1: Biblioteca

- Entidades:

  - Livros (id, título, autor, ISBN, ano, categoria)
  - Usuários (id, nome, email, data_cadastro)
  - Empréstimos (id, livro_id, usuario_id, data_emprestimo, data_devolucao, devolvido)

**Desafio:**

1. Modele o banco com as constraints necessárias.
2. Crie uma view com os livros mais emprestados.
3. Crie uma trigger que atualiza o status do empréstimo para "atrasado" se passar 30 dias.

---

### 🏥 Situação 2: Clínica médica

- Entidades:

  - Pacientes
  - Médicos
  - Consultas (com data e horário)
  - Especialidades

**Desafio:**

1. Relacione médicos a especialidades (muitos-para-muitos).
2. Impedir que dois médicos tenham consultas marcadas no mesmo horário e sala.
3. Criar view de agenda de um médico com nome dos pacientes e horários.

---

### 🍔 Situação 3: Sistema de pedidos de lanchonete

- Entidades:

  - Produtos
  - Pedidos
  - ItensPedido (quantidade, subtotal)
  - Clientes
  - Pagamentos

**Desafio:**

1. Modele usando boas práticas de normalização.
2. Calcule o ticket médio dos clientes.
3. Crie uma função que retorna o item mais vendido no mês.

---

### 🏫 Situação 4: Plataforma de cursos online

- Entidades:

  - Alunos
  - Cursos
  - Módulos
  - Aulas
  - Matrículas

**Desafio:**

1. Crie relacionamento 1\:N entre cursos → módulos → aulas.
2. Crie relatório com progresso do aluno (% aulas concluídas).
3. Use uma trigger para impedir matrícula duplicada.

---

Se quiser, posso gerar os **scripts de criação e inserts** para cada um desses contextos para que você treine direto no PostgreSQL. Deseja isso?
