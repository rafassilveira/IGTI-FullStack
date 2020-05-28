// estado da aplicação
let tabCountries=null,
    tabFavorites = null,
    allCountries=[],
    favoritesCountries=[],
    countCountries =0,
    countFavorites=0,
    totalPopulationList=0,
    totalPopulationFavorites=0,
    numberFormat=null

window.addEventListener('load',()=>{
    tabCountries= document.querySelector('#tabCountries')
    tabFavorites= document.querySelector('#tabFavorites')
    countCountries= document.querySelector('#countCountries')
    countFavorites= document.querySelector('#countCountries')

    totalPopulationList=document.querySelector("#totalPopulationList") 
    totalPopulationFavorites=document.querySelector("#totalPopulationFavorites") 

    numberFormat= Intl.numberFormat('pt-BR')

    favoritesCountries();
})    
function favoritesCountries(){
    console.log("rodando..");
    
}