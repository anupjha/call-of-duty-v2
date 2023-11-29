import { version } from '../../package.json'

export default function TheFooter() {
  return (
    <div class="h-6 text-small p-1 bg-primary border-solid border-0 border-t-1 border-color-primary flex-row">
      <div class="f-1"></div>
      <div class="text-center layout-stack-horizontal-4">
        <a
          class="text-decoration-none text-secondary hover-bg-link px-2"
          href="https://anupjha.com"
        >© 2023 Anup Jha</a>
        <a
          class="text-decoration-none text-secondary hover-bg-link px-2"
          href="https://github.com/anupjha/call-of-duty-v2"
        >GitHub</a>
      </div>
      <div class="f-1 text-right">
        <span class="font-mono text-secondary">v{version}</span>
      </div>
    </div>
  )
}
