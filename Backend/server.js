import app from "./app";
import config from "./config/env.config";

app.listen(config.PORT, ()=>{
    console.log(`App is ruuning at the port http://localhost:${config.PORT}` );
})