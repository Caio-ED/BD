CREATE table carros(
nome varchar,
cor varchar,
ano INTEGER,
preco decimal);

INSERT INTO Carros(nome, cor, ano, preco)
	values('carro 10','prata', 1995, 22.000);
	
SELECT * from Carros where ano >= 2000;
-- * é para selecionar todas as colunas
-- where serve de filtro

UPDATE Carros set nome = 'Novo nome' WHERE ano > 2000;
-- nunca esquecer do where, é serio gera demissa :(

DELETE FROM Carros where cor = 'vinho';