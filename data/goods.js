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