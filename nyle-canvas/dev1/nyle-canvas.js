//  'Nyle-canvas'
//
//  Copyright (c) 2019 Koki Kitamura
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php

// ColorMap Module
const ColorMap = (() => {
  let public = {};   // Object

  let _colors = {}   // Private attributes
  _colors['aliceblue']            = {hex: '#F0F8FF', r: 240, g: 248, b: 255};
  _colors['antiquewhite']         = {hex: '#FAEBD7', r: 250, g: 235, b: 215};
  _colors['aqua']                 = {hex: '#00FFFF', r:   0, g: 255, b: 255};
  _colors['aquamarine']           = {hex: '#7FFFD4', r: 127, g: 255, b: 212};
  _colors['azure']                = {hex: '#F0FFFF', r: 240, g: 255, b: 255};
  _colors['beige']                = {hex: '#F5F5DC', r: 245, g: 245, b: 220};
  _colors['bisque']               = {hex: '#FFE4C4', r: 255, g: 228, b: 196};
  _colors['black']                = {hex: '#000000', r:   0, g:   0, b:   0};
  _colors['blanchedalmond']       = {hex: '#FFEBCD', r: 255, g: 235, b: 205};
  _colors['blue']                 = {hex: '#0000FF', r:   0, g:   0, b: 255};
  _colors['blueviolet']           = {hex: '#8A2BE2', r: 138, g:  43, b: 226};
  _colors['brown']                = {hex: '#A52A2A', r: 165, g:  42, b:  42};
  _colors['burlywood']            = {hex: '#DEB887', r: 222, g: 184, b: 135};
  _colors['cadetblue']            = {hex: '#5F9EA0', r:  95, g: 158, b: 160};
  _colors['chartreuse']           = {hex: '#7FFF00', r: 127, g: 255, b:   0};
  _colors['chocolate']            = {hex: '#D2691E', r: 210, g: 105, b:  30};
  _colors['coral']                = {hex: '#FF7F50', r: 255, g: 127, b:  80};
  _colors['cornflowerblue']       = {hex: '#6495ED', r: 100, g: 149, b: 237};
  _colors['cornsilk']             = {hex: '#FFF8DC', r: 255, g: 248, b: 220};
  _colors['crimson']              = {hex: '#DC143C', r: 220, g:  20, b:  60};
  _colors['cyan']                 = {hex: '#00FFFF', r:   0, g: 255, b: 255};
  _colors['darkblue']             = {hex: '#00008B', r:   0, g:   0, b: 139};
  _colors['darkcyan']             = {hex: '#008B8B', r:   0, g: 139, b: 139};
  _colors['darkgoldenrod']        = {hex: '#B8860B', r: 184, g: 134, b:  11};
  _colors['darkgray']             = {hex: '#A9A9A9', r: 169, g: 169, b: 169};
  _colors['darkgreen']            = {hex: '#006400', r:   0, g: 100, b:   0};
  _colors['darkkhaki']            = {hex: '#BDB76B', r: 189, g: 183, b: 107};
  _colors['darkmagenta']          = {hex: '#8B008B', r: 139, g:   0, b: 139};
  _colors['darkolivegreen']       = {hex: '#556B2F', r:  85, g: 107, b:  47};
  _colors['darkorange']           = {hex: '#FF8C00', r: 255, g: 140, b:   0};
  _colors['darkorchid']           = {hex: '#9932CC', r: 153, g:  50, b: 204};
  _colors['darkred']              = {hex: '#8B0000', r: 139, g:   0, b:   0};
  _colors['darksalmon']           = {hex: '#E9967A', r: 233, g: 150, b: 122};
  _colors['darkseagreen']         = {hex: '#8FBC8F', r: 143, g: 188, b: 143};
  _colors['darkslateblue']        = {hex: '#483D8B', r:  72, g:  61, b: 139};
  _colors['darkslategray']        = {hex: '#2F4F4F', r:  47, g:  79, b:  79};
  _colors['darkturquoise']        = {hex: '#00CED1', r:   0, g: 206, b: 209};
  _colors['darkviolet']           = {hex: '#9400D3', r: 148, g:   0, b: 211};
  _colors['deeppink']             = {hex: '#FF1493', r: 255, g:  20, b: 147};
  _colors['deepskyblue']          = {hex: '#00BFFF', r:   0, g: 191, b: 255};
  _colors['dimgray']              = {hex: '#696969', r: 105, g: 105, b: 105};
  _colors['dodgerblue']           = {hex: '#1E90FF', r:  30, g: 144, b: 255};
  _colors['firebrick']            = {hex: '#B22222', r: 178, g:  34, b:  34};
  _colors['floralwhite']          = {hex: '#FFFAF0', r: 255, g: 250, b: 240};
  _colors['forestgreen']          = {hex: '#228B22', r:  34, g: 139, b:  34};
  _colors['fuchsia']              = {hex: '#FF00FF', r: 255, g:   0, b: 255};
  _colors['gainsboro']            = {hex: '#DCDCDC', r: 220, g: 220, b: 220};
  _colors['ghostwhite']           = {hex: '#F8F8FF', r: 248, g: 248, b: 255};
  _colors['gold']                 = {hex: '#FFD700', r: 255, g: 215, b:   0};
  _colors['goldenrod']            = {hex: '#DAA520', r: 218, g: 165, b:  32};
  _colors['gray']                 = {hex: '#808080', r: 128, g: 128, b: 128};
  _colors['green']                = {hex: '#008000', r:   0, g: 128, b:   0};
  _colors['greenyellow']          = {hex: '#ADFF2F', r: 173, g: 255, b:  47};
  _colors['honeydew']             = {hex: '#F0FFF0', r: 240, g: 255, b: 240};
  _colors['hotpink']              = {hex: '#FF69B4', r: 255, g: 105, b: 180};
  _colors['indianred']            = {hex: '#CD5C5C', r: 205, g:  92, b:  92};
  _colors['indigo']               = {hex: '#4B0082', r:  75, g:   0, b: 130};
  _colors['ivory']                = {hex: '#FFFFF0', r: 255, g: 255, b: 240};
  _colors['khaki']                = {hex: '#F0E68C', r: 240, g: 230, b: 140};
  _colors['lavender']             = {hex: '#E6E6FA', r: 230, g: 230, b: 250};
  _colors['lavenderblush']        = {hex: '#FFF0F5', r: 255, g: 240, b: 245};
  _colors['lawngreen']            = {hex: '#7CFC00', r: 124, g: 252, b:   0};
  _colors['lemonchiffon']         = {hex: '#FFFACD', r: 255, g: 250, b: 205};
  _colors['lightblue']            = {hex: '#ADD8E6', r: 173, g: 216, b: 230};
  _colors['lightcoral']           = {hex: '#F08080', r: 240, g: 128, b: 128};
  _colors['lightcyan']            = {hex: '#E0FFFF', r: 224, g: 255, b: 255};
  _colors['lightgoldenrodyellow'] = {hex: '#FAFAD2', r: 250, g: 250, b: 210};
  _colors['lightgray']            = {hex: '#D3D3D3', r: 211, g: 211, b: 211};
  _colors['lightgreen']           = {hex: '#90EE90', r: 144, g: 238, b: 144};
  _colors['lightpink']            = {hex: '#FFB6C1', r: 255, g: 182, b: 193};
  _colors['lightsalmon']          = {hex: '#FFA07A', r: 255, g: 160, b: 122};
  _colors['lightseagreen']        = {hex: '#20B2AA', r:  32, g: 178, b: 170};
  _colors['lightskyblue']         = {hex: '#87CEFA', r: 135, g: 206, b: 250};
  _colors['lightslategray']       = {hex: '#778899', r: 119, g: 136, b: 153};
  _colors['lightsteelblue']       = {hex: '#B0C4DE', r: 176, g: 196, b: 222};
  _colors['lightyellow']          = {hex: '#FFFFE0', r: 255, g: 255, b: 224};
  _colors['lime']                 = {hex: '#00FF00', r:   0, g: 255, b:   0};
  _colors['limegreen']            = {hex: '#32CD32', r:  50, g: 205, b:  50};
  _colors['linen']                = {hex: '#FAF0E6', r: 250, g: 240, b: 230};
  _colors['magenta']              = {hex: '#FF00FF', r: 255, g:   0, b: 255};
  _colors['maroon']               = {hex: '#800000', r: 128, g:   0, b:   0};
  _colors['mediumaquamarine']     = {hex: '#66CDAA', r: 102, g: 205, b: 170};
  _colors['mediumblue']           = {hex: '#0000CD', r:   0, g:   0, b: 205};
  _colors['mediumorchid']         = {hex: '#BA55D3', r: 186, g:  85, b: 211};
  _colors['mediumpurple']         = {hex: '#9370DB', r: 147, g: 112, b: 219};
  _colors['mediumseagreen']       = {hex: '#3CB371', r:  60, g: 179, b: 113};
  _colors['mediumslateblue']      = {hex: '#7B68EE', r: 123, g: 104, b: 238};
  _colors['mediumspringgreen']    = {hex: '#00FA9A', r:   0, g: 250, b: 154};
  _colors['mediumturquoise']      = {hex: '#48D1CC', r:  72, g: 209, b: 204};
  _colors['mediumvioletred']      = {hex: '#C71585', r: 199, g:  21, b: 133};
  _colors['midnightblue']         = {hex: '#191970', r:  25, g:  25, b: 112};
  _colors['mintcream']            = {hex: '#F5FFFA', r: 245, g: 255, b: 250};
  _colors['mistyrose']            = {hex: '#FFE4E1', r: 255, g: 228, b: 225};
  _colors['moccasin']             = {hex: '#FFE4B5', r: 255, g: 228, b: 181};
  _colors['navajowhite']          = {hex: '#FFDEAD', r: 255, g: 222, b: 173};
  _colors['navy']                 = {hex: '#000080', r:   0, g:   0, b: 128};
  _colors['oldlace']              = {hex: '#FDF5E6', r: 253, g: 245, b: 230};
  _colors['olive']                = {hex: '#808000', r: 128, g: 128, b:   0};
  _colors['olivedrab']            = {hex: '#6B8E23', r: 107, g: 142, b:  35};
  _colors['orange']               = {hex: '#FFA500', r: 255, g: 165, b:   0};
  _colors['orangered']            = {hex: '#FF4500', r: 255, g:  69, b:   0};
  _colors['orchid']               = {hex: '#DA70D6', r: 218, g: 112, b: 214};
  _colors['palegoldenrod']        = {hex: '#EEE8AA', r: 238, g: 232, b: 170};
  _colors['palegreen']            = {hex: '#98FB98', r: 152, g: 251, b: 152};
  _colors['paleturquoise']        = {hex: '#AFEEEE', r: 175, g: 238, b: 238};
  _colors['palevioletred']        = {hex: '#DB7093', r: 219, g: 112, b: 147};
  _colors['papayawhip']           = {hex: '#FFEFD5', r: 255, g: 239, b: 213};
  _colors['peachpuff']            = {hex: '#FFDAB9', r: 255, g: 218, b: 185};
  _colors['peru']                 = {hex: '#CD853F', r: 205, g: 133, b:  63};
  _colors['pink']                 = {hex: '#FFC0CB', r: 255, g: 192, b: 203};
  _colors['plum']                 = {hex: '#DDA0DD', r: 221, g: 160, b: 221};
  _colors['powderblue']           = {hex: '#B0E0E6', r: 176, g: 224, b: 230};
  _colors['purple']               = {hex: '#800080', r: 128, g:   0, b: 128};
  _colors['red']                  = {hex: '#FF0000', r: 255, g:   0, b:   0};
  _colors['rosybrown']            = {hex: '#BC8F8F', r: 188, g: 143, b: 143};
  _colors['royalblue']            = {hex: '#4169E1', r:  65, g: 105, b: 225};
  _colors['saddlebrown']          = {hex: '#8B4513', r: 139, g:  69, b:  19};
  _colors['salmon']               = {hex: '#FA8072', r: 250, g: 128, b: 114};
  _colors['sandybrown']           = {hex: '#F4A460', r: 244, g: 164, b:  96};
  _colors['seagreen']             = {hex: '#2E8B57', r:  46, g: 139, b:  87};
  _colors['seashell']             = {hex: '#FFF5EE', r: 255, g: 245, b: 238};
  _colors['sienna']               = {hex: '#A0522D', r: 160, g:  82, b:  45};
  _colors['silver']               = {hex: '#C0C0C0', r: 192, g: 192, b: 192};
  _colors['skyblue']              = {hex: '#87CEEB', r: 135, g: 206, b: 235};
  _colors['slateblue']            = {hex: '#6A5ACD', r: 106, g:  90, b: 205};
  _colors['slategray']            = {hex: '#708090', r: 112, g: 128, b: 144};
  _colors['snow']                 = {hex: '#FFFAFA', r: 255, g: 250, b: 250};
  _colors['springgreen']          = {hex: '#00FF7F', r:   0, g: 255, b: 127};
  _colors['steelblue']            = {hex: '#4682B4', r:  70, g: 130, b: 180};
  _colors['tan']                  = {hex: '#D2B48C', r: 210, g: 180, b: 140};
  _colors['teal']                 = {hex: '#008080', r:   0, g: 128, b: 128};
  _colors['thistle']              = {hex: '#D8BFD8', r: 216, g: 191, b: 216};
  _colors['tomato']               = {hex: '#FF6347', r: 255, g:  99, b:  71};
  _colors['turquoise']            = {hex: '#40E0D0', r:  64, g: 224, b: 208};
  _colors['violet']               = {hex: '#EE82EE', r: 238, g: 130, b: 238};
  _colors['wheat']                = {hex: '#F5DEB3', r: 245, g: 222, b: 179};
  _colors['white']                = {hex: '#FFFFFF', r: 255, g: 255, b: 255};
  _colors['whitesmoke']           = {hex: '#F5F5F5', r: 245, g: 245, b: 245};
  _colors['yellow']               = {hex: '#FFFF00', r: 255, g: 255, b:   0};
  _colors['yellowgreen']          = {hex: '#9ACD32', r: 154, g: 205, b:  50};

  // Public methods
  public.hex = (color) => {
    return _colors[color.toLowerCase()].hex;
  }

  public.rgb = (color) => {
    return [_colors[color.toLowerCase()].r,
            _colors[color.toLowerCase()].g,
            _colors[color.toLowerCase()].b];
  }

  public.r = (color) => {
    return _colors[color.toLowerCase()].r;
  }

  public.g = (color) => {
    return _colors[color.toLowerCase()].g;
  }

  public.b = (color) => {
    return _colors[color.toLowerCase()].b;
  }

  return public;
})();



