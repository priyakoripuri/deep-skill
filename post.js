App.get("/users/:id",(req,res)=>{
    })
app.get("/users/:id",(req,res)=>{
    const id=parseInt(req.params.id)
    const user=useSyncExternalStore.find
    const{body}=req
    const newuser={id:users[users.length-1].id+1,...body}
    users.push(newuser)
    res.send
})
