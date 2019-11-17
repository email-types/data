import { Syntaxes } from '../types/mso';

export const syntaxes: Syntaxes = {
  'border-art': {
    syntax:
      'apples | arched-scallops | baby-pacifier | baby-rattle | balloons-3-color | balloons-hot-air | basic-black-dashes | basic-black-dots | basic-black-squares | basic-thin-lines | basic-white-dashes | basic-white-dots | basic-white-squares | basic-wide-inline | basic-wide-midline | basic-wide-outline | bats | birds | birds-flight | cabins | cake-slice | candy-corn | celtic-knotwork | certificate-banner | chain-link | champagne-bottle | checked-bar-black | checked-bar-color | checkered | christmas-tree | circles-lines | circles-rectangles | classical-wave | clocks | compass | confetti | confetti-grays | confetti-outline | confetti-streamers | confetti-white | corner-triangles | coupon-cutout-dashes | coupon-cutout-dots | crazy-maze | creatures-butterfly | creatures-fish | creatures-insects | creatures-lady-bug | cross-stitch | cup | deco-arch | deco-arch-color | deco-blocks | diamonds-gray | double-d | double-diamonds | earth-1 | earth-2 | eclipsing-squares-1 | eclipsing-squares-2 | eggs-black | fans | film | firecrackers | flowers-block-print | flowers-daisies | flowers-modern-1 | flowers-modern-2 | flowers-pansy | flowers-red-rose | flowers-roses | flowers-teacup | flowers-tiny | gems | gingerbread-man | gradient | handmade-1 | handmade-2 | heart-balloon | heart-gray | hearts | heebie-jeebies | holly | house-funky | hypnotic | ice-cream-cones | light-bulb | lightning-1 | lightning-2 | maple-leaf | maple-muffins | map-pins | marquee | marquee-toothed | moons | mosaic | music-notes | northwest | ovals | packages | palms-black | palms-color | paper-clips | papyrus | party-favor | party-glass | pencils | people | people-hats | people-waving | poinsettias | postage-stamp | pumpkin-1 | push-pin-note-1 | push-pin-note-2 | pyramids | pyramids-above | quadrants | rings | safari | sawtooth | sawtooth-gray | scared-cat | seattle | shadowed-squares | sharks-teeth | shorebird-tracks | skyrocket | snowflake-fancy | snowflakes | sombrero | southwest | stars | stars-3d | stars-black | stars-shadowed | stars-top | sun | swirligig | torn-paper | torn-paper-black | trees | triangle-party | triangles | tribal-1 | tribal-2 | tribal-3 | tribal-4 | tribal-5 | tribal-6 | twisted-lines-1 | twisted-lines-2 | vine | waveline | weaving-angles | weaving-braid | weaving-ribbon | weaving-strips | white-flowers | woodwork | x-illusions | zany-triangles | zig-zag | zig-zag-stitch',
  },
  'border-style': {
    syntax: '<complex-line-style> | <gap-line-style> | <simple-line-style>',
  },
  color: {
    syntax: '<named-color> | <string> | auto | windowtext',
  },
  'complex-line-style': {
    syntax:
      'dash-dot-stroked | dot-dash | dot-dash-slanted | dot-dot-dash | double-wave | emboss-3d | engrave-3d | short-dash | solid-thick | three-d-emboss | three-d-engrave',
  },
  'font-size': {
    syntax:
      'large | larger | medium | small | smaller | x-large | x-small | xx-large | xx-small',
  },
  'generic-font-family': {
    syntax: '<string> | cursive | fantasy | monospace | sans-serif | serif',
  },
  'gap-line-style': {
    syntax:
      'dash-large-gap | dash-small-gap | thin-thick-large-gap | thin-thick-medium-gap | thin-thick-small-gap | thin-thick-thin-large-gap | thin-thick-thin-medium-gap | thin-thick-thin-small-gap | thick-thin-large-gap | thick-thin-medium-gap | thick-thin-small-gap | thick-thin-thick-small-gap',
  },
  'int-number-style': {
    syntax:
      'aiueo | aiueo-full-width | arabic | arabic-abjad | arabic-alpha | arabic-leading-zero | bullet | cardinal-text | chicago | chinese-counting | chinese-counting-thousand | chinese-legal-simplified | chosung | decimal | decimal-enclosed-circle | decimal-enclosed-circle-chinese | decimal-enclosed-fullstop | decimal-enclosed-paren | decimal-full-width | decimal-half-width | decimal-zero | ganada | hangul-digital | hebrew-1 | hebrew-2 | hexadecimal | ideograph-digital | ideograph-enclosed-circle | ideograph-legal-traditional | ideograph-traditional | ideograph-zodiak | ideograph-zodiak-traditional | iroha | iroha-full-width | japanese-counting | japanese-digital-ten-thousand | japanese-legal | korean-counting | korean-digital | korean-legal | ordinal | ordinal-text | taiwanese-counting | taiwanese-counting-thousand | taiwanese-digital',
  },
  'line-width': {
    syntax: '<length> | medium | thick | thin',
  },
  'ms-excel-pattern-name': {
    syntax: '6.25-gray | 12.5-gray | 25-gray | 50-gray | 75-gray',
  },
  'ms-word-pattern-name': {
    syntax:
      '25-gray | 5-gray | 075-gray | 10-gray | 12.5-gray | 15-gray | 175-gray | 20-gray | 225-gray | 25-gray | 275-gray | 30-gray | 325-gray | 35-gray | 37.5-gray | 40-gray | 425-gray | 45-gray | 475-gray | 50-gray | 525-gray | 55-gray | 575-gray | 60-gray | 625-gray | 65-gray | 675-gray | 70-gray | 725-gray | 75-gray | 775-gray | 80-gray | 825-gray | 85-gray | 87.5-gray | 90-gray | 925-gray | 95-gray | 97-gray | 975-gray',
  },
  'named-color': {
    syntax:
      'aqua | black | black | blue | fuchsia | gray | green | lime | maroon | navy | olive | purple | red | silver | teal | white | yellow',
  },
  'number-style': {
    syntax:
      'alpha-lower | alpha-upper | lower-alpha | lower-roman | roman-lower | roman-upper | upper-alpha | upper-roman',
  },
  'simple-line-style': {
    syntax:
      'dashed | dotted | double | groove | hairline | inset | none | outset | ridge | solid | triple | wave',
  },
};