// Event Module
const Event = (() => {
  let public = {};   // Object

  // Private attributes
  let _mouseDown      = [];
  let _mouseDownLast = [];
  let _mousePress     = [];
  let _mouseRelease   = [];
  let _mouseX;
  let _mouseY;
  let _keyDown        = [];
  let _keyDownLast   = [];
  let _keyPress       = [];
  let _keyRelease     = [];
  let _cursorX        = 0;
  let _cursorY        = 0;

  // Public methods
  public.setKeyState = (key, state) => {
    _keyDown[key] = state;
  }

  public.setMouseState = (button, state) => {
    _mouseDown[button] = state;
  }

  public.setMousePosition = (x, y) => {
    _mouseX = x;
    _mouseY = y;
  }

  public.updateMouseState = () => {
    for (let k = 0; k < _mouseDown.length; k++) {
      let change        = _mouseDown[k] ^ _mouseDownLast[k];   // Get change of mouse press status (XOR)
      let press         = change &  _mouseDown[k];             // Detect change to press from release
      let release       = change & !_mouseDown[k];             // Detect change to release from press
      _mousePress[k]    = press;                               // Set mousePress status
      _mouseRelease[k]  = release;                             // Set mouseRelease status
      _mouseDownLast[k] = _mouseDown[k];
    }
  }

  public.updateKeyState = () => {
    const CURSOR_LEFT  = 37;
    const CURSOR_UP    = 38;
    const CURSOR_RIGHT = 39;
    const CURSOR_DOWN  = 40;

    for (let k = 0; k < _keyDown.length; k++) {
      let change      = _keyDown[k] ^ _keyDownLast[k];         // Get change of key press status (XOR)
      let press       = change &  _keyDown[k];                 // Detect change to press from release
      let release     = change & !_keyDown[k];                 // Detect change to release from press
      _keyPress[k]    = press;                                 // Set keyPress status
      _keyRelease[k]  = release;                               // Set keyRelease status
      _keyDownLast[k] = _keyDown[k];

      if (_keyDown[CURSOR_RIGHT]) {
        _cursorX = +1                                          // Set +1 to cursorX value
      } else if (_keyDown[CURSOR_LEFT]) {
        _cursorX = -1                                          // Set -1 to cursorX value
      } else {
        _cursorX =  0
      }

      if (_keyDown[CURSOR_DOWN]) {
        _cursorY = +1                                          // Set +1 to cursorY value
      } else if (_keyDown[CURSOR_UP]) {
        _cursorY = -1                                          // Set -1 to cursorY value
      } else {
        _cursorY =  0
      }
    }
  }

  public.isMouseDown = (button) => {
    return (_mouseDown[button] == true);
  }

  public.isMousePress = (button) => {
    return (_mousePress[button] == true);
  }

  public.isMouseRelease = (button) => {
    return (_mouseRelease[button] == true);
  }

  public.getMouseX = () => {
    return (_mouseX);
  }

  public.getMouseY = () => {
    return (_mouseY);
  }

  public.isKeyDown = (key) => {
    return (_keyDown[key] == true);
  }

  public.isKeyPress = (key) => {
    return (_keyPress[key] == true);
  }

  public.isKeyRelease = (key) => {
    return (_keyRelease[key] == true);
  }

  public.getCursorX = () => {
    return (_cursorX);
  }

  public.getCursorY = () => {
    return (_cursorY);
  }

  return public;
})();



