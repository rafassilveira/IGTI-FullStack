var express = require("express");
var app = express();
var accountsRouter = require('./routes/accounts.js')
var fs = require("fs");

global.fileName="accounts.json"
// dizendo para o express que ira receber requisições JSON
app.use(express.json());
//sempre que chegar nesse endereço sera encaminhado para o arquivo accounts
app.use('/account',accountsRouter)

app.get("/", (req, res) => {
  res.send("hello wolrd");
});


app.listen(3000, () => {
  // verificar se o arquivo de com as contas já existe(acconts.json)
  // usando try catch para não quebrar a aplicação
  try {
    fs.readFile(global.fileName, "utf8", (err, data) => {
      if (err) {
        const initialJson = {
          nextId: 1,
          accounts: [],
        };
        fs.writeFile(global.fileName, JSON.stringify(initialJson), (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
  console.log("API Started");
});
