const jsonserver=require('json-server')

const core=require('cors')


// create a json server app

const server=jsonserver.create()

// setup path fo db.json

const router=jsonserver.router("db.json")
// returnes middleaare used by json server


const middleware=jsonserver.defaults()

const port= process.env.PORT || 3000

server.use(middleware)
server.use(router)

server.listen(port,()=>{
    console.log(`server is starting at port ${port}`);
})