// Sequence Module
const Sequence = (() => {
  let public = {};   // Object

  // Private attributes
  const _INIT   = 0;
  let   _number = _INIT;

  // Public methods
  public.next = () => {
    _number += 1;
    return _number
  }

  public.current = () => {
    return _number
  }

  public.reset = () => {
    _number = _INIT;
  }

  return public;
})();



// Store Module
const Store = (() => {
  let public = {};   // Object

  // Private attributes
  let _store = {};

  // Public methods
  public.createImage = (id, width = null, height = null, data = null) => {
    if (! _store[id]) {
      _store[id]        = {};
      _store[id].id     = id;
      _store[id].width  = width;
      _store[id].height = height;
      _store[id].data   = data
      return true;
    } else {
      return false;
    }
  }

  public.setImageProperty = (id, width, height) => {
    if (_store[id]) {
      _store[id].width  = width;
      _store[id].height = height;
    }
  }

  public.setImageData = (id, data) => {
    if (_store[id]) {
      _store[id].data  = data;
    }
  }

  public.getImage = (id) => {
    if (_store[id]) {
      return _store[id];
    } else {
      return null;
    }
  }

  return public;
})();



// Surface Class
class Surface {
  constructor({w = 640, h = 480, bgcolor = 'white', trace = false} = {}) {
    this.canvas = document.createElement('canvas');
    this.canvas.width  = w;
    this.canvas.height = h;
    this.bgcolor       = bgcolor;
  //this.canvas.style.backgroundColor = bgcolor;   // cannot get color data by 'getImageData()'
    this.canvas.style.position = 'absolute';

    this.context = this.canvas.getContext('2d');
    this.clear();
  }
  getCanvas() {
    return this.canvas;
  }
  getContext() {
    return this.context;
  }
  getBgcolor() {
    return this.bgcolor;
  }
  setBgcolor(bgcolor) {
    this.bgcolor = bgcolor;
  }
  clear() {
    this.context.beginPath();
    this.context.rect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = this.bgcolor;
    this.context.fill();
  }
}


