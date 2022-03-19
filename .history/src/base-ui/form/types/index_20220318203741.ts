export interface IForm {
  labelWidth: string
  colLayout: object
  itemStyle: Object
  formItems: IFormItem[]
}

export interface IFormItem {
  type: string
  label: string
  rule?: any[]
  placeholder?: any
  options?: any[]
}
