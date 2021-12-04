 // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import description from '/public/description/description';


export default (req, res) => {
  res.status(200).json(description);
}
