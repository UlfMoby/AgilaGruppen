package projektArbete;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class TestService {
	
	private final static String host="http://localhost:8080/"; 
	private HttpServiceCaller service;
	
	private String result = "";

	
	public int count;
	@Test
	void test() {
		service=new HttpServiceCaller();
		for(count = 0; count <= 1000;count++) {
			int arg1 = count;
			int arg2 = count;
			System.out.println("Nr: " +arg1);
			String request=host+"LearnNextResponse?text="+arg2;
			service.executeGetRequest(request);
			String request2=host+arg1;
			service.executeGetRequest(request2);
		}
		
		
	}

}
