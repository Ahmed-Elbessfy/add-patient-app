import { Item } from "../AddAppointmentFields.ts/AddAppointmentInputs.type";

export const addAppointmentFieldsConfig: Item[] = [
  {
    category: "layout",
    type: "box",
    gap: 0.5,
    children: [
      {
        category: "field",
        fieldType: "text",
        id: "patient_name",
        testId: "patient_name",
        name: "patient_name",
        label: "Patient",
        placeholder: "Please choose or add new patient",
      },
      {
        category: "field",
        fieldType: "switch",
        id: "switch_input_method",
        testId: "switch_input_method",
        name: "switch_input_method",
        checkedChildren: "default",
        unCheckedChildren: "QR",
        defaultChecked: false,
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
        id: "doctor",
        testId: "doctor",
        name: "doctor",
        label: "Doctor",
        placeholder: "Select a doctor",
        options: [
          { value: "ahmed", label: "ahmed" },
          { value: "taha", label: "taha" },
        ],
      },
      {
        category: "field",
        fieldType: "select",
        id: "room",
        testId: "room",
        name: "room",
        label: "Room",
        defaultValue: "room_1",
        options: [
          { value: "room_1", label: "Room 1" },
          { value: "room_2", label: "Room 2" },
          { value: "room_3", label: "Room 3" },
          { value: "room_4", label: "Room 4" },
        ],
      },
      {
        category: "field",
        fieldType: "select",
        id: "status",
        testId: "status",
        name: "status",
        label: "Status",
        defaultValue: "open",
        options: [
          { value: "open", label: "Open" },
          { value: "confirmed", label: "Confirmed" },
          { value: "check_in", label: "Check In" },
          { value: "in_progress", label: "In Progress" },
          { value: "completed", label: "Completed" },
          { value: "delayed", label: "Delayed" },
          { value: "canceled", label: "Canceled" },
          { value: "no_show", label: "No Show" },
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
        label: "Day",
        defaultValue: `${new Date()}`,
        format: "YYYY-MM-DD",
      },
      {
        category: "field",
        fieldType: "timePicker",
        id: "start_time",
        testId: "start_time",
        name: "start_time",
        label: "Start",
        use12Hours: true,
        defaultValue: `${new Date()}`,
        format: "HH:MM A",
      },
      {
        category: "field",
        fieldType: "timePicker",
        id: "end_time",
        testId: "end_time",
        name: "end_time",
        label: "End",
        defaultValue: `${new Date()}`,
        use12Hours: true,
        format: "HH:MM A",
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
        label: "Type",
        defaultValue: "examination",
        options: [
          { value: "examination", label: "Examination" },
          { value: "follow_up", label: "Follow Up" },
          { value: "consultation", label: "Consultation" },
          { value: "routine_treatment", label: "Routine Treatment" },
          { value: "extended_treatment", label: "Extended Treatment" },
          { value: "emergency", label: "Emergency" },
          { value: "endo", label: "Endo" },
        ],
      },
      {
        category: "field",
        fieldType: "select",
        id: "subtype",
        testId: "subtype",
        name: "subtype",
        label: "Subtype",
        defaultValue: "",
        options: [
          { value: "subtype_1", label: "Subtype 1" },
          { value: "subtype_2", label: "Subtype 2" },
          { value: "subtype_3", label: "Subtype 3" },
          { value: "subtype_4", label: "Subtype 4" },
        ],
      },
      {
        category: "field",
        fieldType: "datePicker",
        id: "created",
        testId: "created",
        name: "created",
        label: "Created",
        defaultValue: `${new Date()}`,
        format: "YYYY-MM-DD",
      },
    ],
  },
  {
    category: "field",
    fieldType: "select",
    id: "assistants",
    testId: "assistants",
    name: "assistants",
    label: "Assistants",
    defaultValue: "",
    options: [
      { value: "assistant_1", label: "assistant 1" },
      { value: "assistant_2", label: "assistant 2" },
    ],
  },
  {
    category: "field",
    fieldType: "textarea",
    id: "description",
    testId: "description",
    name: "description",
    label: "Description",
    placeholder: "Add extra details here",
  },
  {
    category: "UI",
    type: "title",
    text: "diagnostic fees",
    level: 3,
  },
  {
    category: "field",
    fieldType: "radio",
    id: "diagnostic_fees",
    testId: "diagnostic_fees",
    name: "diagnostic_fees",
    defaultValue: "none",
    options: [
      { value: "none", label: "None" },
      { value: "collected", label: "Collected" },
      { value: "add_to_next_invoice", label: "Add to next invoice" },
    ],
  },
  {
    category: "field",
    fieldType: "number",
    id: "collected_diagnostic_fees",
    testId: "collected_diagnostic_fees",
    name: "collected_diagnostic_fees",
    defaultValue: 100,
  },
  {
    category: "field",
    fieldType: "select",
    id: "collected_diagnostic_fees_options",
    testId: "collected_diagnostic_fees_options",
    name: "collected_diagnostic_fees_options",
    defaultValue: "cash",
    options: [
      { value: "cash", label: "Cash" },
      { value: "card", label: "Card" },
      { value: "insurance", label: "Insurance" },
      { value: "cheque", label: "Cheque" },
      { value: "voucher", label: "Voucher" },
      { value: "bank_transfer", label: "Bank Transfer" },
      { value: "mobile_wallet", label: "Mobile Wallet" },
      { value: "other", label: "Other" },
    ],
  },
  {
    category: "field",
    fieldType: "select",
    id: "collected_diagnostic_fees_subtype",
    testId: "collected_diagnostic_fees_subtype",
    name: "collected_diagnostic_fees_subtype",
    defaultValue: "",
    options: [
      { value: "", label: "Subtype" },
      { value: "subtype_1", label: "subtype 1" },
      { value: "subtype_2", label: "subtype 2" },
    ],
  },
  {
    category: "UI",
    type: "title",
    text: "Mobile Notification for Doctor",
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
        label: "Remind before appointment in",
      },
      {
        category: "field",
        fieldType: "select",
        id: "reminder_before_interval",
        testId: "reminder_before_interval",
        name: "reminder_before_interval",
        label: "Interval",
        defaultValue: "minutes",
        options: [
          { value: "minutes", label: "Minutes" },
          { value: "hours", label: "Hours" },
          { value: "days", label: "Days" },
          { value: "months", label: "Months" },
        ],
      },
    ],
  },
];