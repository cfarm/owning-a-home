Feature: verify the /owning-a-home/process page works according to requirements
As a first time visitor to the Owning a Home page
I want to navigate the process page
So that I can find the information I'm looking for

@process_page @check_urls
Scenario Outline: Testing availability of all pages
  Given I navigate to the "<page_name>" page
  Then I see page loaded
    and All links are working

Examples:
  | page_name             |
  | Know the Process      |
  | Prepare to Shop       |
  | Explore Loan Options  |
  | Compare Loan Options  |
  | Get Ready to Close    |

@check_urls
Scenario Outline: Testing availability of pages that are not part of journey steps
  Given I navigate to the "<page_name>" page
  Then All links are working

Examples:
  | page_name             |
  | Sources               |

