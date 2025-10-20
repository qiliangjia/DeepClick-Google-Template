// 在此输入您的模板代码。
const log = require('logToConsole');
const injectScript = require('injectScript');
const encodeUriComponent = require('encodeUriComponent');

// 获取用户在字段中输入的mch_id & sdk_code
const mchId = data.mch_id;
const sdkCode = data.sdk_code;

// 构建SDK URL
const sdkUrl = 'https://storage.deepclick.com/dc-cdn/js-sdk/production/deep-click.js?mch_id=' + encodeUriComponent(mchId) + '&sdk_code=' + encodeUriComponent(sdkCode);

log('正在加载SDK：', sdkUrl,data);

// 注入脚本
injectScript(sdkUrl, () => {
    log('Deep Click SDK 加载成功');
    data.gtmOnSuccess();
}, () => {
    log('Deep Click SDK 加载失败');
    data.gtmOnFailure();
});