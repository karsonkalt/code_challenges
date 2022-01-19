var originalDigits = function (s) {
  cm = { z: 0, o: 0, w: 0, h: 0, u: 0, f: 0, x: 0, s: 0, g: 0, i: 0 };

  for (const a of s) {
    if (cm[a] !== undefined) {
      cm[a] = cm[a] + 1;
    }
  }

  cm.h = cm.h - cm.g;
  cm.f = cm.f - cm.u;
  cm.s = cm.s - cm.x;
  cm.o = cm.o - cm.z - cm.w - cm.u;
  cm.i = cm.i - cm.f - cm.x - cm.g;

  console.log(cm);

  let map = { z: 0, o: 1, w: 2, h: 3, u: 4, f: 5, x: 6, s: 7, g: 8, i: 9 };

  let sb = "";

  for (const a in cm) {
    for (i = 0; i < cm[a]; i++) {
      sb = sb + new String(map[a]);
    }
  }

  return sb;
};
