import { Item } from "../AddAppointmentFields/AddAppointmentInputs.type";

export const addAppointmentFieldsConfig: Item[] = [
  {
    category: "layout",
    type: "hStack",
    gap: 0.5,
    align: "middle",
    justify: "end",
    children: [
      {
        category: "field",
        fieldType: "switch",
        id: "urgent_tag",
        testId: "urgent_tag",
        name: "urgent_tag",
        checkedChildren: "Urgent",
        unCheckedChildren: "Urgent",
        defaultChecked: false,
        validation: [],
      },
      {
        category: "field",
        fieldType: "switch",
        id: "note_form",
        testId: "note_form",
        name: "note_form",
        checkedChildren: "Note",
        unCheckedChildren: "Note",
        defaultChecked: false,
        validation: [],
      },
      {
        category: "field",
        fieldType: "switch",
        id: "alert_form",
        testId: "alert_form",
        name: "alert_form",
        checkedChildren: "Alert",
        unCheckedChildren: "Alert",
        defaultChecked: false,
        validation: [],
      },
    ],
  },
  {
    category: "layout",
    type: "box",
    gap: 0.5,
    align: "middle",
    justify: "start",
    visibility: [{ field: "note_form", value: false }],
    children: [
      {
        category: "field",
        fieldType: "text",
        id: "patient_name",
        testId: "patient_name",
        name: "patient_name",
        label: "apInputs.patient_name.label",
        placeholder: "apInputs.patient_name.placeholder",
        disability: [
          { field: "show_add_patient", value: true }, // this configuration to pass show_add_patient to same nested level as first name & last name for required if validation rule, check commit messages for more details
          { field: "switch_input_method", value: true },
        ],

        validation: [
          {
            type: "requiredIf",
            requiredConditions: [
              {
                field: "note_form",
                value: false,
              },
              {
                field: "show_add_patient", // this configuration to pass show_add_patient to same nested level as first name & last name for required if validation rule, check commit messages for more details
                value: false,
              },
            ],
          },
        ],
      },
      // {
      //   category: "field",
      //   fieldType: "switch",
      //   id: "show_add_patient",
      //   testId: "show_add_patient",
      //   name: "show_add_patient",
      //   checkedChildren: "hide",
      //   unCheckedChildren: "show",
      //   defaultChecked: false,
      //   validation: [],
      //   disability: [{ field: "switch_input_method", value: true }],
      // },
      {
        category: "field",
        fieldType: "switch",
        id: "show_add_patient", // this configuration to pass show_add_patient to same nested level as first name & last name for required if validation rule, check commit messages for more details
        testId: "show_add_patient", // this configuration to pass show_add_patient to same nested level as first name & last name for required if validation rule, check commit messages for more details
        name: "show_add_patient", // this configuration to pass show_add_patient to same nested level as first name & last name for required if validation rule, check commit messages for more details
        checkedChildren: "hide",
        unCheckedChildren: "show",
        defaultChecked: false,
        validation: [],
        disability: [{ field: "switch_input_method", value: true }],
        emptyFields: ["patient_name"],
      },
      {
        category: "field",
        fieldType: "switch",
        id: "switch_input_method",
        testId: "switch_input_method",
        name: "switch_input_method",
        checkedChildren: "no qr",
        unCheckedChildren: "QR",
        defaultChecked: false,
        validation: [],
        disability: [{ field: "show_add_patient", value: true }], // this configuration to pass show_add_patient to same nested level as first name & last name for required if validation rule, check commit messages for more details
      },
    ],
  },
  {
    category: "layout",
    type: "box",
    gap: 0.5,
    align: "middle",
    justify: "start",
    visibility: [{ field: "note_form", value: true }],
    children: [
      {
        category: "field",
        fieldType: "text",
        id: "note_title",
        testId: "note_title",
        name: "note_title",
        label: "apInputs.note_title.label",
        placeholder: "apInputs.note_title.placeholder",
        validation: [
          {
            type: "requiredIf",
            requiredConditions: [
              {
                field: "note_form",
                value: true,
              },
            ],
          },
        ],
      },
    ],
  },
  // start new patient form config
  {
    category: "form",
    name: "new_patient",
    visibility: [{ field: "show_add_patient", value: true }], // this configuration to pass show_add_patient to same nested level as first name & last name for required if validation rule, check commit messages for more details
    children: [
      {
        type: "title",
        category: "UI",
        title: "apInputs.add_new.patient_details_title.text",
        level: 3,
      },
      // {
      //   category: "field",
      //   fieldType: "switch",
      //   id: "new_patient.show_add_patient",
      //   testId: "new_patient.show_add_patient",
      //   name: "new_patient.show_add_patient",
      //   checkedChildren: "hide",
      //   unCheckedChildren: "show",
      //   defaultChecked: false,
      //   validation: [],
      //   disability: [{ field: "switch_input_method", value: true }],
      // },
      {
        category: "layout",
        type: "hStack",
        gap: 0.5,
        children: [
          {
            category: "field",
            fieldType: "text",
            id: "new_patient.id",
            testId: "new_patient.id",
            name: "new_patient.id",
            label: "apInputs.add_new.id.label",
            flex: 1,
            validation: [],
          },
          {
            category: "field",
            fieldType: "text",
            id: "new_patient.first_name",
            testId: "new_patient.first_name",
            name: "new_patient.first_name",
            label: "apInputs.add_new.first_name.label",
            flex: 1,
            validation: [
              {
                type: "required",
              },
              {
                type: "minimum",
                minimum: 3,
              },
            ],
          },
          {
            category: "field",
            fieldType: "text",
            id: "new_patient.last_name",
            testId: "new_patient.last_name",
            name: "new_patient.last_name",
            label: "apInputs.add_new.last_name.label",
            flex: 1,
            validation: [
              {
                type: "required",
              },
            ],
          },
        ],
      },
      {
        category: "layout",
        type: "hStack",
        gap: 0.5,
        children: [
          {
            category: "combineField",
            id: "new_patient.combine_phone",
            testId: "new_patient.combine_phone",
            label: "apInputs.add_new.combine_phone.label",
            fieldsConfig: [
              {
                category: "field",
                combineType: "secondary",
                fieldType: "text",
                id: "new_patient.phone",
                testId: "new_patient.phone",
                name: "new_patient.phone",
                defaultValue: "+20",
                onChangeCustomConfig: {
                  fieldName: "phone",
                  action: "updateKey",
                },
                validation: [],
              },
              {
                category: "field",
                combineType: "main",
                fieldType: "text",
                id: "new_patient.phone",
                testId: "new_patient.phone",
                name: "new_patient.phone",
                onChangeCustomConfig: {
                  fieldName: "phone",
                  action: "updateNumber",
                },
                validation: [],
              },
            ],
          },
          // {
          //   category: "field",
          //   fieldType: "text",
          //   id: "new_patient.phone",
          //   testId: "new_patient.phone",
          //   name: "new_patient.phone",
          //   label: "apInputs.add_new.phone.label",
          //   flex: 1,
          //   validation: [
          //     {
          //       type: "hasPattern",
          //       pattern:
          //         /^(?:\+2|002)?(0111|0114|0112|0155|0101|0109|0106|0100|0120|0128|0127|0122)\d{7}$/,
          //     },
          //   ],
          // },
          {
            category: "field",
            fieldType: "text",
            id: "new_patient.secondary_phone",
            testId: "new_patient.secondary_phone",
            name: "new_patient.secondary_phone",
            label: "apInputs.add_new.secondary_phone.label",
            flex: 1,
            validation: [
              {
                type: "hasPattern",
                pattern:
                  /^(?:\+2|002)?(0111|0114|0112|0155|0101|0109|0106|0100|0120|0128|0127|0122)\d{7}$/,
              },
            ],
          },
          {
            category: "field",
            fieldType: "select",
            id: "new_patient.country",
            testId: "new_patient.country",
            name: "new_patient.country",
            label: "apInputs.add_new.country.label",
            defaultValue: "egypt",
            flex: 1,
            options: [
              {
                value: "egypt",
                label: "apInputs.add_new.country.options.egypt",
              },
              {
                value: "palestine",
                label: "apInputs.add_new.country.options.palestine",
              },
              {
                value: "china",
                label: "apInputs.add_new.country.options.china",
              },
              {
                value: "australia",
                label: "apInputs.add_new.country.options.australia",
              },
            ],
            validation: [],
          },
        ],
      },
      {
        category: "layout",
        type: "hStack",
        gap: 0.5,
        children: [
          {
            category: "dualField",
            testId: "new_patient.switch_date_age",
            fieldsConfig: [
              {
                category: "field",
                fieldType: "number",
                id: "new_patient.age",
                testId: "new_patient.age",
                name: "new_patient.age",
                label: "apInputs.add_new.age.label",
                validation: [
                  {
                    type: "minimum",
                    minimum: 1,
                  },
                  {
                    type: "maximum",
                    maximum: 200,
                  },
                ],
              },
              {
                category: "field",
                fieldType: "datePicker",
                id: "new_patient.birthDate",
                testId: "new_patient.birthDate",
                name: "new_patient.birthDate",
                label: "apInputs.add_new.birthDate.label",
                placeholder: "apInputs.add_new.birthDate.placeholder",
                format: "DD/MM/YYYY",
                validation: [
                  {
                    type: "earlier_than",
                    date: "add 0 day",
                  },
                ],
                dateLimit: {
                  status: "after",
                  date: "add 0 day",
                },
              },
            ],
          },
          {
            category: "field",
            fieldType: "select",
            id: "new_patient.title",
            testId: "new_patient.title",
            name: "new_patient.title",
            label: "apInputs.add_new.title.label",
            flex: 1,

            options: [
              {
                value: "mr",
                label: "apInputs.add_new.title.options.mr",
              },
              {
                value: "mrs",
                label: "apInputs.add_new.title.options.mrs",
              },
              {
                value: "miss",
                label: "apInputs.add_new.title.options.miss",
              },
              {
                value: "ms",
                label: "apInputs.add_new.title.options.ms",
              },
              {
                value: "dr",
                label: "apInputs.add_new.title.options.dr",
              },
            ],
            validation: [],
          },
          {
            category: "field",
            fieldType: "select",
            id: "new_patient.gender",
            testId: "new_patient.gender",
            name: "new_patient.gender",
            label: "apInputs.add_new.gender.label",
            flex: 1,
            options: [
              {
                value: "male",
                label: "apInputs.add_new.gender.options.male",
              },
              {
                value: "female",
                label: "apInputs.add_new.gender.options.female",
              },
            ],
            validation: [],
          },
        ],
      },
      {
        category: "layout",
        type: "hStack",
        gap: 0.5,
        children: [
          {
            category: "field",
            fieldType: "text",
            id: "new_patient.email",
            testId: "new_patient.email",
            name: "new_patient.email",
            label: "apInputs.add_new.email.label",
            flex: 1,
            validation: [
              {
                type: "hasPattern",
                pattern:
                  /^[A-Za-z0-9,-_.]{3,}@[A-Za-z0-9]{3,}\.[A-Za-z0-9]{3,}$/,
              },
            ],
          },
          {
            category: "field",
            fieldType: "text",
            id: "new_patient.address",
            testId: "new_patient.address",
            name: "new_patient.address",
            label: "apInputs.add_new.address.label",
            flex: 1,
            validation: [],
          },
        ],
      },
      {
        category: "layout",
        type: "hStack",
        gap: 0.5,
        children: [
          {
            category: "field",
            fieldType: "select",
            id: "new_patient.assigned_practitioner",
            testId: "new_patient.assigned_practitioner",
            name: "new_patient.assigned_practitioner",
            label: "apInputs.add_new.assigned_practitioner.label",
            flex: 1,

            options: [
              {
                value: "ahmed_taha",
                label:
                  "apInputs.add_new.assigned_practitioner.options.ahmed_taha",
              },
              {
                value: "assistant",
                label:
                  "apInputs.add_new.assigned_practitioner.options.assistant",
              },
            ],
            validation: [],
          },
          {
            category: "field",
            fieldType: "select",
            id: "new_patient.price_list_group",
            testId: "new_patient.price_list_group",
            name: "new_patient.price_list_group",
            label: "apInputs.add_new.price_list_group.label",
            flex: 1,
            options: [
              {
                value: "price_list_group_1",
                label:
                  "apInputs.add_new.price_list_group.options.price_list_group_1",
              },
              {
                value: "price_list_group_2",
                label:
                  "apInputs.add_new.price_list_group.options.price_list_group_2",
              },
              {
                value: "price_list_group_3",
                label:
                  "apInputs.add_new.price_list_group.options.price_list_group_3",
              },
            ],

            validation: [],
          },
        ],
      },
      {
        category: "layout",
        type: "hStack",
        gap: 0.5,
        children: [
          {
            category: "field",
            fieldType: "select",
            id: "new_patient.patient_tags",
            testId: "new_patient.patient_tags",
            name: "new_patient.patient_tags",
            label: "apInputs.add_new.patient_tags.label",
            flex: 1,
            options: [
              {
                value: "diamond",
                label: "apInputs.add_new.patient_tags.options.diamond",
              },
              {
                value: "gold",
                label: "apInputs.add_new.patient_tags.options.gold",
              },
              {
                value: "platinum",
                label: "apInputs.add_new.patient_tags.options.platinum",
              },
              {
                value: "silver",
                label: "apInputs.add_new.patient_tags.options.silver",
              },
              {
                value: "vip",
                label: "apInputs.add_new.patient_tags.options.vip",
              },
              {
                value: "friends",
                label: "apInputs.add_new.patient_tags.options.friends",
              },
              {
                value: "family",
                label: "apInputs.add_new.patient_tags.options.family",
              },
              {
                value: "colleague",
                label: "apInputs.add_new.patient_tags.options.colleague",
              },
            ],
            validation: [],
          },
        ],
      },

      {
        category: "layout",
        type: "hStack",
        gap: 0.5,
        children: [
          {
            category: "field",
            fieldType: "select",
            id: "new_patient.martial_status",
            testId: "new_patient.martial_status",
            name: "new_patient.martial_status",
            label: "apInputs.add_new.martial_status.label",
            flex: 1,
            options: [
              {
                value: "married",
                label: "apInputs.add_new.martial_status.options.married",
              },
              {
                value: "single",
                label: "apInputs.add_new.martial_status.options.single",
              },
              {
                value: "divorced",
                label: "apInputs.add_new.martial_status.options.divorced",
              },
              {
                value: "separated",
                label: "apInputs.add_new.martial_status.options.separated",
              },
              {
                value: "widowed",
                label: "apInputs.add_new.martial_status.options.widowed",
              },
            ],
            validation: [],
          },
          {
            category: "field",
            fieldType: "select",
            id: "new_patient.job",
            testId: "new_patient.job",
            name: "new_patient.job",
            label: "apInputs.add_new.job.label",
            flex: 1,
            options: [
              {
                value: "job_1",
                label: "apInputs.add_new.job.options.job_1",
              },
              {
                value: "job_2",
                label: "apInputs.add_new.job.options.job_2",
              },
              {
                value: "job_3",
                label: "apInputs.add_new.job.options.job_3",
              },
              {
                value: "job_4",
                label: "apInputs.add_new.job.options.job_4",
              },
              {
                value: "job_5",
                label: "apInputs.add_new.job.options.job_5",
              },
              {
                value: "job_6",
                label: "apInputs.add_new.job.options.job_6",
              },
            ],
            validation: [],
          },
          {
            category: "field",
            fieldType: "select",
            id: "new_patient.nationality",
            testId: "new_patient.nationality",
            name: "new_patient.nationality",
            label: "apInputs.add_new.nationality.label",
            flex: 1,
            options: [
              {
                value: "egypt",
                label: "apInputs.add_new.nationality.options.egypt",
              },
              {
                value: "palestine",
                label: "apInputs.add_new.nationality.options.palestine",
              },
              {
                value: "china",
                label: "apInputs.add_new.nationality.options.china",
              },
              {
                value: "australia",
                label: "apInputs.add_new.nationality.options.australia",
              },
            ],
            validation: [],
          },
        ],
      },
      {
        category: "layout",
        type: "box",
        gap: 0.5,
        children: [
          {
            category: "field",
            fieldType: "number",
            id: "new_patient.tax",
            testId: "new_patient.tax",
            name: "new_patient.tax",
            label: "apInputs.add_new.tax.label",
            flex: 1,
            suffix: "%",
            validation: [],
          },
        ],
      },
      {
        category: "field",
        fieldType: "number",
        id: "new_patient.national_id",
        testId: "new_patient.national_id",
        name: "new_patient.national_id",
        label: "apInputs.add_new.national_id.label",
        validation: [],
      },
      {
        category: "layout",
        type: "box",
        gap: 0.5,
        children: [
          {
            category: "field",
            fieldType: "textarea",
            id: "new_patient.patient_details",
            testId: "new_patient.patient_details",
            name: "new_patient.patient_details",
            label: "apInputs.add_new.patient_details.label",
            placeholder: "apInputs.add_new.patient_details.placeholder",
            flex: 1,
            maxLength: 1000,
            showCount: true,
            validation: [],
          },
        ],
      },
      {
        category: "UI",
        type: "title",
        title: "apInputs.add_new.insurance_details_title.text",
        level: 3,
      },
      {
        category: "field",
        fieldType: "text",
        id: "new_patient.insurance_company",
        testId: "new_patient.insurance_company",
        name: "new_patient.insurance_company",
        label: "apInputs.add_new.insurance_company.label",
        placeholder: "apInputs.add_new.insurance_company.placeholder",
        validation: [],
      },
      {
        category: "field",
        fieldType: "switch",
        id: "new_patient.show_add_insurance_company",
        testId: "new_patient.show_add_insurance_company",
        name: "new_patient.show_add_insurance_company",
        checkedChildren: "hide",
        unCheckedChildren: "show",
        defaultChecked: false,
        validation: [],
        emptyFields: ["new_patient.insurance_company"],
      },
      {
        category: "form",
        name: "new_patient.new_insurance_company",
        visibility: [
          { field: "new_patient.show_add_insurance_company", value: true },
        ],
        children: [
          {
            category: "layout",
            type: "box",
            gap: 0.5,
            children: [
              {
                category: "field",
                fieldType: "text",
                id: "new_patient.new_insurance_company.name",
                testId: "new_patient.new_insurance_company.name",
                name: "new_patient.new_insurance_company.name",
                label: "apInputs.add_new.new_insurance_company.name.label",
                validation: [
                  {
                    type: "required",
                  },
                ],
              },
              {
                category: "field",
                fieldType: "text",
                id: "new_patient.new_insurance_company.phone",
                testId: "new_patient.new_insurance_company.phone",
                name: "new_patient.new_insurance_company.phone",
                label: "apInputs.add_new.new_insurance_company.phone.label",
                validation: [
                  {
                    type: "hasPattern",
                    pattern:
                      /^(?:\+2|002)?(0111|0114|0112|0155|0101|0109|0106|0100|0120|0128|0127|0122)\d{7}$/,
                  },
                ],
              },
            ],
          },
          {
            category: "layout",
            type: "box",
            gap: 0.5,
            children: [
              {
                category: "field",
                fieldType: "number",
                id: "new_patient.new_insurance_company.limit",
                testId: "new_patient.new_insurance_company.limit",
                name: "new_patient.new_insurance_company.limit",
                label: "apInputs.add_new.new_insurance_company.limit.label",
                suffix: "EGP",
                validation: [
                  {
                    type: "requiredIf",
                    requiredConditions: [
                      {
                        field: "isUnlimited",
                        value: false,
                      },
                    ],
                  },
                ],
                disability: [
                  {
                    field: "new_patient.new_insurance_company.isUnlimited",
                    value: true,
                  },
                ],
              },
              {
                category: "field",
                fieldType: "checkbox",
                id: "new_patient.new_insurance_company.isUnlimited",
                testId: "new_patient.new_insurance_company.isUnlimited",
                name: "new_patient.new_insurance_company.isUnlimited",
                label:
                  "apInputs.add_new.new_insurance_company.unLimitedCheck.label",
                defaultChecked: false,
                validation: [],
                emptyFields: ["new_patient.new_insurance_company.limit"],
              },
              {
                category: "field",
                fieldType: "number",
                id: "new_patient.new_insurance_company.discount",
                testId: "new_patient.new_insurance_company.discount",
                name: "new_patient.new_insurance_company.discount",
                label: "apInputs.add_new.new_insurance_company.discount.label",
                suffix: "%",
                validation: [
                  {
                    type: "requiredIf",
                    requiredConditions: [
                      {
                        field: "fullDiscount",
                        value: false,
                      },
                    ],
                  },
                ],
                disability: [
                  {
                    field: "new_patient.new_insurance_company.fullDiscount",
                    value: true,
                  },
                ],
              },
              {
                category: "field",
                fieldType: "checkbox",
                id: "new_patient.new_insurance_company.fullDiscount",
                testId: "new_patient.new_insurance_company.fullDiscount",
                name: "new_patient.new_insurance_company.fullDiscount",
                defaultChecked: false,
                label: "100%",
                validation: [],
                emptyFields: ["new_patient.new_insurance_company.discount"],
              },
            ],
          },
          {
            category: "layout",
            type: "box",
            gap: 0.5,
            children: [
              {
                category: "field",
                fieldType: "text",
                id: "new_patient.new_insurance_company.type",
                testId: "new_patient.new_insurance_company.type",
                name: "new_patient.new_insurance_company.type",
                label:
                  "apInputs.add_new.new_insurance_company.membership.label",
                validation: [],
              },
              {
                category: "field",
                fieldType: "text",
                id: "new_patient.new_insurance_company.group",
                testId: "new_patient.new_insurance_company.group",
                name: "new_patient.new_insurance_company.group",
                label: "apInputs.add_new.new_insurance_company.group.label",
                validation: [],
              },
              {
                category: "field",
                fieldType: "text",
                id: "new_patient.new_insurance_company.crt",
                testId: "new_patient.new_insurance_company.crt",
                name: "new_patient.new_insurance_company.crt",
                label: "apInputs.add_new.new_insurance_company.CRT.label",
                validation: [],
              },
            ],
          },
          {
            category: "layout",
            type: "box",
            gap: 0.5,
            children: [
              {
                category: "field",
                fieldType: "datePicker",
                id: "new_patient.new_insurance_company.expiryDate",
                testId: "new_patient.new_insurance_company.expiryDate",
                name: "new_patient.new_insurance_company.expiryDate",
                label:
                  "apInputs.add_new.new_insurance_company.expiry_date.label",
                placeholder:
                  "apInputs.add_new.new_insurance_company.expiry_date.placeholder",
                format: "DD/MM/YYYY",
                validation: [],
              },
              {
                category: "field",
                fieldType: "select",
                id: "new_patient.new_insurance_company.startMonth",
                testId: "new_patient.new_insurance_company.startMonth",
                name: "new_patient.new_insurance_company.startMonth",
                label:
                  "apInputs.add_new.new_insurance_company.start_month.label",
                options: [
                  {
                    value: "january",
                    label:
                      "apInputs.add_new.new_insurance_company.start_month.options.january",
                  },
                  {
                    value: "february",
                    label:
                      "apInputs.add_new.new_insurance_company.start_month.options.february",
                  },
                  {
                    value: "march",
                    label:
                      "apInputs.add_new.new_insurance_company.start_month.options.march",
                  },
                  {
                    value: "april",
                    label:
                      "apInputs.add_new.new_insurance_company.start_month.options.april",
                  },
                  {
                    value: "may",
                    label:
                      "apInputs.add_new.new_insurance_company.start_month.options.may",
                  },
                  {
                    value: "june",
                    label:
                      "apInputs.add_new.new_insurance_company.start_month.options.june",
                  },
                  {
                    value: "july",
                    label:
                      "apInputs.add_new.new_insurance_company.start_month.options.july",
                  },
                  {
                    value: "august",
                    label:
                      "apInputs.add_new.new_insurance_company.start_month.options.august",
                  },
                  {
                    value: "september",
                    label:
                      "apInputs.add_new.new_insurance_company.start_month.options.september",
                  },
                  {
                    value: "october",
                    label:
                      "apInputs.add_new.new_insurance_company.start_month.options.october",
                  },
                  {
                    value: "november",
                    label:
                      "apInputs.add_new.new_insurance_company.start_month.options.november",
                  },
                  {
                    value: "december",
                    label:
                      "apInputs.add_new.new_insurance_company.start_month.options.december",
                  },
                ],
                validation: [],
              },
              {
                category: "field",
                fieldType: "checkbox",
                id: "new_patient.new_insurance_company.requireApproval",
                testId: "new_patient.new_insurance_company.requireApproval",
                name: "new_patient.new_insurance_company.requireApproval",
                label:
                  "apInputs.add_new.new_insurance_company.require_approval.label",
                defaultChecked: false,
                validation: [],
              },
            ],
          },
        ],
      },
      {
        category: "UI",
        type: "title",
        title: "apInputs.add_new.referral_title.text",
        level: 3,
      },
      {
        category: "layout",
        type: "hStack",
        gap: 0.5,
        children: [
          {
            category: "field",
            fieldType: "select",
            id: "new_patient.referral_source",
            testId: "new_patient.referral_source",
            name: "new_patient.referral_source",
            label: "apInputs.add_new.referral_source.label",
            flex: 1,
            options: [
              {
                value: "user",
                label: "apInputs.add_new.referral_source.options.user",
              },
              {
                value: "patient",
                label: "apInputs.add_new.referral_source.options.patient",
              },
              {
                value: "facebook",
                label: "apInputs.add_new.referral_source.options.facebook",
              },
              {
                value: "instagram",
                label: "apInputs.add_new.referral_source.options.instagram",
              },
              {
                value: "twitter",
                label: "apInputs.add_new.referral_source.options.twitter",
              },
            ],
            validation: [],
          },
          {
            category: "field",
            fieldType: "select",
            id: "new_patient.referral_details",
            testId: "new_patient.referral_details",
            name: "new_patient.referral_details",
            label: "apInputs.add_new.referral_details.label",
            flex: 1,
            options: [],
            validation: [],
          },
          {
            category: "field",
            fieldType: "select",
            id: "new_patient.referral_user",
            testId: "new_patient.referral_user",
            name: "new_patient.referral_user",
            label: "apInputs.add_new.referral_user.label",
            flex: 1,
            options: [
              {
                value: "ahmed_taha",
                label: "Ahmed Taha",
              },
              {
                value: "assistant",
                label: "assistant",
              },
            ],
            validation: [],
            visibility: [
              {
                field: "new_patient.referral_source",
                value: "user",
              },
            ],
          },
          {
            category: "field",
            fieldType: "select",
            id: "new_patient.referral_patient",
            testId: "new_patient.referral_patient",
            name: "new_patient.referral_patient",
            label: "apInputs.add_new.referral_patient.label",
            flex: 1,
            options: [
              {
                value: "zaki_badr",
                label: "Zaki Badr",
              },
              {
                value: "mhmd_taha",
                label: "Mhmd Taha",
              },
              {
                value: "hamed_zaki",
                label: "Hamed Zaki",
              },
              {
                value: "patient_tow",
                label: "Patient Tow",
              },
              {
                value: "patient_one",
                label: "Patient One",
              },
            ],
            validation: [],
            visibility: [
              {
                field: "new_patient.referral_source",
                value: "patient",
              },
            ],
          },
        ],
      },
      {
        category: "UI",
        type: "title",
        title: "apInputs.add_new.emergency_contact_title.text",
        level: 3,
      },
      {
        category: "layout",
        type: "hStack",
        gap: 0.5,
        children: [
          {
            category: "field",
            fieldType: "text",
            id: "new_patient.emergency_first_name",
            testId: "new_patient.emergency_first_name",
            name: "new_patient.emergency_first_name",
            label: "apInputs.add_new.emergency_first_name.label",
            flex: 1,
            validation: [],
          },
          {
            category: "field",
            fieldType: "text",
            id: "new_patient.emergency_last_name",
            testId: "new_patient.emergency_last_name",
            name: "new_patient.emergency_last_name",
            label: "apInputs.add_new.emergency_last_name.label",
            flex: 1,
            validation: [],
          },
          {
            category: "field",
            fieldType: "text",
            id: "new_patient.emergency_phone",
            testId: "new_patient.emergency_phone",
            name: "new_patient.emergency_phone",
            label: "apInputs.add_new.emergency_phone.label",
            flex: 1,
            validation: [
              {
                type: "hasPattern",
                pattern:
                  /^(?:\+2|002)?(0111|0114|0112|0155|0101|0109|0106|0100|0120|0128|0127|0122)\d{7}$/,
              },
            ],
          },
        ],
      },
      {
        category: "layout",
        type: "hStack",
        gap: 0.5,
        children: [
          {
            category: "field",
            fieldType: "text",
            id: "new_patient.emergency_secondary_phone",
            testId: "new_patient.emergency_secondary_phone",
            name: "new_patient.emergency_secondary_phone",
            label: "apInputs.add_new.emergency_secondary_phone.label",
            flex: 1,
            validation: [
              {
                type: "hasPattern",
                pattern:
                  /^(?:\+2|002)?(0111|0114|0112|0155|0101|0109|0106|0100|0120|0128|0127|0122)\d{7}$/,
              },
            ],
          },
          {
            category: "field",
            fieldType: "text",
            id: "new_patient.emergency_address",
            testId: "new_patient.emergency_address",
            name: "new_patient.emergency_address",
            label: "apInputs.add_new.emergency_address.label",
            flex: 1,
            validation: [],
          },
          {
            category: "field",
            fieldType: "select",
            id: "new_patient.emergency_relationship",
            testId: "new_patient.emergency_relationship",
            name: "new_patient.emergency_relationship",
            label: "apInputs.add_new.emergency_relationship.label",
            flex: 1,
            options: [
              {
                value: "spouse",
                label: "apInputs.add_new.emergency_relationship.options.spouse",
              },
              {
                value: "parent",
                label: "apInputs.add_new.emergency_relationship.options.parent",
              },
              {
                value: "partner",
                label:
                  "apInputs.add_new.emergency_relationship.options.partner",
              },
              {
                value: "friend",
                label: "apInputs.add_new.emergency_relationship.options.friend",
              },
            ],
            validation: [],
          },
        ],
      },
    ],
  },

  // end new patient form config

  {
    category: "layout",
    type: "hStack",
    gap: 0.5,
    align: "middle",
    justify: "start",
    visibility: [{ field: "note_form", value: false }],
    children: [
      {
        category: "field",
        fieldType: "select",
        id: "doctor",
        testId: "doctor",
        name: "doctor",
        label: "apInputs.doctor.label",
        placeholder: "apInputs.doctor.placeholder",
        flex: 1,
        options: [
          { value: "ahmed", label: "apInputs.doctor.options.ahmed" },
          { value: "taha", label: "apInputs.doctor.options.taha" },
        ],
        validation: [
          {
            type: "requiredIf",
            requiredConditions: [
              {
                field: "note_form",
                value: false,
              },
            ],
          },
        ],
      },
      {
        category: "field",
        fieldType: "select",
        id: "room",
        testId: "room",
        name: "room",
        label: "apInputs.room.label",
        defaultValue: "room_1",
        flex: 1,
        options: [
          { value: "room_1", label: "apInputs.room.options.room_1" },
          { value: "room_2", label: "apInputs.room.options.room_2" },
          { value: "room_3", label: "apInputs.room.options.room_3" },
          { value: "room_4", label: "apInputs.room.options.room_4" },
        ],
        validation: [
          {
            type: "required",
          },
        ],
      },
      {
        category: "field",
        fieldType: "select",
        id: "status",
        testId: "status",
        name: "status",
        label: "apInputs.status.label",
        defaultValue: "open",
        flex: 1,
        options: [
          { value: "open", label: "apInputs.status.options.open" },
          { value: "confirmed", label: "apInputs.status.options.confirmed" },
          { value: "check_in", label: "apInputs.status.options.check_in" },
          {
            value: "in_progress",
            label: "apInputs.status.options.in_progress",
          },
          { value: "completed", label: "apInputs.status.options.completed" },
          { value: "delayed", label: "apInputs.status.options.delayed" },
          { value: "canceled", label: "apInputs.status.options.canceled" },
          { value: "no_show", label: "apInputs.status.options.no_show" },
        ],
        validation: [
          {
            type: "requiredIf",
            requiredConditions: [
              {
                field: "note_form",
                value: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    category: "layout",
    type: "hStack",
    gap: 0.5,
    visibility: [{ field: "note_form", value: true }],
    children: [
      {
        category: "field",
        fieldType: "select",
        id: "notified_doctor",
        testId: "notified_doctor",
        name: "notified_doctor",
        label: "apInputs.notified_doctor.label",
        placeholder: "apInputs.notified_doctor.placeholder",
        flex: 1,
        options: [
          { value: "ahmed", label: "apInputs.notified_doctor.options.ahmed" },
          { value: "taha", label: "apInputs.notified_doctor.options.taha" },
        ],
        validation: [
          {
            type: "requiredIf",
            requiredConditions: [
              {
                field: "note_form",
                value: true,
              },
            ],
          },
        ],
      },
      {
        category: "field",
        fieldType: "select",
        id: "room",
        testId: "room",
        name: "room",
        label: "apInputs.room.label",
        defaultValue: "room_1",
        flex: 1,
        options: [
          { value: "room_1", label: "apInputs.room.options.room_1" },
          { value: "room_2", label: "apInputs.room.options.room_2" },
          { value: "room_3", label: "apInputs.room.options.room_3" },
          { value: "room_4", label: "apInputs.room.options.room_4" },
        ],
        validation: [
          {
            type: "required",
          },
        ],
      },
    ],
  },
  {
    category: "layout",
    type: "hStack",
    gap: 0.5,
    children: [
      {
        category: "field",
        fieldType: "datePicker",
        id: "day",
        testId: "day",
        name: "day",
        label: "apInputs.day.label",
        defaultValue: "add 0 day",
        format: "DD/MM/YYYY",
        flex: 1,
        validation: [
          {
            type: "required",
          },
          {
            type: "later_than",
            date: "add 0 day",
          },
        ],
      },
      {
        category: "field",
        fieldType: "timePicker",
        id: "start_time",
        testId: "start_time",
        name: "start_time",
        label: "apInputs.start_time.label",
        use12Hours: true,
        defaultValue: "12/10/2023 14:00", // testing time format: date can be today with format MM/DD/YYYY
        format: "hh:mm a",
        flex: 1,
        validation: [
          {
            type: "required",
          },
          {
            type: "time_earlier_than",
            fields: [
              { field: "end_time", fieldLabel: "apInputs.end_time.label" },
            ],
          },
        ],
      },
      {
        category: "field",
        fieldType: "timePicker",
        id: "end_time",
        testId: "end_time",
        name: "end_time",
        label: "apInputs.end_time.label",
        defaultValue: "add 30 minute",
        use12Hours: true,
        format: "hh:mm a",
        flex: 1,
        validation: [
          {
            type: "required",
          },
          {
            type: "time_later_than",
            fields: [
              { field: "start_time", fieldLabel: "apInputs.start_time.label" },
            ],
          },
        ],
      },
    ],
  },
  {
    category: "layout",
    type: "box",
    gap: 0.5,
    children: [
      {
        category: "field",
        fieldType: "textarea",
        id: "alert_content",
        testId: "alert_content",
        name: "alert_content",
        label: "apInputs.alert_content.label",
        placeholder: "apInputs.alert_content.placeholder",
        maxLength: 1000,
        showCount: true,
        flex: 1,
        validation: [],
        visibility: [{ field: "alert_form", value: true }],
      },
    ],
  },
  {
    category: "layout",
    type: "hStack",
    gap: 0.5,
    children: [
      {
        category: "field",
        fieldType: "select",
        id: "type",
        testId: "type",
        name: "type",
        label: "apInputs.type.label",
        defaultValue: "examination",
        flex: 1,
        options: [
          { value: "examination", label: "apInputs.type.options.examination" },
          { value: "follow_up", label: "apInputs.type.options.follow_up" },
          {
            value: "consultation",
            label: "apInputs.type.options.consultation",
          },
          {
            value: "routine_treatment",
            label: "apInputs.type.options.routine_treatment",
          },
          {
            value: "extended_treatment",
            label: "apInputs.type.options.extended_treatment",
          },
          { value: "emergency", label: "apInputs.type.options.emergency" },
          { value: "endo", label: "apInputs.type.options.endo" },
        ],
        validation: [
          {
            type: "required",
          },
        ],
      },
      {
        category: "field",
        fieldType: "select",
        id: "subtype",
        testId: "subtype",
        name: "subtype",
        label: "apInputs.subtype.label",
        defaultValue: "",
        flex: 1,
        options: [
          { value: "subtype_1", label: "apInputs.subtype.options.subtype_1" },
          { value: "subtype_2", label: "apInputs.subtype.options.subtype_2" },
          { value: "subtype_3", label: "apInputs.subtype.options.subtype_3" },
          { value: "subtype_4", label: "apInputs.subtype.options.subtype_4" },
        ],
        validation: [],
      },
      {
        category: "field",
        fieldType: "datePicker",
        id: "created",
        testId: "created",
        name: "created",
        label: "apInputs.created.label",
        placeholder: "apInputs.created.placeholder",
        format: "DD/MM/YYYY",
        flex: 1,
        validation: [
          {
            type: "earlier_than",
            date: "add 0 day",
          },
        ],
        dateLimit: {
          status: "after",
          date: "add 0 day",
        },
      },
    ],
  },
  {
    category: "field",
    fieldType: "select",
    id: "assistants",
    testId: "assistants",
    name: "assistants",
    label: "apInputs.assistants.label",
    defaultValue: "",
    flex: 1,
    options: [
      {
        value: "assistant_1",
        label: "apInputs.assistants.options.assistant_1",
      },
      {
        value: "assistant_2",
        label: "apInputs.assistants.options.assistant_2",
      },
    ],
    validation: [],
  },
  {
    category: "field",
    fieldType: "textarea",
    id: "description",
    testId: "description",
    name: "description",
    label: "apInputs.description.label",
    placeholder: "apInputs.description.placeholder",
    maxLength: 1000,
    showCount: true,
    flex: 1,
    validation: [],
    visibility: [{ field: "note_form", value: false }],
  },
  {
    category: "field",
    fieldType: "textarea",
    id: "note_content",
    testId: "note_content",
    name: "note_content",
    label: "apInputs.note_content.label",
    placeholder: "apInputs.note_content.placeholder",
    maxLength: 1000,
    showCount: true,
    flex: 1,
    validation: [],
    visibility: [{ field: "note_form", value: true }],
  },
  {
    category: "UI",
    type: "title",
    title: "apInputs.diagnostic_fees_title.text",
    level: 3,
    visibility: [{ field: "note_form", value: false }],
  },
  {
    category: "layout",
    type: "box",
    gap: 0.5,
    visibility: [{ field: "note_form", value: false }],
    children: [
      {
        category: "field",
        fieldType: "radio",
        id: "diagnostic_fees",
        testId: "diagnostic_fees",
        name: "diagnostic_fees",
        defaultValue: "none",
        options: [
          { value: "none", label: "apInputs.diagnostic_fees.options.none" },
          {
            value: "collected",
            label: "apInputs.diagnostic_fees.options.collected",
          },
          {
            value: "add_to_next_invoice",
            label: "apInputs.diagnostic_fees.options.add_to_next_invoice",
          },
        ],
        validation: [],
      },
      {
        category: "layout",
        type: "box",
        gap: 0.5,
        visibility: [
          {
            field: "diagnostic_fees",
            value: "collected",
          },
        ],
        children: [
          {
            category: "field",
            fieldType: "number",
            id: "collected_diagnostic_fees",
            testId: "collected_diagnostic_fees",
            name: "collected_diagnostic_fees",
            label: "Payment Amount",
            defaultValue: 100,
            suffix: "EGP",
            flex: 1,
            validation: [],
          },
          {
            category: "field",
            fieldType: "select",
            id: "collected_diagnostic_fees_options",
            testId: "collected_diagnostic_fees_options",
            name: "collected_diagnostic_fees_options",
            label: "Payment Method",
            defaultValue: "cash",
            flex: 1,
            options: [
              {
                value: "cash",
                label:
                  "apInputs.collected_diagnostic_fees_options.options.cash",
              },
              {
                value: "card",
                label:
                  "apInputs.collected_diagnostic_fees_options.options.card",
              },
              {
                value: "insurance",
                label:
                  "apInputs.collected_diagnostic_fees_options.options.insurance",
              },
              {
                value: "cheque",
                label:
                  "apInputs.collected_diagnostic_fees_options.options.cheque",
              },
              {
                value: "voucher",
                label:
                  "apInputs.collected_diagnostic_fees_options.options.voucher",
              },
              {
                value: "bank_transfer",
                label:
                  "apInputs.collected_diagnostic_fees_options.options.bank_transfer",
              },
              {
                value: "mobile_wallet",
                label:
                  "apInputs.collected_diagnostic_fees_options.options.mobile_wallet",
              },
              {
                value: "other",
                label:
                  "apInputs.collected_diagnostic_fees_options.options.other",
              },
            ],
            validation: [],
          },
          {
            category: "field",
            fieldType: "select",
            id: "collected_diagnostic_fees_subtype",
            testId: "collected_diagnostic_fees_subtype",
            name: "collected_diagnostic_fees_subtype",
            label: "Payment Subtype",
            defaultValue: "",
            flex: 1,
            options: [
              {
                value: "",
                label:
                  "apInputs.collected_diagnostic_fees_subtype.options.subtype",
              },
              {
                value: "subtype_1",
                label:
                  "apInputs.collected_diagnostic_fees_subtype.options.subtype_1",
              },
              {
                value: "subtype_2",
                label:
                  "apInputs.collected_diagnostic_fees_subtype.options.subtype_2",
              },
            ],
            validation: [],
          },
        ],
      },
      {
        category: "layout",
        type: "box",
        gap: 0.5,
        visibility: [
          {
            field: "diagnostic_fees",
            value: "add_to_next_invoice",
          },
        ],
        children: [
          {
            category: "field",
            fieldType: "number",
            id: "next_invoice_diagnostic_fees",
            testId: "next_invoice_diagnostic_fees",
            name: "next_invoice_diagnostic_fees",
            label: "Amount",
            suffix: "EGP",
            defaultValue: 100,
            flex: 1,
            validation: [],
          },
        ],
      },
    ],
  },

  {
    category: "UI",
    type: "title",
    title: "apInputs.mobile_notification.text",
    level: 3,
  },
  {
    category: "layout",
    type: "hStack",
    gap: 0.5,
    children: [
      {
        category: "field",
        fieldType: "number",
        id: "reminder_before",
        testId: "reminder_before",
        name: "reminder_before",
        label: "apInputs.reminder_before.label",
        flex: 1,
        validation: [{ type: "minimum", minimum: 1 }],
      },
      {
        category: "field",
        fieldType: "select",
        id: "reminder_before_interval",
        testId: "reminder_before_interval",
        name: "reminder_before_interval",
        label: "apInputs.reminder_before_interval.label",
        defaultValue: "minutes",
        flex: 1,
        options: [
          {
            value: "minutes",
            label: "apInputs.reminder_before_interval.options.minutes",
          },
          {
            value: "hours",
            label: "apInputs.reminder_before_interval.options.hours",
          },
          {
            value: "days",
            label: "apInputs.reminder_before_interval.options.days",
          },
          {
            value: "months",
            label: "apInputs.reminder_before_interval.options.months",
          },
        ],
        validation: [],
      },
    ],
  },
];
