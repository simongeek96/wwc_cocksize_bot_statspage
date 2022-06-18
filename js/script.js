const xhr = new XMLHttpRequest();
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTU1Nzc5MzIsImp0aSI6IjEyMyIsInN1YiI6IjQ0NDA0OTkwNSJ9.4jAgFQqQB4hFSg3fcO10Gnzd4g9rhWo7mzLejh5anVk';
let refreshToken = '91d731a3950417c891a7edcaefff356ed4c6c30d07b8ff595e4b6e744c72db67';
const requestURL = 'http://95.216.195.202:1488/api/stats';
const refreshURL = 'http://95.216.195.202:1488/auth/refresh';

function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    xhr.open(method, url, true);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send();

    // console.log(xhr.response);
    // console.log(fetch.response);

    xhr.onload = () => {
      if (xhr.status >= 400) {
        resolve(xhr.response);
      } else {
        reject(xhr.response);
      }
    }

    xhr.error = () => {
      reject(xhr.response);
    }

  })
}

sendRequest('GET', requestURL)
  .then(data => console.log(data))
  .catch(err => console.log(err));

//   const body = {
//     token: refreshToken,
//   }


// function sendRefresh(method, url, body = null) {
//   return new Promise((resolve, reject) => {
//     xhr.open(method, url, true);
//     xhr.send();

//     xhr.onload = () => {
//       if (xhr.status >= 400) {
//         resolve(xhr.response);
//       } else {
//         reject(xhr.response);
//       }
//     }

//     xhr.error = () => {
//       reject(xhr.response);
//     }
//   })
// }

// sendRefresh('POST', refreshURL, body)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

fetch(refreshURL, {
  method: 'POST',
  body: ({
    'token': 'refreshToken',
  }),
});


// const requestURL = 'https://jsonplaceholder.typicode.com/users';
// xhr.responseType = 'json'








// const body = {
//   name: 'Rick',
//   age: 70,
// }



// xhr.send([body]);
// let stats = document.querySelector('.stats');

