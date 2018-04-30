package projektArbete;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.net.URL;
import java.net.URLConnection;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MimicServiceSteps {
	
	private final static String host="http://localhost:8080/"; 
	private HttpServiceCaller service;
	
	private String result = "";
	
	

	@Given("^Environment is up and running$")
	public void environment_is_up_and_running() throws Throwable {
		service=new HttpServiceCaller();
		String request=host+"EttRequestSomTroligtvisInteHarLärtsInÄnnu";
		result = service.executeGetRequest(request);
		assertTrue(result.equals("Paste or type json, xml, html or text response to learn and press Learn<br><br><form action=\"learn\" method=\"post\"><textarea name='text' rows='30' cols='150'></textarea><br><br><input type=\"submit\" id='learn' value=\"Learn\"></form>"));
	}
	
	@When("^Learn that \"([^\"]*)\" should answer with \"([^\"]*)\" with \"([^\"]*)\"$")
	public void learn_that_should_answer_with_with(String arg1, String arg2, String arg3) throws Throwable {
		service=new HttpServiceCaller();
		String request=host+"LearnNextResponse?text="+arg2+"&mime="+arg3;
		service.executeGetRequest(request);
		String request2=host+arg1;
		service.executeGetRequest(request2);
	}

	@Then("^The Response of \"([^\"]*)\" answers with \"([^\"]*)\" with \"([^\"]*)\"$")
	public void the_Response_of_answers_with_with(String arg1, String arg2, String arg3) throws Throwable {
		service=new HttpServiceCaller();
		String request=host+arg1;
		result = service.executeGetRequest(request);
		assertEquals(arg2, result);
		
		
		/** Check mime type
		String requestUrl = "http://localhost:8080/"+arg1;
		URL url = new URL(requestUrl);
		URLConnection c = url.openConnection();
		String contentType = c.getContentType(); 
		assertEquals(arg3, contentType.split(";")[0]);
		**/
	}
	/** Test removed
	@When("^Learn that request Test2 should answer with Yes and make a new req$")
	public void learn_that_request_test_should_answer_with_Yes_and_make_a_new_req() throws Throwable {
		service=new HttpServiceCaller();
		String request=host+"learnNextResponse?text=Yes";
		service.executeGetRequest(request);
		String request2=host+"Test2";
		service.executeGetRequest(request2);
		String request3=host+"test";
		service.executeGetRequest(request3);
	}
	**/
	
	@When("^Learn that request Test2 should answer with Yes$")
	public void learn_that_request_test_should_answer_with_Yes() throws Throwable {
		service=new HttpServiceCaller();
		String request=host+"learnNextResponse?text=Yes";
		service.executeGetRequest(request);
		String request2=host+"Test2";
		service.executeGetRequest(request2);
	}

	@When("^Unlearn the request$")
	public void unlearn_the_request() throws Throwable {
		service=new HttpServiceCaller();
		String request=host+"unlearn";
		System.out.println(request);
		service.executeGetRequest(request);
	}
	
	@When("^unlearnAll$")
	public void unlearnall() throws Throwable {
		service=new HttpServiceCaller();
		String request=host+"unlearnAll";
		System.out.println(request);
		service.executeGetRequest(request);
	}

	@Then("^The Response of Test2 should answers with insert form$")
	public void the_Response_of_Test_should_answers_with_null() throws Throwable {
		service=new HttpServiceCaller();
		String request=host+"Test2";
		System.out.println(request);
		result = service.executeGetRequest(request);
		System.out.println(result);
		assertEquals("Paste or type json, xml, html or text response to learn and press Learn<br><br><form action=\"learn\" method=\"post\"><textarea name='text' rows='30' cols='150'></textarea><br><br><input type=\"submit\" id='learn' value=\"Learn\"></form>", result);
	}
	
	@When("^resetState$")
	public void resetstate() throws Throwable {
		service=new HttpServiceCaller();
		String request=host+"resetState";
		System.out.println(request);
		service.executeGetRequest(request);
	}

}