var expect = require('expect.js');
var CureDAO = require('../../../src/index');
var instance;
beforeEach(function(){
    instance = new CureDAO.AuthorizedClients();
});
describe('AuthorizedClients', function(){
    it('should create an instance of AuthorizedClients', function(){
        // uncomment below and update the code to test AuthorizedClients
        //var instance = new CureDAO.AuthorizedClients();
        //expect(instance).to.be.a(CureDAO.AuthorizedClients);
    });
    it('should have the property apps (base name: "apps")', function(){
        // uncomment below and update the code to test the property apps
        //var instance = new CureDAO.AuthorizedClients();
        //expect(instance).to.be();
    });
    it('should have the property individuals (base name: "individuals")', function(){
        // uncomment below and update the code to test the property individuals
        //var instance = new CureDAO.AuthorizedClients();
        //expect(instance).to.be();
    });
    it('should have the property studies (base name: "studies")', function(){
        // uncomment below and update the code to test the property studies
        //var instance = new CureDAO.AuthorizedClients();
        //expect(instance).to.be();
    });
});
