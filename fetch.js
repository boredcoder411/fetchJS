function jsonFetch(url, method, content) {
  fetch(url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(content),
  });
}
