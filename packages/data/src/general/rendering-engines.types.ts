import { Developer } from './features.types';
import { Nullable, Description } from '../common';

/**
 * Rendering Engine
 *
 * @see https://en.m.wikipedia.org/wiki/Comparison_of_browser_engines
 * */
type Name =
  | 'Blink'
  | 'EdgeHTML'
  | 'Gecko'
  | 'MsWord'
  | 'Trident'
  | 'WebKit'
  | 'Contextual';

/**
 * CSS (Vendor) Prefix
 *
 * @see https://en.m.wikipedia.org/wiki/Comparison_of_browser_engines_(CSS_support)#Vendor-specific
 * */
type VendorPrefix = 'Moz' | 'Ms' | 'Mso' | 'WebKit';

export interface RenderingEngine {
  name: Name;
  description?: Description;
  developer: Nullable<Developer>;
  prefix: VendorPrefix | VendorPrefix[];
}
