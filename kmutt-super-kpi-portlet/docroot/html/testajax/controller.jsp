
<portlet:resourceURL var="AjaxResourceUrl"></portlet:resourceURL>
<script>

function ajaxCall(query,column){
	var dataObj;
    AUI().use('aui-io-request', function(A){
    	
        A.io.request('${AjaxResourceUrl}', {
               method: 'post',
               async:false,
               data: {
            	   /*<portlet:namespace />actionParam: 'getBook',*/
            	   <portlet:namespace />dataQuery: query,
            	   <portlet:namespace />dataColumn: column,
               },
              
               on: {
                   	success: function() {
                    dataObj = eval("("+this.get('responseData')+")");
                    
                    /*Logic program here.*/
                    console.log("1");
                    console.log(dataObj);
                    return dataObj;
                    
                    /*Logic program here.*/
                    
                   }
              }
        });
    });
    
}
$(document).ready(function(){
	setTimeout(function(){
		
		ajaxCall("select * from Book","1,2");
		
	},3000);
	
	
});


</script>