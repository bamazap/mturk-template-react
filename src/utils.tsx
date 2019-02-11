import { isString } from 'lodash';

/**
 * Sends a POST request to a URL via an HTML form
 * This is the *only* way to send data to AMT
 */
export function formPOST(url: string, data: { [name: string]: any }) {
  const form = document.createElement('form');
  form.action = url;
  form.method = 'POST';
  form.setAttribute('style', 'display:none!important');
  Object.entries(data).forEach(([name, value]) => {
    const input = document.createElement('input');
    input.name = name;
    input.value = isString(value) ? value : JSON.stringify(value);
    input.type = 'hidden';
    form.append(input);
  });
  const body = document.getElementsByTagName('body').item(0) as HTMLElement;
  body.appendChild(form);
  form.submit();
  body.removeChild(form);
}
