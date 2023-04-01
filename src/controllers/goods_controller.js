const { Op } = require('sequelize');
const goods = require('../../data/goods.js');
const pool = require('../db/pool');
const { Goods } = require('../db/sequelize');

exports.getPage = (request, response, next) => {
    /*let getter = new goods.Getter(pool);
    if (request.query.sort) {
        getter.search(request.query.word, request.query.since, request.query.sort).then(result => {
            if (result[0].length == 0) {
                response.status(404).send({error: 'Ничего не найдено!'});
                return;
            }
            response.json( { 'goods': [result[0]] } );
        });
    }
    else {
        getter.search(request.query.word, request.query.since).then(result => {
            if (result[0].length == 0) {
                response.status(404).send({error: 'Ничего не найдено!'});
                return;
            }
            response.json( { 'goods': [result[0]] } );
        });
    }*/
    if (request.query.sort) {
        //if (!request.query.sort || request.query.sort == 'new') {
			//"SELECT * FROM goods WHERE name LIKE '%" + word + "%' AND `status`='active' ORDER BY `id` DESC LIMIT 10 OFFSET " + since + ";"
        Goods.findAll({
            where: {
                [Op.and]: [{
                    name: {
                        [Op.like]: '%' + request.query.word + '%'
                    },
                    status: 'active'
                }]
            },
            order: [[!request.query.sort || request.query.sort == 'new' ? 'id' : 'views', 'DESC']],
            limit: 10,
            offset: Number(request.query.since)
        }).then(result => {
            if (result.length == 0) {
                response.status(404).send({error: 'Ничего не найдено!'});
                return;
            }
            response.json( { 'goods': [result] } );
        }).catch(err => {
            response.status(500).send({error: err});
        });
		//}
		/*else {
			Goods.findAll({
                where: {
                    [Op.and]: [{
                        name: {
                            [Op.like]: '%' + request.query.word + '%'
                        },
                        status: 'active'
                    }]
                },
                order: [['views', 'DESC']],
                limit: 10,
                offset: Number(request.query.since)
            }).then(result => {
                if (result.length == 0) {
                    response.status(404).send({error: 'Ничего не найдено!'});
                    return;
                }
                response.json( { 'goods': [result] } );
            }).catch(err => {
                response.status(500).send({error: err});
            });
		}*/
    }
    /*Goods.findAll({ 
        limit: 15
    }).then(result => {
        response.json( { 'goods': [result] } );
    }).catch(next);*/
};

exports.getSingle = (request, response, next) => {
    /*let getter = new goods.Getter(pool);
    getter.getById(request.params["id"]).then(result => {
        if (result[0].length == 0) {
            response.status(404).send({error: 'Ничего не найдено!'});
            return;
        }
        response.json( { 'goods': [result[0]] } );
    });*/
    /*Goods.findOne({
        where: {
            id: {
                [Op.eq]: request.params["id"]
            }
        }
    })*/Goods.findByPk(request.params["id"]).then(result => {
        if (result.length == 0) {
            response.status(404).send({error: 'Ничего не найдено!'});
            return;
        }
        response.json( { 'goods': [[result]] } );
    }).catch(err => {
        response.status(500).send({error: err});
    });
};
