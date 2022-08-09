require('localstorage-polyfill')

export default function handler(req, res) {
    try {
        if (req.method == 'POST') {
            if (global.localStorage['dataObj'] === undefined) {
                res.status(404).end();
            }
            let timeHash = req.body['timeHash'];
            let upd = req.body['body'];
            let dObj = JSON.parse(global.localStorage['dataObj']);

            dObj[timeHash]["body"] = upd;
            global.localStorage['dataObj'] = JSON.stringify(dObj);

            res.status(200).end();
        }
    } catch {
        res.status(500).end()
    }
    
    res.status(404).end()
}