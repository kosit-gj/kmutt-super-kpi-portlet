<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>
<%@ taglib uri="http://alloy.liferay.com/tld/aui" prefix="aui"%>
<portlet:defineObjects />
<%
boolean a= request.isUserInRole("Administrator");
if(a){
	out.print("user online is admin");
}else{
	out.print("user online is user");
}
%>