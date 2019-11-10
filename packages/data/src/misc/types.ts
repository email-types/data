/**
 * Developer
 *
 * @see https://en.wikipedia.org/wiki/Comparison_of_webmail_providers
 * */
export type Developer =
  | 'Apple'
  | 'Google'
  | 'IBM'
  | 'Microsoft'
  | 'Mozilla'
  | 'Verizon'
  | 'Other';

/**
 * Render Engine
 *
 * @see https://en.m.wikipedia.org/wiki/Comparison_of_browser_engines
 * */
export type RenderEngine =
  | 'Blink'
  | 'Gecko'
  | 'MsWord'
  | 'Presto'
  | 'Trident'
  | 'WebKit'
  | 'Contextual'
  | 'Unknown';

/**
 * CSS (Vendor) Prefixe
 *
 * @see https://en.m.wikipedia.org/wiki/Comparison_of_browser_engines_(CSS_support)#Vendor-specific
 * */
export type VendorPrefix =
  | 'Moz'
  | 'Ms'
  | 'Mso'
  | 'O'
  | 'WebKit'
  | 'Contextual'
  | 'Unknown';

export interface Engine {
  name: RenderEngine;
  prefix: VendorPrefix;
  description?: string;
  developer?: Developer | 'Opera';
}
