const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar cores_has_produto
// =========================

function cadastrar(cores_has_produto, callback) {

    const sql = `INSERT INTO cores_has_produto
        ( cores_has_produto,produto_idproduto )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            cores_has_produto.cores_has_produto,
            cores_has_produto.produto_idproduto
        ],
        callback
    );

}
// =========================
// Listar cores_has_produto
// =========================
            cliente.Loja_idLoja
    

// =========================
// Listar cores_has_produto
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM cores_has_produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM cores_has_produto
        WHERE idcores_has_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM cores_has_produto
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar cores_has_produto
// =========================

function atualizar(id, cores_has_produto, callback) {

    const sql = `
        UPDATE cores_has_produto
        SET

            cores_has_produto = ?,
            produto_idproduto = ?,
        WHERE idcores_has_produto = ?
    `;

    conexao.query(
        sql,
        [
            cores_has_produto.cores_has_produto,
            cores_has_produto.produto_idproduto,
            id
        ],
        callback
    );

}

// =========================
// Excluir cores_has_produto
// =========================
    conexao.query(
        sql,
        [
            cliente.cores_idcores,
            cliente.produto_idproduto,
           
            id
        ],
        callback
    );

// =========================
// Excluir cores_has_produto
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM cores_has_produto
        WHERE idcores_has_produto = ?
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