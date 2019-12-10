/**
 * Render Engine
 *
 * @see https://en.m.wikipedia.org/wiki/Comparison_of_browser_engines
 * */
export type Name =
  | 'Blink'
  | 'Gecko'
  | 'MsWord'
  | 'Trident'
  | 'WebKit'
  | 'Contextual'
  | 'Unknown';

/**
 * CSS (Vendor) Prefix
 *
 * @see https://en.m.wikipedia.org/wiki/Comparison_of_browser_engines_(CSS_support)#Vendor-specific
 * */
export type VendorPrefix = 'Moz' | 'Ms' | 'Mso' | 'WebKit' | 'Unknown';

export type RenderingEngine = {
  name: Name;
  description?: string;
  prefix: VendorPrefix | VendorPrefix[];
};

export type RenderingEngines = RenderingEngine[];
