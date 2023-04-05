const ethers = require('ethers');
const commonUtils = require('../utils/common');
const {dbCfg,httpCfg} = require('../conf/gmxDataCfg');

const fs = require('fs');
const path = require('path');
const log4js = require("log4js");
const db = require("../utils/db-utils");
db.init(dbCfg.host, dbCfg.user, dbCfg.password, dbCfg.database);
const express = require('express');
const { lookup } = require('dns');
var app = express();
var httpServer = app.listen(httpCfg.port, function () {
    var host = httpServer.address().address;
    var port = httpServer.address().port;
    logger.info('Http app listening at ', host, port);
});
const DENOMINATOR_MAX = ethers.utils.parseEther("1");

/**
 * 
 * 日志设置
 * 
 */
log4js.configure({
    appenders: {
          out: { type: "console" },
          gmxDataService: {
                type: "dateFile",
                filename: "../logs/gmxDataService/normal",
                pattern: "yyyy-MM-dd.log",
                alwaysIncludePattern: true,
          },
    },
    categories: { default: { appenders: ["gmxDataService", "out"], level: "debug" } },
});
let logger = log4js.getLogger("[gmxDataService]");

/**
 * 
 * HTTP 服务
 * 
 */

 app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/api/your-endpoint', (req, res) => {
    // 在这里处理你的业务逻辑
    const result = {
        message: '这是一个示例 GET 方法的 API 接口',
    };

    // 返回 JSON 格式的响应
    res.json(result);
});

async function xxxx() {

}


main();
async function main (){
    setInterval(xxxx, 15000);
}   

logger.info(`start script\n`);

