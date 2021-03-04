const mongoose = require('mongoose');
const option = {
    autoReconnect: true,
};
// const url = "mongodb://cygRoot:cyg1tracy@118.31.126.252:29089/ADTest?authSource=admin";
// const url = "mongodb://localhost:27017/ADTest";
const url = "mongodb://guardstrike:123456@localhost:8094/ADTest?authSource=admin";

module.exports = {
    connect: () => {
        mongoose.connect(url, option);
        const db = mongoose.connection;
        db.on('error', () => {
            console.log('连接错误');
        });
        db.once('open', () => {
            console.log('mongodb connect success');
        })
    }
};


