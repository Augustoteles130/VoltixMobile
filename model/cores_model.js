const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cliente
// =========================

function cadastrar(cores, callback) {

    const sql = `INSERT INTO cores
        ( nome,codigo_cor)
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            cores.nome,
            cores.codigo_cor
        ],
        callback
    );

}


// =========================
// Listar Clientes
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM cores
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM cores
        WHERE idCores = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM cores
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar Cliente
// =========================

function atualizar(id, cores, callback) {

    const sql = `
        UPDATE cores
        SET

            nome = ?,
            codigo_cor = ?

        WHERE idCores = ?
    `;

    conexao.query(
        sql,
        [
            cores.nome,
            cores.codigo_cor,
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
        DELETE FROM cores
        WHERE idCores = ?
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
// Excluir Cliente
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM cores
        WHERE idCores = ?
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