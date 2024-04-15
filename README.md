# Tax-Calculator
It is an assignment given by Fyle to make a Tax calculator.
Design a website that allows for tax calculation based on a users input.

References & Requirements.
- The tax calculation works based on this formula -
    - Overall income (after deductions) under 8 (≤) Lakhs is not taxed.
        - Ex - if Gross Annual Income + Extra Income - Deductions =  6 Lakhs, no tax
        - if Gross Annual Income + Extra Income - Deductions =  9 Lakhs, tax
    - Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at
        - 30% for people with age < 40
        - 40% for people with age ≥ 40 but < 60
        - 10% for people with age ≥ 60
        - Example
            - Age = 34, Income = 40 Lakhs, no deductions, tax = .3 * (40 - 8) = .3 * 32 = 9.6 Lakhs
- Do not restrict user from entering incorrect values like characters in the number fields
    - Highlight a error icon to the right of the input field (shown as an example in above image as a circle with `!`). Hovering over it should show the error in a tooltip
    - If no errors are present, dont show the error icon
    - This should be present in all the number fields
- The age dropdown field should have 3 values -
    - <40
    - ≥ 40 & < 60
    - ≥ 60
    - If user has not entered this value and clicks on submit, show a error icon hovering over which should show that input field is mandatory
- Error icons should not be visible in the form by default.
- Clicking on submit should show a modal which would show the final values based on above calculations.

**Check points for input fields**

- if input field is empty
        ![1](https://github.com/Sdrao10/Tax-Calculator/assets/125265386/6a0d4e42-7858-4a2f-9b1e-e519d3308f61)

- if input field is entered the other than number value
        ![2](https://github.com/Sdrao10/Tax-Calculator/assets/125265386/4ac4699f-560f-4f1d-841e-f529cd3bbd0b)

**when income is above the 8lakh**

-Input
        ![3](https://github.com/Sdrao10/Tax-Calculator/assets/125265386/b4448f8d-9b61-494a-97dd-27644b2be00d)

-output
        ![4](https://github.com/Sdrao10/Tax-Calculator/assets/125265386/5800efac-b49a-4b12-9be6-670ff38419ba)

**when income is below the 8lakh**

-Input
        ![5](https://github.com/Sdrao10/Tax-Calculator/assets/125265386/750a81ba-1d19-4160-ac0f-33da074a087f)

-output
        ![6](https://github.com/Sdrao10/Tax-Calculator/assets/125265386/dbdfb1f2-c697-41b8-ba0f-7f28b816fc0c)


**when income is above 8lakh and age is <40**

-Input
        ![7](https://github.com/Sdrao10/Tax-Calculator/assets/125265386/2bfc4499-acf2-4b47-94aa-b2fe3a79fd3c)

-output
        ![8](https://github.com/Sdrao10/Tax-Calculator/assets/125265386/7ff6f079-726f-4251-8a76-76bc672849e4)


**when income is above 8lakh and age is ≥ 40 but < 60**

-Input
        ![9](https://github.com/Sdrao10/Tax-Calculator/assets/125265386/70f656c2-c792-4dbe-b067-911f74d32041)

-output
        ![10](https://github.com/Sdrao10/Tax-Calculator/assets/125265386/9b16b2e7-3396-4259-8406-6c20d65b0ea0)

**when income is above 8lakh and age is ≥ 60**

-input
        ![11](https://github.com/Sdrao10/Tax-Calculator/assets/125265386/52a91c73-5553-42a6-95df-1a9d77034270)


-output
        ![12](https://github.com/Sdrao10/Tax-Calculator/assets/125265386/d6452cd6-0e53-43a2-b4cf-7208d1d4fd0d)









