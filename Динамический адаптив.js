<script>
/*
   		 		data-to="(родительский класс) "_"-зазделение между ними (дочерний)" 
   		 		
   		 		должен быть порядок классов
   		 		class=item1;
   		 		class=item2;
   		 		*/
   		 		
   		 		function change(){		
   		 		var blockSub="."+$("[data-to]").attr("class");
   		
   		 	var data_attr=$(blockSub).attr("data-to");
   		var arrive;
   		var split= data_attr.split("_");	
   		 	 		
   		 if(split.length == 2){
   		 				arrive= split[0]+" "+split [1];
   		 				
   		 				var block="."+$(blockSub).parents().prop("class");
   
   
    var from=block + " " +blockSub;
   		 }
   		if(split.length == 1){
   		    arrive= split[0];
   		    var from=blockSub;
   		}
   		
   		$(from).insertBefore(arrive);
     		console.log(split[1]);
   		}
   		  </script>
    
    
   
