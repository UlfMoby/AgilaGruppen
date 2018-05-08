Feature: Test mimicservice app

  Scenario: As a tester i would like to unlearnAll
    Given Environment is up and running
		When  unlearnAll
		Then  The Response of Test2 should answers with insert form
		
  Scenario Outline: Learn new reqests and responses WRONG
  
    Given Environment is up and running
    When  Learn that <request> should answer with <response> with <responseMime>
    Then  The Response of <request> answers with <response> with <responseMime>

    Examples: 
      | request                                         | response  | responseMime       |
      | "add?value1=10&value2=20"                       | "30"      | "text/plain"       |
      | "add?value1=10&value2=30"                       | "40"      | "text/plain"       |
      | "add?value1=10&value2=40"                       | "50"      | "text/plain"       |
      | "seriezero?value=1"                             | "0"       | "text/plain"       |
      | "seriezero?value=2"                             | "5"       | "text/plain"       |



  Scenario Outline: WRONG Results
		Then  The Response of <request> answers with <response> with <responseMime>
		
    Examples: 
      | request                                       | response | responseMime       |
      | "add?value1=10&value2=50"                     | "60"     | "text/plain"       |
      | "add?value1=4&value2=3"                       | "7"      | "text/plain"       |
      | "add?value1=1&value2=5"                       | "6"      | "text/plain"       |
      | "add?value1=9&value2=9"                       | "18"     | "text/plain"       |
      | "add?value1=5&value2=7"                       | "12"     | "text/plain"       |
      | "add?value1=9&value2=1"                       | "10"     | "text/plain"       |
      | "seriezero?value=3"                           | "10"     | "text/plain"       |
      | "seriezero?value=4"                           | "15"     | "text/plain"       |
      | "seriezero?value=5"                           | "20"     | "text/plain"       |
 


  Scenario: As a tester i would like to unlearnAll
    Given Environment is up and running
		When  unlearnAll
		Then  The Response of Test2 should answers with insert form
		
  Scenario Outline: Learn new reqests and responses
  
    Given Environment is up and running
    When  Learn that <request> should answer with <response> with <responseMime>
    Then  The Response of <request> answers with <response> with <responseMime>

    Examples: 
      | request                                       | response | responseMime       |
      | "add?value1=1&value2=2"                       | "3"      | "text/plain"       |
      | "add?value1=1&value2=3"                       | "4"      | "text/plain"       |
      | "add?value1=1&value2=4"                       | "5"      | "text/plain"       |
      | "add?value1=2&value2=3"                       | "5"      | "text/plain"       |
      | "add?value1=3&value2=4"                       | "7"      | "text/plain"       |
      | "sub?value1=8&value2=2"                       | "6"      | "text/plain"       |
      | "sub?value1=7&value2=3"                       | "4"      | "text/plain"       |
      | "sub?value1=6&value2=4"                       | "2"      | "text/plain"       |
      | "sub?value1=5&value2=3"                       | "2"      | "text/plain"       |
      | "sub?value1=4&value2=4"                       | "0"      | "text/plain"       |
      | "mult?value1=2&value2=2"                      | "4"      | "text/plain"       |
      | "mult?value1=2&value2=3"                      | "6"      | "text/plain"       |
      | "mult?value1=3&value2=2"                      | "6"      | "text/plain"       |
      | "div?value1=8&value2=2"                       | "4"      | "text/plain"       |
      | "div?value1=6&value2=3"                       | "2"      | "text/plain"       |
      | "div?value1=4&value2=2"                       | "2"      | "text/plain"       |
      | "treesteps?value=1"                           | "3"      | "text/plain"       |
      | "treesteps?value=2"                           | "6"      | "text/plain"       |
      | "treesteps?value=3"                           | "9"      | "text/plain"       |


  Scenario Outline: As a Tester I would like the mock to learn how to respond to requests that I have not defined so that I do not have to create code for that manually only add, mult, div and sub operations
		Then  The Response of <request> answers with <response> with <responseMime>
		
    Examples: 
      | request                                       | response | responseMime       |
      | "add?value1=10000&value2=10"                  | "10010"  | "text/plain"       |
      | "add?value1=-2&value2=1"                      | "-1"     | "text/plain"       |
      | "add?value1=4&value2=3"                       | "7"      | "text/plain"       |
      | "add?value1=1&value2=5"                       | "6"      | "text/plain"       |
      | "add?value1=9&value2=9"                       | "18"     | "text/plain"       |
      | "add?value1=5&value2=7"                       | "12"     | "text/plain"       |
      | "add?value1=9&value2=1"                       | "10"     | "text/plain"       |
      | "add?value1=2&value2=2"                       | "4"      | "text/plain"       |
      | "add?value1=10&value2=10"                     | "20"     | "text/plain"       |
      | "add?value1=99&value2=99"                     | "198"    | "text/plain"       |
      | "sub?value1=10&value2=12"                     | "-2"     | "text/plain"       |
      | "mult?value1=4&value2=7"                      | "28"     | "text/plain"       |
      | "mult?value1=5&value2=7"                      | "35"     | "text/plain"       |
      | "mult?value1=10&value2=7"                     | "70"     | "text/plain"       |
      | "div?value1=15&value2=3"                      | "5"      | "text/plain"       |
      | "div?value1=6&value2=2"                       | "3"      | "text/plain"       |
      | "div?value1=10&value2=2"                      | "5"      | "text/plain"       |
      | "treesteps?value=4"                           | "12"     | "text/plain"       |
      | "treesteps?value=5"                           | "15"     | "text/plain"       |

		
