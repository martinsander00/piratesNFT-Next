 // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import team from '/public/team/team';


export default (req, res) => {
  res.status(200).json(team);
}
