//  'Nyle-canvas'
//
//  Copyright (c) 2019 Koki Kitamura
//  Released under the MIT license
//  https://opensource.org/licenses/mit-license.php

class JsSurface {
  constructor({w = 640, h = 480, bgcolor = 'white', trace = false} = {}) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = w;
    this.canvas.height = h;
  //this.canvas.style.backgroundColor = bgcolor;   // cannot get color data by 'getImageData()'
    this.canvas.style.position = 'absolute';

    this.context = this.canvas.getContext('2d');
    this.bgcolor = bgcolor;
    this.clear();
  }
  canvas() {
    return this.canvas;
  }
  context() {
    return this.context;
  }
  clear() {
    this.context.beginPath();
    this.context.rect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = this.bgcolor;
    this.context.fill();
  }
}

class JsNyle {
  constructor({w = 640, h = 480, bgcolor = 'white', trace = false} = {}) {
    this.surface = new JsSurface({w: w, h: h, bgcolor: bgcolor, trace: trace});
    this.canvas = this.surface.canvas;
    this.canvas.id = 'nyle_canvas';
    this.canvas.width = w;
    this.canvas.height = h;
    this.canvas.style.backgroundColor = bgcolor;
    this.canvas.style.position = 'absolute';
    this.canvas.style.border = '1px solid';
    this.canvas.oncontextmenu = function () {return false;}

    // document.write("<body></body>");
    document.body = document.createElement('body');
    document.body.appendChild(this.canvas);

    this.context    = this.surface.context;

    this.trace      = trace;
    this.start_time = new Date();

    this.color_map  = this.color_map();
  //console.log(this.color_map);

    this.imagestore   = {};

    // class variables for event handlers of window and canvas
    JsNyle.mouse_down = [];
    JsNyle.mouse_x;
    JsNyle.mouse_y;

    JsNyle.key_down   = [];

    // event handlers
    window.addEventListener('keydown', this.key_down_handler, false);
    window.addEventListener('keyup',   this.key_up_handler,   false);

    this.canvas.addEventListener('mousedown', this.mouse_down_handler, false);
    this.canvas.addEventListener('mouseup',   this.mouse_up_handler,   false);
    this.canvas.addEventListener('mousemove', this.mouse_move_handler, false);
  }

