import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.TreeSet;

public class ShoppingCart

{
	
	@SuppressWarnings({ "deprecation", "null" })
	public Map getProductDetails(String filePath , String inputDate) throws ShoppingCartException  {

		BufferedReader br = null;
		Set<String> se=new TreeSet<String>();
		Set<String> se_2=new TreeSet<String>();
		Set<String> se_3=new TreeSet<String>();
		Map<Integer,Set> m=new HashMap<Integer,Set>();
	try {
			SimpleDateFormat sdf = new SimpleDateFormat("MM-dd-yyyy");
			br = new BufferedReader(new FileReader(filePath));
			String nextLine = null;
			Date date=sdf.parse(inputDate);
			while ((nextLine = br.readLine()) != null) {
				
			String [] s=nextLine.split(",");
			if(s[3].equals(String.valueOf(date)) && nextLine.substring(0,1).equals("LP")){
				
            se.add(s[0]);		
            m.put(1, se);
			}
			if(s[3].equals(String.valueOf(date)) && nextLine.substring(0,1).equals("GP")){
				
	            se_2.add(s[0]);		
	            m.put(2, se);
				}
			if(s[3].equals(String.valueOf(date)) && nextLine.substring(0,1).equals("CP")){
				
	            se_3.add(s[0]);		
	            m.put(3, se);
				}
			}
			br.close();	

		} catch (FileNotFoundException e) {

			throw new ShoppingCartException("File Not Found Exception : ");
		} catch (IOException e) {
			throw new ShoppingCartException("IO Exception : ");
		
		} catch (ParseException e) {
			throw new ShoppingCartException("Parse Exception : ");
		}
		return m; 


	}

	
	private void validateData(String[] str) throws ShoppingCartException 
	{
	for(int i=0;i<str.length;i++)
	  {
		String[] ss=str[i].split(",");
		SimpleDateFormat sdf=new SimpleDateFormat("MM-dd-yyyy");
		if((ss.length == 5))
		{

			if((ss[0].substring(0, 1).equals("LP")) || (ss[0].substring(0, 1).equals("GP")) || (ss[0].substring(0, 1).equals("CP")))
				
				{

				if(ss[0].length()== 11)
				    {

					if((ss[0].substring(3, ss[0].length()).length() == 8) && ss[0].substring(3, ss[0].length()).matches("[0-9]{1,}"))
					{
					
					try {
						Date date1=sdf.parse(ss[4]);
					} catch (ParseException e) {
						// TODO Auto-generated catch block
						throw new ShoppingCartException("Invalid Date");
					}		
					}
					
					else
					{
						throw new ShoppingCartException("Invalid Product Number");
					}
				    }
				
				else
				{
					throw new ShoppingCartException("Invalid Product Code");
				}
	
				}
			else
			{
				throw new ShoppingCartException("Inavlid Product Type");
			}
		}
			
		else
			{
				throw new ShoppingCartException("Invalid Inputs");
			}	
		

       }
	}
}

class ShoppingCartException extends Exception {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ShoppingCartException(String message) {
		super(message);
	}

	public ShoppingCartException(Throwable throwable) {
		
	}
}