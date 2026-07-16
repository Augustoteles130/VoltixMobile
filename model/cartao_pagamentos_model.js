const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar cartao_pagamentos
// =========================

function cadastrar(cartao_pagamentos, callback) {

    const sql = `INSERT INTO cartao_pagamentos
        ( numero,data_vencimento,CVC,cpf,nome_proprietario,nome_identificacao,bandeira,tipo,ativo,Cliente_idCliente )
        VALUES (?, ?, ?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            cartao_pagamentos.numero,
            cartao_pagamentos.data_vencimento,
            cartao_pagamentos.CVC,
            cartao_pagamentos.cpf,
            cartao_pagamentos.nome_proprietario,
            cartao_pagamentos.nome_identificacao,
            cartao_pagamentos.bandeira,
            cartao_pagamentos.tipo,
            cartao_pagamentos.ativo,
            cartao_pagamentos.Cliente_idCliente
        ],
        callback
    );

}

// =========================
// Listar cartao_pagamentos
// =========================
            cliente.Loja_idLoja
    

// =========================
// Listar cartao_pagamentos
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM cartao_pagamentos
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM cartao_pagamentos
        WHERE idcartao_pagamentos = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM cartao_pagamentos
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar cartao_pagamentos
// =========================

function atualizar(id, cliente, callback) {

    const sql = `
        UPDATE cartao_pagamentos
        SET

            numero = ?,
            data_vencimento = ?,
            CVC = ?,
            cpf = ?,
            nome_proprietario = ?,
            nome_identificacao = ?,
            bandeira = ?,
            tipo = ?,
            ativo = ?,
            Cliente_idCliente = ?

        WHERE idcartao_pagamentos = ?
    `;

    conexao.query(
        sql,
        [
            cliente.numero,
            cliente.data_vencimento,
            cliente.CVC,
            cliente.cpf,
            cliente.nome_proprietario,
            cliente.nome_identificacao,
            cliente.bandeira,
            cliente.tipo,
            cliente.ativo,
            cliente.Cliente_idCliente,
            id
        ],
        callback
    );

}

// =========================
// Excluir Cliente
            cliente.Loja_idLoja,
            id
    

// =========================
// Excluir cartao_pagamentos
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM cartao_pagamentos
        WHERE idcartao_pagamentos = ?
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