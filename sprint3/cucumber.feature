Feature: Test mimicservice app

  Scenario: As a tester i would like to unlearnAll
    Given Environment is up and running
		When  unlearnAll
		Then  The Response of Test2 should answers with insert form

  Scenario Outline: Learn and correct a new response
  
    Given Environment is up and running
    When  Learn that <request> should answer with <response> with <responseMime>
    Then  The Response of <request> answers with <response> with <responseMime>

    Examples: 
      | request                      | response | responseMime       |
      | "test"                       | "hi"     | "text/plain"       |
      | "test"                       | "Yes"    | "application/json" |
      | "test"                       | "4"      | "application/json" |
      | "test"                       | "8"      | "text/html"        |
      | "test"                       | "10"     | "text/plain"       |
      | "test"                       | "22"     | "text/plain"       |
      | "test"                       | "20"     | "text/plain"       |
      | "test"                       | "3000"   | "text/plain"       |
      | "test"                       | "30"     | "text/plain"       |


  Scenario: Learn a new response and then unlearn it
  
    Given Environment is up and running
    When  Learn that request Test2 should answer with Yes
    And   Unlearn the request
    Then  The Response of Test2 should answers with insert form
    
  Scenario: As a tester i would like to resert state
		Then  resetState
    
  Scenario Outline: As a tester i would like to check if states works
		Then  The Response of <request> answers with <response> with <responseMime>
		
		    Examples: 
		  | request                      | response | responseMime       |
		  | "test"                       | "hi"     | "text/plain"       |
      | "test"                       | "Yes"    | "application/json" |
      | "test"                       | "4"      | "application/json" |
      | "test"                       | "8"      | "text/html"        |
      | "test"                       | "10"     | "text/plain"       |
      | "test"                       | "22"     | "text/plain"       |
      | "test"                       | "20"     | "text/plain"       |
      | "test"                       | "3000"   | "text/plain"       |
      | "test"                       | "30"     | "text/plain"       |
		
    
  

    

    
    
    

    
    
    
#      | "rickroll"                   | "<html><iframe allowfullscreen=\"\" frameborder=\"0\" height=\"270\" src=\"https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&autoplay=1\" width=\"480\"></iframe></html>" | "text/html" |
#      | "smiley"                     | <html><img src="https://media1.tenor.com/images/019d4b615d97b7fe2cd2692465485d04/tenor.gif"></html>                                                                     |
      
      