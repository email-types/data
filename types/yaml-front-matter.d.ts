declare module 'yaml-front-matter' {
  type Content = { __content?: string };
  const loadFront: <T extends object = any>(content: string) => T & Content;
  const safeLoadFront: <T extends object = any>(
    content: string,
    opts?: object,
  ) => T & Content;
}
