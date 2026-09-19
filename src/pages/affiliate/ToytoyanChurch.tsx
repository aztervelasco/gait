import React from 'react';
import { AffiliateChurchTemplate } from '../../components/AffiliateChurchTemplate';

export function ToytoyanChurch() {
  return (
    <AffiliateChurchTemplate
      name="CTL Toytoyan Church"
      location="Toytoyan, Aurora"
      pastor="Ptra. Merly"
      fellowship="Christ The Lord Fellowship"
      fellowshipAbbreviation="CTL"
      tagline="Empowering Believers in Aurora"
      description="CTL Toytoyan Church is dedicated to empowering believers and youth through faithful biblical teaching, prayer ministry, and compassionate community service throughout Toytoyan."
      mission="To proclaim Christ and shepherd believers into spiritual strength and godly character."
      vision="A loving, active church family shining the light of Jesus across the province of Aurora."
      image="/603909877_122117233605004240_7056101842348380722_n.webp"
      accentGradient="from-indigo-400 via-purple-300 to-pink-400"
      accentColor="purple"
      backLink="/churches"
      backLabel="Back to Our Churches"
    />
  );
}