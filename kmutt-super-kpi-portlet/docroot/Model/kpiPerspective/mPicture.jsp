
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>   
<%
SupperKPIs jndi = new SupperKPIs();
String month_id = request.getParameter("month_id");
String org_id = request.getParameter("org_id");
String query="";
query+="select owner_image_path from org where org_id = 1"; 
String culumn="1";

jndi.selectByIndexDwh(query, culumn);
out.print(jndi.getData());

%>
