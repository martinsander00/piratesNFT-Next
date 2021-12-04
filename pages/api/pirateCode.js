 // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import pirateCode from '/public/pirateCode/pirateCode';


export default (req, res) => {
  res.status(200).json(pirateCode);
}
