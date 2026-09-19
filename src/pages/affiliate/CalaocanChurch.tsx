import React from 'react';
import { AffiliateChurchTemplate } from '../../components/AffiliateChurchTemplate';

export function CalaocanChurch() {
  return (
    <AffiliateChurchTemplate
      name="CTL Calaocan Church"
      location="Calaocan, Aurora"
      pastor="Ptr. Sonny Boy"
      fellowship="Christ The Lord Fellowship"
      fellowshipAbbreviation="CTL"
      tagline="Proclaiming the Lordship of Christ in Calaocan"
      description="CTL Calaocan Church is an affiliate branch committed to bringing the Gospel to Aurora province. We believe in living an active, Christ-centered life through prayer, community fellowship, and vibrant worship."
      mission="To declare the Lordship of Christ across Calaocan and build strong disciples through biblical teaching and active fellowship."
      vision="A transformed community in Calaocan where families thrive spiritually and experience God's miraculous love."
      image="/600226379_122193353540449557_1592564097436516824_n.webp"
      accentGradient="from-blue-400 via-indigo-300 to-purple-400"
      accentColor="blue"
      backLink="/churches"
      backLabel="Back to Our Churches"
    />
  );
}