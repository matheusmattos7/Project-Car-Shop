import express from 'express';
import errorMiddleware from './middleware/Error/error';
import Route from './routes/route';

const app = express();
app.use(express.json());
app.use(Route);
app.use(errorMiddleware);

export default app;
