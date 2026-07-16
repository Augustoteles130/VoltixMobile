const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar loja
// =========================

function cadastrar(loja, callback) {

    const sql = `INSERT INTO loja
        ( nome,whatsapp,instagram,facebook,linkedin,telefone,email,Lojista_idLojista,Endereco_idEndereco )
        VALUES (?, ?, ?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            loja.nome,
            loja.whatsapp,
            loja.instagram,
            loja.facebook,
            loja.linkedin,
            loja.telefone,
            loja.email,
            loja.Lojista_idLojista,
            loja.Endereco_idEndereco
        ],
        callback
    );

}

// =========================
// Listar lojas
// =========================
            loja.Lojista_idLojista
    
// =========================
// Listar lojas
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM loja
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM loja
        WHERE idLoja = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM loja
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar loja
// =========================

function atualizar(id, loja, callback) {

    const sql = `
        UPDATE loja
        SET

            nome = ?,
            whatsapp = ?,
            instagram = ?,
            facebook = ?,
            linkedin = ?,
            telefone = ?,
            email = ?,
            Lojista_idLojista = ?,
            Endereco_idEndereco = ?

        WHERE idLoja = ?
    `;

    conexao.query(
        sql,
        [
            loja.nome,
            loja.whatsapp,
            loja.instagram,
            loja.facebook,
            loja.linkedin,
            loja.telefone,
            loja.email,
            loja.Lojista_idLojista,
            loja.Endereco_idEndereco,
            id
        ],
        callback
    );

}

// =========================
// Excluir loja
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM loja
        WHERE idLoja = ?
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