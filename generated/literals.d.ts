import * as p5 from './index'

declare module './index' {
  type P2D = 'p2d';
  type WEBGL = 'webgl';
  type ARROW = 'arrow';
  type CROSS = 'cross';
  type HAND = 'hand';
  type MOVE = 'move';
  type TEXT = 'text';
  type WAIT = 'wait';
  type DEGREES = 'degrees';
  type RADIANS = 'radians';
  type CORNER = 'corner';
  type CORNERS = 'corners';
  type RADIUS = 'radius';
  type RIGHT = 'right';
  type LEFT = 'left';
  type CENTER = 'center';
  type TOP = 'top';
  type BOTTOM = 'bottom';
  type BASELINE = 'alphabetic';
  type POINTS = 0x0000;
  type LINES = 0x0001;
  type LINE_STRIP = 0x0003;
  type LINE_LOOP = 0x0002;
  type TRIANGLES = 0x0004;
  type TRIANGLE_FAN = 0x0006;
  type TRIANGLE_STRIP = 0x0005;
  type QUADS = 'quads';
  type QUAD_STRIP = 'quad_strip';
  type CLOSE = 'close';
  type OPEN = 'open';
  type CHORD = 'chord';
  type PIE = 'pie';
  type PROJECT = 'square';
  type SQUARE = 'butt';
  type ROUND = 'round';
  type BEVEL = 'bevel';
  type MITER = 'miter';
  type RGB = 'rgb';
  type HSB = 'hsb';
  type HSL = 'hsl';
  type AUTO = 'auto';
  type BLEND = 'source-over';
  type ADD = 'lighter';
  type DARKEST = 'darkest';
  type LIGHTEST = 'lighten';
  type DIFFERENCE = 'difference';
  type EXCLUSION = 'exclusion';
  type MULTIPLY = 'multiply';
  type SCREEN = 'screen';
  type REPLACE = 'copy';
  type OVERLAY = 'overlay';
  type HARD_LIGHT = 'hard-light';
  type SOFT_LIGHT = 'soft-light';
  type DODGE = 'color-dodge';
  type BURN = 'color-burn';
  type THRESHOLD = 'threshold';
  type GRAY = 'gray';
  type OPAQUE = 'opaque';
  type INVERT = 'invert';
  type POSTERIZE = 'posterize';
  type DILATE = 'dilate';
  type ERODE = 'erode';
  type BLUR = 'blur';
  type NORMAL = 'normal';
  type ITALIC = 'italic';
  type BOLD = 'bold';
  type LANDSCAPE = 'landscape';
  type PORTRAIT = 'portrait';
  type VIDEO = 'video';
  type AUDIO = 'audio';
}