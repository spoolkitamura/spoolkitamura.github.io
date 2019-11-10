class JsNyle {
  constructor({w = 640, h = 480, bgcolor = 'white', trace = false} = {}) {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'nyle_canvas';
    this.canvas.width = w;
    this.canvas.height = h;
    this.canvas.style.backgroundColor = bgcolor;
    this.canvas.style.position = 'absolute';
    this.canvas.style.border = '1px solid';

    document.write("<body></body>");
    document.body.appendChild(this.canvas);

    this.context = this.canvas.getContext('2d');

    this.images  = [];
    this.sounds  = [];

    this.trace   = trace;

    // class variables for event handlers of window and canvas
    JsNyle.mouse_down      = [];
    JsNyle.mouse_down_last = [];  // Ruby side?
    JsNyle.mouse_press     = [];  // Ruby side?
    JsNyle.mouse_release   = [];  // Ruby side?
    JsNyle.mouse_x;
    JsNyle.mouse_y;

    JsNyle.key_down        = [];
    JsNyle.key_down_last   = [];  // Ruby side?
    JsNyle.key_press       = [];  // Ruby side?
    JsNyle.key_release     = [];  // Ruby side?
    JsNyle.cursor_x;              // Ruby side?
    JsNyle.cursor_y;              // Ruby side?

    // event handlers
    window.addEventListener('keydown', this.key_down_handler, false);
    window.addEventListener('keyup',   this.key_up_handler,   false);

    this.canvas.addEventListener('mousedown', this.mouse_down_handler, false);
    this.canvas.addEventListener('mouseup',   this.mouse_up_handler,   false);
    this.canvas.addEventListener('mousemove', this.mouse_move_handler, false);
  }

  mouse_down_handler(e) {  // ■マウスボタンの区別？(暫定定期に index=1固定)
    // In here, 'this' represents 'canvas'
    JsNyle.mouse_down[1] = true;
    console.log(e, JsNyle.mouse_down[1], 'down');
  }

  mouse_up_handler(e) {    // ■マウスボタンの区別？(暫定定期に index=1固定)
    // In here, 'this' represents 'canvas'
    JsNyle.mouse_down[1] = false;
    console.log(e, JsNyle.mouse_down[1], 'up');
  }

  mouse_move_handler(e) {
    // In here, 'this' represents 'canvas'
    /*
     * rectでcanvasの絶対座標位置を取得し、
     * クリック座標であるe.clientX,e.clientYからその分を引く。
     * クリック座標はdocumentからの位置を返すため
     * rectはスクロール量によって値が変わるので、onClick()内でつど定義。
     *
     * Use rect to get the absolute coordinate position of the canvas
     * and subtract it from the click coordinates e.clientX and e.clientY.
     *
     * Since click coordinates return the position of the document,
     * the value of rect changes according to the scroll amount,
     * so it is defined every time with onClick().
     */
    var rect = e.target.getBoundingClientRect();
    JsNyle.mouse_x = e.clientX - rect.left;
    JsNyle.mouse_y = e.clientY - rect.top;

    console.log(e, JsNyle.mouse_x, JsNyle.mouse_y, 'move');
    console.log(JsNyle.mouse_down);
  }

  key_down_handler(e) {
    // In here, 'this' represents 'window'
    console.log(e.keyCode);
    JsNyle.key_down[e.keyCode] = true;
    console.log(e.keyCode, JsNyle.key_down[e.keyCode]);
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

  clear() {
    this.context.save();
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); 
    this.context.restore();
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
//      this.context.fillRect(x, y, w, h);
    } else {
      this.context.strokeStyle = color;
      this.context.stroke();
//      this.context.strokeRect(x, y, w, h);
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
    this.context.beginPath();   // reset Path
    this.context.restore();
  }

  load_image(file) {
    var index = this.images.length;
    this.images.push(new Image());
    this.images[index].src = file;
    return this.images[index];
  }

  draw_image(x, y, image, {pos = 'corner'} = {}) {
    do {
      // var status = image.complete;
      // console.log("complete: " + status);
    } while(! image.complete);
    // console.log(image, image.complete, image.width, image.height);
    if (pos.toLowerCase() == 'center') {
      this.context.drawImage(image, x - image.width / 2, y - image.height / 2);
    } else {
      this.context.drawImage(image, x, y);
    }
  }


  // ↓非同期処理 検討中
  load_sound(file) {
    var index = this.sounds.length;
    this.sounds.push(new Audio());
    this.sounds[index].src = file;
    return this.sounds[index];
  }

  play_sound(sound) {
    //do {
    //  // var status = image.complete;
    //  // console.log("complete: " + status);
    //} while(! sound.complete);
    console.log(sound);
//    promise.then(function(sound) {
      sound.currentTime = 0;
      sound.play();
//    });
  }
  // ↑非同期処理 検討中


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

    KEY_Space = 32      # スペース
    KEY_Left  = 37      # カーソルキー(←)
    KEY_Up    = 38      # カーソルキー(↑)
    KEY_Right = 39      # カーソルキー(→)
    KEY_Down  = 40      # カーソルキー(↓)

    MOUSE_L   =  1
    MOUSE_M   =  2
    MOUSE_R   =  3

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

    class << self
      private def _check(state, value)
        return state[value] == true
      end
    end

    # wrapper
    module_function def get_nyle                ; @nyle                     ; end   # 暫定名称
    module_function def draw_line(*args)        ; @nyle.draw_line(*args)    ; end
    module_function def draw_rect(*args)        ; @nyle.draw_rect(*args)    ; end
    module_function def draw_circle(*args)      ; @nyle.draw_circle(*args)  ; end
    module_function def draw_shape(*args)       ; @nyle.draw_shape(*args)   ; end
    module_function def draw_text(*args)        ; @nyle.draw_text(*args)    ; end
    module_function def load_image(*args)       ; @nyle.load_image(*args)   ; end
    module_function def draw_image(*args)       ; @nyle.draw_image(*args)   ; end

    module_function def load_sound(*args)       ; @nyle.load_sound(*args)   ; end
    module_function def play_sound(*args)       ; @nyle.play_sound(*args)   ; end

    module_function def mouse_x                 ; @nyle.get_mouse_x         ; end
    module_function def mouse_y                 ; @nyle.get_mouse_y         ; end
    module_function def cursor_x                ; @__cursor_x               ; end
    module_function def cursor_y                ; @__cursor_y               ; end

    module_function def mouse_down?(button)     ; _check(@__mouse_down,    button)               ; end 
    module_function def mouse_press?(button)    ; _check(@__mouse_press,   button)               ; end
    module_function def mouse_release?(button)  ; _check(@__mouse_release, button)               ; end
    module_function def key_down?(key)          ; _check(@__key_down,      key)                  ; end
    module_function def key_press?(key)         ; _check(@__key_press,     key)                  ; end
    module_function def key_release?(key)       ; _check(@__key_release,   key)                  ; end

    module_function def translate(*args)        ; @nyle.translate(*args)    ; end
    module_function def rotate(*args)           ; @nyle.rotate(*args)       ; end
    module_function def scale(*args)             ; @nyle.scale(*args)        ; end
    module_function def save
      @nyle.save()
      yield
      @nyle.restore()
    end

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
        # (Opalの挙動に疑問...)■
        @width  = w
        @height = h
      end

      def start(interval)
        self.setup()
        self.show_all(interval)
      end

      def show_all(interval = 16)
        get_nyle.mainloop(interval) do
          Nyle.module_eval {
             _update_mouse_state
             _update_key_state
          }
          get_nyle.clear unless get_nyle.trace
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

