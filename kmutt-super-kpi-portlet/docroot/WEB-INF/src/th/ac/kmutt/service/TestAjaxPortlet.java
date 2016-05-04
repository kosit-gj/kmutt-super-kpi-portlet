package th.ac.kmutt.service;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.portlet.PortletException;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;
import javax.sql.DataSource;

import org.apache.log4j.Logger;
import org.json.JSONArray;

import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.util.ParamUtil;
import com.liferay.portal.kernel.util.StringPool;
import com.liferay.util.bridges.mvc.MVCPortlet;

import th.ac.kmutt.service.connectionJndi;


public class TestAjaxPortlet extends MVCPortlet {
	
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
	  
	  public JSONArray selectByIndex(String query,String columns) {

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
		            //dataObject=obj_json;
		            return obj_json;
		        }
		      }
		    }catch(Exception e) {
		      e.printStackTrace();
		      logger.error("erorr"+e);
		    }
			return null;
		 }
	  
	  
	
	private static Log _log = LogFactoryUtil.getLog(TestAjaxPortlet.class.getName());
	
	@Override
	public void serveResource(ResourceRequest resourceRequest,
			ResourceResponse resourceResponse) throws IOException,
			PortletException {
		
		String param = ParamUtil.get(resourceRequest, "param2", StringPool.BLANK);
		String param2 = ParamUtil.get(resourceRequest, "param3", StringPool.BLANK);
		String actionParam = ParamUtil.get(resourceRequest, "actionParam", StringPool.BLANK);
		
		String query = ParamUtil.get(resourceRequest, "dataQuery", StringPool.BLANK);
		String columns = ParamUtil.get(resourceRequest, "dataColumn", StringPool.BLANK);
		
		
		PrintWriter out = resourceResponse.getWriter();
		
		if("getBook".equals(actionParam)){
			
			//out.print("query ==>"+query);
			//out.print("columns ==>"+columns);
			out.print(selectByIndex(query,columns));
		
		}
		/*
		_log.info("Parameter is ==>" + param);
		*/
		resourceResponse.setContentType("text/html");
		/*
		out.print("You have entered ==>"+param+"<br>");
		out.print("You have entered2 ==>"+param2);
		_log.info("AUI Ajax call is performed");
		*/
		out.flush();
		
		
		super.serveResource(resourceRequest, resourceResponse);
	}
	
	

	public JSONArray testFn1(String query,String column){
		
		//return data+"data is ok";
		return selectByIndex(query,column);
		 
		
	}
	
	
}
