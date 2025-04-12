import React from 'react'
import { makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    carousel: {
      height: "50%",
      display: "flex",
      alignItems: "center",
    }
  }));
const Carousel = () => {
    const classes=useStyles()

    const fetchTrendingCoins=()=>{
        const { data }=  axios.get(TrendingCoins())
    }
  return (
    <div className={classes.Carousel}>
        Carousel
    </div>
  )
}

export default Carousel