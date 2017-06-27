import { AngularTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Starting tests for airline-dashboard', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be airline-dashboard', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('airline-dashboard');
    })
  });

  it('navbar-brand should be airline-network@0.0.1',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('airline-network@0.0.1');
  });

  
    it('Asset component should be loadable',() => {
      page.navigateTo('/Asset');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Asset');
    });

    it('Asset table should have 1 columns',() => {
      page.navigateTo('/Asset');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(1); // Addition of 1 for 'Action' column
      });
    });

  
    it('Plane component should be loadable',() => {
      page.navigateTo('/Plane');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Plane');
    });

    it('Plane table should have 3 columns',() => {
      page.navigateTo('/Plane');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });

  
    it('Part component should be loadable',() => {
      page.navigateTo('/Part');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Part');
    });

    it('Part table should have 5 columns',() => {
      page.navigateTo('/Part');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });

  
    it('ServiceLog component should be loadable',() => {
      page.navigateTo('/ServiceLog');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('ServiceLog');
    });

    it('ServiceLog table should have 3 columns',() => {
      page.navigateTo('/ServiceLog');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });

  

});
