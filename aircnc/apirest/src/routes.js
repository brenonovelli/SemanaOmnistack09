import express from 'express';

const routes = express.Router();

routes.post('/', (req, res) => res.json({ status: 'Ok' }));

export default routes;
