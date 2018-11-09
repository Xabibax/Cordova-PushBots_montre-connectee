cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "pushbots-cordova-plugin.PushbotsPlugin",
    "file": "plugins/pushbots-cordova-plugin/www/pushbots.js",
    "pluginId": "pushbots-cordova-plugin",
    "clobbers": [
      "PushbotsPlugin"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "pushbots-cordova-plugin": "1.6.0",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});