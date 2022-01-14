const express = require('express');
const cors = require('cors');
const app = express();

var corsOptions = {
    origin: "http://localhost:360"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, resp) => {
    resp.json("Está funcionando! Continue assim");
});

const PORT = process.env.PORT || 360;
app.listen(PORT, () =>{
    console.log(`Esse servidor está rodando na porta ${PORT}.`);
})




