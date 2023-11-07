import { useState } from 'react'
import Tile from './Tile'
import ExpandButton from './ExpandButton'

export default function Categories() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className='homeSection__content'>
      <div className='tiles'>
        <Tile iconId='credit-cards' title={'Credit Cards'} />
        <Tile iconId='home-loans' title={'Home Loans'} />
        <Tile iconId='health-insurance' title={'Health Insurance'} />
        <Tile iconId='car-loans' title={'Car Insurance'} />
        <Tile iconId='broadband-nbn-plans' title={'Broadband & NBN'} />
        <Tile iconId='personal-loans' title={'Personal Loans'} />
      </div>
      {isExpanded && (
        <div className='tiles'>
          <Tile iconId='transaction-accounts' title={'High-Interest Savings'} />
          <Tile iconId='electricity' title={'Electricity & Gas'} />
          <Tile iconId='mobile-plans' title={'Mobile Plans'} />
          <Tile iconId='super-funds' title={'Super Funds'} />
          <Tile iconId='share-trading' title={'Share Trading'} />
          <Tile iconId='life-insurance' title={'Life Insurance'} />
          <Tile iconId='home-loans' title={'Home Insurance'} />
          <Tile iconId='travel-money' title={'Travel Insurance'} />
          <Tile iconId='travel-deals' title={'Travel Deals'} />
          <Tile iconId='bitcoin' title={'Crypto'} />
          <Tile iconId='car-loans' title={'Car Loans'} />
          <Tile iconId='pet-insurance' title={'Pet Insurance'} />
          <Tile iconId='savings-accounts' title={'Transaction Accounts'} />
          <Tile iconId='intl-money-transfers' title={'Money Transfers'} />
          <Tile iconId='shopping-deals' title={'Shopping Deals'} />
          <Tile iconId='streaming' title={'Streaming'} />
          <Tile iconId='personal-loans' title={'Business Insurance'} />
          <Tile iconId='short-term-loans' title={'Short Term Loans'} />
        </div>
      )}
      <ExpandButton handleClick={() => setIsExpanded(!isExpanded)} isExpanded={isExpanded} />
    </div>
  )
}
