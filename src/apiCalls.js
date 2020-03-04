export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export const postUrls = (options) => {
  return fetch('http://localhost:3001/api/v1/urls', options)
    .then(response => response.json())
}

export const deleteUrl = (urlId) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(`http://localhost:3001/api/v1/urls/${urlId}`, options)
}

