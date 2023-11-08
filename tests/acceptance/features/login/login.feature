Feature: Login to ParaBank
  User wants to use login to the application

  Background:
    Given A customer register as new user

  Scenario: Login as User to application
    Given customer login to the app
    Then customer should be logged in successfully