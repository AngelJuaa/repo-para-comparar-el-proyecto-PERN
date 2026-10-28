import server from "./server.ts";


server.listen(4000,()=>{
    console.log("rest api en el puerto 4000");
    console.log("escuchando desde: ");
    console.log("localhost:4000");

}
)