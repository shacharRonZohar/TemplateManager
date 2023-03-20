import { TEMPLATE_LISTS, DEFAULT_CLI_OPTIONS } from 'consts'

export interface CliOptions {
  name: string
  side: TemplateListKeys
  template: TemplateListKeys[]
}

// Keys
export type CliOptionsKeys = keyof CliOptions

export type TemplateListKeys = keyof typeof TEMPLATE_LISTS
