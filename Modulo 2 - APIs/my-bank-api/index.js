var express = require("express");
var app = express();
var fs = require("fs");
// dizendo para o express que ira receber requisições JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello wolrd");
});

app.post("/account", (req, res) => {
  let account = req.body;
  fs.readFile("accounts.json", "utf8", (err, data) => {
    if (!err) {
      try {
        let json = JSON.parse(data);
        account = { id: json.nextId++, ...account };
        json.accounts.push(account);
        fs.writeFile("accounts.json", JSON.stringify(json), (err) => {
          if (err) {
            res.status(400).send({ error: err.message });
          } else {
            res.end();
          }
        });
      } catch (err) {
        res.status(400).send({ error: err.message });
      }
    } else {
      res.status(400).send({ error: err.message });
    }
  });

  return res.send("teste");
});

app.listen(3000, () => {
  // verificar se o arquivo de com as contas já existe(acconts.json)
  // usando try catch para não quebrar a aplicação
  try {
    fs.readFile("accounts.json", "utf8", (err, data) => {
      if (err) {
        const initialJson = {
          nextId: 1,
          accounts: [],
        };
        fs.writeFile("acounts.json", JSON.stringify(initialJson), (err) => {
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
