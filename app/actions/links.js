export function submitCreateLink(link, title, description) {
  return (dispatch) => {
    dispatch({
      type: 'CLEAR_LINKS'
    });
    return fetch('/link', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        link: link,
        title: title,
        description: description,
      })
    }).then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          dispatch({
            type: 'LINKS_FORM_SUCCESS',
            messages: [json]
          });
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: 'LINKS_FORM_FAILURE',
            messages: Array.isArray(json) ? json : [json]
          });
        });
      }
    });
  };
}

export function scrapSite(site) {
  return fetch('/api/scrapper?site=' + site, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      if (response.ok) {
        return response;
      }
    });
}

export function deleteLink(id, callback) {
  return fetch('/link', {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: id,
      })
    }).then((response) => {
      if (response.ok) {
        return callback;
      }
    });
}

export function updateLink(id, link, title, description, callback) {
  return fetch('/link', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: id,
        link: link,
        title: title,
        description: description
      })
    }).then((response) => {
      if (response.ok) {
        return callback;
      }
    });
}
