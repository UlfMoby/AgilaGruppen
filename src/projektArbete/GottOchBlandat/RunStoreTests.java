package projektArbete;

import java.io.IOException;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty" ,
        "html:Reports",
		"junit:Reports/JunitReport.xml",
		"json:Reports/JsonReport.json"}) 

public class RunStoreTests {
	
}