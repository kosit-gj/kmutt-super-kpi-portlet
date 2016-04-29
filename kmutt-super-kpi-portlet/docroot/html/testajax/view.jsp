<%@page import="javax.portlet.ResourceURL"%>
<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<portlet:defineObjects />

 <script src="//code.jquery.com/jquery-1.9.1.min.js"></script> 
 
<portlet:resourceURL var="testAjaxResourceUrl2"></portlet:resourceURL>

<a href="#" onclick="ajaxCall()">resourceURL in Ajax</a>

<form id="testAjaxForm" action="">
	<input type="text" name="<portlet:namespace />param2">
	<input type="text" name="<portlet:namespace />param3">
	<input type="button" value="Submit" onclick="ajaxCall()">
</form>

<div id='dataValue1'>12</div>
<div id="dataQuery">select * from Book</div>
<div id="dataColumn">1,2</div>

<button onclick="ajaxCall2()">Test Ajax2</button>

<script type="text/javascript">

function ajaxCall(){
    AUI().use('aui-io-request', function(A){
        A.io.request('${testAjaxResourceUrl2}', {
               method: 'post',
               data: {
            	   <portlet:namespace />sampleParam: 'value2',
               },
               form:{
            	   id:'testAjaxForm'
               },
               on: {
                   	success: function() {
                    alert(this.get('responseData'));
                   }
              }
        });
    });
}

function ajaxCall2(){
    AUI().use('aui-io-request', function(A){
        A.io.request('${testAjaxResourceUrl2}', {
               method: 'post',
               data: {
            	   <portlet:namespace />actionParam: 'getBook',
            	   <portlet:namespace />dataQuery: $("#dataQuery").text(),
            	   <portlet:namespace />dataColumn: $("#dataColumn").text(),
               },
              
               on: {
                   	success: function() {
                    alert(this.get('responseData'));
                    
                    var dataObj = eval("("+this.get('responseData')+")");
                    
                    console.log(dataObj);
                    
                   }
              }
        });
    });
}
</script>