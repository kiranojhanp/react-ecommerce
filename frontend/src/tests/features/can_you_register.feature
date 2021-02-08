Feature: Can you register an account?
    We want to check if we can register an account in this application


    Scenario Outline: Can register or not
        Given register this account for user "<username>"
        And this email "<email>"
        And this password "<password>"

        When I ask to register an account
        Then I should be replied back "<response>"

        Examples:
            | username        | email            |  | password |  | response |
            | Kiran Ojha      | kiran@test.com   |  | 123456   |  | Fail     |
            | Sandesh Sapkota | sandesh@test.com |  | 123456   |  | Success  |


