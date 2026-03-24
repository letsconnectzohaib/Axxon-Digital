export interface PortfolioItem {
  id: string;
  title: string;
  stat: string;
  desc: string;
  category: string;
  image: string;
  fullDescription?: string;
  keyResults?: string[];
}

export const portfolioCases: PortfolioItem[] = [
  { 
    id: "bpo-engagement",
    title: "BPO Engagement Growth", 
    stat: "300%", 
    desc: "Increased brand engagement for a BPO in 90 days.", 
    category: "Marketing", 
    image: "https://picsum.photos/seed/bpo/800/600",
    fullDescription: "Our client, a leading BPO provider, was struggling to maintain active engagement across their digital channels. We implemented a comprehensive marketing strategy focusing on targeted content, community management, and data-driven campaigns. Over the course of 90 days, we completely revitalized their online presence.",
    keyResults: [
      "300% increase in overall brand engagement",
      "150% growth in social media followers",
      "45% reduction in customer acquisition cost",
      "Successfully launched 3 new targeted campaigns"
    ]
  },
  { 
    id: "fashion-roas",
    title: "Fashion Brand ROAS", 
    stat: "4x", 
    desc: "Helped a fashion brand achieve 4x ROAS through Meta ads.", 
    category: "Performance", 
    image: "https://picsum.photos/seed/fashion/800/600",
    fullDescription: "An emerging sustainable fashion brand approached us to scale their online sales. Their previous ad campaigns were barely breaking even. We restructured their Meta ads account, implemented advanced audience targeting, and developed high-converting creative assets tailored to different stages of the funnel.",
    keyResults: [
      "Achieved a consistent 4x Return on Ad Spend (ROAS)",
      "Scaled monthly ad budget by 200% profitably",
      "Decreased Cost Per Acquisition (CPA) by 35%",
      "Increased average order value (AOV) by 20%"
    ]
  },
  { 
    id: "healthcare-seo",
    title: "Healthcare SEO", 
    stat: "220%", 
    desc: "Boosted website traffic using strategic SEO.", 
    category: "SEO", 
    image: "https://picsum.photos/seed/health/800/600",
    fullDescription: "A regional healthcare provider needed to improve their visibility for local search terms. We conducted a comprehensive technical SEO audit, optimized their existing content, and executed a targeted local link-building strategy to establish their authority in the region.",
    keyResults: [
      "220% increase in organic website traffic",
      "Ranked #1 for 15 high-intent local keywords",
      "85% increase in online appointment bookings",
      "Improved site speed and core web vitals"
    ]
  },
  { 
    id: "real-estate-leads",
    title: "Real Estate Leads", 
    stat: "Qualified", 
    desc: "Generated high-quality leads within the first month.", 
    category: "Marketing", 
    image: "https://picsum.photos/seed/realestate/800/600",
    fullDescription: "A luxury real estate agency was generating leads, but the quality was poor, wasting their agents' time. We shifted their strategy from broad targeting to highly specific, intent-based lead generation campaigns across Google and LinkedIn.",
    keyResults: [
      "Generated 50+ highly qualified leads in month one",
      "Increased lead-to-appointment conversion rate by 40%",
      "Reduced cost per qualified lead by 25%",
      "Implemented automated lead nurturing sequences"
    ]
  },
  { 
    id: "tech-branding",
    title: "Tech Startup Branding", 
    stat: "100%", 
    desc: "Complete brand overhaul and identity design.", 
    category: "Branding", 
    image: "https://picsum.photos/seed/tech/800/600",
    fullDescription: "A Series A tech startup needed a mature brand identity to match their innovative product. We worked closely with their founders to redefine their brand positioning, visual identity, and messaging framework to appeal to enterprise clients.",
    keyResults: [
      "Delivered a comprehensive brand guidelines document",
      "Designed a new logo, color palette, and typography system",
      "Created a suite of marketing and sales collateral",
      "Successfully launched the new brand at a major industry conference"
    ]
  },
  { 
    id: "ecommerce-redesign",
    title: "E-Commerce Redesign", 
    stat: "150%", 
    desc: "Increased conversion rate with a new website.", 
    category: "Web Development", 
    image: "https://picsum.photos/seed/ecommerce/800/600",
    fullDescription: "An established e-commerce retailer was experiencing high cart abandonment rates due to an outdated, clunky user interface. We completely redesigned and rebuilt their storefront using modern web technologies, focusing on a frictionless mobile checkout experience.",
    keyResults: [
      "150% increase in overall conversion rate",
      "Reduced average page load time by 3 seconds",
      "Decreased cart abandonment rate by 45%",
      "Significant improvement in mobile sales volume"
    ]
  }
];
