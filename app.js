const fs = require('fs');
const path = require('path');
const express = require('express');
const compression = require('compression');

const app = express();
// 开启gzip
app.use(compression());


app.use(express.static(path.resolve(__dirname, './public')))

app.get('*', function (req, res) {
	const html = fs.readFileSync(path.resolve(__dirname, './public/index.html'),
		'utf-8')
	res.send(html)
})
app.listen(8080);
