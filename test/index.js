const { port1, port2 } = new MessageChannel();
const Comlink = require('comlink')
console.log(Comlink)

const thing = Comlink.wrap(port1, { value: {} });
Comlink.expose({ value: 4 } , port2);
thing.value.then((...args) => {
  console.log(...args)
  thing.value.then(console.log)
})
