import * as esbuild from 'esbuild';
import { glob } from 'glob';

(async () => {
  const getComponentPath = await glob('./components/**/**.tsx', {
    ignore: ['./components/**/**.stories.tsx', './components/**/**.test.tsx'],
  });
  const entryPoints = ['components/index.ts', ...getComponentPath];
  const ourDir = 'dist';
  const external = ['*'];

  await Promise.all([
    esbuild.build({
      entryPoints,
      outdir: `${ourDir}/esm`,
      bundle: true,
      minify: true,
      format: 'esm',
      target: 'esnext',
      sourcemap: true,
      splitting: true,
      external,
    }),
    esbuild.build({
      entryPoints,
      outdir: `${ourDir}/cjs`,
      bundle: true,
      minify: true,
      format: 'cjs',
      target: 'esnext',
      sourcemap: true,
      external,
    }),
  ]);
})();
