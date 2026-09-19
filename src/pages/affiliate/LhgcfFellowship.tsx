import React from 'react';
import { HeartIcon } from 'lucide-react';
import { AffiliateFellowshipTemplate } from '../../components/AffiliateFellowshipTemplate';
export function LhgcfFellowship() {
  const branches = [
  {
    name: 'Putlan Church',
    location: 'Putlan, Carranglan, Nueva Ecija',
    pastor: 'Ptr. Nora Silan',
    link: '/churches/affiliate/lhgcf/putlan'
  },
  {
    name: 'Ikapito Church',
    location: 'Ikapito, Carranglan, Nueva Ecija',
    pastor: 'Ptr. Roselyn Basilio / Ptr. Carlito Sanchez',
    link: '/churches/affiliate/lhgcf/ikapito'
  },
  {
    name: 'Manicla Church',
    location: 'Manicla, Carranglan, Nueva Ecija',
    pastor: 'Ptr. Louie Silan',
    link: '/churches/affiliate/lhgcf/manicla'
  },
  {
    name: 'Bambang Church',
    location: 'Bambang, Nueva Vizcaya',
    pastor: 'Ptr. Clem',
    link: '/churches/affiliate/lhgcf/bambang'
  }];

  return (
    <AffiliateFellowshipTemplate
      name="Living Hope and Grace in Christ Fellowship"
      abbreviation="LHGCF"
      description="A growing network of churches united in spreading hope and grace through the love of Jesus Christ across multiple communities in Nueva Ecija and Nueva Vizcaya."
      gradient="from-emerald-500 via-teal-500 to-cyan-500"
      bgGradient="from-emerald-950 via-teal-950 to-cyan-950"
      accentColor="emerald"
      icon={HeartIcon}
      branches={branches}
      backLink="/churches"
      backLabel="Back to All Churches" />);


}