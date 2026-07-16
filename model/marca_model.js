const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cliente
// =========================

function cadastrar(marca, callback) {

    const sql = `INSERT INTO Marca
        ( nome,logo )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            marca.nome,
            marca.logo
        ],
        callback
    );

}

// =========================
// Listar Marcas
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Marca
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM marca
        WHERE idMarca = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por marca
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM marca
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar Marca
// =========================

function atualizar(id, marca, callback) {

    const sql = `
        UPDATE Marca
        SET

            nome = ?,
            logo = ?
            idmarca = ?

        WHERE idMarca = ?
    `;

    conexao.query(
        sql,
        [
            marca.nome,
            marca.logo,
            id
        ],

        callback
    );

}

// =========================
// Excluir marca
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Marca
        WHERE idMarca = ?
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