  color_map() {
    let colors = {}
    colors['aliceblue']            = {hex: '#F0F8FF', r: 240, g: 248, b: 255}
    colors['antiquewhite']         = {hex: '#FAEBD7', r: 250, g: 235, b: 215}
    colors['aqua']                 = {hex: '#00FFFF', r:   0, g: 255, b: 255}
    colors['aquamarine']           = {hex: '#7FFFD4', r: 127, g: 255, b: 212}
    colors['azure']                = {hex: '#F0FFFF', r: 240, g: 255, b: 255}
    colors['beige']                = {hex: '#F5F5DC', r: 245, g: 245, b: 220}
    colors['bisque']               = {hex: '#FFE4C4', r: 255, g: 228, b: 196}
    colors['black']                = {hex: '#000000', r:   0, g:   0, b:   0}
    colors['blanchedalmond']       = {hex: '#FFEBCD', r: 255, g: 235, b: 205}
    colors['blue']                 = {hex: '#0000FF', r:   0, g:   0, b: 255}
    colors['blueviolet']           = {hex: '#8A2BE2', r: 138, g:  43, b: 226}
    colors['brown']                = {hex: '#A52A2A', r: 165, g:  42, b:  42}
    colors['burlywood']            = {hex: '#DEB887', r: 222, g: 184, b: 135}
    colors['cadetblue']            = {hex: '#5F9EA0', r:  95, g: 158, b: 160}
    colors['chartreuse']           = {hex: '#7FFF00', r: 127, g: 255, b:   0}
    colors['chocolate']            = {hex: '#D2691E', r: 210, g: 105, b:  30}
    colors['coral']                = {hex: '#FF7F50', r: 255, g: 127, b:  80}
    colors['cornflowerblue']       = {hex: '#6495ED', r: 100, g: 149, b: 237}
    colors['cornsilk']             = {hex: '#FFF8DC', r: 255, g: 248, b: 220}
    colors['crimson']              = {hex: '#DC143C', r: 220, g:  20, b:  60}
    colors['cyan']                 = {hex: '#00FFFF', r:   0, g: 255, b: 255}
    colors['darkblue']             = {hex: '#00008B', r:   0, g:   0, b: 139}
    colors['darkcyan']             = {hex: '#008B8B', r:   0, g: 139, b: 139}
    colors['darkgoldenrod']        = {hex: '#B8860B', r: 184, g: 134, b:  11}
    colors['darkgray']             = {hex: '#A9A9A9', r: 169, g: 169, b: 169}
    colors['darkgreen']            = {hex: '#006400', r:   0, g: 100, b:   0}
    colors['darkkhaki']            = {hex: '#BDB76B', r: 189, g: 183, b: 107}
    colors['darkmagenta']          = {hex: '#8B008B', r: 139, g:   0, b: 139}
    colors['darkolivegreen']       = {hex: '#556B2F', r:  85, g: 107, b:  47}
    colors['darkorange']           = {hex: '#FF8C00', r: 255, g: 140, b:   0}
    colors['darkorchid']           = {hex: '#9932CC', r: 153, g:  50, b: 204}
    colors['darkred']              = {hex: '#8B0000', r: 139, g:   0, b:   0}
    colors['darksalmon']           = {hex: '#E9967A', r: 233, g: 150, b: 122}
    colors['darkseagreen']         = {hex: '#8FBC8F', r: 143, g: 188, b: 143}
    colors['darkslateblue']        = {hex: '#483D8B', r:  72, g:  61, b: 139}
    colors['darkslategray']        = {hex: '#2F4F4F', r:  47, g:  79, b:  79}
    colors['darkturquoise']        = {hex: '#00CED1', r:   0, g: 206, b: 209}
    colors['darkviolet']           = {hex: '#9400D3', r: 148, g:   0, b: 211}
    colors['deeppink']             = {hex: '#FF1493', r: 255, g:  20, b: 147}
    colors['deepskyblue']          = {hex: '#00BFFF', r:   0, g: 191, b: 255}
    colors['dimgray']              = {hex: '#696969', r: 105, g: 105, b: 105}
    colors['dodgerblue']           = {hex: '#1E90FF', r:  30, g: 144, b: 255}
    colors['firebrick']            = {hex: '#B22222', r: 178, g:  34, b:  34}
    colors['floralwhite']          = {hex: '#FFFAF0', r: 255, g: 250, b: 240}
    colors['forestgreen']          = {hex: '#228B22', r:  34, g: 139, b:  34}
    colors['fuchsia']              = {hex: '#FF00FF', r: 255, g:   0, b: 255}
    colors['gainsboro']            = {hex: '#DCDCDC', r: 220, g: 220, b: 220}
    colors['ghostwhite']           = {hex: '#F8F8FF', r: 248, g: 248, b: 255}
    colors['gold']                 = {hex: '#FFD700', r: 255, g: 215, b:   0}
    colors['goldenrod']            = {hex: '#DAA520', r: 218, g: 165, b:  32}
    colors['gray']                 = {hex: '#808080', r: 128, g: 128, b: 128}
    colors['green']                = {hex: '#008000', r:   0, g: 128, b:   0}
    colors['greenyellow']          = {hex: '#ADFF2F', r: 173, g: 255, b:  47}
    colors['honeydew']             = {hex: '#F0FFF0', r: 240, g: 255, b: 240}
    colors['hotpink']              = {hex: '#FF69B4', r: 255, g: 105, b: 180}
    colors['indianred']            = {hex: '#CD5C5C', r: 205, g:  92, b:  92}
    colors['indigo']               = {hex: '#4B0082', r:  75, g:   0, b: 130}
    colors['ivory']                = {hex: '#FFFFF0', r: 255, g: 255, b: 240}
    colors['khaki']                = {hex: '#F0E68C', r: 240, g: 230, b: 140}
    colors['lavender']             = {hex: '#E6E6FA', r: 230, g: 230, b: 250}
    colors['lavenderblush']        = {hex: '#FFF0F5', r: 255, g: 240, b: 245}
    colors['lawngreen']            = {hex: '#7CFC00', r: 124, g: 252, b:   0}
    colors['lemonchiffon']         = {hex: '#FFFACD', r: 255, g: 250, b: 205}
    colors['lightblue']            = {hex: '#ADD8E6', r: 173, g: 216, b: 230}
    colors['lightcoral']           = {hex: '#F08080', r: 240, g: 128, b: 128}
    colors['lightcyan']            = {hex: '#E0FFFF', r: 224, g: 255, b: 255}
    colors['lightgoldenrodyellow'] = {hex: '#FAFAD2', r: 250, g: 250, b: 210}
    colors['lightgray']            = {hex: '#D3D3D3', r: 211, g: 211, b: 211}
    colors['lightgreen']           = {hex: '#90EE90', r: 144, g: 238, b: 144}
    colors['lightpink']            = {hex: '#FFB6C1', r: 255, g: 182, b: 193}
    colors['lightsalmon']          = {hex: '#FFA07A', r: 255, g: 160, b: 122}
    colors['lightseagreen']        = {hex: '#20B2AA', r:  32, g: 178, b: 170}
    colors['lightskyblue']         = {hex: '#87CEFA', r: 135, g: 206, b: 250}
    colors['lightslategray']       = {hex: '#778899', r: 119, g: 136, b: 153}
    colors['lightsteelblue']       = {hex: '#B0C4DE', r: 176, g: 196, b: 222}
    colors['lightyellow']          = {hex: '#FFFFE0', r: 255, g: 255, b: 224}
    colors['lime']                 = {hex: '#00FF00', r:   0, g: 255, b:   0}
    colors['limegreen']            = {hex: '#32CD32', r:  50, g: 205, b:  50}
    colors['linen']                = {hex: '#FAF0E6', r: 250, g: 240, b: 230}
    colors['magenta']              = {hex: '#FF00FF', r: 255, g:   0, b: 255}
    colors['maroon']               = {hex: '#800000', r: 128, g:   0, b:   0}
    colors['mediumaquamarine']     = {hex: '#66CDAA', r: 102, g: 205, b: 170}
    colors['mediumblue']           = {hex: '#0000CD', r:   0, g:   0, b: 205}
    colors['mediumorchid']         = {hex: '#BA55D3', r: 186, g:  85, b: 211}
    colors['mediumpurple']         = {hex: '#9370DB', r: 147, g: 112, b: 219}
    colors['mediumseagreen']       = {hex: '#3CB371', r:  60, g: 179, b: 113}
    colors['mediumslateblue']      = {hex: '#7B68EE', r: 123, g: 104, b: 238}
    colors['mediumspringgreen']    = {hex: '#00FA9A', r:   0, g: 250, b: 154}
    colors['mediumturquoise']      = {hex: '#48D1CC', r:  72, g: 209, b: 204}
    colors['mediumvioletred']      = {hex: '#C71585', r: 199, g:  21, b: 133}
    colors['midnightblue']         = {hex: '#191970', r:  25, g:  25, b: 112}
    colors['mintcream']            = {hex: '#F5FFFA', r: 245, g: 255, b: 250}
    colors['mistyrose']            = {hex: '#FFE4E1', r: 255, g: 228, b: 225}
    colors['moccasin']             = {hex: '#FFE4B5', r: 255, g: 228, b: 181}
    colors['navajowhite']          = {hex: '#FFDEAD', r: 255, g: 222, b: 173}
    colors['navy']                 = {hex: '#000080', r:   0, g:   0, b: 128}
    colors['oldlace']              = {hex: '#FDF5E6', r: 253, g: 245, b: 230}
    colors['olive']                = {hex: '#808000', r: 128, g: 128, b:   0}
    colors['olivedrab']            = {hex: '#6B8E23', r: 107, g: 142, b:  35}
    colors['orange']               = {hex: '#FFA500', r: 255, g: 165, b:   0}
    colors['orangered']            = {hex: '#FF4500', r: 255, g:  69, b:   0}
    colors['orchid']               = {hex: '#DA70D6', r: 218, g: 112, b: 214}
    colors['palegoldenrod']        = {hex: '#EEE8AA', r: 238, g: 232, b: 170}
    colors['palegreen']            = {hex: '#98FB98', r: 152, g: 251, b: 152}
    colors['paleturquoise']        = {hex: '#AFEEEE', r: 175, g: 238, b: 238}
    colors['palevioletred']        = {hex: '#DB7093', r: 219, g: 112, b: 147}
    colors['papayawhip']           = {hex: '#FFEFD5', r: 255, g: 239, b: 213}
    colors['peachpuff']            = {hex: '#FFDAB9', r: 255, g: 218, b: 185}
    colors['peru']                 = {hex: '#CD853F', r: 205, g: 133, b:  63}
    colors['pink']                 = {hex: '#FFC0CB', r: 255, g: 192, b: 203}
    colors['plum']                 = {hex: '#DDA0DD', r: 221, g: 160, b: 221}
    colors['powderblue']           = {hex: '#B0E0E6', r: 176, g: 224, b: 230}
    colors['purple']               = {hex: '#800080', r: 128, g:   0, b: 128}
    colors['red']                  = {hex: '#FF0000', r: 255, g:   0, b:   0}
    colors['rosybrown']            = {hex: '#BC8F8F', r: 188, g: 143, b: 143}
    colors['royalblue']            = {hex: '#4169E1', r:  65, g: 105, b: 225}
    colors['saddlebrown']          = {hex: '#8B4513', r: 139, g:  69, b:  19}
    colors['salmon']               = {hex: '#FA8072', r: 250, g: 128, b: 114}
    colors['sandybrown']           = {hex: '#F4A460', r: 244, g: 164, b:  96}
    colors['seagreen']             = {hex: '#2E8B57', r:  46, g: 139, b:  87}
    colors['seashell']             = {hex: '#FFF5EE', r: 255, g: 245, b: 238}
    colors['sienna']               = {hex: '#A0522D', r: 160, g:  82, b:  45}
    colors['silver']               = {hex: '#C0C0C0', r: 192, g: 192, b: 192}
    colors['skyblue']              = {hex: '#87CEEB', r: 135, g: 206, b: 235}
    colors['slateblue']            = {hex: '#6A5ACD', r: 106, g:  90, b: 205}
    colors['slategray']            = {hex: '#708090', r: 112, g: 128, b: 144}
    colors['snow']                 = {hex: '#FFFAFA', r: 255, g: 250, b: 250}
    colors['springgreen']          = {hex: '#00FF7F', r:   0, g: 255, b: 127}
    colors['steelblue']            = {hex: '#4682B4', r:  70, g: 130, b: 180}
    colors['tan']                  = {hex: '#D2B48C', r: 210, g: 180, b: 140}
    colors['teal']                 = {hex: '#008080', r:   0, g: 128, b: 128}
    colors['thistle']              = {hex: '#D8BFD8', r: 216, g: 191, b: 216}
    colors['tomato']               = {hex: '#FF6347', r: 255, g:  99, b: 71}
    colors['turquoise']            = {hex: '#40E0D0', r:  64, g: 224, b: 208}
    colors['violet']               = {hex: '#EE82EE', r: 238, g: 130, b: 238}
    colors['wheat']                = {hex: '#F5DEB3', r: 245, g: 222, b: 179}
    colors['white']                = {hex: '#FFFFFF', r: 255, g: 255, b: 255}
    colors['whitesmoke']           = {hex: '#F5F5F5', r: 245, g: 245, b: 245}
    colors['yellow']               = {hex: '#FFFF00', r: 255, g: 255, b:   0}
    colors['yellowgreen']          = {hex: '#9ACD32', r: 154, g: 205, b:  50}
    return colors;
  }

