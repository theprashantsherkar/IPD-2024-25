import { app } from './index.js';
import { connectDB } from './data/db.js';

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is running at port: ${process.env.PORT}`);
});