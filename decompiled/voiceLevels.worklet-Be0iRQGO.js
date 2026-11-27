(() => {
  class c {
    compressed = new Uint16Array(200);
    compressedLength = 0;
    currentPeak = 0;
    currentCount = 0;
    compressionFactor = 1;
    feed(i) {
      if (i instanceof Float32Array) {
        for (const e of i) {
          const s = e < -1 ? -1 : e > 1 ? 1 : e;

          const o =
            s < 0
              ? Math.max(-32768, Math.round(s * 32768))
              : Math.round(s * 32767);

          this.ingest(o);
        }
      } else {
        for (let t = 0; t < i.length; t++) {
          this.ingest(i[t]);
        }
      }
    }
    normalisedDisplayLevel(i) {
      const e = Math.max(0, Math.min(1, i)) * 32767;
      if (this.compressedLength === 0) {
        return Math.min(e / 2500, 1);
      }
      let s = 0;
      for (let n = 0; n < this.compressedLength; n++) {
        s += this.compressed[n];
      }
      let r = (s / this.compressedLength) * 1.8;

      if (r < 2500) {
        r = 2500;
      }

      return Math.min(e, r) / r;
    }
    finalize() {
      const t = new Uint16Array(100);
      if (this.compressedLength > 0) {
        for (let r = 0; r < this.compressedLength; r++) {
          const n = Math.floor((r * 100) / this.compressedLength);
          const a = this.compressed[r];

          if (a > t[n]) {
            t[n] = a;
          }
        }
      }
      let e = 0;
      for (let r = 0; r < 100; r++) {
        e += t[r];
      }
      let s = Math.floor((e * 1.8) / 100);

      if (s < 2500) {
        s = 2500;
      }

      const o = new Uint8Array(100);
      for (let r = 0; r < 100; r++) {
        const t_r = t[r];
        const a = Math.min(t_r, s);
        const l = Math.floor((a * 31) / s);
        o[r] = Math.min(l, 31);
      }
      return o;
    }
    reset() {
      this.compressed.fill(0);
      this.compressedLength = 0;
      this.currentPeak = 0;
      this.currentCount = 0;
      this.compressionFactor = 1;
    }
    ingest(i) {
      let t = i;

      if (t < 0) {
        t = t === -32768 ? 32767 : -t;
      }

      const e = t & 65535;

      if (e > this.currentPeak) {
        this.currentPeak = e;
      }

      this.currentCount++;

      if (this.currentCount === this.compressionFactor) {
        this.pushPeak(this.currentPeak);
        this.currentPeak = 0;
        this.currentCount = 0;
      }
    }
    pushPeak(i) {
      this.compressed[this.compressedLength] = i;
      this.compressedLength++;

      if (this.compressedLength === 200) {
        for (let e = 0; e < 100; e++) {
          const s = this.compressed[2 * e];
          const o = this.compressed[2 * e + 1];
          this.compressed[e] = s > o ? s : o;
        }
        for (let e = 100; e < 200; e++) {
          this.compressed[e] = 0;
        }
        this.compressedLength = 100;
        this.compressionFactor *= 2;
      }
    }
  }
  if (typeof registerProcessor == "function") {
    class h extends AudioWorkletProcessor {
      builder = new c();
      frozen = false;
      frames = 0;
      peak = 0;
      constructor() {
        super();

        this.port.onmessage = (t) => {
          if (t.data?.type === "reset") {
            this.builder.reset();
            this.frozen = false;
            this.frames = 0;
            this.peak = 0;
          } else if (t.data?.type === "snapshot") {
            this.frozen = true;
            const e = this.builder.finalize();
            this.port.postMessage({ type: "snapshot", samples: e }, [e.buffer]);
          }
        };
      }
      process(t) {
        const e = t[0]?.[0];
        if (!e || this.frozen) {
          return true;
        }
        this.builder.feed(e);
        for (let s = 0; s < e.length; s++) {
          this.peak = Math.max(this.peak, Math.abs(e[s]));
        }
        this.frames += e.length;

        if (this.frames >= sampleRate / 20) {
          this.port.postMessage({
            type: "level",
            value: this.builder.normalisedDisplayLevel(this.peak),
          });

          this.frames = 0;
          this.peak = 0;
        }

        return true;
      }
    }
    registerProcessor("itd-voice-levels", h);
  }
})();
