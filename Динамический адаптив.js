<script>
/* data-to=" id1-откуда  id2-куда"*/
function change(){					 				
		for(var i=0;$("[data-to]").length-1 >= i;i++ ){ 								 				 
  	var blockSub="#"+$("[data-to]").attr("id");				
  var data_attr=$(blockSub).attr("data-to"); 
  	var arrive; 
  	var split= data_attr.split(" ");	  
		arrive= split[0]; 
		var from=blockSub; 	
$(from).insertBefore(arrive);
}
console.log(arrive); }

   		 		
  </script>
    
    
   
