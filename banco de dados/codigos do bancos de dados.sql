create database VoltixMobile;
use VoltixMobile;


-- criar as tabelas
create table lojista(
idLogista int primary key auto_increment,
nome varchar(200) not null,
cpf  mediumint(11)not null,
cnpj mediumint(14),
email varchar(120)not null,
senha varchar(20)not null,
telefone mediumint(13)



);
create table endereco(
idendereco int primary key auto_increment,
rua varchar(50)not null,
cep mediumint(10)not null,
setor varchar(50)not null,
numero int not null,
complemento varchar(100),
tipo varchar(45)

);

create table formas_de_pagamento(
idformas_pagamentos int primary key auto_increment,
nome varchar(45)not null,
link varchar(100),
ativo boolean 
);
create table cores(
idcores int primary key auto_increment,
nome varchar(45)not null,
codigo_cor varchar(45)

);
create table marca(
idmarca int primary key auto_increment,
nome varchar(45)not null,
logo longblob
);
create table promocao(
idpromocao int primary key auto_increment,
data_inicial date not null,
data_final date not null,
valor_promocao float not null,
nome varchar(45)not null

);
create table tamanho(
idtamanho int primary key auto_increment,
tamanho varchar(45)not null

);
create table loja(
idloja int primary key auto_increment,
nome VARCHAR(120),
whatsapp VARCHAR(50),
instagram VARCHAR(100),
facebook VARCHAR(10),
linkedin VARCHAR(100),
telefone MEDIUMINT(13),
email VARCHAR(100),
Lojista_idLojista INT,
Endereco_idEndereco int,
FOREIGN KEY (Lojista_idLojista) REFERENCES Lojista (idLogista),
FOREIGN KEY (Endereco_idEndereco) REFERENCES Endereco (idEndereco)
);
create table banner(
idBanner INT primary key auto_increment,
imagem LONGBLOB not null,
data_inicio DATE not null,
data_final DATE,
status_visibilidade boolean not null,
Loja_idLoja INT,
Promocao_idPromocao INT,
FOREIGN KEY (loja_idloja) REFERENCES Loja (idLoja),
FOREIGN KEY (Promocao_idPromocao) REFERENCES promocao (idpromocao)


);
create table produto(
idproduto INT primary key auto_increment,
nome varchar(100),
descricao TEXT(1000),
codigo varchar(45),
preco_antigo FLOAT,
quantidade_estoque INT,
ativo boolean,
loja_idloja INT,
marca_idmarca INT,
FOREIGN KEY (loja_idloja) REFERENCES Loja (idLoja),
FOREIGN KEY (marca_idmarca) REFERENCES marca (idmarca)
);
create table cliente(
idCliente int primary key auto_increment,
nome varchar(250)not null,
cpf mediumint(11)not null,
telefone mediumint(13)not null,
email varchar(120)not null,
senha varchar(12)not null,
data_nascimento date not null,
loja_idloja int,
FOREIGN KEY (loja_idloja) REFERENCES Loja (idloja)
);

create table cartao_pagamentos(
idCartao_Pagamento INT primary key auto_increment,
numero MEDIUMINT(40) not null,
data_vencimento VARCHAR(45) not null,
CVC INT not null not null,
cpf MEDIUMINT(11) not null,
nome_proprietario VARCHAR(200),
nome_identificacao VARCHAR(45) not null,
bandeira VARCHAR(45) not null,
tipo VARCHAR(45) not null,
ativo boolean not null,
Cliente_idCliente INT,
FOREIGN KEY (Cliente_idCliente) REFERENCES Cliente (idCliente)
);
create table carrinho(
idcarrinho int  primary key auto_increment,
quantidade_produto int,
preco_total float
);
create table pedidos(
idpedidos int primary key auto_increment,
data date not null,
nota_fiscal longblob,
data_entrega date not null,
status_entrega varchar(45) not null,
status_pagamentos varchar(45) not null,
codigo varchar(45)not null
);
create table cupom(
idcupom int primary key auto_increment,
nome varchar(45),
data_validade date,
quantidade int,
desconto float,
loja_idloja int,
FOREIGN KEY (loja_idloja) REFERENCES Loja (idLoja)
);
create table cupom_has_produto(
cupom_idcupom int ,
produto_marca_idmarca int,
FOREIGN KEY (cupom_idcupom) REFERENCES cupom (idcupom),
FOREIGN KEY (produto_marca_idmarca) REFERENCES marca (idmarca)
);
create table cores_has_produto(
cores_idcores int ,
produto_idproduto int,
FOREIGN KEY (produto_idproduto) REFERENCES produto(idproduto),
FOREIGN KEY (cores_idcores) REFERENCES cores(idcores)
);
create table produto_has_tamanho(
produto_idproduto int,
tamanho_idtamanho int,
FOREIGN KEY (produto_idproduto) REFERENCES produto(idproduto),
FOREIGN KEY (tamanho_idtamanho) REFERENCES tamanho(idtamanho)
);
create table produtos_has_cores(
produto_idproduto int,
cores_idcores int ,
FOREIGN KEY (produto_idproduto) REFERENCES produto(idproduto),
FOREIGN KEY (cores_idcores) REFERENCES cores(idcores)
);
create table  imagem_produto(
idimagem_produto int primary key auto_increment,
arquivo longblob,
produto_idproduto int,
FOREIGN KEY (produto_idproduto) REFERENCES produto(idproduto)
);
create table avaliacao_produto(
idavaliacao_produto int,
data date,
nota float,
descricao text(250),
produto_idproduto int,
FOREIGN KEY (produto_idproduto) REFERENCES produto(idproduto)
);
create table  banner_has_produto(
banner_idbanner int,
produto_idproduto int,
FOREIGN KEY (banner_idbanner) REFERENCES banner(idbanner),
FOREIGN KEY (produto_idproduto) REFERENCES produto(idproduto)
);
create table produto_has_promocao(
produto_idproduto int,
promocao_idpromocao int,
FOREIGN KEY (produto_idproduto) REFERENCES produto(idproduto),
FOREIGN KEY (promocao_idpromocao) REFERENCES promocao(idpromocao)
);
create table pedidos_has_produto(
pedidos_idpedidos int,
produto_idproduto int,
FOREIGN KEY (pedidos_idpedidos) REFERENCES pedidos(idpedidos),
FOREIGN KEY (produto_idproduto) REFERENCES produto(idproduto)
);
create table endereco_has_clientes(
Endereco_idEndereco int,
FOREIGN KEY (Endereco_idEndereco) REFERENCES endereco (idendereco)
);
create table frete(
idFrete INT,
valor FLOAT,
tipo VARCHAR(45),
bairro VARCHAR(45),
entrega_full TINYINT,
codigo_rastreio VARCHAR(100),
Pedidos_idPedidos INT,
FOREIGN KEY (Pedidos_idPedidos) REFERENCES pedidos (idpedidos)
);
create table produtos_has_carrinho(
produto_idproduto int,
carrinho_idcarrinho int,
FOREIGN KEY (produto_idproduto) REFERENCES produto(idproduto),
FOREIGN KEY (carrinho_idcarrinho) REFERENCES carrinho(idcarrinho)
);
