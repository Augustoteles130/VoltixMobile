const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar pedidos
// =========================

function cadastrar(pedidos, callback) {

    const sql = `INSERT INTO pedidos
        ( data data ,nota_fiscal,data_entrega,status_entrega,status_pagamentos,codigo)
        VALUES (?, ? , ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            pedidos.data,
            pedidos.nota_fiscal,
            pedidos.data_entrega,
            pedidos.status_entrega,
            pedidos.status_pagamentos,
            pedidos.codigo
        ],
        callback
    );

}

// =========================
// Listar pedidos
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM pedidos
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM pedidos
        WHERE idPedidos = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM pedidos
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar pedidos
// =========================

function atualizar(id, pedidos, callback) {

    const sql = `
        UPDATE pedidos
        SET

            data = ?,
            nota_fiscal = ?,
            data_entrega = ?,
            status_entrega = ?,
            status_pagamentos = ?,
            codigo = ?

        WHERE idPedidos = ?
    `;

    conexao.query(
        sql,
        [
            pedidos.data,
            pedidos.nota_fiscal,
            pedidos.data_entrega,
            pedidos.status_entrega,
            pedidos.status_pagamentos,
            pedidos.codigo,
            id
        ],
        callback
    );

}

// =========================
// Excluir pedidos
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM pedidos
        WHERE idPedidos = ?
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
// Excluir pedidos
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM pedidos
        WHERE idPedidos = ?
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