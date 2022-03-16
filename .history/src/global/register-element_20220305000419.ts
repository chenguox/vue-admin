import { App } from 'vue'
import { ElButton, ElTabs, ElForm, ElFormItem, El } from 'element-plus'

const components = [ElButton, ElTabs, ElForm, ElFormItem]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
