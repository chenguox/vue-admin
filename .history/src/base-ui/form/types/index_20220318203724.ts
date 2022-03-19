export interface IForm {
  labelWidth: string
  colLayout: Object
  itemStyle: Object
  formItems: IFormItem
}

export interface IFormItem {
  type: string
  label: string
  rule?: any[]
  placeholder?: any
  options?: any[]
}
