

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = jQuery.trim(cookies[i]);
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

class LoginApi {
  static LoginUser(login) {
    let form_data = new FormData();

    for(let key in login) {
      form_data.append(key, login[key]);
    }

    return fetch('/api-auth/login/', {method: "POST", body: form_data, credentials: 'same-origin'})
    .then(response => {
      console.log(response);
      let csrftoken = getCookie('csrftoken');
      console.log(csrftoken);
      return response;
    });

  }

}

export default LoginApi;
