export const getData=()=>{
    return new Promise((resolve,reject)=>{
        fetch(
            "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Frss.detik.com%2F"
        )
        .then(res=>{
            return res.json()
        })
        .then(result=>resolve(result.items))
        .catch(err=>err(err))
    })
}