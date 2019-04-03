/* eslint-disable no-new */

import chai, {expect} from 'chai';
import chaijQ from 'chai-jq';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import fs from 'fs';

chai.use(chaijQ);
chai.use(sinonChai);

const template = fs.readFileSync('test/fixtures/template.html', 'utf-8');

function setBody(html) {
  document.body.innerHTML = html;
}

function resetBody() {
  document.body.innerHTML = '';
}

describe('jquery.nouislider-range-input', () => {
    var $;

    beforeEach(() => {
        jest.resetModules();
        $ = require('jquery');
        require('../src');
    });

    afterEach(resetBody);

    test('register as a function on the jQuery prototype', () => {
        expect($.fn.enableNoUISlider).to.be.a('function');
    });
    
    test('enable nouislider on a range input', () => {
        setBody(template);
        
        $('.my-custom-class-enabling-nouislider').enableNoUISlider();
        
        expect( $('.my-custom-class-enabling-nouislider') )
            .to.have.$class('js-nouislider-initialized');
        
        expect( 
            $('.my-custom-class-enabling-nouislider')
                .siblings('div.nouislider-range-wrapper')
                .children('div').eq(0)
            )
          .to.have.$class('noUi-target');
    });    
});
