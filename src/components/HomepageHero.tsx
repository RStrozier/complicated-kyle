import Typography from "@mui/material/Typography"


const HomepageHero = () => {
  return (
    <>
      <div className="mx-2 container-md text-md">
      <div className="p-4"></div>
        This is a test side project to describe the   
        <Typography variant="overline" color="success"> complications</Typography> of my
        boss, Kyle. We are working on making this a lighthearted project,
        filled with <Typography variant="caption" color="primary" noWrap> laughs and smiles.</Typography>
        <div className="div">Unless he decides to be mean to us and give us bad reviews, 
          in which case <br /><Typography variant="overline" color="danger">this might be a 
            threat / smear campaign.
          </Typography> <div>But probably not because Kyle is complicated & cool.</div>
        </div>
        <div className="p-2"></div>
      </div>

</>
  )
}

export default HomepageHero