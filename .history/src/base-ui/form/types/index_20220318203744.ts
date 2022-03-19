export interface IForm {
  labelWidth: string
  colLayout: object
  itemStyle: object
  formItems: IFormItem[]
}

export interface IFormItem {
  type: string
  label: string
  rule?: any[]
  placeholder?: any
  options?: any[]
}
