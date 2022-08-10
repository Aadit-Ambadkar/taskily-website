require('localstorage-polyfill')

export default function handler(req, res) {
    try {
        if (req.method == 'POST') {
            // global.localStorage.clear()

            if (global.localStorage['dataObj'] === undefined) {
                global.localStorage['dataObj'] = JSON.stringify({})
            }
            let timeHash = (+new Date).toString(36);
            let dObj = JSON.parse(global.localStorage['dataObj']);

            dObj[timeHash] = {'date': (new Date()).toJSON().slice(0,10).replace(/-/g,'/'), 'body': req.body};
            global.localStorage['dataObj'] = JSON.stringify(dObj);

            res.status(200).json(JSON.stringify(timeHash)).end();
        } else if (req.method == 'GET') {
            if (global.localStorage['dataObj'] === undefined) {
                res.status(404).end();
            }
            res.status(200).json(global.localStorage['dataObj']).end();
            
        } else if (req.method == 'PURGE') {
            global.localStorage.clear()
            res.status(200).end()
        } else if (req.method == 'PUT') {
            if (global.localStorage['dataObj'] === undefined) {
                res.status(404).end();
            }
            req.body = JSON.parse(req.body)
            let timeHash = req.body['timeHash']
            let dObj = JSON.parse(global.localStorage['dataObj']);
            if (dObj[timeHash] === undefined) {
                res.status(404).end()
            }
            res.status(200).json(JSON.stringify(dObj[timeHash])).end()
        }
    } catch {
        res.status(500).end()
    }

    res.status(404).end()
}
