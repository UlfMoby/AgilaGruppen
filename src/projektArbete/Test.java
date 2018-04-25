package projektArbete;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.URLConnection;


public class Test {
  public static void main(String[] args) throws IOException {
	  
	  String requestUrl = "http://localhost:8080/test";
	  URL url = new URL(requestUrl);
	  URLConnection c = url.openConnection();
	  String contentType = c.getContentType(); 
	  System.out.println(contentType);
	
	  /**
	URI web;
	try {
		web = new URI("localhost:8080/test");
	} catch (URISyntaxException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	Path source = Paths.get
    System.out.println(Files.probeContentType(source));
    // output : image/tiff
     * 
     */
  }
}