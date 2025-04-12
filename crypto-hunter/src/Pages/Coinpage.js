import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'
import { SingleCoin } from '../config/api'
import axios from 'axios'

function Coinpage() {

  const { id }=useParams()
  const[coin,setCoin]=useState()

  const {currency, symbol}=CryptoState()

  const fetchCoin= async ()=>{
    const { data }= await  axios.get(SingleCoin(id))
    setCoin(data)
  };
  return (
    <div>Coinpage</div>
  )
}

export default Coinpage