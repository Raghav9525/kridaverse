const express = require('express');
const cors = require('cors');
const app = express();
PORT = process.env.PORT || 5000

const userDataRoutes = require('./routes/userData')

app.use(express.json());
app.use(cors({
    origin: "*" // Allow all origins
}));



app.use('/',userDataRoutes);


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
