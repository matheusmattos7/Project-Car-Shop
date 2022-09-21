import express from 'express';
import error from './middleware/Error/error';
import Route from './routes/route';

const app = express();
app.use(express.json());
app.use(Route);
app.use(error);

export default app;
