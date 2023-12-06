import express, { Application } from 'express';
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import Router from './routes';  

import './utils'

const PORT = process.env.PORT || 8888;

const app: Application = express();

app.use(express.json());
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
)
app.use(Router);

app.get('/', async(req, res)=> {
  res.send('Hello World!');
})

app.listen(PORT, ()=> {
  console.log(`Server is running on port http://localhost:${PORT}`);
})