Scenario Outline: As a Tester I would like to learn numbers
  
    Given Environment is up and running
    When  Learn that <request> should answer with <response> with <responseMime>
    Then  The Response of <request> answers with <response> with <responseMime>

    Examples: 
      | request                        | response | responseMime       |
      | "number"                       | "1"      | "text/plain"       |
      | "number"                       | "2"      | "text/plain"       |
      | "number"                       | "3"      | "text/plain"       |
      | "number"                       | "4"      | "text/plain"       |
      | "number"                       | "5"      | "text/plain"       |
      | "number"                       | "6"      | "text/plain"       |
      | "number"                       | "7"      | "text/plain"       |
      | "number"                       | "8"      | "text/plain"       |
      | "number"                       | "9"      | "text/plain"       |
      | "number"                       | "10"     | "text/plain"       |
      | "number"                       | "11"     | "text/plain"       |

  Scenario: As a tester i would like to resert state
		Then  resetState
      
  Scenario Outline: As a Tester I would like to unlearn the previously learned response in the middle of a sequence
  	Then The Response of <request> answers with <response> with <responseMime>

    Examples: 
      | request                        | response | responseMime       |
      | "number"                       | "1"      | "text/plain"       |
      | "number"                       | "2"      | "text/plain"       |
      | "number"                       | "3"      | "text/plain"       |
      | "number"                       | "4"      | "text/plain"       |
      | "number"                       | "5"      | "text/plain"       |

	Scenario: Test to delete a state and then continue number responses
		When Unlearn the request
		When Unlearn the request
  	Then The Response of "number" answers with "4" with "text/plain"
  	Then The Response of "number" answers with "4" with "text/plain"
  	Then The Response of "number" answers with "4" with "text/plain"
  	Then The Response of "number" answers with "4" with "text/plain"
		

  Scenario: Learn a new response and then unlearn it
  
    Given Environment is up and running
    When  Learn that request Test2 should answer with Yes
    And   Unlearn the request
    Then  The Response of Test2 should answers with insert form
    
  Scenario: As a tester i would like to resert state
		Then  resetState
      
Scenario: Relearn a request to a new response
  
    Given Environment is up and running
    When  Learn that request Test2 should answer with Yes
    And   Relearn the request
    And   Learn that request Test2 should answear with No
    Then  The Response of Test2 should answer with No

		
    
  

    

    
    
    

    
    
    
#      | "rickroll"                   | "<html><iframe allowfullscreen=\"\" frameborder=\"0\" height=\"270\" src=\"https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&autoplay=1\" width=\"480\"></iframe></html>" | "text/html" |
#      | "smiley"                     | <html><img src="https://media1.tenor.com/images/019d4b615d97b7fe2cd2692465485d04/tenor.gif"></html>                                                                     |
      
      