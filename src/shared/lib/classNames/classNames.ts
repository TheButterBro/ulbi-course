type typeMods = Record<string, string | boolean>

export const classNames = (cls: string, mods: typeMods = {}, additional: string[] = []): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([cls]) => cls)
  ].join(' ')
}
