Feature: Create new savings account
  User wants to use login to the application

  Scenario: User opens a new savings account
    And customer login to the app
    When customer open a new savings account
    When customer enter all the required details
    Then customer should see the new account details