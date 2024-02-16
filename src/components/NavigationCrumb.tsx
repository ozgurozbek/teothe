/**
 * Splits input by , and returns. First entry is darker colour.
 * @tutorial
 * @param path 
 * @returns span
 */
export default function GetCrumbs({ path }: { path: string }) {
  var data = path.split(",");
  var result = [];
  for (let i = 0; i < data.length; i++) {
    if (i > 0) {
      result.push(<span key={i}> / {data[i]}</span>);
    } else {
      result.push(<span key={i} className="text-slate-400"> / {data[i]}</span>);
    }
  }

  return result;
}
