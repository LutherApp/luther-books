// export const useClickElement = () => useState<boolean>('clickElement', () => false)
export const useClickElement = () => useState<string>('clickElement', () => '')

export const useCloseElement = () => useState<HTMLButtonElement>('closeElement', () => null)
