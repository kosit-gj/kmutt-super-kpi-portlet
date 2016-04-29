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





import javax.naming.*;
import javax.sql.*;
import java.sql.*;
import org.json.JSONArray;
import org.json.JSONException;
import org.junit.runner.Request;
import org.apache.log4j.Logger;

public class connectionJndi {

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
	  
}
