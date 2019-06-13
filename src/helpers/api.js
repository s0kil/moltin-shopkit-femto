export let moltinApi;
export function setApiHandler(moltinClient) {
  moltinApi = moltinClient;
  moltinApi.debounce = false;
}

let controller, signal;
export function fetchController(uri, options) {
  if (moltinApi.debounce && controller !== undefined) controller.abort(); // Cancel The Previous Request
  if (AbortController) {
    controller = new AbortController();
    signal = controller.signal;
  }

  const { body, method, headers } = options;

  return fetch(uri, {
    signal,
    method,
    headers,
    body
  });
}