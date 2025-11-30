import { Product, BlogPost, Service, PricingPlan } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 299.99,
    category: "Electronics",
    image: "https://picsum.photos/400/400?random=1",
    description: "Experience high-fidelity sound with active noise cancelling and 30-hour battery life.",
    rating: 4.8
  },
  {
    id: 2,
    title: "Minimalist Smart Watch",
    price: 199.50,
    category: "Electronics",
    image: "https://picsum.photos/400/400?random=2",
    description: "Track your fitness and notifications with style. Water-resistant and durable.",
    rating: 4.5
  },
  {
    id: 3,
    title: "Italian Leather Bag",
    price: 149.00,
    category: "Fashion",
    image: "https://picsum.photos/400/400?random=3",
    description: "Handcrafted from genuine leather. Perfect for work or travel.",
    rating: 4.9
  },
  {
    id: 4,
    title: "Ergonomic Office Chair",
    price: 349.99,
    category: "Furniture",
    image: "https://picsum.photos/400/400?random=4",
    description: "Designed for all-day comfort with adjustable lumbar support.",
    rating: 4.7
  },
  {
    id: 5,
    title: "Mechanical Keyboard",
    price: 129.99,
    category: "Electronics",
    image: "https://picsum.photos/400/400?random=5",
    description: "Tactile switches for the ultimate typing experience. RGB backlighting included.",
    rating: 4.6
  },
  {
    id: 6,
    title: "Designer Sunglasses",
    price: 89.99,
    category: "Fashion",
    image: "https://picsum.photos/400/400?random=6",
    description: "UV400 protection with a sleek modern frame design.",
    rating: 4.4
  },
  {
    id: 7,
    title: "Ceramic Coffee Set",
    price: 49.99,
    category: "Home",
    image: "https://picsum.photos/400/400?random=7",
    description: "Beautifully glazed ceramic set including 4 cups and a pot.",
    rating: 4.8
  },
  {
    id: 8,
    title: "Smart Home Hub",
    price: 89.99,
    category: "Electronics",
    image: "https://picsum.photos/400/400?random=8",
    description: "Control your entire home with voice commands and automation.",
    rating: 4.3
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Sustainable Fashion",
    excerpt: "Exploring how the industry is shifting towards eco-friendly materials and practices.",
    date: "Oct 12, 2023",
    image: "https://picsum.photos/600/400?random=10",
    content: "Sustainable fashion is more than just a trend; it's a necessity. From recycled fabrics to ethical labor practices, brands are rethinking their impact on the planet..."
  },
  {
    id: 2,
    title: "Top 10 Gadgets for 2024",
    excerpt: "A curated list of the most innovative tech releases coming this year.",
    date: "Nov 05, 2023",
    image: "https://picsum.photos/600/400?random=11",
    content: "Get ready for a year of innovation. We've tested the latest prototypes and these are our top picks for the gadgets that will define 2024..."
  },
  {
    id: 3,
    title: "Creating a Minimalist Workspace",
    excerpt: "Tips and tricks to declutter your desk and boost productivity.",
    date: "Dec 01, 2023",
    image: "https://picsum.photos/600/400?random=12",
    content: "A cluttered desk leads to a cluttered mind. In this guide, we walk you through the essential steps to create a serene and productive workspace..."
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Express Delivery",
    description: "Get your products delivered within 24 hours anywhere in the country.",
    icon: "Truck"
  },
  {
    id: 2,
    title: "24/7 Support",
    description: "Our dedicated team is here to help you anytime, day or night.",
    icon: "Headphones"
  },
  {
    id: 3,
    title: "Secure Payment",
    description: "We use state-of-the-art encryption to ensure your data is safe.",
    icon: "ShieldCheck"
  },
  {
    id: 4,
    title: "Easy Returns",
    description: "Not satisfied? Return within 30 days for a full refund.",
    icon: "RefreshCw"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$0',
    features: ['Access to all products', 'Standard Shipping', 'Email Support']
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '$9.99/mo',
    features: ['Free Express Shipping', 'Priority Support', 'Early Access to Sales', '5% Discount on all items'],
    recommended: true
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$19.99/mo',
    features: ['Free Next-Day Shipping', '24/7 Dedicated Support', 'Exclusive Products', '15% Discount on all items']
  }
];

export const GALLERY_IMAGES = [
  "https://picsum.photos/600/600?random=20",
  "https://picsum.photos/600/800?random=21",
  "https://picsum.photos/800/600?random=22",
  "https://picsum.photos/600/600?random=23",
  "https://picsum.photos/600/800?random=24",
  "https://picsum.photos/800/600?random=25",
];