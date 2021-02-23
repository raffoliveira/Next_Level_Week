import "reflect-metadata";
import express, { request, response } from "express";
import "./database";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(router);



/**
 * GET = busca
 * POST = salvar
 * PUT = alterar
 * DELETE = deletar
 * PATCH = alterar especificamente
 */

//http://localhost:3333/users
// app.get("/", (resquest, response) => {
// return response.send('Hello World!!');
//     return response.json({ 'message': 'Hello World' });
// })

// app.post('/', (request, response) => {
//     return response.json({ 'message': 'The data is saved.' })
// })

//listen(port, )
app.listen(3333, () => console.log('Server is running!'));

