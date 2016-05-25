

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
String query="select kpi_code, kpi_weight, kpi_name ,target_value,calendar_year,sum(percent_actual_vs_target) as column_chart " + 
        "from kpi_result where kpi_group_id = 2 group by kpi_code, kpi_weight, kpi_name ,target_value,calendar_year " + 
        " order by kpi_name";
		//" where kpi_group_id = 2 order by kpi_name;";
String columns="1,2,3,4,5,6";
jndi.selectByIndexDwh(query, columns);
out.print(jndi.getData());
 
//http://localhost:8082/kmutt-super-kpi-portlet/Model/kpiGolds/mSubKpi1_1_1.jsp
%>
