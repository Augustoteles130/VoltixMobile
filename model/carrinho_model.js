const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar carrinho
// =========================

function cadastrar(carrinho, callback) {

    const sql = `INSERT INTO carrinho
        ( quantidade_produto,preco_total )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            carrinho.quantidade_produto,
            carrinho.preco_total
        ],
        callback
    );

}
// =========================
// Listar carrinho
// =========================
            cliente.Loja_idLoja
    

// =========================
// Listar carrinho
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM carrinho
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM carrinho
        WHERE idcarrinho = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM carrinho
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar carrinho
// =========================

function atualizar(id, carrinho, callback) {

    const sql = `
        UPDATE carrinho
        SET

            quantidade_produto = ?,
            preco_total = ?,
        WHERE idcarrinho = ?
    `;

    conexao.query(
        sql,
        [
            carrinho.quantidade_produto,
            carrinho.preco_total,
            id
        ],
        callback
    );

}

// =========================
// Excluir carrinho
// =========================
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

// =========================
// Excluir carrinho
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM carrinho
        WHERE idcarrinho = ?
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