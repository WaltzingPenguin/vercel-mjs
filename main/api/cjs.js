import SayHello from "shared-cjs"

export default function (req, res) {
  res.send(SayHello())
}
