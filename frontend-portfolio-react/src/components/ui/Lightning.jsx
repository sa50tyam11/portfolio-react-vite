import { useRef, useEffect } from "react";
import "./Lightning.css";

const Lightning = ({
  hue = 270,
  xOffset = 0,
  speed = 0.6,
  intensity = 0.9,
  size = 1.2,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const gl = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: false,
    });

    if (!gl) return;

    gl.clearColor(0, 0, 0, 0);

    const vertexShaderSource = `
      attribute vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision highp float;

      uniform vec2 iResolution;
      uniform float iTime;
      uniform float uHue;
      uniform float uXOffset;
      uniform float uSpeed;
      uniform float uIntensity;
      uniform float uSize;

      #define OCTAVE_COUNT 6

      vec3 hsv2rgb(vec3 c) {
        vec3 rgb = clamp(
          abs(mod(c.x * 6.0 + vec3(0.0,4.0,2.0), 6.0) - 3.0) - 1.0,
          0.0,
          1.0
        );
        return c.z * mix(vec3(1.0), rgb, c.y);
      }

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) +
               (c - a) * u.y * (1.0 - u.x) +
               (d - b) * u.x * u.y;
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < OCTAVE_COUNT; i++) {
          v += a * noise(p);
          p *= 2.0;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / iResolution.xy;
        uv = uv * 2.0 - 1.0;
        uv.x *= iResolution.x / iResolution.y;
        uv.x += uXOffset;

        // organic motion
        uv += fbm(uv * uSize + iTime * uSpeed) * 0.6;

        float d = abs(uv.x);

        vec3 base = hsv2rgb(vec3(uHue / 360.0, 0.7, 0.9));

        // 🌫️ ambient glow (NOT a beam)
        float glow = pow(1.0 - smoothstep(0.0, 0.8, d), 2.0);
        vec3 color = base * glow * uIntensity;

        // soft transparency
        float alpha = glow * 0.25;

        gl_FragColor = vec4(color, alpha);
      }
    `;

    const compile = (src, type) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        return null;
      }
      return shader;
    };

    const vs = compile(vertexShaderSource, gl.VERTEX_SHADER);
    const fs = compile(fragmentShaderSource, gl.FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, "iResolution");
    const uTime = gl.getUniformLocation(program, "iTime");
    const uHueLoc = gl.getUniformLocation(program, "uHue");
    const uXLoc = gl.getUniformLocation(program, "uXOffset");
    const uSpeedLoc = gl.getUniformLocation(program, "uSpeed");
    const uIntLoc = gl.getUniformLocation(program, "uIntensity");
    const uSizeLoc = gl.getUniformLocation(program, "uSize");

    const start = performance.now();

    const render = () => {
      resizeCanvas();
      gl.viewport(0, 0, canvas.width, canvas.height);

      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, (performance.now() - start) / 1000);
      gl.uniform1f(uHueLoc, hue);
      gl.uniform1f(uXLoc, xOffset);
      gl.uniform1f(uSpeedLoc, speed);
      gl.uniform1f(uIntLoc, intensity);
      gl.uniform1f(uSizeLoc, size);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [hue, xOffset, speed, intensity, size]);

  return <canvas ref={canvasRef} className="lightning-container" />;
};

export default Lightning;
