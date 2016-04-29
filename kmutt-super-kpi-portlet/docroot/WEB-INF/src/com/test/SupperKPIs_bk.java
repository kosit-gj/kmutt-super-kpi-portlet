package com.test;

import java.io.IOException;
import java.io.PrintWriter;

import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;

import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.util.ParamUtil;
import com.liferay.portal.kernel.util.StringPool;




import com.liferay.util.bridges.mvc.MVCPortlet;
import javax.naming.*;
import javax.sql.*;
import java.sql.*;
import org.json.JSONArray;
import org.json.JSONException;
import org.junit.runner.Request;
import org.apache.log4j.Logger;

/**
 * Portlet implementation class SupperKPIs
 */
public class SupperKPIs_bk extends MVCPortlet {
	
	
	
    private static Log _log = LogFactoryUtil.getLog(SupperKPIs_bk.class.getName());
	
    
    @Override
    public void render(RenderRequest request, RenderResponse response)
    throws PortletException,IOException{
    	_log.info("this is render method...");
    	super.render(request, response);
    }
	@Override
	public void serveResource(ResourceRequest resourceRequest,
	ResourceResponse resourceResponse) throws IOException,
	PortletException{
		_log.info("This is serve resource method...");
		PrintWriter out = resourceResponse.getWriter();
		out.println("This is sample Text");
		out.flush();
		super.serveResource(resourceRequest, resourceResponse);
	}
	
	public String init2() {
		return "hello world1111111";
	}

	private static Logger logger=Logger.getLogger("connectionJNDI");

	  String data1 = "";
	  String data2 = "";
	  String data3 = "";
	  String data4 = "";
	  String dataMonth="";
	  Object dataObject="";
	  String locationTypeHTML="";
	  String LandlordGroupHTML="";
	  String BrandHTML="";
	  String RegionHTML="";
	  String ProvinceHTML="";
	  String AreaHTML="";
	  String FormatHTML="";
	  String optionBranch="";
	  
	  

	  public void initTest() {
		    try{
		      Context ctx = new InitialContext();
		      if(ctx == null ) {
		          throw new Exception("Boom - No Context");
		      }else{
		    	  System.out.println("ok");
		      }
		      DataSource ds = 
		            (DataSource)ctx.lookup(
		               "java:comp/env/jdbc/jndiDB");

		      if (ds != null) {
		        Connection conn = ds.getConnection();
		              
		        if(conn != null)  {
		           
		            Statement stmt = conn.createStatement();
		            ResultSet rst = 
		                stmt.executeQuery(
		                  "select * from Book");
		            while(rst.next()) {
		               data1+=rst.getString(2);
		              
		            }
		            conn.close();
		        }
		      }
		    }catch(Exception e) {
		    	e.printStackTrace();
		    	logger.error("erorr"+e);
		    }
		 }
	  
	  
	  public void selectByIndex(String query,String columns) {

		    try{
		      Context ctx = new InitialContext();
		      if(ctx == null ) 
		          throw new Exception("Boom - No Context");

		      DataSource ds = 
		            (DataSource)ctx.lookup(
		               "java:comp/env/jdbc/jndiDB");

		      if (ds != null) {
		        Connection conn = ds.getConnection();
		              
		        if(conn != null)  {
		        	dataObject="";
		            Statement stmt = conn.createStatement();
		            ResultSet rst = 
		                stmt.executeQuery(query);
		            String[] fieldSplit=columns.split(",");
		            
		            JSONArray obj_json = new JSONArray();
		            
		            	
		            while(rst.next()) {
		            	
		            	JSONArray sub_obj_json = new JSONArray();
		            	for(int i=0;i<fieldSplit.length;i++){
		            		
		            		sub_obj_json.put(rst.getString(Integer.parseInt(fieldSplit[i])));
		            		
		            	}
		            	obj_json.put(sub_obj_json);

		            }
		            dataObject=obj_json;
		            conn.close();
		        }
		      }
		    }catch(Exception e) {
		      e.printStackTrace();
		      logger.error("erorr"+e);
		    }
		 }
	  
	  public void selectByColumnName(String query,String field) {

		    try{
		      Context ctx = new InitialContext();
		      if(ctx == null ) 
		          throw new Exception("Boom - No Context");

		      DataSource ds = 
		            (DataSource)ctx.lookup(
		               "java:comp/env/jdbc/TestDB");

		      if (ds != null) {
		        Connection conn = ds.getConnection();
		              
		        if(conn != null)  {
		        	dataObject="";
		            Statement stmt = conn.createStatement();
		            ResultSet rst = 
		                stmt.executeQuery(query);
		            String[] fieldSplit=field.split(",");
		            
		            JSONArray obj_json = new JSONArray();
		            while(rst.next()) {
		            	JSONArray sub_obj_json = new JSONArray();
		            	for(int i=0;i<fieldSplit.length;i++){
		            		
		            		sub_obj_json.put(rst.getString(fieldSplit[i]));
		            		
		            	}
		            	obj_json.put(sub_obj_json);
		            	dataObject=obj_json;
		            	
		            }
		            
		            conn.close();
		        }
		      }
		    }catch(Exception e) {
		      e.printStackTrace();
		      logger.error("erorr"+e);
		    }
		 }
	  
	public String getdata1() { return data1;}
	public Object getData() { return dataObject;}
}
