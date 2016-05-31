
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>   
<%
SupperKPIs jndi = new SupperKPIs();
String paramMonth = request.getParameter("paramMonth");
String paramOrg = request.getParameter("paramOrg");
String paramYear = request.getParameter("paramYear");

/*
select kpi_group_id, kpi_group_name, (sum(percent_wavg)/sum(kpi_weight))*100
from kpi_result
where month_id = 59
and org_id = 1
group by kpi_group_id, kpi_group_name



select kpi_group_id, kpi_group_name, (sum(percent_wavg)/sum(kpi_weight))*100
from kpi_result
where  (
calendar_year = 2559 and th_month_name = 'พ.ค.' or
fiscal_year = 2559 and th_month_name = 'พ.ค.' or
academic_year = 2559 and th_month_name = 'พ.ค.'
)
and org_id = 1
group by kpi_group_id, kpi_group_name




*/
String query="";

query+="select kpi_group_id, kpi_group_name, (sum(percent_wavg)/sum(kpi_weight))*100 ";
query+=" from kpi_result";
query+=" where  (";
query+=" calendar_year = '"+paramYear+"' and th_month_name = '"+paramMonth+"' or";
query+=" fiscal_year = '"+paramYear+"' and th_month_name = '"+paramMonth+"' or";
query+=" academic_year = '"+paramYear+"' and th_month_name = '"+paramMonth+"'";
query+=" )";
query+=" and org_id = "+paramOrg+"";
query+=" and parent_kpi_id is null";
query+=" group by kpi_group_id, kpi_group_name";


String culumn="1,2,3";

jndi.selectByIndexDwh(query, culumn);
out.print(jndi.getData());
 
//http://localhost:8082/kmutt-super-kpi-portlet/Model/kpiGolds/mGoal.jsp?paramMonth=59&paramOrg=1
%>