// Core Class
class Core {
  constructor({w = 640, h = 480, bgcolor = 'white', trace = false} = {}) {
    this.surface       = new Surface({w: w, h: h, bgcolor: bgcolor, trace: trace});
    this.canvas        = this.surface.getCanvas();
    this.canvas.id     = 'nyle-canvas';
//    this.canvas.width  = w;
//    this.canvas.height = h;
//    this.canvas.style.backgroundColor = bgcolor;
//    this.canvas.style.position = 'absolute';
    this.canvas.style.border = '1px solid';   // show border in main screen (should not set general in Surface instance)
    this.canvas.oncontextmenu = () => {return false;}
    this.context       = this.surface.getContext();

    this.trace         = trace;
    this.startTime     = new Date();
    this.intervalTime  = 16;

    // event handlers
    window.addEventListener('keydown', this.keyDownHandler, false);
    window.addEventListener('keyup',   this.keyUpHandler,   false);

    this.canvas.addEventListener('mousedown', this.mouseDownHandler, false);
    this.canvas.addEventListener('mouseup',   this.mouseUpHandler,   false);
    this.canvas.addEventListener('mousemove', this.mouseMoveHandler, false);
  }

  show() {
    document.body = document.createElement('body');
    document.body.appendChild(this.canvas);
  }

  getScreenWidth() {
    return this.canvas.width;
  }

  setScreenWidth(w) {
    this.canvas.width  = w;
  }

  getScreenHeight() {
    return this.canvas.height;
  }

  setScreenHeight(h) {
    this.canvas.height = h;
  }

  getBgcolor() {
    return this.surface.getBgcolor();
  }

  setBgcolor(bgcolor) {
    this.surface.setBgcolor(bgcolor);
  }

  setFps(val) {
    this.intervalTime = 1000.0 / val
  }

  mouseDownHandler(e) {    // In here, 'this' represents 'canvas'
    Event.setMouseState(e.button, true);
  }

  mouseUpHandler(e) {      // In here, 'this' represents 'canvas'
    Event.setMouseState(e.button, false);
  }

  mouseMoveHandler(e) {    // In here, 'this' represents 'canvas'
    Event.setMousePosition(e.layerX, e.layerY);
  }

  keyDownHandler(e) {      // In here, 'this' represents 'window'
    Event.setKeyState(e.keyCode, true);
  }

  keyUpHandler(e) {        // In here, 'this' represents 'window'
    Event.setKeyState(e.keyCode, false);
  }

  getMouseX() {
    return Event.getMouseX();
  }
  getMouseY() {
    return Event.getMouseY();
  }

  getCursorX() {
    return Event.getCursorX();
  }
  getCursorY() {
    return Event.getCursorY();
  }

  updateState() {
    Event.updateKeyState();
    Event.updateMouseState();
  }

  isKeyDown(key) {
    return Event.isKeyDown(key);
  }

  isKeyPress(key) {
    return Event.isKeyPress(key);
  }

  isKeyRelease(key) {
    return Event.isKeyRelease(key);
  }

  isMouseDown(button) {
    return Event.isMouseDown(button);
  }

  isMousePress(button) {
    return Event.isMousePress(button);
  }

  isMouseRelease(button) {
    return Event.isMouseRelease(button);
  }

  mainloop(interval, func) {
    if (interval == null) interval = this.intervalTime
    this.timer = setInterval(func, interval);
  }

  terminate() {
    clearInterval(this.timer);
  }

  runningTime() {
    let currentTime = new Date();
    return (currentTime.getTime() - this.startTime.getTime());
  }

  // under construction...
  // layer(id) {
  //  // メインキャンバスと同サイズ、透明で軌跡あり
  //  let layer = new Surface({w: this.canvas.width, h: this.canvas.height, bgcolor: 'transparent', trace: true});
  //  return layer;
  //}

  pixel(x, y) {
    let pixel = this.context.getImageData(x, y, 1, 1);
    let c = '#' + ('0' + pixel.data[0].toString(16).toUpperCase()).substr(-2)
                + ('0' + pixel.data[1].toString(16).toUpperCase()).substr(-2)
                + ('0' + pixel.data[2].toString(16).toUpperCase()).substr(-2);
    return c;
  }

  isPixel(x, y, color) {
    let pixel = this.context.getImageData(x, y, 1, 1);
    let c = '#' + ('0' + pixel.data[0].toString(16).toUpperCase()).substr(-2)
                + ('0' + pixel.data[1].toString(16).toUpperCase()).substr(-2)
                + ('0' + pixel.data[2].toString(16).toUpperCase()).substr(-2);
    if (color.substr(0, 1) == '#') {
      return c == color.toUpperCase();
    } else {
      return c == ColorMap.hex(color.toLowerCase());
    }
  }

