const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar produto_has_tamanho
// =========================

function cadastrar(produto_has_tamanho, callback) {

    const sql = `INSERT INTO produto_has_tamanho
        ( produto_idproduto,tamanho_idtamanho)
        VALUES (?,?)`;

    conexao.query(
        sql,
        [
            produto_has_tamanho.produto_idproduto,
            produto_has_tamanho.tamanho_idtamanho
        ],
        callback
    );

}
            pedidos.nota_fiscal,
            pedidos.data_entrega,
            pedidos.status_entrega,
            pedidos.status_pagamentos,
            pedidos.codigo
    

// =========================
// Listar produto_has_tamanho
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM produto_has_tamanho
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM produto_has_tamanho
        WHERE idProduto_has_tamanho = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM produto_has_tamanho
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar produto_has_tamanho
// =========================

function atualizar(id, produto_has_tamanho, callback) {

    const sql = `
        UPDATE produto_has_tamanho
        SET

            produto_idproduto = ?,
            tamanho_idtamanho = ?,
            codigo = ?

        WHERE idProduto_has_tamanho = ?
    `;

    conexao.query(
        sql,
        [
            produto_has_tamanho.produto_idproduto,
            produto_has_tamanho.tamanho_idtamanho,
            produto_has_tamanho.codigo,
            id
        ],
        callback
    );

}

// =========================
// Excluir produto_has_tamanho
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM produto_has_tamanho
        WHERE idProduto_has_tamanho = ?
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
           

// =========================
// Excluir produto_has_tamanho
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM produto_has_tamanho
        WHERE idProduto_has_tamanho = ?
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