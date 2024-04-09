
export type TypeBuildMode = 'production' | 'development';

export interface IBuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface IBuildEnv  {
    mode: TypeBuildMode,
    port: number,
}

export interface IBuildOptions {
    mode: TypeBuildMode;
    paths: IBuildPaths;
    isDev: boolean;
    port: number
}
