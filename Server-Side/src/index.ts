import express from 'express';
import router from './routes/index.ts';
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', router);

app.listen(PORT, () => {
    console.warn(`Server listening on PORT: ${PORT}`)
})
