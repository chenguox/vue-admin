export interface IForm {
  labelWidth?: string
  colLayout?: any
  itemStyle: any
  formItems: IFormItem[]
}

export interface IFormItem {
  type: string
  label: string
  rule?: any[]
  placeholder?: any
  options?: any[]
}
