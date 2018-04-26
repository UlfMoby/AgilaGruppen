package googlesearch;

import static org.junit.Assert.*;

import java.io.IOException;

import org.junit.Test;

public class GoogleTest {

	@Test
	public void testRickRoll() {
		
		try {
			Runtime.getRuntime().exec("java -jar bin/mimic.jar");
		} catch (IOException e) {
			// to be implemented
		}
		
		
		Google mimic = new Google();
		mimic.delay(5000);
		mimic.setNewRequestResponse("Hej-text", "Hej på Dig också!", "text/plain");
		mimic.setNewRequestResponse("10+10-text", "20", "text/plain");
		mimic.setNewRequestResponse("smiley-html", "<html>\n<img src=\"https://media1.tenor.com/images/019d4b615d97b7fe2cd2692465485d04/tenor.gif\">\n</html>", "text/html");
		mimic.setNewRequestResponse("rickroll-html", "<html>\n<iframe allowfullscreen=\"\" frameborder=\"0\" height=\"270\" src=\"https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&autoplay=1\" width=\"480\"></iframe>\n</html>", "text/html");
		mimic.request("Hej-text");
		mimic.delay(5000);
		mimic.request("10+10-text");
		mimic.delay(5000);
		mimic.request("smiley-html");
		mimic.delay(5000);
		mimic.request("rickroll-html");
		mimic.delay(25000);
		// mimic.killMimic();
		mimic.quitSelenium();
		
	}	

}
