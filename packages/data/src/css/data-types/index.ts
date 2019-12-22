import { as } from '../../common';

export interface DataType {
  groups: string[];
  status: 'standard' | 'nonstandard' | 'experimental';
  mdn_url?: string;
}

export interface DataTypes {
  [name: string]: DataType;
}

// Populated via ncc during the build pipeline.
// This cannot be a named export or it will not work.
export default as<DataTypes>({});
