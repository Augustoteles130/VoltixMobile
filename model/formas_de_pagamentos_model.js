const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cliente
// =========================

function cadastrar(formas_de_pagamento, callback) {

    const sql = `INSERT INTO formas_de_pagamentos
        (nome, link , ativo )
        VALUES (?, ?, ?)`;

    conexao.query(
        sql,
        [
            formas_de_pagamento.nome,
            formas_de_pagamento.link,
            formas_de_pagamento.ativo
        ],
        callback
    );


}

// =========================
// Listar Clientes
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM formas_de_pagamento
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM formas_de_pagamento
        WHERE idFormaDePagamento = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM formas_de_pagamento
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar Cliente
// =========================

function atualizar(id, cliente, callback) {

    const sql = `
        UPDATE formas_de_pagamento
        SET

            nome = ?,
            link = ?,
            ativo = ?,
            

        WHERE idFormaDePagamento = ?
    `;

    conexao.query(
        sql,
        [
            cliente.nome,
            cliente.link,
            cliente.ativo,
            id
        ],
        callback
    );

}

// =========================
// Excluir Cliente
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM formas_de_pagamento
        WHERE idFormaDePagamento = ?
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