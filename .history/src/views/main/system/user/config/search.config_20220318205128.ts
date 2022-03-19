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
      label: '手机号码',
      placeholder: '请输入用户名'
    },
    {
      type: 'select',
      label: '状态',
      placeholder: '请输入用户名',
      options: [
        {
          value: '启用',
          label: '启用'
        },
        {
          value: '禁用',
          label: '禁用'
        }
      ]
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
