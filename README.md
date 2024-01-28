# Dynamic Form Generator

This project aims to create a form generator dynamically with full validation and visibility configuration.

## Used technologies

- React
- Typescript
- Ant Design
- StyledComponents
- React Hook Form
- Yup
- i18next
- GraphQl & Apollo Client
- StoryBook
- Jest

## How it works

Key configuration is how to create configuration object which will be explained next then pass it as props to generator component (currently called AddAppointmentForm).

## How to create configuration object

Configuration object is an array of objects describing form items. each Form item object can be describing:

```Markdown
Field -> Input
Layout -> row or block of items
UI -> Non interactive elements : Divider, title, alert, link, text
Form -> Nested Forms
```

Here we are listing available Items and each item available configuration properties:

- ## Fields

  all fields require to have a set of properties:

  ```Javascript
  type ItemField = {
    // Mandatory fields: Each field item needs to have all of these fields
    category         // Determine item is a field category
    id               // Field id for selecting and, in some cases, to attach label to input
    testId           // Used to select items for testing
    fieldType        // Determine which field type to render
    name             // Name used to register field value to form state
    validation       // Validation rules

    // Optional fields
    label            // Label for all fields and text for checkbox fields
    placeholder      // Placeholder in case needed
    visibility       // Visibility rules
    disability       // Disability rules
    prefix           // Text or icon added before field
    suffix           // Text or icon added after field

    // Design Values
    xs?: number;     // Item width for screens less than MEDIUM size
    md?: number;     // ITem width for screens wider than MEDIUM size
  };
  ```

  let's break it down and find out what values is available for each property:
  - **category** : set item category and there are 4 available value: ```"field", "layout", "UI" & "form"```
  - **id**: set item id and can be a **string**
  - **testId**: set custom item attribute for testing and can be a **string** and used as following: ```data-testid="textId"```
  - **fieldType**: set input type for each field. Currently available types:

    ```"text", "number", "select", "radio", "datePicker", "timePicker", "textArea", "switch", "checkbox", "phone", "country" & "dualField"```
  - **name**: name used to be key of current input field value at form state and can be a **string**
  - **validation**: validation rules used to build schema to validate each form input. More explanation is in the next [section]().
  - **label**: used for label for all fields except for checkbox, used as a text content and can be a **string**.
  - **placeholder**: placeholder text to help user provide the right input and can be a **string**.
  - **visibility**: visibility rules used to conditionally renders items based on other fields values. More explanation is in the next [section]().
  - **disability**: disability rules to control field disability based on other fields values. More explanation is in the next [section]().
  - **prefix**: additional text or item rendered before field to help provide more information and can be a **string**.
  - **suffix**: additional text or item rendered after field to help provide more information and can be a **string**.
  - **xs**: set field original width on all screens that has size less than medium screen size It can be a **number less than or equal to 24**
  - **md**: set field width on all screens that has size more than medium screen size It can be a **number less than or equal to 24**


  ### validation, visibility & disability rules configuration

    Main idea is to pass a *field name* & *value* that in case it is current *field name*'s' value, apply a specific functionality. These rules are an array of objects and each object represents a rule need to be meet to apply the required functionality. Each Rule follows following syntax:

    ```Javascript
      type Rule = {
        field     // field name to watch its value
        value     // value that if field name has this value, apply a specific functionality
      }
    ```

    For example:

    ```Javascript
      visibility: [{ field: "note_form", value: false }],
    ```

    this code express that if field with name `note_form` has value of `false` then show current field, otherwise hide it.
    Now, let us explain what how to set for each rule type:

  - In case of *visibility*: if we need to be an item is visible only if a field with name `show_form` is `true`, then visibility configuration will be as following at field's object:

    ```Javascript
      visibility: [{ field: "show_form", value: false }],
    ```

  - In case of *disability*: if we need to make item is disabled only if a field with name `unLimited` is `true`, then disability configuration will be as following at field/s object:

    ```Javascript
      disability:[{field:"limit",value:true}]
    ```


- ### Text Fields

  - represents Text inputs that accepts strings
  - Text Field has all

- Create a Form container component
- Import Form component (Currently called AddAppointmentForm)
- Pass Form Configuration object as props to Form component

Now I think we need to know how to build 