  mouse_down_handler(e) {
    // In here, 'this' represents 'canvas'
    JsNyle.mouse_down[e.button] = true;
    console.log(e, JsNyle.mouse_down[e.button], 'down', e.button);
  }

  mouse_up_handler(e) {
    // In here, 'this' represents 'canvas'
    JsNyle.mouse_down[e.button] = false;
    console.log(e, JsNyle.mouse_down[e.button], 'up', e.button);
  }

  mouse_move_handler(e) {
    // In here, 'this' represents 'canvas'
    JsNyle.mouse_x = e.layerX;  //- rect.left;
    JsNyle.mouse_y = e.layerY;  //- rect.top;
    //console.log(e, JsNyle.mouse_x, JsNyle.mouse_y, 'move', rect.left, rect.top);
    //console.log(JsNyle.mouse_down);
  }

  key_down_handler(e) {
    // In here, 'this' represents 'window'
    //console.log(e.keyCode);
    JsNyle.key_down[e.keyCode] = true;
    //console.log(e.keyCode, JsNyle.key_down[e.keyCode]);
  }

  key_up_handler(e) {
    // In here, 'this' represents 'window'
    JsNyle.key_down[e.keyCode] = false;
    if (e.keyCode == 32) {
      console.log(JsNyle.key_down);
    }
  }

