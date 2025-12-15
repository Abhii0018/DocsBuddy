export function formatDate(d){
  try{ return new Date(d).toLocaleString() }catch(e){ return d }
}
