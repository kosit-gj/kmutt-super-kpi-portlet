
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>   
<%

SupperKPIs jndi = new SupperKPIs();
jndi.selectByIndexDwh("select month_id, calendar_month_no, th_month_name from sys_month where calendar_year = 2559 order by calendar_month_no", "1,2,3");
out.print(jndi.getData());

%>
