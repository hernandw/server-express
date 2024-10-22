import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Mi primer servidor en Express");
});

router.get("/login", (req, res) => {
    res.send("Esta es una ruta get");
})

router.post("/login", (req, res) => {
    res.send("Esta es una ruta post que permite enviar informacion");
})

router.put("/login", (req, res) => {
    res.send("Esta es una ruta put que permite actualizar informacion");
})

router.delete("/login", (req, res) => {
    res.send("Esta es una ruta delete que permite eliminar informacion");
})


export default router