window.addEventListener('load',()=>{
    //primeiro parametro é o  res, que são estruturas e binarios da request
    fetch("https://api.github.com/users/rrgomide").then((res)=>{
        //entao pegamos a reposta, passamos para JSON e depois fazemos mais uma promise pegando os dados
        res.json().then(data=>{
            //data será o retorno dos dados requisitados
            showData(data)          
        })        
    }).catch(error=>{
        console.log("Error na requisição"+error);
        
    })
    divisionPromise(12,0).then(result=>{
        console.log(result);
        
    }).catch(error=>{
        console.log("falha na divisão "+error);
        
    })
        
})
function showData(data){
    const user = document.querySelector("#user")
    user.textContent = data.login+ " " + data.name;
}

function divisionPromise(a,b){
    // o resolve e o reject são parametos padrão do Promise
    return new Promise((resolve,reject)=>{
        if(b===0){
            reject('não é possivel dividir por 0')
        }
        resolve(a/b)
    })
}


