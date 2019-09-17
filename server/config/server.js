'use strict';
const path = require('path');
const os = require('os');
const network = os.networkInterfaces();
const cjson = require('cjson');

const productionList = ['49.234.63.236'];
const root = path.resolve(__dirname, '../..');
const cdnVersion = cjson.load(path.join(root, 'cdn.json')).version;

let evn = process.env.NODE_ENV || 'development';

//判断线上环境
for (let key in network) {
    const ip = network[key];
    console.log('==!!!!!!!!!!!!!=', network)
    for (let i = 0; i < ip.length; i++) {
        if (productionList.indexOf(ip[i].address) > -1) {
            evn = 'production';
            console.log(1)
        }
    }
}
console.log(2)

const config = {
    development: {
        environment: 'development',
        staticPath: {
            cdn: './dist/',
            cdnFile: 'http://127.0.0.1:8000/'
        },
        apiProxy: {
            javaServer: 'localhost',
            // javaServer: 'https://server-test.zugeliang01.com',
            mockData: false,
            cache: false,
            cacheTime: 30 * 60 * 1000
        }
    },
    production: {
        environment: 'production',
        staticPath: {
            cdn: 'https://static1.zugeliang01.com/web-zgl/' + cdnVersion,
            cdnFile: 'https://static1.zugeliang01.com/'
        },
        apiProxy: {
            javaServer: 'https://lmyear.com',
            mockData: false,
            cache: false,
            cacheTime: 30 * 60 * 1000
        }
    }
};

config[evn].evn = evn;
config[evn].root = root;
config[evn].port = 8000;
config[evn].portHttps = 8001;

module.exports = config[evn];
