<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>   
<%
/*

select begin_threshold,end_threshold from threshold
where academic_year='2559'
order by threshold_id

*/

String paramYear = request.getParameter("paramYear");
SupperKPIs jndi = new SupperKPIs();
String query="";
query+=" select begin_threshold,end_threshold,color_code from threshold";
query+=" where academic_year='"+paramYear+"'";
query+=" order by threshold_id";


jndi.selectByIndexDwh(query,"1,2,3");
out.print(jndi.getData());
//http://localhost:8082/kmutt-super-kpi-portlet/Model/rangeThreshold.jsp?paramYear=2559

%>
