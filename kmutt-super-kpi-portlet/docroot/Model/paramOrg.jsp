
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>   
<%
SupperKPIs jndi = new SupperKPIs();
jndi.selectByIndexDwh("select org_id, org_name as org_name from org order by org_id;", "1,2");
out.print(jndi.getData());

%>
