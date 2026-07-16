const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar banner
// =========================

function cadastrar(banner, callback) {

    const sql = `INSERT INTO banner
        ( imagem,data_inicio,data_final,status_visibilidade,Loja_idLoja,Promocao_idPromocao )
        VALUES (?, ?, ?, ?, ?, ? )`;

    conexao.query(
        sql,
        [
            banner.imagem,
            banner.data_inicio,
            banner.data_final,
            banner.status_visibilidade,
            banner.Loja_idLoja,
            banner.Promocao_idPromocao
        ],
        callback
    );

            banner.cpf,
            banner.telefone,
            banner.email,
            banner.senha,
            banner.data_nascimento,
            banner.Loja_idLoja
            banner.Promocao_idPromocao
        
}

// =========================
// Listar banner
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM banner
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM banner
        WHERE idBanner = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT * FROM banner
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);

}

// =========================
// Atualizar Banner
// =========================

function atualizar(id, banner, callback) {

    const sql = `
        UPDATE banner
        SET

            imagem = ?,
            data_inicio = ?,
            data_final = ?,
            status_visibilidade = ?,
            Loja_idLoja = ?,
            Promocao_idPromocao = ?
        WHERE idBanner = ?
    `;
    
    ;

    conexao.query(
        sql,
        [
            banner.imagem,
            banner.data_inicio,
            banner.data_final,
            banner.status_visibilidade,
            banner.Loja_idLoja,
            banner.Promocao_idPromocao,
            id
        ],
        callback
    );
}
// =========================
// Excluir Banner
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM banner
        WHERE idBanner = ?
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