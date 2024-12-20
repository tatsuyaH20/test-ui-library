/*
  sharpライブラリを使用して画像を圧縮する
  https://sharp.pixelplumbing.com/

  参考
  https://zenn.dev/spicato_blog/articles/6afdf43d0f0a97
*/
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

/** 対象ファイルの格納先 */
const dirName = './src/images';
/** 変換後ファイルの格納先 */
const outPutDir = './src/public';
/** 変換後ファイルの格納先dist */
const distPutDir = './dist/public';
/**
 * webpオプション
 * 詳細: https://sharp.pixelplumbing.com/api-output#webp
 */
const webpOptions = {
  quality: 80,
  alpha_quality: 0,
};
const readSubDir = (folderPath, finishFunc) => {
  // フォルダ内の全ての画像の配列
  const result = [];
  let execCounter = 0;

  const readTopDir = (folderPath) => {
    execCounter += 1;
    fs.readdir(folderPath, (err, items) => {
      const itemsArray = [...items];
      //.から始まる隠しファイルを除外
      itemsArray.filter((item) => {
        return item.indexOf('.') !== 0;
      });

      if (err) {
        console.log(err);
      }

      itemsArray.map((itemName) => {
        return path.join(folderPath, itemName);
      });

      for (const itemPath of itemsArray) {
        if (fs.statSync(`${folderPath}/${itemPath}`).isFile()) {
          result.push(itemPath);
        }
        if (fs.statSync(`${folderPath}/${itemPath}`).isDirectory()) {
          //フォルダなら再帰呼び出し
          readTopDir(itemPath);
        }
      }

      execCounter -= 1;

      if (execCounter === 0) {
        if (finishFunc) {
          finishFunc(result);
        }
      }
    });
  };

  readTopDir(folderPath);
};

const imageConversion = async () => {
  const getExtension = (file) => {
    const ext = path.extname(file || '').split('.');
    return ext[ext.length - 1];
  };

  //サブディレクトリの列挙 非同期
  readSubDir(dirName, (items) => {
    for (const item of items) {
      const pathName = path.dirname(item);
      const fileName = path.basename(item);
      const fileFormat = getExtension(fileName);

      // もしディレクトリがなければ作成
      if (!fs.existsSync(outPutDir)) {
        fs.mkdirSync(outPutDir);
      }

      //非対応ファイルの簡易チェック
      if (fileFormat === '') {
        //拡張子なし
        console.log(`\u001b[1;31m 対応していないファイルです。-> ${fileName}`);
        return;
      }
      if (fileFormat === 'svg') {
        // svgは複製のみ
        fs.copyFile(item, `${outPutDir}/${fileName}`, (err) => {
          if (err) {
            return;
          }
          console.log(`\u001b[1;32m ${fileName}を${outPutDir}に複製しました。 \u001b[0m`);
        });
        return;
      }

      //webp変換
      const outputFile = `${fileName.replace(/\.[^/.]+$/, '.webp')}`;
      sharp(`${dirName}/${fileName}`)
        .webp(webpOptions)
        .toFile(`${outPutDir}/${outputFile}`, (err, info) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log(`\u001b[1;32m ${fileName}を${outPutDir}に変換しました。 \u001b[0m`);

          // distPutDirがなければ作成する
          if (!fs.existsSync(distPutDir)) {
            fs.mkdirSync(distPutDir, { recursive: true });
          }
          fs.copyFile(`${outPutDir}/${outputFile}`, `${distPutDir}/${outputFile}`, (err) => {
            if (err) {
              console.log(err);
              return;
            }
            console.log(
              `\u001b[1;32m ${outPutDir}/${outputFile}を${distPutDir}/${outputFile}に複製しました。 \u001b[0m`,
            );
          });
        });
    }
  });
};
imageConversion();
