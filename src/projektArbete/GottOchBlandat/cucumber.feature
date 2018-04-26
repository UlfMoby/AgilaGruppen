Feature: Test mimicservice app

  Scenario Outline: Learn and correct a new response
  
    Given Environment is up and running
    When  Learn that <request> should answer with <response> with <responseMime>
    Then  The Response of <request> answers with <response>

    Examples: 
      | request                      | response | responseMime       |
      | "test"                       | "hi!"    | "application/xml"  |
      | "Does it work?"              | "Yes"    | "application/json" |
      | "2+2"                        | "4"      | "application/json" |
      | "4+4"                        | "8"      | "text/html"        |
      | "5+5"                        | "10"     | "text/plain"       |
      | "10+10"                      | "22"     | "text/plain"       |
      | "10+10"                      | "20"     | "text/plain"       |
      | "add?value1=10&value2=20"    | "3000"   | "text/plain"       |
      | "add?value1=10&value2=20"    | "30"     | "text/plain"       |


  Scenario: Learn a new response and then unlearn it
  
    Given Environment is up and running
    When  Learn that request test should answer with Yes
    And   Unlearn the request
    Then  The Response of Test should answers with null
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
#      | "rickroll"                   | "<html><iframe allowfullscreen=\"\" frameborder=\"0\" height=\"270\" src=\"https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&autoplay=1\" width=\"480\"></iframe></html>" | "text/html" |
#      | "smiley"                     | <html><img src="https://media1.tenor.com/images/019d4b615d97b7fe2cd2692465485d04/tenor.gif"></html>                                                                     |
      
      