 SELECT DISTINCT (cor) FROM carros;
 
 SELECT count (ano) from carros where ano > 2000
 SELECT avg(preco) from carros WHERE ano > 2000;
 SELECT sum(preco) from carros; -- nesse caso n ouve condicao.
 SELECT max(preco) FROM carros;
 SELECT min(preco) from carros;
 
 SELECT * FROM carros ORDER by cor desc;
 SELECT * FROM carros WHERE cor like 'p%';
 SELECT * from carros WHERE ano BETWEEN 1990 AND 2000;