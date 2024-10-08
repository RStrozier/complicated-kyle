import Typography from "@mui/material/Typography"


const HomepageHero = () => {
  return (
    <>
      <div className="mx-2 container-fluid text-md">
      <div className="p-4"></div>
        This is a test side project to describe the   
        <Typography variant="overline" color="success"> complications</Typography> of our
        boss, Kyle. <br />  We (AKA Dylan only and Rashida as his businesss manager) 
        <br /> are working on
        making this a lighthearted project,
        filled with <Typography variant="caption" color="primary" noWrap> laughs and smiles.</Typography>
        <div className="div">Unless he decides to be mean to us and give us bad reviews, 
          in which case <br /><Typography variant="overline" color="red">this might be a 
            threat / smear campaign.
          </Typography> 
          <div className="text-sm">But probably not because Kyle is complicated & cool.</div>
        </div>
        <div className="p-2"></div>
      </div>

</>
  )
}

export default HomepageHero