import { create } from '../utils/create';
import * as MSO from '../types/mso';

const validate = create<MSO.Group>();

export const groups = validate({
  animations: {
    title: 'Animations',
    url: `https://stigmortenmyre.no/mso/html/powerpoint/ppconanimations.htm`,
  },
  'bullets-and-numbered-lists': {
    title: 'Bullets and Numbered Lists',
    url: `https://stigmortenmyre.no/mso/html/concepts/ofconbullets.htm`,
  },
  'borders-and-shading': {
    title: 'Borders and Shading',
    url: `https://stigmortenmyre.no/mso/html/concepts/ofconbordersshading.htm`,
  },
  'cell-formatting': {
    title: 'Cell Formatting',
    url: `https://stigmortenmyre.no/mso/html/excel/xlconcellformatting.htm`,
  },
  'change-tracking': {
    title: 'Change Tracking',
    url: `https://stigmortenmyre.no/mso/html/word/wdconchangetracking.htm`,
  },
  comments: {
    title: 'Comments',
    url: `https://stigmortenmyre.no/mso/html/word/wdconcomments.htm`,
  },
  fields: {
    title: 'Fields',
    url: `https://stigmortenmyre.no/mso/html/word/wdconfields.htm`,
  },
  'footnotes-and-endnotes': {
    title: 'Footnotes and Endnotes',
    url: `https://stigmortenmyre.no/mso/html/word/wdconfootnotesandendnotes.htm`,
  },
  'frames-and-drop-caps': {
    title: 'Frames and Drop Caps',
    url: `https://stigmortenmyre.no/mso/html/word/wdconframesanddropcaps.htm`,
  },
  'grouping-and-outline': {
    title: 'Grouping and Outlines',
    url: `https://stigmortenmyre.no/mso/html/excel/xlconoutline.htm`,
  },
  'headers-and-footers': {
    title: 'Headers and Footers',
    url: `https://stigmortenmyre.no/mso/html/concepts/ofconheadersfootersstyle.htm`,
  },
  hyperlinks: {
    title: 'Hyperlinks',
    url: `https://stigmortenmyre.no/mso/html/concepts/ofconhyperlinks.htm`,
  },
  'international-documents': {
    title: 'International Documents',
    url: `https://stigmortenmyre.no/mso/html/concepts/ofconinternational.htm`,
  },
  'master-documents': {
    title: 'Master Documents',
    url: `https://stigmortenmyre.no/mso/html/word/wdconmasterdocuments.htm`,
  },
  'page-layout-and-section-breaks': {
    title: 'Page Layout and Section Breaks',
    url: `https://stigmortenmyre.no/mso/html/word/wdconsectionbreaks.htm`,
  },
  'page-setup': {
    title: 'Page Setup',
    url: `https://stigmortenmyre.no/mso/html/concepts/ofconpagesetup.htm`,
  },
  paragraphs: {
    title: 'Paragraphs',
    url: `https://stigmortenmyre.no/mso/html/concepts/ofconparagraphs.htm`,
  },
  'paragraph-spacing': {
    title: 'Paragraph Spacing',
    url: `https://stigmortenmyre.no/mso/html/word/wdconparagraphspacing.htm`,
  },
  'saving-and-opening-html-files': {
    title: 'Saving and Opening Html Files',
    url: `https://stigmortenmyre.no/mso/html/excel/xlconloadinghtml.htm`,
  },
  text: {
    title: 'Text',
    url: `https://stigmortenmyre.no/mso/html/concepts/ofcontext.htm`,
  },
  tables: {
    title: 'Tables',
    url: `https://stigmortenmyre.no/mso/html/word/wdcontables.htm`,
  },
  whitespace: {
    title: 'Whitespace',
    url: `https://stigmortenmyre.no/mso/html/concepts/ofconwhitespace.htm`,
  },
  worksheets: {
    title: 'Worksheets',
    url: `https://stigmortenmyre.no/mso/html/excel/xlcontables.htm`,
  },
});

export default groups;
