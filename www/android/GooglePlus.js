
var exec = require('cordova/exec');

module.exports = {
    login: function (options, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "GooglePlus", "login", [options]);
    },
    logout: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "GooglePlus", "logout", []);
    }
};
