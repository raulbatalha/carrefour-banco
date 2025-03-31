const { driver } = require('@wdio/globals');

class Keyboard {
  get ios() {
    return {
      b: $('~b'),
      o: $('~o'),
      c: $('~c'),
      e: $('~e'),
      x: $('~x'),
      a: $('~a'),
      m: $('~m'),
      p: $('~p'),
      l: $('~l'),
      i: $('~i'),
      dot: $('~.'),
      at: $('~@'),
      one: $('~1'),
      zero: $('~0'),
      two: $('~2'),
      three: $('~3'),
      four: $('~4'),
      more: $('~more'),
      returnKey: $('~Return'),
      keys: $('//XCUIElementTypeApplication[@name="My Demo App"]/XCUIElementTypeWindow[3]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[4]/XCUIElementTypeKeyboard')
    };
  }

  get android() {
    return {
      b: $('android=new UiSelector().text("b")'),
      o: $('android=new UiSelector().text("o")'),
      c: $('android=new UiSelector().text("c")'),
      e: $('android=new UiSelector().text("e")'),
      x: $('android=new UiSelector().text("x")'),
      a: $('android=new UiSelector().text("a")'),
      m: $('android=new UiSelector().text("m")'),
      p: $('android=new UiSelector().text("p")'),
      l: $('android=new UiSelector().text("l")'),
      i: $('android=new UiSelector().text("i")'),
      dot: $('android=new UiSelector().text(".")'),
      at: $('android=new UiSelector().text("@")'),
      one: $('android=new UiSelector().text("1")'),
      zero: $('android=new UiSelector().text("0")'),
      two: $('android=new UiSelector().text("2")'),
      three: $('android=new UiSelector().text("3")'),
      four: $('android=new UiSelector().text("4")'),
      more: $('android=new UiSelector().description("more")'),
      returnKey: $('android=new UiSelector().description("Return")'),
      keys: $('android=new UiSelector().className("android.inputmethodservice.Keyboard")')
    };
  }

  get key() {
    const isAndroid = driver.isAndroid;
    return isAndroid ? this.android : this.ios;
  }
}

module.exports = new Keyboard();
