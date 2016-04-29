
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>   
<%
SupperKPIs jndi = new SupperKPIs();
jndi.selectByIndexDwh("select  kpi_name, calendar_type_name, period_name, target_value, kpi_uom_name, actual_value, percent_actual_vs_target, kpi_weight, percent_wavg, updated_dttm, has_child from kpi_result where month_id = 34 and org_id = 1 order by kpi_name", "1,2,3,4,5,6,7,8,9,10,11");
out.print(jndi.getData());

%>



