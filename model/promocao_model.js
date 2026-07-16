const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar promocao
// =========================

function cadastrar(promocao, callback) {

    const sql = `INSERT INTO Promocao
        ( data_inicial,data_final,valor_promocao,nome )
        VALUES (?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            promocao.data_inicial,
            promocao.data_final,
            promocao.valor_promocao,
            promocao.nome
        ],
        callback
    );


}

// =========================
// Listar promocao
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Promocao
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM promocao
        WHERE idPromocao = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM promocao
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar Cliente
// =========================

function atualizar(id, promocao, callback) {

    const sql = `
        UPDATE Promocao
        SET

            data_inicial = ?,
            data_final = ?,
            valor_promocao = ?,
            nome = ?,
          

        WHERE idPromocao = ?
    `;

    conexao.query(
        sql,
        [
            promocao.data_inicial,
            promocao.data_final,
            promocao.valor_promocao,
            promocao.nome,
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
        DELETE FROM Promocao
        WHERE idPromocao = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Excluir Promocao
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Promocao
        WHERE idPromocao = ?
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