  get_mouse_x() {
    return JsNyle.mouse_x;
  }
  get_mouse_y() {
    return JsNyle.mouse_y;
  }
  get_mouse_down() {
    return JsNyle.mouse_down;
  }

  get_key_down() {
    return JsNyle.key_down;
  }


  mainloop(interval = 20, func) {
    setInterval(func, interval);
  }

  running_time() {
    let current_time = new Date();
    return (current_time.getTime() - this.start_time.getTime());
  }

  // under construction...
  layer(id) {
    // メインキャンバスと同サイズ、透明で軌跡あり
    let layer = new JsSurface({w: this.canvas.width, h: this.canvas.height, bgcolor: 'transparent', trace: true});
    return layer;
  }

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
    //console.log(color.substr(0, 1));
    if (color.substr(0, 1) == '#') {
      return c == color.toUpperCase();
    } else {
    //console.log(color.toLowerCase());
    //console.log(this.color_map[color.toLowerCase()]);
      return c == this.color_map[color.toLowerCase()]['hex'];
    }
  }

  clear() {
    this.context.save();
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); 
    this.context.restore();
  //console.log(this.surface);
    this.surface.clear();
  //console.log('clear');
  }

  // draw_line
  draw_line(x1, y1, x2, y2, {color = 'black', weight = 2, cap = 'butt', a = 1.0} = {}) {
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

  // draw_rect
  draw_rect(x, y, w, h, {color = 'black', fill = false, weight = 2, a = 1.0, round = 0} = {}) {
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

  // draw_circle
  draw_circle(x, y, r, {color = 'black', fill = false, weight = 2, a = 1.0} = {}) {
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

  draw_shape(points, {weight = 2, cap = 'butt', color = 'black', a = 1.0, close = false, fill = false} = {}) {
    this.context.save();
    this.context.globalAlpha = a;
    this.context.lineWidth = weight;
    this.context.lineCap   = cap.toLowerCase();

    if (cap.toLowerCase() == 'round') {
      this.context.lineJoin  = 'round'
    }

    var vertex = Array.from(points);
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

  draw_text(x, y, text, {color = 'black', a = 1.0, size = 32, font = 'sans-serif', bold = false, italic = false} = {}) {
    this.context.save()
    this.context.globalAlpha = a;
    var attr_bold = '';
    if (bold) {
      attr_bold = 'bold';
    }
    var attr_italic = '';
    if (italic) {
      attr_italic = 'italic';
    }
    this.context.font = attr_bold + ' ' + attr_italic + ' ' + size + 'px ' + font;
    this.context.fillStyle = color;
    this.context.fillText(text, x, y);
  //this.context.beginPath();   // reset Path
    this.context.restore();
  }


  async load_image(key, data, {cx = null, cy = null, cw = null, ch = null, sx = 1.0, sy = 1.0, color_key = 'white'} = {}) {
    let imagedata = await this._load_image(data, {cx: cx, cy: cy, cw: cw, ch: ch, sx: sx, sy: sy, color_key: color_key});
    this.imagestore[key] = imagedata;
    // console.log(key);
    // console.log(this.imagestore);

    return imagedata;   // Promise
  }

  _load_image(data, {cx = null, cy = null, cw = null, ch = null, sx = 1.0, sy = 1.0, color_key = 'white'} = {}) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.onload = e => {
        let imagedata = this._edit_image(img, {cx: cx, cy: cy, cw: cw, ch: ch, sx: sx, sy: sy, color_key: color_key});
        resolve(imagedata);
      }
      img.src = data;
    });
  }

  _edit_image(img, {cx = null, cy = null, cw = null, ch = null, sx = 1.0, sy = 1.0, color_key = 'white'} = {}) {
    let w;
    let h;
    if (cx == null || cy == null || cw == null || ch == null) {
      w = img.width  * sx;
      h = img.height * sy;
    } else {
      w = cw * sx;
      h = ch * sy;
    }

    let surface = new JsSurface({w: w, h: h, bgcolor: 'transparent'});
    let canvas  = surface.canvas;
    let context = surface.context;

    //console.log(img.width, sx, img.height, sy);
    //console.log("edit canvas : ", canvas);

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

    // color_key(暫定定期に white固定)■
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


  async load_image_tiles(ids, data, m, n, {sx = 1.0, sy = 1.0, color_key = 'white'} = {}) {
    let list = await this._store_imagedata_tiles(data, m, n, {sx: sx, sy: sy, color_key: color_key});
    for (let i = 0; i < list.length; i++) {
      let key = ids[i];
      //console.log(key);
      //console.log(list[i]);
      this.imagestore[key] = list[i];
    }
    //console.log(this.imagestore);

    return list;   // Promise
  }

  _store_imagedata_tiles(data, m, n, {sx = 1.0, sy = 1.0, color_key = 'white'} = {}) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.onload = e => {
        let list = this._divide_image(img, m, n, {sx: sx, sy: sy, color_key: color_key});
        resolve(list);
      }
      img.src = data;
    })
    return list;
  }

  _divide_image(img, m, n, {sx = 1.0, sy = 1.0, color_key = 'white'} = {}) {
    let w = Math.floor(img.width  / m);
    let h = Math.floor(img.height / n);
    let surface = new JsSurface({w: w * sx, h: h * sy, bgcolor: 'transparent'});   // 拡大率は？
    let canvas = surface.canvas;
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

        // color_key(暫定定期に white固定)■
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

    //console.log(imgList);
    return imgList;
  }


  draw_image(x, y, id, {pos = 'corner'} = {}) {
    let image = this.imagestore[id];
    // console.log(image, image.complete, image.width, image.height);
    if (pos.toLowerCase() == 'center') {
      this.context.drawImage(image, x - image.width / 2, y - image.height / 2);
    } else {
      this.context.drawImage(image, x, y);
    }
  }

  // under construction...
  load_sound(file) {
    let sound = new Audio();
    sound.src = file;
    return sound;
  }

  // under construction...
  play_sound(sound) {
    console.log(sound);
    sound.currentTime = 0;
    sound.play();
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

  window_width() {
    return this.context.canvas.width;
  }

  screen_width() {
    return this.context.canvas.width;
  }

  screen_height() {
    return this.context.canvas.height;
  }
}


