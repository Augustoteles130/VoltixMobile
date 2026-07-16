const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cliente
// =========================

function cadastrar(cltamanhoiente, callback) {

    const sql = `INSERT INTO Tamanho
        ( tamanho )
        VALUES (?)`;

    conexao.query(
        sql,
        [
            tamanho.tamanho,
           
        ],
        callback
    );

}

// =========================
// Listar tamanho
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM tamanho
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM tamanho
        WHERE idTamanho = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM tamanho
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar Cliente
// =========================

function atualizar(id, tamanho, callback) {

    const sql = `
        UPDATE Tamanho
        SET

            tamanho = ?,

        WHERE idTamanho = ?
    `;

    conexao.query(
        sql,
        [
            tamanho.tamanho,
            id
        ],
        callback
    );

}

// =========================
// Excluir tamanho
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Tamanho
        WHERE idTamanho = ?
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