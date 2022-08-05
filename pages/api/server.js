export default function handler(req, res) {
    console.log(localStorage)
    res.status(200).json({ name: 'John Doe' })
}