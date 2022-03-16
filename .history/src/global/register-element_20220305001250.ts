import { App } from 'vue'
import { ElButton, ElTabs, ElForm, ElFormItem, ElInput,ElCheckbox,ELLink } from 'element-plus'

const components = [ElButton, ElTabs, ElForm, ElFormItem, ElInput,ElCheckbox]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
