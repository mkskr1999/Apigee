var res = JSON.parse(response.content);

var minres = {
    token_type : res.token_type,
    access_token : res.access_token,
    scope: res.scope,
};

response.content = JSON.stringify(minres);



