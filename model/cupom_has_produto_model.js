const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar cupom_has_produto
// =========================

function cadastrar(cupom_has_produto, callback) {

    const sql = `INSERT INTO cupom_has_produto
        ( cupom_idcupom,produto_marca_idmarca)
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            cupom_has_produto.cupom_idcupom,
            cupom_has_produto.produto_marca_idmarca
        ],
        callback
    );

}


// =========================
// Listar cupom_has_produto
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM cupom_has_produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM cupom_has_produto
        WHERE idcupom_has_produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM cupom_has_produto
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar cupom_has_produto
// =========================

function atualizar(id, cupom_has_produto, callback) {

    const sql = `
        UPDATE cupom_has_produto
        SET

            cupom_idcupom = ?,
            produto_marca_idmarca = ?

        WHERE idcupom_has_produto = ?
    `;

    conexao.query(
        sql,
        [
            cupom_has_produto.cupom_idcupom,
            cupom_has_produto.produto_marca_idmarca,
            id
        ],
        callback
    );

}

// =========================
// Excluir cupom_has_produto
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM cupom_has_produto
        WHERE idcupom_has_produto = ?
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
// Excluir cupom_has_produto
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM cupom_has_produto
        WHERE idcupom_has_produto = ?
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