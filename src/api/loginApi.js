



class LoginApi {
  static LoginUser(login) {
    let form_data = new FormData();

    for(let key in login) {
      form_data.append(key, login[key]);
    }

    return fetch('/api-auth/login/', {method: "POST", body: form_data, credentials: 'same-origin', redirect: 'manual'});
  }

}

export default LoginApi;
