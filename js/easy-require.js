(function() {
  var modules = {}
  var require = function(name) {
    if (defined(name)) {
      var module = exporter(modules[name], name)
      return module
    } else {
      console.log("Module: " + name + " is not defined!")
    }
  }

  var define = function(name, definition) {
    if (!defined(name)) {
      modules[name] = definition
    } else { console.log(name + " is already defined") }
  }

  var exporter = function(def, name) {
    var module = { exports: {} }
    def(module)

    if (Object.keys(module.exports).length === 0) { console.log("Module: " + name + " doesn't export anything, there bud!")}
    return module.exports
  }

  var defined = function(name) {
    return !!modules[name]
  }

  window.require = require
  window.define = define

}())