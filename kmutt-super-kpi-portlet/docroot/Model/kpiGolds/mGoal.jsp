
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>   
<%
SupperKPIs jndi = new SupperKPIs();
String paramMonth = request.getParameter("paramMonth");
String paramOrg = request.getParameter("paramOrg");

/*
select kpi_group_id, kpi_group_name, (sum(percent_wavg)/sum(kpi_weight))*100
from kpi_result
where month_id = 59
and org_id = 1
group by kpi_group_id, kpi_group_name
*/
String query="";

query+="select kpi_group_id, kpi_group_name, (sum(percent_wavg)/sum(kpi_weight))*100 ";
query+=" from kpi_result";
query+=" where month_id = "+paramMonth+"";
query+=" and org_id = "+paramOrg+"";
query+=" group by kpi_group_id, kpi_group_name";


String culumn="1,2,3";

jndi.selectByIndexDwh(query, culumn);
out.print(jndi.getData());
 
//http://localhost:8082/kmutt-super-kpi-portlet/Model/kpiGolds/mGoal.jsp?paramMonth=59&paramOrg=1
%>
