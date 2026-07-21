export function renderSuccess(res, view, data) {
  res.render(view, { data });
}

export function renderError(res, view, errorMsg) {
  res.render(view, { error: errorMsg });
}

export default { renderSuccess, renderError };
