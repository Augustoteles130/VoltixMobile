const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar cupom
// =========================

function cadastrar(endereco, callback) {

    const sql = `INSERT INTO cupom
        ( nome,data_validade,quantidade,desconto,loja_idloja )
        VALUES ( ?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            endereco.nome,
            endereco.data_validade,
            endereco.quantidade,
            endereco.desconto,
            endereco.loja_idloja
        ],
        callback
    );



}

// =========================
// Listar cupom
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM cupom
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM cupom
        WHERE idCupom = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM cupom
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar cupom
// =========================

function atualizar(id, cupom, callback) {

    const sql = `
        UPDATE cupom
        SET

            nome = ?,
            data_validade = ?,
            quantidade = ?,
            desconto = ?,
            loja_idloja = ?

        WHERE idCupom = ?
    `;

    conexao.query(
        sql,
        [
            cupom.nome,
            cupom.data_validade,
            cupom.quantidade,
            cupom.desconto,
            cupom.loja_idloja,
            cliente.tipo,

            id
        ],
        callback
    );

}

// =========================
// Excluir cupom
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM cupom
        WHERE idCupom = ?
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