export function sendAPIRequest(params, uri, method) {
    let query = '';
    let headers = {};
    if (method == 'GET') {
        for (let key in params) {
            query += key + "=" + params[key] + "&";
        }
        if (query.length > 0)
            query = '?' + query.slice(0, -1);
        console.log(query);
        headers = {
            //issuedateTo=2005', {
            //10000]
            //quer?referenceyearFrom=2022
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
    }
    else {
        headers = {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        };
        
    }
    return new Promise((resolve, reject) => {
        fetch(uri + query, headers).then((response) => {    // in case of 'response' - headers,  in case of 'response.json' or 'response.text' - body
            if (response.status >= 200 && response.status < 300) {
                return response;
            } else {
                let error = response;
                //console.log(response);
                throw error;    // it catches 2 lines below this line
            }
        }).catch((e) => {
            reject({error: 'Error: ' + e.status + "." + (e.message ? e.message : "")});
        }).then((response) => {
            if (!response.headers.get('content-type').startsWith('application/json')) {
                reject({error: 'Error: ' + response.status + '. Response is not json'});
            }
            return response;
        }).then(response => {
            response.json().then(body => {
                console.log(1);
                resolve({body: body, params: params, response: response});
            }).catch((e) => {
                reject({error: 'Error: ' + e.message});
            });
        });
    });
}