import React from 'react';
import { GlobeIcon } from 'lucide-react';
import { AffiliateFellowshipTemplate } from '../../components/AffiliateFellowshipTemplate';
export function CtlFellowship() {
  const branches = [
  {
    name: 'Calaocan Church',
    location: 'Calaocan, Aurora',
    pastor: 'Ptr. Sonny Boy',
    link: '/churches/affiliate/ctl/calaocan'
  },
  {
    name: 'Toytoyan Church',
    location: 'Toytoyan, Aurora',
    pastor: 'Ptra. Merly',
    link: '/churches/affiliate/ctl/toytoyan'
  },
  {
    name: 'Borlongan Church',
    location: 'Borlongan, Dipaculao, Aurora',
    pastor: 'Ptr. Teodoro',
    link: '/churches/affiliate/ctl/borlongan'
  },
  {
    name: 'Baler Church',
    location: 'Baler, Aurora',
    pastor: 'Ptr. Joseph',
    link: '/churches/affiliate/ctl/baler'
  }];

  return (
    <AffiliateFellowshipTemplate
      name="Christ The Lord Fellowship"
      abbreviation="CTL"
      description="Proclaiming the lordship of Christ across Aurora province, establishing communities of faith and transformation in key locations."
      gradient="from-blue-500 via-indigo-500 to-purple-500"
      bgGradient="from-blue-950 via-indigo-950 to-purple-950"
      accentColor="blue"
      icon={GlobeIcon}
      branches={branches}
      backLink="/churches"
      backLabel="Back to All Churches" />);


}