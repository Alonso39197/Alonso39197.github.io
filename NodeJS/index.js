import http from 'http';
import url from 'url';



const servidor = http.createServer((req, res) => {
  console.log("Alguien me mandó una solicitud");
    //console.log(req);
    const urlProcesada = url.parse(req.url, true);
    //console.log(urlProcesada);
    const queryParams = urlProcesada.query;
    console.log(queryParams.x);
    console.log(queryParams.y);

  //res.writeHead(200, { 'Content-Type': 'text/plain' });
  //res.end('Quiero la libertad de esculpir y cincelar mi propio rostro, de detener la hemorragia con cenizas, de crear mis propios dioses a partir de mis entrañas...\n');

  if(queryParams.x == 1945){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
   // res.end('Hola' + queryParams.x);
    res.statusCode = 200;
    res.end(JSON.stringify({
        mensaje: "Abibi",
        x: queryParams.x,
        y: queryParams.y,
        exito: true
    }))

  }else{
    res.end('Salchipapa');
  }
});

const puerto = 1984;

servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});

/*
import axios from 'axios';

let p = new Promise(function(resolve, reject) {
    let test=10;
    if(test==10){
        resolve("Freedom is a constant struggle");
    }else{
        reject("Being oppresed means the absence of choice");
    }
});
console.log(p);
p.then(function(mensaje){
    console.log("Resuelto:", mensaje);
}).catch(function(error){
    console.log("Rechazado:", error);
});
axios.get('http://datos.imss.gob.mx/api/action/datastore/search.json?resource_id=ae9ed6bc-058c-4556-bb50-a78c808bcc0c&limit=10')
  .then(response => {
    console.log('Respuesta:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
*/