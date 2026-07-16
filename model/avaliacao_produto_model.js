const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar avaliação_produto
// =========================
function cadastrar(avaliacao_produto, callback) {

    const sql = `
        INSERT INTO avaliacao_produto
        (idavaliacao_produto, data, nota, descricao, produto_idproduto)
        VALUES (?, ?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            avaliacao_produto.idavaliacao_produto,
            avaliacao_produto.data,
            avaliacao_produto.nota,
            avaliacao_produto.descricao,
            avaliacao_produto.produto_idproduto
        ],
        callback
    );
}

// =========================
// Listar avaliações
// =========================
function listar(callback) {

    const sql = `
        SELECT * FROM avaliacao_produto
    `;

    conexao.query(sql, callback);
}

// =========================
// Buscar por ID
// =========================
function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM avaliacao_produto
        WHERE idavaliacao_produto = ?
    `;

    conexao.query(sql, [id], callback);
}

// =========================
// Buscar por Nota
// =========================
// Caso realmente exista um campo email,
// mantenha o nome da função anterior.
function buscarPorNota(nota, callback) {

    const sql = `
        SELECT *
        FROM avaliacao_produto
        WHERE nota = ?
    `;

    conexao.query(sql, [nota], callback);
}

// =========================
// Atualizar Avaliação
// =========================
function atualizar(id, avaliacao_produto, callback) {

    const sql = `
        UPDATE avaliacao_produto
        SET
            data = ?,
            nota = ?,
            descricao = ?,
            produto_idproduto = ?
        WHERE idavaliacao_produto = ?
    `;

    conexao.query(
        sql,
        [
            avaliacao_produto.data,
            avaliacao_produto.nota,
            avaliacao_produto.descricao,
            avaliacao_produto.produto_idproduto,
            id
        ],
        callback
    );
}

// =========================
// Excluir Avaliação
// =========================
function excluir(id, callback) {

    const sql = `
        DELETE FROM avaliacao_produto
        WHERE idavaliacao_produto = ?
    `;

    conexao.query(sql, [id], callback);
}

module.exports = {
    cadastrar,
    listar,
    buscarPorId,
    buscarPorNota,
    atualizar,
    excluir
};