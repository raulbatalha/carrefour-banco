Feature: Login Functionality

  As a user,
  I want to log in to the WDIO Native app
  So that I can access my account and use the application

  Background:
    Given the Wdio Native app is launched
    And I am on the login screen

  Scenario: Successful login with valid credentials
    When I enter "manaus@amazonas.com" in the username field
    And I enter a valid password
    And I tap the login button
    Then I should be logged in successfully

  Scenario: Failed login with invalid credentials
    When I enter "manaus" in the username field
    And I enter an invalid password
    And I tap the login button
    Then I should see an error message indicating "Invalid user"

  Scenario: Failed login with blocked user
    When I enter "amazonas@brasil.com" in the username field
    And I enter a valid password
    And I tap the login button
    Then I should see an error message indicating "Underfined"
