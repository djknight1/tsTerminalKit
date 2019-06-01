import axios from 'axios';
export default function (originalWord: string) : Promise<Array<string>>  {
  const url : string = 'http://fy.iciba.com/ajax.php?a=fy'
  return new Promise(resolve => {
    axios.get(url, {
      params: {
        f: 'en',
        to: 'ch',
        w: originalWord,
      }
    }).then(res => {
      resolve(res.data.content.word_mean);
    });
  })
}