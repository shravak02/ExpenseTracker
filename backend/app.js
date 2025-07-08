import express from "express";
import db from "./db/db.js";
import cors from "cors"
import path  from "path";
import { fileURLToPath } from 'url';
import { readdirSync } from "fs";
import Router from './routes/transactions.js';

const app = express()
const port = 5000
//
//

// middlewares
app.use(express.json())
app.use(cors())
app.use('/api/v1/transactions', Router);
//routes
// Recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Read and load routes
const routeFiles = readdirSync(path.join(__dirname, 'routes'));

/* for (const file of routeFiles) {
  const route = file.replace('.js', '');
  const modulePath = path.join(__dirname, 'routes', file);
  const routeModule = await import(`file://${modulePath}`);
  console.log(route)
  app.use(`/api/v1/${route}`, routeModule.default);
 // eg will give put at http://localhost:3000/api/v1/transactions 
}
 */
app.get('/',(req,res)=>{
    res.send('hello world')
})


app.listen(port,()=>{
    db()
    console.log('listing to port:',port)
})