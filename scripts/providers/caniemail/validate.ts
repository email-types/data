import { ResolvedData } from './config';
import { is } from '../../utils/is';
import { ProviderValidator } from '../../utils/provider';

const title = (data: ResolvedData) => {
  if (is.undef(data.title)) {
    return 'missing title';
  }
  if (!is.string(data.title)) {
    return 'invalid title';
  }
  if (data.title.length < 1) {
    return 'missing title';
  }
};

const description = (data: ResolvedData) => {
  if (is.undef(data.description) && !is.string(data.description)) {
    return 'invalid description';
  }
};

const notes = (data: ResolvedData) => {
  if (is.notUndef(data.notes) && !is.string(data.notes)) {
    return 'invalid notes';
  }
};

const notesByNum = (data: ResolvedData) => {
  if (is.notUndef(data.notesByNum) && !is.object(data.notesByNum)) {
    return 'invalid notes by num';
  }
};

const categories = (data: ResolvedData) => {
  if (is.notUndef(data.categories) && !is.array(data.categories)) {
    return 'invalid categories';
  }
};

const links = (data: ResolvedData) => {
  if (is.notUndef(data.links) && !is.object(data.links)) {
    return 'invalid links';
  }
};

const stats = (data: ResolvedData) => {
  if (is.undef(data.stats)) {
    return 'missing stats';
  }
  if (!is.object(data.stats)) {
    return 'invalid stats';
  }
};

export const validate: ProviderValidator<ResolvedData> = (data) => {
  const warnings = [
    title,
    description,
    notes,
    notesByNum,
    categories,
    links,
    stats,
  ]
    .map((fn) => fn(data))
    .filter(Boolean);

  return warnings as string[];
};
