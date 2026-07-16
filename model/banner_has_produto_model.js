const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar banner_has_produto
// =========================

function cadastrar(banner_has_produto, callback) {

    const sql = `INSERT INTO banner_has_produto
        ( banner_idBanner, produto_idProduto )
        VALUES (?, ? )`;

    conexao.query(
        sql,
        [
            banner_has_produto.banner_idBanner,
            banner_has_produto.produto_idProduto
        ],
        callback
    );

            banner_has_produto.banner_idbanner,
            banner_has_produto.produto_idproduto
          
        
}

// =========================
// Listar   banner_has_produto
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM banner_has_produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM banner_has_produto
        WHERE banner_idBanner = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM banner_has_produto
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar banner_has_produto
// =========================

function atualizar(id, banner_has_produto, callback) {

    const sql = `
        UPDATE banner_has_produto
        SET

            banner_idbanner = ?,
            produto_idproduto = ?
        WHERE banner_idBanner = ?
    `;
    
    ;

    conexao.query(
        sql,
        [
            banner_has_produto.banner_idbanner,
            banner_has_produto.produto_idproduto,
            id
        ],
        callback
    );
}
// =========================
// Excluir banner_has_produto
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM banner_has_produto
        WHERE banner_idBanner = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorEmail,
    atualizar,
    excluir,
};