  clear() {
    this.context.save();
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); 
    this.context.restore();
    this.surface.clear();
  }

  // drawLine
  drawLine(x1, y1, x2, y2, {color = 'black', weight = 2, cap = 'butt', a = 1.0} = {}) {
    this.context.save();
    this.context.globalAlpha = a;
    this.context.lineWidth = weight;
    this.context.lineCap   = cap.toLowerCase();
    this.context.strokeStyle = color;
    this.context.beginPath();
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.stroke();
    this.context.restore();
  }

  // drawRect
  drawRect(x, y, w, h, {color = 'black', fill = false, weight = 2, a = 1.0, round = 0} = {}) {
    this.context.save();
    this.context.globalAlpha = a;
    this.context.lineWidth = weight;

    if (round > 0) {
      this.context.beginPath();
      this.context.moveTo(x, y + round);
      this.context.arc(x     + round, y + h - round, round, Math.PI,       Math.PI * 0.5, true);
      this.context.arc(x + w - round, y + h - round, round, Math.PI * 0.5, 0,             true);
      this.context.arc(x + w - round, y     + round, round, 0,             Math.PI * 1.5, true);
      this.context.arc(x     + round, y     + round, round, Math.PI * 1.5, Math.PI,       true);
      this.context.closePath();
    } else {
      this.context.beginPath();
      this.context.rect(x, y, w, h);
    }

    if (fill) {
      this.context.fillStyle = color;
      this.context.fill();
    } else {
      this.context.strokeStyle = color;
      this.context.stroke();
    }
    this.context.restore();
  }

  // drawCircle
  drawCircle(x, y, r, {color = 'black', fill = false, weight = 2, a = 1.0} = {}) {
    this.context.save()
    this.context.globalAlpha = a;
    this.context.lineWidth = weight;
    this.context.beginPath();
    this.context.arc(x, y, r, 0, Math.PI * 2);
    this.context.closePath();
    if (fill) {
      this.context.fillStyle = color;
      this.context.fill();
    } else {
      this.context.strokeStyle = color;
      this.context.stroke();
    }
    this.context.restore()
  }

  // drawSahpe
  drawShape(points, {weight = 2, cap = 'butt', color = 'black', a = 1.0, close = false, fill = false} = {}) {
    this.context.save();
    this.context.globalAlpha = a;
    this.context.lineWidth = weight;
    this.context.lineCap   = cap.toLowerCase();

    if (cap.toLowerCase() == 'round') {
      this.context.lineJoin  = 'round'
    }

    let vertex = Array.from(points);
    this.context.beginPath();
    this.context.moveTo(vertex[0][0], vertex[0][1]);   // starting point
    for (const v of vertex) {
      this.context.lineTo(v[0], v[1]);
    }
    if (close) {
      this.context.closePath();   // closed shape
    }

    if (fill) {
      this.context.fillStyle = color;
      this.context.fill();
    } else {
      this.context.strokeStyle = color;
      this.context.stroke();
    }
    this.context.restore();
  }

  // drawText
  drawText(x, y, text, {color = 'black', a = 1.0, size = 32, font = 'sans-serif', bold = false, italic = false} = {}) {
    this.context.save()
    this.context.globalAlpha = a;
    let attrBold = '';
    if (bold) {
      attrBold = 'bold';
    }
    let attrItalic = '';
    if (italic) {
      attrItalic = 'italic';
    }
    this.context.font = attrBold + ' ' + attrItalic + ' ' + size + 'px ' + font;
    this.context.fillStyle = color;
    this.context.fillText(text, x, y);
  //this.context.beginPath();   // reset Path
    this.context.restore();
  }

  // loadImage
  loadImage(key, {cx = null, cy = null, cw = null, ch = null, sx = 1.0, sy = 1.0, colorKey = 'white'} = {}) {
    let data = Store.getImage(key).data;
    let w    = Math.floor(Store.getImage(key).width  * sx);
    let h    = Math.floor(Store.getImage(key).height * sy);
    if (cw && ch) {
      w = cw * sx;
      h = ch * sy;
    }

    let keyUniq = key + '_' + Sequence.next().toFixed();
    Store.createImage(keyUniq);
    Store.setImageProperty(keyUniq, w, h);

    this._loadImageA(keyUniq, data, {cx: cx, cy: cy, cw: cw, ch: ch, sx: sx, sy: sy, colorKey: colorKey});

    return {id: keyUniq, width: w, height: h};
  }

  async _loadImageA(key, data, {cx = null, cy = null, cw = null, ch = null, sx = 1.0, sy = 1.0, colorKey = 'white'} = {}) {
    let imagedata = await this._loadImage(data, {cx: cx, cy: cy, cw: cw, ch: ch, sx: sx, sy: sy, colorKey: colorKey});
    Store.setImageData(key, imagedata);
    return imagedata;   // Promise
  }

  _loadImage(data, {cx = null, cy = null, cw = null, ch = null, sx = 1.0, sy = 1.0, colorKey = 'white'} = {}) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.onload = e => {
        let imagedata = this._editImage(img, {cx: cx, cy: cy, cw: cw, ch: ch, sx: sx, sy: sy, colorKey: colorKey});
        resolve(imagedata);
      }
      img.src = data;
    });
  }

  _editImage(img, {cx = null, cy = null, cw = null, ch = null, sx = 1.0, sy = 1.0, colorKey = 'white'} = {}) {
    let w;
    let h;
    if (cx == null || cy == null || cw == null || ch == null) {
      w = img.width  * sx;
      h = img.height * sy;
    } else {
      w = cw * sx;
      h = ch * sy;
    }

    let surface = new Surface({w: w, h: h, bgcolor: 'transparent'});
    let canvas  = surface.canvas;
    let context = surface.context;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save();
    context.scale(sx, sy);
    if (cx == null || cy == null || cw == null || ch == null) {
      context.drawImage(img, 0, 0);
    } else {
      context.drawImage(img, cx, cy, cw, ch, 0, 0, cw, ch);
    }
    context.restore();
    let imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    // colorKey(暫定定期に white固定)■
    for (let p = 0; p < imgData.width * imgData.height * 4; p+=4) {
      if (imgData.data[p + 0] == 255 &&
          imgData.data[p + 1] == 255 &&
          imgData.data[p + 2] == 255) {
        imgData.data[p + 3] = 0;   // α = 0
      }
    }

    // NG: due to ignore alpha composition when use 'putImageData()'
    // OK: have to create new Image created by toDataURL method from ImageData
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.putImageData(imgData, 0, 0);

    let imgNew = new Image();
    imgNew.src = canvas.toDataURL();

    return imgNew;
  }

  loadImageTiles(key, m, n, {sx = 1.0, sy = 1.0, colorKey = 'white'} = {}) {
    let data    = Store.getImage(key).data;
    let w       = Math.floor(Store.getImage(key).width  / m * sx);
    let h       = Math.floor(Store.getImage(key).height / n * sy);
    let seq     = Sequence.next().toFixed();
    let keyList = [];

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        let keyUniq = key + '_' + seq + '_' + i.toFixed() + '_' + j.toFixed();
        Store.createImage(keyUniq);
        Store.setImageProperty(keyUniq, w, h);
        keyList.push(keyUniq);
      }
    }

    this._loadImageTilesA(keyList, data, m, n, {sx: sx, sy: sy, colorKey: colorKey});

    let propertyList = [];
    for (let j = 0; j < n; j++) {
      for (let i = 0; i < m; i++) {
        propertyList.push({id: keyList[i * n + j], width: w, height: h});
      }
    }
    return propertyList;
  }

  async _loadImageTilesA(keyList, data, m, n, {sx = 1.0, sy = 1.0, colorKey = 'white'} = {}) {
    let imageList = await this._loadImageTiles(data, m, n, {sx: sx, sy: sy, colorKey: colorKey});
    for (let i = 0; i < keyList.length; i++) {
      Store.setImageData(keyList[i], imageList[i]);
    }
    return imageList;   // Promise
  }

  _loadImageTiles(data, m, n, {sx = 1.0, sy = 1.0, colorKey = 'white'} = {}) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.onload = e => {
        let list = this._divideImageTiles(img, m, n, {sx: sx, sy: sy, colorKey: colorKey});
        resolve(list);
      }
      img.src = data;
    })
    return list;
  }

  _divideImageTiles(img, m, n, {sx = 1.0, sy = 1.0, colorKey = 'white'} = {}) {
    let w       = Math.floor(img.width  / m);
    let h       = Math.floor(img.height / n);
    let surface = new Surface({w: w * sx, h: h * sy, bgcolor: 'transparent'});   // 拡大率は？
    let canvas  = surface.canvas;
    let context = surface.context;
    let imgList = [];

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.save();
        context.scale(sx, sy);
        context.drawImage(img, w * i, h * j, w, h, 0, 0, w, h);
        let imgData    = context.getImageData(0, 0, w * sx, h * sy);
        context.restore();

        // colorKey(暫定定期に white固定)■
        for (let p = 0; p < imgData.data.length; p += 4) {
          if (imgData.data[p + 0] == 255 &&
              imgData.data[p + 1] == 255 &&
              imgData.data[p + 2] == 255) {
            imgData.data[p + 3] = 0;   // α = 0
          }
        }

        // NG: due to ignore alpha composition when use 'putImageData()'
        // OK: have to create new Image created by toDataURL method from ImageData
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.putImageData(imgData, 0, 0);

        let imgNew = new Image();
        imgNew.src = canvas.toDataURL();
        imgList.push(imgNew);
      }
    }
    return imgList;
  }

  drawImage(x, y, id, {a = 1.0, pos = 'corner'} = {}) {
    let image = Store.getImage(id);
    this.context.save()
    this.context.globalAlpha = a;   // it is possible to specify 'alpha' for image
    if (pos.toLowerCase() == 'center') {
      this.context.drawImage(image.data, x - image.width / 2, y - image.height / 2);
    } else {
      this.context.drawImage(image.data, x, y);
    }
    this.context.restore()
  }

  // under construction...
  //loadSound(file) {
  //  let sound = new Audio();
  //  sound.src = file;
  //  return sound;
  //}

  // under construction...
  //playSound(sound) {
  //  console.log(sound);
  //  sound.currentTime = 0;
  //  sound.play();
  //}

  colorRGB(color) {
    return ColorMap.rgb(color);
  }

  colorHex(color) {
    return ColorMap.hex(color);
  }

  translate(x, y) {
    this.context.translate(x, y);
  }

  rotate(th) {
    this.context.rotate(th);
  }

  scale(rx, ry) {
    this.context.scale(rx, ry);
  }

  save() {
    this.context.save();
  }

  restore() {
    this.context.restore();
  }
}



