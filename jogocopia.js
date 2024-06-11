let aleatorio = Math.floor(Math.random() * 101 + 100);
let maxtentativas = 2;
let user = "";
let erros = 0;
let errosTotal = 0
        


        console.log("\nAdivinhe um número de 0 a 100 ou aperte qualquer letra para sair!\n")
        process.stdin.on("data", function(data){
        user = Number(data.toString(). trim());

       if (user === aleatorio){
        console.log("=".repeat(60))
        
        console.log("\nVocê acertou, o numero era " + "(" + aleatorio + ")\n" );
        console.log("=".repeat(60))
        
        process.exit();
        
    } else if  (isNaN(user)) {
         console.log("\nVocê saiu..\n")
         process.exit()
       
    } else {
        const  tentativas = maxtentativas - erros;
        console.log("=".repeat(60))
        erros++;
        errosTotal++
      
        console.log("\nVocê tem " + tentativas + " tentativas\n");
       
       if (Math.abs(user - aleatorio) <= 1) {
        console.log("\nEstá quente!\n");
        console.log("=".repeat(60))
       

       
    } else {
        console.log("\nEstá frio!\n");
        console.log("=".repeat(60))
       
    }}
       if (erros === 3){
         console.log("\nInfelizmente você errou, o número correto era " + "( " + aleatorio + " )\n")
         console.log("\nFoi gerado um novo número ou aperte qualquer botão para sair..\n")
         console.log("=".repeat(60))
         aleatorio = Math.floor(Math.random() * 101+100);
        
         erros = 0
         errosTotal++
       }})