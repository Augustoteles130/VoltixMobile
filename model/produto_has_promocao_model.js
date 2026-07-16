const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar produto_has_promocao
// =========================

function cadastrar(produto_has_promocao, callback) {

    const sql = `INSERT INTO produto_has_promocao
        ( produto_idproduto,promocao_idpromocao)
        VALUES ( ?, ?)`;

    conexao.query(
        sql,
        [
            produto_has_promocao.produto_idproduto,
            produto_has_promocao.promocao_idpromocao
        ],
        callback
    );

}

// =========================
// Listar produto_has_promocao
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM produto_has_promocao
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM produto_has_promocao
        WHERE produto_idproduto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM produto_has_promocao
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar produto_has_promocao
// =========================

function atualizar(id, produto_has_promocao, callback) {

    const sql = `
        UPDATE produto_has_promocao
        SET

         produto_idproduto   = ?,
         promocao_idpromocao = ?

        WHERE idProduto_Has_Promocao = ?
    `;

    conexao.query(
        sql,
        [
            produto_has_promocao.produto_idproduto,
            produto_has_promocao.promocao_idpromocao,
            id
        ],
        callback
    );
            

}

// =========================
// Excluir produto_has_promocao
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM produto_has_promocao
        WHERE idProduto_Has_Promocao = ?
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