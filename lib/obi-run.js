var fs = require('fs');
var path = require('path');
var AppContext = require('app-context');

exports.usage = function() {
  return 'run [script]';
}

exports.execute = function(script) {
  if (!script) throw new Error('Must supply a script to obi run');
  var fullPath = path.join(process.cwd(), script);
  if (!fs.existsSync(fullPath)) throw new Error('Could not find script ' + script);
  
  return AppContext.loadFromPackage(AppContext.RunLevel.Initialized)
  .then(function(context) {
    var scriptModule = require(fullPath);
    if (typeof(scriptModule) === 'function') {
      return scriptModule(context);
    } else if (typeof(scriptModule.execute) === 'function') {
      return scriptModule.execute(context);
    }
  }).catch(function(err) {
    console.log(err.stack);
  });
};
