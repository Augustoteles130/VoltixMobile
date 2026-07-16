const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar produto
// =========================

function cadastrar(produto, callback) {

    const sql = `INSERT INTO produto
        ( nome,descricao,preco_antigo,quantidade_estoque,Loja_idLoja,ativo,marca_idmarca )
        VALUES (?, ?, ?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            produto.nome,
            produto.descricao,
            produto.preco_antigo,
            produto.quantidade_estoque,
            produto.Loja_idLoja,
            produto.ativo,
            produto.marca_idmarca
        ],
        callback
    );


}

// =========================
// Listar Produtos
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM produto
        WHERE idProduto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM produto
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar produto
// =========================

function atualizar(id, produto, callback) {

    const sql = `
        UPDATE produto
        SET

            nome = ?,
            descricao = ?,
            preco_antigo = ?,
            quantidade_estoque = ?,
            Loja_idLoja = ?,
            ativo = ?,
            marca_idmarca = ?

        WHERE idProduto = ?
    `;

    conexao.query(
        sql,
        [
            produto.nome,
            produto.descricao,
            produto.preco_antigo,
            produto.quantidade_estoque,
            produto.Loja_idLoja,
            produto.ativo,
            produto.marca_idmarca,
            id
        ],
        callback
    );

}

            cliente.email,
            cliente.senha,
            cliente.data_nascimento,
            cliente.Loja_idLoja,
            id
    

// =========================
// Excluir Produto
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM produto
        WHERE idProduto = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorEmail,
    atualizar,
    excluir

};