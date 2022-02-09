const body = document.querySelector('body');
// const createForm = () => {
//   const Form = document.createElement('form');
//   const Input = document.createElement('input');
//   Input.classList.add('input');
//   Input.setAttribute('type', 'text');
//   Input.setAttribute('ata-getByTestId', 'not-empty');
//   const button = document.createElement('button');
//   button.textContent = 'Button';
//   Form.appendChild(Input);
//   Form.appendChild(button);
//   body.appendChild(Form);
// };

export class Loader {
  // private element
  el = HTMLElement;
  showLoader() {
    this.el = document.createElement('div');
    this.el.classList.add('loader');
    body.append(this.el);
  }
  RemoveLoader() {
    document.removeChild(this.el);
  }
}
// export default createForm;
