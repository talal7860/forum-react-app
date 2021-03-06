import 'whatwg-fetch';
import { getCurrentUserToken } from 'utils/persistUser';
import { merge } from 'lodash/fp';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  let error = '';
  try {
    const errorResp = await response.json();
    if (errorResp.error) {
      error = errorResp.error;
    } else {
      error = errorResp.meta.message;
    }
  } catch (e) {
    error = response.statusText;
  }
  throw new Error(error);
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
async function request(url, options) {
  let requestOptions = options;
  try {
    const token = await getCurrentUserToken();
    if (token) {
      requestOptions = merge({ headers: { Authorization: token } }, options);
    }
  } catch (e) {
    requestOptions = options;
  }
  return fetch(url, requestOptions)
    .then(checkStatus)
    .then(parseJSON);
}

/**
 * POSTS a JSON URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [data] The data we want to pass to "POST"
 *
 * @return {object}           The response data
 */
export function postRequest(url, data = {}) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  };
  return request(url, options);
}
export default request;
