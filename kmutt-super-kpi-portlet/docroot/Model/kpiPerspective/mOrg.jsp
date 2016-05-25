
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>      
<%
SupperKPIs jndi = new SupperKPIs();
String month_id = request.getParameter("paramMonth");
String org_id = request.getParameter("paramOrg");
/*
select org_id, org_name, (sum(percent_wavg)/sum(kpi_weight))*100
from kpi_result
where month_id = 59
and org_id = 1
group by org_id, org_name


*/

String query="";
query+="select org_id, org_name, (sum(percent_wavg)/sum(kpi_weight))*100"; 
query+=" from kpi_result";
query+=" where month_id = "+month_id+"";
query+=" and org_id = "+org_id+"";
query+=" and parent_kpi_id is null";
query+=" group by org_id, org_name";

String culumn="1,2,3";

jndi.selectByIndexDwh(query, culumn);
out.print(jndi.getData());

%>
