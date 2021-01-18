import { log } from 'console';
import * as http from 'http';

const serve = http.createServer((request, response) => {
    console.info(request.headers)
    response.end("hello node!");
});
serve.listen(18000);
