
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>   
<%
/*
select paramYear from(
select distinct fiscal_year as paramYear from kpi_result
union
select distinct calendar_year as paramYear from kpi_result
union
select distinct academic_year as paramYear from kpi_result
)queryYear
where  paramYear IS NOT NULL
*/
String query="";
query+=" select paramYear from(";
query+=" select distinct fiscal_year as paramYear from kpi_result";
query+=" union";
query+=" select distinct calendar_year as paramYear from kpi_result";
query+=" union";
query+=" select distinct academic_year as paramYear from kpi_result";
query+=" )queryYear";
query+=" where  paramYear IS NOT NULL order by paramYear desc";

SupperKPIs jndi = new SupperKPIs();
jndi.selectByIndexDwh(query, "1");
out.print(jndi.getData());
//http://localhost:8082/kmutt-super-kpi-portlet/Model/paramYear.jsp

%>
