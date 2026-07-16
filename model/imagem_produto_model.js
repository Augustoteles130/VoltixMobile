const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar imagem_produto
// =========================

function cadastrar(imagem_produto, callback) {

    const sql = `INSERT INTO imagem_produto
        ( idimagem_produto,arquivo,produto_idproduto)
        VALUES (?, ? , ?)`;

    conexao.query(
        sql,
        [
            imagem_produto.idimagem_produto,
            imagem_produto.arquivo,
            imagem_produto.produto_idproduto
        ],
        callback
    );

}
            imagem_produto.nota_fiscal,
            imagem_produto.data_entrega,
            imagem_produto.status_entrega,
            imagem_produto.status_pagamentos,
            imagem_produto.codigo


// =========================
// Listar imagem_produto
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM imagem_produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM imagem_produto
        WHERE idimagem_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM imagem_produto
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar imagem_produto
// =========================

function atualizar(id, imagem_produto, callback) {

    const sql = `
        UPDATE imagem_produto
        SET

            idimagem_produto = ?,
            arquivo = ?,
           

        WHERE idimagem_produto = ?
    `;

    conexao.query(
        sql,
        [
            imagem_produto.data,
            imagem_produto.nota_fiscal,
            imagem_produto.data_entrega,
            imagem_produto.status_entrega,
            imagem_produto.status_pagamentos,
            imagem_produto.codigo,
            id
        ],
        callback
    );

}

// =========================
// Excluir imagem_produto
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM imagem_produto
        WHERE idimagem_produto = ?
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
// Excluir imagem_produto
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM imagem_produto
        WHERE idimagem_produto = ?
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