Opal.eval(`
  module Nyle

    KEY_Left  = 37   # カーソルキー(←)
    KEY_Up    = 38   # カーソルキー(↑)
    KEY_Right = 39   # カーソルキー(→)
    KEY_Down  = 40   # カーソルキー(↓)

    @__table_buttons = {
      :LEFT   => [0],
      :L      => [0],
      :MIDDLE => [1],
      :M      => [1],
      :RIGHT  => [2],
      :R      => [2]
    }

    @__table_keys = {
      :SPACE     => [32],
      :BACKSPACE => [8],
      :TAB       => [9],
      :RETURN    => [13],
      :ESCAPE    => [27],
      :LEFT      => [KEY_Left],
      :UP        => [KEY_Up],
      :RIGHT     => [KEY_Right],
      :DOWN      => [KEY_Down],
      :PAGEUP    => [33],
      :PAGE_UP   => [33],
      :PAGEDOWN  => [34],
      :PAGE_DOWN => [34],
      :INSERT    => [45],
      :DELETE    => [46],
      :HOME      => [36],
      :END       => [35],
      :F1        => [112],
      :F2        => [113],
      :F3        => [114],
      :F4        => [115],
      :F5        => [116],
      :F6        => [117],
      :F7        => [118],
      :F8        => [119],
      :F9        => [120],
      :F10       => [121],
      :F11       => [122],
      :F12       => [123],
      :SHIFT     => [16],
      :CONTROL   => [17],
      :META      => [91],
      :ALT       => [18],
      :_0        => [48],
      :_1        => [49],
      :_2        => [50],
      :_3        => [51],
      :_4        => [52],
      :_5        => [53],
      :_6        => [54],
      :_7        => [55],
      :_8        => [56],
      :_9        => [57],
      :A         => [65],
      :B         => [66],
      :C         => [67],
      :D         => [68],
      :E         => [69],
      :F         => [70],
      :G         => [71],
      :H         => [72],
      :I         => [73],
      :J         => [74],
      :K         => [75],
      :L         => [76],
      :M         => [77],
      :N         => [78],
      :O         => [79],
      :P         => [80],
      :Q         => [81],
      :R         => [82],
      :S         => [83],
      :T         => [84],
      :U         => [85],
      :V         => [86],
      :W         => [87],
      :X         => [88],
      :Y         => [89],
      :Z         => [90]
    }

    @__mouse_down      = []
    @__mouse_down_last = []
    @__mouse_press     = []
    @__mouse_release   = []

    @__key_down        = []
    @__key_down_last   = []
    @__key_press       = []
    @__key_release     = []
    @__cursor_x        = 0
    @__cursor_y        = 0

    @nyle = nil

    # for Screen class
    class << self
      private def _set_nyle(nyle)
        @nyle = nyle
      end

      private def _update_mouse_state
        @__mouse_down = @nyle.get_mouse_down
        @__mouse_down.each_index do |k|
          change  = @__mouse_down[k] ^ @__mouse_down_last[k]       # Get change of mouse press status (XOR)
          press   = change &  @__mouse_down[k]                     # Detect change to press from release
          release = change & !@__mouse_down[k]                     # Detect change to release from press
          @__mouse_press[k] = press                                # Set mouse_press status
          @__mouse_release[k] = release                            # Set mouse_release status
          @__mouse_down_last[k] = @__mouse_down[k]
        end
      end

      private def _update_key_state
        @__key_down = @nyle.get_key_down
        @__key_down.each_index do |k|
          change  = @__key_down[k] ^ @__key_down_last[k]           # Get change of key press status (XOR)
          press   = change &  @__key_down[k]                       # Detect change to press from release
          release = change & !@__key_down[k]                       # Detect change to release from press
          @__key_press[k] = press                                  # Set key_press status
          @__key_release[k] = release                              # Set key_release status
          @__key_down_last[k] = @__key_down[k]

          if @__key_down[KEY_Right]
            @__cursor_x = +1                                       # Set +1 to cursor_x value
          elsif @__key_down[KEY_Left]
            @__cursor_x = -1                                       # Set -1 to cursor_x value
          else
            @__cursor_x =  0
          end

          if @__key_down[KEY_Down]
            @__cursor_y = +1                                       # Set +1 to cursor_y value
          elsif @__key_down[KEY_Up]
            @__cursor_y = -1                                       # Set -1 to cursor_y value
          else
            @__cursor_y =  0
          end
        end
      end
    end

    # for module_functions
    class << self
      private def _check_key(*args)
        _check(*args, :KEY)
      end
      private def _check_button(*args)
        _check(*args, :BUTTON)
      end
      private def _check(state, value, kind)
        if    Integer === value
          return state[value] == true
        elsif Symbol === value
          table = {}
          table = @__table_keys[value]    if kind == :KEY
          table = @__table_buttons[value] if kind == :BUTTON
          table.each do |target|
            return state[target] if state[target]
          end
          return false
        else
          return false
        end
      end
    end

    # wrapper
    module_function def cr                      ; @nyle.context             ; end
    module_function def draw_line(*args)        ; @nyle.draw_line(*args)    ; end
    module_function def draw_rect(*args)        ; @nyle.draw_rect(*args)    ; end
    module_function def draw_circle(*args)      ; @nyle.draw_circle(*args)  ; end
    module_function def draw_shape(*args)       ; @nyle.draw_shape(*args)   ; end
    module_function def draw_text(*args)        ; @nyle.draw_text(*args)    ; end

    module_function def draw_image(*args)
      # args[0] ... x
      # args[1] ... y
      # args[2] ... instance
      # args[3] ... options
      args[2] = args[2].id   # instance -> image id
      @nyle.draw_image(*args)
    end

    module_function def load_image(*args)
      # args[0] ... id
      # args[1] ... options
      uniq = rand(1000000).to_s   # make it unique
      id = args[0]
      args[0] = Resource::get_image_data(id)
#      args.unshift(id)
      args.unshift("#{id}_#{uniq}")
      # args[0] ... id
      # args[1] ... data
      # args[2] ... options
      # [id, data, {opts}]
      @nyle.load_image(*args)

      # Ruby側は load_image()の戻り値として、イメージの属性が取得できるインスタンスが必要(ImageProperty)
      # JavaScript側は、画像情報にアクセスするためのキー情報(文字列)の配列が必要(id)
      w = nil
      h = nil
      base_property = Resource::get_image_instance(id)
      if (args[2])
        if args[2][:cw] and args[2][:ch]
          # w = cw * sx, h = ch * sy
          w = (args[2][:cw] * (args[2][:sx] ? args[2][:sx] : 1.0)).to_i
          h = (args[2][:ch] * (args[2][:sy] ? args[2][:sy] : 1.0)).to_i
        else
          # w = width * sx, h = height * sy
          w = (base_property.width  * (args[2][:sx] ? args[2][:sx] : 1.0)).to_i
          h = (base_property.height * (args[2][:sx] ? args[2][:sx] : 1.0)).to_i
        end
      else
        w = base_property.width
        h = base_property.height
      end
#p "#{id}_#{uniq}"
#p id
      return Resource::ImageProperty.new("#{id}_#{uniq}", w, h, nil)
    end

    module_function def load_image_tiles(*args)
      # args[0] ... id
      # args[1] ... m
      # args[2] ... n
      # args[3] ... options
      uniq = rand(1000000).to_s   # make it unique
      id = args[0]
      m  = args[1]
      n  = args[2]
      list = []
      m.times do |i|
        n.times do |j|
          list << "#{id}_#{uniq}_#{i}_#{j}"
        end
      end
      args[0] = Resource::get_image_data(id)
      args.unshift(list)
      # args[0] ... id
      # args[1] ... data
      # args[2] ... m
      # args[3] ... n
      # args[4] ... options
      # [[id_0_0, id_0_1, ...], data, m, n, {opts}]
      @nyle.load_image_tiles(*args)

      # Ruby側は load_image_tiles()の戻り値として、イメージの属性が取得できるインスタンスの配列が必要(list_property)
      # JavaScript側は、画像情報にアクセスするためのキー情報(文字列)の配列が必要(list)
      w = nil
      h = nil
      list_property =  Array.new(m).map{ Array.new(n) }   # 2D Array
      base_property = Resource::get_image_instance(id)
      if (args[4])
        w = (base_property.width  / m * (args[4][:sx] ? args[4][:sx] : 1.0)).to_i
        h = (base_property.height / n * (args[4][:sy] ? args[4][:sy] : 1.0)).to_i
      else
        w = (base_property.width  / m).to_i
        h = (base_property.height / n).to_i
      end
      m.times do |i|
        n.times do |j|
          list_property[i][j] = Resource::ImageProperty.new("#{id}_#{uniq}_#{i}_#{j}", w, h, nil)
        end
      end
#p list
#p id
      return list_property
    end

    module_function def load_sound(*args)       ; @nyle.load_sound(*args)   ; end
    module_function def play_sound(*args)       ; @nyle.play_sound(*args)   ; end

    module_function def pixel(*args)            ; @nyle.pixel(*args)        ; end
    module_function def pixel?(*args)           ; @nyle.isPixel(*args)      ; end

    # 扱い検討■
    module_function def color_info(color, key)  ; @nyle.color_map()[color.downcase][key]   ; end

    module_function def mouse_x                 ; @nyle.get_mouse_x         ; end
    module_function def mouse_y                 ; @nyle.get_mouse_y         ; end
    module_function def cursor_x                ; @__cursor_x               ; end
    module_function def cursor_y                ; @__cursor_y               ; end

    module_function def mouse_down?(button)     ; _check_button(@__mouse_down,    button)  ; end
    module_function def mouse_press?(button)    ; _check_button(@__mouse_press,   button)  ; end
    module_function def mouse_release?(button)  ; _check_button(@__mouse_release, button)  ; end
    module_function def key_down?(key)          ; _check_key(@__key_down,         key)     ; end
    module_function def key_press?(key)         ; _check_key(@__key_press,        key)     ; end
    module_function def key_release?(key)       ; _check_key(@__key_release,      key)     ; end

    module_function def translate(*args)        ; @nyle.translate(*args)    ; end
    module_function def rotate(*args)           ; @nyle.rotate(*args)       ; end
    module_function def scale(*args)            ; @nyle.scale(*args)        ; end
    module_function def save
      @nyle.save()
      yield
      @nyle.restore()
    end

    module_function def clear                   ; @nyle.clear()             ; end
    module_function def running_time            ; @nyle.running_time()      ; end

    module_function def screen_width            ; @nyle.screen_width()      ; end
    module_function def screen_height           ; @nyle.screen_height()     ; end

    # alias
    alias_method :w, :screen_width
    alias_method :h, :screen_height
    module_function :w
    module_function :h

    # syntax sugar
    module_function def create_screen(w = 640, h = 480, bgcolor: 'white', trace: false)
      s = Screen.new({w: w, h: h, bgcolor: bgcolor, trace: trace})
      s.extend(Nyle)
    end

    # リソース管理
    module Resource
      @__images = {}
      class << self
        def set_image(id, w, h, data)
          @__images[id] = ImageProperty.new(id, w, h, data);
        end
        def get_image_data(id)
          @__images[id].data
        end
        def get_image_instance(id)
          @__images[id]
        end
      end

      # イメージ属性
      class ImageProperty
        # attribute for handling Image by sync code of Ruby
        # (in JavaScript, we cannot get image size just after loading)
        attr_reader :id, :width, :height, :data
        def initialize(id, w, h, data)
          @id     = id
          @width  = w
          @height = h
          @data   = data
        end
      end
    end

    # スクリーン
    class Screen
      def initialize(w: 640, h: 480, bgcolor: 'white', trace: false)
        @nyle = Native(\`new JsNyle({w: w, h: h, bgcolor: bgcolor, trace: trace})\`)
        nyle = @nyle
        p nyle
        Nyle.module_eval { _set_nyle(nyle) }
        # Nativeの戻り値を受けるときに
        # 変数名を変えたりインスタンス変数にしなかったりすると
        # _set_nyle()に nilが渡されてしまうため、
        # 対処療法として一旦インスタンス変数で受けてから代入
        @width  = w
        @height = h
      end

      def start(interval)
        self.setup()
        self.show_all(interval)
      end

      def show_all(interval = 16)
        @nyle.mainloop(interval) do
          Nyle.module_eval {
             _update_mouse_state
             _update_key_state
          }
          @nyle.clear unless @nyle.trace
          self.update()
          self.draw()
        end
      end

      # abstract
      def setup  ; end
      def draw   ; end
      def update ; end
    end

  end
`);

