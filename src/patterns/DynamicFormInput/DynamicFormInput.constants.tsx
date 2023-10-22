export interface DynamicFormInputConfigurationInterface {
  fieldType: string;
  name: string;
  placeholder: string;
  label?: string;
  fieldId: string;
  onChangeEvent: (inputName: string, inputValue: string | number) => void;
}
