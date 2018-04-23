package projektArbete;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty" ,
        "html:Reports",
		"junit:Reports/JunitReport.xml",
		"json:Reports/JsonReport.json"}) 

public class RunStoreTests {
}