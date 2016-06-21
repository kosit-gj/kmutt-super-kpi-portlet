
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>   
<%
SupperKPIs jndi = new SupperKPIs();
String paramYear = request.getParameter("paramYear");
String paramScore = request.getParameter("paramScore");
if(paramScore.equals("")){
	paramScore="0";
}


String query="";

query+="select academic_year,threshold_name,begin_threshold,end_threshold,color_code,kpi_level_id from threshold ";
query+=" where "+paramScore+"  between begin_threshold and end_threshold ";
query+=" and academic_year = "+paramYear+"";
query+=" and kpi_level_id=1";


String culumn="1,2,3,4,5,6";

jndi.selectByIndexDwh(query, culumn);
out.print(jndi.getData());

//http://localhost:8082/kmutt-super-kpi-portlet/Model/kpiGolds/threshold.jsp?paramScore=1&paramYear=2558
%>
