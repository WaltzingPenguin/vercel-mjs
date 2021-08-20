import SayHello from "shared-mjs"

export default function (req, res) {
  res.send(SayHello())
}
