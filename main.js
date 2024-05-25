var Bb = "FZMÛSê/·V«xÞhí¢³4<`ô2ª,µ¦Yû";

function Fb(a) {
    var b;
    var c = unescape(encodeURIComponent(JSON.stringify(a)));
    var d = [];
    var e = 0;
    var f = "";
    for (var g = 0; g < 256; g++) {
      d[g] = g;
    }
    for (var h = 0; h < 256; h++) {
      e = (e + d[h] + Bb.charCodeAt(h % Bb.length)) % 256;
      b = d[h];
      d[h] = d[e];
      d[e] = b;
    }
    var j = 0;
    e = 0;
    for (var l = 0; l < c.length; l++) {
      e = (e + d[j = (j + 1) % 256]) % 256;
      b = d[j];
      d[j] = d[e];
      d[e] = b;
      f += String.fromCharCode(c.charCodeAt(l) ^ d[(d[j] + d[e]) % 256]);
    }
    
    return Buffer.from(f).toString('base64')
}

Fb({
    a: 1,
    b: 2,
    c: 3
}) // Encryption input is always an object