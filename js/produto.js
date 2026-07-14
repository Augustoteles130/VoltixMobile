// CRIANDO VARIAVEIS
/*nome das variaveis nao pode ter:
-acentos
-espaço
-simbolos
-nao pode comçar com numeros
-nao deve ser escrito com a primeira letra em maiusculo */
  

//variaveis que alteram de valor
let preco_promocional=99.50;
let preco_antigo=5.600;
let desconto="-20%"
let quantidade= 10;
let favorito=false;
//variaveis que sao constantes/ nao/ altera de valor
const nomeproduto="aiphone branco";
const tamanho=["P","M","6","66"];
const cores=["ROSA","VERDE","PRETO"];
const avalicoes= 4.5;
const img_miniaturas=
[
 "/assets/roxo.png",
 "/assets/azul.png",
 "/assets/black.png",
];
 const img_principal="/assets/black.png";
 const descricao="confeccionado em tecido macio, com excelente elastico";
let frete;
// botoes e arquivos
let btn_add_carrinho;
let btn_comprar;
let btn_add_quantidade
let btn_remover_quantidade;
let btn_calcular_frete;


// COODIGO PARA PREENCHER AS IMAGENS NO HTML


//CEIANDO UMA VARIAVEL PARA RECONHECER O ID DA IMAGEM LATERAL
const laretal= document.getElementById("img-lateral");



//MEDO A QUANTIDADE DE IMAGENS CADASTRADAS E CRIANDO AS TAGS IMG

/*Forfach: ELE PERCORRE UMA LISTA DE ITENS ATE O FINAL
. ele percorre o primeiro, se ver que tem outro, ele tem outro 
. quando  chega no utimo ele oara de ler e finaliza a execuçao
. img_miniatura e chamado pq e ele que contem a lista de imagens 
. depois o forfach passamos o tipo de documento lido (imagem)
*/

img_miniaturas.ForEach(imagem=>{
    //criando uma variavel que crie a tag img na div do html
const img=document.createElement("img");
//CRIANDO O CODIGO QUE MOSTRA AS IMAGENS NO SITE
  img.src=imagem;//ele joga o caminho da imagem na tag
  img.classList.add("img-lateral");

 //criando o codigo que substitui a imagem
 //principal pela miniatura clicada
  img.addEventListener("click",()=>{
      document.getElementById("img-maior").src=
  imagem;
});//ver se a pessoa clicou na imagem
lateral.appendchild(img);//mostra a imagem adicionada


});//fechar o forfach
//preencher a imagem principal
document.getElementById("imagem-maior").src=img_principal;
