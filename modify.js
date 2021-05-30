let url = $request.url;
let body = JSON.parse($response.body);

body.result.necklaceCheckRes.resultCode = 2;

body = JSON.stringify(body);
$done({ body });
