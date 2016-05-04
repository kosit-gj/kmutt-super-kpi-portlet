
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>   
<%
String org_id = request.getParameter("org_id");
SupperKPIs jndi = new SupperKPIs();
jndi.selectByIndexDwh("select owner_image_path from org where org_id = "+org_id+"", "1");
out.print(jndi.getData());

//exsample 
//http://localhost:8082/kmutt-super-kpi-portlet/Model/kpiGolds/mGetPicture.jsp?org_id=4
%>
