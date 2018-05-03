Feature: Test mimicservice app

  Scenario: As a tester i would like to unlearnAll
    Given Environment is up and running
		When  unlearnAll
		Then  The Response of Test2 should answers with insert form
		
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
  	Then The Response of "number" answers with "6" with "text/plain"
  	Then The Response of "number" answers with "7" with "text/plain"
  	Then The Response of "number" answers with "8" with "text/plain"
  	Then The Response of "number" answers with "9" with "text/plain"
		

  Scenario Outline: Learn new reqests and responses
  
    Given Environment is up and running
    When  Learn that <request> should answer with <response> with <responseMime>
    Then  The Response of <request> answers with <response> with <responseMime>

    Examples: 
      | request                                         | response | responseMime       |
      | "add?value1=10&value2=20"                       | "30"     | "text/plain"       |
      | "add?value1=1&value2=2"                         | "3"      | "text/plain"       |
      | "add?value1=5&value2=23"                        | "28"     | "text/plain"       |
      | "add?value1=2&value2=2"                         | "4"      | "text/plain"       |
      | "add?value1=420&value2=200"                     | "620"    | "text/plain"       |
      | "add?value1=7&value2=7"                         | "14"     | "text/plain"       |
      | "add?value1=4000&value2=9001"                   | "13001"  | "text/plain"       |
      | "add?value1=11&value2=11"                       | "22"     | "text/plain"       |
      | "add?value1=44&value2=45"                       | "89"     | "text/plain"       |

  Scenario Outline: As a Tester I would like the mock to learn how to respond to requests that I have not defined so that I do not have to create code for that manually only add, mult, div and sub operations
		Then  The Response of <request> answers with <response> with <responseMime>
		
    Examples: 
      | request                                         | response | responseMime       |
      | "add?value1=1&value2=1"                         | "2"      | "text/plain"       |
      | "add?value1=2&value2=3"                         | "5"      | "text/plain"       |
      | "add?value1=3&value2=3"                         | "6"      | "text/plain"       |
      | "add?value1=200&value2=230"                     | "430"    | "text/plain"       |

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
      
      