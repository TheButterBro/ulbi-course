type typeMods = Record<string, string | boolean>

export const classNames = (cls: string, mods: typeMods = {}, additional: string[] = [] ) => {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([cls, value]) => Boolean(value))
            .map(([cls]) => cls)
    ].join(' ')
}

