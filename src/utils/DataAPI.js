const api = 'http://localhost:5001';

let token = localStorage.token;

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

  const headers = {
    'Accept': 'application/json',
    // 'Authorization': token
  }

export const getAll = () => fetch(`${api}/contacts`, { headers }).then(res => res.json()).then(data => data);

// const uri = 'https://impactraining-democompany.arlo.co/api/2012-02-01/pub/resources';
// export const getCategories = () => fetch(
//   `${uri}/eventsearch/?format=json&facets=template`, { headers }
// ).then(res => res.json()).then(data => data);