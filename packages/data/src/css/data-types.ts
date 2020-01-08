// CSS Data Types, like <number>, <string>, etc

export type DataType = {
  groups: string[];
  status: 'standard' | 'nonstandard' | 'experimental';
  mdn_url?: string;
};

export type DataTypes = Record<string, DataType>;

// The is populated via @email-types/scripts during the build pipeline.
// This cannot be a named export or it will not work.
export const dataTypes: DataType = {} as DataType;
