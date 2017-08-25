import {JSDOM} from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const dom = new JSDOM('<!doctype html><html><body></body></html>');
const window = dom.window;
const document = window.document;

global.document = document;
global.window = window;

global.navigator = {
    userAgent: 'node.js'
  };

chai.use(chaiImmutable);