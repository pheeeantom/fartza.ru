/*module.exports = (sequelize, type) => {
    return sequelize.define('Goods', {
        id: {
            type: type.INTEGER.UNSIGNED,
			allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING(50),
            allowNull: false,
            validate: {
                min: {
                    args: 2,
                },
                max: {
                    args: 50,
                }
            }
        },
        lastName: {
            type: type.STRING(50),
            allowNull: false,
            validate: {
                min: {
                    args: 2,
                },
                max: {
                    args: 50,
                }
            }
        },
        address: {
            type: type.STRING(150),
            validate: {
                max: {
                    args: 150,
                }
            }
        },
        email: {
            type: type.STRING(60),
            validate: {
                isEmail: true
            }
        }
    })
};*/

exports.Getter = class Getter {
	constructor(pool) {
		this.pool = pool;
	}
	/*getNewest() {
		return new Promise(resolve => {
			this.pool.execute("SELECT COUNT(*) FROM `goods`;")
				.then(result => { 
		      		//console.log(result);
				    resolve(result[0][0]['COUNT(*)']);
				})
				.catch(function(err) {
			    	console.log(err.message);
			    });
		});
	}*/
	getNew(since) {
		return new Promise(resolve => {
			this.pool.execute("SELECT * FROM (SELECT * FROM `goods` WHERE `status`='active') AS T ORDER BY `id` DESC LIMIT 10 OFFSET " + since + ";")
				.then(result => { 
		      		resolve(result);
				})
				.catch(function(err) {
			    	console.log(err.message);
			    });
		});
	}
	getPopular(since) {
		return new Promise(resolve => {
			this.pool.execute("SELECT * FROM (SELECT * FROM `goods` WHERE `status`='active') AS T ORDER BY `views` DESC LIMIT 10 OFFSET " + since + ";")
				.then(result => { 
		      		resolve(result);
				})
				.catch(function(err) {
			    	console.log(err.message);
			    });
		});
	}
	getById(id) {
		return new Promise(resolve => {
			this.pool.execute("SELECT * FROM goods WHERE `id`=" + id + ";")
				.then(result => { 
		      		resolve(result);
				})
				.catch(function(err) {
			    	console.log(err.message);
			    });
		});
	}
	search(word, since, sort) {
		if (!sort || sort == 'new') {
			return new Promise(resolve => {
				this.pool.execute("SELECT * FROM goods WHERE name LIKE '%" + word + "%' AND `status`='active' ORDER BY `id` DESC LIMIT 10 OFFSET " + since + ";")
					.then(result => { 
			      		resolve(result);
					})
					.catch(function(err) {
				    	console.log(err.message);
				    });
			});
		}
		else {
			return new Promise(resolve => {
				this.pool.execute("SELECT * FROM goods WHERE name LIKE '%" + word + "%' AND `status`='active' ORDER BY `views` DESC LIMIT 10 OFFSET " + since + ";")
					.then(result => { 
			      		resolve(result);
					})
					.catch(function(err) {
				    	console.log(err.message);
				    });
			});
		}
	}
}

exports.Goods = class Goods {
	constructor() {
		
	}
}
