
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>   
<%
SupperKPIs jndi = new SupperKPIs();
jndi.selectByIndexDwh("select org_id, concat(org_code,'-',org_name) as org_name from org order by org_name;", "1,2");
out.print(jndi.getData());

%>
