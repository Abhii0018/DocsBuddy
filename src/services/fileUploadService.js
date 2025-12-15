export async function uploadFile(file){
  // Simulate an upload with a small delay and return a local object URL for preview.
  // Replace this with actual upload to your storage (S3, Cloudinary, etc.)
  return new Promise((resolve) => {
    setTimeout(()=>{
      try{
        const url = URL.createObjectURL(file)
        resolve({ ok: true, url })
      }catch(e){
        resolve({ ok: false })
      }
    }, 600 + Math.random()*600)
  })
}

export async function uploadFiles(files){
  const results = await Promise.all(files.map(f => uploadFile(f)))
  return results.filter(r=>r.ok).map(r=>r.url)
}
