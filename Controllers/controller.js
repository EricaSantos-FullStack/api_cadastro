const db = require("../models");
const user = db.users;
const Op = db.Sequelize.Op;

exports.create = (req, resp) =>{

};

exports.findAll = (req, resp) => {

};

exports.findOne = (req, resp) => {

};

exports.update = (req, resp) => {

};

exports.delete = (req, resp) => {

};

exports.deleteAll = (req, resp) => {

};

//Criação//

exports.create = (req, resp) => {
    //validar a requisição
    if (!req.body.nome) {
        resp.status(400).send({
            message: "Esse campo não pode estar vazio"
        });
        return;
    }

    //Criar cadastro
    const users = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        data_nascimento: req.body.data_nascimento,
        email: req.body.email,
    };

    //Salvar no banco de dados
    Users.create(users)
    .then(data => {
        resp.send(data);
    })
    .catch(err => {
        resp.status(500).send({
            message:
            err.message || "Erro ao criar o cadastro"
        });
    });

};

//Encontrar os campos cadastrados = todos

exports.findAll = (req, resp) => {
    const nome = req.query.nome;
    var condition = nome ? { nome: {[Op.like]: `%${title}`}} : null;

    Users.findAll({ where: condition })
    .then(data => {
        resp.send(data);
    })
    .catch(err => {
        resp.status(500).send({
            message:
            err.message || "Erro ao procurar o cadastro"
        });
    });
};

// Encontrar um nome no cadastro

exports.findOne = (req, resp) => {
    const id = req.params.id;

    Users.findByPk(id)
    .then(data => {
        if (data) {
            resp.send(data);
        } else {
            resp.status(404).send({
                message: `Não foi possivel encontrar o usuário id=${id}.`
            });
        }
    })
    .catch(err => {
        resp.status(500).send({
            message: "Erro ao encontrar o usuário id=" + id
        });
    });
};

//Alterar - fazer o update do usuario