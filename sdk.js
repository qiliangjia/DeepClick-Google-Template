// 在此输入您的模板代码。
const log = require('logToConsole');
const injectScript = require('injectScript');
const encodeUriComponent = require('encodeUriComponent');

// 获取用户在字段中输入的mch_id
const mchId = data.mchId;

// 构建SDK URL
const sdkUrl = 'https://power-test.deepclick.com/deep-click.js?mch_id=' + encodeUriComponent(mchId);

log('正在加载SDK：', sdkUrl);

// 注入脚本
injectScript(sdkUrl, () => {
    log('Deep Click SDK 加载成功');
    data.gtmOnSuccess();
}, () => {
    log('Deep Click SDK 加载失败');
    data.gtmOnFailure();
});