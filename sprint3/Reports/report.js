$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("projektArbete/cucumber.feature");
formatter.feature({
  "line": 1,
  "name": "Test mimicservice app",
  "description": "",
  "id": "test-mimicservice-app",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "As a tester i would like to unlearnAll",
  "description": "",
  "id": "test-mimicservice-app;as-a-tester-i-would-like-to-unlearnall",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Environment is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "unlearnAll",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The Response of Test2 should answers with insert form",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicServiceSteps.environment_is_up_and_running()"
});
formatter.result({
  "duration": 317093819,
  "status": "passed"
});
formatter.match({
  "location": "MimicServiceSteps.unlearnall()"
});
formatter.result({
  "duration": 11817383,
  "status": "passed"
});
formatter.match({
  "location": "MimicServiceSteps.the_Response_of_Test_should_answers_with_null()"
});
formatter.result({
  "duration": 5626973,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Learn and correct a new response",
  "description": "",
  "id": "test-mimicservice-app;learn-and-correct-a-new-response",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Environment is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Learn that \u003crequest\u003e should answer with \u003cresponse\u003e with \u003cresponseMime\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The Response of \u003crequest\u003e answers with \u003cresponse\u003e with \u003cresponseMime\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "test-mimicservice-app;learn-and-correct-a-new-response;",
  "rows": [
    {
      "cells": [
        "request",
        "response",
        "responseMime"
      ],
      "line": 15,
      "id": "test-mimicservice-app;learn-and-correct-a-new-response;;1"
    },
    {
      "cells": [
        "\"test\"",
        "\"hi\"",
        "\"text/plain\""
      ],
      "line": 16,
      "id": "test-mimicservice-app;learn-and-correct-a-new-response;;2"
    },
    {
      "cells": [
        "\"test\"",
        "\"Yes\"",
        "\"application/json\""
      ],
      "line": 17,
      "id": "test-mimicservice-app;learn-and-correct-a-new-response;;3"
    },
    {
      "cells": [
        "\"test\"",
        "\"4\"",
        "\"application/json\""
      ],
      "line": 18,
      "id": "test-mimicservice-app;learn-and-correct-a-new-response;;4"
    },
    {
      "cells": [
        "\"test\"",
        "\"8\"",
        "\"text/html\""
      ],
      "line": 19,
      "id": "test-mimicservice-app;learn-and-correct-a-new-response;;5"
    },
    {
      "cells": [
        "\"test\"",
        "\"10\"",
        "\"text/plain\""
      ],
      "line": 20,
      "id": "test-mimicservice-app;learn-and-correct-a-new-response;;6"
    },
    {
      "cells": [
        "\"test\"",
        "\"22\"",
        "\"text/plain\""
      ],
      "line": 21,
      "id": "test-mimicservice-app;learn-and-correct-a-new-response;;7"
    },
    {
      "cells": [
        "\"test\"",
        "\"20\"",
        "\"text/plain\""
      ],
      "line": 22,
      "id": "test-mimicservice-app;learn-and-correct-a-new-response;;8"
    },
    {
      "cells": [
        "\"test\"",
        "\"3000\"",
        "\"text/plain\""
      ],
      "line": 23,
      "id": "test-mimicservice-app;learn-and-correct-a-new-response;;9"
    },
    {
      "cells": [
        "\"test\"",
        "\"30\"",
        "\"text/plain\""
      ],
      "line": 24,
      "id": "test-mimicservice-app;learn-and-correct-a-new-response;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Learn and correct a new response",
  "description": "",
  "id": "test-mimicservice-app;learn-and-correct-a-new-response;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Environment is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Learn that \"test\" should answer with \"hi\" with \"text/plain\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The Response of \"test\" answers with \"hi\" with \"text/plain\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MimicServiceSteps.environment_is_up_and_running()"
});
formatter.result({
  "duration": 203782038,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 12
    },
    {
      "val": "hi",
      "offset": 38
    },
    {
      "val": "text/plain",
      "offset": 48
    }
  ],
  "location": "MimicServiceSteps.learn_that_should_answer_with_with(String,String,String)"
});
formatter.result({
  "duration": 220325636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 17
    },
    {
      "val": "hi",
      "offset": 37
    },
    {
      "val": "text/plain",
      "offset": 47
    }
  ],
  "location": "MimicServiceSteps.the_Response_of_answers_with_with(String,String,String)"
});
formatter.result({
  "duration": 8480266,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Learn and correct a new response",
  "description": "",
  "id": "test-mimicservice-app;learn-and-correct-a-new-response;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Environment is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Learn that \"test\" should answer with \"Yes\" with \"application/json\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The Response of \"test\" answers with \"Yes\" with \"application/json\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MimicServiceSteps.environment_is_up_and_running()"
});
formatter.result({
  "duration": 7794950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 12
    },
    {
      "val": "Yes",
      "offset": 38
    },
    {
      "val": "application/json",
      "offset": 49
    }
  ],
  "location": "MimicServiceSteps.learn_that_should_answer_with_with(String,String,String)"
});
formatter.result({
  "duration": 15276789,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 17
    },
    {
      "val": "Yes",
      "offset": 37
    },
    {
      "val": "application/json",
      "offset": 48
    }
  ],
  "location": "MimicServiceSteps.the_Response_of_answers_with_with(String,String,String)"
});
formatter.result({
  "duration": 3435605,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Learn and correct a new response",
  "description": "",
  "id": "test-mimicservice-app;learn-and-correct-a-new-response;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Environment is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Learn that \"test\" should answer with \"4\" with \"application/json\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The Response of \"test\" answers with \"4\" with \"application/json\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MimicServiceSteps.environment_is_up_and_running()"
});
formatter.result({
  "duration": 8366593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 12
    },
    {
      "val": "4",
      "offset": 38
    },
    {
      "val": "application/json",
      "offset": 47
    }
  ],
  "location": "MimicServiceSteps.learn_that_should_answer_with_with(String,String,String)"
});
formatter.result({
  "duration": 14657544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 17
    },
    {
      "val": "4",
      "offset": 37
    },
    {
      "val": "application/json",
      "offset": 46
    }
  ],
  "location": "MimicServiceSteps.the_Response_of_answers_with_with(String,String,String)"
});
formatter.result({
  "duration": 13052592,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Learn and correct a new response",
  "description": "",
  "id": "test-mimicservice-app;learn-and-correct-a-new-response;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Environment is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Learn that \"test\" should answer with \"8\" with \"text/html\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The Response of \"test\" answers with \"8\" with \"text/html\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MimicServiceSteps.environment_is_up_and_running()"
});
formatter.result({
  "duration": 4059776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 12
    },
    {
      "val": "8",
      "offset": 38
    },
    {
      "val": "text/html",
      "offset": 47
    }
  ],
  "location": "MimicServiceSteps.learn_that_should_answer_with_with(String,String,String)"
});
formatter.result({
  "duration": 6865876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 17
    },
    {
      "val": "8",
      "offset": 37
    },
    {
      "val": "text/html",
      "offset": 46
    }
  ],
  "location": "MimicServiceSteps.the_Response_of_answers_with_with(String,String,String)"
});
formatter.result({
  "duration": 4310921,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Learn and correct a new response",
  "description": "",
  "id": "test-mimicservice-app;learn-and-correct-a-new-response;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Environment is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Learn that \"test\" should answer with \"10\" with \"text/plain\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The Response of \"test\" answers with \"10\" with \"text/plain\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MimicServiceSteps.environment_is_up_and_running()"
});
formatter.result({
  "duration": 11069281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 12
    },
    {
      "val": "10",
      "offset": 38
    },
    {
      "val": "text/plain",
      "offset": 48
    }
  ],
  "location": "MimicServiceSteps.learn_that_should_answer_with_with(String,String,String)"
});
formatter.result({
  "duration": 8238969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 17
    },
    {
      "val": "10",
      "offset": 37
    },
    {
      "val": "text/plain",
      "offset": 47
    }
  ],
  "location": "MimicServiceSteps.the_Response_of_answers_with_with(String,String,String)"
});
formatter.result({
  "duration": 3197181,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Learn and correct a new response",
  "description": "",
  "id": "test-mimicservice-app;learn-and-correct-a-new-response;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Environment is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Learn that \"test\" should answer with \"22\" with \"text/plain\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The Response of \"test\" answers with \"22\" with \"text/plain\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MimicServiceSteps.environment_is_up_and_running()"
});
formatter.result({
  "duration": 9597289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 12
    },
    {
      "val": "22",
      "offset": 38
    },
    {
      "val": "text/plain",
      "offset": 48
    }
  ],
  "location": "MimicServiceSteps.learn_that_should_answer_with_with(String,String,String)"
});
formatter.result({
  "duration": 16979409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 17
    },
    {
      "val": "22",
      "offset": 37
    },
    {
      "val": "text/plain",
      "offset": 47
    }
  ],
  "location": "MimicServiceSteps.the_Response_of_answers_with_with(String,String,String)"
});
formatter.result({
  "duration": 3534504,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Learn and correct a new response",
  "description": "",
  "id": "test-mimicservice-app;learn-and-correct-a-new-response;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Environment is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Learn that \"test\" should answer with \"20\" with \"text/plain\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The Response of \"test\" answers with \"20\" with \"text/plain\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MimicServiceSteps.environment_is_up_and_running()"
});
formatter.result({
  "duration": 5393063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 12
    },
    {
      "val": "20",
      "offset": 38
    },
    {
      "val": "text/plain",
      "offset": 48
    }
  ],
  "location": "MimicServiceSteps.learn_that_should_answer_with_with(String,String,String)"
});
formatter.result({
  "duration": 6635659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 17
    },
    {
      "val": "20",
      "offset": 37
    },
    {
      "val": "text/plain",
      "offset": 47
    }
  ],
  "location": "MimicServiceSteps.the_Response_of_answers_with_with(String,String,String)"
});
formatter.result({
  "duration": 3084330,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Learn and correct a new response",
  "description": "",
  "id": "test-mimicservice-app;learn-and-correct-a-new-response;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Environment is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Learn that \"test\" should answer with \"3000\" with \"text/plain\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The Response of \"test\" answers with \"3000\" with \"text/plain\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MimicServiceSteps.environment_is_up_and_running()"
});
formatter.result({
  "duration": 4991723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 12
    },
    {
      "val": "3000",
      "offset": 38
    },
    {
      "val": "text/plain",
      "offset": 50
    }
  ],
  "location": "MimicServiceSteps.learn_that_should_answer_with_with(String,String,String)"
});
formatter.result({
  "duration": 9412212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 17
    },
    {
      "val": "3000",
      "offset": 37
    },
    {
      "val": "text/plain",
      "offset": 49
    }
  ],
  "location": "MimicServiceSteps.the_Response_of_answers_with_with(String,String,String)"
});
formatter.result({
  "duration": 3164351,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Learn and correct a new response",
  "description": "",
  "id": "test-mimicservice-app;learn-and-correct-a-new-response;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Environment is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Learn that \"test\" should answer with \"30\" with \"text/plain\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The Response of \"test\" answers with \"30\" with \"text/plain\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MimicServiceSteps.environment_is_up_and_running()"
});
formatter.result({
  "duration": 3171328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 12
    },
    {
      "val": "30",
      "offset": 38
    },
    {
      "val": "text/plain",
      "offset": 48
    }
  ],
  "location": "MimicServiceSteps.learn_that_should_answer_with_with(String,String,String)"
});
formatter.result({
  "duration": 7200736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 17
    },
    {
      "val": "30",
      "offset": 37
    },
    {
      "val": "text/plain",
      "offset": 47
    }
  ],
  "location": "MimicServiceSteps.the_Response_of_answers_with_with(String,String,String)"
});
formatter.result({
  "duration": 3109363,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Learn a new response and then unlearn it",
  "description": "",
  "id": "test-mimicservice-app;learn-a-new-response-and-then-unlearn-it",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "Environment is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Learn that request Test2 should answer with Yes",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Unlearn the request",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "The Response of Test2 should answers with insert form",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicServiceSteps.environment_is_up_and_running()"
});
formatter.result({
  "duration": 5076259,
  "status": "passed"
});
formatter.match({
  "location": "MimicServiceSteps.learn_that_request_test_should_answer_with_Yes()"
});
formatter.result({
  "duration": 29411523,
  "status": "passed"
});
formatter.match({
  "location": "MimicServiceSteps.unlearn_the_request()"
});
formatter.result({
  "duration": 8094109,
  "status": "passed"
});
formatter.match({
  "location": "MimicServiceSteps.the_Response_of_Test_should_answers_with_null()"
});
formatter.result({
  "duration": 8347716,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "As a tester i would like to resert state and get the results back again first",
  "description": "",
  "id": "test-mimicservice-app;as-a-tester-i-would-like-to-resert-state-and-get-the-results-back-again-first",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "resetState",
  "keyword": "Then "
});
formatter.match({
  "location": "MimicServiceSteps.resetstate()"
});
formatter.result({
  "duration": 4693796,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "As a tester i would like to check if states works",
  "description": "",
  "id": "test-mimicservice-app;as-a-tester-i-would-like-to-check-if-states-works",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "The Response of \u003crequest\u003e answers with \u003cresponse\u003e with \u003cresponseMime\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "test-mimicservice-app;as-a-tester-i-would-like-to-check-if-states-works;",
  "rows": [
    {
      "cells": [
        "request",
        "response",
        "responseMime"
      ],
      "line": 41,
      "id": "test-mimicservice-app;as-a-tester-i-would-like-to-check-if-states-works;;1"
    },
    {
      "cells": [
        "\"test\"",
        "\"hi\"",
        "\"text/plain\""
      ],
      "line": 42,
      "id": "test-mimicservice-app;as-a-tester-i-would-like-to-check-if-states-works;;2"
    },
    {
      "cells": [
        "\"test\"",
        "\"Yes\"",
        "\"application/json\""
      ],
      "line": 43,
      "id": "test-mimicservice-app;as-a-tester-i-would-like-to-check-if-states-works;;3"
    },
    {
      "cells": [
        "\"test\"",
        "\"4\"",
        "\"application/json\""
      ],
      "line": 44,
      "id": "test-mimicservice-app;as-a-tester-i-would-like-to-check-if-states-works;;4"
    },
    {
      "cells": [
        "\"test\"",
        "\"8\"",
        "\"text/html\""
      ],
      "line": 45,
      "id": "test-mimicservice-app;as-a-tester-i-would-like-to-check-if-states-works;;5"
    },
    {
      "cells": [
        "\"test\"",
        "\"10\"",
        "\"text/plain\""
      ],
      "line": 46,
      "id": "test-mimicservice-app;as-a-tester-i-would-like-to-check-if-states-works;;6"
    },
    {
      "cells": [
        "\"test\"",
        "\"22\"",
        "\"text/plain\""
      ],
      "line": 47,
      "id": "test-mimicservice-app;as-a-tester-i-would-like-to-check-if-states-works;;7"
    },
    {
      "cells": [
        "\"test\"",
        "\"20\"",
        "\"text/plain\""
      ],
      "line": 48,
      "id": "test-mimicservice-app;as-a-tester-i-would-like-to-check-if-states-works;;8"
    },
    {
      "cells": [
        "\"test\"",
        "\"3000\"",
        "\"text/plain\""
      ],
      "line": 49,
      "id": "test-mimicservice-app;as-a-tester-i-would-like-to-check-if-states-works;;9"
    },
    {
      "cells": [
        "\"test\"",
        "\"30\"",
        "\"text/plain\""
      ],
      "line": 50,
      "id": "test-mimicservice-app;as-a-tester-i-would-like-to-check-if-states-works;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 42,
  "name": "As a tester i would like to check if states works",
  "description": "",
  "id": "test-mimicservice-app;as-a-tester-i-would-like-to-check-if-states-works;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "The Response of \"test\" answers with \"hi\" with \"text/plain\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 17
    },
    {
      "val": "hi",
      "offset": 37
    },
    {
      "val": "text/plain",
      "offset": 47
    }
  ],
  "location": "MimicServiceSteps.the_Response_of_answers_with_with(String,String,String)"
});
formatter.result({
  "duration": 17174334,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "As a tester i would like to check if states works",
  "description": "",
  "id": "test-mimicservice-app;as-a-tester-i-would-like-to-check-if-states-works;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "The Response of \"test\" answers with \"Yes\" with \"application/json\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 17
    },
    {
      "val": "Yes",
      "offset": 37
    },
    {
      "val": "application/json",
      "offset": 48
    }
  ],
  "location": "MimicServiceSteps.the_Response_of_answers_with_with(String,String,String)"
});
formatter.result({
  "duration": 16644548,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "As a tester i would like to check if states works",
  "description": "",
  "id": "test-mimicservice-app;as-a-tester-i-would-like-to-check-if-states-works;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "The Response of \"test\" answers with \"4\" with \"application/json\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 17
    },
    {
      "val": "4",
      "offset": 37
    },
    {
      "val": "application/json",
      "offset": 46
    }
  ],
  "location": "MimicServiceSteps.the_Response_of_answers_with_with(String,String,String)"
});
formatter.result({
  "duration": 15867720,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "As a tester i would like to check if states works",
  "description": "",
  "id": "test-mimicservice-app;as-a-tester-i-would-like-to-check-if-states-works;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "The Response of \"test\" answers with \"8\" with \"text/html\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 17
    },
    {
      "val": "8",
      "offset": 37
    },
    {
      "val": "text/html",
      "offset": 46
    }
  ],
  "location": "MimicServiceSteps.the_Response_of_answers_with_with(String,String,String)"
});
formatter.result({
  "duration": 7650501,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "As a tester i would like to check if states works",
  "description": "",
  "id": "test-mimicservice-app;as-a-tester-i-would-like-to-check-if-states-works;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "The Response of \"test\" answers with \"10\" with \"text/plain\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 17
    },
    {
      "val": "10",
      "offset": 37
    },
    {
      "val": "text/plain",
      "offset": 47
    }
  ],
  "location": "MimicServiceSteps.the_Response_of_answers_with_with(String,String,String)"
});
formatter.result({
  "duration": 20229938,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "As a tester i would like to check if states works",
  "description": "",
  "id": "test-mimicservice-app;as-a-tester-i-would-like-to-check-if-states-works;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "The Response of \"test\" answers with \"22\" with \"text/plain\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 17
    },
    {
      "val": "22",
      "offset": 37
    },
    {
      "val": "text/plain",
      "offset": 47
    }
  ],
  "location": "MimicServiceSteps.the_Response_of_answers_with_with(String,String,String)"
});
formatter.result({
  "duration": 7322205,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "As a tester i would like to check if states works",
  "description": "",
  "id": "test-mimicservice-app;as-a-tester-i-would-like-to-check-if-states-works;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "The Response of \"test\" answers with \"20\" with \"text/plain\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 17
    },
    {
      "val": "20",
      "offset": 37
    },
    {
      "val": "text/plain",
      "offset": 47
    }
  ],
  "location": "MimicServiceSteps.the_Response_of_answers_with_with(String,String,String)"
});
formatter.result({
  "duration": 11590859,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "As a tester i would like to check if states works",
  "description": "",
  "id": "test-mimicservice-app;as-a-tester-i-would-like-to-check-if-states-works;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "The Response of \"test\" answers with \"3000\" with \"text/plain\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 17
    },
    {
      "val": "3000",
      "offset": 37
    },
    {
      "val": "text/plain",
      "offset": 49
    }
  ],
  "location": "MimicServiceSteps.the_Response_of_answers_with_with(String,String,String)"
});
formatter.result({
  "duration": 10924421,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "As a tester i would like to check if states works",
  "description": "",
  "id": "test-mimicservice-app;as-a-tester-i-would-like-to-check-if-states-works;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "The Response of \"test\" answers with \"30\" with \"text/plain\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 17
    },
    {
      "val": "30",
      "offset": 37
    },
    {
      "val": "text/plain",
      "offset": 47
    }
  ],
  "location": "MimicServiceSteps.the_Response_of_answers_with_with(String,String,String)"
});
formatter.result({
  "duration": 6796524,
  "status": "passed"
});
});