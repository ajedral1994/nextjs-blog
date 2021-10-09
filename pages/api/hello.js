export default function handler(req, res) {
  //  nothing just returning a proerty named text with a value of "Hello"
  res.status(200).json({ text: 'Hello' })
}
