
const superbowlWin = (record) =>{
  const rec = record.find((r) =>  r.result === 'W')
  return rec ? rec.year : undefined
}
