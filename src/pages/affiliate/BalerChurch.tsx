import React from 'react';
import { AffiliateChurchTemplate } from '../../components/AffiliateChurchTemplate';

export function BalerChurch() {
  return (
    <AffiliateChurchTemplate
      name="CTL Baler Church"
      location="Baler, Aurora"
      pastor="Ptr. Joseph"
      fellowship="Christ The Lord Fellowship"
      fellowshipAbbreviation="CTL"
      tagline="Bringing the Light of Christ to Baler"
      description="CTL Baler Church is dedicated to bringing the light and love of Jesus Christ to the scenic town of Baler. With vibrant youth ministry, faithful leadership, and dynamic outreach, we are reaching hearts for God."
      mission="To impact Baler with the Gospel through intentional evangelism, loving fellowship, and biblically sound teaching."
      vision="A passionate church community in Baler raising a generation of godly disciples and leaders."
      image="/501169598_10228891022641155_7598878957010397695_n.webp"
      accentGradient="from-violet-400 via-purple-300 to-pink-400"
      accentColor="purple"
      backLink="/churches"
      backLabel="Back to Our Churches"
    />
  );
}