export interface IForm {
  labelWidth: String,
  colLayout: Object,
  itemStyle: Object,
  formItems

}

export interface IFormItem {
  type: string
  label: string
  rule?: any[]
  placeholder?: any
  options?: any[]
}