Opal.eval(`
  # -------------------------------------
  #  DXRuby section
  # -------------------------------------
  module DX
    # -- Mouse
    M_LBUTTON   = 0
    M_MBUTTON   = 1
    M_RBUTTON   = 2
    # -- Color
    C_BLACK     = [255,   0,   0,   0]
    C_RED       = [255, 255,   0,   0]
    C_GREEN     = [255,   0, 255,   0]
    C_BLUE      = [255,   0,   0, 255]
    C_YELLOW    = [255, 255, 255,   0]
    C_CYAN      = [255,   0, 255, 255]
    C_MAGENTA   = [255, 255,   0, 255]
    C_WHITE     = [255, 255, 255, 255]
    # -- Key
    K_SPACE     =  32
    K_BACK      =   8
    K_BACKSPACE =   8
    K_TAB       =   9
    K_RETURN    =  13
    K_ESCAPE    =  27
    K_END       =  35
    K_HOME      =  36
    K_LEFT      =  37
    K_UP        =  38
    K_RIGHT     =  39
    K_DOWN      =  40
    K_PGUP      =  33
    K_PGDN      =  34
    K_INSERT    =  45
    K_DELETE    =  46
    K_F1        = 112
    K_F2        = 113
    K_F3        = 114
    K_F4        = 115
    K_F5        = 116
    K_F6        = 117
    K_F7        = 118
    K_F8        = 119
    K_F9        = 120
    K_F10       = 121
    K_F11       = 122
    K_F12       = 123
    K_LSHIFT    =  16
    K_RSHIFT    =  16
    K_LCONTROL  =  17
    K_RCONTROL  =  17
    K_LALT      =  18
    K_RALT      =  18
    K_LWIN      =  91
    K_RWIN      =  91
    K_0         =  48
    K_1         =  49
    K_2         =  50
    K_3         =  51
    K_4         =  52
    K_5         =  53
    K_6         =  54
    K_7         =  55
    K_8         =  56
    K_9         =  57
    K_A         =  65
    K_B         =  66
    K_C         =  67
    K_D         =  68
    K_E         =  69
    K_F         =  70
    K_G         =  71
    K_H         =  72
    K_I         =  73
    K_J         =  74
    K_K         =  75
    K_L         =  76
    K_M         =  77
    K_N         =  78
    K_O         =  79
    K_P         =  80
    K_Q         =  81
    K_R         =  82
    K_S         =  83
    K_T         =  84
    K_U         =  85
    K_V         =  86
    K_W         =  87
    K_X         =  88
    K_Y         =  89
    K_Z         =  90

    # utilities for internal
    def self._conv_color(color)
      # [r, g, b]    → [1.0, "rgba(r, g, b, 255)"]
      # [a, r, g, b] → [a,   "rgba(r, g, b, a)"]
      return [1.0,                "rgb(#{color[0]}, #{color[1]}, #{color[2]})"] if color.size == 3
      return [(color[0] / 255.0), "rgb(#{color[1]}, #{color[2]}, #{color[3]})"] if color.size == 4
    end

    class << self
      attr_reader :core
    end
    @core = Native(\`new Core({w: 640, h: 480, bgcolor: 'black', trace: false})\`)
  end

  module Window
    module_function def loop(&block)
      DX::core.show()                           # show canvas for DX
      DX::core.mainloop(nil) do                 # link with fps value
        DX::core.updateState()
        DX::core.clear() unless DX::core.trace
        DX::core.save()
        block.call
        DX::core.restore()
      end
    end

    module_function def close
      DX::core.terminate();
    end

    module_function def width
      DX::core.getScreenWidth()
    end

    module_function def height
      DX::core.getScreenHeight()
    end

    #module_function def bgcolor
    #  DX::core.getBgcolor()   // "rgb(r, g, b)" 形式
    #end

    module_function def width=(w)
      DX::core.setScreenWidth(w)
    end

    module_function def height=(h)
      DX::core.setScreenHeight(h)
    end

    module_function def bgcolor=(bgcolor)
      a, bgcolor = DX::_conv_color(bgcolor)
      DX::core.setBgcolor(bgcolor)
    end

    module_function def fps=(val)
      DX::core.setFps(val)
    end

    module_function def running_time
      DX::core.runningTime()
    end

    module_function def draw_line(x1, y1, x2, y2, color)
      a, color = DX::_conv_color(color)
      DX::core.drawLine(x1, y1, x2, y2, {color: color, a: a, weight: 2})
    end

    module_function def draw_box(x1, y1, x2, y2, color)
      a, color = DX::_conv_color(color)
      DX::core.drawRect(x1, y1, (x2 - x1), (y2 - y1), {color: color, a: a, fill: false, weight: 2})
    end

    module_function def draw_box_fill(x1, y1, x2, y2, color)
      a, color = DX::_conv_color(color)
      DX::core.drawRect(x1, y1, (x2 - x1), (y2 - y1), {color: color, a: a, fill: true, weight: 2})
    end

    module_function def draw_circle(x, y, r, color)
      a, color = DX::_conv_color(color)
      DX::core.drawCircle(x, y, r, {color: color, a: a, fill: false, weight: 2})
    end

    module_function def draw_circle_fill(x, y, r, color)
      a, color = DX::_conv_color(color)
      DX::core.drawCircle(x, y, r, {color: color, a: a, fill: true, weight: 2})
    end

    module_function def draw_pixel(x, y, color)
      a, color = DX::_conv_color(color)
      DX::core.drawCircle(x, y, 1, {color: color, a: a, fill: true, weight: 1})
    end

    module_function def draw_font(x, y, string, font, color: DX::C_WHITE)
      a, color = DX::_conv_color(color)
      DX::core.drawText(x, y, string, {color: color, a: a, size: font.size, font: font.font_name, bold: font.weight, italic: font.italic})
    end

    module_function def draw(x, y, image)
      DX::core.drawImage(x, y, image.id)
    end

    module_function def draw_scale(x, y, image, scale_x, scale_y, center_x = nil, center_y = nil)
      center_x = (center_x ? center_x : image.width  / 2)   # nilの場合は画像の中心座標x(画像左上からの相対値)
      center_y = (center_y ? center_y : image.height / 2)   # nilの場合は画像の中心座標y(画像左上からの相対値)
      self.draw_ex(x, y, image, {scale_x: scale_x, scale_y: scale_y, center_x: center_x, center_y: center_y})
    end

    module_function def draw_rot(x, y, image, angle, center_x = nil, center_y = nil)
      center_x = (center_x ? center_x : image.width  / 2)   # nilの場合は画像の中心座標x(画像左上からの相対値)
      center_y = (center_y ? center_y : image.height / 2)   # nilの場合は画像の中心座標y(画像左上からの相対値)
      self.draw_ex(x, y, image, {angle: angle, center_x: center_x, center_y: center_y})
    end

    module_function def draw_ex(x, y, image, center_x: image.width/2, center_y: image.height/2, scale_x: 1.0, scale_y: 1.0, angle: 0.0, alpha: 255)
      center_x = (center_x ? center_x : image.width  / 2)   # nilの場合は画像の中心座標x(画像左上からの相対値)
      center_y = (center_y ? center_y : image.height / 2)   # nilの場合は画像の中心座標y(画像左上からの相対値)
      DX::core.save()
      DX::core.translate(x + center_x, y + center_y)
      DX::core.rotate(angle / 180.0 * Math::PI)
      DX::core.scale(scale_x, scale_y)
      DX::core.drawImage(-center_x, -center_y, image.id, {a: alpha / 255.0})
      DX::core.restore()
    end
  end

  module Input
    module_function def x
      DX::core.getCursorX()
    end
    module_function def y
      DX::core.getCursorY()
    end
    module_function def mouse_x
      DX::core.getMouseX()
    end
    module_function def mouse_y
      DX::core.getMouseY()
    end
    module_function def key_down?(key)
      DX::core.isKeyDown(key)
    end
    module_function def key_push?(key)
      DX::core.isKeyPress(key)
    end
    module_function def key_release?(key)
      DX::core.isKeyRelease(key)
    end
    module_function def mouse_down?(button)
      DX::core.isMouseDown(button)
    end
    module_function def mouse_push?(button)
      DX::core.isMousePress(button)
    end
    module_function def mouse_release?(button)
      DX::core.isMouseRelease(button)
    end

    # only use snake case as aliases for method names (not use chamel case)
    alias_method :mouse_pos_x, :mouse_x
    alias_method :mouse_pos_y, :mouse_y
    module_function :mouse_pos_x
    module_function :mouse_pos_y
  end

  class Font
    attr_reader :size, :font_name, :weight, :italic
    def initialize(size, font_name = "sans-serif", weight: false, italic: false)
      @size      = size
      @font_name = font_name
      @weight    = weight
      @italic    = italic
    end
    def self.default
      self.new(24)
    end
  end

  class Image
    attr_reader :id, :width, :height
    def initialize(id, width, height)
      @id     = id
      @width  = width
      @height = height
    end

    def self.load(id, x = nil, y = nil, width = nil, height = nil)
      image = DX::core.loadImage(id, {cx: x, cy: y, cw: width, ch: height})
      return self.new(image[:id], image[:width], image[:height])
    end

    def self.load_tiles(id, xcount, ycount)
      image_list = []
      images = DX::core.loadImageTiles(id, xcount, ycount)
      images.each do |x|
        image_list << self.new(x[:id], x[:width], x[:height])
      end
      return image_list
    end

    def set_color_key(color)
      # dummy
      return self
    end
  end



  # -------------------------------------
  #  Nyle section
  # -------------------------------------
  module Nyle
    @__table_buttons = {
      :LEFT   => 0,
      :L      => 0,
      :MIDDLE => 1,
      :M      => 1,
      :RIGHT  => 2,
      :R      => 2
    }

    @__table_keys = {
      :SPACE     =>  32,
      :BACKSPACE =>   8,
      :TAB       =>   9,
      :RETURN    =>  13,
      :ESCAPE    =>  27,
      :END       =>  35,
      :HOME      =>  36,
      :LEFT      =>  37,
      :UP        =>  38,
      :RIGHT     =>  39,
      :DOWN      =>  40,
      :PAGEUP    =>  33,
      :PAGEDOWN  =>  34,
      :INSERT    =>  45,
      :DELETE    =>  46,
      :F1        => 112,
      :F2        => 113,
      :F3        => 114,
      :F4        => 115,
      :F5        => 116,
      :F6        => 117,
      :F7        => 118,
      :F8        => 119,
      :F9        => 120,
      :F10       => 121,
      :F11       => 122,
      :F12       => 123,
      :SHIFT     =>  16,
      :CONTROL   =>  17,
      :ALT       =>  18,
      :META      =>  91,
      :_0        =>  48,
      :_1        =>  49,
      :_2        =>  50,
      :_3        =>  51,
      :_4        =>  52,
      :_5        =>  53,
      :_6        =>  54,
      :_7        =>  55,
      :_8        =>  56,
      :_9        =>  57,
      :A         =>  65,
      :B         =>  66,
      :C         =>  67,
      :D         =>  68,
      :E         =>  69,
      :F         =>  70,
      :G         =>  71,
      :H         =>  72,
      :I         =>  73,
      :J         =>  74,
      :K         =>  75,
      :L         =>  76,
      :M         =>  77,
      :N         =>  78,
      :O         =>  79,
      :P         =>  80,
      :Q         =>  81,
      :R         =>  82,
      :S         =>  83,
      :T         =>  84,
      :U         =>  85,
      :V         =>  86,
      :W         =>  87,
      :X         =>  88,
      :Y         =>  89,
      :Z         =>  90
    }

    @nyle = nil

    # for Screen class
    class << self
      private def _set_nyle(nyle)
        @nyle = nyle
      end
    end

    # for module_functions
    class << self
      private def _table_keys(value)
        return @__table_keys[value]
      end
      private def _table_buttons(value)
        return @__table_buttons[value]
      end
    end

    # for image(property)
    Image = Struct.new(:id, :width, :height)

    # wrapper
    module_function def cr
      @nyle.context
    end

    module_function def draw_line(x1, y1, x2, y2, color: 'black', weight: 2, cap: 'butt', a: 1.0)
      @nyle.drawLine(x1, y1, x2, y2, {color: color, weight: weight, cap: cap, a: a})
    end

    module_function def draw_rect(x, y, w, h, color: 'black', fill: false, weight: 2, a: 1.0, round:0)
      @nyle.drawRect(x, y, w, h, {color: color, fill: fill, weight: weight, a: a, round: round})
    end

    module_function def draw_circle(x, y, r, color: 'black', fill: false, weight: 2, a: 1.0)
      @nyle.drawCircle(x, y, r, {color: color, fill: fill, weight: weight, a: a})
    end

    module_function def draw_shape(points, weight: 2, cap: 'butt', color: 'black', a: 1.0, close: false, fill: false)
      @nyle.drawShape(points, {weight: weight, cap: cap, color: color, a: a, close: close, fill: fill})
    end

    module_function def draw_text(x, y, text, color: 'black', a: 1.0, size: 32, font: 'sans-serif', bold: false, italic: false)
      @nyle.drawText(x, y, text, {color: color, a: a, size: size, font: font, bold: bold, italic: italic})
    end

    module_function def draw_image(x, y, image, pos: :CORNER, a: 1.0)
      @nyle.drawImage(x, y, image.id, {pos: pos, a: a})
    end

    module_function def load_image(id, cx: nil, cy: nil, cw: nil, ch: nil, sx: 1.0, sy: 1.0, color_key: :WHITE)
      image = @nyle.loadImage(id, {cx: cx, cy: cy, cw: cw, ch: ch, sx: sx, sy: sy, color_key: color_key})
      return Nyle::Image.new(image[:id], image[:width], image[:height])
    end

    module_function def load_image_tiles(id, m, n, sx: 1.0, sy: 1.0, color_key: :WHITE)
      images = @nyle.loadImageTiles(id, m, n, {sx: sx, sy: sy, color_key: color_key})
      list_images =  Array.new(m).map{ Array.new(n) }   # 2D Array
      m.times do |i|
        n.times do |j|
          index = j * m + i
          list_images[i][j] = Nyle::Image.new(images[index][:id], images[index][:width], images[index][:height])
        end
      end
      return list_images
    end

    # module_function def load_sound(*args)       ; @nyle.loadSound(*args)   ; end
    # module_function def play_sound(*args)       ; @nyle.playSound(*args)   ; end

    module_function def pixel(x, y)             ; @nyle.pixel(x, y)            ; end
    module_function def pixel?(x, y, color)     ; @nyle.isPixel(x, y, color)   ; end

    module_function def mouse_x                 ; @nyle.getMouseX()            ; end
    module_function def mouse_y                 ; @nyle.getMouseY()            ; end
    module_function def cursor_x                ; @nyle.getCursorX()           ; end
    module_function def cursor_y                ; @nyle.getCursorY()           ; end

    module_function def mouse_down?(button)     ; @nyle.isMouseDown(_table_buttons(button))     ; end
    module_function def mouse_press?(button)    ; @nyle.isMousePress(_table_buttons(button))    ; end
    module_function def mouse_release?(button)  ; @nyle.isMouseRelease(_table_buttons(button))  ; end

    module_function def key_down?(key)          ; @nyle.isKeyDown(_table_keys(key))             ; end
    module_function def key_press?(key)         ; @nyle.isKeyPress(_table_keys(key))            ; end
    module_function def key_release?(key)       ; @nyle.isKeyRelease(_table_keys(key))          ; end


    module_function def translate(x, y)         ; @nyle.translate(x, y)     ; end
    module_function def rotate(th)              ; @nyle.rotate(th)          ; end
    module_function def scale(rx, ry)           ; @nyle.scale(rx, ry)       ; end
    module_function def save
      @nyle.save()
      yield
      @nyle.restore()
    end

    module_function def clear                   ; @nyle.clear()             ; end
    module_function def running_time            ; @nyle.runningTime()       ; end
    module_function def quit                    ; @nyle.terminate()         ; end

    module_function def screen_width            ; @nyle.getScreenWidth()    ; end
    module_function def screen_height           ; @nyle.getScreenHeight()   ; end

    module_function def color_info_hex(color)   ; @nyle.colorHex(color)     ; end
    module_function def color_info_rgb(color)   ; @nyle.colorRGB(color)     ; end

    # alias
    alias_method :w, :screen_width
    alias_method :h, :screen_height
    module_function :w
    module_function :h

    # syntax sugar
    module_function def create_screen(w = 640, h = 480, bgcolor: :WHITE, trace: false)
      s = Screen.new(w, h, {bgcolor: bgcolor, trace: trace})
      s.extend(Nyle)
    end

    # Screen
    class Screen
      def initialize(w = 640, h = 480, bgcolor: :WHITE, trace: false)
        @nyle = Native(\`new Core({w: w, h: h, bgcolor: bgcolor, trace: trace})\`)
        @nyle.show()   # Nyle用canvas表示
        nyle = @nyle
        p nyle
        Nyle.module_eval { _set_nyle(nyle) }
        # cannot use instance variable(@nyle) in module_eval, so use local variable(nyle)
        @width  = w
        @height = h
      end

      def start(interval = 16)
        self.setup
        self.show_all(interval)
      end

      private def show_all(interval = 16)
        @nyle.mainloop(interval) do
          Nyle.module_eval {
             @nyle.updateState
          }
          @nyle.clear unless @nyle.trace
          @nyle.save()      # 追加
          self.update
          self.draw
          @nyle.restore()   # 追加
        end
      end

      # abstract
      def setup  ; end
      def draw   ; end
      def update ; end
    end

  end
`);

