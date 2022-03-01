import { App } from 'vue'
import { ElButton, ElForm, ElFormItem } from 'element-plus'

const components = [ElButton, ElForm, ElFormItem]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
