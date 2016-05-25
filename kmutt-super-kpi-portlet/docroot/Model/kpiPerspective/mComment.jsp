
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>
<%
//"month_id":paramMonth,"org_id":paramOrg,"paramYear":paramYear,"editor_data":editor_data,"kpiID":kpiID
SupperKPIs jndi = new SupperKPIs();
String paramMonth = request.getParameter("paramMonth");
String paramOrg = request.getParameter("paramOrg");
String paramYear = request.getParameter("paramYear");
String editor_data = request.getParameter("editor_data");
String kpiID = request.getParameter("kpiID");
String action = request.getParameter("action");
/*
out.print("paramMonth="+paramMonth);
out.print("paramOrg="+paramOrg);
out.print("paramYear="+paramYear);
out.print("editor_data="+editor_data);
out.print("kpiID="+kpiID);
*/
/*
String query="select * from kpi_result";
*/
if(action.equals("getDataComment")){
	
	String query="";
	query+="select kpi_comment from kpi_result";
	query+=" where month_id='"+paramMonth+"'";
	query+=" and org_id='"+paramOrg+"'";
	query+=" and fiscal_year='"+paramYear+"'";
	query+=" and kpi_id='"+kpiID+"'"; 
	
	jndi.selectHTML(query, "1");
	out.print(jndi.getDataHTML());
	
}else if(action.equals("updateComent")){
	String query="";
	query+="update kpi_result set kpi_comment='"+editor_data+"'";
	query+=" where month_id='"+paramMonth+"'";
	query+=" and org_id='"+paramOrg+"'";
	query+=" and fiscal_year='"+paramYear+"'";
	query+=" and kpi_id='"+kpiID+"'"; 
	
	//jndi.selectByIndexDwh(query, "1,2");
	jndi.update(query);
	out.print(jndi.getData());
}
//example
//
  
%>
