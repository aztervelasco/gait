import React from 'react';
import { AffiliateChurchTemplate } from '../../components/AffiliateChurchTemplate';

export function BorlonganChurch() {
  return (
    <AffiliateChurchTemplate
      name="CTL Borlongan Church"
      location="Borlongan, Dipaculao, Aurora"
      pastor="Ptr. Teodoro"
      fellowship="Christ The Lord Fellowship"
      fellowshipAbbreviation="CTL"
      tagline="Sharing the Transforming Gospel in Dipaculao"
      description="CTL Borlongan Church is steadfast in sharing the transforming Gospel of Jesus Christ to Dipaculao and establishing lasting spiritual foundations for families and the next generation."
      mission="To preach the word of God, make faithful disciples, and demonstrate Christ's compassion in Borlongan."
      vision="A beacon of hope and revival in Dipaculao, Aurora, inspiring believers to shine for Christ."
      image="/teodoro1.webp"
      accentGradient="from-sky-400 via-blue-300 to-indigo-400"
      accentColor="blue"
      backLink="/churches"
      backLabel="Back to Our Churches"
    />
  );
}