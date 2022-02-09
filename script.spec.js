// import createForm from './script';
import { Loader } from './script';

describe('test for dom element', () => {
  test('check for the form element in dom', () => {
    const obj = new Loader();
    obj.showLoader();
    expect(document.getElementsByClassName('loader')).toBeDefined();
  });
});
