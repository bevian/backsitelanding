function Exec()
{

      if(document.getElementById("inputNome").value=="" || document.getElementById("inputIdade").value=="" || 
      document.getElementById("telefone").value==""|| document.getElementById("inputCEP").value=="" ||
      document.getElementById("inputBairro").value=="" || document.getElementById("inputNum").value=="")
      {
         document.getElementById("erro").style.display= "block";
      }
      else
      {
         document.getElementById("erro").style.display= "none";
         document.getElementById("ok").style.display= "block";
         document.getElementById("inputNome").value="";
         document.getElementById("inputIdade").value="";
         document.getElementById("telefone").value="";
         document.getElementById("inputRua").value="";
         document.getElementById("inputBairro").value="";
         document.getElementById("inputCEP").value="";
         document.getElementById("inputNum").value="";
     
      }
}
   function buscar(value)
   {
        $.ajax({
            url: 'https://viacep.com.br/ws/'+value+'/json/unicode/',
            dataType: 'json',
            success: function(resposta){
               document.getElementById("inputRua").value= resposta.logradouro;
               document.getElementById("inputBairro").value= resposta.bairro;
            }
                
               
   
   
            });
   }

   function Mascara(objeto){
      if(objeto.value.length == 0)
        objeto.value = '(' + objeto.value;
   
      if(objeto.value.length == 3)
         objeto.value = objeto.value + ')';
   
    if(objeto.value.length == 8)
        objeto.value = objeto.value + '-';
   }
   