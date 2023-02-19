function jsonFetch(url, method, content) {
  fetch(url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(content),
  }).then((resp) => {return resp}).catch((error) => {return error});
}

function getFetch(url) {
  fetch(url, {
    method: "GET"
  }).then((resp) => {return resp}).catch((error) => {return error});
}
