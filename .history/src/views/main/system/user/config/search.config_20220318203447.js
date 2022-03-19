import { IFormItem } from '@/base-ui/form'

export const searchFormConfig: IFormItem[] = [
  lableW
  IFormItem:[
  {
    type: 'input',
    label: '用户名',
    placeholder: '请输入用户名'
  },
  {
    type: 'input',
    label: '密码',
    placeholder: '请输入用户名'
  },
  {
    type: 'input',
    label: 'id',
    placeholder: '请输入用户名'
  },
  {
    type: 'datepicker',
    label: '日期',
    placeholder: '请输入用户名'
  },
  {
    type: 'select',
    label: '状态',
    placeholder: '请输入用户名',
    options: [
      {
        value: 'Option1',
        label: 'Option1'
      },
      {
        value: 'Option1',
        label: 'Option1'
      }
    ]
  }]
]
