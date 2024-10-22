import express from "express";
import router from "./router/routes.js";
const app = express();


const PORT = process.env.PORT || 3000;

//Routing
app.use("/", router)



app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});