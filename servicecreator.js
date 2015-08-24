function createNameValueDataService(execlib, ParentServicePack) {
  'use strict';
  var ParentService = ParentServicePack.Service,
    dataSuite = execlib.dataSuite;

  function factoryCreator(parentFactory) {
    return {
      'service': require('./users/serviceusercreator')(execlib, parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib, parentFactory.get('user')) 
    };
  }

  function NameValueDataService(prophash) {
    ParentService.call(this, prophash);
  }
  
  ParentService.inherit(NameValueDataService, factoryCreator, require('./storagedescriptor'));
  
  NameValueDataService.prototype.__cleanUp = function() {
    ParentService.prototype.__cleanUp.call(this);
  };
  NameValueDataService.prototype.createStorage = function(storagedescriptor) {
    return ParentService.prototype.createStorage.call(this, storagedescriptor);
  };
  return NameValueDataService;
}

module.exports = createNameValueDataService;
