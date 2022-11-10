const requestURL = 'http://95.216.195.202:1488/api/stats';
const refreshURL = 'http://95.216.195.202:1488/auth/refresh';
let accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjgxMTExMDUsImp0aSI6IjEyMyIsInN1YiI6IjQ0NDA0OTkwNSJ9.tW6gev502JQssBfbpxKARsjEb_IPWtr3krmINheLDyA';
let refreshToken = 'c13be61d632ac7f28b4b40d0e1c61f5e98d4b98d951ba75dcc6f067c65a8153c';
let expiresIn = 900;

async function getData() {
  let response = await fetch(requestURL, {
    headers: {
      Authorization: 'Bearer ' + accessToken,
      'Content-Type': 'application/json;charset=utf-8'
    }
  });
  let content = await response.json();
  console.log(content.data);


  function byField(field) {
    return (a, b) => a[field] < b[field] ? 1 : -1;
  }

  content.data.sort(byField('CockSize'));

  let list = document.querySelector('.stats__table');

  for (let key in content.data) {
    list.innerHTML += `
      <tr class="stats__table_row">
        <td class="stats__table_data-username">
          ${content.data[key].Username}
        </td>
        <td class="stats__table_data-firstname">
          ${content.data[key].FirstName}
        </td>
        <td class="stats__table_data-lastname">
          ${content.data[key].LastName}
        </td>
        <td class="stats__table_data-cocksize">
          ${content.data[key].CockSize}
        </td>
      </tr>
    `
  }
}

getData();
