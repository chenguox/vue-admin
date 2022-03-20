export interface IForm {
  labelWidth?: string
  colLayout?: any
  itemStyle?: any
  formItems: IFormItem[]
}

export interface IFormItem {
  field: string
  type: string
  label: string
  rule?: any[]
  placeholder?: any
  options?: any[]
}
