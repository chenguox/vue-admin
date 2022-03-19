import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '100px',
  formItems: [
    {
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入用户名'
    },
    {
      type: 'input',
      label: '手机号',
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
    }
  ]
}
