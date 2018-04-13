
var exec = require('cordova/exec');

module.exports = {
    isAvailable: function (callback) {
        exec(callback, null, "GooglePlus", "isAvailable", []);
    },
    login: function (options, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "GooglePlus", "login", [options]);
    },
    trySilentLogin: function (options, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "GooglePlus", "trySilentLogin", [options]);
    },
    logout: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "GooglePlus", "logout", []);
    }
};
