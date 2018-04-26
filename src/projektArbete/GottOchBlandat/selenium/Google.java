package googlesearch;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class Google {

	private WebDriver webDriver;

	public Google() {

		try {
			System.setProperty("webdriver.chrome.driver", "bin/chromedriver.exe");
			webDriver = new ChromeDriver();
		} catch (Exception e) {
			// Not yet implemented
		}
	}


	public void setNewRequestResponse(String request, String response, String responseMime) {

		webDriver.get("localhost:8080/"+request);
		webDriver.findElement(By.name("text")).click();
		webDriver.findElement(By.name("text")).clear();
		webDriver.findElement(By.name("text")).sendKeys(response);
		webDriver.findElement(By.id("learn")).click();
	}

	public void request(String request) {
	
		webDriver.get("localhost:8080/"+request);	
	}
	
	public void killMimic() {
		
		webDriver.get("localhost:8080/KillMimic");	
	}
	
	public void delay(int milliseconds)
	{
		try {
			Thread.sleep(milliseconds);
		} catch (InterruptedException e) {
		}
	}
	
	/**
	 * Quit Webdriver
	 */
	public void quitSelenium() {
		webDriver.quit();
	}

}
