import express, { Router } from 'express';


export default function server(
  routes: Router,
  port: number
) {

  //*Middlewares


  //*Server

  const app = express();

  app.use(express.json());

  //*Routes
  app.use(routes);

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

}