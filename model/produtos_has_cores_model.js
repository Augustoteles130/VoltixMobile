const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar produtos_has_cores
// =========================

function cadastrar(produtos_has_cores, callback) {

    const sql = `INSERT INTO produtos_has_cores
        ( produto_idproduto,cores_idcores )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            produtos_has_cores.produto_idproduto,
            produtos_has_cores.cores_idcores
        ],
        callback
    );

            produtos_has_cores.cores_idcores,
            produtos_has_cores.produto_idproduto

}

// =========================
// Listar produtos_has_cores
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM produtos_has_cores
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM produtos_has_cores
        WHERE idProdutos_has_Cores = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM produtos_has_cores
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar produtos_has_cores
// =========================

function atualizar(id, produtos_has_cores, callback) {

    const sql = `
        UPDATE produtos_has_cores
        SET

            produto_idproduto = ?,
            cores_idcores = ?
            

        WHERE idProdutos_has_Cores = ?
    `;

    conexao.query(
        sql,
        [
            produtos_has_cores.produto_idproduto,
            produtos_has_cores.cores_idcores,
            id
        ],
        
    
        
    );

}


// =========================
// Excluir produtos_has_cores
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM produtos_has_cores
        WHERE idProdutos_has_Cores = ?
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